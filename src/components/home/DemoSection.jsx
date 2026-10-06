import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Home, Scale, HeartPulse, Wrench, Factory, Briefcase } from "lucide-react";
import AriaDemoWidget from "@/components/home/AriaDemoWidget";

export default function DemoSection() {
  const industries = [
    { name: "Real Estate", Icon: Home },
    { name: "Legal", Icon: Scale },
    { name: "Healthcare", Icon: HeartPulse },
    { name: "Home Services", Icon: Wrench },
    { name: "Manufacturing", Icon: Factory },
    { name: "Consulting", Icon: Briefcase },
  ];

  return (
    <section className="w-full pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-serif italic text-white leading-[1.2]">
              This is a live system we built for a real client. Submit the details below and experience exactly what their prospects experience.
            </h2>
          </div>
        </ScrollReveal>

        {/* Direct Widget Presentation */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full flex justify-center mb-16 sm:mb-24">
            {/* Extremely soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] h-[80%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 w-full max-w-full flex justify-center">
              <AriaDemoWidget />
            </div>
          </div>
        </ScrollReveal>

        {/* Icon Strip & CTA */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-12 sm:gap-16">
            
            {/* 6 Icons side by side */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-12 w-full max-w-5xl mx-auto px-4">
              {industries.map((ind, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-muted-grey/20 bg-muted-grey/5 flex items-center justify-center text-warm-grey group-hover:text-brand-gold group-hover:border-brand-gold/40 transition-colors duration-300">
                    <ind.Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-warm-grey/70 text-center group-hover:text-white transition-colors duration-300">
                    {ind.name}
                  </span>
                </div>
              ))}
            </div>
            
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
