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
    <div className="w-full bg-[#050505] py-4 sm:py-6 md:py-10 border-y border-white/5 overflow-hidden relative">
      <BackgroundSparkles count={30} />
      
      {/* Subtle Centered White Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 relative z-10">
        {/* 2x2 Grid on Mobile, Horizontal Flex Row on Desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap xl:flex-nowrap items-center justify-center gap-y-5 sm:gap-y-6 gap-x-2 md:gap-x-4 lg:gap-8 xl:gap-12 w-full">
          {metrics.map((metric, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col md:flex-row items-center md:items-baseline justify-center gap-1 md:gap-2 lg:gap-3 shrink-0">
                <span className={`font-bold font-sans text-gradient-gold-high-contrast tracking-tight ${idx === 0 ? 'text-2xl sm:text-3xl md:text-[1.5rem] lg:text-[1.7rem]' : 'text-lg sm:text-xl md:text-xl lg:text-2xl whitespace-nowrap'}`}>
                  {metric.value}
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] md:text-[9.5px] lg:text-xs font-sans tracking-[0.15em] md:tracking-[0.15em] lg:tracking-[0.25em] text-warm-grey/60 uppercase text-center whitespace-nowrap">
                  {metric.label}
                </span>
              </div>
              
              {/* Separator Cross */}
              {idx < metrics.length - 1 && (
                <span className="text-brand-gold/60 text-sm md:text-xl font-light shrink-0 pb-1 hidden md:block">
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
