import ScrollReveal from "@/components/ScrollReveal";
import { Check, X, ShieldCheck } from "lucide-react";

export default function TargetAudienceSection() {
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
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Selectivity & Fit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight mb-3">
              This is not for everyone.
            </h2>
            <p className="text-warm-grey/80 text-sm sm:text-base font-light">
              We partner exclusively with businesses where our infrastructure delivers undeniable ROI.
            </p>
          </div>
        </ScrollReveal>

        {/* The Dual-Vault Monolith Container */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-5xl mx-auto bg-[#0e0e10]/95 border border-muted-grey/25 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Ambient Gold Bloom behind the left side */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,rgba(201,169,97,0.08),transparent_70%)] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-muted-grey/20">
              {/* Left Vault: The Right Fit */}
              <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-between relative group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block">
                          Qualified Profile
                        </span>
                        <h3 className="font-serif italic text-2xl text-white font-bold">
                          The Right Fit
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-2.5 py-1 rounded">
                      ACCEPTED
                    </span>
                  </div>

                  <p className="text-warm-grey/90 text-sm sm:text-base leading-relaxed font-light mb-6">
                    You run a service business generating consistent revenue. You are doing too much manually and you know it. You are ready to fix the infrastructure, not add another tool.
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {rightFitPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/90 text-xs sm:text-sm font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-muted-grey/15 flex items-center justify-between text-xs font-mono text-brand-gold">
                  <span>DEPLOYMENT READY</span>
                  <span>FULL OWNERSHIP</span>
                </div>
              </div>

              {/* Right Vault: Not The Right Fit */}
              <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#080809]/80 relative group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-muted-grey/15 border border-muted-grey/30 flex items-center justify-center text-muted-grey shrink-0">
                        <X className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-muted-grey uppercase block">
                          Exclusion Parameters
                        </span>
                        <h3 className="font-serif italic text-2xl text-muted-grey font-bold">
                          Not The Right Fit
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-grey bg-muted-grey/10 border border-muted-grey/25 px-2.5 py-1 rounded">
                      DECLINED
                    </span>
                  </div>

                  <p className="text-muted-grey/90 text-sm sm:text-base leading-relaxed font-light mb-6">
                    You have just launched and have no revenue yet. You want ads only and are not interested in systems. You are shopping for the cheapest freelance fix.
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {notRightFitPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-grey/80 text-xs sm:text-sm font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-grey/50 mt-2 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-muted-grey/15 flex items-center justify-between text-xs font-mono text-muted-grey/70">
                  <span>OUT OF SCOPE</span>
                  <span>DO NOT APPLY</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
