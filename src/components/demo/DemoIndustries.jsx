import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function DemoIndustries() {
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
  );
}
