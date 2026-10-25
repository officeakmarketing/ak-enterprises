"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Lightbox from "@/components/ui/Lightbox";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Award, 
  Calendar, 
  MapPin 
} from "lucide-react";

const LOUNGE_SLIDES = [
  {
    id: 1,
    src: "/business-lounge/business-lounge-1.jpg",
    title: "Award for Inspiring the Next Generation",
    subtitle: "Co-founders Antonios Gavrilas and Krisztian Jari presenting the official Business Lounge Gala of Excellence honor.",
    location: "Bucharest, Romania",
    date: "19 October 2026",
  },
  {
    id: 2,
    src: "/business-lounge/business-lounge-2.jpg",
    title: "Executive Delegation",
    subtitle: "Antonios Gavrilas and Krisztian Jari arriving in black-tie at the Digital Business Lounge Gala.",
    location: "Radisson Blu, Bucharest",
    date: "19 October 2026",
  },
  {
    id: 3,
    src: "/business-lounge/business-lounge-3.jpg",
    title: "Gathering of Industry Leaders",
    subtitle: "Antonios and Krisztian connecting with enterprise innovators, European founders, and distinguished business figures.",
    location: "Bucharest, Romania",
    date: "October 2026",
  },
  {
    id: 4,
    src: "/business-lounge/business-lounge-4.JPG",
    title: "Honored on the Main Stage",
    subtitle: "Antonios celebrated on the gala stage alongside the host before an audience of top executives.",
    location: "Main Stage • Bucharest",
    date: "19 October 2026",
  },
  {
    id: 5,
    src: "/business-lounge/business-lounge-5.jpg",
    title: "Dedication to Systems & Scale",
    subtitle: "Antonios and Krisztian with the official engraved plaque: celebrating perseverance, young leadership, and measurable results.",
    location: "Bucharest, Romania",
    date: "19 October 2026",
  },
  {
    id: 6,
    src: "/business-lounge/business-lounge-6.jpg",
    title: "Acceptance & Keynote Remarks",
    subtitle: "Antonios addressing the audience on building automated operating systems that replace manual bottleneck.",
    location: "Main Auditorium • Bucharest",
    date: "19 October 2026",
  },
  {
    id: 7,
    src: "/business-lounge/business-lounge-7.jpg",
    title: "Building Systems, Not Excuses",
    subtitle: "Sharing the AK vision with European leaders: engineered systems producing numbers clients can verify.",
    location: "Bucharest, Romania",
    date: "19 October 2026",
  },
  {
    id: 8,
    src: "/business-lounge/business-lounge-8.jpg",
    title: "Magazine Cover Story & Award",
    subtitle: "Antonios Gavrilas and Krisztian Jari celebrated in the Business Lounge magazine cover story and Gala of Excellence honors.",
    location: "Bucharest, Romania",
    date: "October 2026 Edition",
  },
];

// Smooth slide transition variants for active image
const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 240, damping: 28 },
      opacity: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? -50 : 50,
    opacity: 0,
    scale: 0.97,
    transition: {
      x: { type: "spring", stiffness: 240, damping: 28 },
      opacity: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  }),
};

export default function BusinessLoungeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef(0);
  const currentDragX = useRef(0);
  const autoPlayTimer = useRef(null);
  const containerRef = useRef(null);

  const totalSlides = LOUNGE_SLIDES.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Autoplay handler
  useEffect(() => {
    if (isDragging || isLightboxOpen) {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
      return;
    }

    autoPlayTimer.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isDragging, isLightboxOpen, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    touchStartX.current = e.targetTouches[0].clientX;
    currentDragX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    currentDragX.current = e.targetTouches[0].clientX;
    const deltaX = currentDragX.current - touchStartX.current;
    setDragOffset(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const deltaX = currentDragX.current - touchStartX.current;
    const threshold = 45;

    if (deltaX < -threshold) {
      nextSlide();
    } else if (deltaX > threshold) {
      prevSlide();
    }
    setDragOffset(0);
  };

  // Mouse drag handlers (desktop)
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    touchStartX.current = e.clientX;
    currentDragX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    currentDragX.current = e.clientX;
    const deltaX = currentDragX.current - touchStartX.current;
    setDragOffset(deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const deltaX = currentDragX.current - touchStartX.current;
    const threshold = 45;

    if (deltaX < -threshold) {
      nextSlide();
    } else if (deltaX > threshold) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLightboxOpen) return;
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, nextSlide, prevSlide]);

  const openLightbox = (index) => {
    setLightboxInitialIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCardClick = () => {
    if (Math.abs(dragOffset) > 10) return;
    openLightbox(currentIndex);
  };

  const currentSlide = LOUNGE_SLIDES[currentIndex];
  const prevSlideIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const nextSlideIndex = (currentIndex + 1) % totalSlides;

  return (
    <section 
      className="py-16 sm:py-20 lg:py-28 border-b border-muted-grey/20 bg-ink-black relative overflow-hidden"
      aria-label="Business Lounge Gala 2026 Recognition Section"
    >
      {/* Ambient background gold glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-brand-gold/[0.07] via-brand-gold/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true" 
      />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-16">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1.5 sm:py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase font-bold mb-5 shadow-sm">
                <Award className="w-3.5 h-3.5 text-brand-gold" />
                <span>Founders Recognition • Gala 2026</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif italic text-white leading-[1.15] tracking-tight">
                Recognized on the{" "}
                <span className="not-italic font-normal bg-gradient-to-r from-brand-gold via-[#FFF0C2] to-brand-gold bg-clip-text text-transparent">
                  European Stage
                </span>
              </h2>
              <p className="mt-4 text-warm-grey/85 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl">
                AK Enterprises co-founders <strong className="text-white font-medium">Antonios Gavrilas</strong> and{" "}
                <strong className="text-white font-medium">Krisztian Jari</strong> were honored at the{" "}
                <strong className="text-white font-medium">Business Lounge Gala of Excellence 2026</strong> in Bucharest, with Antonios receiving the prestigious{" "}
                <strong className="text-white font-medium">"Award for Inspiring the Next Generation"</strong> and both founders featured on the cover of Business Lounge magazine as AK Enterprises expands its operating system footprint internationally.
              </p>
            </div>
          </ScrollReveal>

          {/* Desktop Controls (Top Right) */}
          <div className="hidden lg:flex flex-col items-end gap-4 shrink-0">
            {/* Slide Index Monospace Counter */}
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-warm-grey/70">
              <span className="text-brand-gold font-bold text-sm tracking-wider">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="w-8 h-[1px] bg-brand-gold/40" />
              <span className="tracking-wider">
                {String(totalSlides).padStart(2, "0")}
              </span>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={prevSlide}
                aria-label="Previous photograph"
                className="w-11 h-11 rounded-full border border-white/15 bg-[#0e0e12] text-white/80 hover:text-black hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 flex items-center justify-center shadow-lg active:scale-95 group cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next photograph"
                className="w-11 h-11 rounded-full border border-white/15 bg-[#0e0e12] text-white/80 hover:text-black hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 flex items-center justify-center shadow-lg active:scale-95 group cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            MAIN CINEMATIC STAGE CAROUSEL
           ======================================================== */}
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-brand-gold/20 bg-[#060609] p-4 sm:p-6 lg:p-8 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.95)] select-none touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          role="region"
          aria-roledescription="carousel"
          aria-label="Business Lounge Gala 2026 Image Showcase"
        >
          {/* Top subtle hairline glow */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent pointer-events-none" />

          {/* Carousel Viewport with increased height for taller portrait images */}
          <div className="relative w-full min-h-[540px] sm:min-h-[660px] md:min-h-[720px] lg:min-h-[780px] xl:min-h-[850px] flex items-center justify-center overflow-hidden py-4 sm:py-6">
            
            {/* Visual multi-card peek container */}
            <div className="w-full flex items-center justify-center">
              
              {/* Previous Slide Preview (Desktop Only) */}
              <div 
                onClick={prevSlide}
                className="hidden xl:block absolute left-2 lg:left-6 w-[220px] lg:w-[260px] 2xl:w-[300px] aspect-[2/3] rounded-2xl overflow-hidden opacity-35 hover:opacity-75 transition-all duration-500 scale-90 -translate-x-4 cursor-pointer z-10 border border-white/10 hover:border-brand-gold/40 shadow-2xl group"
                aria-label="Go to previous photo"
              >
                <div className="relative w-full h-full">
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                      key={prevSlideIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={LOUNGE_SLIDES[prevSlideIndex].src}
                        alt="Previous gala photo"
                        fill
                        className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                        sizes="300px"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none z-10">
                    <p className="text-xs text-white/90 font-serif italic truncate mt-0.5">
                      {LOUNGE_SLIDES[prevSlideIndex].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Active Slide (Center Stage) - Taller Aspect Ratio (2/3) & Smooth Slide Transitions */}
              <div 
                onClick={handleCardClick}
                className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[540px] aspect-[2/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-gold/40 shadow-[0_25px_70px_-10px_rgba(201,169,97,0.18)] z-20 group cursor-pointer"
                style={{
                  transform: isDragging ? `translateX(${dragOffset}px)` : "translateX(0px)",
                  transition: isDragging ? "none" : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Smooth Animated Image Transition with Framer Motion */}
                <div className="relative w-full h-full overflow-hidden">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={currentSlide.src}
                        alt={currentSlide.title}
                        fill
                        priority={currentIndex === 0}
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 500px, 560px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-transparent pointer-events-none z-20" />

                {/* Top Overlay Fullscreen Lightbox Button */}
                <div className="absolute top-4 sm:top-5 right-4 sm:right-5 flex items-center justify-end z-30 pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(currentIndex);
                    }}
                    aria-label="View photograph in high resolution"
                    className="p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-brand-gold text-white hover:text-black backdrop-blur-md border border-white/20 hover:border-brand-gold transition-all duration-300 shadow-md group/btn cursor-pointer"
                    title="Click to view full screen"
                  >
                    <Maximize2 className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                  </button>
                </div>

                {/* Bottom Narrative Caption Box with Smooth Stagger Fade */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-30 text-left pointer-events-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Event Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs font-mono text-warm-grey/80 mb-2">
                        <span className="flex items-center gap-1 text-brand-gold font-medium">
                          <Calendar className="w-3 h-3" />
                          {currentSlide.date}
                        </span>
                        <span className="text-white/30">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-warm-grey/70" />
                          {currentSlide.location}
                        </span>
                      </div>

                      {/* Slide Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-white leading-tight mb-2 group-hover:text-brand-gold transition-colors duration-300">
                        {currentSlide.title}
                      </h3>

                      {/* Subtitle / Description */}
                      <p className="text-xs sm:text-sm text-warm-grey/90 font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {currentSlide.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Next Slide Preview (Desktop Only) */}
              <div 
                onClick={nextSlide}
                className="hidden xl:block absolute right-2 lg:right-6 w-[220px] lg:w-[260px] 2xl:w-[300px] aspect-[2/3] rounded-2xl overflow-hidden opacity-35 hover:opacity-75 transition-all duration-500 scale-90 translate-x-4 cursor-pointer z-10 border border-white/10 hover:border-brand-gold/40 shadow-2xl group"
                aria-label="Go to next photo"
              >
                <div className="relative w-full h-full">
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                      key={nextSlideIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={LOUNGE_SLIDES[nextSlideIndex].src}
                        alt="Next gala photo"
                        fill
                        className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                        sizes="300px"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none z-10">
                    <p className="text-xs text-white/90 font-serif italic truncate mt-0.5">
                      {LOUNGE_SLIDES[nextSlideIndex].title}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              MINIMALIST SCRUBBER TRACK (CLEAN & STREAMLINED)
             ======================================================== */}
          <div className="relative z-20 mt-4 pt-5 border-t border-brand-gold/15 flex items-center justify-between gap-4">
            
            {/* Segmented Progress Indicators */}
            <div 
              className="flex items-center gap-1.5 sm:gap-2 flex-1"
              role="tablist"
              aria-label="Carousel slide selectors"
            >
              {LOUNGE_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                    onClick={() => goToSlide(idx)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "bg-brand-gold w-8 sm:w-12 shadow-[0_0_12px_rgba(201,169,97,0.6)]" 
                        : "bg-white/15 hover:bg-white/35 w-2 sm:w-3"
                    }`}
                  />
                );
              })}
            </div>

            {/* Slide Index Indicator (Desktop) */}
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-warm-grey/60 tracking-wider">
              <span className="text-brand-gold font-bold">{String(currentIndex + 1).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
            </div>

            {/* Mobile Arrows & Counter */}
            <div className="flex lg:hidden items-center gap-2">
              <span className="font-mono text-xs text-brand-gold font-bold mr-1 sm:hidden">
                {currentIndex + 1}/{totalSlides}
              </span>

              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/80 active:bg-brand-gold active:text-black cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/80 active:bg-brand-gold active:text-black cursor-pointer transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox full-screen modal */}
      {isLightboxOpen && (
        <Lightbox
          images={LOUNGE_SLIDES.map((s) => s.src)}
          initialIndex={lightboxInitialIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </section>
  );
}
