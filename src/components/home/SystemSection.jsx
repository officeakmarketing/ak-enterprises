import ScrollReveal from "@/components/ui/ScrollReveal";
import { Search, Layers, Activity } from "lucide-react";

export default function SystemSection() {
  const steps = [
    {
      number: "01",
      step: "STEP 1",
      title: "AUDIT",
      heading: "We analyse & pinpoint your exact revenue leaks.",
      description:
        "We analyse your current setup  lead capture, follow-up, operations, and reporting. We show you exactly what is broken and what it is costing you. The audit is free. You own the findings regardless of whether we work together.",
      icon: Search,
    },
    {
      number: "02",
      step: "STEP 2",
      title: "BUILD",
      heading: "We design & deploy your Business Operating System.",
      description:
        "We design and deploy your Business Operating System  bespoke to your business, connected end to end, built to run without manual input. Not a template. Not a subscription. Yours.",
      icon: Layers,
    },
    {
      number: "03",
      step: "STEP 3",
      title: "OPERATE",
      heading: "Live execution, maintenance & compounding growth.",
      description:
        "Your system goes live. We maintain it on an ongoing basis. You keep full ownership. The system compounds over time  more data, better performance, higher conversion.",
      icon: Activity,
    },
  ];

  return (
    <section className="w-full py-8 lg:py-12 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 px-2 sm:px-0">
            <div className="inline-block border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-bold">
              How It Works
            </div>
            <h2 className="text-[1.65rem] sm:text-4xl md:text-5xl font-serif italic text-white leading-tight mb-3">
              A proven process. From audit to activation in 4 to 6 weeks.
            </h2>
          </div>
        </ScrollReveal>

        {/* Unique Vertical Circuit Timeline */}
        <div className="relative px-2 sm:px-8 md:px-0 md:pl-14">
          {/* Vertical Connecting Gold Circuit Line (Centered on mobile, left on desktop) */}
          <div className="absolute left-1/2 md:left-[27px] top-4 md:top-10 bottom-4 md:bottom-10 w-[2px] -translate-x-1/2 md:translate-x-0 bg-gradient-to-b from-brand-gold/60 via-brand-gold/35 to-brand-gold/10 z-0"></div>

          <div className="space-y-8 sm:space-y-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="relative group z-10 w-full mt-4 md:mt-0">
                    {/* Horizontal Circuit Connector from Spine to Card (Desktop only) */}
                    <div className="hidden md:block absolute -left-14 top-9 w-14 h-[2px] bg-gradient-to-r from-brand-gold/50 to-brand-gold/20 group-hover:from-brand-gold group-hover:to-brand-gold/80 transition-all duration-300"></div>

                    {/* Glowing Timeline Beacon Node (Top center on mobile, left side on desktop) */}
                    <div className={`absolute left-1/2 md:left-auto md:-left-[62px] -top-3 md:top-[29px] -translate-x-1/2 md:translate-x-0 ${idx === 0 ? 'hidden md:flex' : 'flex'} items-center justify-center z-20`}>
                      <div className="w-4 h-4 rounded-full bg-[#0B0B0C] border-2 border-brand-gold flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(201,169,97,0.8)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                      </div>
                    </div>

                    {/* Luxury Obsidian Card */}
                    <div className="w-full bg-gradient-to-br from-[#121214] to-[#0a0a0b] border border-muted-grey/25 hover:border-brand-gold/50 rounded-2xl p-6 sm:p-8 md:p-9 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                      {/* Subtle Ambient Gold Corner Bloom on Hover */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,rgba(201,169,97,0.06),transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Header Row: Icon + Large Numeral + Single-Line Step Badge */}
                      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap sm:flex-nowrap">
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-ink-black transition-colors duration-300">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="text-2xl sm:text-3xl font-serif italic font-normal text-white">
                            {item.number}
                          </span>
                        </div>

                        {/* Single-line step badge */}
                        <div className="whitespace-nowrap shrink-0">
                          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-md uppercase inline-block">
                            {item.step}  {item.title}
                          </span>
                        </div>
                      </div>

                      {/* Heading */}
                      <h3 className="text-lg sm:text-xl font-serif italic text-white mb-3 leading-snug">
                        {item.heading}
                      </h3>

                      {/* Body Description */}
                      <p className="text-warm-grey/90 text-sm sm:text-base leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
