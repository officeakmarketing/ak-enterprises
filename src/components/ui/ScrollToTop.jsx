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
        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black border-[1.5px] sm:border-2 border-brand-gold text-brand-gold hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center justify-center overflow-hidden cursor-pointer"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}
