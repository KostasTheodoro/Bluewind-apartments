import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/app/data/rooms";
import ExternalLinks from "@/components/ExternalLinks";

export const metadata: Metadata = {
  title: "Rooms in Kissamos | Bluewind Apartments Crete",
  description:
    "Discover our modern seaside apartments in Kissamos, Crete. Each room offers comfort, style, and easy access to Falassarna, Elafonisi, and Balos.",
  openGraph: {
    title: "Rooms in Kissamos | Bluewind Apartments Crete",
    description:
      "Explore the rooms at Bluewind Apartments. Located in Kissamos near Crete’s top beaches — Falassarna, Elafonisi, and Balos.",
    url: "https://www.bluewindapts.com/rooms",
    siteName: "Bluewind Apartments",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooms at Bluewind Apartments, Crete",
    description:
      "Stay by the sea in Kissamos. Choose from a variety of fully equipped apartments near Crete’s west coast gems.",
  },
};

export async function generateStaticParams() {
  return rooms.map((room) => ({
    roomID: room.id,
  }));
}

export default function Rooms() {
  return (
    <section className="py-24 px-6 bg-neutral-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl text-primary font-bold text-center tracking-wide px-8 lg:mb-24">
          Seaside Apartments in Kissamos Crete
        </h1>
        <div className=" flex lg:hidden justify-center">
          <ExternalLinks />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-36">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={room.images[0].src}
                alt={room.images[0].alt}
                width={500}
                height={350}
                className="rounded-xl shadow-md object-cover w-full h-[300px]"
              />
              <h3 className="text-2xl font-bold text-primary mt-6">
                {room.name}
              </h3>
              <p className="mt-4 text-neutral-slate px-4">{room.description}</p>
              <Link
                href={`/rooms/${room.id}`}
                className="m-8 inline-block bg-primary text-neutral-white border-2 border-primary font-bold px-8 py-3 rounded-xl text-lg shadow-md hover:bg-primary-coral hover:text-primary hover:shadow-lg focus:ring-1 focus:ring-neutral-slate transition-transform duration-300 transform hover:scale-95"
              >
                More Info
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
