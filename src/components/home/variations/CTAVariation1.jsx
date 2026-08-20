import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BackgroundSparkles from "@/components/BackgroundSparkles";

export default function CTAVariation1() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          
          {/* The Neumorphic Portal Container */}
          <div className="relative bg-[#080809] shadow-neo-pressed rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center border border-white/[0.03] overflow-hidden">
            {/* Sparkles + Gold Glow */}
            <BackgroundSparkles count={40} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,97,0.08),transparent_60%)] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-8 font-bold shadow-neo-pressed">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <span>Variation 1 • The Neumorphic Portal</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[3rem] text-white mb-6 font-serif italic leading-tight max-w-3xl mx-auto drop-shadow-md">
                No pitch. No pressure. Just clarity.
              </h2>

              <p className="text-warm-grey/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-light">
                We analyze your workflows and quantify exactly what your operational gaps are costing you. The findings are yours to keep.
              </p>

              {/* Raised Neumorphic Button */}
              <div className="flex flex-col items-center gap-6">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center bg-[#141416] text-brand-gold px-12 py-5 rounded-2xl text-sm font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-neo-raised border border-brand-gold/20 hover:border-brand-gold/50"
                >
                  <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></span>
                  <span className="relative z-10">Initiate Free Audit</span>
                </Link>

                <p className="text-warm-grey/50 text-[10px] font-mono tracking-widest uppercase">
                  Limited to 4 New Client Deployments Per Month
                </p>
              </div>
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
