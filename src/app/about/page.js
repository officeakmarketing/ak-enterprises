import AboutHero from "@/components/about/AboutHero";
import AboutGroup from "@/components/about/AboutGroup";
import AboutArticles from "@/components/about/AboutArticles";
import CredibilitySection from "@/components/home/CredibilitySection";
import AboutFounders from "@/components/about/AboutFounders";
import USLeadership from "@/components/about/USLeadership";
import AboutCTA from "@/components/about/AboutCTA";

export default function About() {
  return (
    <main className="w-full">
      <AboutFounders />
      <USLeadership />
      <AboutGroup />
      <AboutHero />
      <AboutArticles />
      <CredibilitySection />
      <AboutCTA />
    </main>
  );
}
