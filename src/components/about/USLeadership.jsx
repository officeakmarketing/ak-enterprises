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
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-center justify-center text-warm-grey/30 text-xs font-mono uppercase tracking-widest">
                  Photo placeholder
                </div>
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
                  <p className="mb-2 font-medium text-white/80">
                    U.S. Operations Managed by Christopher Strobach, based in Wisconsin.
                  </p>
                  <p>
                    [Short blurb to follow, Antonios will supply, or Christopher will send his own.]
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Jonathan White */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-6">
              <div className="w-full max-w-[300px] aspect-square bg-[#111112]/90 border border-muted-grey/20 rounded-2xl overflow-hidden shadow-xl relative group">
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-center justify-center text-warm-grey/30 text-xs font-mono uppercase tracking-widest">
                  Photo placeholder
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mb-1">
                    Jonathan White
                  </h3>
                  <p className="text-sm sm:text-base font-serif italic text-brand-gold">
                    Managing Partner, USA.
                  </p>
                </div>
                <div className="text-warm-grey/90 text-sm sm:text-base font-light leading-relaxed">
                  <p className="mb-2 font-medium text-white/80">
                    Based in North Carolina.
                  </p>
                  <p>
                    [Short blurb to follow from Antonios.]
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
