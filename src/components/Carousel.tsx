"use client";
import { useState } from "react";
import Image from "next/image";

export default function RoomCarousel({
  images,
}: {
  images: { src: string; alt?: string }[];
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] overflow-hidden">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt || "Room Image"}
            fill
            className={`rounded-xl object-contain absolute inset-0 transition-opacity duration-700 ease-in-out ${
              selectedIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-all"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-all"
        >
          &gt;
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`cursor-pointer border-2 rounded-md overflow-hidden transition-all ${
              selectedIndex === index ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt || "Thumbnail"}
              width={100}
              height={30}
              objectFit="contain"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
