import ScrollReveal from "@/components/ScrollReveal";
import { Check, X, ShieldCheck } from "lucide-react";

export default function TargetAudienceVariation3() {
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
              <span>Selectivity & Fit • Variation 3 (Cinematic Stack)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight mb-4">
              This is not for everyone.
            </h2>
            <p className="text-warm-grey/80 text-sm sm:text-base font-light">
              We partner exclusively with businesses where our infrastructure delivers undeniable ROI.
            </p>
          </div>
        </ScrollReveal>

        {/* The Cinematic Stack */}
        <div className="flex flex-col gap-12 sm:gap-16">
          
          {/* Top Block: The Right Fit */}
          <ScrollReveal delay={0.1}>
            <div className="w-full bg-[#0e0e10] shadow-neo-raised rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.1),transparent_50%)] pointer-events-none"></div>
              
              <div className="flex flex-col lg:flex-row justify-between gap-12 relative z-10">
                <div className="lg:w-2/5">
                  <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-8">
                    <Check className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-gold uppercase block mb-3">
                    Qualified Profile
                  </span>
                  <h3 className="font-serif italic text-4xl sm:text-5xl text-white mb-6">
                    The Right Fit
                  </h3>
                  <p className="text-warm-grey text-lg font-light leading-relaxed">
                    You are ready to fix the infrastructure, not add another tool to your stack.
                  </p>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center">
                  <ul className="space-y-6">
                    {rightFitPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                        <span className="text-white/90 text-lg sm:text-xl font-light leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom Block: Not The Right Fit */}
          <ScrollReveal delay={0.2}>
            <div className="w-full bg-ink-black shadow-neo-pressed rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-white/[0.02] relative overflow-hidden group">
              
              <div className="flex flex-col lg:flex-row justify-between gap-12 relative z-10">
                <div className="lg:w-2/5">
                  <div className="w-16 h-16 rounded-2xl bg-muted-grey/10 border border-muted-grey/20 flex items-center justify-center text-muted-grey mb-8">
                    <X className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-muted-grey uppercase block mb-3">
                    Exclusion Parameters
                  </span>
                  <h3 className="font-serif italic text-4xl sm:text-5xl text-muted-grey mb-6">
                    Not The Right Fit
                  </h3>
                  <p className="text-muted-grey/60 text-lg font-light leading-relaxed">
                    This level of infrastructure is fundamentally out of scope for your current stage.
                  </p>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center">
                  <ul className="space-y-6">
                    {notRightFitPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 opacity-50">
                        <X className="w-6 h-6 text-muted-grey shrink-0 mt-0.5" />
                        <span className="text-muted-grey text-lg sm:text-xl font-light leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
