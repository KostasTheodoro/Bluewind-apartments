import Image from "next/image";
import Link from "next/link";

export default function RoomPage() {
  return (
    <section className="py-24 px-6 bg-neutral-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Image
            src="/images/sea-view-suite-hero.jpg"
            alt="Sea View Suite"
            width={1200}
            height={600}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
            priority
          />
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">Size</h3>
            <p className="mt-2 text-neutral-slate">45 m²</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">Max Occupancy</h3>
            <p className="mt-2 text-neutral-slate">4 Guests</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">View</h3>
            <p className="mt-2 text-neutral-slate">Sea View</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">
            Amenities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Image src="/icons/wifi.svg" alt="WiFi" width={40} height={40} />
              <p className="mt-2 text-neutral-slate text-sm">WiFi</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/ac.svg"
                alt="Air Conditioning"
                width={40}
                height={40}
              />
              <p className="mt-2 text-neutral-slate text-sm">A/C</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/kitchen.svg"
                alt="Kitchenette"
                width={40}
                height={40}
              />
              <p className="mt-2 text-neutral-slate text-sm">Kitchen</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/checkin.svg"
                alt="Check In"
                width={40}
                height={40}
              />
              <p className="mt-2 text-neutral-slate text-sm">Check In: 3PM</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/checkout.svg"
                alt="Check Out"
                width={40}
                height={40}
              />
              <p className="mt-2 text-neutral-slate text-sm">Check Out: 11AM</p>
            </div>
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
