import ScrollReveal from "@/components/ScrollReveal";

export default function LiveDemoIframe() {
  return (
    <section className="py-32 border-b border-muted-grey/30 relative">
      <ScrollReveal>
        <div className="border border-muted-grey/30 rounded-3xl min-h-[600px] flex flex-col items-center justify-center bg-[#111112]/80  overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold/10 via-brand-gold to-brand-gold/10"></div>

          {/* macOS window controls decoration */}
          <div className="w-full bg-[#1a1a1a] border-b border-muted-grey/30 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 px-3 py-1 bg-[#111112] rounded-md text-xs text-warm-grey/50 font-mono tracking-wider flex-1 text-center max-w-sm mx-auto">
              almass-estates-ai-engine.production
            </div>
          </div>

          <iframe
            src="https://getguaranteedrent.co.uk/"
            className="w-full h-[650px] border-none"
            title="Interactive Almass AI Lead Acquisition Demo"
            scrolling="no"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
