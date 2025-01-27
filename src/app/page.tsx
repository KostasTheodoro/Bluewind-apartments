"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";
import Favorites from "@/components/Favorites";
import Testimonials from "@/components/Testimonials";

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
        <Favorites />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
