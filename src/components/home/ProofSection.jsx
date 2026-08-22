"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Lightbox from "@/components/Lightbox";

export default function ProofSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  return (
    <section className="w-full py-10 sm:py-16 lg:py-20 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <ScrollReveal>
        <div className="w-full 2xl:max-w-[1536px] 2xl:mx-auto bg-[#0e0e10]/95 border-y 2xl:border border-muted-grey/25 2xl:rounded-3xl px-4 py-7 sm:px-8 sm:py-10 md:p-10 lg:p-12 xl:p-14 2xl:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left Column: Copy, Result Block & Link (7 cols on desktop - Wider) */}
            <div className="lg:col-span-7 flex flex-col justify-between z-10 relative">
              {/* LABEL */}
              <div className="inline-block self-start border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-brand-gold text-[9px] sm:text-[10px] tracking-widest uppercase mb-3.5 sm:mb-5 font-bold">
                Case Study  Central London Barbershop
              </div>

              {/* HEADLINE */}
              <h2 className="text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.25rem] 2xl:text-[2.5rem] font-serif italic text-white leading-[1.22] mb-4 sm:mb-5">
                From pen and paper to £237,355 in 14 months.
              </h2>

              {/* BODY */}
              <div className="text-warm-grey/85 text-sm sm:text-base 2xl:text-lg leading-relaxed font-light space-y-3 sm:space-y-3.5 mb-5 sm:mb-8 max-w-2xl">
                <p>
                  Bright Face Barber was running entirely on manual processes. Phone bookings. No follow-up. No automation. No visibility into what was happening in the business.
                </p>
                <p>
                  We installed a complete Business Operating System. Automated booking. Instant follow-up. CRM pipeline. Google Business Profile ranking. Review generation. Reporting dashboard. 7,208 bookings processed automatically. £237,355 in verified revenue. The owner stopped answering the phone. The system did it for him.
                </p>
              </div>

              {/* RESULT BLOCK (Responsive Multi-Column Serif Italic Gold Numbers) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 sm:py-5 border-t border-muted-grey/25 mb-5 sm:mb-8">
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

            {/* Right Column: Clean Gold Hairline Border Dashboard Image + Testimonial Block */}
            <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none flex flex-col gap-3.5 sm:gap-5 relative z-10">
              {/* Clean Gold Hairline Border Dashboard Image with Lightbox */}
              <button 
                onClick={() => setIsLightboxOpen(true)}
                className="relative w-full rounded-2xl overflow-hidden border border-brand-gold/40 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-ink-black block"
                aria-label="Enlarge image"
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-black/80 text-white rounded-full p-3 border border-white/10 shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </div>
                </div>
                <Image
                  src="/bright-face-dashboard.png"
                  alt="Bright Face Barber Revenue Dashboard"
                  width={800}
                  height={500}
                  className="object-contain w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
                  priority={false}
                />
              </button>

              {/* TESTIMONIAL Glass Card */}
              <div className="bg-[#141416]/90 border-l-2 border-brand-gold border-y border-r border-muted-grey/25 p-3.5 sm:p-5 rounded-r-xl">
                <p className="text-white text-xs sm:text-sm italic leading-relaxed mb-2">
                  "Since launching the new site, people are booking nonstop. No more missed calls. It just works."
                </p>
                <div className="text-brand-gold text-[9.5px] sm:text-xs not-italic font-bold tracking-widest uppercase">
                  Talib M, CEO, Bright Face Barber
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Full Screen Lightbox Overlay */}
      {isLightboxOpen && (
        <Lightbox 
          images={["/bright-face-dashboard.png"]} 
          onClose={() => setIsLightboxOpen(false)} 
        />
      )}
    </section>
  );
}
