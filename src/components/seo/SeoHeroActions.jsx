import Link from "next/link";

export default function SeoHeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-5 mb-12 pb-12 border-b border-muted-grey/20">
      <Link
        href="https://calendly.com/ak-enterprises/call"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
      >
        <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
        <span className="relative z-10">Book a Free Audit</span>
      </Link>

      <Link
        href="/case-studies"
        className="text-warm-grey hover:text-white text-xs font-bold uppercase tracking-wider transition-colors py-2"
      >
        Explore Case Studies →
      </Link>
    </div>
  );
}
