"use client";

import HeroSection from "@/components/Hero";

import Favorites from "@/components/Favorites";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-gray-900">
      {/* HeroSection Component */}
      <main className="relative isolate overflow-hidden">
        {" "}
        {/* Adjust pt-28 or higher if needed */}
        <HeroSection />
        <Favorites />
        <Testimonials />
      </main>
    </div>
  );
}
