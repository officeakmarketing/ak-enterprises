import Link from "next/link";
import ProofSection from "@/components/home/ProofSection";
import DemoSection from "@/components/home/DemoSection";

export const metadata = {
  title: "AK Enterprises | The Business Show London",
  description: "You just met us at The Business Show London. Here is what we actually do and what it looks like in your business.",
};

export default function BusinessShowPage() {
  return (
    <main className="w-full bg-ink-black min-h-screen flex flex-col items-center pt-20 pb-24">
      {/* Header Section */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-6 leading-tight">
          You just met us at The Business Show London.
        </h1>
        <p className="text-warm-grey/85 text-lg sm:text-xl font-light">
          Here is what we actually do and what it looks like in your business.
        </p>
      </div>

      {/* Case Study Block */}
      <div className="w-full border-t border-muted-grey/20">
        <ProofSection />
      </div>

      {/* Demo Section */}
      <div className="w-full">
        <DemoSection />
      </div>

      {/* Conversion CTA Block */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 mt-16 flex flex-col items-center text-center">
        <Link
          href="https://calendly.com/ak-enterprises/call" target="_blank" rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-8 py-5 rounded-lg text-sm font-bold uppercase tracking-widest overflow-hidden transition-transform duration-200 hover:scale-[1.02] shadow-xl w-full sm:w-auto mb-8"
        >
          <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
          <span className="relative z-10">Book a Free Business Audit</span>
        </Link>
        
        <p className="text-warm-grey/60 text-xs sm:text-sm italic max-w-xl mx-auto leading-relaxed border-l-2 border-brand-gold/30 pl-4 py-1 text-left">
          If we cannot find a single gap in your business that is costing you money, we will tell you honestly and you owe us nothing. We have never left an audit empty-handed.
        </p>
      </div>
    </main>
  );
}
