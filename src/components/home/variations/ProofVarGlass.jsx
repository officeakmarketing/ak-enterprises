"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Lightbox from "@/components/Lightbox";

export default function ProofVarGlass() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  return (
    <section className="w-full py-10 sm:py-16 lg:py-20 border-b border-white/5 bg-ink-black overflow-hidden relative">
      <ScrollReveal>
        <div className="w-full 2xl:max-w-[1536px] 2xl:mx-auto relative">
          
          {/* Ethereal Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent)] pointer-events-none rounded-[2rem]"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(201,169,97,0.08),transparent_60%)] pointer-events-none"></div>

          {/* Frosted Glass Container */}
          <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] 2xl:rounded-[2rem] px-4 py-8 sm:px-8 sm:py-12 md:p-12 lg:p-14 xl:p-16 2xl:p-20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center relative z-10">
              
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                {/* LABEL */}
                <div className="inline-flex items-center self-start bg-white/[0.05] backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-6 font-medium shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 mr-2 animate-pulse"></span>
                  Theme 2: Pure Glassmorphism
                </div>

                {/* HEADLINE */}
                <h2 className="text-[1.85rem] sm:text-4xl md:text-5xl font-serif italic text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 leading-[1.1] mb-6">
                  From pen and paper to £237,355 in 14 months.
                </h2>

                {/* BODY */}
                <div className="text-white/70 text-sm sm:text-base 2xl:text-lg leading-relaxed font-light space-y-4 mb-10 max-w-2xl">
                  <p>
                    Bright Face Barber was running entirely on manual processes. Phone bookings. No follow-up. No automation. No visibility into what was happening in the business.
                  </p>
                  <p>
                    We installed a complete Business Operating System. Automated booking. Instant follow-up. CRM pipeline. Google Business Profile ranking. Review generation. 7,208 bookings processed automatically.
                  </p>
                </div>

                {/* RESULT BLOCK (Floating Glass Cards) */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                  <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col justify-center items-center text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-serif italic font-normal text-white leading-tight mb-1 flex items-baseline">
                      <span className="text-sm mr-1">£</span>
                      <AnimatedCounter value="237355" />
                    </div>
                    <div className="text-[8px] sm:text-[10px] text-white/50 uppercase tracking-widest font-medium">
                      Verified revenue
                    </div>
                  </div>
                  <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col justify-center items-center text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-serif italic font-normal text-white leading-tight mb-1 flex items-center">
                      <AnimatedCounter value="7208" />
                    </div>
                    <div className="text-[8px] sm:text-[10px] text-white/50 uppercase tracking-widest font-medium">
                      Automated bookings
                    </div>
                  </div>
                  <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col justify-center items-center text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-serif italic font-normal text-white leading-tight mb-1 flex items-baseline">
                      <AnimatedCounter value="14" />
                      <span className="text-xs ml-1">mo</span>
                    </div>
                    <div className="text-[8px] sm:text-[10px] text-white/50 uppercase tracking-widest font-medium">
                      Time to result
                    </div>
                  </div>
                </div>

                {/* LINK */}
                <div>
                  <Link
                    href="/case-studies"
                    className="group inline-flex items-center gap-2 text-white text-xs sm:text-sm font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
                  >
                    <span>Read the full case study</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-2 font-serif italic font-normal">&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none flex flex-col gap-6 relative z-10">
                
                {/* Floating Glass Image */}
                <button 
                  onClick={() => setIsLightboxOpen(true)}
                  className="w-full rounded-3xl p-1 bg-white/[0.05] backdrop-blur-2xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] group overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
                >
                  <div className="rounded-[1.3rem] overflow-hidden bg-black/50">
                    <Image
                      src="/bright-face-dashboard.png"
                      alt="Bright Face Barber Revenue Dashboard"
                      width={800}
                      height={500}
                      className="object-contain w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                      priority={false}
                    />
                  </div>
                </button>

                {/* TESTIMONIAL Layered Glass Pill */}
                <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-5 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-white/60 to-transparent"></div>
                  <p className="text-white/90 text-sm italic leading-relaxed mb-3 font-serif">
                    "Since launching the new site, people are booking nonstop. No more missed calls. It just works."
                  </p>
                  <div className="text-white/50 text-[9px] not-italic font-medium tracking-widest uppercase">
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
