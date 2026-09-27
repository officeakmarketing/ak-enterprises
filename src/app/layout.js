import { Arimo, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://akenterprises.io"),
  title: {
    default: "AK Enterprises | Business Operating Systems",
    template: "%s | AK Enterprises",
  },
  description: "AK Enterprises builds bespoke Business Operating Systems for service businesses across the UK, USA, and EU. We deploy infrastructures that capture leads, automate follow-ups, and run without the owner.",
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

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CookieConsent from "@/components/ui/CookieConsent";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${arimo.variable} ${sourceSerif4.variable} antialiased`}
    >
      <body className="flex flex-col font-sans bg-ink-black text-white selection:bg-brand-gold selection:text-ink-black">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
