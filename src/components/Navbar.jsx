import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 px-6 md:px-12 fixed w-full z-50">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Xyomics</Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
          <Link to="/" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/services" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/contact" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          
        </div>
      )}
    </nav>
  );
};
export default Navbar;