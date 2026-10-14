import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutArticles() {
  const pages = [
    {
      index: "01",
      code: "UK",
      region: "United Kingdom",
      tag: "National Operations",
      metric: "Verified $301K+ Systems",
      title: "Most Effective Business Operating Systems In The UK",
      description: "How measured operating systems and autonomous follow-up replace broken enquiry systems across UK service businesses.",
      href: "/most-effective-business-operating-systems-in-the-uk",
    },
    {
      index: "02",
      code: "LDN",
      region: "London",
      tag: "Capital Markets",
      metric: "Speed-to-Lead Automation",
      title: "Most Effective Business Operating Systems In London",
      description: "Analyzing speed-to-lead and verified revenue systems in Europe's most competitive services capital.",
      href: "/most-effective-business-operating-systems-in-london",
    },
    {
      index: "03",
      code: "USA",
      region: "United States",
      tag: "Enterprise Scale",
      metric: "9 Malls · 7 States Live",
      title: "Most Effective Business Operating Systems In The USA",
      description: "Deploying automated booking and operating systems across mall locations and high-volume operations nationwide.",
      href: "/most-effective-business-operating-systems-in-the-usa",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 border-b border-muted-grey/20 relative bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal>
          <div className="mb-10 md:mb-14 max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase font-bold mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span>Regional Operating Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight">
              Operating Systems by{" "}
              <span className="bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
                Region
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pages.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <Link
                href={item.href}
                scroll={true}
                className="group relative flex flex-col justify-between h-full rounded-2xl border border-muted-grey/20 bg-[#0e0e11]/85 p-7 sm:p-8 lg:p-9 transition-all duration-300 hover:border-brand-gold/50 hover:bg-[#131317] hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Subtle top ambient gold shimmer on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Card Header: Region Badge & Number */}
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-muted-grey/15">
                    <div className="inline-flex items-center gap-2">
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-brand-gold font-bold border border-brand-gold/30 bg-brand-gold/5 px-2.5 py-0.5 rounded-full">
                        {item.code}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-warm-grey/70">
                        {item.region}
                      </span>
                    </div>
                    <span className="font-serif italic text-lg sm:text-xl text-warm-grey/40 group-hover:text-brand-gold transition-colors duration-300">
                      {item.index}
                    </span>
                  </div>

                  {/* Operational Metric Tag */}
                  <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-brand-gold/90 font-medium mb-3 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-gold" />
                    <span>{item.metric}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-serif italic text-white mb-4 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-warm-grey/80 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer Action Bar */}
                <div className="pt-5 border-t border-muted-grey/15 flex items-center justify-between mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-warm-grey/50">
                    {item.tag}
                  </span>
                  
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-gold group-hover:text-white transition-colors">
                    <span>Visit page</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

