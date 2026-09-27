export default function AriaDemoWidget() {
  return (
    <div className="w-full flex justify-center px-2 sm:px-0 mt-4 sm:mt-8">
      <div 
        className="w-full max-w-[850px] relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-brand-gold/10 ring-1 ring-white/5 bg-[#0a0a0c]" 
        style={{ height: '730px' }}
      >
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
