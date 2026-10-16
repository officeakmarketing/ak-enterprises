import Link from "next/link";
import Image from "next/image";
import BackgroundSparkles from "@/components/ui/BackgroundSparkles";

export const metadata = {
  title: {
    absolute: "Most Effective Business Operating Systems In Minneapolis | AK Enterprises",
  },
  description: "AK Enterprises builds custom Business Operating Systems in Minneapolis. Here's the proof.",
  alternates: {
    canonical: "https://www.akenterprises.io/most-effective-business-operating-systems-in-minneapolis",
  },
  openGraph: {
    title: "Most Effective Business Operating Systems In Minneapolis | AK Enterprises",
    description: "AK Enterprises builds custom Business Operating Systems in Minneapolis. Here's the proof.",
    url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-minneapolis",
    siteName: "AK Enterprises",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-minneapolis.jpeg",
        width: 1200,
        height: 630,
        alt: "most-effective-business-operating-systems-in-minneapolis.jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Most Effective Business Operating Systems In Minneapolis | AK Enterprises",
    description: "AK Enterprises builds custom Business Operating Systems in Minneapolis. Here's the proof.",
    images: ["https://www.akenterprises.io/most-effective-business-operating-systems-in-minneapolis.jpeg"],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "44.9778;-93.2650",
    "ICBM": "44.9778, -93.2650",
  },
};

export default function MinneapolisBusinessOperatingSystemsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Most Effective Business Operating Systems In Minneapolis",
    "description": "AK Enterprises builds custom Business Operating Systems in Minneapolis. Here's the proof.",
    "image": "https://www.akenterprises.io/most-effective-business-operating-systems-in-minneapolis.jpeg",
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
      "@id": "https://www.akenterprises.io/most-effective-business-operating-systems-in-minneapolis"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "Minneapolis"
    },
    "areaServed": {
      "@type": "City",
      "name": "Minneapolis"
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
          <span className="break-words">Minneapolis Operations & Infrastructure</span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif italic text-white leading-[1.18] tracking-tight mb-8">
          Most Effective Business Operating Systems In{" "}
          <span className="inline-block pr-3 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
            Minneapolis
          </span>
        </h1>

        {/* Lead Paragraph */}
        <p className="text-white text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-10 text-balance max-w-4xl">
          Most businesses in Minneapolis are not losing to competitors. They are losing to their own broken systems: calls missed after hours, enquiry forms answered days later, bookings that depend on someone remembering to reply. AK Enterprises builds the most effective business operating systems in Minneapolis, and we prove it with measured results, not promises.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center gap-5 mb-12 pb-12 border-b border-muted-grey/20">
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
            Explore Case Studies →
          </Link>
        </div>

        {/* Featured Regional Infrastructure Map - Styled Google Maps Embed */}
        <div className="mb-16 rounded-xl sm:rounded-2xl border border-brand-gold/40 bg-[#0e0e12]/95 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Top System Chrome Bar */}
          <div className="px-4 py-3 bg-[#0a0a0d] border-b border-brand-gold/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-[10px] sm:text-xs font-mono text-warm-grey/80 tracking-wider">
                REGIONAL INFRASTRUCTURE NODE // MINNEAPOLIS
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                Active Service Coverage
              </span>
            </div>
          </div>

          {/* Map Viewport with Luxury Dark-Tuned Filter & Overlay Telemetry */}
          <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] bg-black overflow-hidden group">
            <iframe
              src="https://maps.google.com/maps?q=Minneapolis&t=m&z=10&output=embed&iwloc=near"
              title="AK Enterprises Minneapolis Operating Coverage"
              className="w-full h-full border-0 filter invert-[93%] hue-rotate-180 contrast-[120%] brightness-[85%] saturate-[70%] transition-opacity duration-300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-[#0a0a0d]/40" />

            <div className="pointer-events-none absolute top-4 left-4 z-10 bg-[#0a0a0d]/90 backdrop-blur-md border border-brand-gold/30 rounded-lg px-3.5 py-2.5 shadow-xl hidden sm:block">
              <div className="text-[9.5px] font-mono text-brand-gold uppercase tracking-[0.18em] font-bold">
                Deployments &amp; Operations
              </div>
              <div className="text-white text-xs font-semibold mt-0.5">
                Downtown Minneapolis • North Loop • St. Paul • Twin Cities Metro
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-4 right-4 z-10 bg-[#0a0a0d]/90 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 shadow-lg hidden sm:block">
              <span className="text-[10px] font-mono text-warm-grey/80">
                GEO: 44.9778° N, -93.2650° W
              </span>
            </div>
          </div>

          {/* Bottom Context Bar */}
          <div className="px-5 py-3.5 bg-[#0a0a0d]/90 border-t border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-warm-grey/80 text-center sm:text-left">
              <strong className="text-brand-gold font-medium">Bespoke Systems:</strong> Bespoke Systems: Engineering custom business operating systems for enterprises across the Twin Cities metropolitan area.
            </span>
            <Link
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-white font-mono text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1 transition-colors"
            >
              Book Minneapolis Infrastructure Audit →
            </Link>
          </div>
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
            
            {/* Partitions for Case Studies */}
            <div className="space-y-10 sm:space-y-12 -mx-3.5 sm:mx-0">
              
              {/* Partition 1: Bright Face Barber */}
              <div className="w-full rounded-none sm:rounded-2xl border-y sm:border border-brand-gold/30 bg-[#0e0e12]/90 px-4 py-7 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-brand-gold/50">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-muted-grey/15">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-brand-gold font-bold">
                    Case Study // 01 &bull; Service Business Operating System
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-warm-grey/70 font-semibold">
                    Service Industry Automation
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-serif italic text-white mb-4 tracking-tight leading-snug">
                  Bright Face Barber, Automated Booking System
                </h3>

                <p className="mb-8 text-warm-grey/90 leading-relaxed font-light text-base sm:text-lg">
                  Fourteen months ago it ran on pen and paper and a phone that rang out after hours. Today the numbers are verified: $301,340 in revenue and 7,208 automated bookings in 14 months, with a booking system that never sleeps. &ldquo;Since launching the new site, people are booking nonstop. No more missed calls. It just works.&rdquo; Talib M, CEO, Bright Face Barber.
                </p>

                <div className="my-8 overflow-hidden rounded-xl border border-muted-grey/25 bg-[#0a0a0c] shadow-2xl">
                  <Image
                    src="/bright-face-dashboard.png"
                    alt="Bright Face Barber Verified Revenue Dashboard"
                    width={1200}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-brand-gold/20 mb-8">
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
                      $301,340
                    </div>
                    <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                      Verified revenue
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
                      7,208
                    </div>
                    <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                      Automated bookings
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
                      14
                    </div>
                    <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                      Months to result
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-brand-gold leading-tight mb-1">
                      0
                    </div>
                    <div className="text-[10px] sm:text-xs text-warm-grey uppercase tracking-wider font-semibold leading-tight">
                      Missed calls
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-2 border-brand-gold/60 pl-4 sm:pl-6 py-3 bg-black/25 rounded-r-xl">
                  <p className="text-white/95 italic font-serif text-base sm:text-lg lg:text-xl leading-relaxed mb-2 font-normal">
                    &ldquo;Since launching the new site, people are booking nonstop. No more missed calls. It just works.&rdquo;
                  </p>
                  <footer className="text-brand-gold text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase">
                    Talib M, CEO, Bright Face Barber
                  </footer>
                </blockquote>
              </div>

              {/* Partition 2: Holiday Dream Photos (Santa) */}
              <div className="w-full rounded-none sm:rounded-2xl border-y sm:border border-brand-gold/30 bg-[#0e0e12]/90 px-4 py-7 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-brand-gold/50">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-muted-grey/15">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-brand-gold font-bold">
                    Case Study // 02 &bull; Multi-Location Scale
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-warm-grey/70 font-semibold">
                    7 States &bull; 9 Locations Simultaneously
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-serif italic text-white mb-4 tracking-tight leading-snug">
                  Holiday Dream Photos, Multi-Location Booking Infrastructure
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
              If it cannot be measured, we do not ship it. Businesses in Minneapolis looking for high-performance operational infrastructure deserve receipts, not adjectives. The receipts: 9 locations, 7 states, one automated booking system. $301,340 verified revenue. 7,208 automated bookings.
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
              AK Enterprises delivers remotely across Minneapolis and worldwide. Book your free 45-minute audit and see exactly what your current systems are costing you every month. That is what the most effective business operating systems in Minneapolis are built on: one audit, one build, one machine that runs the business front to end.
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
