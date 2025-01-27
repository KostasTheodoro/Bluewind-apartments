import Link from "next/link";
import { FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Importing social and icon components

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation Links */}
        <div className="mb-6 flex justify-center space-x-24 py-8">
          {" "}
          {/* Increased padding between links */}
          <Link
            href="/about"
            className="text-neutral-white hover:text-primary-seafoam"
          >
            About
          </Link>
          <Link
            href="/rooms"
            className="text-neutral-white hover:text-primary-seafoam"
          >
            Rooms
          </Link>
          <Link
            href="/explore"
            className="text-neutral-white hover:text-primary-seafoam"
          >
            Explore
          </Link>
          <Link
            href="/contact"
            className="text-neutral-white hover:text-primary-seafoam"
          >
            Contact
          </Link>
        </div>

        {/* Contact Information (All in one row) */}
        <div className="flex justify-center items-center space-x-8 text-neutral-white mb-6 ">
          {" "}
          {/* Increased space between phone, email, and facebook */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt size={20} />
            <span>+30 1234567890</span>
          </div>
          {/* Vertical Separator Line */}
          <div className="h-6 border-l-2 border-neutral-white"></div>
          <div className="flex items-center space-x-2">
            <FaEnvelope size={20} />
            <span>harris@example.com</span>
          </div>
          {/* Vertical Separator Line */}
          <div className="h-6 border-l-2 border-neutral-white"></div>
          <div className="flex items-center space-x-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-white hover:text-primary-seafoam"
            >
              <FaFacebook size={30} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-neutral-white py-8">
          <p>
            © {new Date().getFullYear()} Blue Wind Apartments. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
