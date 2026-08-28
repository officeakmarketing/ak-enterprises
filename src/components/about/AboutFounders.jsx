import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutFounders() {
  return (
    <section className="py-16 sm:py-24 text-center">
      <ScrollReveal>

        {/* FOUNDERS CARDS */}
        <div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-10 lg:gap-16 mb-16 px-4 sm:px-0 max-w-5xl mx-auto">

          <div className="bg-[#111112]/90 p-8 sm:p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-brand-gold/30 transition-colors duration-500 w-full md:w-1/2 text-left shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/40 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="font-bold text-xl sm:text-2xl mb-3 uppercase tracking-wider text-white">
              Antonios D. Gavrilas
            </div>
            <div className="text-brand-gold text-xs sm:text-sm uppercase tracking-widest leading-relaxed">
              Founder and CEO.<br />
              AK Enterprises and AK Marketing Consulting Ltd.
            </div>
          </div>

          <div className="bg-[#111112]/90 p-8 sm:p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-brand-gold/30 transition-colors duration-500 w-full md:w-1/2 text-left shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold/40 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="font-bold text-xl sm:text-2xl mb-3 uppercase tracking-wider text-white">
              Krisztian Jari
            </div>
            <div className="text-brand-gold text-xs sm:text-sm uppercase tracking-widest leading-relaxed">
              Co-Founder.<br />
              AK Marketing Consulting Ltd.
            </div>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="mt-8 flex flex-col items-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-tight">
            If you are a business owner, investor, or partner  let us talk.
          </h2>

          <div className="flex justify-center w-full px-4 sm:px-0">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-bold uppercase tracking-widest overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md text-center w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none"></span>

              <span className="relative z-10 w-full text-xs sm:text-sm tracking-widest text-ink-black">
                Book a Free Audit
              </span>
            </Link>
          </div>

        </div>

      </ScrollReveal>
    </section>
  );
}
