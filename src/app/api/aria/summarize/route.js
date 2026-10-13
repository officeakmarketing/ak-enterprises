import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

// In-memory cache across server invocations to ensure 1 CRM record per conversation
const sessionLeadMap = globalThis.__aria_session_leads || new Map();
globalThis.__aria_session_leads = sessionLeadMap;

export async function POST(req) {
  try {
    const { 
      messages, 
      session_id, 
      lead_id,
      action: requestedAction,
      timeZone, 
      contact_details, 
      anonymous, 
      trigger_followup_email,
      send_to_hud = true 
    } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const anthropic = new Anthropic({ maxRetries: 2 });
    
    const transcript = messages.map(m => `${m.role.toUpperCase()}: ${m.content}`).join("\n\n");
    
    const prompt = `You are a CRM parser for AK Enterprises. Here is a chat transcript between a prospect and AI assistant Aria.
Extract the following in strict JSON format:
{
  "problem": "A 1-sentence description of the user's core problem, bottleneck, or missed revenue source (e.g. 'Missing 10 calls a week leading to lost bookings'). If not stated or if they only said a generic greeting, return 'Not stated'.",
  "budget": "The user's stated budget, deal size, or average customer/job value (e.g. '£50 per job', '$5,000 budget'). If not stated, return 'Not stated'.",
  "summary": "A punchy 3-bullet point summary of the conversation",
  "gap_report": "If the assistant calculated a 'Leak Cost Estimate' or 'Monthly leak', paste exactly that block here. Otherwise, leave empty string."
}

Transcript:
${transcript}

Return ONLY raw JSON. No markdown formatting, no intro text, no code blocks around the JSON. Just the JSON object.`;

    let parsed = {
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

    // Auto-detect contact details from user messages if not explicitly passed
    let finalContact = contact_details;
    if (!finalContact || finalContact === "Not provided") {
      const userText = messages.filter(m => m.role === "user").map(m => m.content).join(" ");
      const emails = userText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi) || [];
      const phones = userText.match(/(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/g) || [];
      if (emails.length > 0) finalContact = emails[0];
      else if (phones.length > 0) finalContact = phones[0];
      else finalContact = "Not provided";
    }

    const isAnon = anonymous !== undefined ? Boolean(anonymous) : (finalContact === "Not provided");

    // Track 1 record per conversation: look up existing lead_id by session
    const existingLeadId = lead_id || (session_id ? sessionLeadMap.get(session_id) : null);
    const isUpdate = Boolean(existingLeadId || requestedAction === "UPDATE" || requestedAction === "update");

    const hudPayload = {
      action: isUpdate ? "UPDATE" : "CREATE",
      lead_id: existingLeadId || undefined,
      id: existingLeadId || undefined,
      record_id: existingLeadId || undefined,
      session_id: session_id || "sess_unknown",
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
