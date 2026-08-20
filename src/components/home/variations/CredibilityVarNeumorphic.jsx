import ScrollReveal from "@/components/ScrollReveal";

export default function CredibilityVarNeumorphic() {
  return (
    <section className="w-full py-14 sm:py-18 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 shadow-neo-pressed bg-[#0a0a0c] border border-white/5 px-3.5 py-1.5 rounded-md text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-bold">
            <span className="w-1.5 h-1.5 bg-brand-gold"></span>
            <span>Theme 1: Deep Neumorphism (As Seen In)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 font-serif italic text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Where AK Enterprises has been.
          </h2>

          <div className="relative">
            {/* Deep Neumorphic Container */}
            <div className="bg-[#050506] shadow-neo-pressed border border-white/5 rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-14 overflow-hidden">
              <div className="space-y-4 sm:space-y-5 relative z-10">
                
                {/* Physical Hardware Rows */}
                <div className="group/item bg-[#121214] shadow-neo-raised border border-white/5 hover:bg-[#151518] p-5 sm:p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 transition-colors cursor-default">
                  <div className="font-bold text-base sm:text-lg md:text-xl text-white group-hover/item:text-brand-gold transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full"></span>
                    Business Lounge Romania • Cover Feature
                  </div>
                  <div className="text-warm-grey/80 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light pl-4 md:pl-0">
                    National business magazine. Cover and 5-page editorial. October 2026.
                  </div>
                </div>

                <div className="group/item bg-[#121214] shadow-neo-raised border border-white/5 hover:bg-[#151518] p-5 sm:p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 transition-colors cursor-default">
                  <div className="font-bold text-base sm:text-lg md:text-xl text-white group-hover/item:text-brand-gold transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full"></span>
                    The Business Show London • Exhibitor
                  </div>
                  <div className="text-warm-grey/80 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light pl-4 md:pl-0">
                    Stand B1354. ExCeL London. 25,000 decision makers. November 2026.
                  </div>
                </div>

                <div className="group/item bg-[#121214] shadow-neo-raised border border-white/5 hover:bg-[#151518] p-5 sm:p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 transition-colors cursor-default">
                  <div className="font-bold text-base sm:text-lg md:text-xl text-white group-hover/item:text-brand-gold transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full"></span>
                    Grace and Power Gala • Technology Partner
                  </div>
                  <div className="text-warm-grey/80 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light pl-4 md:pl-0">
                    Invitation-only London luxury awards ceremony.
                  </div>
                </div>

                <div className="group/item bg-[#121214] shadow-neo-raised border border-white/5 hover:bg-[#151518] p-5 sm:p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 transition-colors cursor-default">
                  <div className="font-bold text-base sm:text-lg md:text-xl text-white group-hover/item:text-brand-gold transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full"></span>
                    Legacy and Power Gala • Technology Partner
                  </div>
                  <div className="text-warm-grey/80 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light pl-4 md:pl-0">
                    Second event in the series.
                  </div>
                </div>
              </div>

              {/* Engraved Photo Placeholder */}
              <div className="mt-8 sm:mt-10 bg-[#080809] shadow-[0_2px_10px_rgba(0,0,0,0.5)_inset] border-t border-b border-black rounded-xl p-8 sm:p-12 md:p-16 text-center text-brand-gold/40 text-xs sm:text-sm font-mono tracking-[0.2em] relative overflow-hidden">
                <span className="relative z-10">[Business Lounge Romania Cover Photo Pending]</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
