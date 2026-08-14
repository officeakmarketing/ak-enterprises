export default function ContactHeader() {
  return (
    <div className="flex-1">
      <h1 className="text-5xl md:text-6xl mb-6 font-serif italic">
        Book your free business audit.
      </h1>
      <p className="text-warm-grey text-lg mb-8 leading-relaxed">
        20 minutes. We show you exactly what your business is missing and
        what it is costing you. The findings are yours regardless of
        whether we work together.
      </p>

      <div className="bg-[#111112] border-l-4 border-brand-gold p-6 mb-12">
        <p className="italic text-white">
          If we cannot find a single gap in your business that is costing
          you money, we will tell you honestly and you owe us nothing. We
          have never left an audit empty-handed.
        </p>
      </div>

      <div className="pt-12 border-t border-muted-grey mt-12">
        <h3 className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-4">
          Direct Contact
        </h3>
        <p className="text-white font-bold text-xl mb-2">
          office@akmarketing.agency
        </p>
        <p className="text-warm-grey">UK: +44 7931 537545</p>
      </div>
    </div>
  );
}
