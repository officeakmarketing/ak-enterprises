import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 border-b border-muted-grey bg-[#111112] px-8 text-center rounded-lg mt-12">
      <h2 className="text-4xl md:text-5xl text-brand-gold mb-8 max-w-3xl mx-auto font-serif italic">
        Start with a free business audit. No pitch. No pressure. Just clarity.
      </h2>

      <div className="text-warm-grey text-lg leading-relaxed max-w-3xl mx-auto space-y-6 mb-12">
        <p>
          We look at your lead capture, follow-up process, operational
          workflows, and reporting visibility. We identify every gap and
          quantify exactly what it is costing you. We show you what a Business
          Operating System would look like for your specific business.
        </p>
        <p>
          The audit takes 20 minutes. The findings are yours to keep regardless
          of whether we work together.
        </p>
      </div>

      <div className="bg-[#1a1a1a] border border-muted-grey p-6 max-w-2xl mx-auto rounded-lg mb-8">
        <p className="italic text-warm-grey">
          If we cannot find a single gap in your business that is costing you
          money, we will tell you honestly and you owe us nothing. We have never
          left an audit empty-handed.
        </p>
      </div>

      <p className="text-brand-gold font-bold uppercase tracking-widest mb-8 text-sm">
        We take on a maximum of 4 new clients per month. Current availability:
        [X] slots remaining. Next available audit: [DATE].
      </p>

      <Link
        href="/contact"
        className="inline-block bg-brand-gold text-ink-black px-12 py-5 rounded font-bold text-xl hover:bg-white transition mb-4"
      >
        Book Your Free Audit
      </Link>
      <p className="text-warm-grey text-sm">
        Takes 60 seconds to book. We will confirm within 24 hours.
      </p>
    </section>
  );
}
