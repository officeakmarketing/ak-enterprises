import Image from "next/image";

export default function Logo({ className = "", compactMobile = false }) {
  return (
    <div className={`relative flex items-center select-none group ${className}`}>
      {compactMobile ? (
        <>
          {/* Monogram for mobile screens under 480px */}
          <div className="flex min-[480px]:hidden items-center justify-center w-7 h-7 rounded-lg bg-brand-gold/15 border border-brand-gold/40 text-brand-gold font-serif font-bold text-sm tracking-wide shadow-sm">
            AK
          </div>
          {/* Full Logo on 480px and above */}
          <div className="hidden min-[480px]:block">
            <Image
              src="/transparent-logo.png"
              alt="AK Enterprises"
              width={145}
              height={64}
              priority
              sizes="(max-width: 640px) 115px, (max-width: 768px) 130px, 145px"
              className="w-[105px] sm:w-[130px] md:w-[145px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </>
      ) : (
        <Image
          src="/transparent-logo.png"
          alt="AK Enterprises"
          width={145}
          height={64}
          priority
          sizes="(max-width: 640px) 115px, (max-width: 768px) 130px, 145px"
          className="w-[115px] sm:w-[130px] md:w-[145px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      )}
    </div>
  );
}
