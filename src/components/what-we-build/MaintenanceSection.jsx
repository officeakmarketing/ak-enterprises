import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function MaintenanceSection() {
  return (
    <section className="py-32 relative">
      <ScrollReveal>
        <div className="bg-[#111112] border border-muted-grey/30 p-12 md:p-16 rounded-3xl text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-4xl md:text-6xl mb-8 font-serif italic text-white">
            We build it. We run it. You own it.
          </h2>
          <p className="text-warm-grey/90 text-lg leading-relaxed max-w-3xl mx-auto mb-12 font-light">
            Every system we build is maintained by us on an ongoing basis. These
            are our systems and our reputation is attached to how they perform.
            Monthly maintenance covers monitoring, updates, optimisations,
            integrations, and direct support. Minimum four months from go-live.
          </p>

          <div className="inline-block bg-[#1a1a1a] border border-brand-gold/20 p-6 rounded-xl mb-12 max-w-2xl text-left shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0 animate-pulse"></div>
              <p className="italic text-white/90 text-sm leading-relaxed">
                If we cannot find a single gap in your business during the audit, you
                owe us nothing. We have never left an audit empty-handed.
              </p>
            </div>
          </div>

          <div>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-12 py-5 rounded-lg font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-gold/20 text-lg"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></span>
              <span className="relative z-10">Book Your Free Audit</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
