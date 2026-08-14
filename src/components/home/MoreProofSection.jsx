import Link from "next/link";
import Carousel from "@/components/Carousel";
import ScrollReveal from "@/components/ScrollReveal";

export default function MoreProofSection() {
  return (
    <section className="py-24 border-b border-muted-grey/30 relative">
      <ScrollReveal>
        <div className="bg-[#111112]/80 border border-muted-grey/30 p-8 md:p-12 lg:p-16 rounded-3xl flex flex-col lg:flex-row gap-12 lg:gap-16 relative items-center w-full">
          {/* Content (Left) */}
          <div className="flex-1 relative z-10 w-full">
            <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold text-xs tracking-widest uppercase mb-6 font-bold">
              Case Study: Luxury Events, London UK
            </div>

            <h2 className="text-4xl md:text-5xl mb-8 font-serif italic leading-tight text-white">
              2 million simultaneous users. One platform. Built and deployed by AK Enterprises.
            </h2>

            <p className="text-warm-grey/80 leading-relaxed text-lg font-light mb-8">
              The Grace and Power Gala is an invitation-only luxury awards ceremony in
              London. We designed and deployed the complete official digital platform
              handling organiser coordination, partner access, and guest experience
              across one connected infrastructure.
              <br /><br />
              At peak the platform handled 2 million simultaneous users without failure.
            </p>

            <blockquote className="border-l-2 border-brand-gold/50 pl-6 py-2 text-white italic relative mb-8">
              "Extremely professional and highly effective. Very happy with the
              results."
              <footer className="text-brand-gold text-sm mt-3 not-italic font-bold tracking-widest uppercase">
                Mario Paunica, Organiser, Grace and Power Gala
              </footer>
            </blockquote>

            <Link
              href="/case-studies"
              className="inline-block mt-2 text-brand-gold border-b border-brand-gold/30 pb-1 font-bold hover:text-white hover:border-white transition-all uppercase tracking-widest text-sm"
            >
              Read the full case study &rarr;
            </Link>
          </div>

          {/* Carousel (Right) */}
          <div className="flex-1 w-full max-w-full overflow-hidden">
            <div className="bg-[#111112] w-full border border-muted-grey/30 rounded-2xl shadow-2xl p-2 relative z-10">
              <Carousel />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
