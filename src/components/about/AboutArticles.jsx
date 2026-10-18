"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

function IconAll(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );
}

function IconUsa(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  );
}

function IconUk(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function IconIntl(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

const CATEGORIES = [
  { id: "all", label: "All Deployments", count: 15, Icon: IconAll },
  { id: "usa", label: "United States", count: 9, Icon: IconUsa },
  { id: "uk", label: "United Kingdom", count: 2, Icon: IconUk },
  { id: "intl", label: "International", count: 4, Icon: IconIntl },
];

const LOCATIONS = [
  // United States (9)
  {
    id: "usa-national",
    category: "usa",
    badge: "US",
    code: "USA",
    region: "United States",
    name: "USA National",
    tag: "Multi-State Enterprise Infrastructure",
    href: "/most-effective-business-operating-systems-in-the-usa",
  },
  {
    id: "new-york",
    category: "usa",
    badge: "US",
    code: "NYC",
    region: "New York",
    name: "New York",
    tag: "Capital Markets & High-Volume Intake",
    href: "/most-effective-business-operating-systems-in-new-york",
  },
  {
    id: "los-angeles",
    category: "usa",
    badge: "US",
    code: "LAX",
    region: "Los Angeles",
    name: "Los Angeles",
    tag: "Entertainment & Agency Architecture",
    href: "/most-effective-business-operating-systems-in-los-angeles",
  },
  {
    id: "chicago",
    category: "usa",
    badge: "US",
    code: "CHI",
    region: "Chicago",
    name: "Chicago",
    tag: "Commercial & Logistics Scale",
    href: "/most-effective-business-operating-systems-in-chicago",
  },
  {
    id: "houston",
    category: "usa",
    badge: "US",
    code: "HOU",
    region: "Houston",
    name: "Houston",
    tag: "Industrial & Energy Operations",
    href: "/most-effective-business-operating-systems-in-houston",
  },
  {
    id: "dallas",
    category: "usa",
    badge: "US",
    code: "DFW",
    region: "Dallas",
    name: "Dallas",
    tag: "Corporate Enterprise Scale",
    href: "/most-effective-business-operating-systems-in-dallas",
  },
  {
    id: "miami",
    category: "usa",
    badge: "US",
    code: "MIA",
    region: "Miami",
    name: "Miami",
    tag: "Hospitality & Private Capital",
    href: "/most-effective-business-operating-systems-in-miami",
  },
  {
    id: "atlanta",
    category: "usa",
    badge: "US",
    code: "ATL",
    region: "Atlanta",
    name: "Atlanta",
    tag: "Regional Growth Operations",
    href: "/most-effective-business-operating-systems-in-atlanta",
  },
  {
    id: "minneapolis",
    category: "usa",
    badge: "US",
    code: "MSP",
    region: "Minneapolis",
    name: "Minneapolis",
    tag: "High-Volume Commerce Systems",
    href: "/most-effective-business-operating-systems-in-minneapolis",
  },

  // United Kingdom (2)
  {
    id: "uk-national",
    category: "uk",
    badge: "UK",
    code: "GBR",
    region: "United Kingdom",
    name: "UK National",
    tag: "Nationwide Operating Architecture",
    href: "/most-effective-business-operating-systems-in-the-uk",
  },
  {
    id: "london",
    category: "uk",
    badge: "UK",
    code: "LDN",
    region: "London",
    name: "London",
    tag: "Capital Markets & Speed-to-Lead",
    href: "/most-effective-business-operating-systems-in-london",
  },

  // Middle East & International (4)
  {
    id: "dubai",
    category: "intl",
    badge: "AE",
    code: "DXB",
    region: "Dubai",
    name: "Dubai",
    tag: "Luxury Commerce & High-Value Services",
    href: "/most-effective-business-operating-systems-in-dubai",
  },
  {
    id: "abu-dhabi",
    category: "intl",
    badge: "AE",
    code: "AUH",
    region: "Abu Dhabi",
    name: "Abu Dhabi",
    tag: "Institutional & Sovereign Scale",
    href: "/most-effective-business-operating-systems-in-abu-dhabi",
  },
  {
    id: "doha",
    category: "intl",
    badge: "QA",
    code: "DOH",
    region: "Doha",
    name: "Doha",
    tag: "Executive Advisory Systems",
    href: "/most-effective-business-operating-systems-in-doha",
  },
  {
    id: "romania",
    category: "intl",
    badge: "RO",
    code: "ROU",
    region: "Romania",
    name: "Romania",
    tag: "European Tech & Operational Scale",
    href: "/most-effective-business-operating-systems-in-romania",
  },
];

export default function AboutArticles() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sliderRef = useRef(null);

  const filteredLocations =
    activeCategory === "all"
      ? LOCATIONS
      : LOCATIONS.filter((loc) => loc.category === activeCategory);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollOffset = direction === "left" ? -360 : 360;
      sliderRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 border-b border-muted-grey/20 relative bg-ink-black overflow-hidden select-none">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <ScrollReveal>
          {/* Main Enclosure Console Frame */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl border border-brand-gold/30 bg-[#060609] p-5 sm:p-8 lg:p-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden">
            {/* Top ambient highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent pointer-events-none" />

            {/* Header: Title and Hardware Controls */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-6 mb-6 border-b border-brand-gold/20">
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-serif italic text-white leading-[1.18] tracking-tight">
                  Operating Systems by{" "}
                  <span className="not-italic font-normal bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
                    Territory
                  </span>
                </h2>

                <p className="mt-2 text-warm-grey/80 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                  Dedicated operational infrastructure, autonomous lead triage, and verified revenue engines engineered for service businesses across North America, the United Kingdom, the Middle East, and Europe.
                </p>
              </div>

              {/* Slider Hardware Navigation Controls */}
              <div className="flex items-center gap-3 self-start lg:self-end">
                <div className="hidden sm:flex flex-col text-right font-mono text-[10px] text-warm-grey/60 uppercase tracking-widest">
                  <span className="text-brand-gold font-bold">{filteredLocations.length} Regional Hubs</span>
                  <span>Autonomous Pipeline</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scrollSlider("left")}
                    aria-label="Previous hub"
                    className="w-10 h-10 rounded-xl border border-brand-gold/40 bg-[#0a0a0f] text-brand-gold hover:text-white hover:border-brand-gold hover:bg-brand-gold/15 transition-all flex items-center justify-center shadow-lg active:scale-95 cursor-pointer group"
                  >
                    <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollSlider("right")}
                    aria-label="Next hub"
                    className="w-10 h-10 rounded-xl border border-brand-gold/40 bg-[#0a0a0f] text-brand-gold hover:text-white hover:border-brand-gold hover:bg-brand-gold/15 transition-all flex items-center justify-center shadow-lg active:scale-95 cursor-pointer group"
                  >
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Region Filter Dock - Clean SVG icons, no emojis, no glow */}
            <div className="relative z-10 flex items-center gap-2.5 overflow-x-auto pb-4 mb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((cat) => {
                const IconComponent = cat.Icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border ${
                      activeCategory === cat.id
                        ? "bg-brand-gold/15 text-white border-brand-gold font-bold"
                        : "bg-[#0b0b10] text-warm-grey/75 border-muted-grey/25 hover:border-brand-gold/40 hover:text-white hover:bg-[#121218]"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="tracking-wider">{cat.label}</span>
                    <span className={`ml-1 text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      activeCategory === cat.id ? "bg-brand-gold text-ink-black font-bold" : "bg-white/10 text-warm-grey"
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* The Horizontal Telemetry Slider - Clean Cards without bottom metric / access buttons */}
            <div
              ref={sliderRef}
              className="relative z-10 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filteredLocations.map((item, idx) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex-shrink-0 w-[270px] sm:w-[300px] md:w-[320px] snap-start rounded-xl border border-brand-gold/25 bg-[#0d0d12] hover:bg-[#14141c] p-5 transition-all duration-200 hover:border-brand-gold/70 hover:-translate-y-1 shadow-lg group relative overflow-hidden flex flex-col justify-between will-change-transform"
                >
                  {/* Subtle top edge accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    {/* Header: Code Pill, Region, and Index */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-muted-grey/15">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-gold font-bold px-2 py-0.5 rounded bg-brand-gold/10 border border-brand-gold/30">
                          {item.code}
                        </span>
                        <span className="text-[11px] font-mono text-warm-grey/60 uppercase tracking-wider">
                          {item.region}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-warm-grey/40 group-hover:text-brand-gold font-semibold transition-colors">
                        SYS // {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Location Name */}
                    <h3 className="text-xl sm:text-2xl font-serif italic text-white group-hover:text-brand-gold transition-colors duration-200 mb-2 leading-snug">
                      {item.name}
                    </h3>

                    {/* Operational Scope */}
                    <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-warm-grey/75 line-clamp-2 leading-relaxed">
                      {item.tag}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* One Good Button For All Cards */}
            <div className="relative z-10 mt-6 sm:mt-8 flex justify-center">
              <Link
                href="https://calendly.com/ak-enterprises/call"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-brand-gold text-ink-black px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider overflow-hidden transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:bg-white"
              >
                <span className="relative z-10">Schedule a Regional Infrastructure Audit</span>
                <span className="relative z-10 group-hover:translate-x-1.5 transition-transform font-bold">&rarr;</span>
              </Link>
            </div>

            {/* Bottom Global Index Circuit Strip - All 15 locations cleanly linked without emojis */}
            <div className="relative z-10 mt-6 pt-5 border-t border-brand-gold/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-gold font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  COMPLETE DIRECTORY &bull; ALL 15 REGIONAL OPERATING SYSTEMS
                </span>
                <span className="text-[10px] font-mono text-warm-grey/60 tracking-wider">
                  DIRECT ACCESS &bull; 100% VERIFIED
                </span>
              </div>

              {/* Monospace Pill Chips Matrix */}
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={`index-pill-${loc.id}`}
                    href={loc.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0b0b10] border border-brand-gold/25 hover:border-brand-gold/70 text-[11px] font-mono text-warm-grey/85 hover:text-white hover:bg-brand-gold/10 transition-all duration-200 shadow-sm"
                  >
                    <span className="text-[9px] font-bold text-brand-gold px-1 rounded bg-brand-gold/10">{loc.badge}</span>
                    <span className="font-medium">{loc.name}</span>
                    <span className="text-brand-gold text-[10px] font-bold">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
