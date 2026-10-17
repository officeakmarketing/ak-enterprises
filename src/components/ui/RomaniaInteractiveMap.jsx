"use client";

import React, { useState } from "react";

const REGION_NAMES = {
  transilvania: "Transylvania",
  muntenia: "Muntenia (Wallachia)",
  moldova: "Moldavia",
  dobrogea: "Dobrogea",
  banat: "Banat",
  oltenia: "Oltenia",
  crisana: "Crișana",
  maramures: "Maramureș",
};

export default function RomaniaInteractiveMap() {
  const [activeRegion, setActiveRegion] = useState(null);

  return (
    <div
      id="map-romania"
      className="cta-map-container relative w-full rounded-2xl border border-brand-gold/40 bg-[#050508] p-2 sm:p-6 lg:p-8 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden my-12 select-none"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/[0.08] via-transparent to-transparent" />

      {/* Top-Left: Deployments & Operations Badge (Matching UK & USA Reference) */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 pointer-events-none bg-[#0a0a0d]/90 backdrop-blur-md border border-brand-gold/40 rounded-xl px-4 py-3 shadow-2xl hidden sm:block text-left">
        <div className="text-[10px] font-mono text-brand-gold uppercase tracking-[0.22em] font-bold">
          DEPLOYMENTS &amp; OPERATIONS
        </div>
        <div className="text-white text-xs sm:text-sm font-medium mt-1">
          Bucharest &bull; Cluj-Napoca &bull; Timișoara &bull; Iași &bull; Brașov &bull; Constanța &bull; Nationwide
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

      {/* Bottom-Right: Geo Coordinate Badge (Matching Romania metadata) */}
      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20 pointer-events-none bg-[#0a0a0d]/90 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 shadow-lg hidden sm:block">
        <span className="text-[10px] sm:text-xs font-mono text-warm-grey/80">
          GEO: 45.9432° N, 24.9668° E
        </span>
      </div>

      {/* SVG Map Container */}
      <div className="relative w-full flex items-center justify-center pt-3 pb-2 sm:pt-10 sm:pb-6">
        <svg
          version="1.1"
          id="svg_romania_map"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1050 700"
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
            .romania-watermark {
              fill: #F6E0A4;
              fill-opacity: 0.55;
              font-family: monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, sans-serif;
              font-weight: 800;
              pointer-events: none;
              user-select: none;
              transition: fill-opacity 0.22s ease, fill 0.22s ease;
            }
            .region-watermark {
              fill: #F6E0A4;
              fill-opacity: 0.45;
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

          {/* ======================================================== */}
          {/* LAYER 1: REGIONAL POLYGONS                               */}
          {/* ======================================================== */}
          <g id="map-polygons-layer">
            {/* 1. Transilvania (Central Region) */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="transilvania"
              title="Transilvania"
              className="map-region"
              onMouseEnter={() => setActiveRegion("transilvania")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "transilvania" ? "is-active" : ""}`}
                points="280,185 310,175 360,160 420,150 480,165 530,205 570,260 605,330 630,395 590,420 535,435 470,440 410,435 350,420 300,415 260,410 250,370 225,335 265,290 290,235"
              />
            </a>

            {/* 2. Muntenia / Wallachia (Capital Region) */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="muntenia"
              title="Muntenia (Wallachia)"
              className="map-region"
              onMouseEnter={() => setActiveRegion("muntenia")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "muntenia" ? "is-active" : ""}`}
                points="470,440 535,435 590,420 630,395 675,415 730,440 770,465 760,515 755,575 745,610 690,635 635,650 570,655 515,650 460,640 475,600 480,545 485,490"
              />
            </a>

            {/* 3. Moldova / Moldavia (North-East Region) */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="moldova"
              title="Moldova"
              className="map-region"
              onMouseEnter={() => setActiveRegion("moldova")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "moldova" ? "is-active" : ""}`}
                points="435,95 490,70 560,55 630,45 700,45 735,90 765,150 795,220 815,290 830,370 820,430 795,460 770,465 730,440 675,415 630,395 605,330 570,260 530,205 480,165 420,150"
              />
            </a>

            {/* 4. Dobrogea (Black Sea Coast & Danube Delta) */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="dobrogea"
              title="Dobrogea"
              className="map-region"
              onMouseEnter={() => setActiveRegion("dobrogea")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "dobrogea" ? "is-active" : ""}`}
                points="770,465 815,455 870,440 925,445 945,470 930,500 895,525 870,560 860,605 850,630 805,625 765,615 745,610 755,575 760,515"
              />
            </a>

            {/* 5. Oltenia (South-West Region) */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="oltenia"
              title="Oltenia"
              className="map-region"
              onMouseEnter={() => setActiveRegion("oltenia")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "oltenia" ? "is-active" : ""}`}
                points="260,410 300,415 350,420 410,435 470,440 485,490 480,545 475,600 460,640 410,645 350,630 290,610 250,575 245,545 260,520 265,460"
              />
            </a>

            {/* 6. Banat (West / Danube Gate Region) */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="banat"
              title="Banat"
              className="map-region"
              onMouseEnter={() => setActiveRegion("banat")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "banat" ? "is-active" : ""}`}
                points="125,325 170,330 225,335 250,370 260,410 265,460 260,520 245,545 195,540 145,510 105,460 85,410 70,360 90,330"
              />
            </a>

            {/* 7. Crișana (Western Plain) */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="crisana"
              title="Crișana"
              className="map-region"
              onMouseEnter={() => setActiveRegion("crisana")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "crisana" ? "is-active" : ""}`}
                points="210,150 175,180 155,230 140,280 125,325 170,330 225,335 265,290 290,235 280,185 235,175"
              />
            </a>

            {/* 8. Maramureș (Northern Border) */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              id="maramures"
              title="Maramureș"
              className="map-region"
              onMouseEnter={() => setActiveRegion("maramures")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <polygon
                className={`map-region-single ${activeRegion === "maramures" ? "is-active" : ""}`}
                points="240,115 270,95 320,85 380,80 435,95 420,150 360,160 310,175 280,185 235,175 210,150"
              />
            </a>
          </g>

          {/* ======================================================== */}
          {/* LAYER 2: TELEMETRY FIBER LINES & WATERMARKS              */}
          {/* ======================================================== */}
          <g
            id="map-lines-layer"
            stroke="#C6A87D"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            strokeOpacity="0.45"
            pointerEvents="none"
          >
            {/* Bucharest HQ -> Cluj-Napoca */}
            <line x1="560" y1="530" x2="390" y2="265" />
            {/* Bucharest HQ -> Timișoara */}
            <line x1="560" y1="530" x2="150" y2="375" />
            {/* Bucharest HQ -> Iași */}
            <line x1="560" y1="530" x2="735" y2="215" />
            {/* Bucharest HQ -> Brașov */}
            <line x1="560" y1="530" x2="540" y2="385" />
            {/* Bucharest HQ -> Constanța */}
            <line x1="560" y1="530" x2="860" y2="565" />
            {/* Cluj-Napoca -> Timișoara */}
            <line x1="390" y1="265" x2="150" y2="375" />
            {/* Cluj-Napoca -> Brașov */}
            <line x1="390" y1="265" x2="540" y2="385" />
            {/* Brașov -> Iași */}
            <line x1="540" y1="385" x2="735" y2="215" />
          </g>

          <g id="map-watermarks-layer" pointerEvents="none">
            {/* Central Prominent Romania Watermark */}
            <text
              className="romania-watermark"
              x="440"
              y="330"
              textAnchor="middle"
              fontSize="44"
              letterSpacing="0.45em"
            >
              R O M A N I A
            </text>

            <text
              className={`region-watermark ${activeRegion === "transilvania" ? "is-active" : ""}`}
              x="440"
              y="225"
              textAnchor="middle"
              fontSize="19"
              letterSpacing="0.25em"
            >
              TRANSILVANIA
            </text>

            <text
              className={`region-watermark ${activeRegion === "muntenia" ? "is-active" : ""}`}
              x="580"
              y="595"
              textAnchor="middle"
              fontSize="20"
              letterSpacing="0.25em"
            >
              MUNTENIA
            </text>

            <text
              className={`region-watermark ${activeRegion === "moldova" ? "is-active" : ""}`}
              x="640"
              y="155"
              textAnchor="middle"
              fontSize="20"
              letterSpacing="0.25em"
            >
              MOLDOVA
            </text>

            <text
              className={`region-watermark ${activeRegion === "dobrogea" ? "is-active" : ""}`}
              x="830"
              y="515"
              textAnchor="middle"
              fontSize="16"
              letterSpacing="0.2em"
            >
              DOBROGEA
            </text>

            <text
              className={`region-watermark ${activeRegion === "banat" ? "is-active" : ""}`}
              x="170"
              y="440"
              textAnchor="middle"
              fontSize="18"
              letterSpacing="0.22em"
            >
              BANAT
            </text>

            <text
              className={`region-watermark ${activeRegion === "oltenia" ? "is-active" : ""}`}
              x="365"
              y="525"
              textAnchor="middle"
              fontSize="18"
              letterSpacing="0.22em"
            >
              OLTENIA
            </text>
          </g>

          {/* ======================================================== */}
          {/* LAYER 3: OPERATIONAL BEACONS (ALWAYS ON TOP)             */}
          {/* ======================================================== */}
          <g id="map-beacons-layer">
            {/* 1. Bucharest HQ Flagship Beacon (Always on top) */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "muntenia" ? "is-active" : ""}`}
              transform="translate(560, 530)"
              onMouseEnter={() => setActiveRegion("muntenia")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="12" className="beacon-dot" />
              <circle r="34" fill="none" strokeWidth="2.5" className="beacon-ring animate-ping opacity-60" />
              <circle r="52" fill="none" strokeWidth="1.8" strokeDasharray="5 5" className="beacon-ring opacity-40" />
              <rect x="32" y="-28" width="210" height="56" rx="12" />
              <text x="48" y="9" fontSize="24">
                BUCHAREST HQ
              </text>
            </a>

            {/* 2. Cluj-Napoca Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "transilvania" ? "is-active" : ""}`}
              transform="translate(390, 265)"
              onMouseEnter={() => setActiveRegion("transilvania")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="10" className="beacon-dot" />
              <circle r="26" fill="none" strokeWidth="2" className="beacon-ring animate-pulse" />
              <rect x="28" y="-24" width="195" height="48" rx="10" />
              <text x="42" y="8" fontSize="22">
                CLUJ-NAPOCA
              </text>
            </a>

            {/* 3. Timișoara Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "banat" ? "is-active" : ""}`}
              transform="translate(150, 375)"
              onMouseEnter={() => setActiveRegion("banat")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="10" className="beacon-dot" />
              <circle r="26" fill="none" strokeWidth="2" className="beacon-ring animate-pulse" />
              <rect x="26" y="-24" width="175" height="48" rx="10" />
              <text x="40" y="8" fontSize="22">
                TIMIȘOARA
              </text>
            </a>

            {/* 4. Iași Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "moldova" ? "is-active" : ""}`}
              transform="translate(735, 215)"
              onMouseEnter={() => setActiveRegion("moldova")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="10" className="beacon-dot" />
              <circle r="26" fill="none" strokeWidth="2" className="beacon-ring animate-pulse" />
              <rect x="26" y="-24" width="125" height="48" rx="10" />
              <text x="40" y="8" fontSize="22">
                IAȘI
              </text>
            </a>

            {/* 5. Brașov Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "transilvania" ? "is-active" : ""}`}
              transform="translate(540, 385)"
              onMouseEnter={() => setActiveRegion("transilvania")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="9" className="beacon-dot" />
              <circle r="24" fill="none" strokeWidth="2" className="beacon-ring animate-pulse" />
              <rect x="24" y="-23" width="145" height="46" rx="10" />
              <text x="38" y="7" fontSize="21">
                BRAȘOV
              </text>
            </a>

            {/* 6. Constanța Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeRegion === "dobrogea" ? "is-active" : ""}`}
              transform="translate(860, 565)"
              onMouseEnter={() => setActiveRegion("dobrogea")}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <circle r="9" className="beacon-dot" />
              <circle r="24" fill="none" strokeWidth="2" className="beacon-ring animate-pulse" />
              <rect x="22" y="-23" width="148" height="46" rx="10" />
              <text x="34" y="7" fontSize="20">
                CONSTANȚA
              </text>
            </a>
          </g>
        </svg>
      </div>
    </div>
  );
}
