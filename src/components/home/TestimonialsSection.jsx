import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TestimonialsSection() {
  const testimonials = [
    {
      headline: "£237,355 in verified revenue",
      name: "Talib M",
      company: "CEO, Bright Face Barber",
      quote:
        "Since launching the new site, people are booking nonstop. No more missed calls. It just works.",
      image: "/talib.jpg",
    },
    {
      headline: "Built our infrastructure",
      name: "Halima Shaker",
      company: "CEO, Kima Group",
      quote:
        "AK Marketing were attentive, thoughtful, and intentional in building our website. The guidance we received made a real difference.",
      image: "/kima.jpeg",
    },
    {
      headline: "2M Users • Technology Partner",
      name: "Mario Paunica",
      company: "Organizer, Grace & Power Gala",
      quote:
        "Extremely professional and highly effective. Very happy with the results.",
      image: "/mario.jpg",
    },
    {
      headline: "Faster than promised",
      name: "Alexandra",
      company: "Founder, Alla Nails & Beauty",
      quote:
        "They delivered exactly what I had in mind. The site was completed faster than promised.",
      image: "/alexandra.jpg",
    },
    {
      headline: "Perfectly captured the vision",
      name: "Raluca Uta",
      company: "CEO, Strategos Analytica",
      quote:
        "They perfectly captured the vision of the event and created a beautiful, user-friendly site that made ticket purchasing easy. Professional and incredibly talented.",
      image: "/raluca.jpg",
    },
    {
      headline: "Delivering real results",
      name: "Sebastian Pop",
      company: "Founder, Sebastian Pop Photography",
      quote:
        "Their professionalism and commitment to delivering real results truly stood out.",
      image: "/sebastian.jpg",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mx-auto mb-12 sm:mb-16">
            <div className="inline-block border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase font-bold">
              Testimonials
            </div>
          </div>
        </ScrollReveal>

        {/* 6-Card Testimonials Grid (Exact Hormozi Result-First Format) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.07}>
              <div className="bg-[#0e0e10]/95 border border-muted-grey/25 hover:border-brand-gold/50 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                {/* Top Subtle Gold Accent Line on Hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* 1. RESULT NUMBER / ROLE HEADLINE (Bold / High-Contrast) */}
                  <h3 className="text-xl sm:text-2xl font-serif italic font-bold text-brand-gold mb-1.5 leading-snug">
                    {t.headline}
                  </h3>

                  {/* 2. NAME AND COMPANY */}
                  <div className="text-xs sm:text-sm font-sans tracking-wide text-warm-grey/80 font-medium mb-4">
                    {t.name} ; {t.company}
                  </div>

                  {/* 3. THE QUOTE */}
                  <p className="text-white text-sm sm:text-base leading-relaxed font-light italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Bottom Avatar Lockup */}
                <div className="mt-6 pt-4 border-t border-muted-grey/15 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-gold/40 shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">
                      {t.name}
                    </div>
                    <div className="text-[10px] text-warm-grey/60">
                      {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
