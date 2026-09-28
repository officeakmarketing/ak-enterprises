import AboutHero from "@/components/about/AboutHero";
import AboutGroup from "@/components/about/AboutGroup";
import CredibilitySection from "@/components/home/CredibilitySection";
import AboutFounders from "@/components/about/AboutFounders";

export default function About() {
  return (
    <main className="w-full">
      <AboutHero />
      <AboutGroup />
      <CredibilitySection />
      <AboutFounders />
    </main>
  );
}
