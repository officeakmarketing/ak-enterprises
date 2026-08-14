import ScrollReveal from "@/components/ScrollReveal";

export default function WhatWeBuildHero() {
  return (
    <section className="relative py-24 md:py-32 border-b border-muted-grey/30">
      <ScrollReveal>
        <h1 className="text-5xl md:text-7xl mb-8 font-serif italic text-white leading-tight max-w-4xl">
          Business Operating Systems. Built bespoke. Owned by you.
        </h1>
        <p className="text-warm-grey/90 text-xl md:text-2xl mb-12 max-w-3xl font-light leading-relaxed">
          Not a software subscription. Not a template. A complete operational
          system designed around your specific business, installed and maintained
          by us.
        </p>
        <div className="bg-[#111112]/80  border border-brand-gold/30 p-8 rounded-2xl max-w-3xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
          <p className="text-white text-lg font-light leading-relaxed relative z-10">
            Most businesses are paying monthly for tools that don't talk to each
            other. We build <span className="font-bold text-brand-gold">one connected system</span> that replaces all of them.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
