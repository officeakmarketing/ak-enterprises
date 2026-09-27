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
  title: "AK Enterprises | Business Operating Systems",
  description: "AK Enterprises builds Business Operating Systems for service businesses. The complete infrastructure that captures every lead, follows up automatically, and runs without the owner. UK. USA. EU.",
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
