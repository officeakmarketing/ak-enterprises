import Link from "next/link";

export const metadata = {
  title: "Terms of Service | AK Enterprises",
  description: "Terms of Service for AK Marketing Consulting Ltd, trading as AK Enterprises.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ink-black text-white pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Main Document Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight mb-3">
          Terms of <span className="italic text-brand-gold">Service</span>
        </h1>
        
        <p className="text-xs sm:text-sm font-mono tracking-widest text-warm-grey uppercase mb-8">
          LAST UPDATED: 12 OCTOBER 2026
        </p>

        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Entity Header Info */}
        <div className="text-xs sm:text-sm text-warm-grey leading-relaxed font-light mb-12 space-y-2">
          <p>
            <strong className="text-white font-medium">AK Marketing Consulting Ltd</strong>, trading as <strong className="text-white font-medium">AK Enterprises</strong> • www.akenterprises.io
          </p>
          <p>
            Legal entity: AK Marketing Consulting Ltd (company no. 17128177), registered in England and Wales.
          </p>
          <p>
            Registered office: 29 Highland Drive, Bushey, Hertfordshire, WD23 4HH, United Kingdom. Trading as AK Enterprises. Contact:{" "}
            <a href="mailto:office@akmarketing.agency" className="text-brand-gold hover:underline">
              office@akmarketing.agency
            </a>.
          </p>
          <p>
            United States operations: Managed by Christopher Strobach, Director of Sales, Wisconsin, USA, on behalf of AK Marketing Consulting Ltd.
          </p>
          <p className="text-white/60 pt-1">
            Effective date: 12 October 2026 | Version: 1.0
          </p>
        </div>

        {/* Text-Based Sections */}
        <div className="space-y-10 sm:space-y-12 text-warm-grey text-base sm:text-lg leading-relaxed font-light">
          
          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              1. About these terms
            </h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of www.akenterprises.io (the &quot;Website&quot;) and any services provided by AK Marketing Consulting Ltd, trading as AK Enterprises (&quot;AK&quot;, &quot;we&quot;, &quot;us&quot;), including the free business audit, the design and installation of Business Operating Systems, and ongoing management services (together, the &quot;Services&quot;). By accessing the Website or engaging the Services you agree to these Terms. If you do not agree, do not use the Website or the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              2. The Services
            </h2>
            <p>
              AK builds and operates business systems for small and medium-sized businesses, including websites, AI-powered lead follow-up (the &quot;Aria&quot; assistant), booking automation, and review management. Work is delivered in phases: audit, build, and operate. The specific scope, deliverables, timelines, and fees for any engagement are set out in a written proposal or agreement signed by both parties, which prevails over these Terms where they conflict.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              3. Free Business Audit
            </h2>
            <p>
              The free business audit is a no-obligation consultation lasting approximately 45 minutes. It is provided free of charge. Findings shared during the audit are yours to keep regardless of whether you engage us. Booking an audit does not create a client relationship, and either party may cancel via the scheduling link at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              4. Quotations, engagement, and payment
            </h2>
            <p>
              Quotations are valid for 14 days unless stated otherwise. Unless otherwise agreed in writing, fees are invoiced as set out in the applicable proposal (typically an initial build payment and monthly management fees). Invoices are payable within 14 days of issue. Late payment may attract interest at 4% per annum above the Bank of England base rate, compounded daily, plus reasonable collection costs. We may suspend the Services for non-payment after written notice. If you are a consumer, nothing in these Terms limits your statutory rights, including those under the UK Consumer Rights Act 2015.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              5. Client responsibilities
            </h2>
            <p>
              You agree to provide timely access to the information, accounts, and third-party platforms (for example hosting, calendars, and communication tools) needed to deliver the Services, and to ensure you have the right to grant us such access. You are responsible for the accuracy and legality of content and data you supply and for obtaining any consents needed from your own customers for data we process on your behalf. Delays caused by missing access or inputs extend agreed timelines accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              6. Intellectual property
            </h2>
            <p>
              On full payment, you own the final delivered deliverables (website, content, and configuration) created specifically for you. We retain all rights in our pre-existing tools, frameworks, templates, prompts, and internal processes. We may reference the engagement in our portfolio and case studies unless you ask us in writing not to. Third-party materials (fonts, images, plugins) remain subject to their own licences.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              7. AI tools and disclaimers
            </h2>
            <p>
              Parts of the Services use artificial intelligence, including the Aria assistant and automated valuation or analysis tools. AI outputs are estimates and guidance only. As stated on the Website, Aria&apos;s estimates are based on live market data, are for guidance only, and are not a formal valuation, financial advice, or a guaranteed offer. Automated communications can contain errors; important decisions should be verified with a human representative. We are not liable for decisions made in reliance on AI-generated estimates.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              8. Testimonials and case studies
            </h2>
            <p>
              Case studies and metrics shown on the Website reflect specific client engagements. Results are not guaranteed and will vary depending on your business, market, and implementation. Nothing on the Website constitutes a promise of equivalent results.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              9. No professional advice
            </h2>
            <p>
              Website content is general information, not legal, tax, accounting, or financial advice. You should obtain professional advice for your specific circumstances before acting on any Website content.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              10. Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, we are not liable for indirect or consequential losses, loss of profit, revenue, data, or business opportunity, or for losses arising from third-party platforms, hosting outages, or communications providers outside our control. Our total aggregate liability arising out of or in connection with the Services or the Website is limited to the greater of the fees paid by you in the 12 months before the event giving rise to the claim, or GBP 500. Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot lawfully be excluded. If you are a US consumer, this section does not limit any non-waivable rights you have under applicable state or federal law.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              11. Indemnity
            </h2>
            <p>
              You agree to indemnify us against third-party claims arising from content or data you supply, your breach of these Terms, or your infringement of another party&apos;s rights in connection with materials you provide for publication.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              12. Termination and suspension
            </h2>
            <p>
              We may suspend or terminate access to the Website or Services for breach of these Terms, non-payment, unlawful use, or conduct that endangers our systems or other clients, in each case with notice where reasonably practicable. On termination, accrued rights and obligations survive, and Sections 5 to 12 continue to apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              13. Complaints
            </h2>
            <p>
              Complaints can be sent to{" "}
              <a href="mailto:office@akmarketing.agency" className="text-brand-gold hover:underline">
                office@akmarketing.agency
              </a>
              . We aim to acknowledge complaints within 3 business days and resolve them within 14 days. If you are a UK consumer and remain dissatisfied, you may seek redress through your statutory rights; if you are a US consumer, through applicable state consumer protection channels.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              14. Governing law and jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of England and Wales, and the courts of England and Wales have non-exclusive jurisdiction, without prejudice to any mandatory consumer protection rules of your country of residence that apply to you. For US-based clients, commercial engagements may specify US governing law in the signed proposal or agreement, and US consumer protection laws (including federal and state statutes) apply to consumers to the extent they cannot be waived.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              15. Changes to these Terms
            </h2>
            <p>
              We may update these Terms from time to time. The current version is always published on the Website with its effective date. Material changes affecting existing engagements will be notified to active clients by email.
            </p>
          </section>

          <div className="pt-8 border-t border-white/10 text-xs sm:text-sm text-warm-grey/70 leading-relaxed italic">
            This document is a template prepared for AK Enterprises and is not legal advice. It is designed to align with UK GDPR, PECR, the UK Consumer Rights Act, US CAN-SPAM, TCPA, CCPA/CPRA, and major US state privacy laws. Have a qualified lawyer in England and Wales (and, for US-facing terms, a US attorney) review it before publication.
          </div>

          <div className="pt-4 flex items-center gap-4 text-xs sm:text-sm font-mono">
            <Link href="/privacy" className="text-brand-gold hover:underline">
              View Privacy Policy &rarr;
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
