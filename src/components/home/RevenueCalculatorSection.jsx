"use client";

import { useState } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticElement from "@/components/ui/MagneticElement";
import Link from "next/link";

export default function RevenueCalculatorSection() {
  const [leads, setLeads] = useState(30);
  const [closeRate, setCloseRate] = useState(20);
  const [dealValue, setDealValue] = useState(1500);
  const [currency, setCurrency] = useState("$");

  const handleCurrencyToggle = (newCurrency) => {
    if (newCurrency === currency) return;
    
    setCurrency(newCurrency);
    // Approximate exchange rate conversion for a "smart" feel
    if (newCurrency === "$") {
      setDealValue((prev) => Math.round((prev * 1.3) / 100) * 100);
    } else {
      setDealValue((prev) => Math.round((prev / 1.3) / 100) * 100);
    }
  };

  const lostRevenue = Math.round(leads * (closeRate / 100) * dealValue);

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      {/* Extremely Subtle Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,169,97,0.015),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 px-2 sm:px-0">
            <h2 className="text-[1.75rem] sm:text-[2.5rem] md:text-4xl lg:text-[2.75rem] font-serif italic text-white leading-tight mb-5 lg:mb-6">
              Stop guessing. See exactly what your broken systems cost you.
            </h2>
            <p className="text-warm-grey/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Calculate the invisible money you're leaving on the table every single month due to missed calls, slow follow-ups, and uncaptured leads.
            </p>

            {/* Currency Toggle */}
            <div className="flex justify-center">
              <div className="inline-flex bg-white/5 rounded-full p-1 border border-white/10">
                <button
                  onClick={() => handleCurrencyToggle("$")}
                  className={`px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest transition-all duration-300 ${
                    currency === "$" ? "bg-brand-gold text-ink-black shadow-[0_0_15px_rgba(201,169,97,0.3)]" : "text-warm-grey hover:text-white"
                  }`}
                >
                  USD ($)
                </button>
                <button
                  onClick={() => handleCurrencyToggle("£")}
                  className={`px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest transition-all duration-300 ${
                    currency === "£" ? "bg-brand-gold text-ink-black shadow-[0_0_15px_rgba(201,169,97,0.3)]" : "text-warm-grey hover:text-white"
                  }`}
                >
                  GBP (£)
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center max-w-6xl mx-auto">
          {/* Sliders Side (Left) */}
          <ScrollReveal delay={0.1} className="lg:col-span-6 w-full">
            <div className="flex flex-col gap-10 sm:gap-12 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
              
              {/* Slider 1: Missed Leads */}
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <label className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-warm-grey">Leads coming in each month</label>
                  <span className="text-brand-gold font-serif italic text-2xl sm:text-3xl leading-none">{leads}<span className="text-xs sm:text-sm text-brand-gold/60 not-italic ml-1">/mo</span></span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="200" 
                  value={leads} 
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-0.5 bg-white/5 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-brand-gold [&::-webkit-slider-thumb]:rounded-full transition-all"
                />
              </div>

              {/* Slider 2: Close Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <label className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-warm-grey">Your current close rate (%)</label>
                  <span className="text-brand-gold font-serif italic text-2xl sm:text-3xl leading-none">{closeRate}<span className="text-xs sm:text-sm text-brand-gold/60 not-italic ml-0.5">%</span></span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="80" 
                  value={closeRate} 
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-0.5 bg-white/5 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-brand-gold [&::-webkit-slider-thumb]:rounded-full transition-all"
                />
              </div>

              {/* Slider 3: Deal Value */}
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <label className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-warm-grey">Average job value</label>
                  <span className="text-brand-gold font-serif italic text-2xl sm:text-3xl leading-none flex items-baseline">
                    <span className="text-lg sm:text-xl text-brand-gold/80 mr-0.5">{currency}</span>
                    {Intl.NumberFormat('en-GB').format(dealValue)}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100"
                  value={dealValue} 
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-0.5 bg-white/5 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-brand-gold [&::-webkit-slider-thumb]:rounded-full transition-all"
                />
              </div>

            </div>
          </ScrollReveal>

          {/* Results Side (Right) */}
          <ScrollReveal delay={0.2} className="lg:col-span-6 w-full h-full">
            <div className="bg-[#0a0a0c] border border-white/[0.03] rounded-3xl p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center justify-center relative overflow-hidden h-full min-h-[350px] lg:min-h-[450px]">
              <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-warm-grey mb-6 relative z-10">
                Lost Revenue Per Month
              </div>
              
              <div className="text-5xl sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-serif italic text-brand-gold leading-none mb-3 relative z-10 flex items-center justify-center">
                <span className="opacity-90 mr-1 sm:mr-2">{currency}</span>
                <AnimatedCounter value={lostRevenue} />
              </div>

              {/* Yearly Impact Text */}
              <div className="text-warm-grey/60 text-xs sm:text-sm font-light mb-6 relative z-10">
                That's <strong className="text-white font-medium">{currency}<AnimatedCounter value={lostRevenue * 12} /></strong> bleeding out every year.
              </div>

              {/* Explainer Line */}
              <div className="text-brand-gold/80 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest mb-10 relative z-10 max-w-[80%] leading-relaxed">
                Every enquiry that doesn't get an answer within minutes leaks money. This is what it's costing you.
              </div>

              <MagneticElement strength={15}>
                <Link
                  href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-8 py-3.5 sm:py-4 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-widest overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-[0_0_20px_rgba(201,169,97,0.15)] z-10"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
                  <span className="relative z-10">Stop The Bleeding</span>
                </Link>
              </MagneticElement>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
