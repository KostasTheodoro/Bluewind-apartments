import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    name: "Apartment A",
    image: "/images/MEN_5228.jpg",
    description:
      "A luxurious suite with breathtaking sea views and modern amenities.",
    link: "/rooms/apartment-a",
  },
  {
    name: "Apartment D",
    image: "/images/MEN_4252.jpg",
    description:
      "A cozy room surrounded by lush gardens, perfect for relaxation.",
    link: "/rooms/apartment-d",
  },
  {
    name: "Studio B",
    image: "/images/MEN_5216.jpg",
    description:
      "A stylish and spacious studio ideal for couples and solo travelers.",
    link: "/rooms/studio-b",
  },
  {
    name: "Studio C",
    image: "/images/MEN_4273.jpg",
    description:
      "A comfortable and spacious apartment perfect for families or groups.",
    link: "/rooms/studio-c",
  },
];

export default function Rooms() {
  return (
    <section className="py-24 px-6 bg-neutral-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Our Rooms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={room.image}
                alt={room.name}
                width={500}
                height={350}
                className="rounded-xl shadow-md object-cover w-full h-[300px]"
              />
              <h3 className="text-2xl font-bold text-primary mt-6">
                {room.name}
              </h3>
              <p className="mt-4 text-neutral-slate px-4">{room.description}</p>
              <Link
                href={room.link}
                className="mt-6 inline-block bg-primary text-neutral-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary-coral transition-transform transform hover:scale-95"
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
