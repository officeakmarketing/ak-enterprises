"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Lightbox from "@/components/Lightbox";

export default function ProofVarNeumorphic() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  return (
    <section className="w-full py-10 sm:py-16 lg:py-20 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <ScrollReveal>
        <div className="w-full 2xl:max-w-[1536px] 2xl:mx-auto">
          
          {/* Deep Neumorphic Container */}
          <div className="bg-[#050506] shadow-neo-pressed border border-white/5 2xl:rounded-[2rem] px-4 py-8 sm:px-8 sm:py-12 md:p-12 lg:p-14 xl:p-16 2xl:p-20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                {/* LABEL */}
                <div className="inline-block self-start shadow-neo-pressed bg-[#0a0a0c] border border-white/5 px-3.5 py-1.5 rounded-md text-brand-gold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-6 font-bold">
                  Case Study Central London Barbershop
                </div>

                {/* HEADLINE */}
                <h2 className="text-[1.85rem] sm:text-4xl md:text-5xl font-serif italic text-white leading-[1.1] mb-6">
                  From pen and paper to £237,355 in 14 months.
                </h2>

                {/* BODY */}
                <div className="text-warm-grey/80 text-sm sm:text-base 2xl:text-lg leading-relaxed font-light space-y-4 mb-10 max-w-2xl">
                  <p>
                    Bright Face Barber was running entirely on manual processes. Phone bookings. No follow-up. No automation. No visibility into what was happening in the business.
                  </p>
                  <p>
                    We installed a complete Business Operating System. Automated booking. Instant follow-up. CRM pipeline. Google Business Profile ranking. Review generation. Reporting dashboard. 7,208 bookings processed automatically. £237,355 in verified revenue.
                  </p>
                </div>

                {/* RESULT BLOCK (Physical engraved lines) */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 sm:py-5 border-t border-t-white/10 border-b border-b-black mb-5 sm:mb-8 shadow-[0_1px_0_rgba(255,255,255,0.05)_inset]">
                  <div>
                    <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif italic font-normal text-gradient-gold-high-contrast leading-tight mb-0.5 sm:mb-1 flex items-baseline">
                      <span className="text-sm sm:text-lg mr-0.5 font-serif italic text-brand-gold">£</span>
                      <AnimatedCounter value="237355" />
                    </div>
                    <div className="text-[8.5px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                      Verified revenue
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif italic font-normal text-gradient-gold-high-contrast leading-tight mb-0.5 sm:mb-1 flex items-center">
                      <AnimatedCounter value="7208" />
                    </div>
                    <div className="text-[8.5px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                      Automated bookings
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif italic font-normal text-gradient-gold-high-contrast leading-tight mb-0.5 sm:mb-1 flex items-baseline">
                      <AnimatedCounter value="14" />
                      <span className="text-xs sm:text-base ml-0.5 sm:ml-1 font-serif italic text-brand-gold">mo</span>
                    </div>
                    <div className="text-[8.5px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                      Time to result
                    </div>
                  </div>
                </div>

                {/* LINK */}
                <div className="mb-2 sm:mb-0">
                  <Link
                    href="/case-studies"
                    className="group inline-flex items-center gap-2 text-brand-gold text-xs sm:text-sm font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-brand-gold/30 pb-0.5"
                  >
                    <span>Read the full case study</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none flex flex-col gap-6">
                
                {/* Raised Hardware Dashboard Wrapper */}
                <button 
                  onClick={() => setIsLightboxOpen(true)}
                  className="w-full rounded-2xl p-2 bg-[#121214] shadow-neo-raised border border-white/5 cursor-pointer focus:outline-none block hover:bg-[#151518] transition-colors"
                >
                  <div className="rounded-xl overflow-hidden border border-black bg-black">
                    <Image
                      src="/bright-face-dashboard.png"
                      alt="Bright Face Barber Revenue Dashboard"
                      width={800}
                      height={500}
                      className="object-contain w-full h-auto"
                      priority={false}
                    />
                  </div>
                </button>

                {/* TESTIMONIAL Hardware Engraved Pill */}
                <div className="bg-[#050506] shadow-neo-pressed border border-white/5 p-5 rounded-2xl">
                  <p className="text-white/90 font-medium text-xs sm:text-sm italic leading-relaxed mb-3">
                    "Since launching the new site, people are booking nonstop. No more missed calls. It just works."
                  </p>
                  <div className="text-brand-gold/60 text-[10px] not-italic font-bold tracking-[0.15em] uppercase">
                    Talib M, CEO, Bright Face Barber
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>

      {isLightboxOpen && (
        <Lightbox 
          images={["/bright-face-dashboard.png"]} 
          onClose={() => setIsLightboxOpen(false)} 
        />
      )}
    </section>
  );
}
