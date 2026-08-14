import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AlmassCaseStudy() {
  return (
    <section className="py-32 relative">
      <ScrollReveal>
        <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold tracking-[0.2em] uppercase text-xs mb-8 font-bold ">
          Case Study  Almass Estates
        </div>
        <h2 className="text-4xl md:text-6xl mb-16 max-w-5xl leading-tight font-serif italic text-white">
          Zero staff. Instant AI-generated offers. Every landlord lead captured
          automatically.
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-12">
            <div className="group">
              <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> Situation
              </h3>
              <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                A UK estate agency with a guaranteed rent programme. Landlord
                acquisition was entirely manual. Staff qualifying properties and
                making offers by hand. Slow, inconsistent, expensive.
              </p>
            </div>

            <div className="group">
              <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> What Was Built
              </h3>
              <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                An AI-powered landlord acquisition system. Prospects submit property
                details and receive an instant AI-generated guaranteed rent offer
                within seconds  with no staff involvement. The system searches live
                rental listings within 0.25 miles, calculates a personalised offer,
                and displays the result instantly. Every lead is captured, qualified,
                routed into the CRM, and followed up automatically.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#111112] border border-muted-grey/30 p-10 rounded-2xl shadow-xl h-full">
              <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-8">
                System Architecture Delivered
              </h3>
              <ul className="space-y-4">
                {[
                  "Conversion-optimised landing page with dynamic property intake form",
                  "AI valuation engine using live market data",
                  "Instant guaranteed rent offer with annual income figure & confidence score",
                  "Automated CRM integration and lead routing",
                  "Personalised match and waiting list email sequences",
                  "Full automation connecting landing page, AI, CRM, and property database",
                  "Ongoing maintenance and 24/7 support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold/50 mt-2 flex-shrink-0"></div>
                    <div className="text-warm-grey/90 text-md leading-relaxed">{item}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/demo"
            className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-12 py-5 rounded-lg font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-gold/20"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></span>
            <span className="relative z-10">See the Live Demo</span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
