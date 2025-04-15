import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  // Handle outside click to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        navRef.current && 
        !navRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Handle scroll effect and close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Close menu on scroll
      if (isMenuOpen && Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setIsMenuOpen(false);
      }
      
      // Update scrolled state for navbar appearance
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Close menu when clicking on anchor links (section navigation)
  const handleSectionNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      ref={navRef}
      className={`bg-gradient-to-t from-transparent to-black/100 text-white fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 pl-0">
            <img src={logo} alt="Xyomics" className="h-16 sm:h-20 w-auto max-w-full" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="hidden md:flex items-center gap-4 lg:gap-8 mr-2 lg:mr-6">
            <Link
              to="/"
              className="font-bold text-lg lg:text-2xl relative group transition
              hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
              hover:bg-clip-text hover:text-transparent py-2"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="font-bold text-lg lg:text-2xl relative group transition
              hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
              hover:bg-clip-text hover:text-transparent py-2"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <a
              href="#services"
              className="font-bold text-lg lg:text-2xl relative group transition
              hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
              hover:bg-clip-text hover:text-transparent py-2"
              onClick={handleSectionNavigation}
            >
              Services
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="font-bold text-lg lg:text-2xl relative group transition
              hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
              hover:bg-clip-text hover:text-transparent py-2"
              onClick={handleSectionNavigation}
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Positioned absolutely to ensure visibility */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-gray-800 shadow-lg transition-all duration-300 ease-in-out w-full z-50 py-4 px-4"
        >
          <div className="flex flex-col space-y-4 w-full">
            <Link
              to="/"
              className="font-bold text-xl relative group transition
              hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
              hover:bg-clip-text hover:text-transparent py-2" 
              onClick={handleSectionNavigation}
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="font-bold text-xl relative group transition
              hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
              hover:bg-clip-text hover:text-transparent py-2" 
              onClick={handleSectionNavigation}
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <a
              href="#services"
              className="font-bold text-xl relative group transition
              hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
              hover:bg-clip-text hover:text-transparent py-2" 
              onClick={handleSectionNavigation}
            >
              Services
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="font-bold text-xl relative group transition
              hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] 
              hover:bg-clip-text hover:text-transparent py-2" 
              onClick={handleSectionNavigation}
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;