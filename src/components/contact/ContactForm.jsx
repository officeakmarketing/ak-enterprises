export default function ContactForm() {
  return (
    <div className="flex-1 bg-[#111112] border border-muted-grey p-8 rounded-lg shadow-2xl">
      <form className="space-y-6">
        <div>
          <label className="block text-sm text-warm-grey uppercase tracking-widest mb-2 font-bold">
            Full Name
          </label>
          <input
            type="text"
            className="w-full bg-[#1a1a1a] border border-muted-grey rounded p-4 text-white focus:border-brand-gold outline-none transition"
          />
        </div>
        <div>
          <label className="block text-sm text-warm-grey uppercase tracking-widest mb-2 font-bold">
            Business Name
          </label>
          <input
            type="text"
            className="w-full bg-[#1a1a1a] border border-muted-grey rounded p-4 text-white focus:border-brand-gold outline-none transition"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-warm-grey uppercase tracking-widest mb-2 font-bold">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-[#1a1a1a] border border-muted-grey rounded p-4 text-white focus:border-brand-gold outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm text-warm-grey uppercase tracking-widest mb-2 font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full bg-[#1a1a1a] border border-muted-grey rounded p-4 text-white focus:border-brand-gold outline-none transition"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-warm-grey uppercase tracking-widest mb-2 font-bold">
              Country
            </label>
            <select className="w-full bg-[#1a1a1a] border border-muted-grey rounded p-4 text-white focus:border-brand-gold outline-none transition">
              <option>UK</option>
              <option>USA</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-warm-grey uppercase tracking-widest mb-2 font-bold">
              Industry / Business Type
            </label>
            <input
              type="text"
              className="w-full bg-[#1a1a1a] border border-muted-grey rounded p-4 text-white focus:border-brand-gold outline-none transition"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-warm-grey uppercase tracking-widest mb-2 font-bold">
            Monthly Revenue Range
          </label>
          <select className="w-full bg-[#1a1a1a] border border-muted-grey rounded p-4 text-white focus:border-brand-gold outline-none transition">
            <option>Under £3,000</option>
            <option>£3,000 to £10,000</option>
            <option>£10,000 to £50,000</option>
            <option>Over £50,000</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-warm-grey uppercase tracking-widest mb-2 font-bold">
            Biggest operational challenge right now
          </label>
          <textarea
            rows={3}
            className="w-full bg-[#1a1a1a] border border-muted-grey rounded p-4 text-white focus:border-brand-gold outline-none transition"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm text-warm-grey uppercase tracking-widest mb-2 font-bold">
            How did you hear about AK Enterprises?
          </label>
          <select className="w-full bg-[#1a1a1a] border border-muted-grey rounded p-4 text-white focus:border-brand-gold outline-none transition">
            <option>Please select...</option>
            <option>Social Media</option>
            <option>Referral</option>
            <option>Event</option>
            <option>Search</option>
          </select>
        </div>

        <div className="mt-8">
          <button
            type="button"
            className="w-full bg-brand-gold text-ink-black py-5 rounded font-bold text-xl hover:bg-white transition shadow-lg"
          >
            Book My Free Audit
          </button>
          <p className="text-center text-xs text-brand-gold uppercase tracking-widest mt-6 font-bold">
            We take on a maximum of 4 new clients per month. Current
            availability: [X] slots. We confirm within 24 hours.
          </p>
        </div>
      </form>
    </div>
  );
}
