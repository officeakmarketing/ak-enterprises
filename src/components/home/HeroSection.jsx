import Link from "next/link";
import AnimatedHeadline from "@/components/AnimatedHeadline";

export default function HeroSection() {
  return (
    <section className="relative pt-6 pb-0 lg:pt-0 lg:pb-0 2xl:pt-4 2xl:pb-0 border-b border-muted-grey/30">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 2xl:gap-16 items-center z-10 relative mt-2 lg:mt-4 min-h-[80vh] lg:min-h-[85vh] 2xl:min-h-0">
        <div className="flex-1 w-full lg:max-w-xl xl:max-w-2xl 2xl:max-w-[680px]">
          <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-2 py-1 lg:px-3 lg:py-1 rounded-full text-brand-gold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-2 lg:mb-3 font-bold">
            Business Operating Systems
          </div>
          <AnimatedHeadline
            text="Your business is losing clients right now. Not to your competitors. To your own broken systems."
            className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-[2.75rem] mb-2 lg:mb-4 leading-[1.15] font-serif italic text-white"
            highlightWords={["broken", "systems"]}
          />
          <p className="text-warm-grey/80 text-sm md:text-base xl:text-lg mb-4 lg:mb-6 leading-relaxed font-light lg:max-w-xl">
            AK Enterprises builds Business Operating Systems for service
            businesses — the complete infrastructure that captures every lead,
            automates every booking, and manages every client interaction
            without manual input.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-5 py-2.5 lg:px-6 lg:py-3 rounded text-xs lg:text-sm font-bold uppercase tracking-wider overflow-hidden transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></span>
              <span className="relative z-10">Book a Free Business Audit</span>
            </Link>
            <Link
              href="/demo"
              className="group inline-flex items-center justify-center border border-brand-gold/50 text-brand-gold px-5 py-2.5 lg:px-6 lg:py-3 rounded text-xs lg:text-sm font-bold uppercase tracking-wider transition-all hover:bg-brand-gold hover:text-ink-black hover:border-brand-gold hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              See the Live Demo
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full lg:max-w-md xl:max-w-lg 2xl:max-w-none">
          <div className="bg-[#111112] border border-muted-grey aspect-video flex flex-col items-center justify-center text-warm-grey p-4 lg:p-8 text-center rounded shadow-xl">
            <svg
              className="w-8 h-8 lg:w-12 lg:h-12 mb-2 lg:mb-4 opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            <span className="text-[10px] lg:text-sm font-bold tracking-widest uppercase opacity-70">[Antonios Video Pending]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
