"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Lightbox from "@/components/Lightbox";

export default function ProofVarMinimal() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  return (
    <section className="w-full py-10 sm:py-16 lg:py-20 border-b border-white/20 bg-black overflow-hidden relative font-sans">
      <ScrollReveal>
        <div className="w-full 2xl:max-w-[1536px] 2xl:mx-auto">
          
          {/* Brutalist Container */}
          <div className="bg-black border border-white/20 px-4 py-8 sm:px-8 sm:py-12 md:p-12 lg:p-14 xl:p-16 2xl:p-20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                {/* LABEL */}
                <div className="inline-block self-start border border-white px-3 py-1 text-white text-[9px] sm:text-[10px] tracking-[0.25em] uppercase mb-8 font-bold">
                  Theme 3: Absolute Minimalism
                </div>

                {/* HEADLINE */}
                <h2 className="text-[1.85rem] sm:text-4xl md:text-5xl font-normal text-white leading-[1.1] mb-8 uppercase tracking-tighter">
                  From pen and paper to £237,355 in 14 months.
                </h2>

                {/* BODY */}
                <div className="text-white/80 text-sm sm:text-base 2xl:text-lg leading-relaxed space-y-4 mb-10 max-w-2xl font-mono">
                  <p>
                    Bright Face Barber was running entirely on manual processes. Phone bookings. No follow-up. No automation. No visibility into what was happening in the business.
                  </p>
                  <p>
                    We installed a complete Business Operating System. Automated booking. Instant follow-up. CRM pipeline. Google Business Profile ranking. Review generation. 7,208 bookings processed automatically.
                  </p>
                </div>

                {/* RESULT BLOCK (Hard lines) */}
                <div className="grid grid-cols-3 gap-0 py-0 border-y border-white/20 mb-10">
                  <div className="p-4 border-r border-white/20">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight mb-2 flex items-baseline tracking-tighter">
                      <span className="text-sm mr-1">£</span>
                      <AnimatedCounter value="237355" />
                    </div>
                    <div className="text-[8px] sm:text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">
                      Verified revenue
                    </div>
                  </div>
                  <div className="p-4 border-r border-white/20">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight mb-2 flex items-center tracking-tighter">
                      <AnimatedCounter value="7208" />
                    </div>
                    <div className="text-[8px] sm:text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">
                      Automated bookings
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight mb-2 flex items-baseline tracking-tighter">
                      <AnimatedCounter value="14" />
                      <span className="text-xs ml-1 font-mono uppercase">mo</span>
                    </div>
                    <div className="text-[8px] sm:text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">
                      Time to result
                    </div>
                  </div>
                </div>

                {/* LINK */}
                <div>
                  <Link
                    href="/case-studies"
                    className="group inline-flex items-center gap-3 text-white text-xs sm:text-sm font-bold uppercase tracking-[0.25em]"
                  >
                    <span className="border-b-2 border-white pb-1 group-hover:bg-white group-hover:text-black transition-colors">Read the full case study</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-2 text-lg leading-none">+</span>
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none flex flex-col gap-8 relative z-10">
                
                {/* Flat Image */}
                <button 
                  onClick={() => setIsLightboxOpen(true)}
                  className="w-full border border-white/20 group cursor-pointer focus:outline-none block bg-white"
                >
                  <div className="overflow-hidden bg-white grayscale group-hover:grayscale-0 transition-all duration-500 p-2">
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

                {/* TESTIMONIAL Flat Block */}
                <div className="border-l-4 border-white pl-5 py-2">
                  <p className="text-white text-sm sm:text-base leading-relaxed mb-4 font-serif italic">
                    "Since launching the new site, people are booking nonstop. No more missed calls. It just works."
                  </p>
                  <div className="text-white/60 text-[9px] font-bold tracking-[0.2em] uppercase font-mono">
                    Talib M — CEO, Bright Face Barber
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
