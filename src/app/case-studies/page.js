import Link from "next/link";
import Carousel from "@/components/Carousel";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";

export default function CaseStudies() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 border-b border-muted-grey/30">
        <ScrollReveal>
          <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold tracking-[0.2em] uppercase text-xs mb-8 font-bold ">
            Case Studies
          </div>
          <h1 className="text-5xl md:text-7xl mb-8 max-w-4xl font-serif italic text-white leading-tight">
            Real systems. Documented results. Every number verified.
          </h1>
          <p className="text-warm-grey/90 text-xl max-w-3xl font-light leading-relaxed">
            We do not estimate. We do not project. We do not round up. Every
            figure below comes from a real client, a real system, and a real result.
          </p>
        </ScrollReveal>
      </section>

      {/* Case Study 1 */}
      <section className="py-32 border-b border-muted-grey/30 relative">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl mb-12 leading-tight font-serif italic text-white">
                £237,355. 7,208 bookings. 14 months. One barbershop.
              </h2>

              <div className="space-y-12">
                <div className="group">
                  <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> Situation
                  </h3>
                  <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                    A high-volume Central London barbershop on pen and paper. Manual
                    booking. No follow-up. No automation. The owner answering the
                    phone, managing the diary, and chasing leads personally every
                    single day.
                  </p>
                </div>

                <div className="group">
                  <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> What Was Built
                  </h3>
                  <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                    A complete Business Operating System  automated booking, CRM
                    pipeline, instant follow-up sequences, Google Business Profile
                    optimisation, automated review generation, and a reporting
                    dashboard. Installed once. Running continuously.
                  </p>
                </div>

                <div className="group">
                  <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-5 flex items-center gap-2">
                    <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> Results
                  </h3>
                  <ul className="space-y-4 pl-8">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                      <div className="text-white text-lg"><span className="font-bold text-brand-gold text-2xl font-serif italic mr-2">£237,355</span> verified revenue</div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                      <div className="text-white text-lg"><span className="font-bold text-brand-gold text-2xl font-serif italic mr-2">7,208</span> automated bookings</div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                      <div className="text-white text-lg"><span className="font-bold text-brand-gold text-2xl font-serif italic mr-2">14 months</span> to result</div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                      <div className="text-warm-grey/90 text-lg">Zero manual booking required by the owner</div>
                    </li>
                  </ul>
                </div>
              </div>

              <blockquote className="mt-12 bg-[#111112]/80 border border-brand-gold/20 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
                <p className="text-white italic text-lg leading-relaxed relative z-10">
                  "Since launching the new site, people are booking nonstop. No more
                  missed calls. It just works."
                </p>
                <footer className="text-sm mt-4 font-bold tracking-widest uppercase text-brand-gold relative z-10">
                  Talib M, CEO, Bright Face Barber
                </footer>
              </blockquote>
            </div>

            <div className="flex-1">
              <div className="bg-[#111112]/80 w-full  flex flex-col items-center justify-center border border-muted-grey/30 rounded-3xl text-warm-grey p-2 shadow-2xl overflow-hidden group sticky top-32">
                <Image src="/bright-face-dashboard.png" alt="Revenue Dashboard" width={800} height={500} className="object-contain w-full h-auto rounded-xl shadow-inner group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Case Study 2 */}
      <section className="py-32 border-b border-muted-grey/30 relative">
        <ScrollReveal>
          <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold tracking-[0.2em] uppercase text-xs mb-8 font-bold ">
            Case Study  The London Awards
          </div>
          <h2 className="text-4xl md:text-6xl mb-16 font-serif italic text-white max-w-4xl leading-tight">
            2 million simultaneous users. One platform. Zero failures.
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div className="space-y-12">
              <div className="group">
                <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> Situation
                </h3>
                <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                  An invitation-only luxury awards ceremony in London needed a complete
                  digital platform managing organiser coordination, partner access,
                  sponsor visibility, and guest experience  across one connected
                  infrastructure.
                </p>
              </div>

              <div className="group">
                <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> What Was Built
                </h3>
                <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                  Official digital platform for the event. Custom designed and
                  deployed by AK Enterprises. Handling all digital touchpoints from
                  invitation to post-event communication.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-[#111112] border border-muted-grey/30 p-10 rounded-2xl shadow-xl">
                <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-6">
                  Results
                </h3>
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                    <div className="text-white text-lg"><span className="font-bold text-brand-gold block text-2xl font-serif italic mb-1">2 million users at peak</span> handled without failure</div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                    <div className="text-warm-grey/90 text-lg">Complete digital infrastructure for an invitation-only event</div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                    <div className="text-warm-grey/90 text-lg">Used seamlessly by organisers, partners, sponsors, and guests</div>
                  </li>
                </ul>

                <blockquote className="border-l-2 border-brand-gold/50 pl-6 py-2 text-white italic">
                  "Extremely professional and highly effective. Very happy with the
                  results."
                  <footer className="text-brand-gold text-xs mt-3 not-italic uppercase tracking-widest font-bold">
                    Mario Paunica, Organiser
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="bg-[#111112]/80  border border-muted-grey/30 rounded-3xl p-8 lg:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-gold/5 to-transparent -z-10"></div>
            <Carousel />
          </div>
        </ScrollReveal>
      </section>

      {/* Case Study 3 */}
      <section className="py-32 relative">
        <ScrollReveal>
          <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold tracking-[0.2em] uppercase text-xs mb-8 font-bold ">
            Case Study  Almass Estates
          </div>
          <h2 className="text-4xl md:text-6xl mb-16 max-w-5xl leading-tight font-serif italic text-white">
            Zero staff. Instant AI-generated offers. Every landlord lead captured
            automatically.
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div className="space-y-12">
              <div className="group">
                <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> Situation
                </h3>
                <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                  A UK estate agency with a guaranteed rent programme. Landlord
                  acquisition was entirely manual. Staff qualifying properties and
                  making offers by hand. Slow, inconsistent, expensive.
                </p>
              </div>

              <div className="group">
                <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> What Was Built
                </h3>
                <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                  An AI-powered landlord acquisition system. Prospects submit property
                  details and receive an instant AI-generated guaranteed rent offer
                  within seconds  with no staff involvement. The system searches live
                  rental listings within 0.25 miles, calculates a personalised offer,
                  and displays the result instantly. Every lead is captured, qualified,
                  routed into the CRM, and followed up automatically.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-[#111112] border border-muted-grey/30 p-10 rounded-2xl shadow-xl h-full">
                <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-8">
                  System Architecture Delivered
                </h3>
                <ul className="space-y-4">
                  {[
                    "Conversion-optimised landing page with dynamic property intake form",
                    "AI valuation engine using live market data",
                    "Instant guaranteed rent offer with annual income figure & confidence score",
                    "Automated CRM integration and lead routing",
                    "Personalised match and waiting list email sequences",
                    "Full automation connecting landing page, AI, CRM, and property database",
                    "Ongoing maintenance and 24/7 support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-brand-gold/50 mt-2 flex-shrink-0"></div>
                      <div className="text-warm-grey/90 text-md leading-relaxed">{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/demo"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-12 py-5 rounded-lg font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-gold/20"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></span>
              <span className="relative z-10">See the Live Demo</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
