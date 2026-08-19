import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

export default function DemoSection() {
  const industries = [
    "Real Estate",
    "Legal Practices",
    "Healthcare & Clinics",
    "Home Services",
    "Manufacturing",
    "Consulting",
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <span>Live Deployment • Almass Estates</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-serif italic text-white leading-tight mb-5">
              This is not a demo. This is a live system we built for a real client.
            </h2>

            <div className="text-warm-grey/85 text-sm sm:text-base lg:text-lg leading-relaxed font-light space-y-3.5">
              <p>
                A UK estate agency needed to automate landlord acquisition for their guaranteed rent programme. We built an intelligent infrastructure that captures property details, generates an instant AI-powered guaranteed rent offer using live market data, and routes every lead into the CRM automatically.
              </p>
              <p>
                <span className="text-white font-medium">No staff involvement. No manual input.</span> Every lead captured, qualified, and followed up in seconds.
              </p>
              <p className="text-brand-gold font-medium pt-1">
                Try it below. Submit property details and experience exactly what their prospects experience.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Live Interactive Browser Frame */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full rounded-2xl overflow-hidden border border-brand-gold/40 bg-[#0e0e10] shadow-2xl mb-8 group">
            {/* Obsidian Browser Header Bar */}
            <div className="bg-[#141416] border-b border-muted-grey/25 px-4 py-3 flex items-center justify-between gap-3 select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                <span className="hidden sm:inline-block text-[11px] font-mono text-warm-grey/60 ml-2">
                  almass-estates-ai-engine.live
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></span>
                  Live System
                </span>
                <a
                  href="https://getguaranteedrent.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-warm-grey hover:text-white transition-colors"
                  aria-label="Open live demo in new tab"
                >
                  <span className="hidden md:inline">Open Full Screen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Live Web Application */}
            <div className="relative w-full h-[460px] sm:h-[540px] md:h-[620px] lg:h-[680px] bg-white">
              <iframe
                src="https://getguaranteedrent.co.uk/"
                className="w-full h-full border-none overscroll-contain"
                title="Interactive Almass AI Lead Acquisition Live System"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Universal Adaptation & Action Bar */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-4">
            <div>
              <p className="text-white text-sm sm:text-base font-medium mb-2">
                The same architecture adapts to any business that receives inbound enquiries:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {industries.map((ind, i) => (
                  <span
                    key={i}
                    className="text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-[#141416] border border-muted-grey/25 text-warm-grey/90"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 pt-2 lg:pt-0">
              <Link
                href="/demo"
                className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-7 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center shadow-md"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
                <span className="relative z-10">See What We Would Build For You &rarr;</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
