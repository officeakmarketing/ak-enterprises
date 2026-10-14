import Link from "next/link";
import Image from "next/image";

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
    <article className="min-h-screen bg-ink-black text-white relative">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Subtle top spotlight to match home page */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(201,169,97,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-20">
        
        {/* Region Badge */}
        <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-5 sm:mb-6 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          <span>USA Operations &amp; Remote Deployments</span>
        </div>

        {/* H1 Heading - Editorial Serif styling matching Home Page */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif italic text-white leading-[1.18] tracking-tight mb-8">
          Most Effective Business Operating Systems In The USA
        </h1>

        {/* Lead Paragraph */}
        <p className="text-white text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-10 text-balance">
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

        {/* Featured Image */}
        <div className="mb-16 overflow-hidden rounded-2xl border border-muted-grey/25 bg-[#0e0e10] shadow-2xl">
          <Image
            src="/most-effective-business-operating-systems-in-the-usa.jpeg"
            alt="Most Effective Business Operating Systems In The USA"
            width={1200}
            height={630}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Editorial Body Content Flow */}
        <div className="space-y-14 text-warm-grey/90 text-base sm:text-lg leading-[1.75] font-light">
          
          {/* Section: What a business operating system actually is */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-white mb-5 tracking-tight">
              What a business operating system actually is
            </h2>
            <p>
              Your website, your AI follow-up, your booking flow and your review engine, working as one machine that captures every enquiry and answers within seconds. Installed once, then it compounds. You own it. It never depends on the owner remembering anything.
            </p>
          </section>

          {/* Section: The proof */}
          <section className="pt-6 border-t border-muted-grey/15">
            <h2 className="text-2xl sm:text-3xl font-serif italic text-white mb-6 tracking-tight">
              The proof
            </h2>
            
            <p className="mb-4">
              Holiday Dream Photos, USA. A multi-location photography experience running a fully automated booking system across 9 mall locations in 7 states simultaneously, with 11 appointment types configured and thousands of families served. The experience works with some of the most recognized names in entertainment, and Nick Cannon has publicly supported its Black Santa experience, a dedicated session offered at select locations.
            </p>

            <div className="my-8 overflow-hidden rounded-xl border border-muted-grey/25 bg-[#0e0e10] shadow-xl">
              <Image
                src="/santa-case.png"
                alt="Holiday Dream Photos Multi-Location Automated Booking System"
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="mb-4">
              Bright Face Barber, London. Our flagship build, installed by the same team: $301,340 in verified revenue and 7,208 automated bookings in 14 months after moving from pen and paper. &ldquo;Since launching the new site, people are booking nonstop. No more missed calls. It just works.&rdquo; Talib M, CEO.
            </p>

            <blockquote className="my-8 border-l-2 border-brand-gold/60 pl-6 py-2">
              <p className="text-white/95 italic font-serif text-lg sm:text-xl leading-relaxed mb-2">
                &ldquo;Since launching the new site, people are booking nonstop. No more missed calls. It just works.&rdquo;
              </p>
              <footer className="text-brand-gold text-xs font-mono font-bold tracking-widest uppercase">
                Talib M, CEO, Bright Face Barber
              </footer>
            </blockquote>

            <div className="my-8 overflow-hidden rounded-xl border border-muted-grey/25 bg-[#0e0e10] shadow-xl">
              <Image
                src="/bright-face-dashboard.png"
                alt="Bright Face Barber Verified Revenue Dashboard"
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Section: How we build it */}
          <section className="pt-6 border-t border-muted-grey/15">
            <h2 className="text-2xl sm:text-3xl font-serif italic text-white mb-5 tracking-tight">
              How we build it
            </h2>
            <p>
              Every engagement starts with a free 45-minute business audit. We find every gap in your business and tell you exactly what it is costing you. If we cannot find a single gap, we tell you honestly and you owe us nothing. Then we design and install your complete operating system in four to six weeks. Then it runs, you own it, and it compounds over time.
            </p>
          </section>

          {/* Section: Our rule */}
          <section className="pt-6 border-t border-muted-grey/15">
            <h2 className="text-2xl sm:text-3xl font-serif italic text-white mb-5 tracking-tight">
              Our rule
            </h2>
            <p>
              If it cannot be measured, we do not ship it. Businesses searching for the most effective business operating systems in the USA deserve receipts, not adjectives. The receipts: 9 locations, 7 states, one automated booking system. $301,340 verified revenue. 7,208 automated bookings.
            </p>
          </section>

          {/* Section: Book a free audit */}
          <section className="pt-8 border-t border-muted-grey/15">
            <h2 className="text-2xl sm:text-3xl font-serif italic text-white mb-5 tracking-tight">
              Book a free audit
            </h2>
            <p className="mb-8">
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
