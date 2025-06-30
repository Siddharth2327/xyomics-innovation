import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isopportunitiesOpen, setIsopportunitiesOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const opportunitiesRef = useRef(null);
  const lastScrollY = useRef(0);

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

      if (
        isopportunitiesOpen &&
        opportunitiesRef.current &&
        !opportunitiesRef.current.contains(event.target)
      ) {
        setIsopportunitiesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen, isopportunitiesOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMenuOpen && Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setIsMenuOpen(false);
      }

      if (isopportunitiesOpen && Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setIsopportunitiesOpen(false);
      }

      setScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen, isopportunitiesOpen]);

  const handleSectionNavigation = () => {
    setIsMenuOpen(false);
    setIsopportunitiesOpen(false);
  };

  const handleopportunitiesMouseEnter = () => {
    setIsopportunitiesOpen(true);
  };

  const handleopportunitiesMouseLeave = () => {
    setIsopportunitiesOpen(false);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`bg-gradient-to-t from-transparent to-black/100 text-white fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 pl-0">
            <motion.img
              src={logo}
              alt="Xyomics"
              className="h-16 sm:h-20 w-auto max-w-full"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Link>

          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-4 lg:gap-8 mr-2 lg:mr-6">
            {['Home', 'About'].map((text) => (
              <motion.div key={text} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Link
                  to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                  className="font-bold text-lg lg:text-2xl relative group transition hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] hover:bg-clip-text hover:text-transparent py-2"
                >
                  {text}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}

            {/* opportunities with Dropdown */}
            <motion.div
              ref={opportunitiesRef}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleopportunitiesMouseEnter}
              onMouseLeave={handleopportunitiesMouseLeave}
            >
              <div
                onClick={handleSectionNavigation}
                className="font-bold text-lg lg:text-2xl relative group transition hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] hover:bg-clip-text hover:text-transparent py-2 flex items-center"
              >
                Opportunities
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isopportunitiesOpen ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
              </div>

              <AnimatePresence>
                {isopportunitiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-black/50 backdrop-blur-[10px] rounded-lg shadow-xl overflow-hidden"
                  >
                    <Link
                      to="/service"
                      onClick={handleSectionNavigation}
                      className="block px-4 py-3 font-medium text-white hover:bg-gradient-to-r hover:from-[#861FD2]/20 hover:to-[#66CC99]/20 transition-all duration-200 border-b border-gray-700 last:border-b-0"
                    >
                      Services
                    </Link>
                    <Link
                      to="/training-modules"
                      onClick={handleSectionNavigation}
                      className="block px-4 py-3 font-medium text-white hover:bg-gradient-to-r hover:from-[#861FD2]/20 hover:to-[#66CC99]/20 transition-all duration-200 border-b border-gray-700 last:border-b-0"
                    >
                      Training Modules
                    </Link>
                    <Link
                      to="/careers"
                      onClick={handleSectionNavigation}
                      className="block px-4 py-3 font-medium text-white hover:bg-gradient-to-r hover:from-[#861FD2]/20 hover:to-[#66CC99]/20 transition-all duration-200 border-b border-gray-700 last:border-b-0"
                    >
                      Careers
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Link
                to="/contact"
                onClick={handleSectionNavigation}
                className="font-bold text-lg lg:text-2xl relative group transition hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] hover:bg-clip-text hover:text-transparent py-2"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-gray-800 shadow-lg transition-all duration-300 ease-in-out w-full z-50 py-4 px-4 mr-2"
          >
            <div className="flex flex-col space-y-4 w-full">
              {['Home', 'About'].map((text) => (
                <Link
                  key={text}
                  to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                  onClick={handleSectionNavigation}
                  className="font-bold text-xl relative group transition hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] hover:bg-clip-text hover:text-transparent py-2"
                >
                  {text}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
                </Link>
              ))}

              <div className="space-y-2">
                <div
                  onClick={handleSectionNavigation}
                  className="font-bold text-xl relative group transition hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] hover:bg-clip-text hover:text-transparent py-2 block"
                >
                  Opportunities
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
                </div>
                <Link
                  to="/training-modules"
                  onClick={handleSectionNavigation}
                  className="font-medium text-lg pl-4 relative group transition hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] hover:bg-clip-text hover:text-transparent py-2 block border-l-2 border-gray-600"
                >
                  Training Modules
                  <span className="absolute left-4 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/careers"
                  onClick={handleSectionNavigation}
                  className="font-medium text-lg pl-4 relative group transition hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] hover:bg-clip-text hover:text-transparent py-2 block border-l-2 border-gray-600"
                >
                  Careers
                  <span className="absolute left-4 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </div>

              <Link
                to="/contact"
                onClick={handleSectionNavigation}
                className="font-bold text-xl relative group transition hover:bg-gradient-to-r hover:from-[#861FD2] hover:via-white hover:to-[#66CC99] hover:bg-clip-text hover:text-transparent py-2"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};



export default Navbar;
