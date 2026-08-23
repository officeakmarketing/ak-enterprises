import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function PainSectionFinal() {
  return (
    <section className="w-full bg-ink-black border-b border-muted-grey/20 relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif italic text-white leading-[1.2] mb-8 lg:mb-10">
            Every day without a system is a day your business is leaking revenue.
          </h2>

          <div className="space-y-6 text-warm-grey text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-10 lg:mb-12">
            <p>
              The average service business loses between £40,000 and £120,000 per year in leads that went cold, bookings that never happened, and clients who chose whoever responded first.
            </p>
            <p>
              Not because the owner is bad at their job. Because there is no system capturing what the business generates.
            </p>
            <p>
              A missed call at 7pm. A lead that submitted a form on Sunday and got a reply on Tuesday. A prospect who went with a competitor because they responded in 3 minutes and you responded in 3 hours.
            </p>
            <p>
              This is happening in your business right now. Most owners never find out exactly how much it is costing them because there is no system tracking it.
            </p>
            <p className="text-white italic font-serif">
              The audit shows you.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block text-brand-gold hover:text-white transition-colors duration-200 text-[13px] sm:text-sm font-bold tracking-widest uppercase underline underline-offset-8 decoration-brand-gold/30 hover:decoration-white/50"
          >
            Find out what your business is losing ; book a free audit
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
