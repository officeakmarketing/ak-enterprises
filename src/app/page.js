import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQItem from "@/components/FAQItem";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 1: Hero */}
      <section className="relative pt-10 pb-16 lg:pt-4 lg:pb-16 2xl:pt-8 2xl:pb-24 border-b border-muted-grey/30 overflow-hidden">
        {/* Background Effects Removed */}

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 2xl:gap-16 items-center z-10 relative">
          <div className="flex-1 w-full lg:max-w-xl 2xl:max-w-[640px]">
            <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-full text-brand-gold tracking-[0.2em] uppercase text-[10px] sm:text-xs 2xl:text-sm mb-3 2xl:mb-5 font-bold ">
              Business Operating Systems
            </div>
            <AnimatedHeadline
              text="Your business is losing clients right now. Not to your competitors. To your own broken systems."
              className="text-3xl md:text-4xl lg:text-[2.75rem] 2xl:text-[3.25rem] mb-3 2xl:mb-5 leading-[1.15] font-serif italic text-white"
            />
            <p className="text-warm-grey/80 text-base md:text-lg 2xl:text-xl mb-6 2xl:mb-8 leading-relaxed font-light">
              AK Enterprises builds Business Operating Systems for service
              businesses — the complete infrastructure that captures every lead,
              automates every booking, and manages every client interaction
              without manual input.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 py-3 rounded text-sm font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></span>
                <span className="relative z-10">Book a Free Audit</span>
              </Link>
              <Link
                href="/demo"
                className="group inline-flex items-center justify-center border border-brand-gold/50 text-brand-gold px-6 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all hover:bg-brand-gold hover:text-ink-black hover:border-brand-gold hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                See the Live Demo
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-[#111112] border border-muted-grey aspect-video flex flex-col items-center justify-center text-warm-grey p-8 text-center rounded">
              <svg
                className="w-12 h-12 mb-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              <span>[Antonios Video Pending]</span>
            </div>
          </div>
        </div>
        <div className="mt-12 py-6 border-t border-b border-muted-grey text-center text-warm-grey font-bold tracking-widest text-sm uppercase flex flex-col md:flex-row justify-center items-center gap-4">
          <span>5 Active Clients</span>
          <span className="hidden md:inline">|</span>
          <span>UK and USA</span>
          <span className="hidden md:inline">|</span>
          <span>£237,355 Verified Revenue</span>
          <span className="hidden md:inline">|</span>
          <span>Live AI Deployment</span>
          <span className="hidden md:inline">|</span>
          <span>14 Months to Result</span>
        </div>
      </section>

      {/* Section 2: The Pain */}
      <section className="py-32 border-b border-muted-grey/30 relative">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl mb-16 font-serif italic text-center max-w-4xl mx-auto leading-tight text-white">
              Every day without a system is a day your business is leaking revenue.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#111112] border border-muted-grey/30 p-8 rounded-2xl h-full shadow-lg hover:border-brand-gold/50 transition-colors duration-500 group">
                <div className="w-12 h-12 bg-red-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-red-500 font-bold">01</span>
                </div>
                <p className="text-warm-grey/90 text-lg leading-relaxed">
                  The average service business loses between £40,000 and £120,000 per
                  year in leads that went cold, bookings that never happened, and clients
                  who chose whoever responded first.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-[#111112] border border-muted-grey/30 p-8 rounded-2xl h-full shadow-lg hover:border-brand-gold/50 transition-colors duration-500 group">
                <div className="w-12 h-12 bg-red-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-red-500 font-bold">02</span>
                </div>
                <p className="text-warm-grey/90 text-lg leading-relaxed">
                  A missed call at 7pm. A lead that submitted a form on Sunday and got
                  a reply on Tuesday. A prospect who went with a competitor because they
                  responded in 3 minutes and you responded in 3 hours.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-[#111112] border border-muted-grey/30 p-8 rounded-2xl h-full shadow-lg hover:border-brand-gold/50 transition-colors duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-brand-gold font-bold">03</span>
                </div>
                <p className="text-warm-grey/90 text-lg leading-relaxed mb-4">
                  This is happening in your business right now. Most owners never find
                  out exactly how much it is costing them because there is no system
                  tracking it.
                </p>
                <p className="font-bold text-brand-gold uppercase tracking-widest text-sm">The audit shows you.</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4} className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block text-brand-gold border-b border-brand-gold/30 pb-1 font-bold hover:text-white hover:border-white transition-all uppercase tracking-widest text-sm"
            >
              Find out what your business is losing &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: The Proof */}
      <section className="py-32 border-b border-muted-grey/30 overflow-hidden relative">
        <ScrollReveal>
          <div className="bg-[#111112]/80 border border-muted-grey/30 p-8 md:p-16 rounded-3xl flex flex-col md:flex-row gap-16 relative">

            <div className="flex-1 relative z-10">
              <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold text-xs tracking-widest uppercase mb-6 font-bold">
                Case Study  Central London Barbershop
              </div>
              <h2 className="text-4xl md:text-5xl mb-8 font-serif italic text-white leading-tight">
                From pen and paper to £237,355 in 14 months.
              </h2>
              <p className="text-warm-grey/80 mb-6 leading-relaxed text-lg font-light">
                Bright Face Barber was running entirely on manual processes. Phone
                bookings. No follow-up. No automation. No visibility into what was
                happening in the business.
              </p>
              <p className="text-warm-grey/80 mb-10 leading-relaxed text-lg font-light">
                We installed a complete Business Operating System. Automated
                booking. Instant follow-up. CRM pipeline. Google Business Profile
                ranking. Review generation. Reporting dashboard. 7,208 bookings
                processed automatically. £237,355 in verified revenue. The owner
                stopped answering the phone. The system did it for him.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8 border-t border-muted-grey/30 pt-8">
                <div>
                  <div className="text-4xl text-brand-gold font-serif italic mb-1 flex items-baseline">
                    <span className="text-2xl mr-1">£</span>
                    <AnimatedCounter value="237355" />
                  </div>
                  <div className="text-xs text-warm-grey uppercase tracking-widest font-bold">
                    Verified revenue
                  </div>
                </div>
                <div>
                  <div className="text-4xl text-brand-gold font-serif italic mb-1">
                    <AnimatedCounter value="7208" />
                  </div>
                  <div className="text-xs text-warm-grey uppercase tracking-widest font-bold">
                    Automated bookings
                  </div>
                </div>
                <div>
                  <div className="text-4xl text-brand-gold font-serif italic mb-1">
                    <AnimatedCounter value="14" />
                  </div>
                  <div className="text-xs text-warm-grey uppercase tracking-widest font-bold">
                    Months
                  </div>
                </div>
              </div>

              <blockquote className="border-l-2 border-brand-gold/50 pl-6 py-2 text-white italic mb-8 relative">
                "Since launching the new site, people are booking nonstop. No more
                missed calls. It just works."
                <footer className="text-brand-gold text-sm mt-3 not-italic font-bold tracking-widest uppercase">
                  Talib M, CEO, Bright Face Barber
                </footer>
              </blockquote>

              <Link
                href="/case-studies"
                className="inline-block mt-4 text-brand-gold border-b border-brand-gold/30 pb-1 font-bold hover:text-white hover:border-white transition-all uppercase tracking-widest text-sm"
              >
                Read the full case study &rarr;
              </Link>
            </div>

            <div className="flex-1 flex items-center justify-center relative z-10 w-full">
              <div className="bg-[#111112] w-full flex flex-col items-center justify-center border border-muted-grey/30 rounded-2xl shadow-2xl overflow-hidden group p-2">
                <Image src="/bright-face-dashboard.png" alt="Revenue Dashboard" width={800} height={500} className="object-contain w-full h-auto rounded-xl shadow-inner group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-32 border-b border-muted-grey/30 relative">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl text-center mb-20 font-serif italic text-white">
            A proven process. From audit to activation in 4 to 6 weeks.
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent -translate-y-1/2 -z-10"></div>

          <ScrollReveal delay={0.1}>
            <div className="bg-[#111112]/90  border border-muted-grey/30 p-10 rounded-2xl h-full shadow-2xl hover:-translate-y-2 transition-transform duration-500 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-6xl font-serif italic text-brand-gold/20 mb-6 group-hover:text-brand-gold/40 transition-colors">01</div>
              <div className="text-brand-gold font-bold text-2xl mb-4 tracking-widest uppercase">
                Audit
              </div>
              <p className="text-warm-grey/90 leading-relaxed text-lg font-light">
                We analyse your current setup  lead capture, follow-up, operations,
                and reporting. We show you exactly what is broken and what it is
                costing you. The audit is free. You own the findings regardless of
                whether we work together.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-[#111112]/90  border border-muted-grey/30 p-10 rounded-2xl h-full shadow-2xl hover:-translate-y-2 transition-transform duration-500 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-6xl font-serif italic text-brand-gold/20 mb-6 group-hover:text-brand-gold/40 transition-colors">02</div>
              <div className="text-brand-gold font-bold text-2xl mb-4 tracking-widest uppercase">
                Build
              </div>
              <p className="text-warm-grey/90 leading-relaxed text-lg font-light">
                We design and deploy your Business Operating System  bespoke to
                your business, connected end to end, built to run without manual
                input. Not a template. Not a subscription. Yours.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-[#111112]/90  border border-muted-grey/30 p-10 rounded-2xl h-full shadow-2xl hover:-translate-y-2 transition-transform duration-500 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-6xl font-serif italic text-brand-gold/20 mb-6 group-hover:text-brand-gold/40 transition-colors">03</div>
              <div className="text-brand-gold font-bold text-2xl mb-4 tracking-widest uppercase">
                Operate
              </div>
              <p className="text-warm-grey/90 leading-relaxed text-lg font-light">
                Your system goes live. We maintain it on an ongoing basis. You keep
                what you generate. The focus shifts to scaling your operation, not
                managing chaos.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: The Numbers */}
      <section className="py-24 border-b border-muted-grey text-center">
        <h2 className="text-4xl mb-16 font-serif italic">
          The results speak for themselves.
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-5xl md:text-6xl text-brand-gold font-serif italic mb-2">
              <AnimatedCounter prefix="£" value="237355" />
            </div>
            <div className="text-warm-grey text-sm uppercase tracking-widest">
              Verified revenue  one client, 14 months
            </div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl text-brand-gold font-serif italic mb-2">
              <AnimatedCounter value="7208" />
            </div>
            <div className="text-warm-grey text-sm uppercase tracking-widest">
              Automated bookings  zero manual input
            </div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl text-brand-gold font-serif italic mb-2">
              <AnimatedCounter value="6" />
            </div>
            <div className="text-warm-grey text-sm uppercase tracking-widest">
              AI agents running live in a single deployment
            </div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl text-brand-gold font-serif italic mb-2">
              <AnimatedCounter value="2" suffix="M" />
            </div>
            <div className="text-warm-grey text-sm uppercase tracking-widest">
              Simultaneous users handled for one event platform
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: The System Demo */}
      <section className="py-24 border-b border-muted-grey">
        <div className="max-w-3xl mb-12">
          <div className="text-brand-gold text-sm tracking-widest uppercase mb-4 font-bold">
            Live Deployment
          </div>
          <h2 className="text-4xl mb-6 font-serif italic">
            This is not a demo. This is a live system we built for a real client.
          </h2>
          <div className="text-warm-grey leading-relaxed space-y-4">
            <p>
              A UK estate agency needed to automate landlord acquisition for their
              guaranteed rent programme. We built a system that captures property
              details, generates an instant AI-powered guaranteed rent offer using
              live market data, and routes every lead into the CRM automatically.
            </p>
            <p>
              No staff involvement. No manual input. Every lead captured,
              qualified, and followed up.
            </p>
            <p className="font-bold text-white">
              Try it. Submit the form below and see exactly what your prospect sees.
            </p>
          </div>
        </div>

        <div className="border border-muted-grey rounded-lg text-center mb-8 bg-[#111112] overflow-hidden">
          <iframe
            src="https://getguaranteedrent.co.uk/"
            className="w-full h-[600px] border-none"
            title="Interactive Almass AI Lead Acquisition Demo"
            scrolling="no"
          />
        </div>

        <p className="text-warm-grey mb-8">
          The same architecture adapts to any business that receives inbound
          enquiries.
          <br />
          Manufacturing. Legal. Healthcare. Home services. Real estate.
        </p>
        <Link
          href="/demo"
          className="inline-block bg-brand-gold text-ink-black px-8 py-4 rounded font-bold hover:bg-white transition"
        >
          See What We Would Build for Your Business
        </Link>
      </section>

      {/* Section 7: More Proof */}
      <section className="py-24 border-b border-muted-grey">
        <div className="text-brand-gold text-sm tracking-widest uppercase mb-4 font-bold">
          Case Study  Luxury Events, London UK
        </div>
        <h2 className="text-4xl mb-6 max-w-3xl font-serif italic">
          2 million simultaneous users. One platform. Built and deployed by AK
          Enterprises.
        </h2>
        <p className="text-warm-grey leading-relaxed max-w-3xl mb-12">
          The Grace and Power Gala is an invitation-only luxury awards ceremony in
          London. We designed and deployed the complete official digital platform
          handling organiser coordination, partner access, and guest experience
          across one connected infrastructure.
          <br />
          <br />
          At peak the platform handled 2 million simultaneous users without failure.
        </p>

        <div className="bg-[#1a1a1a] border border-muted-grey rounded-lg p-12 lg:p-24 text-center mb-8">
          <Carousel />
        </div>

        <blockquote className="border-l-2 border-brand-gold pl-4 text-white italic">
          "Extremely professional and highly effective. Very happy with the
          results."
          <footer className="text-warm-grey text-sm mt-2 not-italic">
            Mario Paunica, Organiser, Grace and Power Gala
          </footer>
        </blockquote>
      </section>

      {/* Section 8: Credibility */}
      <section className="py-24 border-b border-muted-grey">
        <div className="text-brand-gold text-sm tracking-widest uppercase mb-4 font-bold">
          As Seen
        </div>
        <h2 className="text-4xl mb-12 font-serif italic">
          Where AK Enterprises has been.
        </h2>

        <div className="space-y-6">
          <div className="border-b border-muted-grey pb-6 flex flex-col md:flex-row md:items-center justify-between">
            <div className="font-bold text-xl mb-2 md:mb-0">
              Business Lounge Romania  Cover Feature
            </div>
            <div className="text-warm-grey md:text-right max-w-md">
              National business magazine. Cover and 5-page editorial. October
              2026.
            </div>
          </div>
          <div className="border-b border-muted-grey pb-6 flex flex-col md:flex-row md:items-center justify-between">
            <div className="font-bold text-xl mb-2 md:mb-0">
              The Business Show London  Exhibitor
            </div>
            <div className="text-warm-grey md:text-right max-w-md">
              Stand B1354. ExCeL London. 25,000 decision makers. November 2026.
            </div>
          </div>
          <div className="border-b border-muted-grey pb-6 flex flex-col md:flex-row md:items-center justify-between">
            <div className="font-bold text-xl mb-2 md:mb-0">
              Grace and Power Gala  Technology Partner
            </div>
            <div className="text-warm-grey md:text-right max-w-md">
              Invitation-only London luxury awards ceremony.
            </div>
          </div>
          <div className="border-b border-muted-grey pb-6 flex flex-col md:flex-row md:items-center justify-between">
            <div className="font-bold text-xl mb-2 md:mb-0">
              Legacy and Power Gala  Technology Partner
            </div>
            <div className="text-warm-grey md:text-right max-w-md">
              Second event in the series.
            </div>
          </div>
        </div>
        <div className="mt-12 bg-[#1a1a1a] border border-muted-grey rounded-lg p-16 text-center text-warm-grey">
          [Business Lounge Romania Cover Photo Pending]
        </div>
      </section>

      {/* Section 9: Testimonials */}
      <section className="py-24 border-b border-muted-grey">
        <h2 className="text-4xl mb-12 font-serif italic">
          Trusted by service business owners.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
            <Image src="/talib.jpg" alt="Talib M" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
            <div>
              <div className="font-bold text-xl mb-2 text-white">
                £237,355 in verified revenue
              </div>
              <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
                Talib M  CEO, Bright Face Barber
              </div>
              <p className="text-warm-grey italic">
                "Since launching the new site, people are booking nonstop. No more
                missed calls. It just works."
              </p>
            </div>
          </div>

          <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
            <Image src="/kima.gif" alt="Halima Shaker" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
            <div>
              <div className="font-bold text-xl mb-2 text-white">
                Built our infrastructure
              </div>
              <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
                Halima Shaker  CEO, Kima Group
              </div>
              <p className="text-warm-grey italic">
                "AK Marketing were attentive, thoughtful, and intentional in building our website. The guidance we received made a real difference."
              </p>
            </div>
          </div>

          <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
            <Image src="/mario.jpg" alt="Mario Paunica" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
            <div>
              <div className="font-bold text-xl mb-2 text-white">
                Official Technology Partner
              </div>
              <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
                Mario Paunica  Grace & Power Gala Organizer
              </div>
              <p className="text-warm-grey italic">
                "Extremely professional and highly effective. Very happy with the results."
              </p>
            </div>
          </div>

          <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
            <Image src="/alexandra.jpg" alt="Alexandra" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
            <div>
              <div className="font-bold text-xl mb-2 text-white">
                Faster than promised
              </div>
              <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
                Alexandra  Alla Nails & Beauty
              </div>
              <p className="text-warm-grey italic">
                "They delivered exactly what I had in mind. The site was completed faster than promised."
              </p>
            </div>
          </div>

          <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
            <Image src="/raluca.jpg" alt="Raluca Uta" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
            <div>
              <div className="font-bold text-xl mb-2 text-white">
                Perfectly captured the vision
              </div>
              <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
                Raluca Uta  CEO, Strategos Analytica
              </div>
              <p className="text-warm-grey italic">
                "They perfectly captured the vision of the event and created a beautiful, user-friendly site that made ticket purchasing easy. Professional and incredibly talented."
              </p>
            </div>
          </div>
          <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
            <Image src="/sebastian.jpg" alt="Sebastian" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
            <div>
              <div className="font-bold text-xl mb-2 text-white">
                Delivering real results
              </div>
              <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
                Sebastian  Sebastian Pop Photography
              </div>
              <p className="text-warm-grey italic">
                "Their professionalism and commitment to delivering real results truly stood out."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Who This Is For */}
      <section className="py-24 border-b border-muted-grey">
        <h2 className="text-4xl mb-12 text-center font-serif italic">
          This is not for everyone.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 bg-[#111112] border-t-4 border-brand-gold p-8">
            <h3 className="font-bold text-xl mb-4 text-white font-serif italic">
              The Right Fit
            </h3>
            <p className="text-warm-grey leading-relaxed">
              You run a service business generating consistent revenue. You are
              doing too much manually and you know it. You have tried ads, hired
              staff, or bought software  and the problem is still there. You are
              ready to fix the infrastructure, not add another tool.
            </p>
          </div>
          <div className="flex-1 bg-[#111112] border-t-4 border-red-900 p-8">
            <h3 className="font-bold text-xl mb-4 text-muted-grey font-serif italic">
              Not The Right Fit
            </h3>
            <p className="text-muted-grey leading-relaxed">
              You have just launched and have no revenue yet. You want ads only
              and are not interested in systems. You are looking for the cheapest
              option. You are not willing to commit to a minimum engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11: The Audit Offer */}
      <section className="py-24 border-b border-muted-grey bg-[#111112] px-8 text-center rounded-lg mt-12">
        <h2 className="text-4xl md:text-5xl text-brand-gold mb-8 max-w-3xl mx-auto font-serif italic">
          Start with a free business audit. No pitch. No pressure. Just clarity.
        </h2>

        <div className="text-warm-grey text-lg leading-relaxed max-w-3xl mx-auto space-y-6 mb-12">
          <p>
            We look at your lead capture, follow-up process, operational
            workflows, and reporting visibility. We identify every gap and
            quantify exactly what it is costing you. We show you what a Business
            Operating System would look like for your specific business.
          </p>
          <p>
            The audit takes 20 minutes. The findings are yours to keep regardless
            of whether we work together.
          </p>
        </div>

        <div className="bg-[#1a1a1a] border border-muted-grey p-6 max-w-2xl mx-auto rounded-lg mb-8">
          <p className="italic text-warm-grey">
            If we cannot find a single gap in your business that is costing you
            money, we will tell you honestly and you owe us nothing. We have never
            left an audit empty-handed.
          </p>
        </div>

        <p className="text-brand-gold font-bold uppercase tracking-widest mb-8 text-sm">
          We take on a maximum of 4 new clients per month. Current availability:
          [X] slots remaining. Next available audit: [DATE].
        </p>

        <Link
          href="/contact"
          className="inline-block bg-brand-gold text-ink-black px-12 py-5 rounded font-bold text-xl hover:bg-white transition mb-4"
        >
          Book Your Free Audit
        </Link>
        <p className="text-warm-grey text-sm">
          Takes 60 seconds to book. We will confirm within 24 hours.
        </p>
      </section>

      {/* Section 12: FAQ */}
      <section className="py-24">
        <h2 className="text-4xl mb-12 text-center font-serif italic">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-4xl mx-auto w-full">
          <FAQItem
            question="What exactly do you build?"
            answer={[
              "We design and implement a complete client acquisition system tailored to your business.",
              "This includes your website, booking infrastructure, lead capture systems, and the underlying structure required to consistently generate qualified inbound clients.",
            ]}
          />
          <FAQItem
            question="How is this different from a normal website?"
            answer={[
              "A normal website simply displays information.",
              "Our systems are engineered to capture attention, convert visitors, and generate booked calls automatically.",
              "Every element is designed with client acquisition as the priority.",
            ]}
          />
          <FAQItem
            question="Who is this for?"
            answer={[
              "This is designed for service businesses that rely on acquiring new clients consistently.",
              "It is especially effective for agencies, clinics, consultants, local services, and premium service providers.",
            ]}
          />
          <FAQItem
            question="How long does the process take?"
            answer={[
              "Most systems are completed within 4-6 weeks depending on scope and business complexity.",
              "Each system is built specifically for your business, not from generic templates.",
            ]}
          />
          <FAQItem
            question="Do I need technical knowledge?"
            answer={[
              "No. Everything is handled for you.",
              "Your system is delivered fully implemented and ready to operate.",
            ]}
          />
          <FAQItem
            question="How do I get started?"
            answer={[
              "Book a call and we'll assess your business and determine the best approach for building your client acquisition system.",
            ]}
          />
        </div>
      </section>
    </main>
  );
}
