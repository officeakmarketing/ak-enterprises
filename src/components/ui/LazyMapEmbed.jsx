"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * LazyMapEmbed
 * 1. Zero initial network or memory overhead: doesn't load until within 300px of viewport.
 * 2. Instant dark placeholder skeleton with gold pulse indicator while loading.
 * 3. Minimal iframe footprint without scroll-trapping or render-blocking scripts.
 */
export default function LazyMapEmbed({ src, title }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" } // Pre-fetches shortly before user scrolls to it
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mb-16 relative w-full h-[380px] sm:h-[460px] md:h-[520px] rounded-2xl border border-brand-gold/40 bg-[#040406] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)]"
    >
      {/* Skeleton / Initial Background */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#050508] flex items-center justify-center z-0">
          <div className="w-8 h-8 rounded-full border border-brand-gold/40 border-t-brand-gold animate-spin" />
        </div>
      )}

      {/* Lazy-Mounted Iframe */}
      {shouldLoad && (
        <iframe
          src={src}
          title={title}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full border-0 filter grayscale invert contrast-[145%] brightness-[68%] transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          allowFullScreen={false}
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}

      {/* Multi-Stage Ambient Black & Gold Vignette Masks */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-black via-transparent to-ink-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-black/75 via-transparent to-ink-black/75" />
      <div className="pointer-events-none absolute inset-0 bg-brand-gold/[0.05] mix-blend-color-dodge" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brand-gold/25 rounded-2xl shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]" />
    </div>
  );
}
