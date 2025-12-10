import type React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-white text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Seminar Hall Booking
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Welcome to our comprehensive Seminar Hall Booking System. We
                simplify the process of reserving premium spaces for your
                events, meetings, workshops, and academic gatherings. Our
                platform ensures a seamless experience for students, faculty,
                and professionals alike.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/enigma-cse/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  href="https://github.com/Enigma-CSE"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                >
                  <FaGithub size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-white text-lg font-semibold mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400 rounded-full"></div>
            </h6>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-center md:text-left mb-4 md:mb-0">
              Copyright &copy; {new Date().getFullYear()} Seminar Hall Booking
              System. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Made with <span className="text-red-500">❤️</span> by{" "}
              <span className="text-yellow-400 font-semibold">Team Enigma</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
