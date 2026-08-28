"use client";

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none group ${className}`}>
      {/* Interlocking Serif AK Monogram */}
      <div className="relative flex items-baseline font-serif text-brand-gold text-2xl sm:text-3xl md:text-[2rem] font-normal leading-none transition-transform duration-300 group-hover:scale-105">
        <span className="italic relative z-10 text-[#d4af37] drop-shadow-[0_1px_4px_rgba(201,169,97,0.3)]">A</span>
        <span className="-ml-2.5 sm:-ml-3 relative z-0 text-brand-gold">K</span>
      </div>

      {/* ENTERPRISES Wordmark */}
      <span className="font-sans font-light text-brand-gold text-[10px] sm:text-xs md:text-[13px] tracking-[0.28em] sm:tracking-[0.32em] uppercase leading-none pt-0.5 transition-colors duration-300 group-hover:text-white">
        ENTERPRISES
      </span>
    </div>
  );
}
