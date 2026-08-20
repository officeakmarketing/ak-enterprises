import ScrollReveal from "@/components/ScrollReveal";
import { Check, X, ShieldCheck } from "lucide-react";

export default function TargetAudienceVariation1() {
  const rightFitPoints = [
    "You run an established service business with active, consistent revenue.",
    "You are losing leads, missed calls, or manual time and you know it.",
    "You have tried ads, staff, or SaaS tools and the operational bottlenecks remain.",
    "You are ready to install bespoke infrastructure and own it completely.",
  ];

  const notRightFitPoints = [
    "You just launched and have zero customers or revenue so far.",
    "You want surface-level ads only and are not interested in systems.",
    "You are shopping for the cheapest freelance option on the market.",
    "You are looking for a temporary fix rather than scalable infrastructure.",
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-bold shadow-neo-pressed">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Selectivity & Fit • Variation 1 (Data Table)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight mb-4">
              This is not for everyone.
            </h2>
            <p className="text-warm-grey/80 text-sm sm:text-base font-light">
              We partner exclusively with businesses where our infrastructure delivers undeniable ROI.
            </p>
          </div>
        </ScrollReveal>

        {/* The Horizontal Data Table */}
        <div className="flex flex-col gap-6">
          
          {/* Row 1: The Right Fit */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-[#0e0e10] border-l-4 border-brand-gold rounded-r-3xl p-8 sm:p-10 shadow-neo-raised relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-brand-gold/5 to-transparent pointer-events-none"></div>
              
              <div className="lg:w-1/3 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-white">The Right Fit</h3>
                </div>
                <span className="inline-block text-[10px] font-mono font-bold tracking-[0.2em] text-brand-gold uppercase">
                  Qualified Profile
                </span>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {rightFitPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm font-light leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Row 2: Not The Right Fit */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-[#080809] border-l-4 border-muted-grey/30 rounded-r-3xl p-8 sm:p-10 shadow-neo-pressed relative overflow-hidden group">
              
              <div className="lg:w-1/3 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-muted-grey/10 flex items-center justify-center text-muted-grey">
                    <X className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-muted-grey">Not The Right Fit</h3>
                </div>
                <span className="inline-block text-[10px] font-mono font-bold tracking-[0.2em] text-muted-grey/60 uppercase">
                  Exclusion Parameters
                </span>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {notRightFitPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-60 grayscale">
                    <X className="w-4 h-4 text-muted-grey shrink-0 mt-0.5" />
                    <p className="text-muted-grey text-sm font-light leading-relaxed line-through decoration-muted-grey/40">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
