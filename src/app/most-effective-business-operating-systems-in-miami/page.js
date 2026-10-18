import BackgroundSparkles from "@/components/ui/BackgroundSparkles";
import UsaInteractiveMap from "@/components/ui/UsaInteractiveMap";
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
    absolute: "Most Effective Business Operating Systems In Miami | AK Enterprises",
  },
  description: "AK Enterprises builds the most effective Business Operating Systems in Miami. Here's the proof.",
  alternates: {
    canonical: "https://www.akenterprises.io/most-effective-business-operating-systems-in-miami",
  },
  openGraph: {
    title: "Most Effective Business Operating Systems In Miami | AK Enterprises",
    description: "AK Enterprises builds the most effective Business Operating Systems in Miami. Here's the proof.",
    url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-miami",
    siteName: "AK Enterprises",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-miami.png",
        width: 1200,
        height: 630,
        alt: "Most Effective Business Operating Systems In Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Most Effective Business Operating Systems In Miami | AK Enterprises",
    description: "AK Enterprises builds the most effective Business Operating Systems in Miami. Here's the proof.",
    images: ["https://www.akenterprises.io/most-effective-business-operating-systems-in-miami.png"],
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Miami",
    "geo.position": "25.7617;-80.1918",
    "ICBM": "25.7617, -80.1918",
  },
};

export default function MiamiBusinessOperatingSystemsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Most Effective Business Operating Systems In Miami",
    "description": "AK Enterprises builds the most effective Business Operating Systems in Miami. Here's the proof.",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.akenterprises.io/most-effective-business-operating-systems-in-miami.png",
      "width": 1200,
      "height": 630,
      "caption": "Most Effective Business Operating Systems In Miami"
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
      "@id": "https://www.akenterprises.io/most-effective-business-operating-systems-in-miami"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "Miami",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.7617,
        "longitude": -80.1918
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Miami"
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
        <SeoRegionBadge label="Miami Operations & Infrastructure" />

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif italic text-white leading-[1.18] tracking-tight mb-8">
          Most Effective Business Operating Systems In{" "}
          <span className="inline-block pr-3 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
            Miami
          </span>
        </h1>

        {/* Lead Paragraph */}
        <p className="text-white text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-10 text-balance max-w-4xl">
          Miami is experiencing an unprecedented surge in service business capital, but growth stalls when operations depend on manual messaging and fragmented staff. AK Enterprises builds the most effective business operating systems in Miami, deploying unified systems that capture inquiries, automate scheduling, and drive verified revenue day and night.
        </p>

        {/* Hero Actions */}
        <SeoHeroActions />

        {/* Featured In-Page SEO Image */}
        <SeoFeaturedImage
          src="/most-effective-business-operating-systems-in-miami.png"
          alt="Most Effective Business Operating Systems In Miami"
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
            If it cannot be measured, we do not ship it. American service businesses looking for verified operational infrastructure deserve receipts, not adjectives. The receipts: 9 locations, 7 states, one automated booking system. $301,340 verified revenue. 7,208 automated bookings.
          </SeoOurRule>

          <SeoAuditCTA>
            AK Enterprises delivers remotely across Miami, Florida, and worldwide. Book your free 45-minute audit and see exactly what your current systems are costing you every month. That is what the most effective business operating systems in Miami are built on: one audit, one build, one machine that runs the business front to end.
          </SeoAuditCTA>
        </div>

        {/* Interactive USA National Map Embed (Positioned before footer) */}
        <UsaInteractiveMap />

      </div>
    </article>
  );
}
