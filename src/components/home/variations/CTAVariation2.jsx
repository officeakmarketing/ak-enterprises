import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Plus } from "lucide-react";

export default function CTAVariation2() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-[#050506] overflow-hidden relative">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          
          {/* The Editorial Document Wrapper */}
          <div className="relative border border-white/10 p-1 sm:p-2 bg-ink-black">
            
            {/* Architectural Crosshairs */}
            <div className="absolute -top-3 -left-3 text-white/20"><Plus className="w-6 h-6" strokeWidth={1} /></div>
            <div className="absolute -top-3 -right-3 text-white/20"><Plus className="w-6 h-6" strokeWidth={1} /></div>
            <div className="absolute -bottom-3 -left-3 text-white/20"><Plus className="w-6 h-6" strokeWidth={1} /></div>
            <div className="absolute -bottom-3 -right-3 text-white/20"><Plus className="w-6 h-6" strokeWidth={1} /></div>

            <div className="p-8 sm:p-12 lg:p-16 border border-white/10 flex flex-col md:flex-row justify-between gap-12 relative overflow-hidden">
              {/* CSS Diagonal Texture */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.015)_0px,rgba(255,255,255,0.015)_1px,transparent_1px,transparent_8px)] pointer-events-none"></div>
              
              {/* Left Column: Copy */}
              <div className="md:w-3/5 relative z-10 flex flex-col justify-center text-left">
                <div className="inline-flex items-center gap-2 border border-brand-gold bg-brand-gold text-ink-black px-3 py-1 text-[10px] sm:text-xs tracking-widest uppercase mb-6 font-bold w-fit">
                  <span>Variation 2 • Editorial Contract</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] text-white mb-6 font-serif italic leading-tight">
                  No pitch. No pressure. <br className="hidden sm:block"/>Just clarity.
                </h2>

                <p className="text-warm-grey/80 text-sm sm:text-base leading-relaxed mb-10 font-light">
                  We look at your lead capture, operational workflows, and reporting visibility. We quantify exactly what your gaps are costing you. The audit takes 20 minutes and the findings are yours to keep.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-brand-gold text-ink-black px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-white transition-colors duration-200"
                  >
                    Request An Audit
                  </Link>
                  <p className="text-warm-grey/50 text-[10px] font-mono tracking-widest uppercase max-w-[200px]">
                    Limited to 4 Deployments Per Month
                  </p>
                </div>
              </div>

              {/* Right Column: Stamped Guarantee */}
              <div className="md:w-2/5 relative z-10 flex flex-col justify-center">
                <div className="border border-brand-gold/30 p-6 sm:p-8 bg-[#0a0a0c] relative">
                  <div className="absolute -top-3 -left-3 bg-[#0a0a0c] px-2 text-brand-gold/50 text-xs font-mono">
                    [ CLAUSE 01 ]
                  </div>
                  <h3 className="text-brand-gold font-serif italic text-lg mb-3">The Zero-Risk Guarantee</h3>
                  <p className="text-warm-grey/70 text-xs sm:text-sm leading-relaxed font-light font-mono">
                    "If we cannot find a single gap in your business that is costing you money, we will tell you honestly and you owe us nothing. We have never left an audit empty-handed."
                  </p>
                </div>
              </div>

            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
