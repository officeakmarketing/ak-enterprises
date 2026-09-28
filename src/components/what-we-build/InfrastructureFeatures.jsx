import ScrollReveal from "@/components/ui/ScrollReveal";

export default function InfrastructureFeatures() {
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
      title: "AI Lead Acquisition System (a system that qualifies and routes inbound leads automatically without staff involvement)",
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
    <section className="py-12 sm:py-16 lg:py-20 border-b border-muted-grey/20 relative bg-ink-black">
      <ScrollReveal>
        <div className="mb-10 md:mb-16 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1536px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-4 sm:mb-6">The Components</h2>
          <p className="text-warm-grey text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Outcome framing over feature lists. Every component installed in your business is designed to solve a specific operational bottleneck and drive revenue.
          </p>
        </div>
      </ScrollReveal>

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Desktop Table Header */}
        <div className="hidden lg:flex border-b border-brand-gold/30 pb-4 mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
          <div className="w-[28%] pr-6">Component</div>
          <div className="w-[35%] pr-6">What It Does</div>
          <div className="w-[37%]">Problem It Solves</div>
        </div>

        <div className="flex flex-col">
          {components.map((component, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="flex flex-col lg:flex-row lg:border-b lg:border-white/[0.06] py-0 lg:py-8 group hover:bg-white/[0.02] transition-colors duration-300">

                {/* Mobile Card Layout vs Desktop Row Layout */}
                <div className="flex flex-col lg:contents bg-[#111112] lg:bg-transparent border border-white/5 lg:border-none rounded-2xl lg:rounded-none p-6 lg:p-0 mb-4 lg:mb-0 relative overflow-hidden">

                  {/* Subtle mobile top highlight */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/20 to-brand-gold/0 lg:hidden"></div>

                  {/* Header: Component Name */}
                  <div className="lg:w-[28%] lg:pr-8 mb-5 lg:mb-0 flex items-center">
                    <h3 className="text-white font-serif text-2xl italic group-hover:text-brand-gold transition-colors duration-300">
                      {component.title}
                    </h3>
                  </div>

                  {/* Middle Column: What it does */}
                  <div className="lg:w-[35%] lg:pr-10 mb-6 lg:mb-0 flex flex-col justify-center">
                    <div className="lg:hidden text-[10px] font-bold uppercase tracking-[0.2em] text-warm-grey/50 mb-2">The Mechanism</div>
                    <p className="text-warm-grey text-[0.95rem] font-light leading-[1.65]">
                      {component.does}
                    </p>
                  </div>

                  {/* Right Column: Problem It Solves */}
                  <div className="lg:w-[37%] flex flex-col justify-center">
                    <div className="lg:hidden text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold/90 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_rgba(201,169,97,0.5)]"></span>
                      The Problem It Solves
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-brand-gold text-lg mt-[1px] hidden lg:block opacity-60 group-hover:opacity-100 transition-opacity">↳</span>
                      <p className="text-white/95 text-[0.95rem] sm:text-base leading-[1.65] font-normal">
                        {component.solves}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
