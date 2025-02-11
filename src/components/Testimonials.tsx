import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const MAX_LENGTH = 250;

type Review = {
  name: string;
  reviewText: string;
  source: "airbnb" | "booking";
  rating: number;
};

const Testimonials = () => {
  const reviews: Review[] = [
    {
      name: "Milica",
      reviewText:
        "Everything was perfect. The host was so nice, he met us on time and gave us tips about the place and beaches. The location is so good for reaching local beaches and the popular ones such as Falassarna, Elafonissi, etc. Kissamos is a small city but has everything you need. We have made an excellent decision to stay here instead of Chania or Rethimno which are so crowded and difficult to find parking space. The apartment has everything you need, it is very roomy, there are two big balconies and lots of space for parking.",
      source: "booking",
      rating: 5,
    },
    {
      name: "Piotr",
      reviewText:
        "We came back to the same apartment that we had pleasure to stay in a few years ago, to be greeted with the same level of quality and cosiness again. The apartment was clean and had all the amenities we needed during our stay (including an iron and ironing board, provided by Giannis on our special request). It is a perfect choice if you plan to spend your vacation in Kissamos and explore the beauty of the western Crete - if you prefer to feel more like at home rather than at a hotel. Big thanks to Giannis for being so friendly, helpful, responsive and creating an opportunity to meet in person. I highly recommend the Bluewind Apartments in Kissamos.",
      source: "airbnb",
      rating: 5,
    },
    {
      name: "Bogdan",
      reviewText:
        "Bluewind is a great place to stay. It is near a great beach and a few local restaurants. The whole area is great for starting trips to Balos Beach and Elafonissi Beach. I really recommend this place for people that want a more relaxing experience.",
      source: "airbnb",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-neutral-sandy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center">
          What Our Visitors Have to Say
        </h2>
        <p className="mt-4 text-primary text-center">
          Hear from some of our happy guests who loved their stay.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

type TestimonialCardProps = {
  review: Review;
};

const TestimonialCard = ({ review }: TestimonialCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.reviewText.length > MAX_LENGTH;
  const displayedText =
    expanded || !isLong
      ? review.reviewText
      : `${review.reviewText.substring(0, MAX_LENGTH)}...`;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col h-full text-left">
      <div className="flex items-center mb-4">
        {Array(review.rating)
          .fill(null)
          .map((_, i) => (
            <FaStar key={i} size={24} className="text-yellow-500" />
          ))}
      </div>

      <p className="text-neutral-slate flex-grow">
        &quot;{displayedText}&quot;
        {isLong && !expanded && (
          <span
            className="text-primary cursor-pointer ml-1 font-bold"
            onClick={() => setExpanded(true)}
          >
            Read more
          </span>
        )}
      </p>

      <div className="mt-auto flex items-center space-x-2 pt-4">
        <p className="text-neutral-slate font-bold">{review.name}</p>
        <span className="text-neutral-slate px-2">from</span>
        <Image
          src={
            review.source === "airbnb"
              ? "/images/airbnblogo.svg"
              : "/images/Booking Logo.svg"
          }
          alt={review.source}
          width={40}
          height={24}
          className="h-6 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Testimonials;
