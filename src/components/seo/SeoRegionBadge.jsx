export default function SeoRegionBadge({ label }) {
  return (
    <div className="inline-flex max-w-full items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3 py-1.5 sm:px-3.5 sm:py-1 rounded-full text-brand-gold text-[9.5px] sm:text-xs tracking-[0.14em] sm:tracking-[0.2em] uppercase mb-5 sm:mb-6 font-bold leading-normal text-left">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse flex-shrink-0" />
      <span className="break-words">{label}</span>
    </div>
  );
}
