"use client";

import React from "react";
import BackgroundSparkles from "@/components/ui/BackgroundSparkles";

export default function TrustBar() {
  const metrics = [
    { value: "20+", label: "ACTIVE CLIENTS" },
    { value: "UK, USA & EU", label: "OPERATIONS" },
    { value: "$301K+", label: "VERIFIED REVENUE" },
    { value: "LIVE", label: "AI DEPLOYMENT" },
  ];

  return (
    <div className="w-full bg-[#050505] py-3.5 sm:py-5 md:py-6 border-y border-white/5 overflow-hidden relative">
      <BackgroundSparkles count={30} />
      
      {/* Subtle Centered White Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        {/* 2x2 Grid on Mobile, Horizontal Flex Row on Desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap xl:flex-nowrap items-center justify-center gap-y-3.5 sm:gap-y-4 gap-x-3 md:gap-x-4 lg:gap-6 xl:gap-7 w-full">
          {metrics.map((metric, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col md:flex-row items-center md:items-baseline justify-center gap-1 md:gap-1.5 lg:gap-2 shrink-0">
                <span className={`font-bold font-sans text-gradient-gold-high-contrast tracking-tight ${idx === 0 ? 'text-2xl sm:text-3xl md:text-[1.4rem] lg:text-[1.6rem]' : 'text-lg sm:text-xl md:text-lg lg:text-xl whitespace-nowrap'}`}>
                  {metric.value}
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] md:text-[9.5px] lg:text-[11px] font-sans tracking-[0.14em] md:tracking-[0.14em] lg:tracking-[0.2em] text-warm-grey/60 uppercase text-center whitespace-nowrap">
                  {metric.label}
                </span>
              </div>
              
              {/* Separator Cross */}
              {idx < metrics.length - 1 && (
                <span className="text-brand-gold/50 text-sm md:text-lg font-light shrink-0 pb-0.5 hidden md:block">
                  +
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
