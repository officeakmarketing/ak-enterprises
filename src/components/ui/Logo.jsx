import Image from "next/image";

export default function Logo({ className = "" }) {
  return (
    <div className={`relative flex items-center select-none group ${className}`}>
      <Image
        src="/transparent-logo.png"
        alt="AK Enterprises"
        width={145}
        height={64}
        priority
        sizes="(max-width: 640px) 115px, (max-width: 768px) 130px, 145px"
        className="w-[115px] sm:w-[130px] md:w-[145px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

