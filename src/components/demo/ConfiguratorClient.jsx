"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  TRADE_PRESETS,
  encodeDemoParams,
} from "@/lib/demoConfig";
import DemoBookingFlow from "@/components/demo/DemoBookingFlow";
import QRCodeCanvas from "@/components/demo/QRCodeCanvas";
import Logo from "@/components/ui/Logo";

export default function ConfiguratorClient() {
  const [selectedPresetId, setSelectedPresetId] = useState("barber");
  const [businessName, setBusinessName] = useState("King & Crown Grooming");
  const [trade, setTrade] = useState("Master Barbers & Grooming");
  const [accent, setAccent] = useState("#C9A961");
  const [service, setService] = useState("Haircut & Beard Sculpt");
  const [price, setPrice] = useState(48);
  const [slot, setSlot] = useState(45);

  // Device view switcher: 'mobile' | 'tablet' | 'desktop'
  const [viewMode, setViewMode] = useState("mobile");

  // Mobile configurator view tab: 'edit' | 'preview'
  const [mobileTab, setMobileTab] = useState("edit");

  const [origin, setOrigin] = useState("https://akenterprises.io");
  const [copied, setCopied] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const handleApplyPreset = (preset) => {
    setSelectedPresetId(preset.id);
    setBusinessName(preset.businessName);
    setTrade(preset.trade);
    setAccent(preset.accent);
    setService(preset.services[0].name);
    setPrice(preset.services[0].price);
    setSlot(preset.services[0].duration || preset.slotLength);
  };

  const handleReset = () => {
    handleApplyPreset(TRADE_PRESETS[0]);
  };

  const currentConfig = useMemo(() => {
    const matchedPreset = TRADE_PRESETS.find((p) => p.id === selectedPresetId) || TRADE_PRESETS[0];
    return {
      name: businessName,
      trade: trade,
      accent: accent,
      service: service,
      price: Number(price) || 0,
      slot: Number(slot) || 30,
      preset: selectedPresetId,
      presetMeta: matchedPreset,
    };
  }, [businessName, trade, accent, service, price, slot, selectedPresetId]);

  const demoUrl = useMemo(() => {
    const query = encodeDemoParams(currentConfig);
    return `${origin}/demo/book?${query}`;
  }, [origin, currentConfig]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(demoUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const selectedPresetObj = TRADE_PRESETS.find((p) => p.id === selectedPresetId) || TRADE_PRESETS[0];

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white flex flex-col selection:bg-[#C9A961] selection:text-black">
      
      {/* 1. TOP MINIMALIST BAR */}
      <header className="border-b border-white/[0.08] bg-[#0E0E10]/95 backdrop-blur-md sticky top-0 z-40 px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center shrink-0" aria-label="AK Enterprises Home">
            <Logo />
          </Link>
          <div className="h-4 w-px bg-white/10 hidden md:block" />
          <div className="hidden md:flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-warm-grey/80">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span>Exhibition Demo Engine</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Mobile Switcher Tab (Config vs Preview) */}
          <div className="flex lg:hidden bg-white/[0.04] border border-white/10 rounded-lg p-0.5">
            <button
              type="button"
              onClick={() => setMobileTab("edit")}
              className={`px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
                mobileTab === "edit"
                  ? "bg-brand-gold text-ink-black font-bold shadow-sm"
                  : "text-warm-grey hover:text-white"
              }`}
            >
              Config
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("preview")}
              className={`px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
                mobileTab === "preview"
                  ? "bg-brand-gold text-ink-black font-bold shadow-sm"
                  : "text-warm-grey hover:text-white"
              }`}
            >
              Preview
            </button>
          </div>

          {/* Show QR Button */}
          <button
            type="button"
            onClick={() => setQrModalOpen(true)}
            className="px-3 py-1.5 rounded-lg border border-brand-gold/40 bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="18" y="14" width="3" height="3" />
            </svg>
            <span>Show QR</span>
          </button>

          {/* Reset Button */}
          <button
            type="button"
            onClick={handleReset}
            className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-warm-grey hover:text-white text-xs font-mono tracking-wider uppercase transition-colors"
            title="Reset to default clean state for next prospect"
          >
            Reset
          </button>

          {/* Full Page Link */}
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-mono uppercase tracking-wider transition-colors"
          >
            Full Page &nearr;
          </Link>
        </div>
      </header>

      {/* 2. SPLIT WORKSPACE: Controls on Left, Device Frame on Right */}
      <main className="flex-1 max-w-[1536px] w-full mx-auto p-3 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* LEFT COLUMN: Controls & Presets */}
        <section
          aria-label="Demo Configuration"
          className={`space-y-4 sm:space-y-5 lg:col-span-6 xl:col-span-6 ${
            mobileTab === "preview" ? "hidden lg:block" : "block"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-brand-gold font-bold mb-1">
              <span>Interactive Stand Engine</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-serif text-white tracking-tight leading-snug">
              Instant Operating System Generator
            </h1>
            <p className="text-xs text-warm-grey/80 font-light mt-0.5">
              Select an industry below. Show the QR code to the prospect to test on their phone.
            </p>
          </div>

          {/* 10 Industry Presets */}
          <div className="bg-[#121214] border border-white/[0.08] rounded-xl p-3 sm:p-4 shadow-lg space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-warm-grey font-semibold">
                Industry Presets
              </span>
              <span className="text-[10px] font-mono text-warm-grey/50">
                10 Configured Niches
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
              {TRADE_PRESETS.map((preset) => {
                const isActive = selectedPresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleApplyPreset(preset)}
                    className={`p-2 rounded-lg border text-left transition-all ${
                      isActive
                        ? "border-brand-gold bg-brand-gold/15 text-white shadow-sm"
                        : "border-white/[0.08] bg-white/[0.02] text-warm-grey hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: preset.accent }}
                      />
                      <span className="text-xs font-semibold truncate">
                        {preset.label}
                      </span>
                    </div>
                    <div className="text-[9px] font-mono text-warm-grey/60 mt-0.5 truncate">
                      £{preset.services[0].price} &bull; {preset.slotLength}m
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Customization Details Form */}
          <div className="bg-[#121214] border border-white/[0.08] rounded-xl p-3 sm:p-4 shadow-lg space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-warm-grey font-semibold block">
              Prospect Customization
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-warm-grey/70 mb-1 font-medium">
                  Business Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-brand-gold/60"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-warm-grey/70 mb-1 font-medium">
                  Trade / Subtitle
                </label>
                <input
                  type="text"
                  value={trade}
                  onChange={(e) => setTrade(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-brand-gold/60"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[10px] font-mono uppercase tracking-wider text-warm-grey/70 mb-1 font-medium">
                  Featured Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {selectedPresetObj.services.map((srv) => {
                    const isPicked = service === srv.name;
                    return (
                      <button
                        key={srv.name}
                        type="button"
                        onClick={() => {
                          setService(srv.name);
                          setPrice(srv.price);
                          setSlot(srv.duration);
                        }}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          isPicked
                            ? "border-brand-gold bg-brand-gold/10 text-white"
                            : "border-white/[0.08] bg-white/[0.02] text-warm-grey hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <div className="text-xs font-semibold truncate">{srv.name}</div>
                        <div className="text-[10px] font-mono text-warm-grey/70 mt-0.5">
                          £{srv.price} &bull; {srv.duration} mins
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-warm-grey/70 mb-1 font-medium">
                  Price (£)
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono focus:outline-none focus:border-brand-gold/60"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-warm-grey/70 mb-1 font-medium">
                  Accent Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={accent}
                    onChange={(e) => setAccent(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0 p-0"
                  />
                  <input
                    type="text"
                    value={accent}
                    onChange={(e) => setAccent(e.target.value)}
                    className="w-24 px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono uppercase focus:outline-none focus:border-brand-gold/60"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Share Bar */}
          <div className="bg-[#121214] border border-white/[0.08] rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="text-left w-full sm:w-auto">
              <span className="text-xs font-mono uppercase tracking-wider text-warm-grey font-semibold block">
                Shareable Link
              </span>
              <p className="text-[10px] text-warm-grey/60">
                All trade parameters saved in link
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono uppercase tracking-wider transition-colors active:scale-95"
              >
                {copied ? "Copied!" : "Copy Link"}
              </button>

              <button
                type="button"
                onClick={() => setQrModalOpen(true)}
                className="px-3.5 py-1.5 rounded-lg bg-brand-gold text-ink-black font-bold text-xs uppercase tracking-wider shadow hover:scale-105 active:scale-95 transition-transform flex items-center gap-1.5"
              >
                <span>Launch QR</span>
              </button>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: Clean Device Frame (No bulky top dynamic island bezel) */}
        <section
          aria-label="Responsive Device Simulator"
          className={`flex flex-col items-center lg:sticky lg:top-16 w-full ${
            viewMode === "desktop" ? "lg:col-span-6 xl:col-span-6" : "lg:col-span-6 xl:col-span-6"
          } ${mobileTab === "edit" ? "hidden lg:flex" : "flex"}`}
        >
          {/* Viewport Switcher */}
          <div className="w-full flex items-center justify-between gap-2 mb-2.5 px-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-warm-grey/60 hidden sm:inline">
              Live Preview
            </span>

            {/* Toggle Pills */}
            <div className="inline-flex bg-[#121214] border border-white/10 rounded-xl p-1 gap-1 mx-auto sm:mx-0">
              <button
                type="button"
                onClick={() => setViewMode("mobile")}
                className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  viewMode === "mobile"
                    ? "bg-brand-gold text-ink-black font-bold shadow-sm"
                    : "text-warm-grey hover:text-white"
                }`}
              >
                Mobile
              </button>
              <button
                type="button"
                onClick={() => setViewMode("tablet")}
                className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  viewMode === "tablet"
                    ? "bg-brand-gold text-ink-black font-bold shadow-sm"
                    : "text-warm-grey hover:text-white"
                }`}
              >
                Tablet
              </button>
              <button
                type="button"
                onClick={() => setViewMode("desktop")}
                className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  viewMode === "desktop"
                    ? "bg-brand-gold text-ink-black font-bold shadow-sm"
                    : "text-warm-grey hover:text-white"
                }`}
              >
                Desktop
              </button>
            </div>
          </div>

          {/* CLEAN SCREEN CONTAINER (Without the thick intrusive black notch / bezel) */}
          <div className="w-full flex justify-center">
            
            {/* 1. MOBILE VIEW (Clean Edge-to-Edge 375px Container) */}
            {viewMode === "mobile" && (
              <div className="w-full max-w-[375px] h-[720px] bg-[#0A0A0B] rounded-3xl overflow-hidden shadow-2xl border border-white/[0.12] flex flex-col">
                <div className="flex-1 overflow-y-auto hide-scrollbar">
                  <DemoBookingFlow config={currentConfig} standalone={false} />
                </div>
              </div>
            )}

            {/* 2. TABLET VIEW (600px Clean Glass Container) */}
            {viewMode === "tablet" && (
              <div className="w-full max-w-[580px] h-[720px] bg-[#0A0A0B] rounded-2xl overflow-hidden shadow-2xl border border-white/[0.12] flex flex-col">
                <div className="flex-1 overflow-y-auto hide-scrollbar">
                  <DemoBookingFlow config={currentConfig} standalone={false} />
                </div>
              </div>
            )}

            {/* 3. DESKTOP VIEW (Browser Chrome Style) */}
            {viewMode === "desktop" && (
              <div className="w-full max-w-[780px] h-[720px] bg-[#0A0A0B] rounded-xl overflow-hidden shadow-2xl border border-white/[0.12] flex flex-col">
                <div className="bg-[#121214] px-3 py-2 border-b border-white/[0.08] flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 bg-white/[0.04] rounded px-2.5 py-0.5 text-[10px] font-mono text-warm-grey/60 text-center truncate">
                    akenterprises.io/demo/book?preset={selectedPresetId}
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto hide-scrollbar">
                  <DemoBookingFlow config={currentConfig} standalone={false} />
                </div>
              </div>
            )}

          </div>
        </section>

      </main>

      {/* Stand QR Modal */}
      {qrModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#121214] border border-white/[0.12] rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setQrModalOpen(false)}
              className="absolute top-4 right-4 text-warm-grey hover:text-white text-lg font-mono"
            >
              &times;
            </button>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full font-bold">
                Scan with Phone Camera
              </span>
              <h2 className="text-xl font-serif text-white mt-2 font-semibold">
                {businessName}
              </h2>
              <p className="text-xs text-warm-grey/70 mt-0.5">
                Launches directly on their smartphone.
              </p>
            </div>

            <div className="py-1 flex justify-center">
              <QRCodeCanvas url={demoUrl} size={200} accent={accent} />
            </div>

            <div className="pt-1 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="w-full py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono uppercase tracking-wider transition-colors"
              >
                {copied ? "Link Copied!" : "Copy Direct URL"}
              </button>
              <button
                type="button"
                onClick={() => setQrModalOpen(false)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
