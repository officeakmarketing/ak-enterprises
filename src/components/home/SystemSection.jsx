import ScrollReveal from "@/components/ScrollReveal";

export default function SystemSection() {
  return (
    <section className="py-32 border-b border-muted-grey/30 relative">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl text-center mb-20 font-serif italic text-white">
          How the system is built.
        </h2>
      </ScrollReveal>

      <div className="grid lg:grid-cols-3 gap-8">
        <ScrollReveal delay={0.1}>
          <div className="bg-[#111112]/90  border border-muted-grey/30 p-10 rounded-2xl h-full shadow-2xl hover:-translate-y-2 transition-transform duration-500 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-6xl font-serif italic text-brand-gold/20 mb-6 group-hover:text-brand-gold/40 transition-colors">01</div>
            <div className="text-brand-gold font-bold text-2xl mb-4 tracking-widest uppercase">
              Audit
            </div>
            <p className="text-warm-grey/90 leading-relaxed text-lg font-light">
              We review every step of your current operational flow. We map exactly
              where leads are dropping off, where staff are wasting time, and
              whether we work together.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-[#111112]/90  border border-muted-grey/30 p-10 rounded-2xl h-full shadow-2xl hover:-translate-y-2 transition-transform duration-500 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-6xl font-serif italic text-brand-gold/20 mb-6 group-hover:text-brand-gold/40 transition-colors">02</div>
            <div className="text-brand-gold font-bold text-2xl mb-4 tracking-widest uppercase">
              Build
            </div>
            <p className="text-warm-grey/90 leading-relaxed text-lg font-light">
              We design and deploy your Business Operating System  bespoke to
              your business, connected end to end, built to run without manual
              input. Not a template. Not a subscription. Yours.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="bg-[#111112]/90  border border-muted-grey/30 p-10 rounded-2xl h-full shadow-2xl hover:-translate-y-2 transition-transform duration-500 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-6xl font-serif italic text-brand-gold/20 mb-6 group-hover:text-brand-gold/40 transition-colors">03</div>
            <div className="text-brand-gold font-bold text-2xl mb-4 tracking-widest uppercase">
              Operate
            </div>
            <p className="text-warm-grey/90 leading-relaxed text-lg font-light">
              Your system goes live. We maintain it on an ongoing basis. You keep
              what you generate. The focus shifts to scaling your operation, not
              managing chaos.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
