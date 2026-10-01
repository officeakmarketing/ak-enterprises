"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0e0e10]/95 border border-muted-grey/25 hover:border-brand-gold/40 rounded-xl overflow-hidden transition-colors duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-4 sm:px-6 sm:py-4.5 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold transition-colors hover:bg-white/[0.02] cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-serif italic text-sm sm:text-base md:text-lg text-white pr-4 leading-snug">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="shrink-0 text-brand-gold"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-4 pb-4 sm:px-6 sm:pb-5 pt-1 text-warm-grey/85 text-xs sm:text-sm leading-relaxed space-y-2.5 font-light border-t border-muted-grey/15">
              {answer.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
