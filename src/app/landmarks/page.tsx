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
        <div className=" p-24 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-36">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <div className="relative w-1/2 h-96 ">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-lg"
                />
              </div>

              <div className="w-1/2">
                <h2 className="text-4xl font-semibold text-primary mb-12">
                  {destination.name}
                </h2>
                <div className="mt-2 text-neutral-slate text-lg">
                  {destination.description
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <div key={index}>
                        <p>{paragraph}</p>{" "}
                        {index <
                          destination.description.split("\n\n").length - 1 && (
                          <br />
                        )}{" "}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
