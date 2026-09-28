import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import BarbershopCaseStudy from "@/components/case-studies/BarbershopCaseStudy";
import GalaCaseStudy from "@/components/case-studies/GalaCaseStudy";
import HolidayDreamSection from "@/components/home/HolidayDreamSection";
import AriaCaseStudy from "@/components/case-studies/AriaCaseStudy";
import CTASection from "@/components/home/CTASection";

export default function CaseStudies() {
  return (
    <main className="w-full">
      <CaseStudiesHero />
      <BarbershopCaseStudy />
      <GalaCaseStudy />
      <HolidayDreamSection />
      <AriaCaseStudy />
      <CTASection />
    </main>
  );
}
