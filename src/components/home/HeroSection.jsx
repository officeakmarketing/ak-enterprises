"use client";

import Link from "next/link";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import HeroVideoPlayer from "./HeroVideoPlayer";

export default function HeroSection() {
  return (
    <section className="relative bg-ink-black px-4 sm:px-6 lg:px-0 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:py-0 lg:min-h-[calc(100vh-5.5rem)] 2xl:min-h-[calc(100vh-6.5rem)] flex items-center border-b border-muted-grey/20 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-8 xl:gap-12 2xl:gap-16 items-center justify-between z-10 relative">
        {/* Left Column: Copy & Actions */}
        <div className="flex-1 w-full lg:max-w-[490px] xl:max-w-[580px] 2xl:max-w-[680px]">
          {/* Refined Glowing Badge */}
          <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-brand-gold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-[9px] sm:text-[10px] lg:text-xs mb-4 sm:mb-5 lg:mb-3.5 2xl:mb-5 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
            <span>Business Operating Systems</span>
          </div>

          <AnimatedHeadline
            text={"Your business is losing clients right now. Not to your competitors.\nTo your own broken systems."}
            className="text-[1.85rem] sm:text-3xl md:text-4xl lg:text-[1.75rem] xl:text-[2.2rem] 2xl:text-[2.75rem] mb-4 sm:mb-5 lg:mb-4 2xl:mb-5 leading-[1.18] lg:leading-[1.14] font-serif italic text-white"
            highlightWords={["broken", "systems"]}
          />

          <p className="text-warm-grey/85 text-[0.95rem] sm:text-base lg:text-[0.88rem] xl:text-[0.95rem] 2xl:text-base mb-6 sm:mb-8 lg:mb-6 2xl:mb-8 leading-[1.65] lg:leading-relaxed font-light">
            AK Enterprises builds Business Operating Systems for service
            businesses  the complete infrastructure that captures every lead,
            automates every booking, and manages every client interaction
            without manual input.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 lg:gap-3.5 2xl:gap-4 w-full">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 py-4 sm:py-3.5 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-lg text-xs lg:text-[11px] xl:text-xs 2xl:text-sm font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center shadow-md"
            >
              {/* White specular glare sweep on hover */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
              <span className="relative z-10">Book a Free Business Audit</span>
            </Link>
            <Link
              href="/demo"
              className="group relative inline-flex items-center justify-center border border-brand-gold/50 bg-[#111112] text-brand-gold px-6 py-4 sm:py-3.5 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-lg text-xs lg:text-[11px] xl:text-xs 2xl:text-sm font-bold uppercase tracking-wider overflow-hidden transition-all duration-200 hover:bg-brand-gold hover:text-ink-black hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center"
            >
              <span className="relative z-10">See the Live Demo</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Clean Luxury Obsidian Video Frame (Zero Outer Glow) */}
        <div className="flex-1 w-full lg:max-w-[460px] xl:max-w-[530px] 2xl:max-w-[620px]">
          <div className="relative bg-[#0d0d0f] border border-brand-gold/35 aspect-video rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden transition-colors duration-300 hover:border-brand-gold/60">
            <HeroVideoPlayer src="/demo.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}
