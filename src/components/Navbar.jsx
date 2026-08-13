import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 md:px-12 md:py-6 border-b border-muted-grey/30 sticky top-0 bg-ink-black/80  z-50">
      {/* Left side Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.jpeg"
            alt="AK Enterprises Logo"
            width={56}
            height={56}
            className="object-contain hover:opacity-80 transition-opacity"
            priority
          />
        </Link>
      </div>

      {/* Right side navigation & CTA */}
      <div className="flex items-center gap-6">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase">
          <Link
            href="/demo"
            className="hover:text-brand-gold transition-colors text-warm-grey"
          >
            Live Demo
          </Link>
          <Link
            href="/case-studies"
            className="hover:text-brand-gold transition-colors text-warm-grey"
          >
            Case Studies
          </Link>
          <Link
            href="/about"
            className="hover:text-brand-gold transition-colors text-warm-grey"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="bg-brand-gold text-ink-black px-6 py-2 rounded font-bold hover:bg-white transition uppercase tracking-wider block"
          >
            Book a Free Audit
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Link
            href="/contact"
            className="bg-brand-gold text-ink-black px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-brand-gold/20"
          >
            Free Audit
          </Link>
        </div>
      </div>
    </nav>
  );
}
