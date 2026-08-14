import Link from "next/link";

export default function DemoSection() {
  return (
    <section className="py-24 border-b border-muted-grey">
      <div className="max-w-3xl mb-12">
        <div className="text-brand-gold text-sm tracking-widest uppercase mb-4 font-bold">
          Live Deployment
        </div>
        <h2 className="text-4xl mb-6 font-serif italic">
          This is not a demo. This is a live system we built for a real client.
        </h2>
        <div className="text-warm-grey leading-relaxed space-y-4">
          <p>
            A UK estate agency needed to automate landlord acquisition for their
            guaranteed rent programme. We built a system that captures property
            details, generates an instant AI-powered guaranteed rent offer using
            live market data, and routes every lead into the CRM automatically.
          </p>
          <p>
            No staff involvement. No manual input. Every lead captured,
            qualified, and followed up.
          </p>
          <p className="font-bold text-white">
            Try it. Submit the form below and see exactly what your prospect sees.
          </p>
        </div>
      </div>

      <div className="border border-muted-grey rounded-lg text-center mb-8 bg-[#111112] overflow-hidden relative">
        <iframe
          src="https://getguaranteedrent.co.uk/"
          className="w-full h-[600px] border-none overscroll-contain"
          title="Interactive Almass AI Lead Acquisition Demo"
        />
      </div>

      <p className="text-warm-grey mb-8">
        The same architecture adapts to any business that receives inbound
        enquiries.
        <br />
        Manufacturing. Legal. Healthcare. Home services. Real estate.
      </p>
      <Link
        href="/demo"
        className="inline-block bg-brand-gold text-ink-black px-8 py-4 rounded font-bold hover:bg-white transition"
      >
        See What We Would Build for Your Business
      </Link>
    </section>
  );
}
