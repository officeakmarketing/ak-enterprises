import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TrustGallerySection() {
  // Use the 15 images from the public/reviews folder
  const images = Array.from({ length: 15 }, (_, i) => `/reviews/review${i + 1}.jpg`);

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-12 sm:mb-16 text-center">
        <ScrollReveal>
          <div className="inline-block border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-bold">
            Wall of Proof
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight">
            Real results. Real messages.
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-6 sm:gap-8">
        {/* Left and Right Fade Masks for seamless loop effect */}
        <div className="absolute top-0 left-0 w-8 sm:w-24 md:w-48 h-full bg-gradient-to-r from-ink-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 sm:w-24 md:w-48 h-full bg-gradient-to-l from-ink-black to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Row */}
        <div className="flex w-max animate-marquee gap-4 sm:gap-6 hover:[animation-play-state:paused] items-center">
          {/* We duplicate the images array to create a seamless infinite scroll loop */}
          {[...images, ...images].map((src, idx) => (
            <div 
              key={idx} 
              className="relative w-48 sm:w-64 md:w-80 h-[300px] sm:h-[400px] md:h-[500px] shrink-0 rounded-2xl overflow-hidden border border-white/5 shadow-xl transition-transform duration-300 hover:scale-[1.02] bg-[#0a0a0c]"
            >
              <Image 
                src={src}
                alt="Client Review"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
