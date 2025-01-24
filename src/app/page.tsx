"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-900">
      {/* Navbar Component */}
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

      {/* HeroSection Component */}
      <main className="relative isolate overflow-hidden pt-60">
        {" "}
        {/* Adjust pt-28 or higher if needed */}
        <HeroSection />
      </main>
    </div>
  );
}
