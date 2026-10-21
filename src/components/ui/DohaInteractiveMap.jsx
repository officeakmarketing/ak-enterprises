"use client";

import React, { useState } from "react";

const REGION_NAMES = {
  doha: "Doha (Federal Capital & Central Financial District)",
  lusail: "Lusail & Al Daayen (Smart City & Enterprise Technology)",
  "al-rayyan": "Al Rayyan (Education City & High-Scale Systems)",
  "al-wakrah": "Al Wakrah (Southern Maritime & Logistics Hub)",
  "al-khor": "Al Khor & Al Shamal (Northern Industrial Corridor)",
  "al-shahaniya": "Al Shahaniya & Dukhan (Energy Systems & West Coast)",
};

export default function DohaInteractiveMap() {
  const [activeRegion, setActiveRegion] = useState("doha");

  return (
    <div
      id="map-doha"
      className="cta-map-container relative w-full rounded-2xl border border-brand-gold/40 bg-[#050508] p-2 sm:p-6 lg:p-8 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden my-12 select-none"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/[0.08] via-transparent to-transparent" />

      {/* Top-Left: Deployments & Operations Badge (Matching UK & USA Standard) */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 pointer-events-none bg-[#0a0a0d]/90 backdrop-blur-md border border-brand-gold/40 rounded-xl px-4 py-3 shadow-2xl hidden sm:block text-left">
        <div className="text-[10px] font-mono text-brand-gold uppercase tracking-[0.22em] font-bold">
          DEPLOYMENTS &amp; OPERATIONS
        </div>
        <div className="text-white text-xs sm:text-sm font-medium mt-1">
          Doha HQ &bull; Lusail &bull; Al Rayyan &bull; Al Wakrah &bull; Al Khor &bull; Nationwide
        </div>
      </div>

      {/* Top-Right: Active Region Telemetry Readout */}
      {activeRegion && (
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 pointer-events-none bg-[#0a0a0d]/95 backdrop-blur-md border border-brand-gold/60 rounded-xl px-3.5 py-2 shadow-2xl transition-all">
          <div className="text-[9px] font-mono text-brand-gold uppercase tracking-[0.22em] font-semibold">
            TERRITORY // ACTIVE
          </div>
          <div className="text-white text-xs sm:text-sm font-bold tracking-wide mt-0.5">
            {REGION_NAMES[activeRegion] || activeRegion.toUpperCase()}
          </div>
        </div>
      )}

      {/* Bottom-Right: Geo Coordinate Badge */}
      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20 pointer-events-none bg-[#0a0a0d]/90 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 shadow-lg hidden sm:block">
        <span className="text-[10px] sm:text-xs font-mono text-warm-grey/80">
          GEO: 25.2854° N, 51.5310° E
        </span>
      </div>

      {/* SVG Map Container - Sized and centered like UK map */}
      <div className="relative w-full flex items-center justify-center pt-3 pb-2 sm:pt-12 sm:pb-8">
        <svg
          version="1.1"
          id="svg_doha_map"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="160 80 720 1100"
          xmlSpace="preserve"
          className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[580px] h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
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
              stroke-width: 3.5px;
            }
            .map-region:hover .map-region-single,
            .map-region-single.is-active {
              fill: #C6A87D !important;
              stroke: #FFFDF5 !important;
              stroke-width: 6.5px !important;
              stroke-opacity: 1 !important;
            }

            /* Watermark territory labels - High contrast luminous gold */
            .region-watermark, .qatar-watermark {
              fill: #F6E0A4;
              fill-opacity: 0.70;
              font-family: monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, sans-serif;
              font-weight: 800;
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
              stroke-width: 3.2px;
              stroke-opacity: 0.95;
              filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.95));
            }
            .region-pill.is-active rect,
            .region-pill:hover rect {
              stroke: #FFFDF5 !important;
              stroke-width: 4.2px !important;
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

          {/* ======================================================== */}
          {/* LAYER 1: BASE REGION POLYGONS (QATAR MUNICIPALITIES)      */}
          {/* ======================================================== */}
          <g id="map-polygons-layer">
            
            {/* 1. Doha (Ad-Dawhah - Capital & Flagship) */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="doha"
              title="Doha"
              className="map-region"
              onMouseEnter={() => setActiveRegion("doha")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "doha" ? "is-active" : ""}`}
                points="575 580, 610 560, 645 565, 675 600, 695 640, 685 690, 655 725, 620 735, 580 710, 560 670, 555 625, 575 580"
              />
            </a>

            {/* 2. Lusail & Al Daayen */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="lusail"
              title="Lusail"
              className="map-region"
              onMouseEnter={() => setActiveRegion("lusail")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "lusail" ? "is-active" : ""}`}
                points="540 450, 580 435, 625 445, 655 490, 665 540, 645 565, 610 560, 575 580, 545 530, 530 480, 540 450"
              />
            </a>

            {/* 3. Al Rayyan */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="al-rayyan"
              title="Al Rayyan"
              className="map-region"
              onMouseEnter={() => setActiveRegion("al-rayyan")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "al-rayyan" ? "is-active" : ""}`}
                points="430 520, 545 530, 575 580, 555 625, 560 670, 580 710, 620 735, 585 790, 520 830, 460 820, 410 750, 390 660, 410 580, 430 520"
              />
            </a>

            {/* 4. Al Wakrah */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="al-wakrah"
              title="Al Wakrah"
              className="map-region"
              onMouseEnter={() => setActiveRegion("al-wakrah")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "al-wakrah" ? "is-active" : ""}`}
                points="620 735, 655 725, 685 690, 690 750, 670 830, 645 920, 615 1010, 580 1080, 520 1110, 460 1130, 430 1080, 470 980, 500 900, 520 830, 585 790, 620 735"
              />
            </a>

            {/* 5. Al Khor & Al Shamal */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="al-khor"
              title="Al Khor"
              className="map-region"
              onMouseEnter={() => setActiveRegion("al-khor")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "al-khor" ? "is-active" : ""}`}
                points="500 120, 550 150, 590 200, 620 270, 640 350, 645 420, 625 445, 580 435, 540 450, 490 450, 430 520, 410 470, 390 380, 420 280, 450 190, 500 120"
              />
            </a>

            {/* 6. Al Shahaniya & Dukhan */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="al-shahaniya"
              title="Al Shahaniya"
              className="map-region"
              onMouseEnter={() => setActiveRegion("al-shahaniya")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "al-shahaniya" ? "is-active" : ""}`}
                points="410 470, 430 520, 410 580, 390 660, 410 750, 460 820, 500 900, 470 980, 430 1080, 460 1130, 380 1140, 340 1050, 330 960, 310 850, 290 740, 265 650, 290 570, 340 480, 410 470"
              />
            </a>
          </g>

          {/* ======================================================== */}
          {/* LAYER 2: TELEMETRY FIBER LINES & TERRITORY WATERMARKS    */}
          {/* ======================================================== */}
          <g id="map-lines-layer" stroke="#C6A87D" strokeWidth="3" strokeDasharray="8 8" strokeOpacity="0.45" pointerEvents="none">
            {/* Doha HQ -> Lusail */}
            <line x1="630" y1="640" x2="600" y2="490" />
            {/* Lusail -> Al Khor */}
            <line x1="600" y1="490" x2="560" y2="310" />
            {/* Doha HQ -> Al Rayyan */}
            <line x1="630" y1="640" x2="480" y2="670" />
            {/* Al Rayyan -> Dukhan */}
            <line x1="480" y1="670" x2="320" y2="660" />
            {/* Doha HQ -> Al Wakrah */}
            <line x1="630" y1="640" x2="620" y2="830" />
          </g>

          <g id="map-watermarks-layer" pointerEvents="none">
            {/* National Silhouette Watermark */}
            <text
              className="qatar-watermark"
              x="460"
              y="580"
              textAnchor="middle"
              fontSize="44"
              letterSpacing="0.38em"
            >
              Q A T A R
            </text>

            {/* Regional Watermarks */}
            <text
              className={`region-watermark ${activeRegion === "doha" ? "is-active" : ""}`}
              x="620"
              y="700"
              textAnchor="middle"
              fontSize="30"
              letterSpacing="0.25em"
            >
              D O H A
            </text>

            <text
              className={`region-watermark ${activeRegion === "lusail" ? "is-active" : ""}`}
              x="580"
              y="440"
              textAnchor="middle"
              fontSize="26"
              letterSpacing="0.25em"
            >
              L U S A I L
            </text>

            <text
              className={`region-watermark ${activeRegion === "al-rayyan" ? "is-active" : ""}`}
              x="460"
              y="780"
              textAnchor="middle"
              fontSize="32"
              letterSpacing="0.3em"
            >
              A L   R A Y Y A N
            </text>

            <text
              className={`region-watermark ${activeRegion === "al-wakrah" ? "is-active" : ""}`}
              x="540"
              y="930"
              textAnchor="middle"
              fontSize="32"
              letterSpacing="0.3em"
            >
              A L   W A K R A H
            </text>

            <text
              className={`region-watermark ${activeRegion === "al-khor" ? "is-active" : ""}`}
              x="520"
              y="240"
              textAnchor="middle"
              fontSize="32"
              letterSpacing="0.28em"
            >
              A L   K H O R
            </text>
          </g>

          {/* ======================================================== */}
          {/* LAYER 3: OPERATIONAL BEACONS (MATCHING UK MAP PILLS)     */}
          {/* ======================================================== */}
          <g id="map-beacons-layer">
            
            {/* 1. Doha HQ Flagship Beacon (Always on top) */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "doha" ? "is-active" : ""}`}
              transform="translate(630, 640)"
              onMouseEnter={() => setActiveRegion("doha")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="13" className="beacon-dot" />
              <circle r="38" fill="none" strokeWidth="3" className="beacon-ring animate-ping opacity-60" />
              <circle r="58" fill="none" strokeWidth="2" strokeDasharray="6 6" className="beacon-ring opacity-40" />
              <rect x="38" y="-32" width="225" height="64" rx="12" />
              <text x="56" y="12" fontSize="30">
                DOHA HQ
              </text>
            </a>

            {/* 2. Lusail Smart City Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "lusail" ? "is-active" : ""}`}
              transform="translate(600, 490)"
              onMouseEnter={() => setActiveRegion("lusail")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="11" className="beacon-dot" />
              <circle r="28" fill="none" strokeWidth="2.5" className="beacon-ring animate-pulse" />
              <rect x="36" y="-30" width="180" height="60" rx="12" />
              <text x="52" y="11" fontSize="28">
                LUSAIL
              </text>
            </a>

            {/* 3. Al Rayyan Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "al-rayyan" ? "is-active" : ""}`}
              transform="translate(480, 670)"
              onMouseEnter={() => setActiveRegion("al-rayyan")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="11" className="beacon-dot" />
              <circle r="28" fill="none" strokeWidth="2.5" className="beacon-ring animate-pulse" />
              {/* Positioned to left for balance */}
              <rect x="-240" y="-30" width="205" height="60" rx="12" />
              <text x="-222" y="11" fontSize="28">
                AL RAYYAN
              </text>
            </a>

            {/* 4. Al Wakrah Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "al-wakrah" ? "is-active" : ""}`}
              transform="translate(620, 830)"
              onMouseEnter={() => setActiveRegion("al-wakrah")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="11" className="beacon-dot" />
              <circle r="28" fill="none" strokeWidth="2.5" className="beacon-ring animate-pulse" />
              <rect x="36" y="-30" width="220" height="60" rx="12" />
              <text x="52" y="11" fontSize="28">
                AL WAKRAH
              </text>
            </a>

            {/* 5. Al Khor Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "al-khor" ? "is-active" : ""}`}
              transform="translate(560, 310)"
              onMouseEnter={() => setActiveRegion("al-khor")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="11" className="beacon-dot" />
              <circle r="28" fill="none" strokeWidth="2.5" className="beacon-ring animate-pulse" />
              <rect x="34" y="-28" width="185" height="56" rx="12" />
              <text x="50" y="10" fontSize="26">
                AL KHOR
              </text>
            </a>

            {/* 6. Dukhan Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "al-shahaniya" ? "is-active" : ""}`}
              transform="translate(320, 660)"
              onMouseEnter={() => setActiveRegion("al-shahaniya")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="11" className="beacon-dot" />
              <circle r="28" fill="none" strokeWidth="2.5" className="beacon-ring animate-pulse" />
              <rect x="-195" y="-28" width="160" height="56" rx="12" />
              <text x="-180" y="10" fontSize="26">
                DUKHAN
              </text>
            </a>

          </g>
        </svg>
      </div>
    </div>
  );
}
