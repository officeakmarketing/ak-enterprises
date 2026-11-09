"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AriaWidget from "@/components/ui/AriaWidget";
import CookieConsent from "@/components/ui/CookieConsent";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isDemoPage = pathname?.startsWith("/demo");

  // In demo mode (/demo and /demo/book), suppress main site Navbar, Footer, Cookie Banner, and Chatbot
  // so there is no duplicate logo, no site chrome, and the demo looks 100% like a standalone app
  if (isDemoPage) {
    return <main id="main-content" className="flex-1 w-full">{children}</main>;
  }

  return (
    <>
      <SmoothScroll>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </SmoothScroll>
      <CookieConsent />
      <AriaWidget />
      <ScrollToTop />
    </>
  );
}
