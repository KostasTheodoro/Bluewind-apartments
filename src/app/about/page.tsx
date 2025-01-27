import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function AboutUs() {
  return (
    <div className="bg-neutral-white">
      <Navbar />

      {/* Catchy Header Section */}
      <section className="relative bg-neutral-sandy text-center py-16">
        <h1 className="text-5xl font-bold text-primary tracking-wide">
          Discover Your Perfect Getaway
        </h1>
      </section>

      {/* Full-Width Image */}
      <div className="flex justify-center items-center w-full py-12">
        <Image
          src="/images/Cretan Sunset Artwork.png"
          alt="Blue Wind Apartments"
          width={800}
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
            src="/images/Summer BG_2.jpg"
            alt="Beautiful Crete"
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
              nature, come and find us where the... .
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

      {/* Final CTA Section */}
      <section className="text-center py-16 bg-neutral-white">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Your Perfect Escape Awaits
        </h2>
        <p className="text-lg text-neutral-slate mb-8">
          Book your stay today and experience the best Crete has to offer.
        </p>
        <a
          href="/rooms"
          className="inline-block bg-primary-seafoam text-white font-bold py-3 px-6 rounded-xl
          hover:bg-primary transition-all duration-300 ease-in-out"
        >
          Explore Our Rooms
        </a>
      </section>
      <Footer />
    </div>
  );
}
