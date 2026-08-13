import Link from "next/link";

export default function Demo() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      {/* Section 1: Hero */}
      <section className="py-24 border-b border-muted-grey text-center">
        <h1 className="text-5xl md:text-6xl mb-6 max-w-4xl mx-auto font-serif italic">
          This is not a concept. This is a live system we built for a real client. Try it.
        </h1>
        <p className="text-warm-grey text-xl max-w-3xl mx-auto leading-relaxed">
          Submit the form below. You will receive exactly what a real prospect
          receives from one of our deployed systems — an instant AI-generated
          result, personalised to the details you submitted, delivered in seconds.
          No staff. No manual input. Just the system.
        </p>
      </section>

      {/* Section 2: Demo */}
      <section className="py-24 border-b border-muted-grey">
        <div className="border border-muted-grey rounded-lg min-h-[600px] flex items-center justify-center bg-[#111112] overflow-hidden">
          <iframe
            src="https://getguaranteedrent.co.uk/"
            className="w-full h-[600px] border-none"
            title="Interactive Almass AI Lead Acquisition Demo"
          />
        </div>
      </section>

      {/* Section 3: How It Adapts */}
      <section className="py-24">
        <h2 className="text-4xl mb-12 text-center font-serif italic">
          The same architecture. Any industry that receives inbound enquiries.
        </h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-left text-warm-grey">
            <thead className="text-brand-gold uppercase tracking-widest text-sm border-b border-muted-grey">
              <tr>
                <th className="py-4 px-4">Industry</th>
                <th className="py-4 px-4 w-1/3">The Problem</th>
                <th className="py-4 px-4">What the System Does</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-muted-grey">
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  Manufacturing
                </td>
                <td className="py-6 px-4">
                  RFQs arrive by email. Qualification is manual. Slow response
                  loses deals.
                </td>
                <td className="py-6 px-4">
                  Automated intake captures details. AI qualifies against capacity.
                  Instant acknowledgement. Lead routed with full context attached.
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">Legal</td>
                <td className="py-6 px-4">
                  Case enquiries require manual assessment. Partners spend hours on
                  unqualified calls.
                </td>
                <td className="py-6 px-4">
                  Intake form captures case details. AI pre-qualifies. Qualified
                  cases routed instantly with all information captured.
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  Real Estate
                </td>
                <td className="py-6 px-4">
                  Motivated sellers need immediate engagement. Whoever responds
                  first wins.
                </td>
                <td className="py-6 px-4">
                  Prospect submits property details. AI generates instant
                  valuation. Lead captured in CRM. Follow-up begins automatically.
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  Home Services
                </td>
                <td className="py-6 px-4">
                  Inbound job requests need fast quoting. Speed to response is the
                  conversion lever.
                </td>
                <td className="py-6 px-4">
                  Prospect submits job details. AI generates instant price range.
                  Team notified. Lead captured before they contact a competitor.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-brand-gold text-ink-black px-12 py-5 rounded font-bold text-xl hover:bg-white transition"
          >
            Book a Free Audit — See What We Would Build for Your Business
          </Link>
        </div>
      </section>
    </main>
  );
}
