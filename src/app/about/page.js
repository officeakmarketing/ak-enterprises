import AboutHero from "@/components/about/AboutHero";
import AboutGroup from "@/components/about/AboutGroup";
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
      <CredibilitySection />
      <AboutCTA />
      <div className="w-full bg-ink-black py-16 sm:py-20 text-center px-4 border-b border-muted-grey/20">
        <p className="text-warm-grey/60 text-[10px] sm:text-xs font-mono tracking-widest uppercase font-bold">
          US operations managed by Christopher Strobach, Director of Sales, Wisconsin.
        </p>
      </div>
    </main>
  );
}
