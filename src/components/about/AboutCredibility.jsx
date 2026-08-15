export default function AboutCredibility() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 border-b border-muted-grey/20">
      <h2 className="text-4xl mb-12 font-serif italic">
        Where AK Enterprises has been.
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="border-b border-muted-grey pb-6">
            <div className="font-bold text-xl mb-2 text-white">
              Business Lounge Romania  Cover Feature
            </div>
            <div className="text-warm-grey">
              National business magazine. Cover and 5-page editorial. October
              2026. Distributed via InMedio.
            </div>
          </div>
          <div className="border-b border-muted-grey pb-6">
            <div className="font-bold text-xl mb-2 text-white">
              The Business Show London
            </div>
            <div className="text-warm-grey">
              Stand B1354. ExCeL London. 25,000 attendees. November 2026.
            </div>
          </div>
          <div className="border-b border-muted-grey pb-6">
            <div className="font-bold text-xl mb-2 text-white">
              Grace and Power Gala
            </div>
            <div className="text-warm-grey">Official technology partner.</div>
          </div>
          <div className="border-b border-muted-grey pb-6">
            <div className="font-bold text-xl mb-2 text-white">
              Legacy and Power Gala
            </div>
            <div className="text-warm-grey">Official technology partner.</div>
          </div>
        </div>
        <div>
          <div className="bg-[#1a1a1a] h-full min-h-[300px] border border-muted-grey rounded flex items-center justify-center text-center p-8 text-warm-grey">
            <p className="font-mono text-sm">
              [Business Lounge Romania Cover Photo Pending]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
