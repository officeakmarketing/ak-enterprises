"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { generateDeterministicSlots, TRADE_PRESETS } from "@/lib/demoConfig";

export default function DemoBookingFlow({ config, standalone = true }) {
  const [step, setStep] = useState(1);
  
  const presetMeta = useMemo(() => {
    return (
      config.presetMeta ||
      TRADE_PRESETS.find((p) => p.id === config.preset) ||
      TRADE_PRESETS[0]
    );
  }, [config.preset, config.presetMeta]);

  const heroImage = config.coverImage || presetMeta.coverImage;
  const curr = config.currency || "£";

  // Services list prioritizing customized service name & price
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

  // Keep selected service strictly reactive to config updates
  const [selectedServiceObj, setSelectedServiceObj] = useState(() => {
    const matched = servicesList.find((s) => s.name === config.service);
    return matched || servicesList[0];
  });

  // Whenever config.service or config.price changes, ensure selectedServiceObj updates
  useEffect(() => {
    const matched = servicesList.find((s) => s.name === config.service);
    if (matched) {
      setSelectedServiceObj({ ...matched, price: config.price, duration: config.slot });
    } else if (servicesList[0]) {
      setSelectedServiceObj({ ...servicesList[0], price: config.price, duration: config.slot });
    }
  }, [config.service, config.price, config.slot, servicesList]);

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

  const handleConfirmBooking = async (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const initials = config.name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 3) || "DEMO";
    const refCode = `${initials}-${randomSuffix}`;
    setBookingRef(refCode);

    // Save to demo board endpoint so the stand board updates in real time
    try {
      await fetch("/api/demo/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ref: refCode,
          businessName: config.name,
          trade: config.trade,
          service: selectedServiceObj.name,
          price: selectedServiceObj.price,
          date: activeDayObj?.dateFormatted,
          time: selectedTime,
          customerName: customerName,
          customerPhone: customerPhone,
          customerEmail: customerEmail,
          token: config.token || "demo-stand",
        }),
      });
    } catch (err) {
      console.warn("Demo booking local post error:", err);
    }

    setStep(3);
  };

  const currentPrice = selectedServiceObj.price;

  return (
    <div
      className={`w-full ${
        standalone
          ? "min-h-screen bg-[#0A0A0B] text-white selection:bg-[#C9A961] selection:text-black font-sans pb-24"
          : "text-white font-sans pb-10"
      }`}
    >
      {/* 1. CINEMATIC HERO SECTION WITH RICH HERO IMAGE */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-white/[0.08]">
        {heroImage && (
          <Image
            src={heroImage}
            alt={config.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover object-center filter brightness-[0.5] contrast-[1.08] transition-transform duration-700"
          />
        )}

        {/* Ambient Dark Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent" />

        {/* Hero Overlay Content */}
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between max-w-lg mx-auto">
          {/* Top badges */}
          <div className="flex items-center justify-between gap-2">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono tracking-wider uppercase font-semibold border backdrop-blur-md"
              style={{
                borderColor: `${accent}40`,
                backgroundColor: `${accent}20`,
                color: accent,
              }}
            >
              <span>{config.trade}</span>
            </div>
          </div>

          {/* Business Title & Location */}
          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-serif text-white tracking-tight leading-snug drop-shadow-md font-normal">
              {config.name}
            </h1>
            <p className="text-xs text-warm-grey/90 flex items-center gap-1.5 drop-shadow">
              <svg className="w-3.5 h-3.5 shrink-0" style={{ color: accent }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{presetMeta.location}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Stepper Progress */}
      <div className="max-w-lg mx-auto px-4 sm:px-6 pt-4 pb-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-warm-grey/60 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              step >= 1 ? "bg-brand-gold animate-pulse" : "bg-white/20"
            }`}
            style={step >= 1 ? { backgroundColor: accent } : {}}
          />
          <span className={step === 1 ? "text-white font-bold" : ""}>1. Service</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              step >= 2 ? "bg-brand-gold" : "bg-white/20"
            }`}
            style={step >= 2 ? { backgroundColor: accent } : {}}
          />
          <span className={step === 2 ? "text-white font-bold" : ""}>2. Details</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              step >= 3 ? "bg-brand-gold" : "bg-white/20"
            }`}
            style={step >= 3 ? { backgroundColor: accent } : {}}
          />
          <span className={step === 3 ? "text-white font-bold" : ""}>3. Done</span>
        </div>
      </div>

      {/* 2. BODY CONTAINER */}
      <main className="max-w-lg mx-auto px-4 sm:px-6 py-5 sm:py-6 space-y-6">
        
        {/* STEP 1: Select Service & Slot */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            
            {/* Services List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono uppercase tracking-wider text-warm-grey/80 font-semibold">
                  Select Service
                </span>
                <span className="text-[11px] font-mono text-warm-grey/50">
                  {servicesList.length} Options
                </span>
              </div>

              <div className="space-y-2.5">
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
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all ${
                        isSelected
                          ? "border-transparent shadow-lg ring-1"
                          : "border-white/[0.08] bg-[#121214] hover:border-white/20"
                      }`}
                      style={
                        isSelected
                          ? {
                              borderColor: accent,
                              backgroundColor: `${accent}16`,
                              ringColor: `${accent}40`,
                            }
                          : {}
                      }
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-white text-sm sm:text-base">
                              {srv.name}
                            </span>
                            {srv.popular && (
                              <span
                                className="text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider"
                                style={{
                                  backgroundColor: `${accent}25`,
                                  color: accent,
                                }}
                              >
                                Popular
                              </span>
                            )}
                          </div>
                          {srv.desc && (
                            <p className="text-xs text-warm-grey/80 mt-1 line-clamp-2 leading-relaxed">
                              {srv.desc}
                            </p>
                          )}
                          <span className="text-[11px] font-mono text-warm-grey/60 mt-2 block">
                            {srv.duration} mins &bull; Dedicated slot
                          </span>
                        </div>

                        <div className="text-right shrink-0 pt-0.5">
                          <span
                            className="text-base sm:text-lg font-bold font-mono"
                            style={{ color: accent }}
                          >
                            {srv.price === 0 ? "Free" : `${curr}${srv.price}`}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date Selection */}
            <div className="bg-[#121214] border border-white/[0.08] rounded-xl p-4 sm:p-5 shadow-lg space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-warm-grey/80 block mb-2.5 font-semibold">
                  Select Date
                </span>

                <div className="grid grid-cols-5 gap-2">
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
                        className={`py-2 px-1 sm:py-2.5 rounded-lg border text-center transition-all ${
                          isDateActive
                            ? "border-transparent text-[#0B0B0C] font-bold shadow-md"
                            : "border-white/[0.08] bg-white/[0.02] text-warm-grey hover:border-white/20 hover:text-white"
                        }`}
                        style={
                          isDateActive
                            ? { backgroundColor: accent, color: "#0B0B0C" }
                            : {}
                        }
                      >
                        <div className="text-[10px] uppercase font-mono font-medium">{day.dayName}</div>
                        <div className="text-sm font-semibold mt-0.5">
                          {day.dateFormatted.split(" ")[0]}
                        </div>
                        <div className="text-[9px] uppercase font-mono opacity-70">
                          {day.dateFormatted.split(" ")[1]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="pt-2 border-t border-white/[0.06]">
                <span className="text-xs font-mono uppercase tracking-wider text-warm-grey/80 block mb-2.5 font-semibold">
                  Available Times
                </span>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {activeDayObj?.slots.map((time) => {
                    const isTimePicked = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-2.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                          isTimePicked
                            ? "border-transparent text-[#0B0B0C] font-bold shadow-md"
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
            <div className="pt-2">
              <button
                type="button"
                disabled={!selectedTime}
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-95 active:scale-[0.99] flex items-center justify-center gap-2"
                style={{
                  backgroundColor: accent,
                  color: "#0B0B0C",
                }}
              >
                <span>Continue with {selectedTime || "Selected Time"}</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Details & Pay on Arrival */}
        {step === 2 && (
          <form
            onSubmit={handleConfirmBooking}
            className="space-y-4 animate-in fade-in duration-150"
          >
            {/* Booking Summary Card */}
            <div
              className="p-3.5 sm:p-4 rounded-xl border flex items-center justify-between"
              style={{
                borderColor: `${accent}40`,
                backgroundColor: `${accent}0c`,
              }}
            >
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-warm-grey block">
                  Holding Slot
                </span>
                <span className="text-sm sm:text-base font-semibold text-white block">
                  {selectedServiceObj.name}
                </span>
                <span className="text-xs text-warm-grey font-mono block">
                  {activeDayObj?.dateFormatted} at {selectedTime}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-mono underline text-warm-grey hover:text-white px-2 py-1"
              >
                Edit
              </button>
            </div>

            {/* Inputs */}
            <div className="bg-[#121214] border border-white/[0.08] rounded-xl p-4 sm:p-5 space-y-3.5 shadow-lg">
              <span className="text-xs font-mono uppercase tracking-wider text-warm-grey/80 block font-semibold">
                Your Details
              </span>

              <div>
                <label className="block text-[10px] font-mono uppercase text-warm-grey/60 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. James Harrington"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-brand-gold/60"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-warm-grey/60 mb-1">Mobile Phone (for SMS confirmation)</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +44 7700 900077"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-brand-gold/60"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-warm-grey/60 mb-1">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="e.g. james@example.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-brand-gold/60"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-xs font-mono text-warm-grey hover:text-white transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl transition-all active:scale-[0.99] flex items-center justify-center gap-2"
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
          <div className="bg-[#121214] border border-white/[0.08] rounded-xl p-5 sm:p-6 text-center space-y-5 animate-in zoom-in-95 duration-150 shadow-2xl">
            <div
              className="w-14 h-14 rounded-full mx-auto flex items-center justify-center border shadow-lg"
              style={{
                borderColor: accent,
                backgroundColor: `${accent}15`,
              }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke={accent}
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
                Reservation Confirmed
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-white pt-2 font-semibold">
                You&apos;re Booked In!
              </h2>
              <p className="text-xs sm:text-sm text-warm-grey/85 pt-1">
                Reminder will go to <span className="text-white font-mono font-medium">{customerPhone}</span>
              </p>
              <p className="text-xs text-warm-grey/60 font-mono">
                Reference saved for <span className="text-white">{customerName}</span>
              </p>
            </div>

            {/* Ticket */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 text-left space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center">
                <span className="text-warm-grey/60 font-mono text-[11px] uppercase">
                  Reference
                </span>
                <span className="font-mono font-bold text-sm sm:text-base" style={{ color: accent }}>
                  #{bookingRef}
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-white/[0.05] pt-2">
                <span className="text-warm-grey">Business</span>
                <span className="text-white font-medium">{config.name}</span>
              </div>
              <div className="flex justify-between items-center border-t border-white/[0.05] pt-2">
                <span className="text-warm-grey">Service</span>
                <span className="text-white font-medium">{selectedServiceObj.name}</span>
              </div>
              <div className="flex justify-between items-center border-t border-white/[0.05] pt-2">
                <span className="text-warm-grey">Time</span>
                <span className="text-white font-mono">
                  {activeDayObj?.dateFormatted} at {selectedTime}
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-white/[0.05] pt-2">
                <span className="text-warm-grey">Total Due</span>
                <span className="text-white font-mono font-bold">
                  {currentPrice === 0 ? "Free" : `${curr}${currentPrice}`}
                </span>
              </div>
            </div>

            {/* CTA to book audit with AK Enterprises */}
            <div className="p-4 rounded-xl bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C9A961]/30 text-left space-y-2">
              <span className="text-[#C9A961] text-[10px] font-mono uppercase tracking-widest font-bold block">
                &bull; Built by AK Enterprises
              </span>
              <h3 className="text-xs sm:text-sm font-serif italic text-white leading-tight">
                Want this automated booking operating system for your business?
              </h3>
              <p className="text-[11px] text-warm-grey/80 leading-relaxed">
                We build the custom systems that run your business without you.
              </p>
              <div className="pt-1.5">
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
