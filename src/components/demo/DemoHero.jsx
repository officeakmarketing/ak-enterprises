import ScrollReveal from "@/components/ScrollReveal";

export default function DemoHero() {
  return (
    <section className="relative py-24 md:py-32 border-b border-muted-grey/30 text-center">
      <ScrollReveal>
        <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold tracking-[0.2em] uppercase text-xs mb-8 font-bold ">
          Live AI Deployment
        </div>
        <h1 className="text-5xl md:text-7xl mb-8 max-w-5xl mx-auto font-serif italic text-white leading-tight">
          This is not a concept. This is a live system we built for a real client. Try it.
        </h1>
        <p className="text-warm-grey/90 text-xl max-w-3xl mx-auto leading-relaxed font-light">
          Submit the form below. You will receive exactly what a real prospect
          receives from one of our deployed systems  an instant AI-generated
          result, personalised to the details you submitted, delivered in seconds.
          <span className="block mt-4 text-white font-bold">No staff. No manual input. Just the system.</span>
        </p>
      </ScrollReveal>
    </section>
  );
}
