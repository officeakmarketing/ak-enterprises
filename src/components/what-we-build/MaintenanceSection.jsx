import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RiskReversal from "@/components/ui/RiskReversal";

export default function MaintenanceSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative bg-ink-black overflow-hidden border-b border-white/5">
      <ScrollReveal>
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          
          {/* HEADLINE */}
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-serif italic text-white mb-6 lg:mb-8 leading-[1.15]">
            We build it. We run it. You own it.
          </h2>
          
          {/* BODY */}
          <p className="text-warm-grey/85 text-base sm:text-lg lg:text-[1.1rem] leading-relaxed max-w-3xl mx-auto mb-12 lg:mb-16 font-light">
            Every system we build is maintained by us on an ongoing basis. These
            are our systems and our reputation is attached to how they perform.
            Monthly maintenance covers monitoring, updates, optimisations,
            integrations, and direct support. Minimum four months from go-live.
          </p>

          {/* RISK REVERSAL (Zero Box Shadows, 1px Gold Hairline) */}
          <div className="inline-block border border-brand-gold/40 bg-gradient-to-r from-brand-gold/[0.05] to-transparent p-6 sm:p-8 lg:p-10 mb-10 lg:mb-12 max-w-3xl w-full text-left relative overflow-hidden">
            {/* Subtle left glow */}
            <div className="absolute inset-y-0 left-0 w-8 bg-brand-gold/10 blur-xl pointer-events-none"></div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative z-10">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 border border-brand-gold/30 rounded-full bg-brand-gold/5">
                <span className="text-brand-gold text-lg">✦</span>
              </div>
              <RiskReversal className="text-white text-[0.95rem] sm:text-base lg:text-lg leading-[1.65] lg:leading-relaxed font-light italic" />
            </div>
          </div>

          {/* CTA */}
          <div>
            <Link
              href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-8 py-4 lg:px-10 lg:py-5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
              <span className="relative z-10">Book a Free Audit</span>
            </Link>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
