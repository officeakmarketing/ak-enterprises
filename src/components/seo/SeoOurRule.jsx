export default function SeoOurRule({ children }) {
  return (
    <section className="pt-8 border-t border-muted-grey/15">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white mb-6 tracking-tight">
        Our{" "}
        <span className="inline-block pr-3 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
          Rule
        </span>
      </h2>
      <p className="max-w-4xl">
        If it cannot be measured, we do not ship it. {children}
      </p>
    </section>
  );
}
