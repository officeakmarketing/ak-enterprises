import ScrollReveal from "@/components/ScrollReveal";

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
      title: "AI Lead Acquisition System",
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
    <section className="py-32 border-b border-muted-grey/30 relative">
      <ScrollReveal>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-4">Core Infrastructure</h2>
          <p className="text-warm-grey text-lg">Every component works together to capture and convert revenue.</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="bg-[#111112]/90  border border-muted-grey/30 p-8 rounded-2xl h-full shadow-lg hover:-translate-y-2 hover:border-brand-gold/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/30 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-bold text-white text-2xl mb-6 flex items-center justify-between">
                {component.title}
                <span className="text-brand-gold/20 group-hover:text-brand-gold/80 transition-colors">✦</span>
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">What It Does</div>
                  <p className="text-warm-grey/90 text-sm leading-relaxed">
                    {component.does}
                  </p>
                </div>
                <div className="pt-4 border-t border-muted-grey/20">
                  <div className="text-red-500/80 text-xs font-bold uppercase tracking-widest mb-2">The Leak It Fixes</div>
                  <p className="text-warm-grey/70 text-sm italic">
                    "{component.solves}"
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
