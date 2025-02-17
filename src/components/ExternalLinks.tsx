import Image from "next/image";
import Link from "next/link";

const ExternalLinks = () => {
  return (
    <div className="flex justify-end py-12 items-center">
      {/* Booking Button */}
      <div className="p-4">
        <Link
          href="https://www.booking.com/hotel/gr/bluewind-apartments-near-the-sea"
          target="_blank"
          className="group flex items-center border-2 border-primary bg-neutral-white text-primary rounded-xl px-3 py-3 text-xl font-medium
          hover:border-4 hover:font-bold hover:bg-neutral-lightGray hover:border-primary-coral hover:scale-95 hover:transition-all hover:ease-in-out
          focus:outline-none focus:ring-0 focus:ring-primary-coral focus:ring-opacity-50 focus:ring-offset-2 transition-all duration-300 ease-in-out"
        >
          BOOK NOW
          <div className="transition-transform duration-500 ease-in-out group-hover:scale-75">
            <Image
              src="/images/Booking Logo.svg"
              alt="booking logo"
              width={40}
              height={20}
              className="ml-4"
            />
          </div>
        </Link>
      </div>
      {/* Separator Line */}
      <div className="border-l-2 border-primary h-32 p-4"></div>
      {/* Airbnb Links */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4">
          <Link
            href="https://www.airbnb.gr/rooms/42484053?source_impression_id=p3_1737825240_P3C4R2jrZDklesW-"
            target="_blank"
            className="group flex items-center border-2 border-primary bg-neutral-white text-primary rounded-xl px-3 py-3 text-xl font-medium
              hover:border-4 hover:border-primary-coral hover:text-primary hover:font-bold hover:bg-neutral-lightGray hover:scale-95 hover:transition-all hover:ease-in-out
              focus:outline-none focus:ring-0 focus:ring-primary-coral focus:ring-opacity-50 focus:ring-offset-2 transition-all duration-300 ease-in-out"
          >
            APARTMENT A
            <div className="transition-transform duration-500 ease-in-out group-hover:scale-75">
              <Image
                src="/images/airbnblogo.svg"
                alt="airbnb logo"
                width={70}
                height={40}
                className="ml-4"
              />
            </div>
          </Link>
          <Link
            href="https://www.airbnb.gr/rooms/42777596?_set_bev_on_new_domain=1621165347_ZTVkMDM5YzZlMTU3&source_impression_id=p3_1621170584_CcF%2Fa1X3vFl2ID62&guests=1&adults=1"
            target="_blank"
            className="group flex items-center border-2 border-primary bg-neutral-white text-primary rounded-xl px-3 py-3 text-xl font-medium
              hover:border-4 hover:border-primary-coral hover:text-primary hover:font-bold hover:bg-neutral-lightGray hover:scale-95 hover:transition-all hover:ease-in-out
              focus:outline-none focus:ring-0 focus:ring-primary-coral focus:ring-opacity-50 focus:ring-offset-2 transition-all duration-300 ease-in-out"
          >
            APARTMENT D
            <div className="transition-transform duration-500 ease-in-out group-hover:scale-75">
              <Image
                src="/images/airbnblogo.svg"
                alt="airbnb logo"
                width={70}
                height={40}
                className="ml-4"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="https://www.airbnb.gr/rooms/42659201?source_impression_id=p3_1737825305_P39x8L5HZgonR4Kn"
            target="_blank"
            className="group flex items-center border-2 border-primary bg-neutral-white text-primary rounded-xl px-3 py-3 text-xl font-medium
              hover:border-4 hover:border-primary-coral hover:text-primary hover:font-bold hover:bg-neutral-lightGray hover:scale-95 hover:transition-all hover:ease-in-out
              focus:outline-none focus:ring-0 focus:ring-primary-coral focus:ring-opacity-50 focus:ring-offset-2 transition-all duration-300 ease-in-out"
          >
            <span className="flex-grow text-center">STUDIO B</span>
            <div className="transition-transform duration-500 ease-in-out group-hover:scale-75">
              <Image
                src="/images/airbnblogo.svg"
                alt="airbnb logo"
                width={70}
                height={40}
                className="ml-4"
              />
            </div>
          </Link>
          <Link
            href="https://www.airbnb.com.mt/rooms/42776701?source_impression_id=p3_1737825333_P3zpllITeIVmLpa3"
            target="_blank"
            className="group flex items-center border-2 border-primary bg-neutral-white text-primary rounded-xl px-3 py-3 text-xl font-medium
              hover:border-4 hover:border-primary-coral hover:text-primary hover:font-bold hover:bg-neutral-lightGray hover:scale-95 hover:transition-all hover:ease-in-out
              focus:outline-none focus:ring-0 focus:ring-primary-coral focus:ring-opacity-50 focus:ring-offset-2 transition-all duration-300 ease-in-out"
          >
            <span className="flex-grow text-center">STUDIO C</span>
            <div className="transition-transform duration-500 ease-in-out group-hover:scale-75">
              <Image
                src="/images/airbnblogo.svg"
                alt="airbnb logo"
                width={70}
                height={40}
                className="ml-4"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinks;
