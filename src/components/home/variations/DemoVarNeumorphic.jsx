import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

export default function DemoVarNeumorphic() {
  const industries = [
    "Real Estate",
    "Legal Practices",
    "Healthcare & Clinics",
    "Home Services",
    "Manufacturing",
    "Consulting",
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 shadow-neo-pressed bg-[#0a0a0c] border border-white/5 px-3.5 py-1.5 rounded-md text-brand-gold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-4 font-bold">
              <span className="w-1.5 h-1.5 bg-brand-gold"></span>
              <span>Theme 1: Deep Neumorphism (Live Deployment)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-serif italic text-white leading-tight mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              This is not a demo. This is a live system we built for a real client.
            </h2>

            <div className="text-warm-grey/85 text-sm sm:text-base lg:text-lg leading-relaxed font-light space-y-3.5">
              <p>
                A UK estate agency needed to automate landlord acquisition for their guaranteed rent programme. We built an intelligent infrastructure that captures property details, generates an instant AI-powered guaranteed rent offer using live market data, and routes every lead into the CRM automatically.
              </p>
              <p>
                <span className="text-white font-medium">No staff involvement. No manual input.</span> Every lead captured, qualified, and followed up in seconds.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Live Interactive Browser Frame - Physical Hardware Upgrade */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full rounded-2xl p-2 bg-[#121214] shadow-neo-raised border border-white/5 mb-8">
            <div className="rounded-xl overflow-hidden border border-black bg-black">
              
              {/* Obsidian Browser Header Bar */}
              <div className="bg-[#050506] border-b border-white/10 px-4 py-3 flex items-center justify-between gap-3 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1a1a1c] shadow-neo-pressed border border-white/5 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div></div>
                  <div className="w-3 h-3 rounded-full bg-[#1a1a1c] shadow-neo-pressed border border-white/5 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div></div>
                  <div className="w-3 h-3 rounded-full bg-[#1a1a1c] shadow-neo-pressed border border-white/5 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div></div>
                  <span className="hidden sm:inline-block text-[11px] font-mono text-warm-grey/60 ml-2">
                    almass-estates-ai-engine.live
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded shadow-neo-pressed bg-[#0a0a0c] border border-white/5 text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></span>
                    Live System
                  </span>
                  <a
                    href="https://getguaranteedrent.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-warm-grey hover:text-white transition-colors"
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
          </div>
        </ScrollReveal>

        {/* Universal Adaptation & Action Bar */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-4">
            <div>
              <p className="text-white text-sm sm:text-base font-medium mb-3">
                The same architecture adapts to any business that receives inbound enquiries:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {industries.map((ind, i) => (
                  <span
                    key={i}
                    className="text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#0a0a0c] shadow-neo-pressed border border-white/5 text-warm-grey/90"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 pt-2 lg:pt-0">
              <Link
                href="/demo"
                className="group inline-flex items-center justify-center bg-brand-gold text-ink-black px-7 py-3.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-[0.15em] border border-brand-gold transition-transform hover:-translate-y-0.5 shadow-neo-raised w-full sm:w-auto text-center"
              >
                <span>See What We Would Build For You &rarr;</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
