"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function Lightbox({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (images.length > 1) {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, onClose, images.length]);

  if (!mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/95 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Top Bar with Cancel Button */}
      <div className="absolute top-0 w-full flex justify-end p-4 sm:p-8 z-50">
        <button 
          onClick={onClose}
          className="text-white/60 hover:text-brand-gold bg-white/5 hover:bg-white/10 rounded-full p-2 backdrop-blur-md transition-colors"
          aria-label="Close Lightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`Expanded view ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          quality={100}
          priority
        />
      </div>

      {/* Navigation Arrows (Only show if multiple images exist) */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-brand-gold text-white hover:text-black border border-white/10 transition-colors z-[51]"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-brand-gold text-white hover:text-black border border-white/10 transition-colors z-[51]"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest font-mono z-[51]">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>,
    document.body
  );
}
