import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

export default function NumbersSection() {
  const metrics = [
    {
      prefix: "£",
      value: "237355",
      suffix: "",
      label: "Verified revenue \u2014 one client, 14 months",
    },
    {
      prefix: "",
      value: "7208",
      suffix: "",
      label: "Automated bookings \u2014 zero manual input",
    },
    {
      prefix: "",
      value: "6",
      suffix: "",
      label: "AI agents running live in a single deployment",
    },
    {
      prefix: "",
      value: "2",
      suffix: "M",
      label: "Simultaneous users handled for one event platform",
    },
  ];

  return (
    <section className="w-full py-14 sm:py-18 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        {/* Section Headline */}
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-12 sm:mb-16 lg:mb-20 font-serif italic text-white leading-tight">
            The results speak for themselves.
          </h2>
        </ScrollReveal>

        {/* 2x2 Grid on Mobile/Tablet, 4-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-4 sm:gap-x-8">
          {metrics.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div className="flex flex-col items-center justify-start group">
                {/* Large Serif Italic Gold Stat */}
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-gradient-gold-high-contrast font-serif italic font-normal mb-2 leading-tight flex items-baseline justify-center">
                  {item.prefix && (
                    <span className="text-xl sm:text-2xl md:text-3xl font-serif italic mr-0.5">
                      {item.prefix}
                    </span>
                  )}
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>

                {/* Sub-Label */}
                <div className="text-[10px] sm:text-xs text-warm-grey/80 uppercase tracking-[0.14em] sm:tracking-widest font-semibold max-w-[180px] sm:max-w-[220px] mx-auto leading-relaxed">
                  {item.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
