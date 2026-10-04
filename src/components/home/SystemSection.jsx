import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SystemSection() {
  const steps = [
    {
      number: "01",
      title: "AUDIT",
      heading: "We find every gap in your business and tell you exactly what it is costing you. Free.",
    },
    {
      number: "02",
      title: "BUILD",
      heading: "We design and install your complete Business Operating System in four to six weeks.",
    },
    {
      number: "03",
      title: "OPERATE",
      heading: "We run it. You own it. It compounds over time.",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 px-2 sm:px-0">
            <div className="inline-block border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase font-bold">
              How It Works
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {steps.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
              <div className="group h-full bg-[#0a0a0c] border border-white/5 hover:border-brand-gold/40 rounded-2xl p-8 sm:p-10 lg:p-12 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(201,169,97,0.2)] relative overflow-hidden flex flex-col justify-between">
                
                {/* Glowing Top Edge on Hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Subtle Ambient Gold Glow inside card */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_50%,rgba(201,169,97,0.08),transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Massive Faint Watermark Number - Moved to Left Side */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-10 text-[180px] sm:text-[220px] font-serif italic text-white/[0.015] font-bold pointer-events-none select-none group-hover:text-brand-gold/[0.04] transition-colors duration-700 leading-none">
                  {item.number}
                </div>

                <div className="relative z-10 flex flex-col h-full pl-2">
                  {/* Number & Title */}
                  <div className="flex flex-col mb-12 sm:mb-16">
                    <span className="text-4xl sm:text-5xl font-serif italic font-normal text-brand-gold mb-3 drop-shadow-[0_0_15px_rgba(201,169,97,0.3)]">
                      {item.number}.
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white/90">
                      {item.title}
                    </span>
                  </div>

                  {/* Single Sentence Heading */}
                  <h3 className="text-xl sm:text-[1.35rem] font-serif italic text-white/95 leading-relaxed mt-auto">
                    {item.heading}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
