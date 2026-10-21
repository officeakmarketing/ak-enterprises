"use client";

import React, { useState } from "react";

const TERRITORY_NAMES = {
  "abu-dhabi": "Abu Dhabi (Federal Capital & Enterprise Systems HQ)",
  dubai: "Dubai (Global Commerce & High-Concurrency Hub)",
  qatar: "Doha, Qatar (Financial District & Scaled Operations)",
  sharjah: "Sharjah & Northern Emirates (Industrial Logistics)",
  "al-ain": "Al Ain (Inland Operations Corridor)",
};

const GEO_COORDS = {
  "abu-dhabi": "GEO: 24.4539° N, 54.3773° E",
  dubai: "GEO: 25.2048° N, 55.2708° E",
  qatar: "GEO: 25.2854° N, 51.5310° E",
  sharjah: "GEO: 25.3463° N, 55.4209° E",
  "al-ain": "GEO: 24.2075° N, 55.7447° E",
};

export default function MiddleEastInteractiveMap({ defaultActive = "abu-dhabi" }) {
  const [activeRegion, setActiveRegion] = useState(defaultActive);

  const displayGeo = activeRegion && GEO_COORDS[activeRegion] 
    ? GEO_COORDS[activeRegion] 
    : (GEO_COORDS[defaultActive] || "GEO: 24.4539° N, 54.3773° E (GCC)");

  return (
    <div
      id="map-middle-east"
      className="cta-map-container relative w-full rounded-2xl border border-brand-gold/40 bg-[#050508] p-2 sm:p-6 lg:p-8 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden my-12 select-none"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/[0.08] via-transparent to-transparent" />

      {/* Top-Left: Deployments & Operations Badge */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 pointer-events-none bg-[#0a0a0d]/90 backdrop-blur-md border border-brand-gold/40 rounded-xl px-4 py-3 shadow-2xl hidden sm:block text-left">
        <div className="text-[10px] font-mono text-brand-gold uppercase tracking-[0.22em] font-bold">
          DEPLOYMENTS &amp; OPERATIONS
        </div>
        <div className="text-white text-xs sm:text-sm font-medium mt-1">
          Abu Dhabi &bull; Dubai &bull; Doha &bull; GCC Enterprise Network
        </div>
      </div>

      {/* Top-Right: Active Region Telemetry Readout */}
      {activeRegion && (
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 pointer-events-none bg-[#0a0a0d]/95 backdrop-blur-md border border-brand-gold/60 rounded-xl px-3.5 py-2 shadow-2xl transition-all">
          <div className="text-[9px] font-mono text-brand-gold uppercase tracking-[0.22em] font-semibold">
            TERRITORY // ACTIVE
          </div>
          <div className="text-white text-xs sm:text-sm font-bold tracking-wide mt-0.5">
            {TERRITORY_NAMES[activeRegion] || activeRegion.toUpperCase()}
          </div>
        </div>
      )}

      {/* Bottom-Right: Geo Coordinate Badge */}
      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20 pointer-events-none bg-[#0a0a0d]/90 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 shadow-lg hidden sm:block">
        <span className="text-[10px] sm:text-xs font-mono text-warm-grey/80">
          {displayGeo}
        </span>
      </div>

      {/* SVG Map Container */}
      <div className="relative w-full flex items-center justify-center pt-3 pb-2 sm:pt-10 sm:pb-6">
        <svg
          version="1.1"
          id="svg_middle_east_map"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1050 680"
          xmlSpace="preserve"
          className="w-full max-w-[540px] sm:max-w-[680px] md:max-w-[780px] lg:max-w-[880px] h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
        >
          <style>{`
            .map-region {
              cursor: pointer;
              outline: none;
            }
            .map-region-single {
              transition: fill 0.22s ease, stroke 0.22s ease, stroke-width 0.22s ease;
              fill: #0c0c12;
              stroke: #C6A87D;
              stroke-opacity: 0.55;
              stroke-width: 2px;
            }
            .map-region:hover .map-region-single,
            .map-region-single.is-active {
              fill: #C6A87D !important;
              stroke: #FFFDF5 !important;
              stroke-width: 3.5px !important;
              stroke-opacity: 1 !important;
            }

            /* Watermark territory labels - High contrast luminous gold */
            .middleeast-watermark {
              fill: #F6E0A4;
              fill-opacity: 0.45;
              font-family: monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, sans-serif;
              font-weight: 800;
              pointer-events: none;
              user-select: none;
              transition: fill-opacity 0.22s ease, fill 0.22s ease;
            }
            .region-watermark {
              fill: #F6E0A4;
              fill-opacity: 0.40;
              font-family: monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, sans-serif;
              font-weight: 700;
              pointer-events: none;
              user-select: none;
              transition: fill-opacity 0.22s ease, fill 0.22s ease;
            }
            .region-watermark.is-active {
              fill: #FFFDF5 !important;
              fill-opacity: 1 !important;
            }

            /* Operational Beacon Pills - Always on top, high-legibility & stable */
            .region-pill {
              cursor: pointer;
              user-select: none;
              outline: none;
            }
            .region-pill rect {
              transition: stroke 0.2s ease, stroke-width 0.2s ease, fill 0.2s ease, filter 0.2s ease;
              fill: #08080d;
              stroke: #C6A87D;
              stroke-width: 2px;
              stroke-opacity: 0.95;
              filter: drop-shadow(0 4px 14px rgba(0, 0, 0, 0.95));
            }
            .region-pill.is-active rect,
            .region-pill:hover rect {
              stroke: #FFFDF5 !important;
              stroke-width: 3px !important;
              stroke-opacity: 1 !important;
              fill: #141420 !important;
              filter: drop-shadow(0 0 16px rgba(255, 246, 220, 0.45)) drop-shadow(0 8px 22px rgba(0, 0, 0, 0.95)) !important;
            }
            .region-pill text {
              fill: #FFFDF5;
              font-family: monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, sans-serif;
              font-weight: 800;
              letter-spacing: 0.08em;
              pointer-events: none;
              transition: fill 0.2s ease;
            }
            .region-pill.is-active text,
            .region-pill:hover text {
              fill: #FFFFFF !important;
            }
            .region-pill .beacon-dot {
              fill: #F6E0A4;
              transition: fill 0.22s ease;
            }
            .region-pill .beacon-ring {
              transition: stroke 0.22s ease;
              stroke: #C6A87D;
            }
            .region-pill.is-active .beacon-ring,
            .region-pill:hover .beacon-ring {
              stroke: #FFFDF5 !important;
            }
            .region-pill.is-active .beacon-dot,
            .region-pill:hover .beacon-dot {
              fill: #FFFDF5 !important;
            }
          `}</style>

          <defs>
            {/* Ambient Water Texture Pattern */}
            <pattern id="gulf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(201, 169, 97, 0.04)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Background Gulf Grid Water Texture */}
          <rect width="1050" height="680" fill="url(#gulf-grid)" pointerEvents="none" />

          {/* Ambient Waterway Waves Accent */}
          <path
            d="M 120 180 Q 300 240, 520 220 T 920 160"
            fill="none"
            stroke="rgba(201, 169, 97, 0.08)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <path
            d="M 160 210 Q 340 270, 560 250 T 950 200"
            fill="none"
            stroke="rgba(201, 169, 97, 0.06)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />

          {/* ======================================================== */}
          {/* LAYER 1: TERRITORY PATHS (BASE LANDMASS)                 */}
          {/* ======================================================== */}
          <g id="map-territories-layer">
            
            {/* 1. STATE OF QATAR (DOHA) */}
            <g
              id="region-qatar"
              className="map-region"
              onMouseEnter={() => setActiveRegion("qatar")}
              onMouseLeave={() => setActiveRegion(defaultActive)}
            >
              <path
                className={`map-region-single ${activeRegion === "qatar" ? "is-active" : ""}`}
                d="M 185 450 C 165 410, 140 365, 138 310 C 136 245, 160 185, 195 145 C 215 125, 235 130, 248 155 C 262 195, 276 230, 280 270 C 285 320, 275 375, 258 415 C 248 440, 220 455, 185 450 Z"
              />
            </g>

            {/* 2. ABU DHABI EMIRATE (UAE CAPITAL & WESTERN REGION) */}
            <g
              id="region-abu-dhabi"
              className="map-region"
              onMouseEnter={() => setActiveRegion("abu-dhabi")}
              onMouseLeave={() => setActiveRegion(defaultActive)}
            >
              <path
                className={`map-region-single ${activeRegion === "abu-dhabi" ? "is-active" : ""}`}
                d="M 185 450 C 235 460, 280 440, 330 430 C 390 420, 450 410, 495 385 C 530 365, 550 355, 580 330 C 600 350, 620 380, 640 415 C 670 455, 695 485, 710 525 C 695 565, 640 605, 560 615 C 470 620, 360 605, 290 580 C 235 560, 205 510, 185 450 Z"
              />
            </g>

            {/* 3. DUBAI EMIRATE & NORTHERN EMIRATES */}
            <g
              id="region-dubai"
              className="map-region"
              onMouseEnter={() => setActiveRegion("dubai")}
              onMouseLeave={() => setActiveRegion(defaultActive)}
            >
              <path
                className={`map-region-single ${activeRegion === "dubai" ? "is-active" : ""}`}
                d="M 580 330 C 610 305, 645 265, 680 225 C 715 190, 750 160, 785 130 C 812 150, 830 185, 825 235 C 815 285, 785 335, 745 395 C 715 440, 685 425, 640 415 C 615 375, 595 345, 580 330 Z"
              />
            </g>
          </g>

          {/* ======================================================== */}
          {/* LAYER 2: WATERMARKS & MARITIME LABELS                    */}
          {/* ======================================================== */}
          <g id="map-watermarks-layer" pointerEvents="none">
            {/* Gulf Waters Header */}
            <text
              className="middleeast-watermark"
              x="470"
              y="200"
              textAnchor="middle"
              fontSize="20"
              letterSpacing="0.28em"
            >
              ARABIAN GULF // MARITIME CORRIDOR
            </text>

            <text
              className="middleeast-watermark"
              x="470"
              y="225"
              textAnchor="middle"
              fontSize="12"
              letterSpacing="0.22em"
              fillOpacity="0.3"
            >
              HIGH-CONCURRENCY FINANCIAL &amp; ENTERPRISE HIGHWAY
            </text>

            {/* Regional Territory Watermarks */}
            <text
              className={`region-watermark ${activeRegion === "qatar" ? "is-active" : ""}`}
              x="205"
              y="325"
              textAnchor="middle"
              fontSize="20"
              letterSpacing="0.24em"
            >
              QATAR
            </text>

            <text
              className={`region-watermark ${activeRegion === "abu-dhabi" ? "is-active" : ""}`}
              x="410"
              y="515"
              textAnchor="middle"
              fontSize="22"
              letterSpacing="0.22em"
            >
              ABU DHABI
            </text>

            <text
              className={`region-watermark ${activeRegion === "dubai" ? "is-active" : ""}`}
              x="725"
              y="315"
              textAnchor="middle"
              fontSize="20"
              letterSpacing="0.22em"
            >
              DUBAI
            </text>
          </g>

          {/* ======================================================== */}
          {/* LAYER 2.5: TELEMETRY FIBER LINES                         */}
          {/* ======================================================== */}
          <g id="map-lines-layer" stroke="#C6A87D" strokeWidth="3" strokeDasharray="8 8" strokeOpacity="0.45" pointerEvents="none">
            {/* Abu Dhabi HQ <-> Dubai Hub */}
            <line x1="490" y1="375" x2="670" y2="235" />
            {/* Dubai Hub <-> Sharjah */}
            <line x1="670" y1="235" x2="745" y2="175" />
            {/* Abu Dhabi HQ <-> Al Ain */}
            <line x1="490" y1="375" x2="680" y2="480" />
            {/* Dubai Hub <-> Al Ain */}
            <line x1="670" y1="235" x2="680" y2="480" />
            {/* Abu Dhabi HQ <-> Doha */}
            <line x1="490" y1="375" x2="265" y2="275" />
          </g>

          {/* ======================================================== */}
          {/* LAYER 3: OPERATIONAL BEACONS (ALWAYS ON TOP)             */}
          {/* ======================================================== */}
          <g id="map-beacons-layer">
            
            {/* 1. Abu Dhabi Flagship HQ Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "abu-dhabi" ? "is-active" : ""}`}
              transform="translate(490, 375)"
              onMouseEnter={() => setActiveRegion("abu-dhabi")}
              onMouseLeave={() => setActiveRegion(defaultActive)}
            >
              <circle r="12" className="beacon-dot" />
              <circle r="34" fill="none" strokeWidth="2.5" className="beacon-ring animate-ping opacity-60" />
              <circle r="52" fill="none" strokeWidth="1.8" strokeDasharray="5 5" className="beacon-ring opacity-40" />
              <rect x="32" y="-28" width="220" height="56" rx="12" />
              <text x="48" y="9" fontSize="24">
                ABU DHABI HQ
              </text>
            </a>

            {/* 2. Dubai Global Hub Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "dubai" ? "is-active" : ""}`}
              transform="translate(670, 235)"
              onMouseEnter={() => setActiveRegion("dubai")}
              onMouseLeave={() => setActiveRegion(defaultActive)}
            >
              <circle r="11" className="beacon-dot" />
              <circle r="30" fill="none" strokeWidth="2.2" className="beacon-ring animate-pulse" />
              <rect x="30" y="-26" width="180" height="52" rx="11" />
              <text x="46" y="9" fontSize="23">
                DUBAI HUB
              </text>
            </a>

            {/* 3. Doha, Qatar Financial Hub Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "qatar" ? "is-active" : ""}`}
              transform="translate(265, 275)"
              onMouseEnter={() => setActiveRegion("qatar")}
              onMouseLeave={() => setActiveRegion(defaultActive)}
            >
              <circle r="11" className="beacon-dot" />
              <circle r="28" fill="none" strokeWidth="2" className="beacon-ring animate-pulse" />
              {/* Positioned to the left so it never overlaps the Abu Dhabi beacon */}
              <rect x="-195" y="-26" width="170" height="52" rx="11" />
              <text x="-178" y="9" fontSize="22">
                DOHA HUB
              </text>
            </a>

            {/* 4. Sharjah & Northern Operations Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "sharjah" ? "is-active" : ""}`}
              transform="translate(745, 175)"
              onMouseEnter={() => setActiveRegion("sharjah")}
              onMouseLeave={() => setActiveRegion(defaultActive)}
            >
              <circle r="9" className="beacon-dot" />
              <circle r="24" fill="none" strokeWidth="1.8" className="beacon-ring animate-pulse" />
              <rect x="24" y="-22" width="150" height="44" rx="10" />
              <text x="38" y="7" fontSize="20">
                SHARJAH
              </text>
            </a>

            {/* 5. Al Ain Regional Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "al-ain" ? "is-active" : ""}`}
              transform="translate(680, 480)"
              onMouseEnter={() => setActiveRegion("al-ain")}
              onMouseLeave={() => setActiveRegion(defaultActive)}
            >
              <circle r="9" className="beacon-dot" />
              <circle r="24" fill="none" strokeWidth="1.8" className="beacon-ring animate-pulse" />
              <rect x="24" y="-22" width="140" height="44" rx="10" />
              <text x="38" y="7" fontSize="20">
                AL AIN
              </text>
            </a>

          </g>
        </svg>
      </div>
    </div>
  );
}
