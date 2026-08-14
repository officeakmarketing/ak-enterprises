import FAQItem from "@/components/FAQItem";

export default function FAQSection() {
  return (
    <section className="py-24">
      <h2 className="text-4xl mb-12 text-center font-serif italic">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-4xl mx-auto w-full">
        <FAQItem
          question="What exactly do you build?"
          answer={[
            "We design and implement a complete client acquisition system tailored to your business.",
            "This includes your website, booking infrastructure, lead capture systems, and the underlying structure required to consistently generate qualified inbound clients.",
          ]}
        />
        <FAQItem
          question="How is this different from a normal website?"
          answer={[
            "A normal website simply displays information.",
            "Our systems are engineered to capture attention, convert visitors, and generate booked calls automatically.",
            "Every element is designed with client acquisition as the priority.",
          ]}
        />
        <FAQItem
          question="Who is this for?"
          answer={[
            "This is designed for service businesses that rely on acquiring new clients consistently.",
            "It is especially effective for agencies, clinics, consultants, local services, and premium service providers.",
          ]}
        />
        <FAQItem
          question="How long does the process take?"
          answer={[
            "Most systems are completed within 4-6 weeks depending on scope and business complexity.",
            "Each system is built specifically for your business, not from generic templates.",
          ]}
        />
        <FAQItem
          question="Do I need technical knowledge?"
          answer={[
            "No. Everything is handled for you.",
            "Your system is delivered fully implemented and ready to operate.",
          ]}
        />
        <FAQItem
          question="How do I get started?"
          answer={[
            "Book a call and we'll assess your business and determine the best approach for building your client acquisition system.",
          ]}
        />
      </div>
    </section>
  );
}
