import AboutHero from "@/components/about/AboutHero";
import AboutGroup from "@/components/about/AboutGroup";
import AboutCredibility from "@/components/about/AboutCredibility";
import AboutFounders from "@/components/about/AboutFounders";

export default function About() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <AboutHero />
      <AboutGroup />
      <AboutCredibility />
      <AboutFounders />
    </main>
  );
}
