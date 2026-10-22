import { Arimo, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://akenterprises.io"),
  title: {
    default: "AK Enterprises | Business Operating Systems",
    template: "%s | AK Enterprises",
  },
  description: "AK Enterprises builds custom-built Business Operating Systems for service businesses across the UK, USA, and EU. We deploy infrastructures that capture leads, automate follow-ups, and run without the owner.",
  keywords: ["Business Operating Systems", "Automation", "CRM", "Lead Capture", "Business Infrastructure", "AK Enterprises"],
  authors: [{ name: "AK Enterprises" }],
  creator: "AK Enterprises",
  publisher: "AK Enterprises",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://akenterprises.io",
    title: "AK Enterprises | Business Operating Systems",
    description: "The complete infrastructure that captures every lead, follows up automatically, and runs without the owner.",
    siteName: "AK Enterprises",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image later
        width: 1200,
        height: 630,
        alt: "AK Enterprises - Business Operating Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Enterprises | Business Operating Systems",
    description: "The complete infrastructure that captures every lead, follows up automatically, and runs without the owner.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CalendlyWidget from "@/components/ui/CalendlyWidget";

// Code-split deferred client widgets to keep initial critical bundle minimal
const AriaWidget = dynamic(() => import("@/components/ui/AriaWidget"));
const CookieConsent = dynamic(() => import("@/components/ui/CookieConsent"));
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"));

// JSON-LD structured data for Agentic Browsing and SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AK Enterprises",
  url: "https://akenterprises.io",
  logo: "https://akenterprises.io/transparent-logo.png",
  description: "AK Enterprises builds custom-built Business Operating Systems for service businesses across the UK, USA, and EU.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://calendly.com/ak-enterprises/call",
    availableLanguage: "English",
  },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Romania" },
    { "@type": "Country", name: "Qatar" },
  ],
  serviceType: "Business Operating Systems",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${arimo.variable} ${sourceSerif4.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preload" as="image" href="/transparent-logo.png" type="image/png" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body 
        suppressHydrationWarning
        className="flex flex-col font-sans bg-ink-black text-white selection:bg-brand-gold selection:text-ink-black"
      >
        {/* Skip to main content link for keyboard/screen reader accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-brand-gold focus:text-ink-black focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold focus:uppercase focus:tracking-wider"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        <CookieConsent />
        <AriaWidget />
        <ScrollToTop />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M2Y7SW4D4B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-M2Y7SW4D4B');
          `}
        </Script>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        <CalendlyWidget />
      </body>
    </html>
  );
}
