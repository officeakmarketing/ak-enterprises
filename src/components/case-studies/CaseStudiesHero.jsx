import ScrollReveal from "@/components/ScrollReveal";

export default function CaseStudiesHero() {
  return (
    <section className="relative py-24 md:py-32 border-b border-muted-grey/30">
      <ScrollReveal>
        <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold tracking-[0.2em] uppercase text-xs mb-8 font-bold ">
          Case Studies
        </div>
        <h1 className="text-5xl md:text-7xl mb-8 max-w-4xl font-serif italic text-white leading-tight">
          Real systems. Documented results. Every number verified.
        </h1>
        <p className="text-warm-grey/90 text-xl max-w-3xl font-light leading-relaxed">
          We do not estimate. We do not project. We do not round up. Every
          figure below comes from a real client, a real system, and a real result.
        </p>
      </ScrollReveal>
    </section>
  );
}
