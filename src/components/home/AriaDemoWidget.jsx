export default function AriaDemoWidget() {
  return (
    <div className="w-full max-w-full mx-auto flex flex-col items-center">
      <div className="text-center mb-6 w-full px-2 sm:px-0">
        <h2 className="text-[13px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-1.5">
          ARIIA PROPERTY ANALYSIS
        </h2>
      </div>

      <div className="w-full max-w-[600px] bg-[#080808] border border-brand-gold/30 rounded-none overflow-hidden relative" style={{ minHeight: '800px' }}>
        <iframe
          src="https://ariasystem.vercel.app/"
          className="absolute inset-0 w-full h-full border-0"
          title="Ariia Property Analysis"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          scrolling="no"
          loading="lazy"
        />
      </div>
    </div>
  );
}
