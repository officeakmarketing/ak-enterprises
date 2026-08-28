import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutGroup() {
  const divisions = [
    {
      name: "AK Marketing",
      description: "Services division  bespoke Business Operating System builds for clients",
      status: "Active  live clients across UK and USA",
      statusHighlight: true,
      statusPulse: true
    },
    {
      name: "Nova",
      description: "AI-native operating system  productised version of what we build manually",
      status: "Live deployment",
      statusHighlight: true,
      statusPulse: false
    },
    {
      name: "Future Ventures",
      description: "Additional business lines built on the same systems principle",
      status: "In development",
      statusHighlight: false,
      statusPulse: false
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 border-b border-muted-grey/20 relative bg-ink-black">
      <ScrollReveal>
        <div className="mb-10 md:mb-16 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1536px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-4 sm:mb-6">The Group</h2>
        </div>
      </ScrollReveal>

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Desktop Table Header */}
        <div className="hidden lg:flex border-b border-brand-gold/30 pb-4 mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
          <div className="w-[30%] pr-6">Division</div>
          <div className="w-[45%] pr-6">What It Is</div>
          <div className="w-[25%]">Status</div>
        </div>

        <div className="flex flex-col">
          {divisions.map((div, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex flex-col lg:flex-row lg:border-b lg:border-white/[0.06] py-0 lg:py-8 group hover:bg-white/[0.02] transition-colors duration-300">

                {/* Mobile Card Layout vs Desktop Row Layout */}
                <div className="flex flex-col lg:contents bg-[#111112] lg:bg-transparent border border-white/5 lg:border-none rounded-2xl lg:rounded-none p-6 lg:p-0 mb-4 lg:mb-0 relative overflow-hidden w-full">

                  {/* Subtle mobile top highlight */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/20 to-brand-gold/0 lg:hidden"></div>

                  {/* Header: Division Name */}
                  <div className="lg:w-[30%] lg:pr-8 mb-5 lg:mb-0 flex items-center">
                    <h3 className="text-white font-serif text-3xl md:text-4xl italic group-hover:text-brand-gold transition-colors duration-300">
                      {div.name}
                    </h3>
                  </div>

                  {/* Middle Column: What it does */}
                  <div className="lg:w-[45%] lg:pr-10 mb-6 lg:mb-0 flex flex-col justify-center">
                    <div className="lg:hidden text-[10px] font-bold uppercase tracking-[0.2em] text-warm-grey/50 mb-2">What It Is</div>
                    <p className="text-warm-grey text-base md:text-lg font-light leading-relaxed">
                      {div.description}
                    </p>
                  </div>

                  {/* Right Column: Status */}
                  <div className="lg:w-[25%] flex flex-col justify-center">
                    <div className="lg:hidden text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold/90 mb-2 flex items-center gap-2">
                      {div.statusPulse && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_rgba(201,169,97,0.5)]"></span>
                      )}
                      Status
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-brand-gold text-lg hidden lg:block opacity-60 group-hover:opacity-100 transition-opacity">↳</span>
                      <p className={`text-[0.95rem] sm:text-base leading-[1.65] font-normal ${div.statusHighlight ? 'text-white' : 'text-warm-grey/60 italic'}`}>
                        {div.status}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
