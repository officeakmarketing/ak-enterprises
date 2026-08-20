import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTAVarMinimal() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-white/20 bg-black overflow-hidden font-sans">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          
          <div className="border border-white/20 p-8 sm:p-12 lg:p-16 xl:p-20 relative bg-black">
            
            {/* Header Badge */}
            <div className="inline-block border border-white px-3 py-1 text-white text-[9px] sm:text-[10px] tracking-[0.25em] uppercase mb-8 font-bold mx-auto">
              Theme 3: Absolute Minimalism
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-8 font-normal leading-[1.05] max-w-3xl mx-auto uppercase tracking-tighter">
              Start with a free business audit. No pitch. Just clarity.
            </h2>

            {/* Body Narrative */}
            <div className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto space-y-4 mb-12 font-mono">
              <p>
                We look at your lead capture, follow-up process, operational workflows, and reporting visibility. We identify every gap and quantify exactly what it is costing you. We show you what a Business Operating System would look like for your specific business.
              </p>
            </div>

            {/* Guarantee Card (Flat Brutalist) */}
            <div className="border-l-4 border-white pl-6 sm:pl-8 max-w-2xl mx-auto mb-12 text-left">
              <h4 className="text-white text-[10px] font-bold tracking-[0.25em] uppercase mb-4">Our Guarantee</h4>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-serif italic">
                "If we cannot find a single gap in your business that is costing you money, we will tell you honestly and you owe us nothing. We have never left an audit empty-handed."
              </p>
            </div>

            {/* Client Limit Scarcity Banner */}
            <div className="mb-10">
              <span className="inline-block text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-black bg-white uppercase px-4 py-2">
                Limited to 4 New Client Deployments Per Month
              </span>
            </div>

            {/* CTA Button (Flat) */}
            <div className="w-full flex justify-center mb-6">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-transparent text-white border border-white px-8 sm:px-12 py-4 sm:py-5 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors w-full sm:w-auto text-center"
              >
                <span>Book Your Free Audit</span>
                <span className="ml-4 group-hover:translate-x-2 transition-transform">+</span>
              </Link>
            </div>

            {/* Sub-Notice */}
            <p className="text-white/50 text-[10px] sm:text-xs font-mono uppercase tracking-widest">
              Takes 60 seconds to book <span className="mx-2">—</span> Confirmed within 24 hours
            </p>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
