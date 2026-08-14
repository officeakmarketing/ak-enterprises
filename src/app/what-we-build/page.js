import WhatWeBuildHero from "@/components/what-we-build/WhatWeBuildHero";
import InfrastructureFeatures from "@/components/what-we-build/InfrastructureFeatures";
import MaintenanceSection from "@/components/what-we-build/MaintenanceSection";

export default function WhatWeBuild() {
  return (
    <main className="w-full max-w-[1536px] mx-auto px-0 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      <WhatWeBuildHero />
      <InfrastructureFeatures />
      <MaintenanceSection />
    </main>
  );
}
