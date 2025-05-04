"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/image/footerlogo.png"
              alt="agent.ai"
              width={120}
              height={24}
            />
          </div>

          {/* Links and Copyright */}
          <div className="text-sm text-gray-700">
            <Link href="#" className="text-cyan-700 hover:underline mr-2">
              Terms
            </Link>
            |
            <Link href="#" className="text-cyan-700 hover:underline ml-2">
              Privacy
            </Link>
          </div>
          <div className="text-sm text-gray-600">© OnStartups LLC</div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div>
            <p className="text-gray-800 font-semibold mb-1">Resources</p>
            <ul className="text-sm space-y-1">
              <li>
                <Link href="#" className="text-cyan-700 hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-cyan-700 hover:underline">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-800 text-xl">
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaLinkedinIn />
            </Link>

            {/* Scroll to Top */}
            <button
              className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
