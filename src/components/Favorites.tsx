import Link from "next/link";
import Image from "next/image";
import {
  favorites1,
  favorites2,
  favorites3,
  favorites4,
  favorites5,
  favorites6,
} from "@/assets/images/favorites/indext";
const Favorites = () => {
  const favoriteImages = [
    { src: favorites1, alt: "Image 1" },
    { src: favorites2, alt: "Image 2" },
    { src: favorites3, alt: "Image 3" },
    { src: favorites4, alt: "Image 4" },
    { src: favorites5, alt: "Image 5" },
    { src: favorites6, alt: "Image 6" },
  ];
  return (
    <section className="py-16 bg-neutral-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-primary">
          A Glimpse of Our Spaces
        </h2>

        {/* Image Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                placeholder="blur"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
                priority={index < 2} // Prioritize the first two images for faster loading
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <Link
            href="/rooms"
            className="inline-block bg-primary text-neutral-white border-2 border-primary  font-bold px-8 py-3 rounded-xl text-lg shadow-md hover:bg-primary-coral hover:text-primary  hover:shadow-lg focus:ring-1 focus:ring-neutral-slate transition-transform duration-300 transform hover:scale-95"
          >
            EXPLORE OUR ROOMS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
