import Link from "next/link";
import Image from "next/image";
import BackgroundSparkles from "@/components/ui/BackgroundSparkles";

export const metadata = {
  title: {
    absolute: "Most Effective Business Operating Systems In The USA | AK Enterprises",
  },
  description: "AK Enterprises builds the most effective Business Operating Systems in The USA. Here's the proof.",
  alternates: {
    canonical: "https://www.akenterprises.io/most-effective-business-operating-systems-in-the-usa",
  },
  openGraph: {
    title: "Most Effective Business Operating Systems In The USA | AK Enterprises",
    description: "AK Enterprises builds the most effective Business Operating Systems in The USA. Here's the proof.",
    url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-the-usa",
    siteName: "AK Enterprises",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-the-usa.jpeg",
        width: 1200,
        height: 630,
        alt: "Most Effective Business Operating Systems In The USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Most Effective Business Operating Systems In The USA | AK Enterprises",
    description: "AK Enterprises builds the most effective Business Operating Systems in The USA. Here's the proof.",
    images: ["https://www.akenterprises.io/most-effective-business-operating-systems-in-the-usa.jpeg"],
  },
};

export default function USABusinessOperatingSystemsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Most Effective Business Operating Systems In The USA",
    "description": "AK Enterprises builds the most effective Business Operating Systems in The USA. Here's the proof.",
    "image": "https://www.akenterprises.io/most-effective-business-operating-systems-in-the-usa.jpeg",
    "author": {
      "@type": "Organization",
      "name": "AK Enterprises",
      "url": "https://akenterprises.io"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AK Enterprises",
      "url": "https://akenterprises.io"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.akenterprises.io/most-effective-business-operating-systems-in-the-usa"
    }
  };

  return (
    <article className="min-h-screen bg-ink-black text-white relative overflow-hidden">
      {/* Background Particles */}
      <BackgroundSparkles count={40} />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-20">
        
        {/* Region Badge */}
        <div className="inline-flex max-w-full items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3 py-1.5 sm:px-3.5 sm:py-1 rounded-full text-brand-gold text-[9.5px] sm:text-xs tracking-[0.14em] sm:tracking-[0.2em] uppercase mb-5 sm:mb-6 font-bold leading-normal text-left">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse flex-shrink-0" />
          <span className="break-words">USA Operations &amp; Remote Deployments</span>
        </div>

        {/* H1 Heading - Editorial Serif styling with gold text gradient */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif italic text-white leading-[1.18] tracking-tight mb-8">
          Most Effective Business Operating Systems In The{" "}
          <span className="inline-block pr-3 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
            USA
          </span>
        </h1>

        {/* Lead Paragraph */}
        <p className="text-white text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-10 text-balance max-w-4xl">
          American service businesses do not lose to competitors. They lose to their own broken systems: calls missed after hours, enquiry forms answered days later, bookings that depend on someone remembering to reply. AK Enterprises builds the most effective business operating systems in the USA, and we prove it with measured results, not promises.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center gap-5 mb-16 pb-12 border-b border-muted-grey/20">
          <Link
            href="https://calendly.com/ak-enterprises/call"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
            <span className="relative z-10">Book a Free Audit</span>
          </Link>

          <Link
            href="/case-studies"
            className="text-warm-grey hover:text-white text-xs font-bold uppercase tracking-wider transition-colors py-2"
          >
            View Documented Results →
          </Link>
        </div>


        {/* Editorial Body Content Flow */}
        <div className="space-y-16 text-warm-grey/90 text-base sm:text-lg leading-[1.8] font-light">
          
          {/* Section: What a business operating system actually is */}
          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white mb-6 tracking-tight">
              What a{" "}
              <span className="inline-block pr-3 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
                Business Operating System
              </span>{" "}
              Actually Is
            </h2>
            <p className="max-w-4xl">
              Your website, your AI follow-up, your booking flow and your review engine, working as one machine that captures every enquiry and answers within seconds. Installed once, then it compounds. You own it. It never depends on the owner remembering anything.
            </p>
          </section>

          {/* Section: The Proof */}
          <section className="pt-8 border-t border-muted-grey/15">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white mb-8 tracking-tight">
              The{" "}
              <span className="inline-block pr-4 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
                Proof
              </span>
            </h2>
            
            {/* Case Study Partition Container - Full width on mobile without outside margin */}
            <div className="space-y-10 -mx-3.5 sm:mx-0">
              <div className="w-full rounded-none sm:rounded-2xl border-y sm:border border-brand-gold/30 bg-[#0e0e12]/90 px-4 py-7 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-brand-gold/50">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-muted-grey/15">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-brand-gold font-bold">
                    Documented Case Study // USA Multi-Location
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-warm-grey/70 font-semibold">
                    7 States &bull; 9 Locations Simultaneously
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-serif italic text-white mb-4 tracking-tight leading-snug">
                  Holiday Dream Photos, USA
                </h3>

                <p className="mb-8 text-warm-grey/90 leading-relaxed font-light text-base sm:text-lg">
                  A multi-location photography experience running a fully automated booking system across 9 mall locations in 7 states simultaneously, with 11 appointment types configured and thousands of families served. The experience works with some of the most recognized names in entertainment, and Nick Cannon has publicly supported its Black Santa experience, a dedicated session offered at select locations.
                </p>

                <div className="my-8 overflow-hidden rounded-xl border border-muted-grey/25 bg-[#0a0a0c] shadow-2xl">
                  <Image
                    src="/santa-case.png"
                    alt="Holiday Dream Photos Multi-Location Automated Booking System"
                    width={1200}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-gold/20 my-6">
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
                      9
                    </div>
                    <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                      Mall locations across USA
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
                      7
                    </div>
                    <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                      States simultaneously
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
                      100%
                    </div>
                    <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                      Automated scheduling
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: How We Build It */}
          <section className="pt-8 border-t border-muted-grey/15">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white mb-6 tracking-tight">
              How We{" "}
              <span className="inline-block pr-3.5 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
                Build It
              </span>
            </h2>
            <p className="max-w-4xl">
              Every engagement starts with a free 45-minute business audit. We find every gap in your business and tell you exactly what it is costing you. If we cannot find a single gap, we tell you honestly and you owe us nothing. Then we design and install your complete operating system in four to six weeks. Then it runs, you own it, and it compounds over time.
            </p>
          </section>

          {/* Section: Our Rule */}
          <section className="pt-8 border-t border-muted-grey/15">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white mb-6 tracking-tight">
              Our{" "}
              <span className="inline-block pr-3 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
                Rule
              </span>
            </h2>
            <p className="max-w-4xl">
              If it cannot be measured, we do not ship it. Businesses searching for the most effective business operating systems in the USA deserve receipts, not adjectives. The receipts: 9 locations, 7 states, one automated booking system. $301,340 verified revenue. 7,208 automated bookings.
            </p>
          </section>

          {/* Section: Book a Free Audit */}
          <section className="pt-8 border-t border-muted-grey/15">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white mb-6 tracking-tight">
              Book a{" "}
              <span className="inline-block pr-3.5 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
                Free Audit
              </span>
            </h2>
            <p className="mb-8 max-w-4xl">
              AK Enterprises delivers remotely across the USA, the UK and worldwide. Book your free 45-minute audit and see exactly what your current systems are costing you every month. That is what the most effective business operating systems in the USA are built on: one audit, one build, one machine that runs the business front to end.
            </p>

            <div className="pt-2">
              <Link
                href="https://calendly.com/ak-enterprises/call"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-8 py-4 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Book a Free 45-Minute Audit</span>
              </Link>
            </div>
          </section>

        </div>

      </div>
    </article>
  );
}
