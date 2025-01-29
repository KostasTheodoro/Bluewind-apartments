import Image from "next/image";

const destinations = [
  {
    name: "Chania City",
    image: "/images/Chania Old Port IMG.jpg",
    description:
      "The city of Chania was built on the ruins of an ancient city-state Kydonia that was founded by king Minos and used to be one of the three largest cities in Crete.Cafés, bars, cosmopolitan restaurants, shops with local products and many more are all located at the Venetian Harbor, lit by one of  the most famous lighthouses in the world. ",
  },
  {
    name: "Balos",
    image: "/images/Balos IMG.jpg",
    description:
      "The lagoon of Balos, with its beautiful water is a place of unique interest and beauty.Local plants and rare birds have found a sanctuary here.It is accesible only by car from the village of Kaliviani or by boat from Kastelli.",
  },
  {
    name: "Falassarna",
    image: "/images/Falassarna IMG.jpg",
    description:
      "A stunning beach with golden sand and crystal-clear waters, ideal for relaxation and water activities.",
  },
  {
    name: "Seitan Limania",
    image: "/images/Seitan Limania IMG_2.jpg",
    description:
      "A hidden gem with dramatic cliffs and turquoise waters, offering a secluded and adventurous swimming spot.",
  },
  {
    name: "Samaria Gorge",
    image: "/images/Samaria Gorge IMG.jpeg",
    description:
      "One of Europe's longest gorges, offering a breathtaking hiking experience through stunning landscapes and wildlife.",
  },
  {
    name: "Elafonisi",
    image: "/images/Elafonisi IMG.jpg",
    description:
      "Known for its pink sand and shallow turquoise waters, Elafonisi is one of Crete’s most famous and picturesque beaches.",
  },
];

export default function Landmarks() {
  return (
    <section className=" bg-neutral-white">
      <div>
        <h2 className="text-4xl font-bold text-center text-primary mb-12 pt-24">
          Crete&apos;s Hidden Gems
        </h2>

        {/* Top Image */}
        <div className="w-full mb-12 mx-auto max-w-5xl ">
          <div className="relative max-w-full">
            <Image
              src="/images/Crete Historical Map.png"
              alt="Map of Crete"
              layout="intrinsic"
              width={1000}
              height={500}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>

        {/* Grid Layout */}
        <div className=" p-24 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <div className="relative w-1/2 h-72 ">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-lg"
                />
              </div>

              <div className="w-1/2">
                <h3 className="text-xl font-semibold text-primary">
                  {destination.name}
                </h3>
                <p className="mt-2 text-neutral-slate">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
