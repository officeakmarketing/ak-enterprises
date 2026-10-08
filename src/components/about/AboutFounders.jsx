import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutFounders() {
  return (
    <section className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        {/* Mobile Section Header (Hidden on Desktop) */}
        <div className="block lg:hidden mb-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-block border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-2.5 sm:py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase font-bold mb-6">
                The Founders
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white leading-tight">
                Building systems. Not excuses.
              </h1>
            </div>
          </ScrollReveal>
        </div>

        {/* Antonios Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">

          {/* LEFT: Header, Copy & Pull Quote */}
          <div className="lg:col-span-7 flex flex-col order-last lg:order-first">

            {/* Desktop Section Header (Hidden on Mobile) */}
            <div className="hidden lg:block">
              <ScrollReveal>
                <div className="max-w-3xl mb-6 lg:mb-8">
                  <div className="inline-block border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-2.5 sm:py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase font-bold mb-6">
                    The Founders
                  </div>
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif italic text-brand-gold leading-tight uppercase">
                    Antonios Gavrilas
                  </h1>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-warm-grey/90 text-base sm:text-lg font-light leading-relaxed">
                <div className="hidden lg:block">
                  <p className="font-bold text-white tracking-wide uppercase text-xl">
                    BUILDING SYSTEMS. NOT EXCUSES.
                  </p>
                </div>
                <p>
                  I think in systems. Every business is a machine, and most machines are leaking somewhere. My job is to find the leaks, design the system that fixes them, and hand you the keys to something that runs without you.
                </p>
                <p>
                  I built AK from zero. No funding, no head start, one stubborn belief: a business should never depend on its owner remembering anything.
                </p>

                {/* Pull Quote */}
                <div className="my-10 border-l-2 border-brand-gold/50 pl-6 py-2">
                  <p className="text-xl sm:text-2xl font-serif italic text-white leading-snug">
                    "When preparation and results exceed expectations, age can become the most powerful part of your business card."
                  </p>
                </div>

                <p>
                  On every build I care about one thing: does it produce a number the client can verify. If it cannot be measured, we do not ship it.
                </p>
                <p>
                  My vision is the same as AK's: a complete operating system in every serious service business in the UK and USA. One machine at a time.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Images */}
          <div className="lg:col-span-5 flex flex-col gap-10 order-first lg:order-last">
            <ScrollReveal delay={0.2}>
              {/* Image 1 */}
              <div className="flex flex-col gap-3">
                <div className="block lg:hidden mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">Antonios Gavrilas</h3>
                  <p className="text-brand-gold font-serif italic text-sm sm:text-base">Founder and CEO. AK Enterprises.</p>
                </div>
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
                <div className="text-[10px] sm:text-xs text-warm-grey/60 uppercase tracking-wider font-mono border-l border-brand-gold/30 pl-3 flex flex-col items-start gap-2">
                  <span>Business Lounge Romania, October 2026.<br />Cover feature and award recipient.</span>
                  <Link href="https://businesslounge.ro/antonios-gavrilas-antreprenoriat-credinta-disciplina/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-brand-gold hover:text-white transition-colors mt-0.5 font-sans text-xs sm:text-sm font-bold capitalize tracking-wide">
                    Read article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

        {/* Krisztian Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-16 sm:pt-20 border-t border-muted-grey/15">

          {/* LEFT: Image */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-3">
                <div className="block lg:hidden mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">Krisztian Jari</h3>
                  <p className="text-brand-gold font-serif italic text-sm sm:text-base">Co-Founder and Director</p>
                </div>
                <div className="relative w-full aspect-[3/4] bg-[#111112]/90 border border-muted-grey/20 rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <Image
                    src="/krisztian.jpg"
                    alt="Krisztian Jari"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="text-[10px] sm:text-xs text-warm-grey/60 uppercase tracking-wider font-mono border-l border-brand-gold/30 pl-3 flex flex-col items-start gap-2">
                  <span>Krisztian Jari, Co-Founder and Director<br />AK Enterprises.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Copy & Pull Quote */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Mobile Header */}
            <div className="block lg:hidden">
              <ScrollReveal>
                <div className="max-w-3xl mb-12 sm:mb-16">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white leading-tight">
                    Relationships, not transactions.
                  </h2>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Desktop Header */}
            <div className="hidden lg:block">
              <ScrollReveal>
                <div className="max-w-3xl mb-6 lg:mb-8">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif italic text-brand-gold leading-tight uppercase">
                    Krisztian Jari
                  </h2>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-warm-grey/90 text-base sm:text-lg font-light leading-relaxed">
                <div className="hidden lg:block">
                  <p className="font-bold text-white tracking-wide uppercase text-xl">
                    RELATIONSHIPS, NOT TRANSACTIONS.
                  </p>
                </div>
                <p>
                  I'm a perfectionist about one thing: the client gets exactly what they want, and the product, service and experience are always the highest quality we can deliver. That standard doesn't bend.
                </p>
                <p>
                  I build relationships, not transactions. When you work with AK, I'm thinking about your business growing for years, not just the project in front of us, because business owners help each other grow. And I take the time to understand not just what you need, but who you are, so the experience fits you, not some template.
                </p>

                {/* Pull Quote */}
                <div className="my-10 border-l-2 border-brand-gold/50 pl-6 py-2">
                  <p className="text-xl sm:text-2xl font-serif italic text-white leading-snug">
                    "That's why clients trust me, and it's how I want to be known."
                  </p>
                </div>

                <p>
                  My vision is the same as AK's: expand and conquer the UK and USA markets, business by business, system by system.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* HOW IT STARTED Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-16 sm:pt-20 border-t border-muted-grey/15 mt-16 sm:mt-20">

          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal>
              <div className="max-w-3xl mb-12 sm:mb-16">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight">
                  How It Started
                </h3>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-warm-grey/90 text-base sm:text-lg font-light leading-relaxed">
                <p>
                  The first client was a barbershop in Central London, taken on by both founders together. Fourteen months later it had <strong className="text-white font-medium">$301,340 in verified revenue</strong> and <strong className="text-white font-medium">7,208 automated bookings</strong>. No viral campaign. A well-built process, repeated and optimised. AK Enterprises was built on that result. Not a pitch deck. A number a client can verify.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-10">
            <ScrollReveal delay={0.2}>
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
                <div className="text-[10px] sm:text-xs text-warm-grey/60 uppercase tracking-wider font-mono border-l border-brand-gold/30 pl-3 flex flex-col items-start gap-2">
                  <span>Antonios Gavrilas and Krisztian Jari, Co-Founders, AK Enterprises.</span>
                  <Link href="https://businesslounge.ro/antonios-gavrilas-krisztian-jari-antreprenori-globali/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-brand-gold hover:text-white transition-colors mt-0.5 font-sans text-xs sm:text-sm font-bold capitalize tracking-wide">
                    Read article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
