import Link from "next/link";
import Carousel from "@/components/Carousel";

export default function CaseStudies() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      {/* Hero */}
      <section className="py-24 border-b border-muted-grey">
        <h1 className="text-5xl md:text-6xl mb-6 max-w-4xl font-serif italic">
          Real systems. Documented results. Every number verified.
        </h1>
        <p className="text-warm-grey text-xl max-w-3xl">
          We do not estimate. We do not project. We do not round up. Every
          figure below comes from a real client, a real system, and a real result.
        </p>
      </section>

      {/* Case Study 1 */}
      <section className="py-24 border-b border-muted-grey">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-4xl mb-8 leading-snug font-serif italic">
              £237,355. 7,208 bookings. 14 months. One barbershop.
            </h2>

            <div className="mb-8">
              <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-2">
                Situation
              </h3>
              <p className="text-warm-grey">
                A high-volume Central London barbershop on pen and paper. Manual
                booking. No follow-up. No automation. The owner answering the
                phone, managing the diary, and chasing leads personally every
                single day.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-2">
                What Was Built
              </h3>
              <p className="text-warm-grey">
                A complete Business Operating System — automated booking, CRM
                pipeline, instant follow-up sequences, Google Business Profile
                optimisation, automated review generation, and a reporting
                dashboard. Installed once. Running continuously.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-4">
                Results
              </h3>
              <ul className="list-disc list-inside text-white space-y-2">
                <li>
                  <span className="font-bold">£237,355</span> — verified revenue
                </li>
                <li>
                  <span className="font-bold">7,208</span> — automated bookings
                  processed
                </li>
                <li>
                  <span className="font-bold">14 months</span> — from install to
                  result
                </li>
                <li>Zero manual booking required by the owner</li>
              </ul>
            </div>

            <blockquote className="border-l-2 border-brand-gold pl-4 text-white italic mb-8">
              "Since launching the new site, people are booking nonstop. No more
              missed calls. It just works."
              <footer className="text-sm mt-2 not-italic text-warm-grey">
                — Talib M, CEO, Bright Face Barber
              </footer>
            </blockquote>

            <Link
              href="/contact"
              className="inline-block border border-brand-gold text-brand-gold px-8 py-3 rounded font-bold hover:bg-brand-gold hover:text-ink-black transition"
            >
              Book a Free Audit for Your Business
            </Link>
          </div>
          <div className="flex-1">
            <div className="bg-[#1a1a1a] aspect-square flex items-center justify-center border border-muted-grey rounded text-warm-grey text-center p-8 flex-col">
              <p className="font-mono text-sm">[Revenue Dashboard Screenshot Pending]</p>
              <p className="font-mono text-sm mt-2">
                [Verified bullet points pending]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="py-24 border-b border-muted-grey">
        <h2 className="text-4xl mb-12 font-serif italic">
          2 million simultaneous users. One platform. Zero failures.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-2">
              Situation
            </h3>
            <p className="text-warm-grey mb-8">
              An invitation-only luxury awards ceremony in London needed a complete
              digital platform managing organiser coordination, partner access,
              sponsor visibility, and guest experience — across one connected
              infrastructure.
            </p>

            <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-2">
              What Was Built
            </h3>
            <p className="text-warm-grey">
              Official digital platform for the event. Custom designed and
              deployed by AK Enterprises. Handling all digital touchpoints from
              invitation to post-event communication.
            </p>
          </div>
          <div>
            <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-4">
              Results
            </h3>
            <ul className="list-disc list-inside text-white space-y-2 mb-8">
              <li>
                <span className="font-bold">
                  2 million simultaneous users at peak
                </span>{" "}
                — handled without failure
              </li>
              <li>
                Complete digital infrastructure for an invitation-only event
              </li>
              <li>Used by organisers, partners, sponsors, and guests</li>
            </ul>

            <blockquote className="border-l-2 border-brand-gold pl-4 text-white italic">
              "Extremely professional and highly effective. Very happy with the
              results."
              <footer className="text-sm mt-2 not-italic text-warm-grey">
                — Mario Paunica, Organiser
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-muted-grey rounded-lg p-12 lg:p-24 text-center">
          <Carousel />
        </div>
      </section>

      {/* Case Study 3 */}
      <section className="py-24">
        <h2 className="text-4xl mb-12 max-w-4xl leading-snug font-serif italic">
          Zero staff. Instant AI-generated offers. Every landlord lead captured
          automatically.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-2">
              Situation
            </h3>
            <p className="text-warm-grey mb-8">
              A UK estate agency with a guaranteed rent programme. Landlord
              acquisition was entirely manual. Staff qualifying properties and
              making offers by hand. Slow, inconsistent, expensive.
            </p>

            <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-2">
              What Was Built
            </h3>
            <p className="text-warm-grey">
              An AI-powered landlord acquisition system. Prospects submit property
              details and receive an instant AI-generated guaranteed rent offer
              within seconds — with no staff involvement. The system searches live
              rental listings within 0.25 miles, calculates a personalised offer,
              and displays the result instantly. Every lead is captured, qualified,
              routed into the CRM, and followed up automatically.
            </p>
          </div>
          <div>
            <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-4">
              Delivered
            </h3>
            <ul className="list-disc list-inside text-white space-y-2 mb-8">
              <li>
                Conversion-optimised landing page with dynamic property intake form
              </li>
              <li>AI valuation engine using live market data</li>
              <li>
                Instant guaranteed rent offer with annual income figure & confidence
                score
              </li>
              <li>Automated CRM integration and lead routing</li>
              <li>Personalised match and waiting list email sequences</li>
              <li>
                Full automation connecting landing page, AI, CRM, and property
                database
              </li>
              <li>Ongoing maintenance and 24/7 support</li>
            </ul>
          </div>
        </div>

        <Link
          href="/demo"
          className="inline-block border border-brand-gold text-brand-gold px-8 py-3 rounded font-bold hover:bg-brand-gold hover:text-ink-black transition"
        >
          See the Live Demo
        </Link>
      </section>
    </main>
  );
}
