import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutGroup() {
  const divisions = [
    {
      name: "AK Marketing",
      description: "Services division  custom-built Business Operating System builds for clients",
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {divisions.map((div, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative p-8 sm:p-10 bg-[#0e0e10]/80 rounded-2xl border border-muted-grey/20 hover:border-brand-gold/40 transition-colors duration-500 overflow-hidden h-full flex flex-col">
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Header */}
                  <h3 className="text-2xl sm:text-3xl font-serif italic text-white group-hover:text-brand-gold transition-colors duration-300 mb-6">
                    {div.name}
                  </h3>

                  {/* Description */}
                  <div className="flex-1 mb-8">
                    <span className="block font-bold text-warm-grey/50 uppercase tracking-[0.15em] text-[10px] mb-2">
                      What It Is
                    </span>
                    <p className="text-warm-grey/80 text-sm sm:text-base font-light leading-relaxed">
                      {div.description}
                    </p>
                  </div>

                  {/* Status Footer */}
                  <div className="pt-6 border-t border-white/5">
                    <span className="flex items-center gap-2 font-bold text-brand-gold uppercase tracking-[0.15em] text-[10px] mb-2">
                      {div.statusPulse && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_rgba(201,169,97,0.5)]"></span>
                      )}
                      Status
                    </span>
                    <p className={`text-sm sm:text-[0.95rem] font-light leading-relaxed ${div.statusHighlight ? 'text-white' : 'text-warm-grey/60 italic'}`}>
                      {div.status}
                    </p>
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
