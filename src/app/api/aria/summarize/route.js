import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

// In-memory cache across server invocations to ensure 1 CRM record per conversation
const sessionLeadMap = globalThis.__aria_session_leads || new Map();
globalThis.__aria_session_leads = sessionLeadMap;

export async function POST(req) {
  try {
    const { 
      messages, 
      transcript: rawTranscript,
      session_id, 
      lead_id,
      action: requestedAction,
      timeZone, 
      contact_details, 
      anonymous, 
      trigger_followup_email,
      send_to_hud = true 
    } = await req.json();

    // Construct full untouched transcript with USER: and ASSISTANT: lines
    let transcript = "";
    if (Array.isArray(messages) && messages.length > 0) {
      transcript = messages.map(m => `${(m.role || "").toUpperCase()}: ${m.content || ""}`).join("\n\n");
    } else if (typeof rawTranscript === "string") {
      transcript = rawTranscript;
    }

    if (!transcript.trim()) {
      return NextResponse.json({ ok: true, skipped: true, message: "No transcript provided" }, { status: 200 });
    }

    // Server-side guard: parse the transcript. If there is no USER: line with actual text, return ok and create nothing.
    const hasUserLineWithText = transcript
      .split("\n")
      .some(line => {
        const match = line.match(/^\s*USER\s*:\s*(.*)$/i);
        return match && match[1].trim().length > 0;
      });

    if (!hasUserLineWithText) {
      return NextResponse.json({
        ok: true,
        skipped: true,
        message: "No USER: line with actual text in transcript. Lead record creation skipped."
      }, { status: 200 });
    }

    const anthropic = new Anthropic({ maxRetries: 2 });
    
    const prompt = `You are a CRM parser for AK Enterprises. Here is a chat transcript between a prospect and AI assistant Aria.
Extract the following in strict JSON format:
{
  "name": "The visitor or prospect's name if provided in the conversation. If not stated, return 'Not stated'.",
  "problem": "A 1-sentence description of the user's core problem, bottleneck, or missed revenue source (e.g. 'Missing 10 calls a week leading to lost bookings'). If not stated or if they only said a generic greeting, return 'Not stated'.",
  "budget": "The user's stated budget, deal size, or average customer/job value (e.g. '£50 per job', '$5,000 budget'). If not stated, return 'Not stated'.",
  "summary": "A punchy 3-bullet point summary of the conversation",
  "gap_report": "If the assistant calculated a 'Leak Cost Estimate' or 'Monthly leak', paste exactly that block here. Otherwise, leave empty string."
}

Transcript:
${transcript}

Return ONLY raw JSON. No markdown formatting, no intro text, no code blocks around the JSON. Just the JSON object.`;

    let parsed = {
      name: "Not stated",
      problem: "Not stated",
      budget: "Not stated",
      summary: "",
      gap_report: ""
    };

    if (process.env.ANTHROPIC_API_KEY) {
      try {
        const response = await anthropic.messages.create({
          model: 'claude-sonnet-5-5',
          max_tokens: 500,
          system: "You are a JSON CRM parser. Output raw JSON only.",
          messages: [{ role: "user", content: prompt }]
        });
        
        let text = response.content?.[0]?.text || "";
        
        // Strip possible markdown code blocks if the LLM disobeys
        text = text.replace(/^```json/i, '').replace(/^```/i, '').replace(/```$/i, '').trim();
        
        try {
          parsed = { ...parsed, ...JSON.parse(text) };
        } catch (parseErr) {
          console.error("JSON parse error from LLM extraction:", parseErr, text);
        }
      } catch (llmErr) {
        console.error("LLM extraction failed in summarize, proceeding with raw transcript:", llmErr.message);
      }
    } else {
      console.warn("ANTHROPIC_API_KEY missing in summarize; proceeding with raw transcript forwarding.");
    }

    // Determine timezone and routing
    const tz = (timeZone || "").toLowerCase();
    const isUS = tz.includes("america") || tz.includes("us/") || tz.includes("hawaii") || tz.includes("alaska");
    const routed_to = isUS ? "Christopher Strobach" : "UK team";

    // Extract text from all USER lines in the transcript
    const userLines = transcript
      .split("\n")
      .filter(line => /^\s*USER\s*:/i.test(line))
      .map(line => line.replace(/^\s*USER\s*:\s*/i, "").trim())
      .filter(Boolean);
    const userMessages = userLines.join("\n");
    const userMessageList = Array.isArray(messages) 
      ? messages.filter(m => m.role === "user" && typeof m.content === "string" && m.content.trim().length > 0)
      : userLines.map(content => ({ role: "user", content }));

    // Regex pass over the user's messages to extract email, phone, and name before CRM write
    const emailMatches = userMessages.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi) || [];
    // Phone: broad match first (digit-bounded string up to 20 chars), then filter to ≥7 actual digits
    // This correctly handles: "07700 900 321", "07700 900123", "+44 7700 900321", "555-123-4567"
    const rawPhoneMatches = userMessages.match(/(\+?[\d][\d\s().+-]{5,19}[\d])/g) || [];
    const phoneMatches = rawPhoneMatches.filter(p => p.replace(/\D/g, "").length >= 7);

    // Name regex extraction: capture visitor's name from explicit declaration or direct response
    let extractedName = null;
    const stopWords = new Set([
      "looking", "interested", "wondering", "reaching", "trying", "hoping",
      "the", "a", "an", "here", "running", "good", "fine", "ok", "okay",
      "ready", "happy", "sure", "sorry", "not", "busy", "asking", "having",
      "curious", "currently", "based", "located", "owner", "founder", "ceo",
      "director", "manager", "calling", "writing", "testing", "checking",
      "losing", "spending", "earning", "working", "missing", "needing",
      "just", "already", "so", "very", "really", "all", "back", "thinking",
      "yes", "no", "hi", "hello", "hey", "aria", "ak", "enterprises"
    ]);

    const namePatterns = [
      /(?:my\s+name\s+is|my\s+name's|name\s+is|name's|name\s*[:=-])\s+([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'\-\s]{1,35})/i,
      /(?:call\s+me|you\s+can\s+call\s+me)\s+([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'\-\s]{1,30})/i,
      /(?:this\s+is|it's|its)\s+([A-Z][a-zÀ-ÿ]+(?:\s+[A-Z][a-zÀ-ÿ]+)?)(?:[.,!\s]|$)/,
      /(?:^|\b)(?:i'm|im|i\s+am)\s+([A-Z][a-zÀ-ÿ]+(?:\s+[A-Z][a-zÀ-ÿ]+)?)(?:[.,!\s]|$)/
    ];

    for (const pattern of namePatterns) {
      const match = userMessages.match(pattern);
      if (match && match[1]) {
        const candidate = match[1].trim().replace(/[.,!?;:]+$/, "").trim();
        const words = candidate.split(/\s+/).filter(Boolean);
        if (words.length >= 1 && words.length <= 3) {
          const hasStopWord = words.some(w => stopWords.has(w.toLowerCase()));
          if (!hasStopWord) {
            extractedName = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
            break;
          }
        }
      }
    }

    // Direct answer if Aria asked for their name
    if (!extractedName) {
      for (let i = 0; i < messages.length - 1; i++) {
        const current = messages[i];
        const next = messages[i + 1];
        if (current.role === "assistant" && next.role === "user") {
          const aText = (current.content || "").toLowerCase();
          if (
            aText.includes("who am i talking to") || 
            aText.includes("who am i speaking with") || 
            aText.includes("what's your name") || 
            aText.includes("what is your name") ||
            aText.includes("may i have your name") ||
            aText.includes("can i get your name")
          ) {
            const reply = (next.content || "").trim().replace(/[.,!?;:]+$/, "").trim();
            const words = reply.split(/\s+/).filter(Boolean);
            if (words.length >= 1 && words.length <= 3) {
              const allAlpha = words.every(w => /^[A-Za-zÀ-ÿ'-]+$/.test(w) && !stopWords.has(w.toLowerCase()));
              if (allAlpha) {
                extractedName = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
                break;
              }
            }
          }
        }
      }
    }

    // Fallback to LLM parsed name if regex missed an unconventional structure
    if (!extractedName && parsed.name && parsed.name !== "Not stated" && parsed.name !== "Not provided") {
      const parsedCandidate = String(parsed.name).trim().replace(/[.,!?;:]+$/, "");
      const words = parsedCandidate.split(/\s+/).filter(Boolean);
      if (words.length >= 1 && words.length <= 4 && !words.some(w => stopWords.has(w.toLowerCase()))) {
        extractedName = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
      }
    }

    const extractedEmail = emailMatches.length > 0 ? emailMatches[emailMatches.length - 1].trim() : (contact_details && contact_details.includes("@") ? contact_details.trim() : null);
    const extractedPhone = phoneMatches.length > 0 ? phoneMatches[phoneMatches.length - 1].trim() : null;

    let finalContact = extractedEmail || extractedPhone || (extractedName ? `${extractedName} (Chat)` : null) || contact_details;
    if (!finalContact || finalContact === "Not provided") {
      finalContact = "Not provided";
    }

    const isAnon = anonymous !== undefined 
      ? Boolean(anonymous) 
      : (!extractedEmail && !extractedName && finalContact === "Not provided");

    // Track 1 record per conversation: look up existing lead_id by session
    const existingLeadId = lead_id || (session_id ? sessionLeadMap.get(session_id) : null);
    const isUpdate = Boolean(existingLeadId || session_id || requestedAction === "UPDATE" || requestedAction === "update");

    const hudPayload = {
      action: isUpdate ? "UPDATE" : "CREATE",
      session_id: session_id || "sess_unknown",
      sessionId: session_id || "sess_unknown",
      lead_id: existingLeadId || undefined,
      id: existingLeadId || undefined,
      record_id: existingLeadId || undefined,
      _id: existingLeadId || undefined,
      overwrite: true,
      upsert: true,
      name: extractedName || undefined,
      prospect_name: extractedName || undefined,
      visitor_name: extractedName || undefined,
      full_name: extractedName || undefined,
      email: extractedEmail || undefined,
      email_address: extractedEmail || undefined,
      prospect_email: extractedEmail || undefined,
      phone: extractedPhone || undefined,
      anonymous: isAnon,
      routed_to: routed_to,
      contact_details: finalContact,
      problem: parsed.problem || "Not stated",
      budget: parsed.budget || "Not stated",
      summary: parsed.summary || "",
      gap_report: parsed.gap_report || "",
      trigger_followup_email: Boolean(trigger_followup_email),
      transcript: transcript
    };

    // Forward to Base44 HUD if session_id is provided and send_to_hud is enabled
    let hudStatus = null;
    let hudError = null;
    let savedLeadId = existingLeadId;

    if (send_to_hud && session_id) {
      try {
        const hudRes = await fetch("https://base44.app/api/apps/6ac818eeaacde0d5f4f7f404/functions/captureAriaLead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hudPayload)
        });
        hudStatus = hudRes.status;
        const hudData = await hudRes.json().catch(() => ({}));
        const returnedId = hudData?.lead_id || hudData?.id || hudData?.record_id || hudData?.data?.id || hudData?.data?.lead_id || hudData?.result?.id || hudData?.result?.lead_id;
        if (returnedId) {
          savedLeadId = returnedId;
        } else if (existingLeadId) {
          savedLeadId = existingLeadId;
        }

        if (session_id && savedLeadId) {
          sessionLeadMap.set(session_id, savedLeadId);
        }
      } catch (hudErr) {
        console.error("Base44 HUD dispatch error:", hudErr);
        hudError = hudErr.message;
      }
    }

    return NextResponse.json({
      ...parsed,
      lead_id: savedLeadId,
      name: extractedName,
      prospect_name: extractedName,
      action: isUpdate ? "UPDATE" : "CREATE",
      routed_to,
      contact_details: finalContact,
      hud_synced: hudStatus !== null ? (hudStatus >= 200 && hudStatus < 300) : false,
      hud_status: hudStatus,
      hud_error: hudError,
      hud_payload: hudPayload
    });
  } catch (e) {
    console.error("Summarize API Error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
