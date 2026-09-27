import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ExternalLink } from "lucide-react";
import AriaDemoWidget from "@/components/home/AriaDemoWidget";

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
              <span>Live Deployment • Aria Estates</span>
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

        {/* Frosted Glass Plate Presentation */}
        <ScrollReveal delay={0.1}>
          <div className="relative -mx-4 sm:mx-0 mb-8 sm:mb-12">
            
            {/* Ambient Base Glow (Behind Glass) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"></div>

            {/* The Glass Plate */}
            <div className="relative w-full rounded-none sm:rounded-3xl overflow-hidden bg-white/[0.01] backdrop-blur-[32px] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8),inset_0_1px_0px_rgba(255,255,255,0.05),inset_0_-1px_0px_rgba(255,255,255,0.01)] border border-white/[0.03]">
              
              {/* Subtle top edge highlight */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent opacity-50"></div>

              {/* Plate Body */}
              <div className="relative w-full py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-12 flex flex-col items-center">
                
                {/* Floating micro-accents */}
                <div className="absolute top-8 left-8 w-1 h-1 rounded-full bg-brand-gold/30"></div>
                <div className="absolute bottom-8 right-8 w-1 h-1 rounded-full bg-brand-gold/30"></div>

                {/* Optional context label (Subtle) */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] font-medium text-warm-grey/30">
                  Interactive Module
                </div>

                {/* The Widget */}
                <div className="relative z-10 w-full max-w-full overflow-hidden flex justify-center mt-6">
                  <AriaDemoWidget />
                </div>
              </div>
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
                href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-7 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center shadow-md"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
                <span className="relative z-10">Book a Free Audit</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
