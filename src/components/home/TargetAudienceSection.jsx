export default function TargetAudienceSection() {
  return (
    <section className="py-24 border-b border-muted-grey">
      <h2 className="text-4xl mb-12 text-center font-serif italic">
        This is not for everyone.
      </h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
        <div className="flex-1 bg-[#111112] border-t-4 border-brand-gold p-8">
          <h3 className="font-bold text-xl mb-4 text-white font-serif italic">
            The Right Fit
          </h3>
          <p className="text-warm-grey leading-relaxed">
            You run a service business generating consistent revenue. You are
            doing too much manually and you know it. You have tried ads, hired
            staff, or bought software  and the problem is still there. You are
            ready to fix the infrastructure, not add another tool.
          </p>
        </div>
        <div className="flex-1 bg-[#111112] border-t-4 border-red-900 p-8">
          <h3 className="font-bold text-xl mb-4 text-muted-grey font-serif italic">
            Not The Right Fit
          </h3>
          <p className="text-muted-grey leading-relaxed">
            You have just launched and have no revenue yet. You want ads only
            and are not interested in systems. You are looking for the cheapest
            option. You are not willing to commit to a minimum engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
