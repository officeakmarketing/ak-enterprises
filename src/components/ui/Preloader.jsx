"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // If the blocking head script already determined it was seen, unmount immediately
    if (typeof document !== "undefined" && document.documentElement.classList.contains("intro-seen")) {
      setRemoved(true);
      return;
    }

    try {
      sessionStorage.setItem("ak_intro_seen", "true");
      localStorage.setItem("ak_intro_seen", "true");
    } catch {
      // storage blocked fallback
    }

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1500);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
      if (typeof document !== "undefined") {
        document.documentElement.classList.add("intro-seen");
      }
    }, 1950);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Expose window.playPreloader() in console for instant testing anytime
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.playPreloader = () => {
        document.documentElement.classList.remove("intro-seen");
        try {
          sessionStorage.removeItem("ak_intro_seen");
          localStorage.removeItem("ak_intro_seen");
        } catch {}
        setRemoved(false);
        setFading(false);

        setTimeout(() => {
          setFading(true);
        }, 1500);

        setTimeout(() => {
          setRemoved(true);
          document.documentElement.classList.add("intro-seen");
        }, 1950);
      };
    }
  }, []);

  if (removed) return null;

  return (
    <div
      id="ak-preloader"
      aria-hidden="true"
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#0b0b0c] transition-opacity duration-450 ease-out select-none ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background radial cyan glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full bg-cyan-500/10 blur-[90px] animate-pulse" />
      </div>

      {/* Monogram & Wordmark Reveal */}
      <div className="relative z-10 flex flex-col items-center justify-center animate-preloader-reveal">
        {/* AK Monogram with Cyan Glow */}
        <div className="relative flex items-baseline font-serif text-5xl sm:text-6xl md:text-7xl font-normal leading-none mb-3">
          <span className="italic relative z-10 text-[#F6E0A4] drop-shadow-[0_0_24px_rgba(6,182,212,0.85)] [text-shadow:0_0_30px_rgba(6,182,212,0.7)]">
            A
          </span>
          <span className="-ml-4 sm:-ml-5 relative z-0 text-brand-gold drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] [text-shadow:0_0_25px_rgba(6,182,212,0.5)]">
            K
          </span>
        </div>

        {/* ENTERPRISES Wordmark */}
        <span className="font-sans font-light text-brand-gold/90 text-xs sm:text-sm tracking-[0.38em] uppercase leading-none drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
          ENTERPRISES
        </span>

        {/* Cyan accent hairline */}
        <div className="mt-4 w-12 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
      </div>
    </div>
  );
}
