import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check, X } from "lucide-react";

export default function TargetAudienceSection() {
  const rightFitPoints = [
    "Established service business with consistent revenue",
    "Losing leads, calls, or time to manual processes",
    "Ready to install and own your infrastructure",
    "Decision maker with budget authority",
  ];

  const notRightFitPoints = [
    "Just launched with no revenue yet",
    "Want ads only, not interested in systems",
    "Looking to buy and configure software yourself",
    "Shopping for the cheapest freelance fix",
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* The Dual-Vault Monolith Container */}
        <ScrollReveal>
          <div className="max-w-5xl mx-auto bg-[#0e0e10]/95 border border-muted-grey/25 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Ambient glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-muted-grey/20">
              
              {/* Left Vault: ACCEPTED */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative group">
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                      <Check className="w-6 h-6" strokeWidth={3} />
                    </div>
                    <h3 className="font-serif italic text-3xl text-white font-bold tracking-wide uppercase">
                      ACCEPTED
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    {rightFitPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/95 text-base sm:text-lg font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 mt-2.5 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Vault: NOT THE RIGHT FIT */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#080809]/80 relative group">
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                      <X className="w-6 h-6" strokeWidth={3} />
                    </div>
                    <h3 className="font-serif italic text-3xl text-muted-grey font-bold tracking-wide uppercase">
                      NOT THE RIGHT FIT
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    {notRightFitPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-grey/70 text-base sm:text-lg font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
