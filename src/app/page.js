import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import PainSection from "@/components/home/PainSection";
import ProofSection from "@/components/home/ProofSection";
import SystemSection from "@/components/home/SystemSection";
import NumbersSection from "@/components/home/NumbersSection";
import DemoSection from "@/components/home/DemoSection";
import MoreProofSection from "@/components/home/MoreProofSection";
import CredibilitySection from "@/components/home/CredibilitySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TargetAudienceSection from "@/components/home/TargetAudienceSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <main className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <HeroSection />
      <TrustBar />
      <PainSection />
      <ProofSection />
      <SystemSection />
      <NumbersSection />
      <DemoSection />
      <MoreProofSection />
      <CredibilitySection />
      <TestimonialsSection />
      <TargetAudienceSection />
      <CTASection />
      <FAQSection />
    </main>
  );
}
