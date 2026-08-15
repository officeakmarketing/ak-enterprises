import Carousel from "@/components/Carousel";
import ScrollReveal from "@/components/ScrollReveal";

export default function GalaCaseStudy() {
  return (
    <section className="py-10 sm:py-12 lg:py-16 border-b border-muted-grey/30 relative">
      <ScrollReveal>
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

          {/* HEADER ROW */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-white max-w-4xl leading-[1.15]">
              2 million simultaneous users. One platform. Zero failures.
            </h2>
          </div>

          {/* TWO COLUMN CONTENT */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* LEFT COLUMN: Narrative & Testimonial */}
            <div className="lg:col-span-7 space-y-12 lg:space-y-16">
              <div className="group">
                <h3 className="text-brand-gold tracking-[0.2em] uppercase text-xs sm:text-sm font-bold mb-4 flex items-center gap-3">
                  <span className="w-6 sm:w-8 h-px bg-brand-gold/50 group-hover:w-16 transition-all duration-300"></span> Situation
                </h3>
                <p className="text-warm-grey/90 leading-relaxed text-base sm:text-lg font-light pl-6 sm:pl-8 border-l border-brand-gold/20">
                  An invitation-only luxury awards ceremony in London needed a complete
                  digital platform managing organiser coordination, partner access,
                  sponsor visibility, and guest experience  across one connected
                  infrastructure.
                </p>
              </div>

              <div className="group">
                <h3 className="text-brand-gold tracking-[0.2em] uppercase text-xs sm:text-sm font-bold mb-4 flex items-center gap-3">
                  <span className="w-6 sm:w-8 h-px bg-brand-gold/50 group-hover:w-16 transition-all duration-300"></span> What Was Built
                </h3>
                <p className="text-warm-grey/90 leading-relaxed text-base sm:text-lg font-light pl-6 sm:pl-8 border-l border-brand-gold/20">
                  Official digital platform for the event. Custom designed and
                  deployed by AK Enterprises. Handling all digital touchpoints from
                  invitation to post-event communication.
                </p>
              </div>

              <blockquote className="bg-[#111112] border-l-2 border-brand-gold border-y border-r border-white/5 p-6 sm:p-8 rounded-r-2xl relative overflow-hidden mt-8">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-gold/5 to-transparent pointer-events-none"></div>
                <p className="text-white italic text-[0.95rem] sm:text-lg leading-[1.65] sm:leading-relaxed relative z-10 mb-5">
                  "Extremely professional and highly effective. Very happy with the
                  results."
                </p>
                <footer className="text-brand-gold text-[10px] sm:text-xs not-italic font-bold tracking-[0.2em] uppercase relative z-10">
                  Mario Paunica, Organiser
                </footer>
              </blockquote>

              {/* Results Block - Row Format */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 pb-4 border-t border-brand-gold/20 mt-8">
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-brand-gold leading-tight mb-1">
                    2M
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                    Simultaneous users
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-brand-gold leading-tight mb-1">
                    100%
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                    Uptime at peak
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-brand-gold leading-tight mb-1">
                    1
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                    Unified ecosystem
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-brand-gold leading-tight mb-1">
                    0
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                    Platform failures
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Media & Results */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-10">

              {/* Media component */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-brand-gold/40">
                <Carousel />
              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
