import type { Metadata } from "next";
import HeroSection from "@/components/Hero";

import Favorites from "@/components/Favorites";
import Testimonials from "@/components/Testimonials";
export const metadata: Metadata = {
  title: "Bluewind Apartments | Crete Seaside Rentals",
  description:
    "Relax in style at Bluewind Apartments in Kissamos, Crete. Modern seaside apartments with great access to Falassarna, Balos, and Elafonisi.",
  openGraph: {
    title: "Bluewind Apartments | Crete Seaside Rentals",
    description:
      "Stay just steps from the beach at Bluewind Apartments. Explore Crete’s famous west coast with comfort and convenience.",
    url: "https://www.bluewindapts.com",
    siteName: "Bluewind Apartments",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluewind Apartments | Crete Seaside Rentals",
    description:
      "Relax in modern apartments near Crete’s most stunning beaches.",
  },
};

export default function Home() {
  return (
    <div className="bg-gray-900">
      <main className="relative isolate overflow-hidden">
        {" "}
        <HeroSection />
        <Favorites />
        <Testimonials />
      </main>
    </div>
  );
}
