import AnimatedCounter from "@/components/AnimatedCounter";

export default function NumbersSection() {
  return (
    <section className="py-24 border-b border-muted-grey text-center">
      <h2 className="text-4xl mb-16 font-serif italic">
        The results speak for themselves.
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-5xl md:text-6xl text-brand-gold font-serif italic mb-2">
            <AnimatedCounter prefix="£" value="237355" />
          </div>
          <div className="text-warm-grey text-sm uppercase tracking-widest">
            Verified revenue  one client, 14 months
          </div>
        </div>
        <div>
          <div className="text-5xl md:text-6xl text-brand-gold font-serif italic mb-2">
            <AnimatedCounter value="7208" />
          </div>
          <div className="text-warm-grey text-sm uppercase tracking-widest">
            Automated bookings  zero manual input
          </div>
        </div>
        <div>
          <div className="text-5xl md:text-6xl text-brand-gold font-serif italic mb-2">
            <AnimatedCounter value="6" />
          </div>
          <div className="text-warm-grey text-sm uppercase tracking-widest">
            AI agents running live in a single deployment
          </div>
        </div>
        <div>
          <div className="text-5xl md:text-6xl text-brand-gold font-serif italic mb-2">
            <AnimatedCounter value="2" suffix="M" />
          </div>
          <div className="text-warm-grey text-sm uppercase tracking-widest">
            Simultaneous users handled for one event platform
          </div>
        </div>
      </div>
    </section>
  );
}
