import Image from "next/image";
import Link from "next/link";
import arrow1 from "@/assets/images/about/arrow1jpg.jpg";
import arrow2 from "@/assets/images/about/arrow2.jpg";
import exterior from "@/assets/images/about/Exterior.jpg";
import artwork from "@/assets/images/about/Artwork.png";
import aboutImage from "@/assets/images/about/about-image.jpg";
export const metadata = {
  title: "About | Bluewind Apts",
  description: "Learn more about Bluewind Apartments and our story.",
};
export default function AboutUs() {
  return (
    <div className="bg-neutral-white">
      <section className="relative py-16">
        <div className="text-primary py-6 px-8 sm:px-16 mx-auto max-w-4xl rounded-3xl">
          <h1 className="text-5xl font-bold text-center tracking-wide">
            Discover Your Perfect Getaway
          </h1>
        </div>
      </section>

      <div className="flex justify-center items-center w-full py-8">
        <Image
          src={artwork}
          alt="Blue Wind Apartments"
          width={1000}
          height={300}
          className="items-center"
          priority
        />
      </div>

      {/* Half-and-Half Storytelling Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[80vh] w-full">
        {/* Left Image */}
        <div className="relative">
          <Image
            src={aboutImage}
            alt="Beautiful Crete"
            placeholder="blur"
            fill
            className="object-cover h-full w-full"
          />
        </div>
        {/* Right Text with Background */}
        <div className="bg-neutral-sandy text-neutral-white p-12 flex flex-col justify-between">
          {/* Header at the top */}
          <div className="p-8">
            <h2 className="text-5xl font-bold text-center text-primary mb-6">
              Set sails...
            </h2>
          </div>
          {/* Centered Paragraphs */}
          <div className="flex flex-col items-center justify-center text-center text-neutral-slate max-w-md mx-auto space-y-6">
            <p className="text-lg">
              <span className="font-bold text-primary">
                {" "}
                &quot;As I grew up
              </span>
              , every summer crossing with my bicycle the golden beaches of this
              magic island, losing my sight to the endless blue and the warm air
              touching my skin, surrounded by the smells of the local fish
              taverns, I was pulled more and more deeply into this land, known
              to others as the Cretan Paradise.&quot;
            </p>
            <p className="text-lg">
              <span className="font-bold text-primary">
                &quot;Then I realized
              </span>{" "}
              that I should establish a permanent connection to what offers me
              what huge, combusted cities cannot: fresh air, peacefulness,
              escapism, FREEDOM.&quot;
            </p>
            <p className="text-lg">
              <span className="font-bold text-primary">&quot;After years</span>,
              I managed to build a homeplace for those who wish to experience an
              unforgettable summer: crystal-clear seawater reflecting the colors
              of glorious sunsets and the Mediterranean cuisine all mixed
              together perfectly!&quot;
            </p>
            <p className="text-lg">
              <span className="font-bold text-primary">
                &quot;These apartments
              </span>{" "}
              are located 200m from the sea, a bay like nothing you have seen
              before, called Kissamos Bay. From there, you can explore the whole
              area. If you love exploration and want to witness the same
              emotions as I do every year, succumbing to the greatness of
              nature, come and find us where the...
            </p>{" "}
            <div className="font-bold text-2xl pt-4 text-primary">
              Sunset meets the Sea!&quot;{" "}
            </div>{" "}
          </div>
          {/* Crete Image */}
          <div className="flex justify-center mt-8">
            <Image
              src="/images/Crete Vector.png"
              alt="Crete Map"
              width={300}
              height={150}
            />
          </div>
        </div>
      </section>

      {/* CTA Section with Images */}
      <section className="text-center py-16 bg-neutral-white">
        {/* Header */}
        <h2 className="text-3xl font-bold text-primary mb-4">
          Your Perfect Escape Awaits
        </h2>

        {/* Images of Apartments outside*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="flex justify-center items-center">
            <Image
              src={arrow1}
              alt="View from Apartment"
              placeholder="blur"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={arrow2}
              alt="Apartment Exterior"
              placeholder="blur"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={exterior}
              alt="Apartment Exterior"
              placeholder="blur"
              width={400}
              height={200}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* CTA Button */}
        <p className="text-xl italic text-primary my-20">
          Book your stay today and experience the best Crete has to offer!
        </p>

        <div className="mt-16">
          <Link
            href="/rooms"
            className="inline-block bg-primary text-neutral-white border-2 border-primary  font-bold px-8 py-3 rounded-xl text-lg shadow-md hover:bg-primary-coral hover:text-primary  hover:shadow-lg focus:ring-1 focus:ring-neutral-slate transition-transform duration-300 transform hover:scale-95"
          >
            EXPLORE OUR ROOMS
          </Link>
        </div>
      </section>
    </div>
  );
}
