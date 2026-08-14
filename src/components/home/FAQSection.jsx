import FAQItem from "@/components/FAQItem";
import ScrollReveal from "@/components/ScrollReveal";

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
        "A normal website simply displays static information, and SaaS tools add more disconnected subscriptions.",
        "Our Business Operating Systems connect your lead capture, follow-up, and booking workflows end-to-end. You own the infrastructure permanently  not another monthly template.",
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
        "Most bespoke systems are fully architected, tested, and deployed live within 3 to 5 weeks depending on operational complexity.",
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

  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 pt-8 pb-14 sm:py-12 lg:py-16 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
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
