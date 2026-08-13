import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t border-muted-grey pt-16 pb-12 mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 max-w-6xl mx-auto px-4">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <div className="font-bold text-3xl tracking-[0.2em] mb-2 text-white font-serif italic">
            <Link href="/">AK ENTERPRISES</Link>
          </div>
          <div className="text-brand-gold italic text-lg font-serif">
            We build the systems that run your business.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest text-warm-grey font-bold">
          <Link href="/what-we-build" className="hover:text-white transition">
            What We Build
          </Link>
          <Link href="/case-studies" className="hover:text-white transition">
            Case Studies
          </Link>
          <Link href="/demo" className="hover:text-white transition">
            The Demo
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-grey border-t border-[#1a1a1a] pt-8">
          <div className="mb-6 md:mb-0 text-center md:text-left leading-relaxed">
            AK Marketing Consulting Ltd. Registered in England and Wales.
            Company No. 17128177.<br />
            Trading as AK Enterprises.
          </div>
          <div className="flex gap-6 uppercase tracking-widest font-bold text-warm-grey text-xs">
            <Link href="#" className="hover:text-brand-gold transition">
              [Instagram - Pending]
            </Link>
            <Link href="#" className="hover:text-brand-gold transition">
              [Facebook - Pending]
            </Link>
            <Link href="#" className="hover:text-brand-gold transition">
              [LinkedIn - Pending]
            </Link>
            <Link href="#" className="hover:text-brand-gold transition">
              [WhatsApp - Pending]
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
