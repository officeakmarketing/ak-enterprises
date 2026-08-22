import ScrollReveal from "@/components/ScrollReveal";

export default function AboutHero() {
  return (
    <section className="w-full flex flex-col border-b border-muted-grey/20 bg-ink-black overflow-hidden -mt-12">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-12 lg:pt-16 xl:pt-20 pb-10 sm:pb-12 lg:pb-16 flex flex-col justify-start">
        <ScrollReveal>
          {/* HEADLINE */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem] font-serif italic text-white leading-[1.2] lg:leading-[1.15] max-w-5xl mb-10 lg:mb-12 xl:mb-16">
            AK Enterprises is a business group building operating system
            infrastructure for growing businesses.
          </h1>

          {/* TWO COLUMN NARRATIVE (Desktop) / STACKED (Mobile) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 text-warm-grey/85 text-[0.95rem] sm:text-base lg:text-base xl:text-[1.1rem] font-light leading-relaxed max-w-6xl">
            <div className="space-y-6 lg:space-y-8">
              <p>
                We started in systems because we noticed a pattern. Most businesses
                that were struggling were not struggling from a lack of opportunity.
                They were struggling from a lack of infrastructure.
              </p>
              <p>
                Leads that went cold. Bookings that fell through. Admin that consumed
                the owner's time. Revenue that was being lost before it was ever
                captured.
              </p>
            </div>
            
            <div className="space-y-6 lg:space-y-8">
              <p className="pl-6 border-l border-brand-gold/20">
                <strong className="text-white font-normal block mb-2">AK Marketing was built to fix that.</strong>
                The Aria landlord acquisition system. The Bright Face Barber booking and revenue system. The Grace and Power Gala and Legacy and Power Gala event infrastructure. The Holiday Dream Photos booking system across 8 US mall locations.
              </p>
              <p>
                Now we are building AK Enterprises as the group. Services, software,
                and AI infrastructure built on one category: <span className="text-brand-gold font-medium">Business Operating Systems.</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
