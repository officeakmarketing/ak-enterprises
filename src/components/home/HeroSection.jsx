"use client";

import Link from "next/link";
import AnimatedHeadline from "@/components/ui/AnimatedHeadline";
import HeroVideoPlayer from "./HeroVideoPlayer";
import RiskReversal from "@/components/ui/RiskReversal";

export default function HeroSection() {
  return (
    <section className="relative bg-ink-black lg:h-[calc(100vh-4.25rem)] lg:min-h-[calc(100vh-4.25rem)] 2xl:h-[calc(100vh-4.75rem)] 2xl:min-h-[calc(100vh-4.75rem)] flex items-center border-b border-muted-grey/20 overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-12 flex flex-col items-center justify-center z-10 relative text-center">
        {/* Centered Copy & Actions */}
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          {/* Refined Glowing Badge */}
          <div className="inline-flex items-center justify-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-brand-gold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-[9px] sm:text-[10px] lg:text-xs mb-4 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
            <span>Business Operating Systems</span>
          </div>

          <AnimatedHeadline
            text={"Your business is losing clients right now. Not to your competitors.\nTo your own broken systems."}
            className="text-[2rem] sm:text-[2.5rem] md:text-4xl lg:text-4xl xl:text-5xl mb-4 lg:mb-5 leading-[1.15] lg:leading-[1.1] font-serif italic text-white"
            highlightWords={["broken", "systems"]}
          />

          <p className="text-warm-grey/85 text-[1rem] sm:text-base lg:text-base xl:text-lg max-w-[90%] sm:max-w-2xl mx-auto mb-6 lg:mb-8 leading-[1.65] lg:leading-relaxed font-light">
            AK Enterprises builds Business Operating Systems for service businesses. The complete infrastructure that captures every lead, follows up automatically, and runs without the owner. UK. USA. EU.
          </p>

          <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
            <Link
              href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 py-4 sm:py-3.5 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-lg text-xs lg:text-[11px] xl:text-xs 2xl:text-sm font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-fit text-center shadow-md"
            >
              {/* White specular glare sweep on hover */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
              <span className="relative z-10">Book a Free Business Audit</span>
            </Link>

            <RiskReversal />
            
            <div className="text-[10px] sm:text-[11px] text-brand-gold font-mono tracking-widest uppercase mt-1 lg:mt-2 text-center opacity-90">
              One client. £237,355 in verified revenue. 14 months.
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Video (Hidden until real content provided) */}
        {/*
        <div className="flex-1 w-full lg:max-w-[460px] xl:max-w-[530px] 2xl:max-w-[620px] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
          <div className="relative aspect-video rounded-3xl overflow-hidden p-2 bg-white/5 transition-transform duration-700 hover:scale-[1.02]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <HeroVideoPlayer src="/demo.mp4" />
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
