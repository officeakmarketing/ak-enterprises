import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutArticles() {
  const articles = [
    {
      region: "United Kingdom",
      tag: "Research & Case Proof",
      title: "Most Effective Business Operating Systems In The UK",
      description: "How measured operating systems and autonomous follow-up replace broken enquiry systems across UK service businesses.",
      image: "/most-effective-business-operating-systems-in-the-uk.jpeg",
      href: "/most-effective-business-operating-systems-in-the-uk",
    },
    {
      region: "London",
      tag: "Market Analysis",
      title: "Most Effective Business Operating Systems In London",
      description: "Analyzing speed-to-lead and verified revenue systems in Europe's most competitive services capital.",
      image: "/most-effective-business-operating-systems-in-london.jpeg",
      href: "/most-effective-business-operating-systems-in-london",
    },
    {
      region: "United States",
      tag: "Enterprise Scale",
      title: "Most Effective Business Operating Systems In The USA",
      description: "Deploying automated booking and operating systems across 9 mall locations in 7 states and service businesses nationwide.",
      image: "/most-effective-business-operating-systems-in-the-usa.jpeg",
      href: "/most-effective-business-operating-systems-in-the-usa",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 border-b border-muted-grey/20 relative bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal>
          <div className="mb-10 md:mb-14 max-w-3xl">
            <div className="inline-block border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase font-bold mb-4 sm:mb-6">
              Publications &amp; Reports
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight">
              Operating Systems in Depth
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col h-full group">
                <Link
                  href={article.href}
                  className="relative w-full aspect-[16/10] bg-[#111112]/90 border border-muted-grey/20 rounded-2xl overflow-hidden shadow-xl mb-5 block"
                >
                  <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-brand-gold mb-2 font-bold">
                      {article.tag} • {article.region}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif italic text-white mb-3 group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                      <Link href={article.href}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-warm-grey/80 text-xs sm:text-sm font-light leading-relaxed mb-5">
                      {article.description}
                    </p>
                  </div>

                  <div className="text-[10px] sm:text-xs text-warm-grey/60 uppercase tracking-wider font-mono border-l border-brand-gold/30 pl-3 flex flex-col items-start gap-1.5 mt-auto">
                    <span>AK Enterprises Research Brief</span>
                    <Link
                      href={article.href}
                      className="group/link inline-flex items-center gap-1.5 text-brand-gold hover:text-white transition-colors font-sans text-xs sm:text-sm font-bold capitalize tracking-wide"
                    >
                      Read article <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </Link>
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
