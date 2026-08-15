import ScrollReveal from "@/components/ScrollReveal";

export default function ContactHeader() {
  return (
    <div className="flex flex-col h-full lg:pr-8 xl:pr-12 px-4 sm:px-0">
      <ScrollReveal>
        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-5xl xl:text-6xl font-serif italic text-white leading-[1.15] mb-6 sm:mb-8">
          Book your free business audit.
        </h1>
        
        <p className="text-warm-grey/85 text-[0.95rem] sm:text-base xl:text-lg font-light leading-relaxed mb-10">
          20 minutes. We show you exactly what your business is missing and
          what it is costing you. The findings are yours regardless of
          whether we work together.
        </p>

        <div className="bg-[#111112]/80 border-l-4 border-brand-gold p-6 sm:p-8 rounded-r-2xl mb-12 shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-gold/5 to-transparent pointer-events-none"></div>
          <p className="text-white italic leading-relaxed text-sm sm:text-base relative z-10">
            If we cannot find a single gap in your business that is costing
            you money, we will tell you honestly and you owe us nothing. We
            have never left an audit empty-handed.
          </p>
        </div>

        <div className="pt-10 border-t border-muted-grey/20">
          <h3 className="text-brand-gold tracking-[0.2em] uppercase text-[10px] sm:text-xs font-bold mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-brand-gold/50"></span>
            Direct Contact
          </h3>
          <p className="text-white font-medium text-lg sm:text-xl mb-1 hover:text-brand-gold transition-colors cursor-pointer inline-block">
            office@akmarketing.agency
          </p>
          <p className="text-warm-grey/70 text-sm font-light">UK: +44 7931 537545</p>
        </div>
      </ScrollReveal>
    </div>
  );
}
