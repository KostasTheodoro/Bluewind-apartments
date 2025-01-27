export default function HeroSection() {
  return (
    <div className="relative bg-primary ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/Balos IMG.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-48 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-white sm:text-5xl lg:text-6xl">
            Welcome to Blue Wind Apartments
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-neutral-sandy mx-auto">
            Discover a tranquil escape on the beautiful island of Crete. Our
            premium apartments offer breathtaking views and unparalleled comfort
            for your vacation.
          </p>
          <div className="mt-16 flex justify-center gap-4">
            <a
              href="/about"
              className="inline-block rounded-xl border-4 border-primary bg-neutral-lightGray bg-opacity-40 px-5 py-3 text-xl font-extrabold text-primary
              hover:bg-primary-seafoam 
              focus:ring-2 focus:ring-primary  focus:outline-none 
              transition-all duration-300 ease-in-out transform hover:scale-95"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
