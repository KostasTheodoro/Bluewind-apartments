"use client";
import { Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ExternalLinks from "./ExternalLinks";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Landmarks", href: "/landmarks" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="bg-neutral-white border-b-2 border-neutral-lightGray lg:static sticky top-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* Navbar Container */}
            <div className="relative flex items-center justify-between lg:h-16 lg:pt-16">
              {/* Mobile Toggle Button */}
              <div className="lg:hidden">
                <DisclosureButton
                  id="mobile-toggle"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none  "
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo  */}
              <div className="flex items-center flex-shrink-0 p-4 order-last lg:order-first lg:pt-12 lg:w-1/6 lg:ml-auto">
                <Image
                  src="/images/Bluewind Logo.png"
                  alt="Bluewind Logo"
                  width={140}
                  height={100}
                  className="w-auto h-12 lg:h-28"
                />
              </div>

              {/* Desktop Navigation Links */}
              <div className="flex items-stretch justify-start">
                <div className="hidden lg:flex space-x-32 border-b-4 border-primary">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "text-primary hover:text-primary-coral py-3 text-lg font-bold",
                        pathname === item.href ? "text-primary-coral" : ""
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <ExternalLinks />
            </div>
          </div>

          {/* Backdrop (only rendered when open) */}
          {open && (
            <div
              className={`fixed inset-0 z-30 bg-black bg-opacity-25 lg:hidden ${
                open ? "block" : "hidden"
              }`}
              onClick={() => document.getElementById("mobile-toggle")?.click()}
            />
          )}
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DisclosurePanel className="fixed inset-y-0 left-0 z-40 w-full max-w-xs flex flex-col overflow-y-auto bg-white pb-12 shadow-xl lg:hidden">
              {/* Close Button */}
              <div className="flex px-4 pt-5 pb-2 border-b-2 border-neutral-lightGray">
                <DisclosureButton
                  id="mobile-close"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
              </div>
              {/* Mobile Navigation Links */}
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    as={Link}
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-lg font-bold text-primary hover:text-primary-coral"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
