import BackgroundSparkles from "@/components/ui/BackgroundSparkles";
import UkInteractiveMap from "@/components/ui/UkInteractiveMap";
import SeoRegionBadge from "@/components/seo/SeoRegionBadge";
import SeoHeroActions from "@/components/seo/SeoHeroActions";
import SeoFeaturedImage from "@/components/seo/SeoFeaturedImage";
import SeoOperatingSystemExplainer from "@/components/seo/SeoOperatingSystemExplainer";
import CaseStudyBrightFace from "@/components/seo/CaseStudyBrightFace";
import CaseStudyGraceAndPower from "@/components/seo/CaseStudyGraceAndPower";
import SeoHowWeBuildIt from "@/components/seo/SeoHowWeBuildIt";
import SeoOurRule from "@/components/seo/SeoOurRule";
import SeoAuditCTA from "@/components/seo/SeoAuditCTA";

export const metadata = {
  title: {
    absolute: "Most Effective Business Operating Systems In London | AK Enterprises",
  },
  description: "AK Enterprises builds the most effective Business Operating Systems in London. Here's the proof.",
  alternates: {
    canonical: "https://www.akenterprises.io/most-effective-business-operating-systems-in-london",
  },
  openGraph: {
    title: "Most Effective Business Operating Systems In London | AK Enterprises",
    description: "AK Enterprises builds the most effective Business Operating Systems in London. Here's the proof.",
    url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-london",
    siteName: "AK Enterprises",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "https://www.akenterprises.io/most-effective-business-operating-systems-in-london.png",
        width: 1200,
        height: 630,
        alt: "Most Effective Business Operating Systems In London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Most Effective Business Operating Systems In London | AK Enterprises",
    description: "AK Enterprises builds the most effective Business Operating Systems in London. Here's the proof.",
    images: ["https://www.akenterprises.io/most-effective-business-operating-systems-in-london.png"],
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "London",
    "geo.position": "51.5074;-0.1278",
    "ICBM": "51.5074, -0.1278",
  },
};

export default function LondonBusinessOperatingSystemsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Most Effective Business Operating Systems In London",
    "description": "AK Enterprises builds custom Business Operating Systems in London. Here's the proof.",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.akenterprises.io/most-effective-business-operating-systems-in-london.png",
      "width": 1200,
      "height": 630,
      "caption": "Most Effective Business Operating Systems In London"
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
      "@id": "https://www.akenterprises.io/most-effective-business-operating-systems-in-london"
    },
    "contentLocation": {
      "@type": "Place",
      "name": "London",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.5074,
        "longitude": -0.1278
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "London"
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
        <SeoRegionBadge label="London Operations & Infrastructure" />

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif italic text-white leading-[1.18] tracking-tight mb-8">
          Most Effective Business Operating Systems In{" "}
          <span className="inline-block pr-3 pb-0.5 bg-gradient-to-r from-brand-gold via-[#F6E0A4] to-brand-gold bg-clip-text text-transparent">
            London
          </span>
        </h1>

        {/* Lead Paragraph */}
        <p className="text-white text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-10 text-balance max-w-4xl">
          London moves too fast for businesses running on pen, paper, or fragmented software. If you do not respond to high-value inquiries within three minutes, your competitors will. AK Enterprises builds the most effective business operating systems in London, delivering autonomous client capture, instant calendar bookings, and follow-ups that turn lost enquiries into measurable pipeline.
        </p>

        {/* Hero Actions */}
        <SeoHeroActions />

        {/* Featured In-Page SEO Image */}
        <SeoFeaturedImage
          src="/most-effective-business-operating-systems-in-london.png"
          alt="Most Effective Business Operating Systems In London"
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
              <CaseStudyGraceAndPower />
            </div>
          </section>

          <SeoHowWeBuildIt />

          <SeoOurRule>
            London service businesses looking for elite operational infrastructure deserve receipts, not adjectives. The receipts: 9 locations, 7 states, one automated booking system. $301,340 verified revenue. 7,208 automated bookings.
          </SeoOurRule>

          <SeoAuditCTA>
            AK Enterprises delivers remotely across London and worldwide. Book your free 45-minute audit and see exactly what your current systems are costing you every month. That is what the most effective business operating systems in London are built on: one audit, one build, one machine that runs the business front to end.
          </SeoAuditCTA>
        </div>

        {/* Interactive UK National Map Embed (Positioned before footer) */}
        <UkInteractiveMap />

      </div>
    </article>
  );
}
