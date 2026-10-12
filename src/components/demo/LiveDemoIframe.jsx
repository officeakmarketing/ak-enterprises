"use client";

import { useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AriaDemoWidget from "@/components/home/AriaDemoWidget";

export default function LiveDemoIframe() {
  useEffect(() => {
    const scrollToDemo = () => {
      if (typeof window !== "undefined" && (window.location.hash === "#demo" || window.location.hash === "#property-demo")) {
        const performScroll = () => {
          const el = document.getElementById("demo-iframe") || document.getElementById("property-demo") || document.getElementById("demo");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            const rect = el.getBoundingClientRect();
            const targetScroll = Math.max(0, rect.top + window.pageYOffset + (rect.height / 2) - (window.innerHeight / 2));
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
          }
        };

        performScroll();
        const t1 = setTimeout(performScroll, 120);
        const t2 = setTimeout(performScroll, 350);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
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
