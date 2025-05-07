import Image from "next/image";
export const metadata = {
  title: "Landmarks | Bluewind Apts",
  description: "View the spectacular landmarks close to our area.",
};
const destinations = [
  {
    name: "Chania City",
    image: "/images/Chania Old Port IMG.jpg",
    description:
      "The city of Chania was built on the ruins of an ancient city-state Kydonia that was founded by king Minos and used to be one of the three largest cities in Crete.\n\nCafés, bars, cosmopolitan restaurants, shops with local products and many more are all located at the Venetian Harbor, lit by one of  the most famous lighthouses in the world. ",
  },
  {
    name: "Balos",
    image: "/images/Balos IMG.jpg",
    description:
      "The lagoon of Balos, with its beautiful water is a place of unique interest and beauty.Local plants and rare birds have found a sanctuary here.\n\nIt is accesible only by car from the village of Kaliviani or by boat from Kastelli.",
  },
  {
    name: "Falassarna",
    image: "/images/Falassarna IMG.jpg",
    description:
      "It is one of the most popular beaches of western Crete with crystal-clear, teal waters painted with the colors of magical sunsets leaving impressed even the most demanding visitors.\n\nThe road stops at the beach and then a pathway continues till the ruins of the ancient town on top of the rocky hill.",
  },
  {
    name: "Samaria Gorge",
    image: "/images/Samaria Gorge IMG.jpeg",
    description:
      "It is the biggest and most impressive gorge in Europe.\n\n It spreads 18km starting in Xiloskalo and ending in Ag. Roumeli on the Libyan Sea",
  },
  {
    name: "Seitan Limania",
    image: "/images/Seitan Limania IMG_2.jpg",
    description:
      "Seitan Limania is a well-hidden corner of the northeast side of the Akrotiri peninsula, 20 km from the city of Chania.\n\nThere you will find a beach that differs from the other.\n\nNature created three inlets between the steep cliffs of the peninsula. In one of them is located the well-hidden beach.\n\nThe word 'Seitan' is Turkish apparently left over from the period of Turkish rule in Crete and is translated as Satan, devil. Furthermore, the word 'Limania' is a Greek word meaning harbors.",
  },

  {
    name: "Elafonisi",
    image: "/images/Elafonisi IMG.jpg",
    description:
      "The reknown beach is located at the Sourthren part of Chania, 5 klm away from the monastery of Chrysoskalitissa.\n\nThe lovely island which is connected with the shore by a narrow stip of sand is a unique destination.\n\nThe beach has a sivler-pink color, due to the thousand seashells which are scattered all around.\n\nAn isolated place ideal for excursions and camping.",
  },
];

export default function Landmarks() {
  return (
    <section className="bg-neutral-white pb-24">
      <div>
        <h1 className="text-5xl font-bold text-primary text-center tracking-wide py-24 px-8">
          Crete&apos;s Hidden Gems
        </h1>

        {/* Top Image */}
        <div className="w-full mb-12 mx-auto max-w-5xl px-4">
          <Image
            src="/images/Crete Historical Map.png"
            alt="Map of Crete"
            width={1000}
            height={500}
            className="rounded-xl object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Responsive Grid */}
        <div className="mx-auto max-w-[1600px] px-4 grid grid-cols-1 lg:grid-cols-2 gap-x-[10vw] gap-y-32">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="flex flex-col text-center items-center"
            >
              {/* Title */}
              <h2 className="text-3xl font-bold text-primary mb-6">
                {destination.name}
              </h2>

              {/* Image */}
              <div className="relative w-full h-72 sm:h-96 mb-6 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="text-neutral-slate text-base space-y-4 px-2 sm:px-4">
                {destination.description
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
