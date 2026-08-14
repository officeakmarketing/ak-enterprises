import ScrollReveal from "@/components/ScrollReveal";
import { Check, X, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TargetAudienceVariation4() {
  const rightFitPoints = [
    {
      title: "Consistent Inbound Revenue",
      desc: "Your service business generates steady income, but manual tasks are slowing down your growth.",
    },
    {
      title: "Missed Lead Bottlenecks",
      desc: "Calls go unanswered at night, weekend form submissions get delayed replies, and competitors win by responding faster.",
    },
    {
      title: "Ready for Infrastructure Ownership",
      desc: "You want a bespoke Business Operating System that you own permanently — not another monthly SaaS tool.",
    },
  ];

  const disqualifiers = [
    "Brand new pre-revenue businesses with zero customer volume",
    "Companies seeking vanity marketing/ads without fixing operations",
    "Price-sensitive shoppers looking for cheap freelancer rates",
    "Unwilling to commit to a 20-minute operational audit",
  ];

  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Qualification Framework • Option 4</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight mb-3">
              This is not for everyone.
            </h2>
            <p className="text-warm-grey/80 text-sm sm:text-base font-light">
              We take on a maximum of 4 new clients per month to guarantee bespoke engineering quality.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric Showcase Grid (7 Cols Hero + 5 Cols Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          {/* Main Hero Card: The Right Fit (7 Cols) */}
          <ScrollReveal delay={0.08} className="lg:col-span-7 flex">
            <div className="bg-gradient-to-br from-[#121214] to-[#0a0a0b] border border-brand-gold/45 rounded-3xl p-7 sm:p-10 lg:p-11 flex flex-col justify-between shadow-2xl relative overflow-hidden group w-full">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(201,169,97,0.06),transparent_70%)] pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-md">
                    IDEAL CLIENT PROFILE
                  </span>
                  <span className="text-xs font-mono text-brand-gold/80">
                    4 SLOTS / MONTH
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif italic text-white font-bold mb-4">
                  The Right Fit
                </h3>

                <p className="text-warm-grey/90 text-sm sm:text-base leading-relaxed font-light mb-8">
                  We engineer systems for service businesses that are already winning in the market but losing substantial margin to internal friction and slow lead follow-up.
                </p>

                <div className="space-y-5 mb-8">
                  {rightFitPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold mb-0.5">
                          {item.title}
                        </div>
                        <div className="text-warm-grey/80 text-xs sm:text-sm font-light leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-brand-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-mono text-brand-gold">
                  ✓ VERIFIED REVENUE CRITERIA
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-gold hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Book a Free Business Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Sidebar Card: Who We Turn Away (5 Cols) */}
          <ScrollReveal delay={0.16} className="lg:col-span-5 flex">
            <div className="bg-[#0e0e10]/80 border border-muted-grey/25 rounded-3xl p-7 sm:p-9 flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <ShieldAlert className="w-4 h-4 text-muted-grey" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-muted-grey uppercase">
                    WHO WE TURN AWAY
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif italic text-muted-grey font-bold mb-4">
                  Not The Right Fit
                </h3>

                <p className="text-muted-grey/90 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  To maintain strict execution quality, we turn away requests that fall outside our core infrastructure engineering model:
                </p>

                <div className="space-y-4 mb-8">
                  {disqualifiers.map((dis, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-muted-grey/20 flex items-center justify-center text-muted-grey shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-muted-grey/90 font-light leading-snug">
                        {dis}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141416] border border-muted-grey/20">
                <p className="text-[11px] font-mono text-warm-grey/70 leading-relaxed">
                  "If we cannot find a genuine bottleneck that is costing you money, we will tell you openly and you owe us nothing."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
