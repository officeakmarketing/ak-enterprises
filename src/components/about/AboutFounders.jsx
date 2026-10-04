import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutFounders() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Antonios Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          
          {/* LEFT: Header, Copy & Pull Quote */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Section Header */}
            <ScrollReveal>
              <div className="max-w-3xl mb-12 sm:mb-16">
                <div className="inline-block border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase font-bold mb-6">
                  The Founders
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white leading-tight">
                  Building systems. Not excuses.
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-warm-grey/90 text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Antonios Gavrilas is the Founder and CEO of AK Enterprises. He is 21 years old.
                </p>
                <p>
                  His first client was a barbershop in Central London. Fourteen months later that barbershop had generated <strong className="text-white font-medium">$301,340 in verified revenue</strong> and processed <strong className="text-white font-medium">7,208 automated bookings</strong>. AK Enterprises was built on that result. Not a pitch deck. Not a business plan. A number a client can verify.
                </p>
                
                {/* Pull Quote */}
                <div className="my-10 border-l-2 border-brand-gold/50 pl-6 py-2">
                  <p className="text-xl sm:text-2xl font-serif italic text-white leading-snug">
                    "When preparation and results exceed expectations, age can become the most powerful part of your business card."
                  </p>
                </div>

                <p>
                  Today the company builds operational infrastructure for service businesses across the UK, USA, and Europe: automated lead acquisition, CRM systems, booking platforms, and AI-powered qualification tools.
                </p>
                <p>
                  In October 2026 Antonios was featured on the cover of Business Lounge Romania, one of Romania's leading national business magazines, as a special guest and award recipient.
                </p>
                <p>
                  In November 2026 AK Enterprises will exhibit at The Business Show London at ExCeL, Stand B1354.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Images */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <ScrollReveal delay={0.2}>
              {/* Image 1 */}
              <div className="flex flex-col gap-3">
                <div className="relative w-full aspect-[3/4] bg-[#111112]/90 border border-muted-grey/20 rounded-2xl overflow-hidden shadow-2xl group">
                   <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                   <Image 
                     src="/antonios.jpg"
                     alt="Antonios Gavrilas"
                     fill
                     className="object-cover"
                     sizes="(max-width: 1024px) 100vw, 50vw"
                     priority
                   />
                </div>
                <div className="text-[10px] sm:text-xs text-warm-grey/60 uppercase tracking-wider font-mono border-l border-brand-gold/30 pl-3">
                  Business Lounge Romania, October 2026.<br/>Cover feature and award recipient.
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              {/* Image 2 */}
              <div className="flex flex-col gap-3">
                <div className="relative w-full aspect-video bg-[#111112]/90 border border-muted-grey/20 rounded-2xl overflow-hidden shadow-2xl group">
                   <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                   <Image 
                     src="/antonios-krisztian.jpeg"
                     alt="Antonios Gavrilas and Krisztian Jari, Co-Founders"
                     fill
                     className="object-cover object-top"
                     sizes="(max-width: 1024px) 100vw, 50vw"
                   />
                </div>
                <div className="text-[10px] sm:text-xs text-warm-grey/60 uppercase tracking-wider font-mono border-l border-brand-gold/30 pl-3">
                  Antonios Gavrilas and Krisztian Jari, Co-Founders, AK Enterprises.
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Placeholder for Krisztian's Section (Hidden until copy arrives) */}
        {/*
        <ScrollReveal delay={0.2}>
          <div className="pt-16 border-t border-muted-grey/15 mb-24">
            <div className="inline-block border border-muted-grey/40 bg-white/5 px-3.5 py-1 rounded-full text-warm-grey/60 text-[10px] sm:text-xs tracking-widest uppercase font-bold mb-6">
              Krisztian Jari
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif italic text-white mb-6 opacity-30">[Section pending implementation]</h3>
          </div>
        </ScrollReveal>
        */}

        {/* CTA SECTION */}
        <ScrollReveal delay={0.3}>
          <div className="pt-16 sm:pt-20 border-t border-muted-grey/15 flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-tight">
              If you are a business owner, investor, or partner  let us talk.
            </h2>

            <div className="flex justify-center w-full sm:w-auto px-4 sm:px-0">
              <Link
                href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 sm:px-10 rounded-lg font-bold uppercase tracking-widest overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md text-center w-full sm:w-auto min-h-[56px]"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none"></span>

                <span className="relative z-10 w-full text-xs sm:text-sm tracking-widest text-ink-black">
                  Book a Free Audit
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
