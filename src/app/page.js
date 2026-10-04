import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";

const PainSection = dynamic(() => import("@/components/home/PainSection"));
const ProofSection = dynamic(() => import("@/components/home/ProofSection"));
const SystemSection = dynamic(() => import("@/components/home/SystemSection"));
const NumbersSection = dynamic(() => import("@/components/home/NumbersSection"));
const DemoSection = dynamic(() => import("@/components/home/DemoSection"));
const MoreProofSection = dynamic(() => import("@/components/home/MoreProofSection"));
const HolidayDreamSection = dynamic(() => import("@/components/home/HolidayDreamSection"));
const CredibilitySection = dynamic(() => import("@/components/home/CredibilitySection"));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"));
const TrustGallerySection = dynamic(() => import("@/components/home/TrustGallerySection"));
const TargetAudienceSection = dynamic(() => import("@/components/home/TargetAudienceSection"));
const CTASection = dynamic(() => import("@/components/home/CTASection"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <TrustBar />
      <PainSection />
      <SystemSection />
      <ProofSection />
      <MoreProofSection />
      <HolidayDreamSection />
      <DemoSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <TrustGallerySection />
      <CredibilitySection />
      <NumbersSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
