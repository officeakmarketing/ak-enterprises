# ARIA BUILD GUIDE: Anthropic Edition
Step-by-step for the engineer | AK Enterprises | 7 Oct 2026

One file, everything needed. Follow it top to bottom.

## WHAT ANTONIOS PROVIDES (before you start)

1. An Anthropic API key from console.anthropic.com (create org, billing, API key). Budget 20-40 USD per month is plenty for site traffic.
2. The Calendly audit link (already exists on the site).

Everything else is yours.

## STEP 1. Install the SDK

npm install @anthropic-ai/sdk

Add to .env (server-side only, NEVER exposed to the client):
ANTHROPIC_API_KEY=sk-ant-...

## STEP 2. Create the API route

Next.js App Router: app/api/aria/route.js

import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `[paste the full system prompt from the Aria spec doc, section 3 - it is final, do not edit]`;

export async function POST(req) {
  // simple rate limit: max 20 messages per session
  const { messages, session } = await req.json();
  if (!Array.isArray(messages) || messages.length > 20) {
    return NextResponse.json({ error: 'Session limit reached. Book the audit: [CALENDLY_LINK]' }, { status: 429 });
  }

  const anthropic = new Anthropic(); // reads ANTHROPIC_API_KEY from env
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5', // latest Sonnet; check console for the current ID
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      temperature: 0.7,
      messages, // only the user/assistant turns, strip anything else first
    });
    const reply = response.content[0]?.text ?? '';
    return NextResponse.json({ reply });
  } catch (e) {
    return NextResponse.json({ reply: 'Our systems hiccuped for a second. Grab the free 20-minute audit directly: [CALENDLY_LINK]' });
  }
}

Rules on this route:
- Sanitize: only pass through { role, content } where role is 'user' or 'assistant'. Nothing else from the client reaches Anthropic.
- 300 max_tokens keeps replies short and costs tiny.
- No server-side conversation storage. The client holds history in localStorage.

## STEP 3. The lead capture hook

When Aria's flow reaches the contact-capture stage (see the flow in the spec: she asks for email, then offers the booking link), the frontend fires one POST to the AK lead hub, form-urlencoded:

POST https://superagent-5d8a2104.base44.app/functions/akTeamHub
Content-Type: application/x-www-form-urlencoded

action=lead
&prospect_name=[name]
&email=[email]
&phone=[phone if given]
&business=[business if given]
&service_interest=[what they asked about, mapped to: AI Website (one-pager) / AI Website (multi-page) / Aria AI Receptionist / Business Operating System / Real Estate Acquisition System / Not sure yet]
&notes=[2-3 sentence summary of what they said and their pain]
&rep_name=Aria (website)
&source=website-aria
&event=Outreach / other

Fire it once per conversation, when the email is captured OR when the Calendly button is clicked, whichever comes first. Guard with a flag so it never double-posts. Required fields: prospect_name, email, rep_name. The lead lands in the founders' system instantly.

## STEP 4. The widget

Spec is unchanged from the Aria spec doc, section 2 and 4. The highlights:
- Floating gold button, bottom right, loads after first scroll.
- Panel: #0a0a0a background, #d4af37 accents, Space Grotesk headings. On screens under 640px it opens full-screen, keyboard-safe, input pinned to bottom.
- First message with three quick-reply chips: "What do you build?", "How much?", "Book the free audit".
- Typing indicator (three gold dots) for at least 400ms before the first reply so it feels considered.
- Footer microcopy: "Aria is AK's AI assistant. Your details are used to respond to your enquiry."

## STEP 5. Acceptance test (run all five, then report back)

1. "How much for a website?" returns the from-prices, nothing invented.
2. "I just launched my business" gets a kind disqualification, no pitch, no booking push.
3. Full happy path: business type, missed calls, email captured. Verify the lead appears for the founders (they will confirm in their system) with source=website-aria.
4. Temporarily break the API key. The fallback message with the Calendly link appears, no dead panel, no stack trace.
5. Full flow on a real phone, one hand.

## TIMING

Priority order if the night is short: route (step 2), lead hook (step 3), widget (step 4). A working brain that captures leads beats a pretty panel that captures nothing.

## SECURITY NOTES

- The API key lives in server env only. If it is ever in a client bundle, rotate it immediately.
- The lead endpoint above is public by design (it is a lead form endpoint). It accepts only lead fields, nothing sensitive.
- Strip any HTML from user input before sending to the API and before storing.

## QUESTIONS

Anything not in this doc: ask Antonios, who routes to Jarvis. Do not improvise prices, claims or statistics in Aria's answers. The prompt handles all of it.