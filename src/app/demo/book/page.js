import DemoBookingFlow from "@/components/demo/DemoBookingFlow";
import { decodeDemoParams } from "@/lib/demoConfig";

// REQUIREMENT #7: noindex on every demo route
export const metadata = {
  title: "Live Booking Prototype | Interactive Demo",
  description: "Interactive booking system prototype powered by AK Enterprises.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default async function DemoBookPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const urlParams = new URLSearchParams(resolvedParams);
  const config = decodeDemoParams(urlParams);

  return <DemoBookingFlow config={config} standalone={true} />;
}

