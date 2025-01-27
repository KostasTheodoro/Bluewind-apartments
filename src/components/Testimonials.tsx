import { FaStar } from "react-icons/fa";
import Image from "next/image";

const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      review:
        "The apartment was clean, cozy, and perfectly located. Will definitely return!",
      source: "airbnb",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review:
        "Amazing experience! The view was breathtaking, and the service was outstanding.",
      source: "booking",
      rating: 4,
    },
    {
      name: "Emily Brown",
      review: "Absolutely loved the stay. Everything exceeded my expectations!",
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
                      ? "/images/Airbnb Logo.svg"
                      : "/images/Booking logo.svg"
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
