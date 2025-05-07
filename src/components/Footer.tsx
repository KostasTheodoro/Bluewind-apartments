import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa"; // Importing social and icon components

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center space-x-8 text-neutral-white mb-6 ">
          {" "}
          <div className="md:flex items-center space-x-2 hidden">
            <FaPhoneAlt size={20} />
            <span>+30 6945226609</span>
          </div>
          {/* Vertical Separator Line */}
          <div className="h-6 border-l-2 border-neutral-white hidden md:flex"></div>
          <div className="md:flex items-center space-x-2 hidden">
            <FaEnvelope size={20} />
            <span>bluewindapts@gmail.com</span>
          </div>
          <div className="h-6 border-l-2 border-neutral-white hidden md:flex"></div>
          <div className="flex items-center space-x-2">
            <Link
              href="https://www.facebook.com/Bluewindapts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-white hover:text-primary-coral"
            >
              <FaFacebook size={30} />
            </Link>
          </div>
          <div className="h-6 border-l-2 border-neutral-white "></div>
          <div className="flex items-center space-x-2">
            <Link
              href="https://www.instagram.com/bluewindapts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-white hover:text-primary-coral"
            >
              <FaInstagram size={30} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-neutral-white ">
          <p>© 2025 Bluewind Apartments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
