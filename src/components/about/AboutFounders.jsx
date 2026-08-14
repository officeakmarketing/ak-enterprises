import Link from "next/link";

export default function AboutFounders() {
  return (
    <section className="py-24 text-center">
      <div className="flex flex-col md:flex-row justify-center gap-16 mb-24">
        <div className="bg-[#111112] p-8 rounded-lg border border-muted-grey w-full md:w-1/3 text-left">
          <div className="font-bold text-2xl mb-2 uppercase tracking-wider text-white">
            Antonios D. Gavrilas
          </div>
          <div className="text-brand-gold text-sm uppercase tracking-widest leading-relaxed">
            Founder and CEO.<br />
            AK Enterprises and AK Marketing Consulting Ltd.
          </div>
        </div>
        <div className="bg-[#111112] p-8 rounded-lg border border-muted-grey w-full md:w-1/3 text-left">
          <div className="font-bold text-2xl mb-2 uppercase tracking-wider text-white">
            Krisztian Jari
          </div>
          <div className="text-brand-gold text-sm uppercase tracking-widest leading-relaxed">
            Co-Founder.<br />
            AK Marketing Consulting Ltd.
          </div>
        </div>
      </div>

      <h2 className="text-4xl mb-12 font-serif italic">
        If you are a business owner, investor, or partner  let us talk.
      </h2>
      <Link
        href="/contact"
        className="inline-block bg-brand-gold text-ink-black px-12 py-5 rounded font-bold text-xl hover:bg-white transition"
      >
        Book a Free Business Audit
      </Link>
    </section>
  );
}
