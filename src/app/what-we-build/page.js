import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function WhatWeBuild() {
  const components = [
    {
      title: "Website",
      does: "High-converting, mobile-first, integrated with CRM and booking from day one",
      solves: "Your site gets visitors but does not convert them into enquiries"
    },
    {
      title: "CRM and Lead Management",
      does: "Every lead captured, tracked, and followed up automatically",
      solves: "Leads fall through the cracks because nobody chased them in time"
    },
    {
      title: "Automated Follow-Up",
      does: "Instant personalised response to every enquiry within seconds, 24 hours a day",
      solves: "Slow follow-up costs you clients before the first conversation happens"
    },
    {
      title: "AI Lead Acquisition System",
      does: "Captures, qualifies, and routes leads without any staff involvement",
      solves: "Your best leads require too much manual effort to capture and qualify"
    },
    {
      title: "Booking System",
      does: "Online booking with payment, confirmations, reminders, and team notifications",
      solves: "Bookings are manual, slow, and dependent on someone being available"
    },
    {
      title: "Google Business Profile",
      does: "Top of Google Maps for local searches in your market",
      solves: "Potential clients are searching for you and finding your competitor"
    },
    {
      title: "Hiring Pipeline",
      does: "Automated application intake, candidate screening, interview scheduling",
      solves: "Hiring is chaotic and consumes weeks of administrative time"
    },
    {
      title: "Reporting Dashboard",
      does: "Real-time visibility into leads, revenue, pipeline, and performance",
      solves: "You do not know what is happening in your business without asking someone"
    },
    {
      title: "CRM Integration",
      does: "Integrates with your existing CRM  no replacement required unless wanted",
      solves: "Your tools do not talk to each other and data lives in silos"
    }
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section 1: Hero */}
      <section className="relative py-24 md:py-32 border-b border-muted-grey/30">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl mb-8 font-serif italic text-white leading-tight max-w-4xl">
            Business Operating Systems. Built bespoke. Owned by you.
          </h1>
          <p className="text-warm-grey/90 text-xl md:text-2xl mb-12 max-w-3xl font-light leading-relaxed">
            Not a software subscription. Not a template. A complete operational
            system designed around your specific business, installed and maintained
            by us.
          </p>
          <div className="bg-[#111112]/80  border border-brand-gold/30 p-8 rounded-2xl max-w-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
            <p className="text-white text-lg font-light leading-relaxed relative z-10">
              Most businesses are paying monthly for tools that don't talk to each
              other. We build <span className="font-bold text-brand-gold">one connected system</span> that replaces all of them.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 2: The Components */}
      <section className="py-32 border-b border-muted-grey/30 relative">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-4">Core Infrastructure</h2>
            <p className="text-warm-grey text-lg">Every component works together to capture and convert revenue.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-[#111112]/90  border border-muted-grey/30 p-8 rounded-2xl h-full shadow-lg hover:-translate-y-2 hover:border-brand-gold/50 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/30 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="font-bold text-white text-2xl mb-6 flex items-center justify-between">
                  {component.title}
                  <span className="text-brand-gold/20 group-hover:text-brand-gold/80 transition-colors">✦</span>
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">What It Does</div>
                    <p className="text-warm-grey/90 text-sm leading-relaxed">
                      {component.does}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-muted-grey/20">
                    <div className="text-red-500/80 text-xs font-bold uppercase tracking-widest mb-2">The Leak It Fixes</div>
                    <p className="text-warm-grey/70 text-sm italic">
                      "{component.solves}"
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Section 3: Maintenance */}
      <section className="py-32 relative">
        <ScrollReveal>
          <div className="bg-[#111112] border border-muted-grey/30 p-12 md:p-16 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-4xl md:text-6xl mb-8 font-serif italic text-white">
              We build it. We run it. You own it.
            </h2>
            <p className="text-warm-grey/90 text-lg leading-relaxed max-w-3xl mx-auto mb-12 font-light">
              Every system we build is maintained by us on an ongoing basis. These
              are our systems and our reputation is attached to how they perform.
              Monthly maintenance covers monitoring, updates, optimisations,
              integrations, and direct support. Minimum four months from go-live.
            </p>

            <div className="inline-block bg-[#1a1a1a] border border-brand-gold/20 p-6 rounded-xl mb-12 max-w-2xl text-left shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="italic text-white/90 text-sm leading-relaxed">
                  If we cannot find a single gap in your business during the audit, you
                  owe us nothing. We have never left an audit empty-handed.
                </p>
              </div>
            </div>

            <div>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-12 py-5 rounded-lg font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-gold/20 text-lg"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></span>
                <span className="relative z-10">Book Your Free Audit</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
