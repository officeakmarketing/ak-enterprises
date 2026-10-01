"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("ak_cookie_consent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ak_cookie_consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("ak_cookie_consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[100] md:max-w-md"
        >
          <div className="bg-[#0b0b0c]/90 backdrop-blur-xl border border-brand-gold/30 rounded-2xl p-6 shadow-neo-raised relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <button
              onClick={handleDecline}
              aria-label="Close Cookie Banner"
              className="absolute top-4 right-4 p-1.5 text-warm-grey hover:text-white bg-[#141416]/50 hover:bg-[#141416] rounded-full border border-transparent hover:border-muted-grey/30 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4 mb-6 pr-6">
              <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold shrink-0 border border-brand-gold/20 shadow-neo-raised">
                <Cookie className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-serif italic text-xl mb-1.5 leading-tight">Cookie Preferences</h3>
                <p className="text-warm-grey text-sm leading-relaxed">
                  We use cookies to improve your experience and analyze how our site performs.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="group relative flex-[2] inline-flex items-center justify-center bg-brand-gold text-ink-black px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
                <span className="relative z-10">Accept Cookies</span>
              </button>
              
              <button
                onClick={handleDecline}
                className="flex-1 inline-flex items-center justify-center bg-transparent text-warm-grey hover:text-white border border-muted-grey/40 hover:border-white/40 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors duration-200"
              >
                Decline
              </button>
            </div>
            
            <div className="mt-5 pt-4 border-t border-muted-grey/20 flex justify-between items-center text-[10px] uppercase font-mono tracking-widest">
               <span className="text-brand-gold/70">SECURE SESSION</span>
               <Link href="/" className="text-warm-grey/60 hover:text-brand-gold transition-colors">
                 Privacy Policy
               </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
