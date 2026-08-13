import Link from "next/link";

export default function WhatWeBuild() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      {/* Section 1: Hero */}
      <section className="py-24 border-b border-muted-grey">
        <h1 className="text-5xl md:text-6xl mb-6 font-serif italic">
          Business Operating Systems. Built bespoke. Owned by you.
        </h1>
        <p className="text-warm-grey text-xl mb-8 max-w-3xl">
          Not a software subscription. Not a template. A complete operational
          system designed around your specific business, installed and maintained
          by us.
        </p>
        <div className="bg-[#111112] border-l-4 border-brand-gold p-6 inline-block">
          <p className="text-white font-bold text-lg">
            Most businesses are paying monthly for tools that don't talk to each
            other. We build one connected system that replaces all of them.
          </p>
        </div>
      </section>

      {/* Section 2: The Components */}
      <section className="py-24 border-b border-muted-grey">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-warm-grey">
            <thead className="text-brand-gold uppercase tracking-widest text-sm border-b border-muted-grey">
              <tr>
                <th className="py-4 px-4 w-1/4">Component</th>
                <th className="py-4 px-4 w-1/3">What It Does</th>
                <th className="py-4 px-4">Problem It Solves</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-muted-grey">
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">Website</td>
                <td className="py-6 px-4">
                  High-converting, mobile-first, integrated with CRM and booking
                  from day one
                </td>
                <td className="py-6 px-4">
                  Your site gets visitors but does not convert them into enquiries
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  CRM and Lead Management
                </td>
                <td className="py-6 px-4">
                  Every lead captured, tracked, and followed up automatically
                </td>
                <td className="py-6 px-4">
                  Leads fall through the cracks because nobody chased them in time
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  Automated Follow-Up
                </td>
                <td className="py-6 px-4">
                  Instant personalised response to every enquiry within seconds, 24
                  hours a day
                </td>
                <td className="py-6 px-4">
                  Slow follow-up costs you clients before the first conversation
                  happens
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  AI Lead Acquisition System
                </td>
                <td className="py-6 px-4">
                  Captures, qualifies, and routes leads without any staff
                  involvement
                </td>
                <td className="py-6 px-4">
                  Your best leads require too much manual effort to capture and
                  qualify
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  Booking System
                </td>
                <td className="py-6 px-4">
                  Online booking with payment, confirmations, reminders, and team
                  notifications
                </td>
                <td className="py-6 px-4">
                  Bookings are manual, slow, and dependent on someone being
                  available
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  Google Business Profile
                </td>
                <td className="py-6 px-4">
                  Top of Google Maps for local searches in your market
                </td>
                <td className="py-6 px-4">
                  Potential clients are searching for you and finding your
                  competitor
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  Hiring Pipeline
                </td>
                <td className="py-6 px-4">
                  Automated application intake, candidate screening, interview
                  scheduling
                </td>
                <td className="py-6 px-4">
                  Hiring is chaotic and consumes weeks of administrative time
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  Reporting Dashboard
                </td>
                <td className="py-6 px-4">
                  Real-time visibility into leads, revenue, pipeline, and
                  performance
                </td>
                <td className="py-6 px-4">
                  You do not know what is happening in your business without asking
                  someone
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  CRM Integration
                </td>
                <td className="py-6 px-4">
                  Integrates with your existing CRM — no replacement required unless
                  wanted
                </td>
                <td className="py-6 px-4">
                  Your tools do not talk to each other and data lives in silos
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Maintenance */}
      <section className="py-24">
        <h2 className="text-4xl mb-6 font-serif italic">
          We build it. We run it. You own it.
        </h2>
        <p className="text-warm-grey text-lg leading-relaxed max-w-3xl mb-8">
          Every system we build is maintained by us on an ongoing basis. These
          are our systems and our reputation is attached to how they perform.
          Monthly maintenance covers monitoring, updates, optimisations,
          integrations, and direct support. Minimum four months from go-live.
        </p>
        <div className="bg-[#111112] border-l-4 border-brand-gold p-6 mb-12 max-w-3xl">
          <p className="italic text-white">
            If we cannot find a single gap in your business during the audit, you
            owe us nothing. We have never left an audit empty-handed.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-block bg-brand-gold text-ink-black px-10 py-4 rounded font-bold hover:bg-white transition text-lg"
        >
          Book a Free Audit
        </Link>
      </section>
    </main>
  );
}
