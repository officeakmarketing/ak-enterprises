import ScrollReveal from "@/components/ScrollReveal";

export default function CaseStudiesHero() {
  return (
    <section className="w-full flex flex-col border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 sm:pt-20 lg:pt-24 pb-16 lg:pb-16 xl:pb-20">
        <ScrollReveal>
          {/* HEADLINE */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem] font-serif italic text-white leading-[1.2] lg:leading-[1.15] max-w-4xl mb-4 lg:mb-3 xl:mb-5">
            Real systems. Documented results.<br />
            Every number verified.
          </h1>

          {/* BODY */}
          <p className="text-warm-grey/85 text-[0.95rem] sm:text-base lg:text-base xl:text-[1.1rem] font-light leading-relaxed max-w-3xl mb-8 lg:mb-5 xl:mb-8">
            We do not estimate. We do not project. We do not round up. Every
            figure below comes from a real client, a real system, and a real result.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
