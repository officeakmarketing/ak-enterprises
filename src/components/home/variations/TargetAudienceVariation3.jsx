import ScrollReveal from "@/components/ScrollReveal";
import { TableProperties, Check, X } from "lucide-react";
import Link from "next/link";

export default function TargetAudienceVariation3() {
  const criteria = [
    {
      category: "Monthly Revenue",
      rightFit: "Consistent £15k+ revenue with existing customer demand",
      notRightFit: "Pre-revenue or zero active clients",
    },
    {
      category: "Operational State",
      rightFit: "Losing leads, missed calls, or bogged down by manual work",
      notRightFit: "Looking for surface-level marketing ads only",
    },
    {
      category: "Technology Mindset",
      rightFit: "Wants bespoke, connected infrastructure they own permanently",
      notRightFit: "Shopping for cheap templates or renting more SaaS apps",
    },
    {
      category: "Commitment Level",
      rightFit: "Serious about scaling through full operational automation",
      notRightFit: "Looking for a temporary freelance hourly fix",
    },
  ];

  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-bold">
              <TableProperties className="w-3.5 h-3.5" />
              <span>Diagnostic Assessment • Option 3</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight mb-3">
              This is not for everyone.
            </h2>
            <p className="text-warm-grey/80 text-sm sm:text-base font-light">
              Direct operational comparison between qualified candidates and out-of-scope engagements.
            </p>
          </div>
        </ScrollReveal>

        {/* The Diagnostic Comparison Table */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-5xl mx-auto bg-[#0e0e10]/95 border border-muted-grey/25 rounded-3xl overflow-hidden shadow-2xl">
            {/* Table Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#141416] border-b border-muted-grey/25 px-6 sm:px-8 py-5 text-xs font-mono font-bold tracking-widest uppercase">
              <div className="hidden md:block md:col-span-3 text-warm-grey/70">
                Evaluation Parameter
              </div>
              <div className="md:col-span-5 text-brand-gold flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-gold" />
                <span>The Right Fit (Qualified)</span>
              </div>
              <div className="hidden md:flex md:col-span-4 text-muted-grey items-center gap-2">
                <X className="w-4 h-4 text-muted-grey" />
                <span>Not The Right Fit (Declined)</span>
              </div>
            </div>

            {/* Table Body Rows */}
            <div className="divide-y divide-muted-grey/15">
              {criteria.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 px-6 sm:px-8 py-6 gap-4 md:gap-0 items-center transition-colors duration-300 hover:bg-white/[0.01]"
                >
                  {/* Parameter Label */}
                  <div className="md:col-span-3">
                    <span className="text-xs font-mono font-bold text-warm-grey/90 uppercase tracking-wider block">
                      {item.category}
                    </span>
                  </div>

                  {/* The Right Fit Column */}
                  <div className="md:col-span-5 md:pr-6">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                        {item.rightFit}
                      </span>
                    </div>
                  </div>

                  {/* Not The Right Fit Column */}
                  <div className="md:col-span-4 pt-2 md:pt-0 border-t md:border-t-0 border-muted-grey/10">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-muted-grey/20 flex items-center justify-center text-muted-grey shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-muted-grey leading-relaxed font-light">
                        {item.notRightFit}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Footer Bar */}
            <div className="bg-[#121214] border-t border-muted-grey/20 px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-warm-grey/70 text-center sm:text-left">
                Audit takes 20 mins • Results are 100% yours to keep
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-brand-gold hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <span>Verify Your Business Eligibility &rarr;</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
