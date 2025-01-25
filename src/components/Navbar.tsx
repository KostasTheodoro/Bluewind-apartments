import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Explore Chania", href: "/explore" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        {/* Navbar Container */}
        <div className="relative flex items-center justify-between h-16 pt-16 ">
          {" "}
          <div className="flex items-center flex-shrink-0 pt-12">
            <Image
              src="/images/Bluewind Logo.png"
              alt="Bluewind Logo"
              width={140}
              height={100}
            />
          </div>
          {/* Main Navigation Links */}
          <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    "text-primary  hover:text-blue-500  ",
                    "px-16 py-3 text-lg font-bold"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Separator Line Below Navigation */}
        <div className="w-5/6 border-t-4 border-black my-4 ml-auto"></div>

        {/* Booking and Airbnb Links */}
        <div className="flex justify-evenly py-4 ps-64 items-center ">
          {/* Booking Button */}
          <a
            href="https://www.booking.com/hotel/gr/bluewind-apartments-near-the-sea"
            target="_blank"
            className="group flex items-center border-2 border-black 
            
            bg-white text-black rounded-xl px-4 py-4 text-xl font-medium 
            hover:border-4 hover:border-blue-500 hover:text-primary hover:font-bold hover:bg-neutral-gray 
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            transition-all duration-300 ease-in-out hover:scale-95 hover:transform hover:translate-x-0 hover:translate-y-0"
          >
            BOOK NOW
            <div className="transition-transform duration-500 ease-in-out group-hover:scale-75">
              <Image
                src="/images/Booking Logo.svg"
                alt="booking logo"
                width={40}
                height={20}
                className="ml-4 "
              />
            </div>
          </a>

          {/* Separator Line */}
          <div className="border-l-2 border-black h-32"></div>

          {/* Airbnb Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.airbnb.gr/rooms/42484053?source_impression_id=p3_1737825240_P3C4R2jrZDklesW-"
                target="_blank"
                className="group flex items-center border-2 border-black 
  bg-white text-black rounded-xl px-4 py-4 text-xl font-medium 
  hover:border-4 hover:border-red-400 hover:text-primary hover:font-bold hover:bg-neutral-gray 
  focus:outline-none focus:ring-2 focus:ring-red-400
  transition-transform duration-300 ease-in-out transform hover:scale-95"
              >
                APARTMENT A
                <div className="transition-transform duration-500 ease-in-out group-hover:scale-75">
                  <Image
                    src="images/Airbnb Logo.svg"
                    alt="aribnb logo"
                    width={70}
                    height={40}
                    className="ml-4"
                  />
                </div>
              </a>

              <a
                href="https://www.airbnb.gr/rooms/42777596?_set_bev_on_new_domain=1621165347_ZTVkMDM5YzZlMTU3&source_impression_id=p3_1621170584_CcF%2Fa1X3vFl2ID62&guests=1&adults=1"
                target="_blank"
                className="group flex items-center border-2 border-black 
  bg-white text-black rounded-xl px-4 py-4 text-xl font-medium 
  hover:border-4 hover:border-red-400 hover:text-primary hover:font-bold hover:bg-neutral-gray 
  focus:outline-none focus:ring-2 focus:ring-red-400
  transition-transform duration-300 ease-in-out transform hover:scale-95"
              >
                APARTMENT D
                <div className="transition-transform duration-500 ease-in-out group-hover:scale-75">
                  <Image
                    src="images/Airbnb Logo.svg"
                    alt="aribnb logo"
                    width={70}
                    height={40}
                    className="ml-4"
                  />
                </div>
              </a>
            </div>

            <div className="flex flex-col space-y-4">
              <a
                href="https://www.airbnb.gr/rooms/42659201?source_impression_id=p3_1737825305_P39x8L5HZgonR4Kn"
                target="_blank"
                className="group flex items-center border-2 border-black 
  bg-white text-black rounded-xl px-4 py-4 text-xl font-medium 
  hover:border-4 hover:border-red-400 hover:text-primary hover:font-bold hover:bg-neutral-gray 
  focus:outline-none focus:ring-2 focus:ring-red-400
  transition-transform duration-300 ease-in-out transform hover:scale-95"
              >
                <span className="flex-grow text-center">STUDIO B</span>
                <div className="transition-transform duration-500 ease-in-out group-hover:scale-75">
                  <Image
                    src="images/Airbnb Logo.svg"
                    alt="aribnb logo"
                    width={70}
                    height={40}
                    className="ml-4"
                  />
                </div>
              </a>

              <a
                href="https://www.airbnb.com.mt/rooms/42776701?source_impression_id=p3_1737825333_P3zpllITeIVmLpa3"
                target="_blank"
                className="group flex items-center border-2 border-black 
  bg-white text-black rounded-xl px-4 py-4 text-xl font-medium 
  hover:border-4 hover:border-red-400 hover:text-primary hover:font-bold hover:bg-neutral-gray 
  focus:outline-none focus:ring-2 focus:ring-red-400
  transition-transform duration-300 ease-in-out transform hover:scale-95"
              >
                <span className="flex-grow text-center">STUDIO C</span>
                <div className="transition-transform duration-500 ease-in-out group-hover:scale-75">
                  <Image
                    src="images/Airbnb Logo.svg"
                    alt="aribnb logo"
                    width={70}
                    height={40}
                    className="ml-4"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a>
                <DisclosureButton
                  as="a" // You can keep this as 'a', but now inside a Link component
                  className={classNames(
                    "text-gray-300 hover:bg-gray-700 hover:text-black",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Booking and Airbnb Links */}
        <div className="space-y-2 py-2 px-2">
          <a
            href="#"
            className="block bg-indigo-500 text-black rounded-md px-8 py-4 text-center text-xl font-medium hover:bg-indigo-400"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Logo_Booking.com_2019.svg"
              alt="Booking Logo"
              className="h-6 w-6 mr-3 inline"
            />
            Book Now
          </a>

          <div className="flex flex-wrap justify-center space-x-2">
            <a
              href="#"
              className="block bg-red-500 text-black rounded-md px-8 py-4 text-center text-xl font-medium hover:bg-red-400"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Airbnb_Logo_2018.svg"
                alt="Airbnb Logo"
                className="h-6 w-6 mr-3 inline"
              />
              APARTMENT A
            </a>
            <a
              href="#"
              className="block bg-red-500 text-black rounded-md px-8 py-4 text-center text-xl font-medium hover:bg-red-400"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Airbnb_Logo_2018.svg"
                alt="Airbnb Logo"
                className="h-6 w-6 mr-3 inline"
              />
              APARTMENT B
            </a>
            <a
              href="#"
              className="block bg-red-500 text-black rounded-md px-8 py-4 text-center text-xl font-medium hover:bg-red-400"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Airbnb_Logo_2018.svg"
                alt="Airbnb Logo"
                className="h-6 w-6 mr-3 inline"
              />
              APARTMENT C
            </a>
            <a
              href="#"
              className="block bg-red-500 text-black rounded-md px-8 py-4 text-center text-xl font-medium hover:bg-red-400"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Airbnb_Logo_2018.svg"
                alt="Airbnb Logo"
                className="h-6 w-6 mr-3 inline"
              />
              APARTMENT D
            </a>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
