import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function USLeadership() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-block border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-2.5 sm:py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase font-bold mb-6">
              US Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight">
              Driving expansion across North America.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Christopher Strobach */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="w-full max-w-[300px] aspect-square bg-[#111112]/90 border border-muted-grey/20 rounded-2xl overflow-hidden shadow-xl relative group">
                <Image
                  src="/christopher.jpeg"
                  alt="Christopher Strobach"
                  fill
                  className="object-cover object-center transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mb-1">
                    Christopher D. Strobach
                  </h3>
                  <p className="text-sm sm:text-base font-serif italic text-brand-gold">
                    Director of Sales, USA.
                  </p>
                </div>
                <div className="text-warm-grey/90 text-sm sm:text-base font-light leading-relaxed">
                  <p className="mb-4 font-medium text-white/80">
                    Based in Wisconsin.
                  </p>
                  <p className="mb-4">
                    At 23, Christopher has already built a track record in Operations management for a multi-billion dollar retail chain, following that he spent time closing significant commercial deals in exterior construction sales before moving into marketing operations and business growth strategy.
                  </p>
                  <p className="mb-4">
                    He now works directly with business owners across the US to diagnose the systems gaps that keep revenue unpredictable and install the infrastructure to fix them.
                  </p>
                  <p>
                    His approach is direct, practical, and built on real numbers rather than theory.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
