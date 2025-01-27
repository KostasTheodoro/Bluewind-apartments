"use client";

import HeroSection from "@/components/Hero";

import Favorites from "@/components/Favorites";
import Testimonials from "@/components/Testimonials";

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
