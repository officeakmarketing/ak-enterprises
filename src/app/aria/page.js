import DemoHero from "@/components/demo/DemoHero";
import LiveDemoIframe from "@/components/demo/LiveDemoIframe";
import DemoIndustries from "@/components/demo/DemoIndustries";
import CTASection from "@/components/home/CTASection";

export default function Demo() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <DemoHero />
      <LiveDemoIframe />
      <DemoIndustries />
      <CTASection />
    </main>
  );
}
