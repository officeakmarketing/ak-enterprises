"use client";

import Link from "next/link";
import AnimatedHeadline from "@/components/ui/AnimatedHeadline";
import HeroVideoPlayer from "./HeroVideoPlayer";
import RiskReversal from "@/components/ui/RiskReversal";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-ink-black min-h-[calc(100svh-4.25rem)] lg:h-[calc(100vh-4.25rem)] lg:min-h-[calc(100vh-4.25rem)] 2xl:h-[calc(100vh-4.75rem)] 2xl:min-h-[calc(100vh-4.75rem)] flex items-center border-b border-muted-grey/20 overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-4 flex flex-col items-center justify-center z-10 relative text-center">
        {/* Centered Copy & Actions */}
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          {/* Refined Glowing Badge */}
          <div className="inline-flex items-center justify-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-brand-gold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-[9px] sm:text-[10px] lg:text-xs mb-5 lg:mb-4 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
            <span>Business Operating Systems</span>
          </div>

          <AnimatedHeadline
            text={"Your business is losing clients right now. Not to your competitors.\nTo your own broken systems."}
            className="text-[1.75rem] sm:text-[2.5rem] md:text-4xl lg:text-4xl xl:text-5xl mb-5 sm:mb-6 lg:mb-5 leading-[1.25] sm:leading-[1.15] lg:leading-[1.1] font-serif italic text-white"
            highlightWords={["broken", "systems"]}
          />

          <p className="text-warm-grey/85 text-sm sm:text-base lg:text-base xl:text-lg max-w-[95%] sm:max-w-2xl mx-auto mb-8 sm:mb-8 lg:mb-7 leading-[1.65] sm:leading-[1.65] lg:leading-relaxed font-light">
            AK Enterprises builds Business Operating Systems for service businesses. The complete infrastructure that captures every lead, follows up automatically, and runs without the owner. UK. USA. EU.
          </p>

          <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
            <Link
              href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 rounded-lg text-xs lg:text-[11px] xl:text-xs 2xl:text-sm font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-h-[56px] text-center shadow-md"
            >
              {/* White specular glare sweep on hover */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
              <span className="relative z-10">Book a Free Business Audit</span>
            </Link>

            <RiskReversal className="max-w-[85%] mx-auto lg:max-w-none" />
            
            <div className="text-[9px] sm:text-[11px] text-brand-gold font-mono tracking-wider sm:tracking-widest uppercase mt-4 lg:mt-3 text-center opacity-90 whitespace-nowrap sm:whitespace-normal">
              ONE CLIENT. $301,340 IN VERIFIED REVENUE. 14 MONTHS.
            </div>
          </div>
        </div>

        {/* Video Placeholder (Hidden until filming is complete) */}
        {/*
        <div className="w-full max-w-4xl mx-auto mt-12 sm:mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-muted-grey/25 bg-[#0e0e10]/80 group cursor-pointer transition-transform duration-700 hover:scale-[1.02] shadow-2xl flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,97,0.15),transparent_60%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border border-brand-gold/80 bg-black/50 text-brand-gold backdrop-blur-md group-hover:scale-110 group-hover:bg-brand-gold/10 transition-all duration-500 shadow-[0_0_30px_rgba(201,169,97,0.15)] group-hover:shadow-[0_0_50px_rgba(201,169,97,0.3)]">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
