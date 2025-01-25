import Link from "next/link";
import { FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Importing social and icon components

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation Links */}
        <div className="mb-6 flex justify-center space-x-24 py-8">
          {" "}
          {/* Increased padding between links */}
          <Link href="/about" className="text-gray-400 hover:text-white">
            About
          </Link>
          <Link href="/rooms" className="text-gray-400 hover:text-white">
            Rooms
          </Link>
          <Link href="/explore" className="text-gray-400 hover:text-white">
            Explore
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </div>

        {/* Contact Information (All in one row) */}
        <div className="flex justify-center items-center space-x-8 text-gray-400 mb-6 ">
          {" "}
          {/* Increased space between phone, email, and facebook */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt size={20} />
            <span>+30 1234567890</span>
          </div>
          {/* Vertical Separator Line */}
          <div className="h-6 border-l-2 border-gray-400"></div>
          <div className="flex items-center space-x-2">
            <FaEnvelope size={20} />
            <span>harris@example.com</span>
          </div>
          {/* Vertical Separator Line */}
          <div className="h-6 border-l-2 border-gray-400"></div>
          <div className="flex items-center space-x-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white "
            >
              <FaFacebook size={30} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 py-8">
          <p>
            © {new Date().getFullYear()} Blue Wind Apartments. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
