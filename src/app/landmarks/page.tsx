import Image from "next/image";

const destinations = [
  {
    name: "Chania City",
    image: "/images/Chania Old Port IMG.jpg",
    description:
      "The city of Chania was built on the ruins of an ancient city-state Kydonia that was founded by king Minos and used to be one of the three largest cities in Crete.Cafés, bars, cosmopolitan restaurants, shops with local products and many more are all located at the Venetian Harbor, lit by one of  the most famous lighthouses in the world. ",
  },
  {
    name: "Balos Beach",
    image: "/images/Balos IMG.jpg",
    description:
      "The lagoon of Balos, with its beautiful water is a place of unique interest and beauty.Local plants and rare birds have found a sanctuary here.It is accesible only by car from the village of Kaliviani or by boat from Kastelli.",
  },
  {
    name: "Falasarna Beach",
    image: "/images/Falassarna IMG.jpg",
    description:
      "A stunning beach with golden sand and crystal-clear waters, ideal for relaxation and water activities.",
  },
  {
    name: "Seitan Limani Beach",
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
    name: "Elafonisi Beach",
    image: "/images/Elafonisi IMG.jpg",
    description:
      "Known for its pink sand and shallow turquoise waters, Elafonisi is one of Crete’s most famous and picturesque beaches.",
  },
];

export default function Landmarks() {
  return (
    <section className="py-24 px-6 bg-neutral-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Crete&apos;s Hidden Gems
        </h2>
        <div className="w-full mb-12">
          <Image
            src="/images/Crete Historical Map.png"
            alt="Map of Crete"
            width={1200}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <Image
                src={destination.image}
                alt={destination.name}
                width={500}
                height={300}
                className="rounded-xl shadow-md object-cover h-72 w-full "
              />
              <div>
                <h3 className="text-2xl font-bold text-primary">
                  {destination.name}
                </h3>
                <p className="mt-4 text-neutral-slate">
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
