"use client";

import { motion } from "framer-motion";

export default function AnimatedHeadline({ text, className, highlightWords = [] }) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const child = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 90,
      },
    },
    hidden: {
      opacity: 0,
      y: "100%", // Slide up from below the mask
    },
  };

  // Helper to determine if a word should be highlighted
  const isHighlighted = (word) => {
    const cleanWord = word.replace(/[.,]/g, "").toLowerCase();
    return highlightWords.some((hw) => hw.toLowerCase() === cleanWord);
  };

  return (
    <motion.h1
      className={`${className} relative overflow-hidden`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Gold Shimmer Sweep */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer mix-blend-overlay" 
        style={{ animationDelay: '1.2s' }}
      ></div>

      {words.map((word, index) => {
        const highlight = isHighlighted(word);
        
        return (
          <span 
            key={index} 
            className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] mr-[0.25em]"
          >
            <motion.span
              variants={child}
              className={`inline-block ${
                highlight 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold font-bold drop-shadow-lg' 
                  : ''
              }`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.h1>
  );
}
