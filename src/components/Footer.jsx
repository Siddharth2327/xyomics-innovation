import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import textlogo from '../assets/TextLogo.png';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null); 

  return (
    <footer className="bg-black text-white py-8 px-6 md:px-16 w-full">
      <div className="w-full mx-auto">
        <div className="border-t border-gray-700 pt-6 pb-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* Logo and Tagline */}
            <div>
              <img src={textlogo} alt="Xyomics Logo" className="h-8 mb-2" />
              <p className="text-gray-400 mt-1 pl-2">Advancing Biotechnology & Molecular Genetics</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-row ">
                <div className='flex flex-col space-y-2'>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors duration-300 w-fit flex items-center space-x-1"
                    onMouseEnter={() => setHoveredLink('home')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {hoveredLink === 'home' && <span className="text-xs">❯</span>}
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors duration-300 w-fit flex items-center space-x-1"
                    onMouseEnter={() => setHoveredLink('about')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {hoveredLink === 'about' && <span className="text-xs">❯</span>}
                    <span>About</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white transition-colors duration-300 w-fit flex items-center space-x-1"
                    onMouseEnter={() => setHoveredLink('contact')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {hoveredLink === 'contact' && <span className="text-xs">❯</span>}
                    <span>Contact</span>
                  </Link>
                </div>
                <div className='flex flex-col space-y-2 ml-20'>
                  <Link
                    to="/service"
                    className="text-gray-400 hover:text-white transition-colors duration-300 w-fit flex items-center space-x-1"
                    onMouseEnter={() => setHoveredLink('service')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {hoveredLink === 'service' && <span className="text-xs">❯</span>}
                    <span>Services</span>
                  </Link>
                  <Link
                    to="/training-modules"
                    className="text-gray-400 hover:text-white transition-colors duration-300 w-fit flex items-center space-x-1"
                    onMouseEnter={() => setHoveredLink('training')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {hoveredLink === 'training' && <span className="text-xs">❯</span>}
                    <span>Training Module</span>
                  </Link>

                  <Link
                    to="/careers"
                    className="text-gray-400 hover:text-white transition-colors duration-300 w-fit flex items-center space-x-1"
                    onMouseEnter={() => setHoveredLink('careers')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {hoveredLink === 'careers' && <span className="text-xs">❯</span>}
                    <span>Careers</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Copyright and Credits */}
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 by Xyomics Innovation. All rights reserved.</p>
              <p className="text-gray-400 py-2 text-xs">Website Designed by &nbsp;
                <a href='https://siddhu230.github.io/-Portfolio-website/' target='_blank' rel='noopener noreferrer' className='bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text font-bold text-[1rem]'>
                  Siddharth
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;