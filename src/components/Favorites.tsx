import Link from "next/link";
import Image from "next/image";

const Favorites = () => {
  const favoriteImages = [
    { src: "/images/MEN_5223-HDR.jpg", alt: "Image 1" },
    { src: "/images/MEN_5241-HDR.jpg", alt: "Image 2" },
    { src: "/images/MEN_5216.jpg", alt: "Image 3" },
    { src: "/images/MEN_4282.jpg", alt: "Image 4" },
    { src: "/images/MEN_4239.jpg", alt: "Image 5" },
    { src: "/images/MEN_4252.jpg", alt: "Image 6" },
  ]; // Replace these paths with your actual image paths

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900">
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
                width={400}
                height={300}
                className="w-full h-64 object-cover"
                priority={index < 2} // Prioritize the first two images for faster loading
              />
            </div>
          ))}
        </div>

        {/* Button to Rooms Page */}
        <div className="mt-8">
          <Link
            href="/rooms"
            className="inline-block bg-blue-500 text-white font-bold px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            Our Rooms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
