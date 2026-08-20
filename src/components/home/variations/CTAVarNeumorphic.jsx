import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTAVarNeumorphic() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Massive Neumorphic Well */}
        <div className="bg-[#050506] shadow-neo-pressed border border-white/5 rounded-[2rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <ScrollReveal>
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 shadow-neo-pressed bg-[#0a0a0c] border border-white/5 px-3.5 py-1.5 rounded-md text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-6 font-bold mx-auto">
              <span className="w-1.5 h-1.5 bg-brand-gold"></span>
              <span>Theme 1: Deep Neumorphism (Free Audit)</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white mb-6 sm:mb-8 font-serif italic leading-[1.1] max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Start with a free business audit. No pitch. No pressure. Just clarity.
            </h2>

            {/* Body Narrative */}
            <div className="text-warm-grey/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto space-y-4 mb-10 font-light">
              <p>
                We look at your lead capture, follow-up process, operational workflows, and reporting visibility. We identify every gap and quantify exactly what it is costing you. We show you what a Business Operating System would look like for your specific business.
              </p>
            </div>

            {/* Guarantee Card (Physical Raised Hardware) */}
            <div className="bg-[#121214] shadow-neo-raised border border-white/5 p-6 sm:p-8 max-w-2xl mx-auto rounded-2xl mb-10 overflow-hidden relative">
              <h4 className="text-brand-gold/80 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 text-left">Our Guarantee</h4>
              <p className="italic text-white/90 text-sm sm:text-base leading-relaxed text-left font-serif">
                "If we cannot find a single gap in your business that is costing you money, we will tell you honestly and you owe us nothing. We have never left an audit empty-handed."
              </p>
            </div>

            {/* Client Limit Scarcity Banner */}
            <div className="mb-8">
              <span className="inline-block text-[10px] sm:text-xs font-mono font-bold tracking-[0.16em] sm:tracking-widest text-brand-gold uppercase bg-[#050506] shadow-[0_2px_10px_rgba(0,0,0,0.8)_inset] border border-white/5 px-3.5 py-1.5 rounded-md">
                Limited to 4 New Client Deployments Per Month
              </span>
            </div>

            {/* CTA Button (Hardware switch) */}
            <div className="w-full flex justify-center mb-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-8 sm:px-12 py-4 sm:py-5 rounded-md text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.15em] transition-transform hover:-translate-y-0.5 shadow-neo-raised w-full sm:w-auto text-center"
              >
                <span>Book Your Free Audit &rarr;</span>
              </Link>
            </div>

            {/* Sub-Notice */}
            <p className="text-warm-grey/50 text-[11px] sm:text-xs font-mono">
              Takes 60 seconds to book • Confirmed within 24 hours
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
