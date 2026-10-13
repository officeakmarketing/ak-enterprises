import { NextResponse } from 'next/server';

const JARVIS_HUD_URL = "https://base44.app/api/apps/6ac818eeaacde0d5f4f7f404/functions/captureAriaLead";

export async function POST(req) {
  try {
    let data = {};
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      data = await req.json().catch(() => ({}));
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const formData = await req.formData().catch(() => null);
      if (formData) {
        data = Object.fromEntries(formData.entries());
      }
    } else {
      const raw = await req.text().catch(() => "");
      try {
        data = JSON.parse(raw);
      } catch {
        data = Object.fromEntries(new URLSearchParams(raw).entries());
      }
    }

    const name = data.name || data.full_name || data.prospect_name || data.client_name || "Website Lead";
    const email = data.email || data.email_address || data.contact_email || "";
    const phone = data.phone || data.telephone || "";
    const business = data.business || data.company || "";
    const notes = data.notes || data.message || data.challenge || data.comments || "Website form submission";
    const budget = data.budget || "Not stated";
    const service_interest = data.service_interest || data.service || "General Inquiry";
    const timeZone = data.timeZone || data.timezone || Intl.DateTimeFormat().resolvedOptions?.().timeZone || "";

    const tz = (timeZone || "").toLowerCase();
    const isUS = tz.includes("america") || tz.includes("us/") || tz.includes("hawaii") || tz.includes("alaska");
    const routed_to = isUS ? "Christopher Strobach" : "UK team";

    const hudPayload = {
      action: "CREATE",
      session_id: data.session_id || `form_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      prospect_name: name,
      name: name,
      email: email,
      email_address: email,
      phone: phone,
      business: business,
      service_interest: service_interest,
      problem: notes,
      budget: budget,
      summary: `Website form submission from ${name}${business ? ` (${business})` : ''}: ${notes}`,
      notes: notes,
      contact_details: email || phone || "Not provided",
      routed_to: routed_to,
      source: data.source || "website_form",
      anonymous: false,
      transcript: `FORM SUBMISSION:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness: ${business}\nNotes: ${notes}`
    };

    let hudStatus = null;
    let hudError = null;
    let hudData = null;

    try {
      const hudRes = await fetch(JARVIS_HUD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hudPayload)
      });
      hudStatus = hudRes.status;
      hudData = await hudRes.json().catch(() => ({}));
    } catch (err) {
      console.error("Base44 form lead dispatch error:", err);
      hudError = err.message;
    }

    return NextResponse.json({
      success: hudStatus !== null ? (hudStatus >= 200 && hudStatus < 300) : false,
      lead_id: hudData?.lead_id || null,
      status: hudStatus,
      error: hudError
    });
  } catch (err) {
    console.error("Form submission handler error:", err);
    return NextResponse.json({ error: err.message || "Failed to process form" }, { status: 500 });
  }
}
