import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AriaCaseStudy() {
  const architectures = [
    "Conversion-optimised landing page with dynamic property intake form",
    "AI valuation engine using live market data within 0.25 miles",
    "Instant guaranteed rent offer with annual income figure & confidence score",
    "Automated CRM integration and real-time lead routing",
    "Personalised match and waiting list email sequences",
    "Full automation connecting landing page, AI, CRM, and property database",
    "Ongoing maintenance, monitoring and 24/7 support",
  ];

  return (
    <section className="w-full py-12 sm:py-16 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal>


          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] mb-12 sm:mb-14 max-w-5xl leading-tight font-serif italic text-white">
            Zero staff. Instant AI-generated offers. Every landlord lead captured automatically.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 sm:mb-16">
            {/* Left Column: Situation & Built (6 cols) */}
            <div className="lg:col-span-6 space-y-8 sm:space-y-10">
              <div className="group">
                <h3 className="text-brand-gold tracking-widest uppercase text-xs sm:text-sm font-bold mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-brand-gold/60 group-hover:w-10 transition-all duration-300"></span>
                  The Situation
                </h3>
                <p className="text-warm-grey/90 leading-relaxed text-sm sm:text-base lg:text-lg font-light pl-6 sm:pl-8 border-l border-brand-gold/30">
                  A UK estate agency with a guaranteed rent programme. Landlord acquisition was entirely manual  staff qualifying properties and calculating offers by hand. Slow, inconsistent, expensive, and unable to capture after-hours leads.
                </p>
              </div>

              <div className="group">
                <h3 className="text-brand-gold tracking-widest uppercase text-xs sm:text-sm font-bold mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-brand-gold/60 group-hover:w-10 transition-all duration-300"></span>
                  What We Built
                </h3>
                <p className="text-warm-grey/90 leading-relaxed text-sm sm:text-base lg:text-lg font-light pl-6 sm:pl-8 border-l border-brand-gold/30">
                  An AI-powered landlord acquisition system. Prospects submit property details and receive an instant AI-generated guaranteed rent offer within seconds  with zero staff involvement. The system searches live rental listings within 0.25 miles, calculates a personalised offer, and displays the result instantly. Every lead is captured, qualified, routed into the CRM, and followed up automatically.
                </p>
              </div>
            </div>

            {/* Right Column: System Architecture Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="bg-[#0e0e10]/95 border border-muted-grey/25 p-7 sm:p-9 rounded-2xl h-full shadow-xl">
                <h3 className="text-brand-gold tracking-widest uppercase text-xs sm:text-sm font-bold mb-6">
                  System Architecture Delivered
                </h3>
                <ul className="space-y-3.5 sm:space-y-4">
                  {architectures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></div>
                      <div className="text-warm-grey/90 text-sm sm:text-base leading-relaxed font-light">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/demo"
              className="inline-block text-brand-gold hover:text-white transition-colors duration-200 text-sm font-bold tracking-widest uppercase underline underline-offset-8 decoration-brand-gold/30 hover:decoration-white/50"
            >
              See the Live Demo &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
