export default function HeroSection() {
  return (
    <div className="relative bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDEwNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjIxNzMyNzM5&ixlib=rb-1.2.1&q=80&w=1080')`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to Blue Wind Apartments
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300 mx-auto">
            Discover a tranquil escape on the beautiful island of Crete. Our
            premium apartments offer breathtaking views and unparalleled comfort
            for your vacation.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Book Your Stay
            </a>
            <a
              href="#"
              className="inline-block rounded-md border border-indigo-600 px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
