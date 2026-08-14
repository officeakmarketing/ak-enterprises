import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";

export default function BarbershopCaseStudy() {
  return (
    <section className="py-32 border-b border-muted-grey/30 relative">
      <ScrollReveal>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight font-serif italic text-white">
              £237,355. 7,208 bookings. 14 months. One barbershop.
            </h2>

            <div className="space-y-12">
              <div className="group">
                <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> Situation
                </h3>
                <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                  A high-volume Central London barbershop on pen and paper. Manual
                  booking. No follow-up. No automation. The owner answering the
                  phone, managing the diary, and chasing leads personally every
                  single day.
                </p>
              </div>

              <div className="group">
                <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> What Was Built
                </h3>
                <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                  A complete Business Operating System  automated booking, CRM
                  pipeline, instant follow-up sequences, Google Business Profile
                  optimisation, automated review generation, and a reporting
                  dashboard. Installed once. Running continuously.
                </p>
              </div>

              <div className="group">
                <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-5 flex items-center gap-2">
                  <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> Results
                </h3>
                <ul className="space-y-4 pl-8">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                    <div className="text-white text-lg"><span className="font-bold text-brand-gold text-2xl font-serif italic mr-2">£237,355</span> verified revenue</div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                    <div className="text-white text-lg"><span className="font-bold text-brand-gold text-2xl font-serif italic mr-2">7,208</span> automated bookings</div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                    <div className="text-white text-lg"><span className="font-bold text-brand-gold text-2xl font-serif italic mr-2">14 months</span> to result</div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                    <div className="text-warm-grey/90 text-lg">Zero manual booking required by the owner</div>
                  </li>
                </ul>
              </div>
            </div>

            <blockquote className="mt-12 bg-[#111112]/80 border border-brand-gold/20 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
              <p className="text-white italic text-lg leading-relaxed relative z-10">
                "Since launching the new site, people are booking nonstop. No more
                missed calls. It just works."
              </p>
              <footer className="text-sm mt-4 font-bold tracking-widest uppercase text-brand-gold relative z-10">
                Talib M, CEO, Bright Face Barber
              </footer>
            </blockquote>
          </div>

          <div className="flex-1">
            <div className="bg-[#111112]/80 w-full  flex flex-col items-center justify-center border border-muted-grey/30 rounded-3xl text-warm-grey p-2 shadow-2xl overflow-hidden group sticky top-32">
              <Image src="/bright-face-dashboard.png" alt="Revenue Dashboard" width={800} height={500} className="object-contain w-full h-auto rounded-xl shadow-inner group-hover:scale-[1.02] transition-transform duration-700" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
