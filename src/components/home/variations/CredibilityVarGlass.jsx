import ScrollReveal from "@/components/ScrollReveal";

export default function CredibilityVarGlass() {
  return (
    <section className="w-full py-14 sm:py-18 lg:py-24 border-b border-white/5 bg-ink-black overflow-hidden relative">
      
      {/* Ethereal Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[linear-gradient(to_top,rgba(201,169,97,0.04),transparent)] pointer-events-none"></div>

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <ScrollReveal>
          
          <div className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-4 font-medium shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse"></span>
            <span>Theme 2: Pure Glassmorphism (As Seen In)</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 font-serif italic text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 leading-tight">
            Where AK Enterprises has been.
          </h2>

          <div className="relative">
            {/* Frosted Glass Container */}
            <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="space-y-4 sm:space-y-5 relative z-10">
                
                {/* Floating Glass Rows */}
                <div className="group/item bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.06] p-5 sm:p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 transition-all duration-300 cursor-default hover:shadow-lg">
                  <div className="font-medium text-base sm:text-lg md:text-xl text-white group-hover/item:text-brand-gold transition-colors flex items-center gap-3">
                    Business Lounge Romania • Cover Feature
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light pl-4 md:pl-0">
                    National business magazine. Cover and 5-page editorial. October 2026.
                  </div>
                </div>

                <div className="group/item bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.06] p-5 sm:p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 transition-all duration-300 cursor-default hover:shadow-lg">
                  <div className="font-medium text-base sm:text-lg md:text-xl text-white group-hover/item:text-brand-gold transition-colors flex items-center gap-3">
                    The Business Show London • Exhibitor
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light pl-4 md:pl-0">
                    Stand B1354. ExCeL London. 25,000 decision makers. November 2026.
                  </div>
                </div>

                <div className="group/item bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.06] p-5 sm:p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 transition-all duration-300 cursor-default hover:shadow-lg">
                  <div className="font-medium text-base sm:text-lg md:text-xl text-white group-hover/item:text-brand-gold transition-colors flex items-center gap-3">
                    Grace and Power Gala • Technology Partner
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light pl-4 md:pl-0">
                    Invitation-only London luxury awards ceremony.
                  </div>
                </div>

                <div className="group/item bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.06] p-5 sm:p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 transition-all duration-300 cursor-default hover:shadow-lg">
                  <div className="font-medium text-base sm:text-lg md:text-xl text-white group-hover/item:text-brand-gold transition-colors flex items-center gap-3">
                    Legacy and Power Gala • Technology Partner
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light pl-4 md:pl-0">
                    Second event in the series.
                  </div>
                </div>
              </div>

              {/* Photo Placeholder */}
              <div className="mt-8 sm:mt-10 bg-white/[0.02] backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 md:p-16 text-center text-white/50 text-xs sm:text-sm font-mono tracking-widest relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-white/60 to-transparent"></div>
                <span className="relative z-10">[Business Lounge Romania Cover Photo Pending]</span>
              </div>
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
