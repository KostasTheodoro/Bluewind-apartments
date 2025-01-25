export default function HeroSection() {
  return (
    <div className="relative bg-gray-900 ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/Balos IMG.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-48 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to Blue Wind Apartments
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300 mx-auto">
            Discover a tranquil escape on the beautiful island of Crete. Our
            premium apartments offer breathtaking views and unparalleled comfort
            for your vacation.
          </p>
          <div className="mt-16 flex justify-center gap-4">
            <a
              href="#"
              className="inline-block rounded-xl border-4 border-primary bg-neutral-gray bg-opacity-50 px-5 py-3 text-xl font-extrabold text-primary 
      hover:bg-blue-500  transition-colors duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
