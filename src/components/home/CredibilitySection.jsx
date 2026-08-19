export default function CredibilitySection() {
  return (
    <section className="w-full py-14 sm:py-18 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-brand-gold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 font-bold">
          As Seen
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 font-serif italic text-white leading-tight">
          Where AK Enterprises has been.
        </h2>

        <div className="space-y-5 sm:space-y-6">
          <div className="border-b border-muted-grey/20 pb-5 sm:pb-6 flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4">
            <div className="font-bold text-base sm:text-lg md:text-xl text-white">
              Business Lounge Romania  Cover Feature
            </div>
            <div className="text-warm-grey/85 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light">
              National business magazine. Cover and 5-page editorial. October 2026.
            </div>
          </div>

          <div className="border-b border-muted-grey/20 pb-5 sm:pb-6 flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4">
            <div className="font-bold text-base sm:text-lg md:text-xl text-white">
              The Business Show London  Exhibitor
            </div>
            <div className="text-warm-grey/85 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light">
              Stand B1354. ExCeL London. 25,000 decision makers. November 2026.
            </div>
          </div>

          <div className="border-b border-muted-grey/20 pb-5 sm:pb-6 flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4">
            <div className="font-bold text-base sm:text-lg md:text-xl text-white">
              Grace and Power Gala  Technology Partner
            </div>
            <div className="text-warm-grey/85 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light">
              Invitation-only London luxury awards ceremony.
            </div>
          </div>

          <div className="border-b border-muted-grey/20 pb-5 sm:pb-6 flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-4">
            <div className="font-bold text-base sm:text-lg md:text-xl text-white">
              Legacy and Power Gala  Technology Partner
            </div>
            <div className="text-warm-grey/85 text-xs sm:text-sm md:text-right max-w-md leading-relaxed font-light">
              Second event in the series.
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 bg-[#0e0e10] border border-muted-grey/20 rounded-xl p-8 sm:p-12 md:p-16 text-center text-warm-grey/70 text-xs sm:text-sm font-mono tracking-wider">
          [Business Lounge Romania Cover Photo Pending]
        </div>
      </div>
    </section>
  );
}
