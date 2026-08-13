import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Demo() {
  const industries = [
    {
      title: "Manufacturing",
      problem: "RFQs arrive by email. Qualification is manual. Slow response loses deals.",
      solution: "Automated intake captures details. AI qualifies against capacity. Instant acknowledgement. Lead routed with full context attached."
    },
    {
      title: "Legal",
      problem: "Case enquiries require manual assessment. Partners spend hours on unqualified calls.",
      solution: "Intake form captures case details. AI pre-qualifies. Qualified cases routed instantly with all information captured."
    },
    {
      title: "Real Estate",
      problem: "Motivated sellers need immediate engagement. Whoever responds first wins.",
      solution: "Prospect submits property details. AI generates instant valuation. Lead captured in CRM. Follow-up begins automatically."
    },
    {
      title: "Home Services",
      problem: "Inbound job requests need fast quoting. Speed to response is the conversion lever.",
      solution: "Prospect submits job details. AI generates instant price range. Team notified. Lead captured before they contact a competitor."
    }
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section 1: Hero */}
      <section className="relative py-24 md:py-32 border-b border-muted-grey/30 text-center">
        <ScrollReveal>
          <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold tracking-[0.2em] uppercase text-xs mb-8 font-bold ">
            Live AI Deployment
          </div>
          <h1 className="text-5xl md:text-7xl mb-8 max-w-5xl mx-auto font-serif italic text-white leading-tight">
            This is not a concept. This is a live system we built for a real client. Try it.
          </h1>
          <p className="text-warm-grey/90 text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Submit the form below. You will receive exactly what a real prospect
            receives from one of our deployed systems  an instant AI-generated
            result, personalised to the details you submitted, delivered in seconds.
            <span className="block mt-4 text-white font-bold">No staff. No manual input. Just the system.</span>
          </p>
        </ScrollReveal>
      </section>

      {/* Section 2: Demo */}
      <section className="py-32 border-b border-muted-grey/30 relative">
        <ScrollReveal>
          <div className="border border-muted-grey/30 rounded-3xl min-h-[600px] flex flex-col items-center justify-center bg-[#111112]/80  overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold/10 via-brand-gold to-brand-gold/10"></div>

            {/* macOS window controls decoration */}
            <div className="w-full bg-[#1a1a1a] border-b border-muted-grey/30 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-4 px-3 py-1 bg-[#111112] rounded-md text-xs text-warm-grey/50 font-mono tracking-wider flex-1 text-center max-w-sm mx-auto">
                almass-estates-ai-engine.production
              </div>
            </div>

            <iframe
              src="https://getguaranteedrent.co.uk/"
              className="w-full h-[650px] border-none"
              title="Interactive Almass AI Lead Acquisition Demo"
              scrolling="no"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: How It Adapts */}
      <section className="py-32 relative">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl mb-16 text-center font-serif italic text-white max-w-4xl mx-auto leading-tight">
            The same architecture. Any industry that receives inbound enquiries.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
            {industries.map((ind, i) => (
              <div key={i} className="bg-[#111112]/90  border border-muted-grey/30 p-10 rounded-2xl shadow-xl hover:border-brand-gold/50 transition-colors duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold/20 group-hover:bg-brand-gold transition-colors"></div>
                <h3 className="font-bold text-white text-2xl mb-6">
                  {ind.title}
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-red-500/80 text-xs font-bold uppercase tracking-widest mb-2">The Problem</div>
                    <p className="text-warm-grey/90 text-sm leading-relaxed">
                      {ind.problem}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-muted-grey/20">
                    <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">What The System Does</div>
                    <p className="text-white text-sm leading-relaxed">
                      {ind.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-12 py-5 rounded-lg font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-gold/20 text-lg"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></span>
              <span className="relative z-10">Book a Free Audit  See What We Would Build</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
