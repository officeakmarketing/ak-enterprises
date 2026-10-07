export default function AriaDemoWidget() {
  return (
    <div className="w-[calc(100%+2rem)] -mx-4 sm:w-full sm:mx-0 flex flex-col items-center mt-4 sm:mt-8">
      {/* Disclaimer Label */}
      <div className="mb-4 sm:mb-6 px-4 text-center max-w-[850px] w-full">
        <p className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-brand-gold bg-brand-gold/5 border border-brand-gold/20 py-2 sm:py-3 px-4 rounded-lg inline-block shadow-sm">
          THIS IS A LIVE SYSTEM WE BUILT FOR A REAL ESTATE CLIENT. Same architecture works for any industry. Try it, no strings.
        </p>
      </div>

      <div 
        className="w-full max-w-[850px] relative overflow-hidden rounded-none sm:rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border-y sm:border border-brand-gold/10 ring-1 ring-white/5 bg-[#0a0a0c] h-[850px] sm:h-[900px]" 
      >
        <iframe
          src="https://ariasystem.vercel.app/"
          className="absolute inset-0 w-full h-full border-0"
          title="Ariia Property Analysis"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          scrolling="yes"
          loading="lazy"
        />
      </div>
    </div>
  );
}
