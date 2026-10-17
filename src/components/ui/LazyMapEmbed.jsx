"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * Purely Optimized Map Showcase:
 * 1. ZERO initial iframe weight (0 MB scripts, 0 network requests to external origins).
 * 2. Instant LCP with lightweight static dark-mode map imagery + glowing gold telemetry beacons.
 * 3. On-demand interactive activation: users can click "Explore Interactive Map" to mount the live map anytime.
 */
export default function LazyMapEmbed({ src, title }) {
  const [isInteractive, setIsInteractive] = useState(false);

  return (
    <div className="mb-16 relative w-full h-[380px] sm:h-[460px] md:h-[520px] rounded-2xl border border-brand-gold/40 bg-[#050507] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] group">
      {!isInteractive ? (
        /* 0 KB Overhead: Pure Vector & High-Precision Dark Satellite Map */
        <div className="relative w-full h-full flex items-center justify-center select-none">
          {/* Base High-Contrast Grayscale Map Vector */}
          <div className="absolute inset-0 bg-[#040406] overflow-hidden">
            <svg
              viewBox="0 0 800 600"
              className="w-full h-full opacity-60 filter contrast-125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C6A87D" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#C6A87D" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Ambient Glow */}
              <rect width="800" height="600" fill="url(#mapGlow)" />

              {/* Grid Lines for Architectural Depth */}
              <path
                d="M0 100 H800 M0 200 H800 M0 300 H800 M0 400 H800 M0 500 H800 M100 0 V600 M200 0 V600 M300 0 V600 M400 0 V600 M500 0 V600 M600 0 V600 M700 0 V600"
                stroke="#C6A87D"
                strokeWidth="0.5"
                strokeOpacity="0.08"
                strokeDasharray="4 4"
              />

              {/* Stylized UK Continental Vector Silhouette */}
              <path
                d="M390 110 L415 125 L430 150 L445 170 L435 200 L455 215 L440 245 L415 265 L425 300 L450 335 L460 370 L445 405 L465 445 L475 480 L465 515 L440 535 L405 550 L375 540 L350 515 L360 480 L335 455 L325 420 L355 395 L360 350 L380 325 L370 280 L350 255 L365 220 L380 185 L375 145 Z"
                fill="#0d0d12"
                stroke="#C6A87D"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />

              {/* Ireland Outline for Geographic Scale */}
              <path
                d="M280 290 L305 310 L310 345 L290 380 L300 415 L285 440 L260 430 L245 395 L255 350 L270 310 Z"
                fill="#0a0a0f"
                stroke="#C6A87D"
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray="2 2"
              />

              {/* Regional Telemetry Nodes */}
              {/* London Hub */}
              <g transform="translate(440, 480)">
                <circle r="4" fill="#F6E0A4" />
                <circle r="12" fill="none" stroke="#C6A87D" strokeWidth="1" className="animate-ping opacity-60" />
                <text x="18" y="4" fill="#C6A87D" fontSize="12" fontWeight="bold" fontFamily="monospace">LONDON HQ</text>
              </g>

              {/* Manchester / Midlands Hub */}
              <g transform="translate(415, 370)">
                <circle r="3.5" fill="#C6A87D" />
                <circle r="9" fill="none" stroke="#C6A87D" strokeWidth="1" className="animate-pulse opacity-75" />
                <text x="16" y="4" fill="#cbd5e1" fontSize="11" fontFamily="monospace">MANCHESTER</text>
              </g>

              {/* Edinburgh / Scotland Hub */}
              <g transform="translate(400, 215)">
                <circle r="3.5" fill="#C6A87D" />
                <circle r="9" fill="none" stroke="#C6A87D" strokeWidth="1" className="animate-pulse opacity-75" />
                <text x="16" y="4" fill="#cbd5e1" fontSize="11" fontFamily="monospace">EDINBURGH</text>
              </g>

              {/* Telemetry Connecting Ray */}
              <path
                d="M400 215 L415 370 L440 480"
                stroke="#C6A87D"
                strokeWidth="1"
                strokeDasharray="3 3"
                strokeOpacity="0.4"
              />
            </svg>
          </div>

          {/* Interactive Trigger Button */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <button
              onClick={() => setIsInteractive(true)}
              className="group/btn relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0a0a0d]/90 hover:bg-[#121218] border border-brand-gold/50 text-brand-gold hover:text-white font-mono text-xs font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Explore Interactive Map</span>
              <span className="text-white/60 group-hover/btn:translate-x-1 transition-transform">→</span>
            </button>
            <span className="mt-3 text-[10px] font-mono text-warm-grey/60 tracking-wider">
              Click to initialize live Google satellite viewport
            </span>
          </div>

          {/* Status Header Badge */}
          <div className="pointer-events-none absolute top-4 left-4 z-10 flex items-center gap-2 font-mono text-[10px] text-brand-gold bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-brand-gold/30">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            UNITED KINGDOM REGION NODE // OPTIMIZED
          </div>
        </div>
      ) : (
        /* Instant On-Demand Interactive Iframe (Loads ONLY when user clicks) */
        <div className="relative w-full h-full">
          <iframe
            src={src}
            title={title}
            className="w-full h-full border-0 filter grayscale invert contrast-[145%] brightness-[68%]"
            allowFullScreen={false}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}

      {/* Luxury Vignettes */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-black via-transparent to-ink-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-black/75 via-transparent to-ink-black/75" />
      <div className="pointer-events-none absolute inset-0 bg-brand-gold/[0.04] mix-blend-color-dodge" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brand-gold/25 rounded-2xl shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]" />
    </div>
  );
}
