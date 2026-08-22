import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ProofVarNeumorphic from "@/components/home/variations/ProofVarNeumorphic";
import MoreProofVarNeumorphic from "@/components/home/variations/MoreProofVarNeumorphic";
import ProofSection from "@/components/home/ProofSection";
import SystemSection from "@/components/home/SystemSection";
import NumbersSection from "@/components/home/NumbersSection";
import DemoSection from "@/components/home/DemoSection";
import MoreProofSection from "@/components/home/MoreProofSection";
import CredibilityVarNeumorphic from "@/components/home/variations/CredibilityVarNeumorphic";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TargetAudienceSection from "@/components/home/TargetAudienceSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import PainSectionFinal from "@/components/home/PainSectionFinal";
import PainSection from "@/components/home/PainSection";



export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />


      <TrustBar />
      {/* <PainSection /> */}
      <PainSectionFinal />
      {/* <ProofSection /> */}
      <ProofVarNeumorphic />

      <SystemSection />

      <NumbersSection />
      <DemoSection />
      {/* <MoreProofSection /> */}
      <MoreProofVarNeumorphic />
      <CredibilityVarNeumorphic />
      <TestimonialsSection />

      <TargetAudienceSection />

      <CTASection />

      <FAQSection />
    </main>
  );
}
