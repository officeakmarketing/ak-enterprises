import ScrollReveal from "@/components/ScrollReveal";

export default function LiveDemoIframe() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 sm:w-full sm:static sm:-translate-x-0 sm:left-auto py-8 sm:py-16 md:py-24 border-b border-muted-grey/30">
      <ScrollReveal>
        <div className="w-full sm:border sm:border-brand-gold/30 sm:rounded-3xl min-h-[600px] flex flex-col items-center justify-center bg-transparent sm:bg-[#111112]/80 overflow-hidden sm:shadow-2xl relative">
          
          <div className="hidden sm:block absolute top-0 left-0 w-full h-1 bg-brand-gold/40"></div>

          <iframe
            src="https://getguaranteedrent.co.uk/"
            className="w-full h-[700px] border-none"
            title="Interactive Almass AI Lead Acquisition Demo"
            scrolling="no"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
