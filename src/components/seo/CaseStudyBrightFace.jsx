import Image from "next/image";

export default function CaseStudyBrightFace({ stepNumber = "01" }) {
  return (
    <div className="w-full rounded-none sm:rounded-2xl border-y sm:border border-brand-gold/30 bg-[#0e0e12]/90 px-4 py-7 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-brand-gold/50">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-muted-grey/15">
        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-brand-gold font-bold">
          Case Study // {stepNumber} &bull; Service Business Operating System
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-warm-grey/70 font-semibold">
          Service Industry Automation
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-serif italic text-white mb-4 tracking-tight leading-snug">
        Bright Face Barber, Automated Booking System
      </h3>

      <p className="mb-8 text-warm-grey/90 leading-relaxed font-light text-base sm:text-lg">
        Fourteen months ago it ran on pen and paper and a phone that rang out after hours. Today the numbers are verified: $301,340 in revenue and 7,208 automated bookings in 14 months, with a booking system that never sleeps. &ldquo;Since launching the new site, people are booking nonstop. No more missed calls. It just works.&rdquo; Talib M, CEO, Bright Face Barber.
      </p>

      <div className="my-8 overflow-hidden rounded-xl border border-muted-grey/25 bg-[#0a0a0c] shadow-2xl">
        <Image
          src="/bright-face-dashboard.png"
          alt="Bright Face Barber Verified Revenue Dashboard"
          width={1200}
          height={700}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-brand-gold/20 mb-8">
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
            $301,340
          </div>
          <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
            Verified revenue
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
            7,208
          </div>
          <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
            Automated bookings
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
            14
          </div>
          <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
            Months to result
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
            0
          </div>
          <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
            Missed calls
          </div>
        </div>
      </div>

      <blockquote className="border-l-2 border-brand-gold/60 pl-4 sm:pl-6 py-3 bg-black/25 rounded-r-xl">
        <p className="text-white/95 italic font-serif text-base sm:text-lg lg:text-xl leading-relaxed mb-2 font-normal">
          &ldquo;Since launching the new site, people are booking nonstop. No more missed calls. It just works.&rdquo;
        </p>
        <footer className="text-brand-gold text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase">
          Talib M, CEO, Bright Face Barber
        </footer>
      </blockquote>
    </div>
  );
}
