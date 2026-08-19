"use client";

import React from "react";

export default function TrustBar() {
  const metrics = [
    { value: "5", label: "ACTIVE CLIENTS" },
    { value: "UK & USA", label: "OPERATIONS" },
    { value: "£237K+", label: "VERIFIED REVENUE" },
    { value: "LIVE", label: "AI DEPLOYMENT" },
  ];

  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1c1c1f] via-[#0B0B0C] to-[#050505] py-8 md:py-10 border-y border-white/5 overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6">
        {/* Horizontal Scroll on Mobile, Centered on Desktop */}
        <div className="flex items-center justify-start lg:justify-center gap-6 sm:gap-8 lg:gap-12 overflow-x-auto hide-scrollbar whitespace-nowrap mask-edges">
          {metrics.map((metric, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center sm:items-baseline gap-2 sm:gap-3 shrink-0">
                <span className={`font-bold font-sans text-gradient-gold-high-contrast tracking-tight ${metric.value === '5' ? 'text-[1.4rem] sm:text-[1.7rem]' : 'text-xl sm:text-2xl'}`}>
                  {metric.value}
                </span>
                <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-warm-grey/60 uppercase mt-[2px] sm:mt-0">
                  {metric.label}
                </span>
              </div>
              
              {/* Separator Cross */}
              {idx < metrics.length - 1 && (
                <span className="text-brand-gold/60 text-lg sm:text-xl font-light shrink-0 pb-1">
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
