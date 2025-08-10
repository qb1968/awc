import {
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-blue-600 to-blue-500 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo or Brand Name */}
        <div className="text-lg font-extrabold tracking-wide drop-shadow">
          Allison Web Consultants
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-white">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-300 transition"
          >
            <FaLinkedin size={24} />
          </a>
         
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-indigo-300 transition"
          >
            <FaFacebookF size={24} />
          </a>
          
        </div>

        {/* Copyright */}
        <div className="text-sm text-white/80">
          &copy; {new Date().getFullYear()} Allison Web Consultants. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
