import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="py-24 border-b border-muted-grey">
      <h2 className="text-4xl mb-12 font-serif italic">
        Trusted by service business owners.
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
          <Image src="/talib.jpg" alt="Talib M" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
          <div>
            <div className="font-bold text-xl mb-2 text-white">
              £237,355 in verified revenue
            </div>
            <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
              Talib M  CEO, Bright Face Barber
            </div>
            <p className="text-warm-grey italic">
              "Since launching the new site, people are booking nonstop. No more
              missed calls. It just works."
            </p>
          </div>
        </div>

        <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
          <Image src="/kima.jpeg" alt="Halima Shaker" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
          <div>
            <div className="font-bold text-xl mb-2 text-white">
              Built our infrastructure
            </div>
            <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
              Halima Shaker  CEO, Kima Group
            </div>
            <p className="text-warm-grey italic">
              "AK Marketing were attentive, thoughtful, and intentional in building our website. The guidance we received made a real difference."
            </p>
          </div>
        </div>

        <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
          <Image src="/mario.jpg" alt="Mario Paunica" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
          <div>
            <div className="font-bold text-xl mb-2 text-white">
              Official Technology Partner
            </div>
            <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
              Mario Paunica  Grace & Power Gala Organizer
            </div>
            <p className="text-warm-grey italic">
              "Extremely professional and highly effective. Very happy with the results."
            </p>
          </div>
        </div>

        <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
          <Image src="/alexandra.jpg" alt="Alexandra" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
          <div>
            <div className="font-bold text-xl mb-2 text-white">
              Faster than promised
            </div>
            <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
              Alexandra  Alla Nails & Beauty
            </div>
            <p className="text-warm-grey italic">
              "They delivered exactly what I had in mind. The site was completed faster than promised."
            </p>
          </div>
        </div>

        <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
          <Image src="/raluca.jpg" alt="Raluca Uta" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
          <div>
            <div className="font-bold text-xl mb-2 text-white">
              Perfectly captured the vision
            </div>
            <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
              Raluca Uta  CEO, Strategos Analytica
            </div>
            <p className="text-warm-grey italic">
              "They perfectly captured the vision of the event and created a beautiful, user-friendly site that made ticket purchasing easy. Professional and incredibly talented."
            </p>
          </div>
        </div>
        
        <div className="bg-[#111112] border border-muted-grey p-8 rounded-lg flex gap-4">
          <Image src="/sebastian.jpg" alt="Sebastian" width={60} height={60} className="rounded-full w-12 h-12 object-cover" />
          <div>
            <div className="font-bold text-xl mb-2 text-white">
              Delivering real results
            </div>
            <div className="text-brand-gold text-sm uppercase tracking-widest mb-4">
              Sebastian  Sebastian Pop Photography
            </div>
            <p className="text-warm-grey italic">
              "Their professionalism and commitment to delivering real results truly stood out."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
