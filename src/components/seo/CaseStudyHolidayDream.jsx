import Image from "next/image";

export default function CaseStudyHolidayDream({
  label = "Case Study // 02 • Multi-Location Scale",
  title = "Holiday Dream Photos, Multi-Location Booking Infrastructure"
}) {
  return (
    <div className="w-full rounded-none sm:rounded-2xl border-y sm:border border-brand-gold/30 bg-[#0e0e12]/90 px-4 py-7 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-brand-gold/50">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-muted-grey/15">
        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-brand-gold font-bold">
          {label}
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-warm-grey/70 font-semibold">
          7 States &bull; 9 Locations Simultaneously
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-serif italic text-white mb-4 tracking-tight leading-snug">
        {title}
      </h3>

      <p className="mb-8 text-warm-grey/90 leading-relaxed font-light text-base sm:text-lg">
        A multi-location photography experience running a fully automated booking system across 9 mall locations in 7 states simultaneously, with 11 appointment types configured and thousands of families served. The experience works with some of the most recognized names in entertainment, and Nick Cannon has publicly supported its Black Santa experience, a dedicated session offered at select locations.
      </p>

      <div className="my-8 overflow-hidden rounded-xl border border-muted-grey/25 bg-[#0a0a0c] shadow-2xl">
        <Image
          src="/santa-case.jpg"
          alt="Holiday Dream Photos Multi-Location Automated Booking System"
          width={1200}
          height={700}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-gold/20 my-6">
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
            9
          </div>
          <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
            Mall locations across USA
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
            7
          </div>
          <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
            States simultaneously
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
            100%
          </div>
          <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
            Automated scheduling
          </div>
        </div>
      </div>
    </div>
  );
}
