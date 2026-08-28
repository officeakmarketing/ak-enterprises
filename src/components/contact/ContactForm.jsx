'use client';

import { useState } from 'react';
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const nextStep = (e) => {
    e.preventDefault();
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic here
    alert("Form submitted! (Demo)");
  };

  return (
    <ScrollReveal delay={0.2}>
      <div className="w-full bg-[#0a0a0b] border border-brand-gold/40 p-4 sm:p-8 lg:p-12 relative overflow-hidden">
        
        {/* Header Area */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 mb-4 relative z-10">
          <h3 className="text-white font-bold text-lg sm:text-xl leading-tight">
            {step === 1 ? 'About you and your business' : 'Business context'}
          </h3>
          <span className="text-brand-gold text-sm font-medium whitespace-nowrap">
            Step {step} of {totalSteps}
          </span>
        </div>

        {/* Progress indicator */}
        <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden mb-10 relative z-10">
          <div 
            className="h-full bg-brand-gold transition-all duration-500 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>

        <form onSubmit={step === totalSteps ? handleSubmit : nextStep} className="space-y-4 relative z-10">
          
          {/* STEP 1: BASIC DETAILS */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-500">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-sm p-4 text-white text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all placeholder:text-warm-grey/50 font-light"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-sm p-4 text-white text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all placeholder:text-warm-grey/50 font-light"
                  placeholder="Business Name (e.g. Acme Corp)"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-sm p-4 text-white text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all placeholder:text-warm-grey/50 font-light"
                  placeholder="Email Address"
                />
                <input
                  type="tel"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-sm p-4 text-white text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all placeholder:text-warm-grey/50 font-light"
                  placeholder="Phone Number"
                />
              </div>

            </div>
          )}

          {/* STEP 2: BUSINESS CONTEXT */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-500">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <select required className="w-full bg-transparent border border-white/10 rounded-sm p-4 text-white text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all appearance-none cursor-pointer font-light">
                    <option value="" disabled selected className="text-warm-grey/50">Country</option>
                    <option value="UK" className="bg-[#0a0a0b]">United Kingdom</option>
                    <option value="USA" className="bg-[#0a0a0b]">United States</option>
                    <option value="Other" className="bg-[#0a0a0b]">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-gold">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-sm p-4 text-white text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all placeholder:text-warm-grey/50 font-light"
                  placeholder="Industry (e.g. Real Estate)"
                />
              </div>

              <div className="relative">
                <select required className="w-full bg-transparent border border-white/10 rounded-sm p-4 text-white text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all appearance-none cursor-pointer font-light">
                  <option value="" disabled selected className="text-warm-grey/50">Monthly Revenue Range</option>
                  <option value="under_3k" className="bg-[#0a0a0b]">Under £3,000</option>
                  <option value="3k_10k" className="bg-[#0a0a0b]">£3,000 to £10,000</option>
                  <option value="10k_50k" className="bg-[#0a0a0b]">£10,000 to £50,000</option>
                  <option value="over_50k" className="bg-[#0a0a0b]">Over £50,000</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-gold">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <textarea
                required
                rows={3}
                className="w-full bg-transparent border border-white/10 rounded-sm p-4 text-white text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all resize-none placeholder:text-warm-grey/50 font-light"
                placeholder="Biggest operational challenge right now?"
              ></textarea>

              <div className="relative">
                <select required className="w-full bg-transparent border border-white/10 rounded-sm p-4 text-white text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all appearance-none cursor-pointer font-light">
                  <option value="" disabled selected className="text-warm-grey/50">How did you hear about AK Enterprises?</option>
                  <option value="search" className="bg-[#0a0a0b]">Google Search</option>
                  <option value="social" className="bg-[#0a0a0b]">Social Media</option>
                  <option value="referral" className="bg-[#0a0a0b]">Referral</option>
                  <option value="other" className="bg-[#0a0a0b]">Other</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-gold">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
            </div>
          )}

          {/* FORM CONTROLS */}
          <div className="pt-4 flex flex-col gap-4">
            
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="text-warm-grey hover:text-white text-sm font-light text-left transition-colors"
              >
                ← Back
              </button>
            )}

            <button
              type="submit"
              className="w-full bg-brand-gold hover:bg-[#d6b566] text-ink-black py-4 px-8 font-semibold text-[15px] transition-colors"
            >
              {step === totalSteps ? 'Book My Free Audit' : 'Next Step'}
            </button>
          </div>
          
          <div className="text-center mt-6">
            <span className="text-[#5a5a5a] text-[11px] font-medium tracking-wide">
              We take on a maximum of 4 new clients per month. Current availability: 2 slots. We confirm within 24 hours.
            </span>
          </div>
          
        </form>
      </div>
    </ScrollReveal>
  );
}
