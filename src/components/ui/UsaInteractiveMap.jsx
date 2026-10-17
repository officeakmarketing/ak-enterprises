"use client";

import React, { useState } from "react";
import { USA_MAP_PATHS, USA_STATE_NAMES } from "@/data/usaMapData";

export default function UsaInteractiveMap() {
  const [activeState, setActiveState] = useState(null);

  return (
    <div className="cta-map-container relative w-full rounded-2xl border border-brand-gold/40 bg-[#050508] p-2 sm:p-6 lg:p-8 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden my-12 select-none">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/[0.08] via-transparent to-transparent" />

      {/* Top-Left: Deployments & Operations Badge (Matching UK Reference) */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 pointer-events-none bg-[#0a0a0d]/90 backdrop-blur-md border border-brand-gold/40 rounded-xl px-4 py-3 shadow-2xl hidden sm:block text-left">
        <div className="text-[10px] font-mono text-brand-gold uppercase tracking-[0.22em] font-bold">
          DEPLOYMENTS &amp; OPERATIONS
        </div>
        <div className="text-white text-xs sm:text-sm font-medium mt-1">
          New York &bull; San Francisco &bull; Austin &bull; Chicago &bull; Miami &bull; Nationwide
        </div>
      </div>

      {/* Top-Right: Active State Telemetry Readout */}
      {activeState && (
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 pointer-events-none bg-[#0a0a0d]/95 backdrop-blur-md border border-brand-gold/60 rounded-xl px-3.5 py-2 shadow-2xl transition-all">
          <div className="text-[9px] font-mono text-brand-gold uppercase tracking-[0.22em] font-semibold">
            TERRITORY // ACTIVE
          </div>
          <div className="text-white text-xs sm:text-sm font-bold tracking-wide mt-0.5">
            {USA_STATE_NAMES[activeState] || activeState.toUpperCase()}
          </div>
        </div>
      )}

      {/* Bottom-Right: Geo Coordinate Badge (Matching UK Reference) */}
      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20 pointer-events-none bg-[#0a0a0d]/90 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 shadow-lg hidden sm:block">
        <span className="text-[10px] sm:text-xs font-mono text-warm-grey/80">
          GEO: 37.0902° N, 95.7129° W
        </span>
      </div>

      {/* SVG Map Container - Sized larger for mobile screens */}
      <div className="relative w-full flex items-center justify-center pt-3 pb-2 sm:pt-10 sm:pb-6">
        <svg
          version="1.1"
          id="svg_usa_map"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 960 600"
          xmlSpace="preserve"
          className="w-full max-w-[520px] sm:max-w-[660px] md:max-w-[780px] lg:max-w-[880px] h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
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
              stroke-width: 1.2px;
            }
            .map-region:hover .map-region-single,
            .map-region-single.is-active {
              fill: #C6A87D !important;
              stroke: #FFFDF5 !important;
              stroke-width: 2.8px !important;
              stroke-opacity: 1 !important;
            }

            /* Watermark territory labels - High contrast luminous gold */
            .usa-watermark {
              fill: #F6E0A4;
              fill-opacity: 0.55;
              font-family: monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, sans-serif;
              font-weight: 800;
              pointer-events: none;
              user-select: none;
              transition: fill-opacity 0.22s ease, fill 0.22s ease;
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
              stroke-width: 1.8px;
              stroke-opacity: 0.95;
              filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.95));
            }
            .region-pill.is-active rect,
            .region-pill:hover rect {
              stroke: #FFFDF5 !important;
              stroke-width: 2.4px !important;
              stroke-opacity: 1 !important;
              fill: #141420 !important;
              filter: drop-shadow(0 0 14px rgba(255, 246, 220, 0.45)) drop-shadow(0 6px 18px rgba(0, 0, 0, 0.95)) !important;
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
          {/* LAYER 1: BASE US STATE POLYGONS                          */}
          {/* ======================================================== */}
          <g id="map-states-layer">
            {Object.entries(USA_MAP_PATHS).map(([code, pathData]) => {
              const isActive = activeState === code;
              const stateName = USA_STATE_NAMES[code] || code.toUpperCase();
              return (
                <a
                  key={code}
                  href="https://calendly.com/ak-enterprises/call"
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`state-${code}`}
                  title={stateName}
                  className="map-region"
                  onMouseEnter={() => setActiveState(code)}
                  onMouseLeave={() => setActiveState(null)}
                >
                  <path
                    d={pathData}
                    className={`map-region-single ${isActive ? "is-active" : ""}`}
                  />
                </a>
              );
            })}
          </g>

          {/* ======================================================== */}
          {/* LAYER 2: TELEMETRY FIBER LINES & CENTRAL WATERMARK       */}
          {/* ======================================================== */}
          <g
            id="map-lines-layer"
            stroke="#C6A87D"
            strokeWidth="1.8"
            strokeDasharray="5 5"
            strokeOpacity="0.45"
            pointerEvents="none"
          >
            {/* San Francisco -> Chicago */}
            <line x1="55" y1="270" x2="610" y2="205" />
            {/* San Francisco -> Austin */}
            <line x1="55" y1="270" x2="440" y2="460" />
            {/* Austin -> Chicago */}
            <line x1="440" y1="460" x2="610" y2="205" />
            {/* Chicago -> New York HQ */}
            <line x1="610" y1="205" x2="835" y2="195" />
            {/* Austin -> Miami */}
            <line x1="440" y1="460" x2="790" y2="530" />
            {/* New York HQ -> Miami */}
            <line x1="835" y1="195" x2="790" y2="530" />
          </g>

          <g id="map-watermarks-layer" pointerEvents="none">
            {/* Central Prominent United States Watermark */}
            <text
              className="usa-watermark"
              x="510"
              y="315"
              textAnchor="middle"
              fontSize="28"
              letterSpacing="0.32em"
            >
              UNITED STATES
            </text>
          </g>

          {/* ======================================================== */}
          {/* LAYER 3: OPERATIONAL BEACONS (ALWAYS ON TOP OF MAP)      */}
          {/* ======================================================== */}
          <g id="map-beacons-layer">
            {/* 1. New York HQ Flagship Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeState === "ny" ? "is-active" : ""}`}
              transform="translate(835, 195)"
              onMouseEnter={() => setActiveState("ny")}
              onMouseLeave={() => setActiveState(null)}
            >
              <circle r="6" className="beacon-dot" />
              <circle r="18" fill="none" strokeWidth="1.8" className="beacon-ring animate-ping opacity-60" />
              <circle r="26" fill="none" strokeWidth="1.2" strokeDasharray="3 3" className="beacon-ring opacity-40" />
              <rect x="18" y="-16" width="132" height="32" rx="7" />
              <text x="26" y="5" fontSize="13">
                NEW YORK HQ
              </text>
            </a>

            {/* 2. San Francisco Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeState === "ca" ? "is-active" : ""}`}
              transform="translate(55, 270)"
              onMouseEnter={() => setActiveState("ca")}
              onMouseLeave={() => setActiveState(null)}
            >
              <circle r="5" className="beacon-dot" />
              <circle r="14" fill="none" strokeWidth="1.5" className="beacon-ring animate-pulse" />
              <rect x="14" y="-15" width="128" height="30" rx="7" />
              <text x="22" y="5" fontSize="12.5">
                SAN FRANCISCO
              </text>
            </a>

            {/* 3. Chicago Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeState === "il" ? "is-active" : ""}`}
              transform="translate(610, 205)"
              onMouseEnter={() => setActiveState("il")}
              onMouseLeave={() => setActiveState(null)}
            >
              <circle r="5" className="beacon-dot" />
              <circle r="14" fill="none" strokeWidth="1.5" className="beacon-ring animate-pulse" />
              <rect x="15" y="-15" width="95" height="30" rx="7" />
              <text x="23" y="5" fontSize="13">
                CHICAGO
              </text>
            </a>

            {/* 4. Austin Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeState === "tx" ? "is-active" : ""}`}
              transform="translate(440, 460)"
              onMouseEnter={() => setActiveState("tx")}
              onMouseLeave={() => setActiveState(null)}
            >
              <circle r="5" className="beacon-dot" />
              <circle r="14" fill="none" strokeWidth="1.5" className="beacon-ring animate-pulse" />
              <rect x="15" y="-15" width="88" height="30" rx="7" />
              <text x="23" y="5" fontSize="13">
                AUSTIN
              </text>
            </a>

            {/* 5. Miami Beacon */}
            <a
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className={`region-pill ${activeState === "fl" ? "is-active" : ""}`}
              transform="translate(790, 530)"
              onMouseEnter={() => setActiveState("fl")}
              onMouseLeave={() => setActiveState(null)}
            >
              <circle r="5" className="beacon-dot" />
              <circle r="14" fill="none" strokeWidth="1.5" className="beacon-ring animate-pulse" />
              <rect x="-105" y="-15" width="88" height="30" rx="7" />
              <text x="-97" y="5" fontSize="13">
                MIAMI
              </text>
            </a>
          </g>
        </svg>
      </div>
    </div>
  );
}
