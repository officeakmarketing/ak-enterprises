import Link from "next/link";
import BackgroundSparkles from "@/components/BackgroundSparkles";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-muted-grey/30 pt-16 pb-12 w-full overflow-hidden bg-ink-black">
      <BackgroundSparkles count={40} />
      {/* Subtle Bottom-Center Spotlight Glow (Variation 1: Warm Gold) */}
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(201,169,97,0.08),transparent_70%)] pointer-events-none"></div> */}

      {/* Subtle Bottom-Center Spotlight Glow (Variation 2: Pure Studio White/Silver - As seen in your screenshot) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.04),transparent_70%)] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mb-12 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <div className="mb-2 flex justify-center md:justify-start">
            <Link href="/" aria-label="AK Enterprises Home">
              <Logo />
            </Link>
          </div>
          <div className="text-brand-gold italic text-base sm:text-lg font-serif">
            We build the systems that run your business.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm uppercase tracking-widest text-warm-grey font-bold">
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-grey border-t border-[#1a1a1a] pt-8 gap-6 md:gap-0">
          <div className="text-center md:text-left leading-relaxed text-[11px] sm:text-xs">
            AK Marketing Consulting Ltd. Registered in England and Wales.
            Company No. 17128177.<br />
            Trading as AK Enterprises.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-6 uppercase tracking-wider sm:tracking-widest font-bold text-warm-grey text-[10px] sm:text-xs">
            <Link href="#" className="hover:text-brand-gold transition whitespace-nowrap">
              [Instagram - Pending]
            </Link>
            <Link href="#" className="hover:text-brand-gold transition whitespace-nowrap">
              [Facebook - Pending]
            </Link>
            <Link href="#" className="hover:text-brand-gold transition whitespace-nowrap">
              [LinkedIn - Pending]
            </Link>
            <Link href="#" className="hover:text-brand-gold transition whitespace-nowrap">
              [WhatsApp - Pending]
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
