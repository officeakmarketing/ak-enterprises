"use client";

import { useState } from "react";
import { Check, X, ShieldCheck } from "lucide-react";

export default function TargetAudienceVariation2() {
  const [activeTab, setActiveTab] = useState("right-fit"); // "right-fit" | "not-right-fit"

  const rightFitPoints = [
    "You run an established service business with active, consistent revenue.",
    "You are losing leads, missed calls, or manual time and you know it.",
    "You have tried ads, staff, or SaaS tools and the operational bottlenecks remain.",
    "You are ready to install bespoke infrastructure and own it completely.",
  ];

  const notRightFitPoints = [
    "You just launched and have zero customers or revenue so far.",
    "You want surface-level ads only and are not interested in systems.",
    "You are shopping for the cheapest freelance option on the market.",
    "You are looking for a temporary fix rather than scalable infrastructure.",
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-bold shadow-neo-pressed">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Selectivity & Fit • Variation 2 (Interactive Toggle)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight mb-4">
            This is not for everyone.
          </h2>
        </div>

        {/* The Neumorphic Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center bg-ink-black shadow-neo-pressed rounded-full p-1.5 border border-white/5 relative">
            <button
              onClick={() => setActiveTab("right-fit")}
              className={`relative z-10 px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 ${
                activeTab === "right-fit" ? "text-brand-gold" : "text-warm-grey/50 hover:text-warm-grey"
              }`}
            >
              The Right Fit
            </button>
            <button
              onClick={() => setActiveTab("not-right-fit")}
              className={`relative z-10 px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 ${
                activeTab === "not-right-fit" ? "text-muted-grey" : "text-warm-grey/50 hover:text-warm-grey"
              }`}
            >
              Not Right Fit
            </button>

            {/* Active Pill Background */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full transition-all duration-500 ease-out bg-[#141416] shadow-neo-raised border border-white/5 ${
                activeTab === "right-fit" ? "left-1.5" : "left-[calc(50%+4px)]"
              }`}
            ></div>
          </div>
        </div>

        {/* The Dynamic Content Box */}
        <div className="relative w-full overflow-hidden rounded-3xl">
          
          {/* Right Fit State */}
          <div 
            className={`transition-all duration-500 absolute inset-0 ${
              activeTab === "right-fit" ? "opacity-100 translate-x-0 pointer-events-auto relative" : "opacity-0 -translate-x-12 pointer-events-none absolute"
            }`}
          >
            <div className="bg-[#0e0e10] shadow-neo-raised p-8 sm:p-10 lg:p-12 border border-white/5 rounded-3xl">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-white">Accepted Profile</h3>
                  <p className="text-warm-grey text-sm font-light">You are ready for bespoke infrastructure.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rightFitPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Not Right Fit State */}
          <div 
            className={`transition-all duration-500 absolute inset-0 ${
              activeTab === "not-right-fit" ? "opacity-100 translate-x-0 pointer-events-auto relative" : "opacity-0 translate-x-12 pointer-events-none absolute"
            }`}
          >
            <div className="bg-ink-black shadow-neo-pressed p-8 sm:p-10 lg:p-12 border border-white/[0.02] rounded-3xl">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-muted-grey/10 border border-muted-grey/30 flex items-center justify-center text-muted-grey shrink-0">
                  <X className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-muted-grey">Declined Profile</h3>
                  <p className="text-muted-grey/60 text-sm font-light">This infrastructure is out of scope.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {notRightFitPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-grey/50 shrink-0 mt-0.5" />
                    <p className="text-muted-grey/70 text-sm sm:text-base font-light leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
