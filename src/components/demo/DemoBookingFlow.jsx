"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { generateDeterministicSlots, TRADE_PRESETS } from "@/lib/demoConfig";

// Clean lightweight inline icons per niche
function NicheIcon({ type, className = "w-4 h-4" }) {
  switch (type) {
    case "scissors":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "sparkles":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 3l1.912 5.886a2 2 0 0 0 1.272 1.272L21 12l-5.886 1.912a2 2 0 0 0-1.272 1.272L12 21l-1.912-5.886a2 2 0 0 0-1.272-1.272L3 12l5.886-1.912a2 2 0 0 0 1.272-1.272L12 3z" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "activity":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case "dumbbell":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12" />
        </svg>
      );
    case "camera":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case "book":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case "car":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      );
    case "wrench":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
  }
}

export default function DemoBookingFlow({ config, standalone = true }) {
  const [step, setStep] = useState(1);
  
  const presetMeta = useMemo(() => {
    return (
      config.presetMeta ||
      TRADE_PRESETS.find((p) => p.id === config.preset) ||
      TRADE_PRESETS[0]
    );
  }, [config.preset, config.presetMeta]);

  const servicesList = useMemo(() => {
    if (presetMeta?.services && presetMeta.services.length > 0) {
      return presetMeta.services;
    }
    return [
      {
        name: config.service,
        price: config.price,
        duration: config.slot,
        desc: "Tailored 1-on-1 private appointment.",
      },
    ];
  }, [presetMeta, config.service, config.price, config.slot]);

  const [selectedServiceObj, setSelectedServiceObj] = useState(() => {
    const matched = servicesList.find((s) => s.name === config.service);
    return matched || servicesList[0];
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [bookingRef, setBookingRef] = useState("");

  const accent = config.accent || presetMeta.accent || "#C9A961";

  const availability = useMemo(() => {
    return generateDeterministicSlots(config.name, selectedServiceObj.duration || config.slot);
  }, [config.name, selectedServiceObj.duration, config.slot]);

  const activeDate = selectedDate || (availability[0] ? availability[0].dateKey : "");
  const activeDayObj = availability.find((d) => d.dateKey === activeDate) || availability[0];

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const initials = config.name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 3) || "DEMO";
    setBookingRef(`${initials}-${randomSuffix}`);
    setStep(3);
  };

  const currentPrice = selectedServiceObj.price;

  return (
    <div
      className={`w-full ${
        standalone
          ? "min-h-screen bg-[#0A0A0B] text-white selection:bg-[#C9A961] selection:text-black font-sans pb-16"
          : "text-white font-sans pb-6"
      }`}
    >
      {/* 1. CLEAN BANNER (No repetitive logos or bulky headers) */}
      <div className={`w-full bg-gradient-to-b ${presetMeta.coverGradient || "from-stone-900 to-[#0A0A0B]"} border-b border-white/[0.08] px-4 pt-5 pb-5`}>
        <div className="max-w-md mx-auto">
          
          <div className="flex items-center justify-between gap-2 mb-3">
            {/* Niche Badge */}
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold border backdrop-blur-md"
              style={{
                borderColor: `${accent}40`,
                backgroundColor: `${accent}12`,
                color: accent,
              }}
            >
              <NicheIcon type={presetMeta.icon} className="w-3 h-3" />
              <span>{config.trade}</span>
            </div>

            {/* Zero card reassurance */}
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
              Pay on Arrival
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-serif text-white tracking-tight leading-snug">
            {config.name}
          </h1>

          <p className="text-xs text-warm-grey/80 mt-1 line-clamp-2 leading-relaxed">
            {presetMeta.tagline}
          </p>

          {/* Stepper Dots */}
          <div className="flex items-center gap-1.5 pt-3">
            <span
              className={`h-1 rounded-full transition-all duration-300 ${
                step >= 1 ? "w-8" : "w-2 bg-white/10"
              }`}
              style={step >= 1 ? { backgroundColor: accent } : {}}
            />
            <span
              className={`h-1 rounded-full transition-all duration-300 ${
                step >= 2 ? "w-8" : "w-2 bg-white/10"
              }`}
              style={step >= 2 ? { backgroundColor: accent } : {}}
            />
            <span
              className={`h-1 rounded-full transition-all duration-300 ${
                step >= 3 ? "w-8" : "w-2 bg-white/10"
              }`}
              style={step >= 3 ? { backgroundColor: accent } : {}}
            />
          </div>
        </div>
      </div>

      {/* 2. BODY CONTAINER */}
      <main className="max-w-md mx-auto px-3.5 sm:px-4 py-4 space-y-4">
        
        {/* STEP 1: Select Service & Slot */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-150">
            
            {/* Services List */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-warm-grey/70 block px-1 font-semibold">
                Select Service
              </span>

              {servicesList.map((srv) => {
                const isSelected = selectedServiceObj.name === srv.name;
                return (
                  <button
                    key={srv.name}
                    type="button"
                    onClick={() => {
                      setSelectedServiceObj(srv);
                      setSelectedTime(null);
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all text-xs ${
                      isSelected
                        ? "border-transparent shadow-md"
                        : "border-white/[0.08] bg-[#121214] hover:border-white/20"
                    }`}
                    style={
                      isSelected
                        ? {
                            borderColor: accent,
                            backgroundColor: `${accent}14`,
                          }
                        : {}
                    }
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-semibold text-white text-xs sm:text-sm">
                            {srv.name}
                          </span>
                          {srv.popular && (
                            <span
                              className="text-[9px] font-mono px-1.5 py-0.2 rounded font-bold"
                              style={{
                                backgroundColor: `${accent}20`,
                                color: accent,
                              }}
                            >
                              Popular
                            </span>
                          )}
                        </div>
                        {srv.desc && (
                          <p className="text-[11px] text-warm-grey/75 mt-0.5 line-clamp-2 leading-relaxed">
                            {srv.desc}
                          </p>
                        )}
                        <span className="text-[10px] font-mono text-warm-grey/60 mt-1 block">
                          {srv.duration} mins &bull; 1-on-1 slot
                        </span>
                      </div>

                      <div className="text-right shrink-0">
                        <span
                          className="text-sm sm:text-base font-bold font-mono"
                          style={{ color: accent }}
                        >
                          {srv.price === 0 ? "Free" : `£${srv.price}`}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Date Selection */}
            <div className="bg-[#121214] border border-white/[0.08] rounded-xl p-3 shadow-lg">
              <span className="text-[11px] font-mono uppercase tracking-wider text-warm-grey/70 block mb-2 font-semibold">
                Select Date
              </span>

              <div className="grid grid-cols-5 gap-1.5">
                {availability.map((day) => {
                  const isDateActive = activeDate === day.dateKey;
                  return (
                    <button
                      key={day.dateKey}
                      type="button"
                      onClick={() => {
                        setSelectedDate(day.dateKey);
                        setSelectedTime(null);
                      }}
                      className={`p-1.5 sm:p-2 rounded-lg border text-center transition-all ${
                        isDateActive
                          ? "border-transparent text-[#0B0B0C] font-bold shadow-sm"
                          : "border-white/[0.08] bg-white/[0.02] text-warm-grey hover:border-white/20"
                      }`}
                      style={
                        isDateActive
                          ? { backgroundColor: accent, color: "#0B0B0C" }
                          : {}
                      }
                    >
                      <div className="text-[9px] uppercase font-mono">{day.dayName}</div>
                      <div className="text-xs font-semibold mt-0.5">
                        {day.dateFormatted.split(" ")[0]}
                      </div>
                      <div className="text-[8px] uppercase font-mono opacity-60">
                        {day.dateFormatted.split(" ")[1]}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Time Slots */}
              <div className="mt-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-warm-grey/70 block mb-2 font-semibold">
                  Available Times
                </span>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                  {activeDayObj?.slots.map((time) => {
                    const isTimePicked = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-1.5 px-2 rounded-md text-xs font-mono font-medium border transition-all ${
                          isTimePicked
                            ? "border-transparent text-[#0B0B0C] font-bold shadow-sm"
                            : "border-white/[0.08] bg-white/[0.02] text-white hover:border-white/30"
                        }`}
                        style={
                          isTimePicked
                            ? { backgroundColor: accent, color: "#0B0B0C" }
                            : {}
                        }
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Continue Action */}
            <button
              type="button"
              disabled={!selectedTime}
              onClick={() => setStep(2)}
              className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-95 active:scale-[0.99] flex items-center justify-center gap-2"
              style={{
                backgroundColor: accent,
                color: "#0B0B0C",
              }}
            >
              <span>Continue with {selectedTime || "Time"}</span>
              <span>&rarr;</span>
            </button>
          </div>
        )}

        {/* STEP 2: Details & Pay on Arrival */}
        {step === 2 && (
          <form
            onSubmit={handleConfirmBooking}
            className="space-y-3.5 animate-in fade-in duration-150"
          >
            {/* Booking Summary Card */}
            <div
              className="p-3 rounded-xl border flex items-center justify-between"
              style={{
                borderColor: `${accent}40`,
                backgroundColor: `${accent}0c`,
              }}
            >
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-warm-grey block">
                  Holding Slot
                </span>
                <span className="text-sm font-semibold text-white block">
                  {selectedServiceObj.name}
                </span>
                <span className="text-[11px] text-warm-grey font-mono block">
                  {activeDayObj?.dateFormatted} at {selectedTime}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-mono underline text-warm-grey hover:text-white"
              >
                Edit
              </button>
            </div>

            {/* Inputs */}
            <div className="bg-[#121214] border border-white/[0.08] rounded-xl p-3.5 space-y-2.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-warm-grey/70 block font-semibold">
                Your Details
              </span>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 text-xs focus:outline-none focus:border-white/30"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="Mobile (for SMS reminder) *"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 text-xs focus:outline-none focus:border-white/30"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 text-xs focus:outline-none focus:border-white/30"
                />
              </div>
            </div>

            {/* Pay on Arrival Banner */}
            <div
              className="p-3 rounded-xl border flex items-start gap-2.5"
              style={{
                borderColor: `${accent}35`,
                backgroundColor: `${accent}0a`,
              }}
            >
              <div
                className="w-3.5 h-3.5 rounded-full mt-0.5 border-2 flex items-center justify-center shrink-0"
                style={{ borderColor: accent }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />
              </div>
              <div className="text-[11px] leading-relaxed">
                <div className="text-white font-semibold">
                  Pay on Arrival ({currentPrice === 0 ? "Free" : `£${currentPrice}`})
                </div>
                <div className="text-warm-grey/80 text-[10px]">
                  Zero online card charges. Pay in person when you arrive.
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-xs font-mono text-warm-grey hover:text-white"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-1.5"
                style={{
                  backgroundColor: accent,
                  color: "#0B0B0C",
                }}
              >
                <span>Confirm Booking &rarr;</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Authentic Confirmation */}
        {step === 3 && (
          <div className="bg-[#121214] border border-white/[0.08] rounded-xl p-5 text-center space-y-4 animate-in zoom-in-95 duration-150 shadow-xl">
            <div
              className="w-12 h-12 rounded-full mx-auto flex items-center justify-center border"
              style={{
                borderColor: accent,
                backgroundColor: `${accent}15`,
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={accent}
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold">
                Reservation Confirmed
              </span>
              <h2 className="text-lg font-serif text-white mt-1.5 font-semibold">
                You&apos;re Booked In!
              </h2>
              <p className="text-xs text-warm-grey/80 mt-0.5">
                Confirmation sent to <span className="text-white font-medium">{customerName}</span>.
              </p>
            </div>

            {/* Ticket */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-3 text-left space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-warm-grey/60 font-mono text-[10px] uppercase">
                  Reference
                </span>
                <span className="font-mono font-bold" style={{ color: accent }}>
                  #{bookingRef}
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-white/[0.05] pt-1.5">
                <span className="text-warm-grey">Business</span>
                <span className="text-white font-medium">{config.name}</span>
              </div>
              <div className="flex justify-between items-center border-t border-white/[0.05] pt-1.5">
                <span className="text-warm-grey">Service</span>
                <span className="text-white font-medium">{selectedServiceObj.name}</span>
              </div>
              <div className="flex justify-between items-center border-t border-white/[0.05] pt-1.5">
                <span className="text-warm-grey">Time</span>
                <span className="text-white font-mono">
                  {activeDayObj?.dateFormatted} at {selectedTime}
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-white/[0.05] pt-1.5">
                <span className="text-warm-grey">Pay on Arrival</span>
                <span className="text-white font-mono font-bold">
                  {currentPrice === 0 ? "Free" : `£${currentPrice}`}
                </span>
              </div>
            </div>

            {/* CTA to book audit with AK Enterprises */}
            <div className="p-3.5 rounded-xl bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C9A961]/30 text-left space-y-1.5">
              <span className="text-[#C9A961] text-[9px] font-mono uppercase tracking-widest font-bold block">
                &bull; Built by AK Enterprises
              </span>
              <h3 className="text-xs font-serif italic text-white leading-tight">
                Want this automated booking operating system for your business?
              </h3>
              <p className="text-[10px] text-warm-grey/80 leading-relaxed">
                We build the custom systems that run your business without you.
              </p>
              <div className="pt-1">
                <Link
                  href="https://calendly.com/ak-enterprises/call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2 px-3 rounded-lg bg-[#C9A961] text-black font-bold uppercase tracking-wider text-[10px] hover:scale-[1.01] transition-transform shadow"
                >
                  <span>Book 15-Min Operational Audit &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Reset */}
            <button
              type="button"
              onClick={() => {
                setStep(1);
                setSelectedTime(null);
                setCustomerName("");
                setCustomerPhone("");
                setCustomerEmail("");
                setBookingRef("");
              }}
              className="text-xs font-mono text-warm-grey/70 hover:text-white transition-colors underline block mx-auto pt-1"
            >
              &larr; Start New Demo
            </button>
          </div>
        )}

      </main>
    </div>
  );
}
