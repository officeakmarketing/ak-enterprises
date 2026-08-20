import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

export default function DemoVarMinimal() {
  const industries = [
    "Real Estate",
    "Legal Practices",
    "Healthcare & Clinics",
    "Home Services",
    "Manufacturing",
    "Consulting",
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-white/20 bg-black overflow-hidden font-sans">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-block self-start border border-white px-3 py-1 text-white text-[9px] sm:text-[10px] tracking-[0.25em] uppercase mb-8 font-bold">
              Theme 3: Absolute Minimalism (Live System)
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-normal text-white leading-[1.05] mb-8 uppercase tracking-tighter">
              This is not a demo. This is a live system we built for a real client.
            </h2>

            <div className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed font-mono space-y-4 max-w-2xl">
              <p>
                A UK estate agency needed to automate landlord acquisition for their guaranteed rent programme. We built an intelligent infrastructure that captures property details, generates an instant AI-powered guaranteed rent offer using live market data, and routes every lead into the CRM automatically.
              </p>
              <p>
                <strong className="text-white">No staff involvement. No manual input.</strong> Every lead captured, qualified, and followed up in seconds.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Live Interactive Browser Frame - Flat Brutalist */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full border border-white/20 bg-black mb-12">
            
            {/* Minimal Header Bar */}
            <div className="bg-black border-b border-white/20 px-4 py-3 flex items-center justify-between gap-3 select-none">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-none bg-white"></span>
                  <span className="w-2.5 h-2.5 rounded-none bg-white"></span>
                  <span className="w-2.5 h-2.5 rounded-none bg-white"></span>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono text-white/60">
                  almass-estates-ai-engine.live
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-white uppercase tracking-[0.2em]">
                  <span className="w-1.5 h-1.5 bg-white"></span>
                  Live System
                </span>
                <a
                  href="https://getguaranteedrent.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-white hover:underline transition-all"
                >
                  <span className="hidden md:inline uppercase tracking-widest">Open</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Live Web Application */}
            <div className="relative w-full h-[460px] sm:h-[540px] md:h-[620px] lg:h-[680px] bg-white p-2">
              <iframe
                src="https://getguaranteedrent.co.uk/"
                className="w-full h-full border border-black overscroll-contain grayscale hover:grayscale-0 transition-all duration-700"
                title="Interactive Almass AI Lead Acquisition Live System"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Universal Adaptation & Action Bar */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-6 border-t border-white/20">
            <div>
              <p className="text-white text-sm sm:text-base font-bold mb-4 uppercase tracking-widest">
                Adaptable Architecture:
              </p>
              <div className="flex flex-wrap gap-0 border border-white/20">
                {industries.map((ind, i) => (
                  <span
                    key={i}
                    className={`text-[10px] sm:text-xs font-mono font-bold px-3 py-1.5 bg-black text-white ${i !== industries.length - 1 ? 'border-r border-white/20' : ''}`}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 pt-2 lg:pt-0">
              <Link
                href="/demo"
                className="group inline-flex items-center justify-center bg-white text-black px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] w-full sm:w-auto text-center hover:bg-black hover:text-white border border-white transition-colors"
              >
                <span>See What We Would Build For You</span>
                <span className="ml-3 group-hover:translate-x-1 transition-transform">+</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
