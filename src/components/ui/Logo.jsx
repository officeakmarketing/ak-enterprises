import Image from "next/image";

export default function Logo({ className = "" }) {
  return (
    <div className={`relative flex items-center select-none group ${className}`}>
      <Image
        src="/transparent-logo.png"
        alt="AK Enterprises"
        width={340}
        height={152}
        priority
        className="w-[115px] sm:w-[130px] md:w-[145px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
