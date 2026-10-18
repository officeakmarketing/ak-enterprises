import Image from "next/image";

export default function SeoFeaturedImage({ src, alt, priority = true }) {
  return (
    <div className="w-full my-8 sm:my-10 overflow-hidden rounded-xl sm:rounded-2xl border border-brand-gold/30 bg-[#0d0d12] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group">
      {/* Top ambient gold accent */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent pointer-events-none z-10" />
      
      <div className="relative aspect-[1200/630] w-full overflow-hidden bg-[#0a0a0e]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}
