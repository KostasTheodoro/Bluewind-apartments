import { FaStar } from "react-icons/fa";
import Image from "next/image";

const Testimonials = () => {
  const reviews = [
    {
      name: "Milica",
      review:
        "Everything was perfect. The host was so nice, he met us on time and gave us tips about the place and beaches.The location is so good for reaching local beaches and the popular ones such as Falassarna, Elafonissi, etc.Kissamos is a small city but has everything you need. We have made an excellent decision to stay here instead of Chania or Rethimno which are so crowded and difficult to find parking space.The apartment has everything you need, it is very roomy, there are two big balconies and lots of space for parking.",
      source: "booking",
      rating: 5,
    },
    {
      name: "Piotr",
      review:
        "We came back to the same apartment that we had pleasure to stay in a few years ago, to be greeted with the same level of quality and cosiness again. The apartment was clean and had all the amenities we needed during our stay (including an iron and ironing board, provided by Giannis on our special request). It is a perfect choice if you plan to spend your vacation in Kissamos and explore the beauty of the western Crete - if you prefer to feel more like at home rather than at a hotel.Big thanks to Giannis for being so friendly, helpful, responsive and creating an opportunity to meet in person.I highly recommend the Bluewind Apartments in Kissamos.",
      source: "airbnb",
      rating: 5,
    },
    {
      name: "Bogdan",
      review:
        "Bluewind is a great place to stay. Is near a great beach and a few local restaurants.The whole area is great for starting trips to Balos beach and Elafonissi beach.I really recomand this place for people that want a more relaxing experience.",
      source: "airbnb",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-neutral-sandy">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-primary">
          What Our Visitors Have to Say
        </h2>
        <p className="mt-4 text-primary">
          Hear from some of our happy guests who loved their stay.
        </p>

        {/* Reviews */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center"
            >
              {/* Review Text */}
              <p className="italic text-neutral-slate mb-4">
                &quot;{review.review}&quot;
              </p>

              {/* Name and Source */}
              <div className="flex items-center justify-center space-x-2 mb-2">
                <p className="text-neutral-slate font-bold">{review.name}</p>
                <span className="text-neutral-slate px-4">from</span>
                <Image
                  src={
                    review.source === "airbnb"
                      ? "/images/airbnblogo.svg"
                      : "/images/Booking Logo.svg"
                  }
                  alt={review.source}
                  width={40}
                  height={24}
                  className="inline"
                />
              </div>

              {/* Star Rating */}
              <div className="flex items-center mt-2">
                {Array(review.rating)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
