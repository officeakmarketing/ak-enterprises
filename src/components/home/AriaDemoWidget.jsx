"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";

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
    ensuite: "",
    furnished: "",
    floor: "",
    lift: "",
  });

  const [result, setResult] = useState(null);
  const [confBarWidth, setConfBarWidth] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (!formData.addr || !formData.ptype || !formData.fname || !formData.email) {
      alert("Please complete all required fields.");
      return;
    }
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleGenerate = () => {
    if (!formData.beds || !formData.baths || !formData.ensuite || !formData.furnished) {
      alert("Please complete all fields.");
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
    
    let disc, conf, confLabel, summary;

    if (pt === 'multi') {
      b = Math.round(b * 1.15); disc = 0.08; conf = 91; confLabel = 'High';
      summary = 'Multi-family properties are a core part of our acquisition strategy. This property type delivers strong returns through our provider network.';
    } else if (ensuite === 'all' && furnished === 'full') {
      disc = 0.065; conf = 94; confLabel = 'High';
      summary = 'Fully en-suite and fully furnished properties are especially attractive to our serviced accommodation network. We can offer very competitive rates for this specification.';
    } else if (ensuite === 'all') {
      disc = 0.08; conf = 91; confLabel = 'High';
      summary = 'Fully en-suite properties command premium positioning in our network. We can typically offer closer to market rate for this specification.';
    } else if (pt === 'apartment') {
      disc = 0.10; conf = 83; confLabel = 'High';
      summary = 'This apartment fits our current acquisition criteria for this market. Our network of corporate and qualified tenants actively seeks properties of this type.';
    } else {
      disc = 0.10; conf = 79; confLabel = 'Medium';
      summary = 'This property fits our standard acquisition criteria. We work with a network of qualified tenants and housing providers actively seeking properties of this type.';
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
      summary
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
      beds: "", baths: "", ensuite: "", furnished: "", floor: "", lift: "",
    });
    setResult(null);
  };

  const isApt = formData.ptype === "apartment" || formData.ptype === "multi";

  return (
    <div className="w-full max-w-full mx-auto text-left font-sans flex flex-col items-center">
      
      {/* Top Titles */}
      <div className="text-center mb-8 sm:mb-10 w-full max-w-[700px] px-2 sm:px-0">
        <div className="text-[9px] sm:text-[11px] font-bold text-warm-grey/60 uppercase tracking-[0.15em] mb-2 sm:mb-3">
          Aria by AK Enterprises
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-2 sm:mb-3">
          Try <em className="text-brand-gold italic">Aria</em> now
        </h2>
        <p className="text-xs sm:text-sm text-warm-grey/70 font-light max-w-xs sm:max-w-none mx-auto">
          Enter any property and watch the AI generate an instant rent offer
        </p>
      </div>

      <div className="w-full max-w-[700px]">
        {/* Header outside box */}
        <div className="flex items-center justify-between mb-4 sm:mb-5 px-1">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(201,169,97,0.9),rgba(201,169,97,0.2))] shadow-[0_0_16px_rgba(201,169,97,0.25)] animate-breathe shrink-0"></div>
            <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">Aria</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-medium text-warm-grey/80">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            AI online
          </div>
        </div>

        {/* Main Sharp Box */}
        <div className="bg-[#050505] border border-brand-gold/40 p-5 sm:p-10 shadow-2xl relative w-full">
          
          {/* --- STEP 1 --- */}
          {step === 1 && (
            <div className="animate-in fade-in duration-300">
              {/* Header & Progress */}
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">About the property</h2>
                <span className="text-sm text-brand-gold font-medium">Step 1 of 2</span>
              </div>
              
              <div className="w-full h-px bg-white/10 mb-8 relative">
                <div className="absolute top-0 left-0 h-full w-1/2 bg-brand-gold/80 transition-all duration-500"></div>
              </div>

              {/* Fields */}
              <div className="space-y-4">
                <input 
                  name="addr" 
                  value={formData.addr} 
                  onChange={handleChange} 
                  className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-sm text-white placeholder-warm-grey/50 focus:outline-none focus:border-brand-gold/50 transition-colors rounded-none" 
                  type="text" 
                  placeholder="Property Address (e.g. 123 Main St, Austin, TX)" 
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <select 
                      name="ptype" 
                      value={formData.ptype} 
                      onChange={handleChange} 
                      className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none rounded-none cursor-pointer"
                      style={{ color: formData.ptype ? 'white' : 'rgba(189, 186, 178, 0.5)' }}
                    >
                      <option value="" disabled className="bg-[#050505] text-warm-grey/50">Property Type</option>
                      <option value="house" className="bg-[#050505] text-white">House</option>
                      <option value="apartment" className="bg-[#050505] text-white">Apartment / Flat</option>
                      <option value="multi" className="bg-[#050505] text-white">HMO / Block</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-warm-grey/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  
                  <input 
                    name="fname" 
                    value={formData.fname} 
                    onChange={handleChange} 
                    className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-sm text-white placeholder-warm-grey/50 focus:outline-none focus:border-brand-gold/50 transition-colors rounded-none" 
                    type="text" 
                    placeholder="Full Name" 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-sm text-white placeholder-warm-grey/50 focus:outline-none focus:border-brand-gold/50 transition-colors rounded-none" 
                    type="email" 
                    placeholder="Email Address" 
                  />
                  <input 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-sm text-white placeholder-warm-grey/50 focus:outline-none focus:border-brand-gold/50 transition-colors rounded-none" 
                    type="tel" 
                    placeholder="Phone Number" 
                  />
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={handleNext} 
                  className="w-full bg-brand-gold hover:bg-[#d4b87a] text-[#080808] font-bold text-sm sm:text-base py-3.5 sm:py-4 transition-colors duration-200 rounded-none"
                >
                  Next Step
                </button>
              </div>
              <p className="text-center text-[10px] sm:text-[11px] text-warm-grey/50 mt-4 sm:mt-5 font-light tracking-wide">
                Free demo · No obligation · See the AI live
              </p>
            </div>
          )}

          {/* --- STEP 2 --- */}
          {step === 2 && (
            <div className="animate-in fade-in duration-300">
              {/* Header & Progress */}
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">Property details</h2>
                <span className="text-sm text-brand-gold font-medium">Step 2 of 2</span>
              </div>
              
              <div className="w-full h-px bg-white/10 mb-8 relative">
                <div className="absolute top-0 left-0 h-full w-full bg-brand-gold/80 transition-all duration-500"></div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <select 
                      name="beds" 
                      value={formData.beds} 
                      onChange={handleChange} 
                      className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none rounded-none cursor-pointer"
                      style={{ color: formData.beds ? 'white' : 'rgba(189, 186, 178, 0.5)' }}
                    >
                      <option value="" disabled className="bg-[#050505] text-warm-grey/50">Bedrooms</option>
                      <option value="Studio" className="bg-[#050505] text-white">Studio</option>
                      <option value="1" className="bg-[#050505] text-white">1 Bedroom</option>
                      <option value="2" className="bg-[#050505] text-white">2 Bedrooms</option>
                      <option value="3" className="bg-[#050505] text-white">3 Bedrooms</option>
                      <option value="4" className="bg-[#050505] text-white">4 Bedrooms</option>
                      <option value="5" className="bg-[#050505] text-white">5 Bedrooms</option>
                      <option value="6+" className="bg-[#050505] text-white">6+ Bedrooms</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-warm-grey/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>

                  <div className="relative">
                    <select 
                      name="baths" 
                      value={formData.baths} 
                      onChange={handleChange} 
                      className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none rounded-none cursor-pointer"
                      style={{ color: formData.baths ? 'white' : 'rgba(189, 186, 178, 0.5)' }}
                    >
                      <option value="" disabled className="bg-[#050505] text-warm-grey/50">Bathrooms</option>
                      <option value="1" className="bg-[#050505] text-white">1 Bathroom</option>
                      <option value="2" className="bg-[#050505] text-white">2 Bathrooms</option>
                      <option value="3" className="bg-[#050505] text-white">3 Bathrooms</option>
                      <option value="4" className="bg-[#050505] text-white">4 Bathrooms</option>
                      <option value="5" className="bg-[#050505] text-white">5 Bathrooms</option>
                      <option value="6+" className="bg-[#050505] text-white">6+ Bathrooms</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-warm-grey/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <select 
                      name="ensuite" 
                      value={formData.ensuite} 
                      onChange={handleChange} 
                      className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none rounded-none cursor-pointer"
                      style={{ color: formData.ensuite ? 'white' : 'rgba(189, 186, 178, 0.5)' }}
                    >
                      <option value="" disabled className="bg-[#050505] text-warm-grey/50">En-suite setup</option>
                      <option value="none" className="bg-[#050505] text-white">None</option>
                      <option value="some" className="bg-[#050505] text-white">Some en-suite</option>
                      <option value="all" className="bg-[#050505] text-white">All en-suite</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-warm-grey/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>

                  <div className="relative">
                    <select 
                      name="furnished" 
                      value={formData.furnished} 
                      onChange={handleChange} 
                      className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none rounded-none cursor-pointer"
                      style={{ color: formData.furnished ? 'white' : 'rgba(189, 186, 178, 0.5)' }}
                    >
                      <option value="" disabled className="bg-[#050505] text-warm-grey/50">Furnishing</option>
                      <option value="un" className="bg-[#050505] text-white">Unfurnished</option>
                      <option value="part" className="bg-[#050505] text-white">Part furnished</option>
                      <option value="full" className="bg-[#050505] text-white">Fully furnished</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-warm-grey/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                {isApt && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-300">
                    <input 
                      name="floor" 
                      value={formData.floor} 
                      onChange={handleChange} 
                      className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-sm text-white placeholder-warm-grey/50 focus:outline-none focus:border-brand-gold/50 transition-colors rounded-none" 
                      type="number" 
                      placeholder="Floor (e.g. 4)" 
                      min="0" 
                    />
                    <div className="relative">
                      <select 
                        name="lift" 
                        value={formData.lift} 
                        onChange={handleChange} 
                        className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none rounded-none cursor-pointer"
                        style={{ color: formData.lift ? 'white' : 'rgba(189, 186, 178, 0.5)' }}
                      >
                        <option value="" disabled className="bg-[#050505] text-warm-grey/50">Elevator in building?</option>
                        <option value="no" className="bg-[#050505] text-white">No</option>
                        <option value="yes" className="bg-[#050505] text-white">Yes</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-warm-grey/50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex flex-col-reverse sm:flex-row gap-4">
                <button 
                  onClick={handleBack} 
                  className="w-full sm:w-1/3 bg-transparent border border-white/10 hover:border-white/30 text-warm-grey hover:text-white font-medium text-sm py-4 transition-colors duration-200 rounded-none"
                >
                  Back
                </button>
                <button 
                  onClick={handleGenerate} 
                  className="w-full sm:w-2/3 bg-brand-gold hover:bg-[#d4b87a] text-[#080808] font-bold text-sm sm:text-base py-4 transition-colors duration-200 rounded-none"
                >
                  Get my offer
                </button>
              </div>
            </div>
          )}

          {/* --- LOADING --- */}
          {step === "loading" && (
            <div className="py-16 sm:py-24 text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 mx-auto mb-8 relative">
                <div className="absolute inset-0 border-t-2 border-brand-gold rounded-full animate-spin"></div>
                <div className="absolute inset-0 border border-white/5 rounded-full"></div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 tracking-wide">Aria is analysing...</h3>
              
              <div className="max-w-[280px] mx-auto text-left space-y-5">
                <div className="flex items-center gap-4 text-sm text-warm-grey animate-in fade-in slide-in-from-left-2 duration-500 delay-300 fill-mode-both">
                  <Check className="w-4 h-4 text-brand-gold" />
                  Searching comparable rentals
                </div>
                <div className="flex items-center gap-4 text-sm text-warm-grey animate-in fade-in slide-in-from-left-2 duration-500 delay-1000 fill-mode-both">
                  <Check className="w-4 h-4 text-brand-gold" />
                  Calculating current market rate
                </div>
                <div className="flex items-center gap-4 text-sm text-warm-grey animate-in fade-in slide-in-from-left-2 duration-500 delay-2000 fill-mode-both">
                  <Check className="w-4 h-4 text-brand-gold" />
                  Generating personalised offer
                </div>
              </div>
            </div>
          )}

          {/* --- RESULT --- */}
          {step === "result" && result && (
            <div className="animate-in fade-in duration-500">
              <div className="text-center mb-8 border-b border-white/5 pb-8">
                <div className="inline-block px-3 py-1 mb-4 border border-green-500/30 text-[10px] font-bold text-green-400 uppercase tracking-[0.2em] rounded-none">
                  Offer ready
                </div>
                <p className="text-sm text-warm-grey font-light max-w-sm mx-auto leading-relaxed">
                  Based on comparable properties nearby and your property's details, here is Aria's estimated guaranteed rent offer.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Primary Offer Box - Sharp */}
                <div className="border border-brand-gold/30 bg-[linear-gradient(135deg,rgba(201,169,97,0.05),transparent)] p-6 sm:p-8 text-center rounded-none">
                  <div className="text-[10px] sm:text-[11px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-3 sm:mb-4">Guaranteed Rent Offer</div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white mb-2">{result.offer}</div>
                  <div className="text-xs sm:text-sm text-warm-grey/70 mb-5 sm:mb-6">per month</div>
                  <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 border border-brand-gold/20 text-[10px] sm:text-xs font-semibold text-brand-gold bg-brand-gold/5 rounded-none tracking-wide">
                    {result.annual} guaranteed per year
                  </div>
                </div>

                {/* Secondary Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-white/10 p-5 rounded-none">
                    <div className="text-[10px] font-bold text-warm-grey/60 uppercase tracking-[0.15em] mb-2">Market Rent Range</div>
                    <div className="text-lg font-bold text-white">{result.mktLow} &ndash; {result.mktHigh}</div>
                  </div>
                  <div className="border border-white/10 p-5 rounded-none">
                    <div className="text-[10px] font-bold text-warm-grey/60 uppercase tracking-[0.15em] mb-2">Data Confidence</div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base font-bold text-white">{result.confLabel}</span>
                      <span className="text-sm font-bold text-green-400">{result.conf}%</span>
                    </div>
                    <div className="w-full h-[2px] bg-white/10 mt-1">
                      <div className="h-full bg-green-500 transition-all duration-1000 ease-out" style={{ width: `${confBarWidth}%` }}></div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Summary */}
                <div className="border-l border-brand-gold pl-5 py-2 my-6 text-sm text-warm-grey leading-relaxed font-light">
                  {result.summary}
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-[10px] text-warm-grey/40 leading-relaxed text-center">
                    Aria's offer is generated automatically and is for guidance only. It does not constitute a formal valuation or guaranteed offer.
                  </p>
                </div>

                <div className="mt-6 flex flex-col-reverse sm:flex-row gap-4">
                  <button 
                    onClick={handleReset} 
                    className="w-full sm:w-1/3 bg-transparent border border-white/10 hover:border-white/30 text-warm-grey hover:text-white font-medium text-sm py-4 transition-colors duration-200 rounded-none"
                  >
                    Try again
                  </button>
                  <button 
                    onClick={() => alert("Calendar booking modal would open here")} 
                    className="w-full sm:w-2/3 bg-brand-gold hover:bg-[#d4b87a] text-[#080808] font-bold text-sm sm:text-base py-4 transition-colors duration-200 rounded-none"
                  >
                    Book a call
                  </button>
                </div>
                
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
