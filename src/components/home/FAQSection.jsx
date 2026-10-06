import FAQItem from "@/components/ui/FAQItem";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FAQSection() {
  const faqs = [
    {
      question: "What exactly do you build?",
      answer: [
        "We design and deploy a complete Business Operating System tailored to your service business.",
        "This includes your conversion website, automated booking infrastructure, instant lead capture, CRM pipeline, and reporting dashboard to manage every client interaction without manual input.",
      ],
    },
    {
      question: "How is this different from a normal website or SaaS tool?",
      answer: [
        "Tools like GoHighLevel, HubSpot, or ClickFunnels are platforms you operate yourself. You pay monthly, configure everything, watch tutorials, and hope it works. Most businesses that subscribe to these tools configure a fraction of what they pay for.",
        "This is different. We build the system, install it in your business, and run it on an ongoing basis. You never touch the software. You never configure anything. You own the outcome, not a subscription.",
        "If you want a tool, there are cheaper options. If you want a system that runs without you, this is it."
      ],
    },
    {
      question: "Who is this designed for?",
      answer: [
        "This is engineered for established service businesses generating consistent revenue that are losing revenue to manual bottlenecks, slow lead replies, or missed calls.",
      ],
    },
    {
      question: "How long does deployment take?",
      answer: [
        "Most custom-built systems are fully architected, tested, and deployed live within 4 to 6 weeks depending on operational complexity.",
      ],
    },
    {
      question: "Do I or my team need technical knowledge?",
      answer: [
        "No. Everything is delivered turn-key and fully implemented. We provide complete onboarding, ongoing maintenance, and 24/7 technical monitoring.",
      ],
    },
    {
      question: "What happens during the free audit?",
      answer: [
        "We review your current lead flow and operational bottlenecks in 20 minutes, pinpointing exactly where revenue is leaking. The findings are 100% yours to keep regardless of whether we work together.",
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.join(" "),
      },
    })),
  };

  return (
    <section className="w-full pt-8 pb-14 sm:py-12 lg:py-16 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      {/* FAQ Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-block border border-brand-gold/40 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-bold">
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white leading-tight">
              Common Questions & Answers
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3 sm:space-y-3.5 w-full">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.04}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
