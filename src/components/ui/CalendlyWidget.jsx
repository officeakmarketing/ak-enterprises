"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CalendlyWidget() {
  const router = useRouter();
  useEffect(() => {
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
        } catch (err) {}
        // Redirect to the thank-you page preserving user activation token for video voice playback
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
