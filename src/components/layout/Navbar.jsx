"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isThankYouPage = pathname === "/thank-you";
  const isBusinessShowPage = pathname === "/businessshow";

  // Hide Navbar completely on the Business Show landing page
  if (isBusinessShowPage) return null;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "What We Build", href: "/what-we-build" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Aria AI", href: "/aria" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className={`w-full z-50 bg-[#0b0b0c]/95 border-b border-muted-grey/20 ${isThankYouPage ? "relative" : "sticky top-0"}`}>
        <div className="w-full max-w-[1536px] mx-auto grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-3.5 md:py-4">
          {/* Left side Logo */}
          <div className="flex justify-start">
            <Link href="/" aria-label="AK Enterprises Home">
              <Logo />
            </Link>
          </div>

          {/* Center navigation */}
          <div className="hidden md:flex justify-center items-center gap-7 lg:gap-9 text-xs lg:text-[13px] font-bold tracking-[0.16em] uppercase text-warm-grey/80">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 whitespace-nowrap ${
                    isActive ? "text-brand-gold" : "hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right side CTA & Mobile Menu */}
          <div className="flex justify-end items-center gap-6 lg:gap-8">


            {/* Desktop CTA (5. Book a Free Audit) */}
            <div className="hidden md:block">
              <Link
                href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                {/* White specular glare sweep on hover */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
                <span className="relative z-10">Book a Free Audit</span>
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <Link
                href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-wider overflow-hidden shadow-sm active:scale-95 transition-transform whitespace-nowrap"
              >
                <span className="relative z-10">Book a Free Audit</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Mobile Menu"
                className="p-2 text-warm-grey hover:text-brand-gold bg-[#141416] border border-muted-grey/30 rounded-lg transition-colors cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0b0b0c] flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200 overflow-y-auto">
          {/* Top Bar inside overlay */}
          <div className="flex items-center justify-between border-b border-muted-grey/20 pb-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="AK Enterprises Home"
            >
              <Logo />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
              className="p-2.5 text-warm-grey hover:text-brand-gold bg-[#141416] border border-muted-grey/30 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Navigation Links (Exact ordered stack) */}
          <div className="flex flex-col gap-6 py-8">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between text-2xl sm:text-3xl font-serif italic transition-colors duration-200 border-b border-[#18181a] pb-4 ${
                    isActive ? "text-brand-gold" : "text-white hover:text-white/80"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className={`text-xs font-mono font-bold tracking-widest not-italic ${
                    isActive ? "text-brand-gold" : "text-warm-grey/50 group-hover:text-white"
                  }`}>
                    0{idx + 1} →
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Bottom Actions inside overlay */}
          <div className="pt-4 border-t border-muted-grey/20 flex flex-col gap-4">
            <Link
              href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative w-full inline-flex items-center justify-center bg-brand-gold text-ink-black py-4 rounded-xl text-sm font-bold uppercase tracking-wider overflow-hidden shadow-lg active:scale-98 transition-transform text-center"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
              <span className="relative z-10">Book a Free Audit</span>
            </Link>

            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-warm-grey/60 uppercase pt-2">
              <span>UK, USA & EU OPERATIONS</span>
              <span>2026 DEPLOYMENTS</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
