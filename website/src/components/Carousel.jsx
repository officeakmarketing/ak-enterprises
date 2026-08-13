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

  return (
    <div className="w-full overflow-x-auto flex gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
      {photos.map((src, idx) => (
        <div
          key={idx}
          className="relative min-w-[300px] md:min-w-[450px] aspect-[4/3] rounded-lg overflow-hidden snap-center shrink-0 border border-muted-grey"
        >
          <Image
            src={src}
            alt={`Grace and Power Gala ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 300px, 450px"
          />
        </div>
      ))}
    </div>
  );
}
