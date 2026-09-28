import ScrollReveal from "@/components/ui/ScrollReveal";
import AriaDemoWidget from "@/components/home/AriaDemoWidget";

export default function LiveDemoIframe() {
  return (
    <section className="w-full py-8 sm:py-16 md:py-24 border-b border-muted-grey/30">
      <ScrollReveal>
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <AriaDemoWidget />
        </div>
      </ScrollReveal>
    </section>
  );
}
