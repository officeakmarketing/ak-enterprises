import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PainSection() {
  return (
    <section className="w-full bg-ink-black py-8 sm:py-12 lg:py-16 border-b border-muted-grey/20">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BODY (Stark & Impactful) */}
        <div className="text-left md:text-center space-y-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.3] font-serif italic max-w-4xl mx-auto">
          <ScrollReveal>
            <p>
              A missed call at 7pm. A lead that submitted a form on Sunday and got a reply on Tuesday. A prospect who went with a competitor because they responded in 3 minutes and you responded in 3 hours. They booked with your competitor on Monday morning.
            </p>
          </ScrollReveal>
        </div>

        {/* CTA (Responsive Mobile-Friendly Secondary Link) */}
        <ScrollReveal delay={0.1} className="text-left md:text-center mt-10 sm:mt-14 lg:mt-16">
          <Link
            href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
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
