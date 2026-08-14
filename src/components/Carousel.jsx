"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function Carousel() {
  const photos = [
    "/grace-gala-1.png",
    "/grace-gala-2.png",
    "/grace-gala-3.png",
    "/grace-gala-4.png",
    "/grace-gala-5.png",
    "/grace-gala-6.png",
    "/grace-gala-7.png",
    "/grace-gala-8.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const currentDragX = useRef(0);
  const autoPlayTimer = useRef(null);

  const totalSlides = photos.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  // Restart auto-play interval cleanly
  const resetAutoPlay = useCallback(() => {
    if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    autoPlayTimer.current = setInterval(() => {
      nextSlide();
    }, 3500);
  }, [nextSlide]);

  useEffect(() => {
    if (!isDragging) {
      resetAutoPlay();
    }
    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isDragging, currentIndex, resetAutoPlay]);

  // --- Real-Time Finger-Follow Touch Handlers ---
  const handleTouchStart = (e) => {
    if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    setIsDragging(true);
    touchStartX.current = e.targetTouches[0].clientX;
    currentDragX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    currentDragX.current = e.targetTouches[0].clientX;
    const deltaX = currentDragX.current - touchStartX.current;
    
    // Convert deltaX pixels to container percentage for smooth visual dragging
    const containerWidth = containerRef.current ? containerRef.current.offsetWidth : window.innerWidth;
    const percent = (deltaX / (containerWidth || 1)) * 100;
    setDragOffset(percent);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const deltaX = currentDragX.current - touchStartX.current;
    const threshold = 45; // 45px drag threshold to change slide

    if (deltaX < -threshold) {
      nextSlide();
    } else if (deltaX > threshold) {
      prevSlide();
    }

    setDragOffset(0);
    resetAutoPlay();
  };

  // Keyboard navigation for accessibility
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
      resetAutoPlay();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      resetAutoPlay();
    }
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Grace and Power Gala Event Gallery"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl group select-none touch-pan-y cursor-grab active:cursor-grabbing focus:outline-none focus:ring-1 focus:ring-brand-gold/40"
    >
      {/* Sliding Track with Real-Time Finger Follow */}
      <div
        className={`flex h-[340px] sm:h-[420px] md:h-[480px] lg:h-[460px] xl:h-[520px] 2xl:h-[560px] w-full ${
          isDragging
            ? "transition-none"
            : "transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)]"
        }`}
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}%))`,
        }}
        aria-live="polite"
      >
        {photos.map((src, idx) => (
          <div
            key={idx}
            className="w-full h-full flex-shrink-0 relative"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${idx + 1} of ${totalSlides}`}
          >
            <Image
              src={src}
              alt={`Grace and Power Gala photo ${idx + 1}`}
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide();
          resetAutoPlay();
        }}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-gold hover:text-black z-10 cursor-pointer focus:opacity-100"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={() => {
          nextSlide();
          resetAutoPlay();
        }}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-gold hover:text-black z-10 cursor-pointer focus:opacity-100"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Accessible Dots Indicator */}
      <div
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-10"
        role="tablist"
        aria-label="Slides"
      >
        {photos.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === currentIndex}
            onClick={() => {
              setCurrentIndex(idx);
              resetAutoPlay();
            }}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex ? "bg-brand-gold w-6 sm:w-8" : "bg-white/40 hover:bg-white w-1.5 sm:w-2"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
