import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | AK Enterprises",
  description: "Privacy Policy for AK Marketing Consulting Ltd, trading as AK Enterprises.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ink-black text-white pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Main Document Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight mb-3">
          Privacy <span className="italic text-brand-gold">Policy</span>
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
              1. Who we are and how to reach us
            </h2>
            <p>
              AK Marketing Consulting Ltd, trading as AK Enterprises, is the data controller for personal data collected through the Website and the Services. United States sales and support activities are managed by Christopher Strobach (Director of Sales, Wisconsin, USA) on our behalf. Privacy questions and requests:{" "}
              <a href="mailto:office@akmarketing.agency" className="text-brand-gold hover:underline">
                office@akmarketing.agency
              </a>
              , or by post to 29 Highland Drive, Bushey, Hertfordshire, WD23 4HH, United Kingdom.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              2. Personal data we collect
            </h2>
            <ul className="space-y-3 list-none pt-1">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold text-base leading-tight">•</span>
                <span>
                  <strong className="text-white font-medium">Website and enquiry data:</strong> name, email, phone number, business name, and details you submit through forms, the free-audit booking flow, or the Aria chat assistant.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold text-base leading-tight">•</span>
                <span>
                  <strong className="text-white font-medium">Booking data:</strong> name, email, phone, company, calendar selections, and notes provided through our scheduling tool (Calendly).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold text-base leading-tight">•</span>
                <span>
                  <strong className="text-white font-medium">Communications data:</strong> the content of emails, chat messages, and call notes when you contact us or respond to our outreach.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold text-base leading-tight">•</span>
                <span>
                  <strong className="text-white font-medium">Technical data:</strong> IP address, browser type, device type, pages visited, and referring pages, collected through cookies and similar technologies.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold text-base leading-tight">•</span>
                <span>
                  <strong className="text-white font-medium">Lead and prospect data:</strong> business contact details of company representatives sourced from publicly available business directories and used for business-to-business outreach.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold text-base leading-tight">•</span>
                <span>
                  <strong className="text-white font-medium">Client account data:</strong> credentials and access configurations for systems we operate on your behalf.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              3. How we use your data and our legal bases (UK GDPR)
            </h2>
            <p>
              We use personal data to: respond to enquiries and provide the Services (performance of a contract or steps at your request prior to a contract); send marketing and follow-up communications (consent, or legitimate interests for existing business-to-business relationships); assess and manage prospective business (legitimate interests); keep records and comply with legal obligations (legal obligation); protect our systems and detect misuse (legitimate interests). We do not carry out automated decision-making with legal or similarly significant effects about you; AI tools such as Aria produce estimates and guidance only, with human review available on request.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              4. Marketing communications (UK PECR and US CAN-SPAM / TCPA)
            </h2>
            <p>
              We send marketing messages only where permitted. For UK and EU contacts, business-to-business email marketing relies on legitimate interests and is only sent to corporate email addresses with an unsubscribe option. For US contacts, we comply with the CAN-SPAM Act: all commercial email includes our physical postal address and a functioning unsubscribe mechanism, honored within 10 business days. Where we send SMS, we only do so with prior express consent (including consent required by the US Telephone Consumer Protection Act and similar rules); you may opt out at any time by replying STOP. You can withdraw consent or unsubscribe at any time via{" "}
              <a href="mailto:office@akmarketing.agency" className="text-brand-gold hover:underline">
                office@akmarketing.agency
              </a>{" "}
              or the unsubscribe link in any message.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              5. Cookies and similar technologies
            </h2>
            <p>
              The Website uses cookies and similar technologies for essential operation, and, where consented, for analytics. You can control or delete cookies through your browser settings. Where required (for example in the UK and EU for non-essential cookies), analytics cookies are only set after you consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              6. Sharing and processors
            </h2>
            <p>
              We share personal data only with service providers who process it on our instructions: website hosting, scheduling (Calendly), email and file services (Google Workspace), our application platform (Base44), email and SMS delivery providers, and accounting tools. Each processor is bound by contractual data-protection terms. We do not sell or rent your personal data, and we do not share it for third-party advertising. We may disclose data where required by law or to protect our legal rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              7. International transfers
            </h2>
            <p>
              As a UK company serving clients in the UK, USA, and EU, personal data may be transferred to the United States (including our US sales operations) and to providers in other countries. Transfers outside the UK are made using the UK International Data Transfer Agreement or Addendum, UK adequacy regulations, or the applicable standard contractual clauses, with supplementary measures where needed.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              8. Retention
            </h2>
            <p>
              Enquiry and chat data is kept for up to 24 months from last activity. Booking and communications data is kept for the duration of the relationship plus 6 years, where needed for contract and legal claims. Marketing consent records are kept until withdrawal plus a short evidence period. Technical logs are kept up to 12 months. We delete or anonymize data earlier where no longer needed, unless law requires longer retention.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              9. Your rights (UK GDPR)
            </h2>
            <p>
              Wherever you are, you may ask to access, correct, delete, restrict, or object to the processing of your personal data, request portability of data provided to us, and withdraw consent at any time. To exercise any right, email{" "}
              <a href="mailto:office@akmarketing.agency" className="text-brand-gold hover:underline">
                office@akmarketing.agency
              </a>
              . UK and EU residents may also lodge a complaint with their supervisory authority; in the UK this is the Information Commissioner&apos;s Office (ico.org.uk).
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              10. Your US privacy rights
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white font-medium">California (CCPA/CPRA):</strong> California residents have the right to know, access, and delete personal information collected about them; to correct inaccurate personal information; to opt out of the sale or sharing of personal information (we do not sell or share personal information as defined by the CCPA); and to not receive discriminatory treatment for exercising these rights.
              </p>
              <p>
                <strong className="text-white font-medium">Other states:</strong> Residents of Virginia, Colorado, Connecticut, Utah, and Texas have comparable rights to access, correct, delete, and opt out of targeted advertising and sale of data under their state laws; Nevada residents may opt out of the sale of data per state law.
              </p>
              <p>
                <strong className="text-white font-medium">How to request:</strong> email{" "}
                <a href="mailto:office@akmarketing.agency" className="text-brand-gold hover:underline">
                  office@akmarketing.agency
                </a>{" "}
                from any address, describing your request. We verify requests reasonably (for example by matching the email address used with our records) and respond within the statutory timeframe (generally 45 days, extendable by 45 days). We do not knowingly process data of children under 16 for marketing, and we do not knowingly collect data from children under 13.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              11. Security
            </h2>
            <p>
              We use administrative, technical, and physical safeguards including access controls, encryption in transit, and least-privilege access to our platforms. No method of transmission is 100% secure, but we review our safeguards regularly. In the event of a personal data breach likely to result in risk to individuals, we will notify the ICO and affected individuals as required by UK GDPR and applicable US state breach-notification laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              12. Changes to this privacy policy
            </h2>
            <p>
              We may update this policy to reflect changes in our practices or the law. The current version is always published on the Website with its effective date, and material changes affecting clients will be notified by email.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-white mb-3">
              13. Contact
            </h2>
            <div className="space-y-1 text-sm leading-relaxed">
              <p className="text-white font-medium">AK Marketing Consulting Ltd, trading as AK Enterprises.</p>
              <p>
                Email:{" "}
                <a href="mailto:office@akmarketing.agency" className="text-brand-gold hover:underline">
                  office@akmarketing.agency
                </a>{" "}
                • Web:{" "}
                <a href="https://www.akenterprises.io" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
                  www.akenterprises.io
                </a>
              </p>
              <p>
                Registered office: 29 Highland Drive, Bushey, Hertfordshire, WD23 4HH, United Kingdom • Company no. 17128177
              </p>
              <p>US operations: Christopher Strobach, Director of Sales, Wisconsin, USA.</p>
            </div>
          </section>

          <div className="pt-8 border-t border-white/10 text-xs sm:text-sm text-warm-grey/70 leading-relaxed italic">
            This document is a template prepared for AK Enterprises and is not legal advice. It is designed to align with UK GDPR, PECR, the UK Consumer Rights Act, US CAN-SPAM, TCPA, CCPA/CPRA, and major US state privacy laws. Have a qualified lawyer in England and Wales (and, for US-facing terms, a US attorney) review it before publication.
          </div>

          <div className="pt-4 flex items-center gap-4 text-xs sm:text-sm font-mono">
            <Link href="/terms" className="text-brand-gold hover:underline">
              View Terms of Service &rarr;
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
