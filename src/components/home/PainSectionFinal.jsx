import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function PainSectionFinal() {
  return (
    <section className="w-full bg-ink-black border-b border-muted-grey/20 relative overflow-hidden">
      {/* Background Accent from Var 2 removed */ }

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative z-10">
        
        {/* Top Header Row (From Variation 1) */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white leading-tight max-w-2xl">
              Every day without a system is a day your business is leaking revenue.
            </h2>
            
          </div>
        </ScrollReveal>

        {/* 2-Column Grid Hybrid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-12 xl:gap-16">
          
          {/* Left Column: The Huge Numbers & Explanatory Text */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-start">
            <ScrollReveal delay={0.1}>
              <div className="border border-white/10 p-6 sm:p-8 relative overflow-hidden group mb-10 sm:mb-12">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3 className="text-xs font-sans font-bold tracking-[0.2em] text-warm-grey/60 uppercase mb-4">Calculated Average Loss</h3>
                <div className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-medium text-gradient-gold-high-contrast leading-[1.1] mb-2 tracking-tight">
                  £40,000 —<br/>£120,000
                </div>
                <div className="text-sm font-sans text-warm-grey/80">Per year, per service business.</div>
              </div>
            </ScrollReveal>

            {/* Desktop & Mobile Explanatory Text & CTA - Now properly spaced below the numbers */}
            <div className="flex flex-col items-start gap-8">
              <ScrollReveal delay={0.25}>
                <p className="text-base sm:text-lg text-warm-grey/80 leading-relaxed max-w-xl">
                  This is happening in your business right now. Most owners never find out exactly how much it is costing them because there is no system tracking it. <span className="text-white italic font-serif">The audit shows you.</span>
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3} className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto bg-brand-gold text-ink-black px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
                  <span className="relative z-10">Book Free Audit</span>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Magazine Body & Neumorphic Pull-Quote */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-start mt-8 lg:mt-0">
            
            {/* Magazine Drop Cap */}
            <ScrollReveal delay={0.15}>
              <div className="relative text-lg sm:text-xl lg:text-[1.35rem] leading-[1.7] font-light text-warm-grey mb-10 lg:mb-12">
                <span className="float-left text-7xl lg:text-8xl font-serif text-white leading-[0.8] pr-4 pt-2">T</span>
                he average service business loses between <span className="text-white font-medium">£40,000 and £120,000</span> per year in leads that went cold, bookings that never happened, and clients who chose whoever responded first.
                <br/><br/>
                Not because the owner is bad at their job. Because there is no system capturing what the business generates.
              </div>
            </ScrollReveal>

            {/* Neumorphic Pull-Quote */}
            <ScrollReveal delay={0.2}>
              <div className="shadow-neo-pressed rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/5 bg-ink-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <h3 className="text-[10px] font-mono text-brand-gold uppercase tracking-[0.2em] mb-6">The Timeline of Loss</h3>
                <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed">
                  A missed call at 7pm. A lead that submitted a form on Sunday and got a reply on Tuesday. A prospect who went with a competitor because they responded in <span className="text-gradient-gold-high-contrast font-medium">3 minutes</span> and you responded in <span className="text-gradient-gold-high-contrast font-medium">3 hours</span>.
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
}
