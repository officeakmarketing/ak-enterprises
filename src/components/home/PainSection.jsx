import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function PainSection() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-ink-black py-20 lg:py-28 border-b border-muted-grey/20">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-14 lg:mb-16 font-serif italic text-center max-w-4xl mx-auto leading-tight text-white">
            Every day without a system is a day your business is leaking revenue.
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-[#0e0e10] border border-[#1a1a1c] p-8 sm:p-10 rounded-2xl h-full lg:min-h-[380px] flex flex-col justify-end relative overflow-hidden group hover:border-red-900/50 transition-all duration-500 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-800/20 transition-all duration-700"></div>
              <div className="absolute -top-12 -left-4 text-[12rem] font-serif italic text-white/[0.02] font-bold leading-none select-none group-hover:text-white/[0.04] transition-colors duration-500">
                1
              </div>
              <div className="relative z-10">
                <div className="w-8 h-[2px] bg-red-600 mb-6 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-warm-grey text-base sm:text-lg leading-relaxed">
                  The average service business loses between £40,000 and £120,000 per
                  year in leads that went cold, bookings that never happened, and clients
                  who chose whoever responded first.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-[#0e0e10] border border-[#1a1a1c] p-8 sm:p-10 rounded-2xl h-full lg:min-h-[380px] flex flex-col justify-end relative overflow-hidden group hover:border-red-900/50 transition-all duration-500 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-800/20 transition-all duration-700"></div>
              <div className="absolute -top-12 -left-4 text-[12rem] font-serif italic text-white/[0.02] font-bold leading-none select-none group-hover:text-white/[0.04] transition-colors duration-500">
                2
              </div>
              <div className="relative z-10">
                <div className="w-8 h-[2px] bg-red-600 mb-6 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-warm-grey text-base sm:text-lg leading-relaxed">
                  A missed call at 7pm. A lead that submitted a form on Sunday and got
                  a reply on Tuesday. A prospect who went with a competitor because they
                  responded in 3 minutes and you responded in 3 hours.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-gradient-to-b from-[#121214] to-[#0e0e10] border border-brand-gold/30 p-8 sm:p-10 rounded-2xl h-full lg:min-h-[380px] flex flex-col justify-end relative overflow-hidden group hover:border-brand-gold transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/20 transition-all duration-700"></div>
              <div className="absolute -top-12 -left-4 text-[12rem] font-serif italic text-brand-gold/[0.03] font-bold leading-none select-none group-hover:text-brand-gold/[0.06] transition-colors duration-500">
                3
              </div>
              <div className="relative z-10">
                <div className="w-8 h-[2px] bg-brand-gold mb-6 group-hover:w-full transition-all duration-700"></div>
                <p className="text-white text-base sm:text-lg leading-relaxed mb-6 font-medium">
                  This is happening in your business right now. Most owners never find
                  out exactly how much it is costing them because there is no system
                  tracking it.
                </p>
                <p className="font-bold text-brand-gold uppercase tracking-widest text-xs">The audit shows you.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4} className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block text-warm-grey border-b border-warm-grey/30 pb-1 font-bold hover:text-brand-gold hover:border-brand-gold transition-all uppercase tracking-widest text-xs sm:text-sm"
          >
            Reveal Your Hidden Revenue &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
