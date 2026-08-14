export default function TrustBar() {
  return (
    <div className="w-[100vw] ml-[calc(50%-50vw)] relative z-20">
      <div className="w-full py-6 px-4 md:px-10 bg-[#0a0a0a] shadow-[inset_0_2px_20px_rgba(255,255,255,0.02),0_10px_40px_rgba(0,0,0,0.5)] text-center flex flex-col md:flex-row justify-between lg:justify-around items-center gap-6 relative">
        {/* Subtle gold glow behind the bar */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 via-transparent to-brand-gold/5 opacity-50 pointer-events-none"></div>

        <div className="flex items-center gap-3 relative z-10">
          <span className="text-brand-gold font-bold text-lg lg:text-xl font-serif">5</span>
          <span className="text-warm-grey text-xs lg:text-sm tracking-widest uppercase">Active Clients</span>
        </div>

        <span className="hidden md:inline text-brand-gold/40 text-[10px] relative z-10">◆</span>

        <div className="flex items-center gap-3 relative z-10">
          <span className="text-brand-gold font-bold text-lg lg:text-xl font-serif">UK & USA</span>
          <span className="text-warm-grey text-xs lg:text-sm tracking-widest uppercase">Operations</span>
        </div>

        <span className="hidden md:inline text-brand-gold/40 text-[10px] relative z-10">◆</span>

        <div className="flex items-center gap-3 relative z-10">
          <span className="text-brand-gold font-bold text-lg lg:text-xl font-serif">£237k+</span>
          <span className="text-warm-grey text-xs lg:text-sm tracking-widest uppercase">Revenue</span>
        </div>

        <span className="hidden md:inline text-brand-gold/40 text-[10px] relative z-10">◆</span>

        <div className="flex items-center gap-3 relative z-10">
          <span className="text-brand-gold font-bold text-lg lg:text-xl font-serif">Live</span>
          <span className="text-warm-grey text-xs lg:text-sm tracking-widest uppercase">AI Deployment</span>
        </div>
      </div>
    </div>
  );
}
