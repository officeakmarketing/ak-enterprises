import Carousel from "@/components/ui/Carousel";

export default function CaseStudyGraceAndPower({
  stepNumber = "02",
  locationTitle = "Grace and Power Gala, London"
}) {
  return (
    <div className="w-full rounded-none sm:rounded-2xl border-y sm:border border-brand-gold/30 bg-[#0e0e12]/90 px-4 py-7 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-brand-gold/50">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-muted-grey/15">
        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-brand-gold font-bold">
          Case Study // {stepNumber} &bull; Enterprise Scale
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-warm-grey/70 font-semibold">
          High-Concurrency Platform
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-serif italic text-white mb-4 tracking-tight leading-snug">
        {locationTitle}
      </h3>

      <p className="mb-8 text-warm-grey/90 leading-relaxed font-light text-base sm:text-lg">
        A luxury events platform load-tested to two million concurrent users with 100% uptime at peak, built and deployed by AK Enterprises. &ldquo;Extremely professional and highly effective. Very happy with the results.&rdquo; Mario Paunica, organizer.
      </p>

      <div className="my-8 relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-brand-gold/40 shadow-2xl">
        <Carousel heightClass="h-[700px] sm:h-[820px] md:h-[940px] lg:h-[1050px] xl:h-[1150px]" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-brand-gold/20 mb-8">
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
            2,000,000
          </div>
          <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
            Concurrent users tested
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
            100%
          </div>
          <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
            Uptime at peak
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
            1
          </div>
          <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
            Unified ecosystem
          </div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
            0
          </div>
          <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
            Platform failures
          </div>
        </div>
      </div>

      <blockquote className="border-l-2 border-brand-gold/60 pl-4 sm:pl-6 py-3 bg-black/25 rounded-r-xl">
        <p className="text-white/95 italic font-serif text-base sm:text-lg lg:text-xl leading-relaxed mb-2 font-normal">
          &ldquo;Extremely professional and highly effective. Very happy with the results.&rdquo;
        </p>
        <footer className="text-brand-gold text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase">
          Mario Paunica, Organizer, Grace and Power Gala
        </footer>
      </blockquote>
    </div>
  );
}
