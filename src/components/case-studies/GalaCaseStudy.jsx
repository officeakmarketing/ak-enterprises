import Carousel from "@/components/Carousel";
import ScrollReveal from "@/components/ScrollReveal";

export default function GalaCaseStudy() {
  return (
    <section className="py-32 border-b border-muted-grey/30 relative">
      <ScrollReveal>
        <div className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 rounded-full text-brand-gold tracking-[0.2em] uppercase text-xs mb-8 font-bold ">
          Case Study  The London Awards
        </div>
        <h2 className="text-4xl md:text-6xl mb-16 font-serif italic text-white max-w-4xl leading-tight">
          2 million simultaneous users. One platform. Zero failures.
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-12">
            <div className="group">
              <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> Situation
              </h3>
              <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                An invitation-only luxury awards ceremony in London needed a complete
                digital platform managing organiser coordination, partner access,
                sponsor visibility, and guest experience  across one connected
                infrastructure.
              </p>
            </div>

            <div className="group">
              <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-brand-gold/50 group-hover:w-12 transition-all"></span> What Was Built
              </h3>
              <p className="text-warm-grey/90 leading-relaxed text-lg font-light pl-8 border-l border-brand-gold/20">
                Official digital platform for the event. Custom designed and
                deployed by AK Enterprises. Handling all digital touchpoints from
                invitation to post-event communication.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#111112] border border-muted-grey/30 p-10 rounded-2xl shadow-xl">
              <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-6">
                Results
              </h3>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                  <div className="text-white text-lg"><span className="font-bold text-brand-gold block text-2xl font-serif italic mb-1">2 million users at peak</span> handled without failure</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                  <div className="text-warm-grey/90 text-lg">Complete digital infrastructure for an invitation-only event</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-gold mt-2"></div>
                  <div className="text-warm-grey/90 text-lg">Used seamlessly by organisers, partners, sponsors, and guests</div>
                </li>
              </ul>

              <blockquote className="border-l-2 border-brand-gold/50 pl-6 py-2 text-white italic">
                "Extremely professional and highly effective. Very happy with the
                results."
                <footer className="text-brand-gold text-xs mt-3 not-italic uppercase tracking-widest font-bold">
                  Mario Paunica, Organiser
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="bg-[#111112]/80  border border-muted-grey/30 rounded-3xl p-8 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-gold/5 to-transparent -z-10"></div>
          <Carousel />
        </div>
      </ScrollReveal>
    </section>
  );
}
