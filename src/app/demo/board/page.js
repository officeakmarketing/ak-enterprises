import { Suspense } from "react";
import DemoBoardClient from "@/components/demo/DemoBoardClient";

export const metadata = {
  title: "Live Booking Stream Board | AK Enterprises",
  description: "Real-time demo booking board for exhibition stands.",
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

export default function DemoBoardPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070708] text-white p-8 font-mono text-xs">Loading live board...</div>}>
      <DemoBoardClient />
    </Suspense>
  );
}

