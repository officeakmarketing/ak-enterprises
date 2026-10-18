"use client";

import { useState, useRef } from "react";

export default function AriaDemoWidget() {
  const [isInteractive, setIsInteractive] = useState(false);
  const iframeRef = useRef(null);

  return (
    <div 
      id="demo" 
      className="scroll-mt-16 sm:scroll-mt-20 w-[calc(100%+2rem)] -mx-4 sm:w-full sm:mx-0 flex flex-col items-center mt-4 sm:mt-8"
    >
      {/* Disclaimer Label */}
      <div id="property-demo" className="scroll-mt-16 sm:scroll-mt-20 mb-4 sm:mb-6 px-4 text-center max-w-[850px] w-full">
        <p className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-brand-gold bg-brand-gold/5 border border-brand-gold/20 py-2 sm:py-3 px-4 rounded-lg inline-block shadow-sm">
          THIS IS A LIVE SYSTEM WE BUILT FOR A REAL ESTATE CLIENT. Same architecture works for any industry. Try it, no strings.
        </p>
      </div>

      <div
        id="demo-iframe"
        onMouseLeave={() => setIsInteractive(false)}
        className="w-full max-w-[850px] relative overflow-hidden rounded-none sm:rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border-y sm:border border-brand-gold/20 ring-1 ring-white/5 bg-[#0a0a0c] h-[850px] sm:h-[900px] group"
      >
        {/* Pass-through scroll shield prevents iframe from hijacking Lenis/native page scroll */}
        {!isInteractive && (
          <div
            onClick={() => setIsInteractive(true)}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/25 hover:bg-black/15 backdrop-blur-[1px] transition-colors cursor-pointer p-4 text-center select-none"
            title="Click to interact with live demo"
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0a0a0e]/95 hover:bg-[#14141c] border border-brand-gold/60 text-brand-gold hover:text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_10px_30px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Click to Interact with Live System</span>
              <span className="text-brand-gold group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
            <span className="mt-3 text-[11px] font-mono text-warm-grey/75 tracking-wider bg-black/80 px-3 py-1 rounded-md border border-white/5">
              Pass-through scrolling enabled &bull; Tap or click anywhere to activate live inputs
            </span>
          </div>
        )}

        <iframe
          ref={iframeRef}
          src="https://ariasystem.vercel.app/"
          className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-300 ${
            isInteractive ? "pointer-events-auto" : "pointer-events-none"
          }`}
          title="Aria Property Analysis"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          scrolling="yes"
          loading="lazy"
        />
      </div>

      {/* Loop Closer: Book the Audit Card */}
      <div className="mt-6 sm:mt-8 max-w-[850px] w-full bg-[#121214] border border-brand-gold/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        <div className="text-center sm:text-left">
          <h4 className="text-white font-serif text-lg sm:text-xl font-bold mb-1">
            Want an acquisition system like this for your business?
          </h4>
          <p className="text-warm-grey text-xs sm:text-sm font-light">
            We build custom, AI-powered systems that capture, qualify, and book clients 24/7.
          </p>
        </div>
        <a
          href="https://calendly.com/ak-enterprises/call"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-6 py-3.5 rounded-full bg-brand-gold text-ink-black font-bold text-xs uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg"
        >
          Book Free 45-Min Audit &rarr;
        </a>
      </div>
    </div>
  );
}
