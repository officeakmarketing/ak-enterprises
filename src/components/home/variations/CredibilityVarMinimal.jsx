import ScrollReveal from "@/components/ScrollReveal";

export default function CredibilityVarMinimal() {
  return (
    <section className="w-full py-14 sm:py-18 lg:py-24 border-b border-white/20 bg-black overflow-hidden font-sans">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal>
          <div className="inline-block self-start border border-white px-3 py-1 text-white text-[9px] sm:text-[10px] tracking-[0.25em] uppercase mb-8 font-bold">
            Theme 3: Absolute Minimalism (As Seen In)
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-normal text-white leading-[1.05] mb-12 uppercase tracking-tighter">
            Where AK Enterprises has been.
          </h2>

          <div className="border-t border-white/20">
            <div className="space-y-0">
              
              {/* Flat Rows */}
              <div className="border-b border-white/20 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 hover:bg-white hover:text-black transition-colors group cursor-default">
                <div className="font-bold text-base sm:text-lg md:text-xl uppercase tracking-widest">
                  Business Lounge Romania <span className="mx-2 opacity-30">—</span> Cover Feature
                </div>
                <div className="text-xs sm:text-sm md:text-right max-w-md font-mono uppercase opacity-70 group-hover:opacity-100 pl-4 md:pl-0">
                  National business magazine. Cover and 5-page editorial. October 2026.
                </div>
              </div>

              <div className="border-b border-white/20 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 hover:bg-white hover:text-black transition-colors group cursor-default">
                <div className="font-bold text-base sm:text-lg md:text-xl uppercase tracking-widest">
                  The Business Show London <span className="mx-2 opacity-30">—</span> Exhibitor
                </div>
                <div className="text-xs sm:text-sm md:text-right max-w-md font-mono uppercase opacity-70 group-hover:opacity-100 pl-4 md:pl-0">
                  Stand B1354. ExCeL London. 25,000 decision makers. November 2026.
                </div>
              </div>

              <div className="border-b border-white/20 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 hover:bg-white hover:text-black transition-colors group cursor-default">
                <div className="font-bold text-base sm:text-lg md:text-xl uppercase tracking-widest">
                  Grace and Power Gala <span className="mx-2 opacity-30">—</span> Technology Partner
                </div>
                <div className="text-xs sm:text-sm md:text-right max-w-md font-mono uppercase opacity-70 group-hover:opacity-100 pl-4 md:pl-0">
                  Invitation-only London luxury awards ceremony.
                </div>
              </div>

              <div className="border-b border-white/20 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4 hover:bg-white hover:text-black transition-colors group cursor-default">
                <div className="font-bold text-base sm:text-lg md:text-xl uppercase tracking-widest">
                  Legacy and Power Gala <span className="mx-2 opacity-30">—</span> Technology Partner
                </div>
                <div className="text-xs sm:text-sm md:text-right max-w-md font-mono uppercase opacity-70 group-hover:opacity-100 pl-4 md:pl-0">
                  Second event in the series.
                </div>
              </div>
            </div>

            {/* Photo Placeholder */}
            <div className="mt-12 border border-white/20 p-8 sm:p-12 md:p-16 text-center text-white text-xs sm:text-sm font-mono tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-colors cursor-default">
              [Business Lounge Romania Cover Photo Pending]
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
