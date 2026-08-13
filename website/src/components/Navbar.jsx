import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mb-12 border border-muted-grey p-4 sticky top-0 bg-ink-black z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-bold text-xl tracking-widest">
          <Link href="/">AK ENTERPRISES</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <Link
            href="/what-we-build"
            className="hover:text-brand-gold uppercase tracking-wider transition"
          >
            What We Build
          </Link>
          <Link
            href="/case-studies"
            className="hover:text-brand-gold uppercase tracking-wider transition"
          >
            Case Studies
          </Link>
          <Link
            href="/demo"
            className="hover:text-brand-gold uppercase tracking-wider transition"
          >
            The Demo
          </Link>
          <Link
            href="/about"
            className="hover:text-brand-gold uppercase tracking-wider transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="bg-brand-gold text-ink-black px-6 py-2 rounded font-bold hover:bg-white transition uppercase tracking-wider"
          >
            Book a Free Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
