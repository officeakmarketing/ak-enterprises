import Link from "next/link";

export default function SeoAuditCTA({ children }) {
  return (
    <section className="pt-8 border-t border-muted-grey/15">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white mb-6 tracking-tight">
        Book a{" "}
        <span className="inline-block pr-3.5 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
          Free Audit
        </span>
      </h2>
      <p className="mb-8 max-w-4xl">
        {children}
      </p>

      <div className="pt-2">
        <Link
          href="https://calendly.com/ak-enterprises/call"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-8 py-4 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
        >
          <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
          <span className="relative z-10">Book a Free 45-Minute Audit</span>
        </Link>
      </div>
    </section>
  );
}
