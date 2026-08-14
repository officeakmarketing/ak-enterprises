"use client";

import { motion } from "framer-motion";

export default function AnimatedHeadline({ text, className, highlightWords = [] }) {
  const lines = text.split("\n");

  // Helper to determine if a word should be highlighted
  const isHighlighted = (word) => {
    const cleanWord = word.replace(/[.,]/g, "").toLowerCase();
    return highlightWords.some((hw) => hw.toLowerCase() === cleanWord);
  };

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(3px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.35,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <motion.h1
      className={`${className} relative text-balance`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className={lineIdx > 0 ? "block mt-1 sm:mt-1.5" : "inline"}>
          {line.split(" ").map((word, wordIdx) => {
            const highlight = isHighlighted(word);

            return (
              <span
                key={`${lineIdx}-${wordIdx}`}
                className="inline-block mr-[0.22em] sm:mr-[0.25em]"
              >
                <motion.span
                  variants={child}
                  className={`inline-block ${
                    highlight
                      ? "text-brand-gold font-bold drop-shadow-[0_1px_3px_rgba(201,169,97,0.12)]"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </motion.h1>
  );
}
