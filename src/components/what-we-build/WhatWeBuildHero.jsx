import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function WhatWeBuildHero() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 min-h-[calc(100vh-4.25rem)] 2xl:min-h-[calc(100vh-4.75rem)] flex flex-col border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 my-auto lg:mt-0 lg:mb-auto pt-8 sm:pt-12 lg:pt-8 xl:pt-10 pb-16 lg:pb-12 xl:pb-20">
        <ScrollReveal>
          {/* HEADLINE */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem] font-serif italic text-white leading-[1.2] lg:leading-[1.15] max-w-4xl mb-4 lg:mb-3 xl:mb-5">
            Business Operating Systems.<br />
            Built bespoke. Owned by you.
          </h1>

          {/* BODY */}
          <p className="text-warm-grey/85 text-[0.95rem] sm:text-base lg:text-base xl:text-[1.1rem] font-light leading-relaxed max-w-3xl mb-8 lg:mb-5 xl:mb-8">
            Not a software subscription. Not a template. A complete operational
            system designed around your specific business, installed and maintained
            by us.
          </p>

          {/* CONVERSION ELEMENT: PAIN LINE (Zero Right Border Radius) */}
          <div className="bg-gradient-to-r from-brand-gold/[0.05] to-[#0e0e10]/60 border-l-2 border-brand-gold border-y border-r border-white/[0.06] p-4 sm:p-6 lg:p-5 xl:p-6 rounded-none max-w-2xl relative overflow-hidden mb-8 lg:mb-6 xl:mb-8 shadow-lg">
            {/* Subtle left glow */}
            <div className="absolute inset-y-0 left-0 w-8 bg-brand-gold/10 blur-xl pointer-events-none"></div>
            <p className="text-white text-[0.9rem] sm:text-base lg:text-sm xl:text-base font-light leading-[1.65] lg:leading-relaxed relative z-10">
              Most businesses are paying monthly for tools that don't talk to each other. We build{" "}
              <span className="font-bold text-brand-gold">one connected system</span> that replaces all of them.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 py-4 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-xs xl:text-sm font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] text-center shadow-md"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
              <span className="relative z-10">Book a Free Business Audit &rarr;</span>
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center border border-brand-gold/40 hover:border-brand-gold bg-[#111112] text-brand-gold px-6 py-4 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-xs xl:text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-brand-gold hover:text-ink-black text-center"
            >
              See the Live Demo
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
