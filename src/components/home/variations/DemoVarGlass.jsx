import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

export default function DemoVarGlass() {
  const industries = [
    "Real Estate",
    "Legal Practices",
    "Healthcare & Clinics",
    "Home Services",
    "Manufacturing",
    "Consulting",
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-white/5 bg-ink-black overflow-hidden relative">
      
      {/* Ethereal Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[linear-gradient(-45deg,rgba(201,169,97,0.04),transparent)] pointer-events-none"></div>

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-4 font-medium shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse"></span>
              <span>Theme 2: Pure Glassmorphism</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-serif italic text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 leading-tight mb-5">
              This is not a demo. This is a live system we built for a real client.
            </h2>

            <div className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed font-light space-y-3.5">
              <p>
                A UK estate agency needed to automate landlord acquisition for their guaranteed rent programme. We built an intelligent infrastructure that captures property details, generates an instant AI-powered guaranteed rent offer using live market data, and routes every lead into the CRM automatically.
              </p>
              <p>
                <span className="text-white font-medium">No staff involvement. No manual input.</span> Every lead captured, qualified, and followed up in seconds.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Live Interactive Browser Frame - Glass Upgrade */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full rounded-[2rem] p-1.5 bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group mb-8">
            <div className="rounded-[1.7rem] overflow-hidden border border-white/10 bg-black/50 relative z-10">
              
              {/* Frosted Browser Header Bar */}
              <div className="bg-white/[0.02] backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between gap-3 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-red-500 transition-colors"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-yellow-500 transition-colors"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-green-500 transition-colors"></span>
                  <span className="hidden sm:inline-block text-[11px] font-mono text-white/50 ml-2">
                    almass-estates-ai-engine.live
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/20 bg-white/[0.05] text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-ping"></span>
                    Live System
                  </span>
                  <a
                    href="https://getguaranteedrent.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-sans font-medium text-white/60 hover:text-white transition-colors"
                  >
                    <span className="hidden md:inline">Open Full Screen</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Embedded Live Web Application */}
              <div className="relative w-full h-[460px] sm:h-[540px] md:h-[620px] lg:h-[680px] bg-white opacity-95 group-hover:opacity-100 transition-opacity">
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
              <p className="text-white/90 text-sm sm:text-base font-medium mb-3 font-serif">
                The same architecture adapts to any business that receives inbound enquiries:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {industries.map((ind, i) => (
                  <span
                    key={i}
                    className="text-[10px] sm:text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/10 text-white/70"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 pt-2 lg:pt-0">
              <Link
                href="/demo"
                className="group relative inline-flex items-center justify-center bg-white text-black px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.15em] overflow-hidden transition-transform duration-300 hover:scale-[1.02] w-full sm:w-auto text-center"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-black/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none"></span>
                <span className="relative z-10">See What We Would Build For You &rarr;</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
