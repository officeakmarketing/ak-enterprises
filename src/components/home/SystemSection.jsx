import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SystemSection() {
  const steps = [
    {
      number: "01",
      title: "Audit",
      heading: "We find every gap in your business and tell you exactly what it is costing you. Free.",
    },
    {
      number: "02",
      title: "Build",
      heading: "We design and install your complete Business Operating System in four to six weeks.",
    },
    {
      number: "03",
      title: "Operate",
      heading: "We run it. You own it. It compounds over time.",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-4">
            <h2 className="text-[2.15rem] sm:text-4xl md:text-5xl font-serif italic text-brand-gold leading-tight tracking-tight">
              How It Works
            </h2>
            <div className="w-20 sm:w-28 h-[1.5px] bg-brand-gold/40 mx-auto mt-3.5 sm:mt-4.5 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Premium Editorial Flow */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 lg:gap-16">
            {steps.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15} className="h-full">
                <div className="flex flex-col items-center md:items-start text-center md:text-left group h-full">
                  
                  {/* Huge Typography & Title Container */}
                  <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4 md:gap-6 mb-6 sm:mb-8 w-full border-b border-white/5 pb-6 group-hover:border-brand-gold/30 transition-colors duration-700">
                    <span className="text-7xl sm:text-8xl lg:text-[110px] font-serif italic text-brand-gold leading-[0.75] transition-transform duration-700 group-hover:scale-105 origin-bottom-left">
                      {item.number}
                    </span>
                    <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-white/90">
                      {item.title}
                    </span>
                  </div>

                  {/* Elegant Copy */}
                  <p className="text-xl sm:text-[1.35rem] font-serif italic text-warm-grey/80 leading-relaxed group-hover:text-white transition-colors duration-500 max-w-sm">
                    "{item.heading}"
                  </p>
                  
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
