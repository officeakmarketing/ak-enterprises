"use client";

import { useState, useEffect } from "react";
import BackgroundSparkles from "@/components/ui/BackgroundSparkles";

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
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-ink-black overflow-hidden transition-opacity duration-450 ease-out select-none ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background: "radial-gradient(ellipse at center, #0d1217 0%, #080a0d 50%, #030405 100%)",
      }}
    >
      {/* Premium star particles identical to the footer */}
      <BackgroundSparkles count={45} />

      {/* Subtle Studio White/Silver Spotlight Glow as seen in footer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.035),transparent_70%)] pointer-events-none" />
      {/* Cinematic Ambient Glow Atmosphere */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Soft atmospheric cyan cloud - toned down */}
        <div className="w-[340px] h-[220px] sm:w-[500px] sm:h-[300px] md:w-[620px] md:h-[340px] rounded-full bg-cyan-500/10 blur-[100px]" />
        {/* Wider deep teal horizon - toned down */}
        <div className="absolute w-[500px] h-[320px] sm:w-[720px] sm:h-[420px] rounded-full bg-cyan-700/8 blur-[140px]" />
        {/* Warm gold core reflection */}
        <div className="absolute w-[240px] h-[160px] sm:w-[320px] sm:h-[200px] rounded-full bg-brand-gold/20 blur-[70px]" />
      </div>

      {/* Main Brand Logo */}
      <div className="relative z-10 flex flex-col items-center justify-center animate-preloader-reveal px-6">
        {/* Loader image with responsive sizing and subtle halo */}
        <img
          src="/loader.png"
          alt="AK Enterprises"
          width={1646}
          height={734}
          fetchPriority="high"
          className="w-[230px] sm:w-[320px] md:w-[380px] max-w-[80vw] h-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] drop-shadow-[0_0_20px_rgba(201,169,97,0.2)] select-none pointer-events-none"
        />

        {/* Luminous Accent Hairline with Gold Glow */}
        <div className="relative mt-5 sm:mt-7 flex items-center justify-center">
          <div className="w-16 sm:w-24 md:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A961] to-transparent shadow-[0_0_12px_rgba(201,169,97,0.7),0_0_24px_rgba(201,169,97,0.35)]" />
          <div className="absolute w-6 h-[2px] bg-[#F5DE9C]/90 rounded-full blur-[1.5px]" />
        </div>
      </div>
    </div>
  );
}
