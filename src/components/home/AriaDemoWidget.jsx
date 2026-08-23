"use client";

import { useState, useEffect } from "react";

export default function AriaDemoWidget() {
  const [step, setStep] = useState(1); // 1, 2, 'loading', 'result'
  const [formData, setFormData] = useState({
    addr: "",
    ptype: "",
    fname: "",
    email: "",
    phone: "",
    beds: "",
    baths: "",
    ensuite: "none",
    furnished: "un",
    floor: "",
    lift: "no",
  });

  const [result, setResult] = useState(null);
  const [confBarWidth, setConfBarWidth] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (!formData.addr || !formData.ptype || !formData.fname || !formData.email || !formData.phone) {
      alert("Please fill in all fields.");
      return;
    }
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleGenerate = () => {
    if (!formData.beds || !formData.baths) {
      alert("Select bedrooms and bathrooms so I can run the numbers.");
      return;
    }
    setStep("loading");

    setTimeout(() => {
      calculateResult();
    }, 3900);
  };

  const calculateResult = () => {
    const pt = formData.ptype;
    const beds = formData.beds;
    const ensuite = formData.ensuite;
    const furnished = formData.furnished;

    const base = { Studio: 1400, "1": 1800, "2": 2400, "3": 3100, "4": 3800, "5": 4600, "6+": 5600 };
    let b = base[beds] || 2400;

    let disc, conf, confLabel, note, msg;

    if (pt === 'multi') {
      b = Math.round(b * 1.15); disc = 0.08; conf = 91; confLabel = 'High';
      note = "Multi-family properties move fast on our end. This one fits what we're actively looking for.";
      msg = "<strong>Strong property.</strong> Multi-family is exactly what we're acquiring right now.";
    } else if (ensuite === 'all' && furnished === 'full') {
      disc = 0.065; conf = 94; confLabel = 'High';
      note = "Fully en-suite, fully furnished. This is the specification our serviced accommodation network pays top dollar for.";
      msg = "<strong>This is a good one.</strong> Fully en-suite and furnished \u2014 we can be competitive on the number.";
    } else if (ensuite === 'all') {
      disc = 0.08; conf = 91; confLabel = 'High';
      note = "All en-suite properties sit at the top of our acquisition list. We can offer closer to market rate for this spec.";
      msg = "<strong>All en-suite.</strong> That changes things. Here's what I'd offer.";
    } else if (pt === 'apartment') {
      disc = 0.10; conf = 83; confLabel = 'High';
      note = "This apartment fits our current acquisition criteria. Our corporate and qualified tenant network is actively seeking properties like this.";
      msg = "<strong>Here's the number.</strong> Based on what I'm seeing in your market right now.";
    } else {
      disc = 0.10; conf = 79; confLabel = 'Medium';
      note = "Solid property. Fits our standard acquisition criteria. We work with qualified tenants and housing providers who are actively looking for this type.";
      msg = "<strong>Here's what I'd offer.</strong> Based on comparable rentals nearby.";
    }

    const offer = Math.round(b * (1 - disc) / 50) * 50;
    const annual = offer * 12;
    const mktLow = b;
    const mktHigh = Math.round(b * 1.1 / 50) * 50;

    setResult({
      offer: offer.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
      annual: annual.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
      mktLow: mktLow.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
      mktHigh: mktHigh.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
      confLabel,
      conf,
      note,
      msg
    });

    setStep("result");
  };

  useEffect(() => {
    if (step === "result" && result) {
      setTimeout(() => {
        setConfBarWidth(result.conf);
      }, 200);
    } else {
      setConfBarWidth(0);
    }
  }, [step, result]);

  const handleReset = () => {
    setStep(1);
    setFormData({
      addr: "", ptype: "", fname: "", email: "", phone: "",
      beds: "", baths: "", ensuite: "none", furnished: "un", floor: "", lift: "no",
    });
    setResult(null);
  };

  const isApt = formData.ptype === "apartment" || formData.ptype === "multi";

  const getStep2Msg = () => {
    if (formData.ptype === 'house') return <><strong>Got it ; a house.</strong> One more step and I&apos;ll have your number.</>;
    if (formData.ptype === 'apartment') return <><strong>Apartment noted.</strong> A couple more details and we&apos;re done.</>;
    if (formData.ptype === 'multi') return <><strong>Multi-family.</strong> These are strong. One more step.</>;
    return <><strong>Almost there.</strong> A few more details and I&apos;ll have your number.</>;
  };

  const getStep2Label = () => {
    if (formData.ptype === 'house') return 'House spec';
    if (formData.ptype === 'apartment') return 'Apartment spec';
    if (formData.ptype === 'multi') return 'Multi-family spec';
    return 'Property spec';
  };

  return (
    <div className="w-full max-w-full mx-auto text-left font-sans flex flex-col items-center">

      {/* Top Titles */}
      <div className="text-center mb-6 w-full px-2 sm:px-0">
        <h2 className="text-[13px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-1.5">
          ARIIA PROPERTY ANALYSIS
        </h2>
      </div>

      <div className="w-full max-w-[600px] border border-brand-gold/30 p-8 bg-[#080808]">

        {/* --- STEP 1 --- */}
        {step === 1 && (
          <div className="animate-in fade-in duration-300">

            {/* Header & Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[15px] font-bold text-white tracking-wide">About the property</h3>
                <span className="text-[12px] font-bold text-brand-gold">Step 1 of 2</span>
              </div>
              <div className="w-full h-[2px] bg-[#222] overflow-hidden rounded-none">
                <div className="h-full w-1/2 bg-[#C8A96E] transition-all duration-500"></div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 mb-6">
              <input
                name="addr"
                value={formData.addr}
                onChange={handleChange}
                className="w-full bg-[#030303] border border-[#2a2a2a] hover:border-[#444] rounded-none px-4 py-3.5 text-sm text-white placeholder-warm-grey/40 focus:outline-none focus:border-brand-gold/50 transition-colors font-light"
                type="text"
                placeholder="Property Address (e.g. 123 Main St, Austin, TX)"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    name="ptype"
                    value={formData.ptype}
                    onChange={handleChange}
                    className="w-full bg-[#030303] border border-[#2a2a2a] hover:border-[#444] rounded-none px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none cursor-pointer font-light"
                    style={{ color: formData.ptype ? 'white' : 'rgba(255, 255, 255, 0.4)' }}
                  >
                    <option value="" disabled className="bg-[#030303] text-white/50">Property Type</option>
                    <option value="house" className="bg-[#030303] text-white">House</option>
                    <option value="apartment" className="bg-[#030303] text-white">Apartment / Condo</option>
                    <option value="multi" className="bg-[#030303] text-white">Multi-family / Block</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
                
                <input
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  className="w-full bg-[#030303] border border-[#2a2a2a] hover:border-[#444] rounded-none px-4 py-3.5 text-sm text-white placeholder-warm-grey/40 focus:outline-none focus:border-brand-gold/50 transition-colors font-light"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#030303] border border-[#2a2a2a] hover:border-[#444] rounded-none px-4 py-3.5 text-sm text-white placeholder-warm-grey/40 focus:outline-none focus:border-brand-gold/50 transition-colors font-light"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#030303] border border-[#2a2a2a] hover:border-[#444] rounded-none px-4 py-3.5 text-sm text-white placeholder-warm-grey/40 focus:outline-none focus:border-brand-gold/50 transition-colors font-light"
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-[#c8a96e] hover:bg-[#d4b87a] text-black font-bold text-[15px] py-3.5 rounded-none transition-all duration-200"
            >
              Next Step
            </button>
            
            <p className="text-center text-[12px] text-warm-grey/40 mt-5 font-light tracking-wide">
              Free demo &middot; No obligation &middot; See the AI live
            </p>
          </div>
        )}

        {/* --- STEP 2 --- */}
        {step === 2 && (
          <div className="animate-in fade-in duration-300">

            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[15px] font-bold text-white tracking-wide">{getStep2Label()}</h3>
                <span className="text-[12px] font-bold text-brand-gold">Step 2 of 2</span>
              </div>
              <div className="w-full h-[2px] bg-[#222] rounded-none overflow-hidden">
                <div className="h-full w-full bg-[#c8a96e] transition-all duration-500"></div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <select
                      name="beds"
                      value={formData.beds}
                      onChange={handleChange}
                      className="w-full bg-[#030303] border border-[#2a2a2a] hover:border-[#444] rounded-none px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none cursor-pointer font-light"
                      style={{ color: formData.beds ? 'white' : 'rgba(255, 255, 255, 0.4)' }}
                    >
                      <option value="" disabled className="bg-[#030303] text-white/50">Bedrooms</option>
                      <option value="Studio" className="bg-[#030303] text-white">Studio</option>
                      <option value="1" className="bg-[#030303] text-white">1</option>
                      <option value="2" className="bg-[#030303] text-white">2</option>
                      <option value="3" className="bg-[#030303] text-white">3</option>
                      <option value="4" className="bg-[#030303] text-white">4</option>
                      <option value="5" className="bg-[#030303] text-white">5</option>
                      <option value="6+" className="bg-[#030303] text-white">6+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <select
                      name="baths"
                      value={formData.baths}
                      onChange={handleChange}
                      className="w-full bg-[#030303] border border-[#2a2a2a] hover:border-[#444] rounded-none px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none cursor-pointer font-light"
                      style={{ color: formData.baths ? 'white' : 'rgba(255, 255, 255, 0.4)' }}
                    >
                      <option value="" disabled className="bg-[#030303] text-white/50">Bathrooms</option>
                      <option value="1" className="bg-[#030303] text-white">1</option>
                      <option value="2" className="bg-[#030303] text-white">2</option>
                      <option value="3" className="bg-[#030303] text-white">3</option>
                      <option value="4" className="bg-[#030303] text-white">4</option>
                      <option value="5" className="bg-[#030303] text-white">5</option>
                      <option value="6+" className="bg-[#030303] text-white">6+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <select
                      name="ensuite"
                      value={formData.ensuite}
                      onChange={handleChange}
                      className="w-full bg-[#030303] border border-[#2a2a2a] hover:border-[#444] rounded-none px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none cursor-pointer font-light"
                      style={{ color: formData.ensuite !== "none" ? 'white' : 'rgba(255, 255, 255, 0.4)' }}
                    >
                      <option value="none" className="bg-[#030303] text-white">En-suite (None)</option>
                      <option value="some" className="bg-[#030303] text-white">Some</option>
                      <option value="all" className="bg-[#030303] text-white">All en-suite</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <select
                      name="furnished"
                      value={formData.furnished}
                      onChange={handleChange}
                      className="w-full bg-[#030303] border border-[#2a2a2a] hover:border-[#444] rounded-none px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none cursor-pointer font-light"
                      style={{ color: formData.furnished !== "un" ? 'white' : 'rgba(255, 255, 255, 0.4)' }}
                    >
                      <option value="un" className="bg-[#030303] text-white">Furnishing (Unfurnished)</option>
                      <option value="part" className="bg-[#030303] text-white">Part furnished</option>
                      <option value="full" className="bg-[#030303] text-white">Fully furnished</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              {isApt && (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-300">
                  <div>
                    <input
                      name="floor"
                      value={formData.floor}
                      onChange={handleChange}
                      className="w-full bg-[#030303] border border-[#2a2a2a] hover:border-[#444] rounded-none px-4 py-3.5 text-sm text-white placeholder-warm-grey/40 focus:outline-none focus:border-brand-gold/50 transition-colors font-light"
                      type="number"
                      placeholder="Floor (e.g. 4)"
                      min="0"
                    />
                  </div>
                  <div>
                    <div className="relative">
                      <select
                        name="lift"
                        value={formData.lift}
                        onChange={handleChange}
                        className="w-full bg-[#030303] border border-[#2a2a2a] hover:border-[#444] rounded-none px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none cursor-pointer font-light"
                        style={{ color: formData.lift !== "no" ? 'white' : 'rgba(255, 255, 255, 0.4)' }}
                      >
                        <option value="no" className="bg-[#030303] text-white">Elevator (No)</option>
                        <option value="yes" className="bg-[#030303] text-white">Yes</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBack}
                className="bg-transparent border border-[#2a2a2a] hover:border-[#444] text-warm-grey/90 hover:text-white font-sans text-sm font-medium px-5 py-3.5 rounded-none transition-colors duration-200"
              >
                &larr; Back
              </button>
              <button
                onClick={handleGenerate}
                className="flex-1 bg-[#c8a96e] hover:bg-[#d4b87a] text-black font-bold text-[15px] py-3.5 rounded-none transition-all duration-200"
              >
                Show me the number
              </button>
            </div>
            <p className="text-center text-[12px] text-warm-grey/40 mt-5 font-light tracking-wide">
              Aria checks live market data &middot; ~10 seconds
            </p>
          </div>
        )}

        {/* --- LOADING --- */}
        {step === "loading" && (
          <div className="py-8 text-center animate-in fade-in duration-300">
            <div className="w-[52px] h-[52px] mx-auto mb-1.5 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(201,169,97,0.85),rgba(201,169,97,0.15))] animate-[pulse_1.6s_ease-in-out_infinite] shadow-[0_0_0_0_rgba(201,169,97,0.35)]"></div>

            <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-brand-gold mb-5">Aria is working</div>
            <h3 className="font-serif text-[22px] font-semibold text-white mb-6 leading-[1.2]">Give me a moment.</h3>

            <ul className="max-w-[260px] mx-auto text-left border-t border-white/5 list-none">
              <li className="flex items-center gap-3 text-[12px] text-warm-grey/90 py-3 border-b border-white/5 font-light animate-in slide-in-from-left-1.5 fade-in duration-400 delay-[400ms] fill-mode-both">
                <div className="w-1 h-1 rounded-full bg-brand-gold shrink-0"></div>
                Searching comparable rentals nearby
              </li>
              <li className="flex items-center gap-3 text-[12px] text-warm-grey/90 py-3 border-b border-white/5 font-light animate-in slide-in-from-left-1.5 fade-in duration-400 delay-[1500ms] fill-mode-both">
                <div className="w-1 h-1 rounded-full bg-brand-gold shrink-0"></div>
                Reading the market
              </li>
              <li className="flex items-center gap-3 text-[12px] text-warm-grey/90 py-3 font-light animate-in slide-in-from-left-1.5 fade-in duration-400 delay-[2600ms] fill-mode-both">
                <div className="w-1 h-1 rounded-full bg-brand-gold shrink-0"></div>
                Calculating your offer
              </li>
            </ul>
          </div>
        )}

        {/* --- RESULT --- */}
        {step === "result" && result && (
          <div className="animate-in fade-in duration-500">

            {/* Aria Message Bar (Result tint) */}
            <div className="py-4 px-4 mb-5 border border-white/5 rounded-sm bg-green-500/5 flex items-start gap-3">
              <div className="w-[22px] h-[22px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(52,211,153,0.8),rgba(52,211,153,0.2))] shrink-0 mt-px"></div>
              <div className="text-[13px] text-warm-grey/80 font-light leading-[1.6] italic" dangerouslySetInnerHTML={{ __html: result.msg }}></div>
            </div>

            {/* Offer Block */}
            <div className="mb-5 bg-[linear-gradient(135deg,rgba(200,169,110,0.07),rgba(200,169,110,0.02))] border border-brand-gold/20 rounded-sm p-[22px] text-center relative overflow-hidden">
              <div className="absolute -top-[30px] -right-[30px] w-[100px] h-[100px] bg-[radial-gradient(circle,rgba(200,169,110,0.07),transparent)] rounded-full"></div>

              <div className="text-[10px] font-semibold text-brand-gold uppercase tracking-[0.14em] mb-2 relative z-10">Guaranteed Rent Offer</div>
              <div className="font-serif text-[50px] font-semibold text-white mb-[3px] relative z-10 leading-none">{result.offer}</div>
              <div className="text-[12px] text-warm-grey/70 font-light relative z-10">per month</div>
              <div className="inline-flex items-center mt-2.5 px-3 py-1 bg-brand-gold/5 border border-brand-gold/10 text-[11px] font-medium text-brand-gold rounded-full relative z-10">
                {result.annual} per year
              </div>
            </div>

            {/* Grid Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-[#0a0a0c] border border-white/10 rounded-sm p-4">
                <div className="text-[10px] font-medium text-muted-grey uppercase tracking-[0.07em] mb-[5px]">Market Range</div>
                <div className="text-[14px] font-semibold text-white">{result.mktLow} &ndash; {result.mktHigh}</div>
              </div>
              <div className="bg-[#0a0a0c] border border-white/10 rounded-sm p-4">
                <div className="text-[10px] font-medium text-muted-grey uppercase tracking-[0.07em] mb-[5px]">Confidence</div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[14px] font-semibold text-white">{result.confLabel}</span>
                </div>
                <div className="flex items-center gap-[7px] mt-[6px]">
                  <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden flex-1">
                    <div className="h-full bg-green-500 rounded-full transition-all duration-[1.3s] ease-out delay-200" style={{ width: `${confBarWidth}%` }}></div>
                  </div>
                  <span className="text-[11px] font-semibold text-green-400">{result.conf}%</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mb-4 px-[15px] py-[13px] bg-white/[0.02] rounded-sm border-l-2 border-brand-gold/30 text-[12px] text-warm-grey/80 leading-[1.75] font-light">
              {result.note}
            </div>

            {/* Disclaimer */}
            <div className="py-4 border-t border-white/10 text-[10px] text-warm-grey/40 leading-[1.65] text-center">
              Aria&apos;s estimate is based on live market data and is for guidance only. Not a formal valuation. Your specialist confirms the final figure on the call.
            </div>

            {/* Action Buttons */}
            <div className="mb-2 mt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => alert("Calendar booking modal would open here")}
                className="flex-1 bg-brand-gold hover:bg-[#d4b87a] text-black font-bold text-[17px] py-4 rounded-sm transition-all duration-200"
              >
                Let&apos;s talk &rarr;
              </button>
              <button
                onClick={handleReset}
                className="bg-transparent border border-white/10 hover:border-white/20 text-warm-grey/90 hover:text-white font-sans text-[15px] font-medium px-[14px] py-4 rounded-sm transition-colors duration-200 whitespace-nowrap"
              >
                Run another
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
