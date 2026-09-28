import DemoHero from "@/components/demo/DemoHero";
import LiveDemoIframe from "@/components/demo/LiveDemoIframe";
import DemoIndustries from "@/components/demo/DemoIndustries";
import CTASection from "@/components/home/CTASection";

export default function Demo() {
  return (
    <main className="w-full">
      <DemoHero />
      <LiveDemoIframe />
      <DemoIndustries />
      <CTASection />
    </main>
  );
}
