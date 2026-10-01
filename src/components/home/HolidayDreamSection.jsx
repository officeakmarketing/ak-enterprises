"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Lightbox from "@/components/ui/Lightbox";

export default function HolidayDreamSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  return (
    <section className="w-full py-32 sm:py-40 lg:py-48 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <ScrollReveal>
        <div className="w-full 2xl:max-w-[1536px] 2xl:mx-auto bg-[#0e0e10]/95 border-y 2xl:border border-muted-grey/25 2xl:rounded-3xl px-4 py-7 sm:px-8 sm:py-10 md:p-10 lg:p-12 xl:p-14 2xl:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left Column: Copy, Result Block & Link (7 cols on desktop - Wider) */}
            <div className="lg:col-span-7 flex flex-col justify-between z-10 relative">
              {/* LABEL */}
              <div className="inline-block self-start border border-brand-gold/30 bg-brand-gold/5 px-2.5 sm:px-3.5 py-1 rounded-full text-brand-gold text-[8px] sm:text-[10px] tracking-wider sm:tracking-widest uppercase mb-3.5 sm:mb-5 font-bold whitespace-nowrap">
                Case Study • USA, Multi-Location Photography Experience
              </div>

              {/* HEADLINE */}
              <h2 className="text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.25rem] 2xl:text-[2.5rem] font-serif italic text-white leading-[1.22] mb-4 sm:mb-5">
                9 malls. 9 locations. A fully automated booking system serving thousands of families across the United States.
              </h2>

              {/* BODY REMOVED FOR HOMEPAGE BREATHING ROOM */}

              {/* RESULT BLOCK (Responsive Multi-Column Serif Italic Gold Numbers) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 sm:py-5 border-t border-brand-gold/20 mb-5 sm:mb-8">
                <div>
                  <div className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-serif italic font-normal text-gradient-gold-high-contrast leading-tight mb-0.5 sm:mb-1 flex items-baseline">
                    <AnimatedCounter value="9" />
                  </div>
                  <div className="text-[8.5px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                    Mall locations across the USA
                  </div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-serif italic font-normal text-gradient-gold-high-contrast leading-tight mb-0.5 sm:mb-1 flex items-center">
                    <AnimatedCounter value="11" />
                  </div>
                  <div className="text-[8.5px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                    Appointment types configured
                  </div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-serif italic font-normal text-gradient-gold-high-contrast leading-tight mb-0.5 sm:mb-1 flex items-baseline">
                    <AnimatedCounter value="7" />
                  </div>
                  <div className="text-[8.5px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                    US states covered simultaneously
                  </div>
                </div>
              </div>

              {/* HIGHLIGHTED PULL QUOTE */}
              <div className="mb-8 border-l-2 border-brand-gold/50 pl-4 py-1">
                <p className="text-white/90 italic font-serif text-sm sm:text-base leading-relaxed">
                  "Holiday Dream Photos works with some of the most recognized names in entertainment. Nick Cannon has publicly supported the Black Santa experience, a dedicated session offered at select locations celebrating Black Santa as a cultural milestone for families."
                </p>
              </div>

              {/* LINK */}
              <div className="mb-2 sm:mb-0">
                <Link
                  href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 rounded-lg text-xs font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md w-full sm:w-auto min-h-[56px]"
                >
                  <span>Book a Free Audit</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Image & Testimonial */}
            <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none flex flex-col gap-3.5 sm:gap-5 relative z-10">
              {/* Image with Lightbox */}
              <button 
                onClick={() => setIsLightboxOpen(true)}
                className="relative w-full rounded-2xl overflow-hidden border border-brand-gold/40 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-ink-black block aspect-[4/3] bg-muted-grey/10"
                aria-label="Enlarge image"
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-black/80 text-white rounded-full p-3 border border-white/10 shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </div>
                </div>

                {/* Mobile Tap Indicator */}
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-white/90 text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded border border-white/10 flex items-center gap-1.5 z-20 lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                  <span>Tap to enlarge</span>
                </div>

                <Image
                  src="/santa-case.png"
                  alt="Holiday Dream Photos"
                  fill
                  className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-700"
                  priority={false}
                />
              </button>


            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Full Screen Lightbox Overlay */}
      {isLightboxOpen && (
        <Lightbox 
          images={["/santa-case.png"]} 
          onClose={() => setIsLightboxOpen(false)} 
        />
      )}
    </section>
  );
}
