import Link from "next/link";
import { notFound } from "next/navigation";
import RoomCarousel from "@/components/Carousel";
import { rooms } from "@/app/data/rooms";

export async function generateStaticParams() {
  console.log("Generating static paths for rooms...");
  console.log(rooms.map((room) => ({ roomID: room.id })));
  return rooms.map((room) => ({
    roomID: room.id,
  }));
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ roomID: string }>;
}) {
  const { roomID } = await params;

  const decodedRoomId = decodeURIComponent(roomID);

  const room = rooms.find((r) => r.id === decodedRoomId);

  if (!room) {
    return notFound();
  }

  return (
    <section className="py-24 px-6 bg-neutral-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-24">
          {room.name}
        </h1>
        <div className="mb-12">
          <RoomCarousel images={room.images} />
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">Size</h3>
            <p className="mt-2 text-neutral-slate">{room.size} m²</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">Max Occupancy</h3>
            <p className="mt-2 text-neutral-slate">
              {room.maxOccupancy} Guests
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">View</h3>
            <p className="mt-2 text-neutral-slate">{room.view}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">
            Amenities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            {room.amenities.map((amenity) => (
              <div key={amenity.name} className="flex flex-col items-center">
                <amenity.icon className="w-10 h-10 text-primary" />
                <p className="mt-2 text-neutral-slate text-sm">
                  {amenity.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-neutral-slate mb-6">
            Have questions or need more details about this room?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-neutral-white border-2 border-primary font-bold px-8 py-3 rounded-xl text-lg shadow-md hover:bg-primary-coral hover:text-primary hover:shadow-lg transition-transform duration-300 transform hover:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
