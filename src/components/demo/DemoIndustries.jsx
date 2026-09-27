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
    <section className="w-full py-8 sm:py-12 lg:py-16 border-t border-muted-grey/20 bg-[#0a0a0b] overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal>

          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-white max-w-4xl mx-auto leading-tight">
              The same architecture. Any industry that receives inbound enquiries.
            </h2>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            {/* Desktop Table Header */}
            <div className="hidden lg:grid grid-cols-12 gap-8 pb-5 border-b border-brand-gold/30 text-[10px] tracking-[0.2em] uppercase font-bold text-brand-gold">
              <div className="col-span-3">Industry</div>
              <div className="col-span-4">The Problem</div>
              <div className="col-span-5">What the System Does</div>
            </div>

            {/* Industry Rows */}
            <div className="flex flex-col gap-6 lg:gap-0">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 lg:items-center py-6 sm:py-8 lg:border-b lg:border-white/10 group bg-[#111112] lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none border border-white/5 lg:border-none relative overflow-hidden"
                >
                  {/* Mobile Mobile subtle top-gradient highlight */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/20 via-transparent to-transparent lg:hidden"></div>

                  {/* Industry Title */}
                  <div className="lg:col-span-3">
                    <h3 className="font-bold text-white text-xl sm:text-2xl flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {ind.title}
                    </h3>
                  </div>

                  {/* Problem Block */}
                  <div className="lg:col-span-4 lg:pr-8">
                    <div className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1.5 lg:hidden">
                      The Problem
                    </div>
                    <p className="text-warm-grey/80 text-sm sm:text-base leading-relaxed font-light">
                      {ind.problem}
                    </p>
                  </div>

                  {/* Solution Block */}
                  <div className="lg:col-span-5">
                    <div className="text-brand-gold text-[9px] font-bold uppercase tracking-widest mb-1.5 lg:hidden mt-2">
                      What The System Does
                    </div>
                    <p className="text-white text-sm sm:text-base leading-relaxed font-light pl-4 lg:pl-0 border-l-2 border-brand-gold/40 lg:border-none">
                      {ind.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 sm:mt-24 flex justify-center px-4 sm:px-0">
              <Link
                href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 sm:px-10 py-5 sm:py-5 rounded-lg font-bold uppercase tracking-widest overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md text-center w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none"></span>

                {/* Mobile Layout */}
                <span className="relative z-10 flex flex-col items-center sm:hidden w-full">
                  <span className="text-[13px] tracking-[0.2em] mb-2 text-ink-black">Book a Free Audit</span>
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
