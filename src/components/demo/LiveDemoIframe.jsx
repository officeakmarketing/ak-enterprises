import ScrollReveal from "@/components/ScrollReveal";
import AriaDemoWidget from "@/components/home/AriaDemoWidget";

export default function LiveDemoIframe() {
  return (
    <section className="w-full sm:w-full sm:static sm:-translate-x-0 sm:left-auto py-8 sm:py-16 md:py-24 border-b border-muted-grey/30">
      <ScrollReveal>
        <div className="w-full sm:border sm:border-brand-gold/30 sm:rounded-3xl min-h-[600px] flex flex-col items-center justify-center bg-transparent sm:bg-[#111112]/80 overflow-hidden sm:shadow-2xl relative">
          
          <div className="hidden sm:block absolute top-0 left-0 w-full h-1 bg-brand-gold/40"></div>

          <div className="w-full relative z-10 py-10 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,rgba(201,169,97,0.05),transparent_70%)]">
            <AriaDemoWidget />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
