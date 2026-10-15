"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0b0b0c]/90 backdrop-blur-md border border-brand-gold/40 text-brand-gold hover:text-white hover:border-brand-gold hover:bg-brand-gold/15 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(201,169,97,0.35)] transition-all duration-200 cursor-pointer"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
