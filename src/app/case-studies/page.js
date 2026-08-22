import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import BarbershopCaseStudy from "@/components/case-studies/BarbershopCaseStudy";
import GalaCaseStudy from "@/components/case-studies/GalaCaseStudy";
import AriaCaseStudy from "@/components/case-studies/AriaCaseStudy";

export default function CaseStudies() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <CaseStudiesHero />
      <BarbershopCaseStudy />
      <GalaCaseStudy />
      <AriaCaseStudy />
    </main>
  );
}
