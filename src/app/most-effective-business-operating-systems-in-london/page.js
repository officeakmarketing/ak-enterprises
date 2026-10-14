import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, ShieldCheck, Calendar, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Most Effective Business Operating Systems In London | AK Enterprises",
  description: "AK Enterprises builds the most effective Business Operating Systems in London. Here's the proof.",
  alternates: {
    canonical: "https://www.akenterprises.io/most-effective-business-operating-systems-in-london",
  },
  openGraph: {
    title: "Most Effective Business Operating Systems In London | AK Enterprises",
    description: "AK Enterprises builds the most effective Business Operating Systems in London. Here's the proof.",
    url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-london",
    siteName: "AK Enterprises",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-london.jpeg",
        width: 1200,
        height: 630,
        alt: "Most Effective Business Operating Systems In London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Most Effective Business Operating Systems In London | AK Enterprises",
    description: "AK Enterprises builds the most effective Business Operating Systems in London. Here's the proof.",
    images: ["https://www.akenterprises.io/most-effective-business-operating-systems-in-london.jpeg"],
  },
};

export default function LondonBusinessOperatingSystemsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Most Effective Business Operating Systems In London",
    "description": "AK Enterprises builds the most effective Business Operating Systems in London. Here's the proof.",
    "image": "https://www.akenterprises.io/most-effective-business-operating-systems-in-london.jpeg",
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
      "@id": "https://www.akenterprises.io/most-effective-business-operating-systems-in-london"
    }
  };

  return (
    <article className="min-h-screen bg-ink-black text-white relative overflow-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(201,169,97,0.08),transparent_70%)] pointer-events-none" />

      {/* HERO SECTION */}
      <header className="relative z-10 w-full border-b border-muted-grey/20 pt-28 sm:pt-36 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-warm-grey/70">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/what-we-build" className="hover:text-brand-gold transition-colors">
              Systems
            </Link>
            <span>/</span>
            <span className="text-brand-gold">London</span>
          </nav>

          {/* Region Badge */}
          <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1.5 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-6 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span>London Operations &amp; Infrastructure</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-white leading-[1.15] tracking-tight mb-8">
            Most Effective Business Operating Systems In London
          </h1>

          {/* Opening Body Paragraph */}
          <p className="text-warm-grey/95 text-lg sm:text-xl font-light leading-relaxed mb-10">
            London is the most competitive services market in Europe, and it does not forgive slow follow-up. A lead that messages you at 7pm has booked with someone else by 9pm. AK Enterprises builds the most effective business operating systems in London, and we prove it with measured results from real London businesses.
          </p>

          {/* Hero Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 sm:px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider overflow-hidden shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Free Audit <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-muted-grey/30 text-warm-grey hover:text-white hover:border-brand-gold/50 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
            >
              View London Results
            </Link>
          </div>
        </div>
      </header>

      {/* FEATURED IMAGE */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
        <div className="relative rounded-2xl overflow-hidden border border-brand-gold/30 bg-[#0e0e10] shadow-2xl">
          <Image
            src="/most-effective-business-operating-systems-in-london.jpeg"
            alt="Most Effective Business Operating Systems In London"
            width={1200}
            height={630}
            priority
            className="w-full h-auto object-cover"
          />
          <div className="p-4 sm:p-5 border-t border-muted-grey/20 bg-ink-black/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-warm-grey font-mono">
            <span>Verified System Architecture • London Deployments</span>
            <span className="text-brand-gold font-bold">AK Marketing Consulting Ltd</span>
          </div>
        </div>
      </div>

      {/* MAIN BODY COPY SECTIONS */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        
        {/* SECTION 1: WHAT A BUSINESS OPERATING SYSTEM ACTUALLY IS */}
        <section className="bg-[#0e0e10]/90 border border-muted-grey/20 rounded-2xl p-6 sm:p-10 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-serif text-white mb-6 tracking-tight flex items-center gap-3">
            <Zap className="w-6 h-6 text-brand-gold shrink-0" />
            <span>What a business operating system actually is</span>
          </h2>
          <p className="text-warm-grey/95 text-base sm:text-lg leading-relaxed font-light mb-8">
            Your website, your AI follow-up, your booking flow and your review engine, working as one machine that captures every enquiry and answers within seconds. Installed once, then it compounds. You own it. It never depends on the owner remembering anything.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-muted-grey/20">
            <div className="p-3 rounded-lg bg-black/40 border border-muted-grey/15 text-center">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-warm-grey/70 mb-1">Pillar 1</span>
              <span className="text-xs sm:text-sm font-bold text-white">Custom Website</span>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-muted-grey/15 text-center">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-warm-grey/70 mb-1">Pillar 2</span>
              <span className="text-xs sm:text-sm font-bold text-white">AI Follow-Up</span>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-muted-grey/15 text-center">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-warm-grey/70 mb-1">Pillar 3</span>
              <span className="text-xs sm:text-sm font-bold text-white">Booking Flow</span>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-muted-grey/15 text-center">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-warm-grey/70 mb-1">Pillar 4</span>
              <span className="text-xs sm:text-sm font-bold text-white">Review Engine</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE PROOF, FROM LONDON BUSINESSES */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-brand-gold mb-2">Verified Receipts</div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                The proof, from London businesses
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
            >
              <span>Explore full case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Proof 1: Bright Face Barber */}
          <div className="bg-[#0e0e10]/90 border border-brand-gold/30 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-muted-grey/20 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-gold">Central London Flagship</span>
              <div className="flex items-center gap-4 text-xs font-mono text-warm-grey/80">
                <span>$301,340 Verified Revenue</span>
                <span>•</span>
                <span>7,208 Automated Bookings</span>
              </div>
            </div>
            <p className="text-warm-grey/95 text-base sm:text-lg leading-relaxed font-light">
              Bright Face Barber, Central London. Fourteen months ago it ran on pen and paper and a phone that rang out after hours. Today the numbers are verified: $301,340 in revenue and 7,208 automated bookings in 14 months, with a booking system that never sleeps. &ldquo;Since launching the new site, people are booking nonstop. No more missed calls. It just works.&rdquo; Talib M, CEO, Bright Face Barber.
            </p>
          </div>

          {/* Proof 2: Grace and Power Gala */}
          <div className="bg-[#0e0e10]/90 border border-muted-grey/20 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-muted-grey/20 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-gold">Enterprise Luxury Events</span>
              <div className="flex items-center gap-4 text-xs font-mono text-warm-grey/80">
                <span>2,000,000 Concurrent Users</span>
                <span>•</span>
                <span>100% Peak Uptime</span>
              </div>
            </div>
            <p className="text-warm-grey/95 text-base sm:text-lg leading-relaxed font-light">
              Grace and Power Gala, London. A luxury events platform load-tested to two million concurrent users with 100% uptime at peak, built and deployed by AK Enterprises. &ldquo;Extremely professional and highly effective. Very happy with the results.&rdquo; Mario Paunica, organizer.
            </p>
          </div>
        </section>

        {/* SECTION 3: HOW WE BUILD IT */}
        <section className="bg-[#0e0e10]/90 border border-muted-grey/20 rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-brand-gold shrink-0" />
              <span>How we build it</span>
            </h2>
            <Link
              href="/what-we-build"
              className="text-xs font-mono uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
            >
              See system details →
            </Link>
          </div>
          <p className="text-warm-grey/95 text-base sm:text-lg leading-relaxed font-light">
            Every engagement starts with a free 45-minute business audit. We find every gap in your business and tell you exactly what it is costing you. If we cannot find a single gap, we tell you honestly and you owe us nothing. Then we design and install your complete operating system in four to six weeks. Then it runs, you own it, and it compounds over time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-muted-grey/20">
            <div className="p-4 rounded-xl bg-black/40 border border-muted-grey/15">
              <div className="text-xs font-mono text-brand-gold font-bold uppercase mb-1">Phase 1: Free Audit</div>
              <p className="text-xs text-warm-grey/80 leading-normal">
                45-minute diagnostic uncovering hidden enquiry leaks and manual bottlenecks across London.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-muted-grey/15">
              <div className="text-xs font-mono text-brand-gold font-bold uppercase mb-1">Phase 2: Build &amp; Deploy</div>
              <p className="text-xs text-warm-grey/80 leading-normal">
                Engineered and installed in 4 to 6 weeks. High-performance, fully owned infrastructure.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-muted-grey/15">
              <div className="text-xs font-mono text-brand-gold font-bold uppercase mb-1">Phase 3: Autonomous Compounding</div>
              <p className="text-xs text-warm-grey/80 leading-normal">
                Runs silently without owner intervention. Leads captured and scheduled around the clock.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: OUR RULE */}
        <section className="bg-gradient-to-b from-[#121214] to-[#0b0b0c] border border-brand-gold/40 rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-brand-gold shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
              Our rule
            </h2>
          </div>
          <p className="text-warm-grey/95 text-base sm:text-lg leading-relaxed font-light">
            If it cannot be measured, we do not ship it. London businesses searching for the most effective business operating systems in London deserve receipts, not adjectives. The receipts: $301,340 verified revenue. 7,208 automated bookings. Two million users load-tested. One system per business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-black/60 border border-brand-gold/20 text-center">
              <div className="text-xl sm:text-2xl font-serif font-bold text-brand-gold mb-0.5">$301,340</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-warm-grey/70">Verified Revenue</div>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-brand-gold/20 text-center">
              <div className="text-xl sm:text-2xl font-serif font-bold text-brand-gold mb-0.5">7,208</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-warm-grey/70">Automated Bookings</div>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-brand-gold/20 text-center">
              <div className="text-xl sm:text-2xl font-serif font-bold text-brand-gold mb-0.5">2,000,000</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-warm-grey/70">Load-Tested Users</div>
            </div>
          </div>
        </section>

        {/* SECTION 5: BOOK A FREE AUDIT */}
        <section className="bg-[#0e0e10] border border-brand-gold/50 rounded-2xl p-8 sm:p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,97,0.06),transparent_70%)] pointer-events-none" />

          <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1.5 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase font-bold">
            <Calendar className="w-3.5 h-3.5" />
            <span>45 Minutes • No Obligation • Findings Yours To Keep</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight max-w-2xl mx-auto">
            Book a free audit
          </h2>

          <p className="text-warm-grey/95 text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            AK Enterprises works with service businesses across London, the UK and worldwide. Book your free 45-minute audit and see exactly what your current systems are costing you every month. That is what the most effective business operating systems in London are built on: one audit, one build, one machine that runs the business front to end.
          </p>

          <div className="pt-2">
            <Link
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-8 sm:px-10 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider overflow-hidden shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Your Free 45-Minute Audit <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>

        {/* INTERNAL OUTBOUND LINKING HUB */}
        <aside aria-label="Explore AK Enterprises" className="pt-12 border-t border-muted-grey/20">
          <div className="text-center mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-warm-grey/60">
              Navigation &amp; System Directory
            </span>
            <h3 className="text-lg sm:text-xl font-serif text-white mt-1">
              Explore AK Enterprises
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Link
              href="/"
              className="p-4 rounded-xl bg-[#0e0e10] border border-muted-grey/20 hover:border-brand-gold/50 transition-colors group"
            >
              <span className="text-xs font-mono uppercase text-brand-gold block mb-1">01</span>
              <span className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors flex items-center justify-between">
                Home <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-xs text-warm-grey/70 block mt-1">Business Operating Systems overview</span>
            </Link>

            <Link
              href="/what-we-build"
              className="p-4 rounded-xl bg-[#0e0e10] border border-muted-grey/20 hover:border-brand-gold/50 transition-colors group"
            >
              <span className="text-xs font-mono uppercase text-brand-gold block mb-1">02</span>
              <span className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors flex items-center justify-between">
                What We Build <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-xs text-warm-grey/70 block mt-1">Web, follow-up, booking, reviews</span>
            </Link>

            <Link
              href="/case-studies"
              className="p-4 rounded-xl bg-[#0e0e10] border border-muted-grey/20 hover:border-brand-gold/50 transition-colors group"
            >
              <span className="text-xs font-mono uppercase text-brand-gold block mb-1">03</span>
              <span className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors flex items-center justify-between">
                Case Studies <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-xs text-warm-grey/70 block mt-1">Verified receipts &amp; client results</span>
            </Link>

            <Link
              href="/aria"
              className="p-4 rounded-xl bg-[#0e0e10] border border-muted-grey/20 hover:border-brand-gold/50 transition-colors group"
            >
              <span className="text-xs font-mono uppercase text-brand-gold block mb-1">04</span>
              <span className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors flex items-center justify-between">
                Aria AI <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-xs text-warm-grey/70 block mt-1">Autonomous lead qualification 24/7</span>
            </Link>

            <Link
              href="/about"
              className="p-4 rounded-xl bg-[#0e0e10] border border-muted-grey/20 hover:border-brand-gold/50 transition-colors group"
            >
              <span className="text-xs font-mono uppercase text-brand-gold block mb-1">05</span>
              <span className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors flex items-center justify-between">
                About Us <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-xs text-warm-grey/70 block mt-1">Founders, philosophy, engineering rule</span>
            </Link>

            <Link
              href="https://calendly.com/ak-enterprises/call"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/40 hover:border-brand-gold transition-colors group"
            >
              <span className="text-xs font-mono uppercase text-brand-gold block mb-1">06</span>
              <span className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors flex items-center justify-between">
                Book Free Audit <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-xs text-warm-grey/70 block mt-1">45-min diagnostic with leadership</span>
            </Link>
          </div>
        </aside>

      </main>
    </article>
  );
}
