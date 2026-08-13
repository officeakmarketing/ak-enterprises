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
  description: "AK Enterprises builds Business Operating Systems for service businesses — the complete infrastructure that captures every lead, follows up automatically, and runs without the owner.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${arimo.variable} ${sourceSerif4.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-ink-black text-white selection:bg-brand-gold selection:text-ink-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
