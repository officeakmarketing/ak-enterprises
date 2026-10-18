"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CAPTURE_ARIA_LEAD_URL = "https://base44.app/api/apps/6ac818eeaacde0d5f4f7f404/functions/captureAriaLead";

export default function CalendlyWidget() {
  const router = useRouter();

  useEffect(() => {
    // 0. Inject Calendly widget CSS asynchronously on client mount without blocking FCP
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    // 1. Intercept all calendly links to open in the popup widget instead of a new tab
    const handleClick = (e) => {
      const link = e.target.closest("a");
      if (link && link.href && link.href.includes("calendly.com/ak-enterprises")) {
        e.preventDefault();
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/ak-enterprises/call?hide_gdpr_banner=1&background_color=0b0b0c&text_color=ffffff&primary_color=c9a961",
          });
        }
      }
    };

    // 2. Global listener for Calendly event_scheduled across all site CTA buttons
    const handleCalendlyMessage = (e) => {
      if (e.data && e.data.event === "calendly.event_scheduled") {
        localStorage.setItem("aria_has_booked", "true");
        localStorage.setItem("aria_valuation_followup_sent", "true");

        // Fire captureAriaLead directly with session_id so the booking lands in CRM
        try {
          const sessionId = localStorage.getItem("aria_session_id");
          const leadId = localStorage.getItem("aria_lead_id");
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
          const isUS = tz.toLowerCase().includes("america");

          // Extract invitee name/email from Calendly payload if available
          const payload = e.data?.payload || {};
          const invitee = payload?.invitee || {};
          const inviteeName = invitee?.name || "";
          const inviteeEmail = invitee?.email || "";

          const crmPayload = {
            session_id: sessionId || `booking_${Date.now()}`,
            lead_id: leadId || undefined,
            action: leadId ? "UPDATE" : "CREATE",
            source: "calendly_booking",
            email: inviteeEmail || undefined,
            email_address: inviteeEmail || undefined,
            prospect_name: inviteeName || undefined,
            contact_details: inviteeEmail || inviteeName || "Booked via Calendly",
            summary: `Booked a free 45-min audit via Calendly${inviteeName ? ` — ${inviteeName}` : ""}`,
            problem: "Booked audit — details to follow",
            trigger_followup_email: false,
            routed_to: isUS ? "Christopher Strobach" : "UK team",
            anonymous: false,
            transcript: "",
          };

          // Use sendBeacon for reliability on page navigation
          if (navigator.sendBeacon) {
            navigator.sendBeacon(
              CAPTURE_ARIA_LEAD_URL,
              new Blob([JSON.stringify(crmPayload)], { type: "application/json" })
            );
          } else {
            fetch(CAPTURE_ARIA_LEAD_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(crmPayload),
              keepalive: true,
            }).catch(() => { });
          }
        } catch (err) {
          console.warn("Calendly CRM capture error:", err);
        }

        // Clean up chat history
        try {
          const saved = localStorage.getItem("aria_chat_history");
          let list = saved ? JSON.parse(saved) : [];
          if (Array.isArray(list)) {
            list = list.filter(
              (m) =>
                !m.isValuationFollowup &&
                !m.content?.includes("I see you just tested our live valuation system")
            );
            if (!list.some(m => m.content?.includes("Your free audit is booked"))) {
              list.push({
                role: "assistant",
                content: "Perfect. Your free audit is booked! Redirecting you to your confirmation video..."
              });
            }
            localStorage.setItem("aria_chat_history", JSON.stringify(list));
          }
        } catch (err) { }

        // Redirect to the thank-you page
        try {
          router.push("/thank-you");
        } catch (err) {
          window.location.href = "/thank-you";
        }
      }
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("message", handleCalendlyMessage);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("message", handleCalendlyMessage);
    };
  }, []);

  return null;
}
