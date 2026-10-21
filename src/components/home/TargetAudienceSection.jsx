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
        
        {/* Dual Cards Grid: Two Separate Cards on Mobile & Desktop */}
        <ScrollReveal>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            
            {/* Left Card: ACCEPTED */}
            <div className="bg-[#0e0e10]/95 border border-emerald-500/25 hover:border-emerald-500/40 rounded-xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative shadow-xl transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-serif italic text-xl sm:text-2xl text-white font-bold tracking-wide uppercase">
                    ACCEPTED
                  </h3>
                </div>

                <ul className="space-y-3.5 sm:space-y-4">
                  {rightFitPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-white/95 text-sm sm:text-base font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 mt-2 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Card: NOT THE RIGHT FIT */}
            <div className="bg-[#09090b]/90 border border-muted-grey/25 hover:border-red-500/30 rounded-xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative shadow-xl transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                    <X className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-serif italic text-xl sm:text-2xl text-muted-grey font-bold tracking-wide uppercase">
                    NOT THE RIGHT FIT
                  </h3>
                </div>

                <ul className="space-y-3.5 sm:space-y-4">
                  {notRightFitPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-muted-grey/75 text-sm sm:text-base font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
