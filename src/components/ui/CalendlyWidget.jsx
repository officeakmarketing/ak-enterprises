"use client";

import { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    // 1. Intercept all calendly links to open in the popup instead of a new tab
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

    document.addEventListener("click", handleClick);

    // 2. Initialize the floating badge (with gold coloring instead of default blue)
    if (window.Calendly && document.readyState === "complete") {
      initBadge();
    } else {
      window.addEventListener("load", initBadge);
    }

    function initBadge() {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/ak-enterprises/call?hide_gdpr_banner=1&background_color=0b0b0c&text_color=ffffff&primary_color=c9a961",
          text: "Book a Free Audit",
          color: "#C9A961", // Brand gold
          textColor: "#0b0b0c", // Ink black
          branding: false,
        });
      }
    }

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("load", initBadge);
    };
  }, []);

  return null;
}
