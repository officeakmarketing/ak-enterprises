"use client";

import { useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AriaDemoWidget from "@/components/home/AriaDemoWidget";

export default function LiveDemoIframe() {
  useEffect(() => {
    const scrollToDemo = () => {
      if (typeof window !== "undefined" && (window.location.hash === "#demo" || window.location.hash === "#property-demo")) {
        const performScroll = () => {
          const el = document.getElementById("demo") || document.getElementById("demo-iframe") || document.getElementById("property-demo");
          if (el) {
            // Scroll directly to the top of the demo element with an offset for the fixed navbar
            const navOffset = 90; // comfortable navbar clearance
            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
            const targetScroll = Math.max(0, elementPosition - navOffset);
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
          }
        };

        performScroll();
        const t1 = setTimeout(performScroll, 150);
        const t2 = setTimeout(performScroll, 450);
        const t3 = setTimeout(performScroll, 800);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }
    };

    scrollToDemo();
    window.addEventListener("hashchange", scrollToDemo);
    return () => window.removeEventListener("hashchange", scrollToDemo);
  }, []);

  return (
    <section className="w-full py-8 sm:py-16 md:py-24 border-b border-muted-grey/30">
      <ScrollReveal>
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <AriaDemoWidget />
        </div>
      </ScrollReveal>
    </section>
  );
}
