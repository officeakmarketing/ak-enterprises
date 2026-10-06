"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, XCircle, CheckCircle2, Zap, Clock, TrendingUp, TrendingDown } from "lucide-react";

export default function ArchitectureSection() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-[1.75rem] sm:text-[2.5rem] md:text-4xl lg:text-[2.75rem] font-serif italic text-white leading-tight mb-5 lg:mb-6">
              Marketing agencies send you traffic. <br/> We build the machine that catches it.
            </h2>
            <p className="text-warm-grey/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              If your follow-up relies on human memory, you are losing money. Here is the difference between a leaky business and a systematized machine.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          
          {/* THE LEAK (Before) */}
          <ScrollReveal delay={0.1}>
            <div className="bg-transparent border border-white/[0.03] rounded-3xl p-8 sm:p-10 relative overflow-hidden h-full grayscale-[50%] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-warm-grey">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif italic text-warm-grey">The Old Way (Leaky)</h3>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-white/5">
                
                {/* Step 1 */}
                <div className="relative flex items-center gap-6">
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-ink-black border border-white/10 shrink-0">
                    <span className="text-warm-grey text-[10px] font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-warm-grey text-sm font-bold mb-1">Traffic hits your site</h4>
                    <p className="text-warm-grey/50 text-xs">They leave because there is no immediate hook.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center gap-6">
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-ink-black border border-white/10 shrink-0">
                    <Clock className="w-3.5 h-3.5 text-warm-grey" />
                  </div>
                  <div>
                    <h4 className="text-warm-grey text-sm font-bold mb-1">Manual Follow-up</h4>
                    <p className="text-warm-grey/50 text-xs">You reply hours later when you have time.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center gap-6">
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-ink-black border border-white/10 shrink-0">
                    <XCircle className="w-3.5 h-3.5 text-warm-grey" />
                  </div>
                  <div>
                    <h4 className="text-warm-grey text-sm font-bold mb-1">Revenue Lost</h4>
                    <p className="text-warm-grey/50 text-xs">They already booked with a competitor.</p>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* THE MACHINE (After) */}
          <ScrollReveal delay={0.2}>
            <div className="bg-[#0a0a0c] border border-brand-gold/20 rounded-3xl p-8 sm:p-10 relative overflow-hidden h-full">
              
              <div className="flex items-center gap-3 mb-10 relative z-10">
                <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif italic text-brand-gold">The AK Machine</h3>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-brand-gold/20">
                
                {/* Step 1 */}
                <div className="relative flex items-center gap-6">
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-ink-black border border-brand-gold/40 shrink-0">
                    <span className="text-brand-gold text-[10px] font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">Traffic hits your site</h4>
                    <p className="text-warm-grey/70 text-xs">System captures data instantly via lead magnets.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center gap-6">
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-brand-gold text-ink-black shrink-0">
                    <Zap className="w-3.5 h-3.5 fill-ink-black" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">Aria AI Engages (3 Seconds)</h4>
                    <p className="text-brand-gold/90 text-xs">AI texts them, answers questions, and qualifies.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center gap-6">
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-ink-black border border-brand-gold/40 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">Appointment Booked</h4>
                    <p className="text-warm-grey/70 text-xs">You wake up to a booked calendar. Zero manual work.</p>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
