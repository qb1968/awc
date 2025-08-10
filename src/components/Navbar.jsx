import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-gray-100 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-500 hover:text-cyan-400 transition"
          aria-label="Home"
          onClick={() => setIsOpen(false)}
        >
          Allison Web Consultants
        </Link>

        {/* Hamburger button - shown on small screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-blue-500 hover:text-cyan-400 focus:outline-none transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        {/* Menu links */}
        <div
          className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static bg-gray-900 md:bg-transparent left-0 w-full md:w-auto top-16 md:top-auto px-6 md:px-0 pb-6 md:pb-0 transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/why-choose-us"
            className="hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Why Choose Us
          </Link>
          <HashLink
            smooth
            to="/#services"
            className="hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Our Services
          </HashLink>
          <Link
            to="/contact"
            className="hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/book-online"
            className="hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Book Online
          </Link>
        </div>
      </div>
    </nav>
  );
}
