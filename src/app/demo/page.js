import ConfiguratorClient from "@/components/demo/ConfiguratorClient";

// REQUIREMENT #7: noindex on demo routes
export const metadata = {
  title: "Demo Stand Configurator | AK Enterprises",
  description: "Exhibition stand live demo builder and QR generator.",
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

export default function DemoConfiguratorPage() {
  return <ConfiguratorClient />;
}

