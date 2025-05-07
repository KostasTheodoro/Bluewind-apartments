import Image from "next/image";
import Link from "next/link";

const buttonBaseStyles =
  "group flex items-center border-2 border-primary bg-neutral-white text-primary rounded-xl px-3 py-3 text-lg font-medium box-border " +
  "hover:border-primary-coral hover:font-semibold hover:bg-neutral-lightGray hover:ring-2 hover:ring-primary-coral " +
  "hover:scale-95 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 focus:ring-offset-2";

const logoHoverStyles =
  "transition-transform duration-500 ease-in-out group-hover:scale-75";

const ExternalLinks = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-end py-12 items-center">
      {/* Booking Button */}
      <div className="p-4">
        <Link
          href="https://www.booking.com/hotel/gr/bluewind-apartments-near-the-sea"
          target="_blank"
          className={buttonBaseStyles}
        >
          BOOK NOW
          <div className={logoHoverStyles}>
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

      {/* Separator: vertical on lg, horizontal on smaller screens */}
      <div className="hidden lg:block border-l-2 border-primary h-32 p-4"></div>
      <div className="block lg:hidden border-t-2 border-primary w-full p-4"></div>

      {/* Airbnb Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4">
          <Link
            href="https://www.airbnb.gr/rooms/42484053"
            target="_blank"
            className={buttonBaseStyles}
          >
            APARTMENT A
            <div className={logoHoverStyles}>
              <Image
                src="/images/airbnblogo.svg"
                alt="airbnb logo"
                width={60}
                height={40}
                className="ml-4"
              />
            </div>
          </Link>
          <Link
            href="https://www.airbnb.gr/rooms/42777596"
            target="_blank"
            className={buttonBaseStyles}
          >
            APARTMENT D
            <div className={logoHoverStyles}>
              <Image
                src="/images/airbnblogo.svg"
                alt="airbnb logo"
                width={60}
                height={40}
                className="ml-4"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="https://www.airbnb.gr/rooms/42659201"
            target="_blank"
            className={buttonBaseStyles}
          >
            <span className="flex-grow text-center">STUDIO B</span>
            <div className={logoHoverStyles}>
              <Image
                src="/images/airbnblogo.svg"
                alt="airbnb logo"
                width={60}
                height={40}
                className="ml-4"
              />
            </div>
          </Link>
          <Link
            href="https://www.airbnb.com.mt/rooms/42776701"
            target="_blank"
            className={buttonBaseStyles}
          >
            <span className="flex-grow text-center">STUDIO C</span>
            <div className={logoHoverStyles}>
              <Image
                src="/images/airbnblogo.svg"
                alt="airbnb logo"
                width={60}
                height={40}
                className="ml-2"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinks;
