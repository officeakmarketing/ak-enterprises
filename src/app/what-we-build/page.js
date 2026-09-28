import WhatWeBuildHero from "@/components/what-we-build/WhatWeBuildHero";
import InfrastructureFeatures from "@/components/what-we-build/InfrastructureFeatures";
import MaintenanceSection from "@/components/what-we-build/MaintenanceSection";
import CTASection from "@/components/home/CTASection";

export default function WhatWeBuild() {
  return (
    <main className="w-full">
      <WhatWeBuildHero />
      <InfrastructureFeatures />
      <MaintenanceSection />
      <CTASection />
    </main>
  );
}
