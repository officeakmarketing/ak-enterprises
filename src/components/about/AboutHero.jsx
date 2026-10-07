import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutHero() {
  return (
    <section className="w-full flex flex-col border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 sm:pt-16 lg:pt-12 xl:pt-12 pb-10 sm:pb-12 lg:pb-16 flex flex-col justify-start">
        <ScrollReveal>
          {/* VISION STATEMENT */}
          <div className="max-w-3xl mx-auto text-center mb-6">
             <div className="inline-block border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-2.5 sm:py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase font-bold mb-6">
                Our Vision
             </div>
             <h2 className="text-[1.85rem] sm:text-[2.5rem] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem] font-serif italic text-white leading-[1.2] lg:leading-[1.15]">
                AK Enterprises is a business group building <span className="not-italic font-normal text-gradient-gold-high-contrast">operating system infrastructure</span> for growing businesses.
             </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
