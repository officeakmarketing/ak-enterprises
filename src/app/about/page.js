import Link from "next/link";

export default function About() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      {/* Section 1 & 2: Hero & Story */}
      <section className="py-24 border-b border-muted-grey">
        <h1 className="text-5xl md:text-6xl mb-12 max-w-4xl leading-tight font-serif italic">
          AK Enterprises is a business group building operating system
          infrastructure for growing businesses.
        </h1>
        <div className="text-warm-grey text-lg leading-relaxed space-y-6 max-w-3xl">
          <p>
            We started in systems because we noticed a pattern. Most businesses
            that were struggling were not struggling from a lack of opportunity.
            They were struggling from a lack of infrastructure.
          </p>
          <p>
            Leads that went cold. Bookings that fell through. Admin that consumed
            the owner's time. Revenue that was being lost before it was ever
            captured.
          </p>
          <p>
            AK Marketing was built to fix that. The Almass landlord acquisition
            system. The Bright Face Barber booking and revenue system. The Grace
            and Power Gala and Legacy and Power Gala event infrastructure. The
            Holiday Dream Photos booking system across 8 US mall locations.
          </p>
          <p>
            Now we are building AK Enterprises as the group. Services, software,
            and AI infrastructure built on one category: Business Operating
            Systems.
          </p>
        </div>
      </section>

      {/* Section 3: The Group */}
      <section className="py-24 border-b border-muted-grey">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-warm-grey">
            <thead className="text-brand-gold uppercase tracking-widest text-sm border-b border-muted-grey">
              <tr>
                <th className="py-4 px-4 w-1/4">Division</th>
                <th className="py-4 px-4">What It Is</th>
                <th className="py-4 px-4 w-1/4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-muted-grey">
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  AK Marketing
                </td>
                <td className="py-6 px-4">
                  Services division  bespoke Business Operating System builds for
                  clients
                </td>
                <td className="py-6 px-4 text-white">
                  Active  live clients across UK and USA
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">Nova</td>
                <td className="py-6 px-4">
                  AI-native operating system  productised version of what we
                  build manually
                </td>
                <td className="py-6 px-4 text-brand-gold font-bold">
                  Live deployment
                </td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold text-white text-lg">
                  Future Ventures
                </td>
                <td className="py-6 px-4">
                  Additional business lines built on the same systems principle
                </td>
                <td className="py-6 px-4 text-warm-grey">In development</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Credibility */}
      <section className="py-24 border-b border-muted-grey">
        <h2 className="text-4xl mb-12 font-serif italic">
          Where AK Enterprises has been.
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="border-b border-muted-grey pb-6">
              <div className="font-bold text-xl mb-2 text-white">
                Business Lounge Romania  Cover Feature
              </div>
              <div className="text-warm-grey">
                National business magazine. Cover and 5-page editorial. October
                2026. Distributed via InMedio.
              </div>
            </div>
            <div className="border-b border-muted-grey pb-6">
              <div className="font-bold text-xl mb-2 text-white">
                The Business Show London
              </div>
              <div className="text-warm-grey">
                Stand B1354. ExCeL London. 25,000 attendees. November 2026.
              </div>
            </div>
            <div className="border-b border-muted-grey pb-6">
              <div className="font-bold text-xl mb-2 text-white">
                Grace and Power Gala
              </div>
              <div className="text-warm-grey">Official technology partner.</div>
            </div>
            <div className="border-b border-muted-grey pb-6">
              <div className="font-bold text-xl mb-2 text-white">
                Legacy and Power Gala
              </div>
              <div className="text-warm-grey">Official technology partner.</div>
            </div>
          </div>
          <div>
            <div className="bg-[#1a1a1a] h-full min-h-[300px] border border-muted-grey rounded flex items-center justify-center text-center p-8 text-warm-grey">
              <p className="font-mono text-sm">
                [Business Lounge Romania Cover Photo Pending]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 & 6: Founders & CTA */}
      <section className="py-24 text-center">
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-24">
          <div className="bg-[#111112] p-8 rounded-lg border border-muted-grey w-full md:w-1/3 text-left">
            <div className="font-bold text-2xl mb-2 uppercase tracking-wider text-white">
              Antonios D. Gavrilas
            </div>
            <div className="text-brand-gold text-sm uppercase tracking-widest leading-relaxed">
              Founder and CEO.<br />
              AK Enterprises and AK Marketing Consulting Ltd.
            </div>
          </div>
          <div className="bg-[#111112] p-8 rounded-lg border border-muted-grey w-full md:w-1/3 text-left">
            <div className="font-bold text-2xl mb-2 uppercase tracking-wider text-white">
              Krisztian Jari
            </div>
            <div className="text-brand-gold text-sm uppercase tracking-widest leading-relaxed">
              Co-Founder.<br />
              AK Marketing Consulting Ltd.
            </div>
          </div>
        </div>

        <h2 className="text-4xl mb-12 font-serif italic">
          If you are a business owner, investor, or partner  let us talk.
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-brand-gold text-ink-black px-12 py-5 rounded font-bold text-xl hover:bg-white transition"
        >
          Book a Free Business Audit
        </Link>
      </section>
    </main>
  );
}
