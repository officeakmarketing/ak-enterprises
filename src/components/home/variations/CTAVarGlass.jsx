import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTAVarGlass() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-white/5 bg-ink-black overflow-hidden relative">
      
      {/* Ethereal Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(201,169,97,0.05),transparent_60%)] pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          
          {/* Frosted Glass Container */}
          <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 xl:p-20 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white text-[10px] sm:text-xs tracking-widest uppercase mb-6 font-medium shadow-sm mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse"></span>
              <span>Theme 2: Pure Glassmorphism</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 sm:mb-8 font-serif italic leading-tight max-w-3xl mx-auto">
              Start with a free business audit. No pitch. No pressure. Just clarity.
            </h2>

            {/* Body Narrative */}
            <div className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto space-y-4 mb-10 font-light">
              <p>
                We look at your lead capture, follow-up process, operational workflows, and reporting visibility. We identify every gap and quantify exactly what it is costing you. We show you what a Business Operating System would look like for your specific business.
              </p>
            </div>

            {/* Guarantee Card (Floating Glass) */}
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 sm:p-8 max-w-2xl mx-auto rounded-[1.5rem] mb-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-white/60 to-transparent"></div>
              <h4 className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 text-left">Our Guarantee</h4>
              <p className="italic text-white/90 text-sm sm:text-base leading-relaxed text-left font-serif">
                "If we cannot find a single gap in your business that is costing you money, we will tell you honestly and you owe us nothing. We have never left an audit empty-handed."
              </p>
            </div>

            {/* Client Limit Scarcity Banner */}
            <div className="mb-8">
              <span className="inline-block text-[10px] sm:text-xs font-mono font-medium tracking-[0.16em] sm:tracking-widest text-white/80 uppercase bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full">
                Limited to 4 New Client Deployments Per Month
              </span>
            </div>

            {/* CTA Button (Glass Specular) */}
            <div className="w-full flex justify-center mb-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-white text-black px-8 sm:px-12 py-4 sm:py-5 rounded-full text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-[1.02] w-full sm:w-auto text-center"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-black/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none"></span>
                <span className="relative z-10">Book Your Free Audit &rarr;</span>
              </Link>
            </div>

            {/* Sub-Notice */}
            <p className="text-white/40 text-[11px] sm:text-xs font-mono">
              Takes 60 seconds to book • Confirmed within 24 hours
            </p>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
