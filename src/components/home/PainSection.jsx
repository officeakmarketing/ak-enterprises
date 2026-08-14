import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function PainSection() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-ink-black py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* HEADLINE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] mb-10 sm:mb-12 font-serif italic text-left md:text-center leading-[1.2] text-white">
            Every day without a system is a day your business is leaking revenue.
          </h2>
        </ScrollReveal>

        {/* BODY (Warm Grey, Short & Punchy Editorial Flow) */}
        <div className="space-y-6 text-warm-grey text-base sm:text-lg lg:text-[1.125rem] leading-[1.75] font-light max-w-3xl mx-auto">
          <ScrollReveal delay={0.05}>
            <p>
              The average service business loses between{" "}
              <span className="text-white font-medium">£40,000 and £120,000 per year</span>{" "}
              in leads that went cold, bookings that never happened, and clients who chose whoever responded first.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-white/95 font-normal">
              Not because the owner is bad at their job. Because there is no system capturing what the business generates.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p>
              A missed call at 7pm. A lead that submitted a form on Sunday and got a reply on Tuesday. A prospect who went with a competitor because they responded in{" "}
              <span className="text-white font-medium">3 minutes</span> and you responded in{" "}
              <span className="text-white font-medium">3 hours</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p>
              This is happening in your business right now. Most owners never find out exactly how much it is costing them because there is no system tracking it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="text-brand-gold font-serif italic text-xl sm:text-2xl font-normal pt-2">
              The audit shows you.
            </p>
          </ScrollReveal>
        </div>

        {/* CTA (Responsive Mobile-Friendly Secondary Link) */}
        <ScrollReveal delay={0.3} className="text-left md:text-center mt-10 sm:mt-12">
          <Link
            href="/contact"
            className="group inline-block text-warm-grey hover:text-brand-gold border-b border-warm-grey/30 hover:border-brand-gold pb-1 font-bold uppercase tracking-[0.14em] sm:tracking-widest text-[11px] sm:text-xs md:text-sm leading-relaxed transition-all"
          >
            <span>Find out what your business is losing  book a free audit</span>
            <span className="inline-block ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
