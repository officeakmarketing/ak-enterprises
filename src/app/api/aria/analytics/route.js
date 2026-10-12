import { NextResponse } from 'next/server';

// In-memory buffer to store recent analytics milestones
const globalAnalyticsStore = globalThis.__aria_analytics_store || [];
globalThis.__aria_analytics_store = globalAnalyticsStore;

export async function POST(req) {
  try {
    const body = await req.json();
    const { event, session_id, timeZone, routed_to, metadata = {} } = body;

    if (!event) {
      return NextResponse.json({ error: "Missing event name" }, { status: 400 });
    }

    const eventRecord = {
      event,
      session_id: session_id || "anonymous",
      timeZone: timeZone || "Unknown",
      routed_to: routed_to || "UK team",
      metadata,
      timestamp: new Date().toISOString()
    };

    // Store in global memory (keep latest 100 events)
    globalAnalyticsStore.push(eventRecord);
    if (globalAnalyticsStore.length > 100) {
      globalAnalyticsStore.shift();
    }

    console.log(`[Aria Analytics] Milestone logged: ${event} (Session: ${session_id})`);

    // Forward event to Base44 HUD
    let hudStatus = null;
    try {
      const hudRes = await fetch("https://base44.app/api/apps/6ac818eeaacde0d5f4f7f404/functions/captureAriaLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "analytics_milestone",
          event_name: event,
          session_id,
          routed_to: routed_to || "UK team",
          metadata
        })
      });
      hudStatus = hudRes.status;
    } catch (hudErr) {
      console.warn("[Aria Analytics] Base44 HUD dispatch notice:", hudErr.message);
    }

    return NextResponse.json({
      success: true,
      logged: eventRecord,
      hudStatus
    });
  } catch (err) {
    console.error("[Aria Analytics] Error logging milestone:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  let events = [...globalAnalyticsStore];
  if (sessionId) {
    events = events.filter(e => e.session_id === sessionId);
  }

  return NextResponse.json({
    total: events.length,
    events
  });
}
