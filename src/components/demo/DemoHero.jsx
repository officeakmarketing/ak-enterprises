import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DemoHero() {
  return (
    <section className="w-full flex flex-col border-b border-muted-grey/20 bg-ink-black overflow-hidden text-center">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-12 md:pt-16 lg:pt-12 xl:pt-16 pb-16 lg:pb-16 xl:pb-20">
        <ScrollReveal>
          {/* HEADLINE */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem] font-serif italic text-white leading-[1.2] lg:leading-[1.15] max-w-4xl mx-auto mb-4 lg:mb-5 xl:mb-6">
            This is not a concept. This is a live system we built for a real client. Try it.
          </h1>

          {/* BODY */}
          <p className="text-warm-grey/85 text-[0.95rem] sm:text-base lg:text-base xl:text-[1.1rem] font-light leading-relaxed max-w-3xl mx-auto">
            Submit the form below. You will receive exactly what a real prospect
            receives from one of our deployed systems  an instant AI-generated
            result, personalised to the details you submitted, delivered in seconds.
            <span className="block mt-4 text-white font-bold">No staff. No manual input. Just the system.</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
