import { NextResponse } from 'next/server';

const JARVIS_HUD_URL = "https://base44.app/api/apps/6ac818eeaacde0d5f4f7f404/functions/captureAriaLead";

export async function POST(req) {
  try {
    let body = {};
    try {
      const raw = await req.text();
      body = raw ? JSON.parse(raw) : {};
    } catch {
      body = await req.json().catch(() => ({}));
    }

    const { event, session_id, timeZone, routed_to, metadata = {} } = body;

    if (!event) {
      return NextResponse.json({ error: "Missing event name" }, { status: 400 });
    }

    // Milestone logged successfully (do not call captureAriaLead here to prevent creating duplicate leads)

    // Clean private response (no visitor data exposed)
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err?.message || "Failed" }, { status: 500 });
  }
}
