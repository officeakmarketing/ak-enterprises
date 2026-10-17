"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CATEGORIES = [
  { id: "all", label: "All Deployments", count: 15 },
  { id: "usa", label: "🇺🇸 United States", count: 9 },
  { id: "uk", label: "🇬🇧 United Kingdom", count: 2 },
  { id: "intl", label: "🌍 International", count: 4 },
];

const LOCATIONS = [
  // United States (9)
  {
    id: "usa-national",
    category: "usa",
    flag: "🇺🇸",
    code: "USA",
    region: "United States",
    name: "USA National",
    tag: "Multi-State Enterprise Infrastructure",
    metric: "9 Mall Centers · 7 States Live",
    href: "/most-effective-business-operating-systems-in-the-usa",
  },
  {
    id: "new-york",
    category: "usa",
    flag: "🇺🇸",
    code: "NYC",
    region: "New York",
    name: "New York",
    tag: "Capital Markets & High-Volume Intake",
    metric: "Instant Speed-to-Lead Dispatch",
    href: "/most-effective-business-operating-systems-in-new-york",
  },
  {
    id: "los-angeles",
    category: "usa",
    flag: "🇺🇸",
    code: "LAX",
    region: "Los Angeles",
    name: "Los Angeles",
    tag: "Entertainment & Agency Architecture",
    metric: "Autonomous Client Pipeline",
    href: "/most-effective-business-operating-systems-in-los-angeles",
  },
  {
    id: "chicago",
    category: "usa",
    flag: "🇺🇸",
    code: "CHI",
    region: "Chicago",
    name: "Chicago",
    tag: "Commercial & Logistics Scale",
    metric: "Multi-Unit Operational Routing",
    href: "/most-effective-business-operating-systems-in-chicago",
  },
  {
    id: "houston",
    category: "usa",
    flag: "🇺🇸",
    code: "HOU",
    region: "Houston",
    name: "Houston",
    tag: "Industrial & Energy Operations",
    metric: "High-Volume Intake Engines",
    href: "/most-effective-business-operating-systems-in-houston",
  },
  {
    id: "dallas",
    category: "usa",
    flag: "🇺🇸",
    code: "DFW",
    region: "Dallas",
    name: "Dallas",
    tag: "Corporate Enterprise Scale",
    metric: "Zero-Latency Booking Engine",
    href: "/most-effective-business-operating-systems-in-dallas",
  },
  {
    id: "miami",
    category: "usa",
    flag: "🇺🇸",
    code: "MIA",
    region: "Miami",
    name: "Miami",
    tag: "Hospitality & Private Capital",
    metric: "High-Ticket Client Dispatch",
    href: "/most-effective-business-operating-systems-in-miami",
  },
  {
    id: "atlanta",
    category: "usa",
    flag: "🇺🇸",
    code: "ATL",
    region: "Atlanta",
    name: "Atlanta",
    tag: "Regional Growth Operations",
    metric: "Multi-Channel Autonomous Follow-Up",
    href: "/most-effective-business-operating-systems-in-atlanta",
  },
  {
    id: "minneapolis",
    category: "usa",
    flag: "🇺🇸",
    code: "MSP",
    region: "Minneapolis",
    name: "Minneapolis",
    tag: "High-Volume Commerce Systems",
    metric: "Automated Conversion Pipeline",
    href: "/most-effective-business-operating-systems-in-minneapolis",
  },

  // United Kingdom (2)
  {
    id: "uk-national",
    category: "uk",
    flag: "🇬🇧",
    code: "GBR",
    region: "United Kingdom",
    name: "UK National",
    tag: "Nationwide Operating Architecture",
    metric: "Verified $301K+ Systems",
    href: "/most-effective-business-operating-systems-in-the-uk",
  },
  {
    id: "london",
    category: "uk",
    flag: "🇬🇧",
    code: "LDN",
    region: "London",
    name: "London",
    tag: "Capital Markets & Speed-to-Lead",
    metric: "Sub-60s Enquiry Conversion",
    href: "/most-effective-business-operating-systems-in-london",
  },

  // Middle East & International (4)
  {
    id: "dubai",
    category: "intl",
    flag: "🇦🇪",
    code: "DXB",
    region: "Dubai",
    name: "Dubai",
    tag: "Luxury Commerce & High-Value Services",
    metric: "24/7 Autonomous Lead Capture",
    href: "/most-effective-business-operating-systems-in-dubai",
  },
  {
    id: "abu-dhabi",
    category: "intl",
    flag: "🇦🇪",
    code: "AUH",
    region: "Abu Dhabi",
    name: "Abu Dhabi",
    tag: "Institutional & Sovereign Scale",
    metric: "Enterprise Workflow Governance",
    href: "/most-effective-business-operating-systems-in-abu-dhabi",
  },
  {
    id: "doha",
    category: "intl",
    flag: "🇶🇦",
    code: "DOH",
    region: "Doha",
    name: "Doha",
    tag: "Executive Advisory Systems",
    metric: "High-Net-Worth Advisory Engine",
    href: "/most-effective-business-operating-systems-in-doha",
  },
  {
    id: "romania",
    category: "intl",
    flag: "🇷🇴",
    code: "ROU",
    region: "Romania",
    name: "Romania",
    tag: "European Tech & Operational Scale",
    metric: "Complete Operating Infrastructure",
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
      const scrollOffset = direction === "left" ? -380 : 380;
      sliderRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 border-b border-muted-grey/20 relative bg-ink-black overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/[0.06] via-transparent to-transparent" />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <ScrollReveal>
          {/* Main Enclosure Console Frame - Matches signature luxury map container */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl border border-brand-gold/35 bg-[#050508]/95 p-5 sm:p-8 lg:p-10 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95)] overflow-hidden">
            {/* Top ambient highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent pointer-events-none" />

            {/* Subtle architectural grid pattern */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#C6A87D07_1px,transparent_1px),linear-gradient(to_bottom,#C6A87D07_1px,transparent_1px)] bg-[size:36px_36px] opacity-70" />

            {/* Header: Status Readout & Title */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-6 mb-6 border-b border-brand-gold/20">
              <div className="max-w-3xl">
                {/* Telemetry live status pill */}
                <div className="inline-flex items-center gap-2.5 border border-brand-gold/40 bg-[#0a0a0d]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-brand-gold text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase font-bold mb-4 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span>GLOBAL OPERATIONS NETWORK &bull; 15 ACTIVE DEPLOYMENTS</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-serif italic text-white leading-[1.18] tracking-tight">
                  Operating Systems by{" "}
                  <span className="not-italic font-normal bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
                    Territory
                  </span>
                </h2>

                <p className="mt-2.5 text-warm-grey/80 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                  Dedicated operational infrastructure, autonomous lead triage, and verified revenue engines custom-engineered for service businesses across North America, the United Kingdom, the Middle East, and Europe.
                </p>
              </div>

              {/* Slider Hardware Controls */}
              <div className="flex items-center gap-4 self-start lg:self-end">
                <div className="hidden sm:flex flex-col text-right font-mono text-[10px] text-warm-grey/60 uppercase tracking-widest">
                  <span className="text-brand-gold font-bold">{filteredLocations.length} Regional Hubs</span>
                  <span>Autonomous Pipeline</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scrollSlider("left")}
                    aria-label="Previous hub"
                    className="w-11 h-11 rounded-xl border border-brand-gold/40 bg-[#0a0a0f] text-brand-gold hover:text-white hover:border-brand-gold hover:bg-brand-gold/15 transition-all flex items-center justify-center shadow-lg active:scale-95 cursor-pointer group"
                  >
                    <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollSlider("right")}
                    aria-label="Next hub"
                    className="w-11 h-11 rounded-xl border border-brand-gold/40 bg-[#0a0a0f] text-brand-gold hover:text-white hover:border-brand-gold hover:bg-brand-gold/15 transition-all flex items-center justify-center shadow-lg active:scale-95 cursor-pointer group"
                  >
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Region Filter Dock */}
            <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-4 mb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border ${
                    activeCategory === cat.id
                      ? "bg-brand-gold/15 text-white border-brand-gold font-bold shadow-[0_0_20px_rgba(198,168,125,0.25)]"
                      : "bg-[#0b0b10]/90 text-warm-grey/75 border-muted-grey/25 hover:border-brand-gold/40 hover:text-white hover:bg-[#121218]"
                  }`}
                >
                  <span className="tracking-wider">{cat.label}</span>
                  <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded ${
                    activeCategory === cat.id ? "bg-brand-gold text-ink-black font-bold" : "bg-white/10 text-warm-grey"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* The Horizontal Telemetry Slider */}
            <div
              ref={sliderRef}
              className="relative z-10 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filteredLocations.map((item, idx) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex-shrink-0 w-[295px] sm:w-[340px] md:w-[370px] snap-start rounded-2xl border border-brand-gold/25 bg-[#09090d]/90 hover:bg-[#101016] backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:border-brand-gold/70 hover:-translate-y-1 shadow-[0_12px_35px_-10px_rgba(0,0,0,0.9)] hover:shadow-[0_18px_45px_-12px_rgba(198,168,125,0.3)] group relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Glowing hairline on top of card */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Ambient diagonal shine effect */}
                  <div className="absolute inset-0 w-1/2 h-full bg-white/[0.04] skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

                  <div>
                    {/* Top telemetry bar: Flag, Airport Code, Territory Tag, Index */}
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-muted-grey/15">
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg">{item.flag}</span>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-gold font-bold px-2 py-0.5 rounded-md bg-brand-gold/10 border border-brand-gold/30">
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
                    <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-warm-grey/75 mb-4 line-clamp-1">
                      {item.tag}
                    </p>
                  </div>

                  {/* Bottom Footer: Metric & Launch Arrow */}
                  <div className="pt-3.5 border-t border-muted-grey/15 flex items-center justify-between mt-auto">
                    <span className="text-[10px] sm:text-[11px] font-mono text-brand-gold/90 font-medium flex items-center gap-1.5 truncate max-w-[210px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse flex-shrink-0" />
                      <span className="truncate">{item.metric}</span>
                    </span>

                    <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gold group-hover:text-white transition-colors flex items-center gap-1 font-bold flex-shrink-0">
                      <span>Access</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Global Index Circuit Strip (All 15 locations visible at a glance) */}
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
                    <span className="text-xs">{loc.flag}</span>
                    <span className="font-medium">{loc.name}</span>
                    <span className="text-brand-gold text-[10px] font-bold">→</span>
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
