import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DemoIndustries() {
  const industries = [
    {
      title: "Manufacturing",
      problem: "RFQs arrive by email. Qualification is manual. Slow response loses deals.",
      solution: "Automated intake captures details. AI qualifies against capacity. Instant acknowledgement. Lead routed with full context attached."
    },
    {
      title: "Legal",
      problem: "Case inquiries require manual assessment. Partners spend hours on unqualified calls.",
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
    <section className="w-full py-8 sm:py-12 lg:py-16 border-t border-muted-grey/20 bg-[#0a0a0b] overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal>

          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-white max-w-4xl mx-auto leading-tight">
              The same architecture. Any industry that receives inbound inquiries.
            </h2>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            {/* 2x2 Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="group relative p-8 sm:p-10 bg-[#0e0e10]/80 rounded-2xl border border-muted-grey/20 hover:border-brand-gold/40 transition-colors duration-500 overflow-hidden"
                >
                  {/* Subtle Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Industry Title */}
                    <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-gold mb-6">
                      {ind.title}
                    </h3>

                    {/* Narrative Block */}
                    <div className="space-y-5">
                      <p className="text-warm-grey/70 text-sm sm:text-[0.95rem] font-light leading-relaxed">
                        <span className="block font-bold text-warm-grey/50 uppercase tracking-[0.15em] text-[10px] mb-1.5">
                          The Problem
                        </span>
                        {ind.problem}
                      </p>

                      <p className="text-white text-sm sm:text-[0.95rem] font-light leading-relaxed border-l-2 border-brand-gold/40 pl-4">
                        <span className="block font-bold text-brand-gold uppercase tracking-[0.15em] text-[10px] mb-1.5">
                          What Aria Does
                        </span>
                        {ind.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 sm:mt-16 flex justify-center px-4 sm:px-0">
              <Link
                href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 sm:px-10 py-3.5 sm:py-5 rounded-lg font-bold uppercase tracking-widest overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md text-center w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none"></span>

                {/* Mobile Layout */}
                <span className="relative z-10 flex flex-col items-center sm:hidden w-full">
                  <span className="text-[13px] tracking-[0.2em] mb-1.5 text-ink-black">Book a Free Audit</span>
                  <span className="flex items-center justify-center gap-2 w-full text-[9px] opacity-75">
                    <span className="h-px bg-ink-black/20 flex-1 max-w-[30px]"></span>
                    See What We Would Build
                    <span className="h-px bg-ink-black/20 flex-1 max-w-[30px]"></span>
                  </span>
                </span>

                {/* Desktop Layout */}
                <span className="relative z-10 hidden sm:flex items-center w-full">
                  <span className="text-sm">
                    Book a Free Audit
                  </span>
                  <span className="opacity-50 mx-3"></span>
                  <span className="text-sm opacity-85">
                    See What We Would Build for Your Business
                  </span>
                </span>
              </Link>
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
