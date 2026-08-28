import Link from "next/link";
import Carousel from "@/components/ui/Carousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function MoreProofSection() {
  return (
    <section className="w-full py-10 sm:py-16 lg:py-20 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <ScrollReveal>
        <div className="w-full 2xl:max-w-[1536px] 2xl:mx-auto bg-[#0e0e10]/95 border-y 2xl:border border-muted-grey/25 2xl:rounded-3xl px-4 py-7 sm:px-8 sm:py-10 md:p-10 lg:p-12 xl:p-14 2xl:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left Column: Copy, Result Block & Link (7 cols on desktop - Wider) */}
            <div className="lg:col-span-7 flex flex-col justify-between z-10 relative">
              {/* LABEL */}
              <div className="inline-block self-start border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-brand-gold text-[9px] sm:text-[10px] tracking-widest uppercase mb-3.5 sm:mb-5 font-bold">
                Case Study  Luxury Events, London UK
              </div>

              {/* HEADLINE */}
              <h2 className="text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.25rem] 2xl:text-[2.5rem] font-serif italic text-white leading-[1.22] mb-4 sm:mb-5">
                2 million simultaneous users. One platform. Built and deployed by AK Enterprises.
              </h2>

              {/* BODY */}
              <div className="text-warm-grey/85 text-sm sm:text-base 2xl:text-lg leading-relaxed font-light space-y-3 sm:space-y-3.5 mb-5 sm:mb-8 max-w-2xl">
                <p>
                  The Grace and Power Gala is an invitation-only luxury awards ceremony in London. We designed and deployed the complete official digital platform handling organiser coordination, partner access, and guest experience across one connected infrastructure.
                </p>
                <p>
                  At peak, the platform handled 2 million simultaneous users without failure, delivering uninterrupted ticket verification, partner portals, and media coverage streaming.
                </p>
              </div>

              {/* RESULT BLOCK (Responsive Multi-Column Serif Italic Gold Numbers) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 sm:py-5 border-t border-muted-grey/25 mb-5 sm:mb-8">
                <div>
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif italic font-normal text-brand-gold leading-tight mb-0.5 sm:mb-1 flex items-baseline">
                    <AnimatedCounter value="2" suffix="M" />
                  </div>
                  <div className="text-[8.5px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                    Simultaneous users
                  </div>
                </div>

                <div>
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif italic font-normal text-brand-gold leading-tight mb-0.5 sm:mb-1 flex items-center">
                    <AnimatedCounter value="100" suffix="%" />
                  </div>
                  <div className="text-[8.5px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                    Uptime at peak
                  </div>
                </div>

                <div>
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-serif italic font-normal text-brand-gold leading-tight mb-0.5 sm:mb-1 flex items-baseline">
                    <span>1</span>
                    <span className="text-xs sm:text-base ml-0.5 sm:ml-1 font-serif italic text-brand-gold/90">Platform</span>
                  </div>
                  <div className="text-[8.5px] sm:text-[10px] lg:text-[11px] text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                    Unified ecosystem
                  </div>
                </div>
              </div>

              {/* LINK */}
              <div className="mb-2 sm:mb-0">
                <Link
                  href="/case-studies"
                  className="group inline-flex items-center gap-2 text-brand-gold text-xs sm:text-sm font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-brand-gold/30 pb-0.5"
                >
                  <span>Read the full case study</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Clean Gold Hairline Border Carousel Showcase + Testimonial Block */}
            <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none flex flex-col gap-3.5 sm:gap-5 relative z-10">
              {/* Clean Gold Hairline Border Carousel Container */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-brand-gold/40">
                <Carousel />
              </div>

              {/* TESTIMONIAL Glass Card */}
              <div className="bg-[#141416]/90 border-l-2 border-brand-gold border-y border-r border-muted-grey/25 p-3.5 sm:p-5 rounded-r-xl">
                <p className="text-white text-xs sm:text-sm italic leading-relaxed mb-2">
                  "Extremely professional and highly effective. Very happy with the results."
                </p>
                <div className="text-brand-gold text-[9.5px] sm:text-xs not-italic font-bold tracking-widest uppercase">
                  Mario Paunica, Organiser, Grace and Power Gala
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
