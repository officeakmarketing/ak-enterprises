import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTAVariation3() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Billboard Headline & CTA */}
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-6 font-bold w-fit mx-auto lg:mx-0 shadow-neo-pressed">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <span>Variation 3 • Split-Screen</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] text-white mb-8 font-serif italic leading-[1.1] max-w-xl mx-auto lg:mx-0">
                Start with a free business audit.
              </h2>

              <div className="flex flex-col items-center lg:items-start gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-[0.15em] overflow-hidden transition-transform duration-200 hover:scale-[1.02] shadow-lg w-full sm:w-auto"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
                  <span className="relative z-10">Book Your Free Audit &rarr;</span>
                </Link>
                <p className="text-warm-grey/60 text-[11px] font-mono tracking-widest uppercase">
                  Takes 60 seconds to book
                </p>
              </div>
            </div>

            {/* Right Column: Glassmorphic Details */}
            <div className="lg:w-1/2">
              <div className="bg-white/[0.02] backdrop-blur-md shadow-neo-raised rounded-3xl p-8 sm:p-10 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-5 blur-[100px] pointer-events-none"></div>
                
                <p className="text-warm-grey/90 text-sm sm:text-base leading-relaxed mb-8 font-light relative z-10">
                  We look at your lead capture, follow-up process, operational workflows, and reporting visibility. We identify every gap and quantify exactly what it is costing you. The findings are yours to keep regardless of whether we work together.
                </p>

                <div className="bg-ink-black/50 border border-brand-gold/20 p-5 rounded-xl mb-6 relative z-10">
                  <h4 className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-2">Our Guarantee</h4>
                  <p className="italic text-warm-grey/80 text-xs leading-relaxed">
                    "If we cannot find a single gap in your business that is costing you money, we will tell you honestly and you owe us nothing. We have never left an audit empty-handed."
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start relative z-10">
                  <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-brand-gold/70 uppercase border-b border-brand-gold/20 pb-1">
                    Limited to 4 New Client Deployments Per Month
                  </span>
                </div>
              </div>
            </div>

          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
