import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col items-center text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-tight">
            If you are a business owner, investor, or partner  let us talk.
          </h2>

          <div className="flex justify-center w-full sm:w-auto px-4 sm:px-0">
            <Link
              href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-6 sm:px-10 rounded-lg font-bold uppercase tracking-widest overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md text-center w-full sm:w-auto min-h-[56px]"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none"></span>

              <span className="relative z-10 w-full text-xs sm:text-sm tracking-widest text-ink-black">
                Book a Free Audit
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
