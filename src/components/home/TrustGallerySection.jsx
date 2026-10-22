"use client";

import { useRef } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TrustGallerySection() {
  const scrollRef = useRef(null);
  
  // Use the 15 images from the public/reviews folder
  const images = Array.from({ length: 15 }, (_, i) => `/reviews/review${i + 1}.jpg`);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-8 sm:mb-10 text-center relative z-20">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
            <h2 className="text-[2.15rem] sm:text-4xl md:text-5xl font-serif italic text-brand-gold leading-tight tracking-tight">
              Wall of Proof
            </h2>
            <div className="w-20 sm:w-28 h-[1.5px] bg-brand-gold/40 mx-auto mt-3.5 sm:mt-4.5 rounded-full mb-3 sm:mb-4" />
            <p className="text-base sm:text-lg md:text-xl font-serif italic text-white/90">
              Real results. Real messages.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Arrows (Top Right) */}
        <div className="hidden lg:flex justify-end gap-3 absolute right-4 sm:right-6 lg:right-8 xl:right-12 bottom-0 translate-y-2">
          <button 
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-brand-gold hover:border-brand-gold/50 hover:bg-brand-gold/10 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-brand-gold hover:border-brand-gold/50 hover:bg-brand-gold/10 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Left and Right Fade Masks for seamless look (Desktop only) */}
        <div className="hidden lg:block absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-ink-black to-transparent z-10 pointer-events-none"></div>
        <div className="hidden lg:block absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-ink-black to-transparent z-10 pointer-events-none"></div>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 lg:gap-6 items-center pb-4"
        >
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="relative w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-18px)] h-[400px] sm:h-[350px] lg:h-[400px] shrink-0 snap-center rounded-xl overflow-hidden border border-white/5 shadow-xl bg-[#0a0a0c] transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image 
                src={src}
                alt="Client Review"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Arrows (Below Carousel) */}
        <div className="flex lg:hidden justify-center gap-4 mt-6">
          <button 
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/80 active:bg-brand-gold/20 active:border-brand-gold/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/80 active:bg-brand-gold/20 active:border-brand-gold/50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
