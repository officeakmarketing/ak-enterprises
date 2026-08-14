import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function ProofSection() {
  return (
    <section className="py-32 border-b border-muted-grey/30 relative">
      <ScrollReveal>
        <div className="bg-[#111112]/80 border border-muted-grey/30 p-8 md:p-12 lg:p-16 lg:-mx-12 xl:-mx-24 rounded-3xl flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          <div className="flex-1 relative z-10">
            <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold text-xs tracking-widest uppercase mb-6 font-bold">
              Case Study  Central London Barbershop
            </div>
            <h2 className="text-4xl md:text-5xl mb-8 font-serif italic text-white leading-tight">
              From pen and paper to £237,355 in 14 months.
            </h2>
            <p className="text-warm-grey/80 mb-6 leading-relaxed text-lg font-light">
              Bright Face Barber was running entirely on manual processes. Phone
              bookings. No follow-up. No automation. No visibility into what was
              happening in the business.
            </p>
            <p className="text-warm-grey/80 mb-10 leading-relaxed text-lg font-light">
              We installed a complete Business Operating System. Automated
              booking. Instant follow-up. CRM pipeline. Google Business Profile
              ranking. Review generation. Reporting dashboard. 7,208 bookings
              processed automatically. £237,355 in verified revenue. The owner
              stopped answering the phone. The system did it for him.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8 border-t border-muted-grey/30 pt-8">
              <div>
                <div className="text-4xl text-brand-gold font-serif italic mb-1 flex items-baseline">
                  <span className="text-2xl mr-1">£</span>
                  <AnimatedCounter value="237355" />
                </div>
                <div className="text-xs text-warm-grey uppercase tracking-widest font-bold">
                  Verified revenue
                </div>
              </div>
              <div>
                <div className="text-4xl text-brand-gold font-serif italic mb-1">
                  <AnimatedCounter value="7208" />
                </div>
                <div className="text-xs text-warm-grey uppercase tracking-widest font-bold">
                  Automated bookings
                </div>
              </div>
              <div>
                <div className="text-4xl text-brand-gold font-serif italic mb-1">
                  <AnimatedCounter value="14" />
                </div>
                <div className="text-xs text-warm-grey uppercase tracking-widest font-bold">
                  Months
                </div>
              </div>
            </div>

            <blockquote className="border-l-2 border-brand-gold/50 pl-6 py-2 text-white italic mb-8 relative">
              "Since launching the new site, people are booking nonstop. No more
              missed calls. It just works."
              <footer className="text-brand-gold text-sm mt-3 not-italic font-bold tracking-widest uppercase">
                Talib M, CEO, Bright Face Barber
              </footer>
            </blockquote>

            <Link
              href="/case-studies"
              className="inline-block mt-4 text-brand-gold border-b border-brand-gold/30 pb-1 font-bold hover:text-white hover:border-white transition-all uppercase tracking-widest text-sm"
            >
              Read the full case study &rarr;
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center relative z-10 w-full">
            <div className="bg-[#111112] w-full flex flex-col items-center justify-center border border-muted-grey/30 rounded-2xl shadow-2xl overflow-hidden group p-2">
              <Image src="/bright-face-dashboard.png" alt="Revenue Dashboard" width={800} height={500} className="object-contain w-full h-auto rounded-xl shadow-inner group-hover:scale-[1.02] transition-transform duration-700" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
