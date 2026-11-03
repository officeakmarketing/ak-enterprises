"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BackgroundSparkles from "@/components/ui/BackgroundSparkles";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const pathname = usePathname();
  const isBusinessShowPage = pathname === "/business-show";

  if (isBusinessShowPage) return null;
  return (
    <footer className="relative border-t border-muted-grey/30 pt-16 pb-12 w-full overflow-hidden bg-ink-black">
      <BackgroundSparkles count={40} />
      
      {/* Subtle Studio White Spotlight Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[420px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.04),transparent_70%)] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Section: Brand + Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
          <div>
            <div className="mb-3 inline-flex items-center">
              <Link href="/" aria-label="AK Enterprises Home" className="inline-flex items-center">
                <Logo />
              </Link>
            </div>
            <p className="text-brand-gold italic text-base sm:text-lg font-serif">
              We build the systems that run your business.
            </p>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 text-xs sm:text-sm uppercase tracking-widest text-warm-grey font-bold">
            <Link href="/what-we-build" className="hover:text-white transition-colors">
              What We Build
            </Link>
            <Link href="/case-studies" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="/aria" className="hover:text-white transition-colors">
              Aria AI
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-white transition-colors"
            >
              Book Audit Now
            </Link>
          </nav>
        </div>

        {/* Minimalist Contact Links */}
        <div className="pt-6 pb-8 border-t border-white/5 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-mono">
          <a
            href="mailto:office@akenterprises.io"
            className="text-warm-grey/70 hover:text-brand-gold transition-colors tracking-wide"
          >
            office@akenterprises.io
          </a>
          <span className="text-white/10 hidden sm:inline">•</span>
          <a
            href="mailto:antonios@akenterprises.io"
            className="text-warm-grey/70 hover:text-brand-gold transition-colors tracking-wide"
          >
            antonios@akenterprises.io
          </a>
          <span className="text-white/10 hidden sm:inline">•</span>
          <a
            href="mailto:krisztian@akenterprises.io"
            className="text-warm-grey/70 hover:text-brand-gold transition-colors tracking-wide"
          >
            krisztian@akenterprises.io
          </a>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-grey border-t border-white/5 pt-6 gap-4">
          <div className="text-center md:text-left leading-relaxed text-[11px] sm:text-xs">
            © {new Date().getFullYear()} AK Enterprises. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-warm-grey hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-warm-grey hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
