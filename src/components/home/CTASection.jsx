import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BackgroundSparkles from "@/components/ui/BackgroundSparkles";
import RiskReversal from "@/components/ui/RiskReversal";

export default function CTASection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <BackgroundSparkles count={50} />
      
      {/* Subtle Bottom-Center Spotlight Glow to match Footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.04),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-6 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
            <span>Free Operational Audit</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-white mb-6 sm:mb-8 font-serif italic leading-tight max-w-3xl mx-auto">
            Start with a free business audit. No pitch. No pressure. Just clarity.
          </h2>

          {/* Body Narrative */}
          <div className="text-warm-grey/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto space-y-4 mb-8 sm:mb-10 font-light">
            <p>
              We look at your lead capture, follow-up process, operational workflows, and reporting visibility. We identify every gap and quantify exactly what it is costing you. We show you what a Business Operating System would look like for your specific business.
            </p>
            <p className="text-white font-medium">
              The audit takes 20 minutes. The findings are yours to keep regardless of whether we work together.
            </p>
          </div>

          {/* Guarantee Card */}
          <div className="bg-[#0e0e10]/95 border border-brand-gold/30 p-5 sm:p-7 max-w-2xl mx-auto rounded-2xl mb-8 sm:mb-10 shadow-lg relative z-10">
            <RiskReversal className="italic" />
          </div>

          {/* Client Limit Scarcity Banner */}
          <div className="mb-8">
            <span className="inline-block text-[10px] sm:text-xs font-mono font-bold tracking-[0.16em] sm:tracking-widest text-brand-gold uppercase bg-brand-gold/10 border border-brand-gold/25 px-3.5 py-1.5 rounded-md">
              We take on a maximum of 4 new clients per month. Current availability: 2 slots.
            </span>
          </div>

          {/* CTA Button (Responsive Full-Width on Mobile) */}
          <div className="w-full flex justify-center mb-4">
            <Link
              href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-8 sm:px-12 py-4 sm:py-5 rounded-xl text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center shadow-lg"
            >
              {/* White specular glare sweep */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
              <span className="relative z-10">Book a Free Audit</span>
            </Link>
          </div>

          {/* Sub-Notice */}
          <p className="text-warm-grey/60 text-[11px] sm:text-xs font-mono">
            Takes 60 seconds. Pick a time and we confirm instantly.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
