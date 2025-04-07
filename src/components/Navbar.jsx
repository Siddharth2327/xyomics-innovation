import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-t from-transparent to-black/100 text-white fixed w-full z-50">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Xyomics" className="h-20 w-80" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 mr-6">
          <Link
            to="/"
            className="font-bold text-2xl relative group transition
            hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
            hover:bg-clip-text hover:text-transparent"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="font-bold text-2xl relative group transition
            hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
            hover:bg-clip-text hover:text-transparent"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <a
            href="#services"
            className="font-bold text-2xl relative group transition
            hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
            hover:bg-clip-text hover:text-transparent"
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="font-bold text-2xl relative group transition
            hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
            hover:bg-clip-text hover:text-transparent"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
          <Link
            to="/"
            className="font-bold text-2xl relative group transition
            hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
            hover:bg-clip-text hover:text-transparent" 
            onClick={() => setIsMenuOpen(false)}
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="font-bold text-2xl relative group transition
            hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
            hover:bg-clip-text hover:text-transparent" 
            onClick={() => setIsMenuOpen(false)}
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link
            to="/services"
            className="font-bold text-2xl relative group transition
            hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
            hover:bg-clip-text hover:text-transparent" 
            onClick={() => setIsMenuOpen(false)}
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="font-bold text-2xl relative group transition
            hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
            hover:bg-clip-text hover:text-transparent" 
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;