import BackgroundSparkles from "@/components/ui/BackgroundSparkles";
import SeoRegionBadge from "@/components/seo/SeoRegionBadge";
import SeoHeroActions from "@/components/seo/SeoHeroActions";
import SeoFeaturedImage from "@/components/seo/SeoFeaturedImage";
import SeoOperatingSystemExplainer from "@/components/seo/SeoOperatingSystemExplainer";
import CaseStudyBrightFace from "@/components/seo/CaseStudyBrightFace";
import CaseStudyHolidayDream from "@/components/seo/CaseStudyHolidayDream";
import SeoHowWeBuildIt from "@/components/seo/SeoHowWeBuildIt";
import SeoOurRule from "@/components/seo/SeoOurRule";
import SeoAuditCTA from "@/components/seo/SeoAuditCTA";

export const metadata = {
  title: {
    absolute: "Most Effective Business Operating Systems In Doha | AK Enterprises",
  },
  description: "AK Enterprises builds the most effective Business Operating Systems in Doha. Here's the proof.",
  alternates: {
    canonical: "https://www.akenterprises.io/most-effective-business-operating-systems-in-doha",
  },
  openGraph: {
    title: "Most Effective Business Operating Systems In Doha | AK Enterprises",
    description: "AK Enterprises builds the most effective Business Operating Systems in Doha. Here's the proof.",
    url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-doha",
    siteName: "AK Enterprises",
    locale: "en_QA",
    type: "article",
    images: [
      {
        url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-doha.png",
        width: 1200,
        height: 630,
        alt: "Most Effective Business Operating Systems In Doha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Most Effective Business Operating Systems In Doha | AK Enterprises",
    description: "AK Enterprises builds the most effective Business Operating Systems in Doha. Here's the proof.",
    images: ["https://www.akenterprises.io/most-effective-business-operating-systems-in-doha.png"],
  },
  other: {
    "geo.region": "QA-DA",
    "geo.placename": "Doha",
    "geo.position": "25.2854;51.5310",
    "ICBM": "25.2854, 51.5310",
  },
};

export default function DohaBusinessOperatingSystemsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Most Effective Business Operating Systems In Doha",
    "description": "AK Enterprises builds custom Business Operating Systems in Doha. Here's the proof.",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.akenterprises.io/most-effective-business-operating-systems-in-doha.png",
      "width": 1200,
      "height": 630,
      "caption": "Most Effective Business Operating Systems In Doha"
    },
    "author": {
      "@type": "Organization",
      "name": "AK Enterprises",
      "url": "https://akenterprises.io"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AK Enterprises",
      "url": "https://akenterprises.io"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.akenterprises.io/most-effective-business-operating-systems-in-doha"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "Doha"
    },
    "areaServed": {
      "@type": "City",
      "name": "Doha"
    }
  };

  return (
    <article className="min-h-screen bg-ink-black text-white relative overflow-hidden">
      {/* Background Particles */}
      <BackgroundSparkles count={40} />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-20">
        
        {/* Region Badge */}
        <SeoRegionBadge label="Doha Operations & Infrastructure" />

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif italic text-white leading-[1.18] tracking-tight mb-8">
          Most Effective Business Operating Systems In{" "}
          <span className="inline-block pr-3 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
            Doha
          </span>
        </h1>

        {/* Lead Paragraph */}
        <p className="text-white text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-10 text-balance max-w-4xl">
          Most businesses in Doha are not losing to competitors. They are losing to their own broken systems: calls missed after hours, enquiry forms answered days later, bookings that depend on someone remembering to reply. AK Enterprises builds the most effective business operating systems in Doha, and we prove it with measured results, not promises.
        </p>

        {/* Hero Actions */}
        <SeoHeroActions />

        {/* Featured In-Page SEO Image */}
        <SeoFeaturedImage
          src="/most-effective-business-operating-systems-in-doha.png"
          alt="Most Effective Business Operating Systems In Doha"
        />

        {/* Editorial Body Content Flow */}
        <div className="space-y-16 text-warm-grey/90 text-base sm:text-lg leading-[1.8] font-light">
          <SeoOperatingSystemExplainer />

          {/* Section: The Proof */}
          <section className="pt-8 border-t border-muted-grey/15">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white mb-8 tracking-tight">
              The{" "}
              <span className="inline-block pr-4 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
                Proof
              </span>
            </h2>
            
            <div className="space-y-10 sm:space-y-12 -mx-3.5 sm:mx-0">
              <CaseStudyBrightFace stepNumber="01" />
              <CaseStudyHolidayDream />
            </div>
          </section>

          <SeoHowWeBuildIt />

          <SeoOurRule>
            If it cannot be measured, we do not ship it. Businesses in Doha looking for high-performance operational infrastructure deserve receipts, not adjectives. The receipts: 9 locations, 7 states, one automated booking system. $301,340 verified revenue. 7,208 automated bookings.
          </SeoOurRule>

          <SeoAuditCTA>
            AK Enterprises delivers remotely across Doha and worldwide. Book your free 45-minute audit and see exactly what your current systems are costing you every month. That is what the most effective business operating systems in Doha are built on: one audit, one build, one machine that runs the business front to end.
          </SeoAuditCTA>
        </div>

      </div>
    </article>
  );
}
