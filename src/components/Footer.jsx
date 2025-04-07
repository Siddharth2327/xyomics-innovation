import textlogo from '../assets/TextLogo.png';

const Footer = () => {
    return (
      <footer className="bg-black text-white py-8 px-6 md:px-16 w-full">
      <div className="w-full mx-auto">
        <div className="border-t border-gray-700 pt-2 pb-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <img src={textlogo} alt="Xyomics Logo" className="h-8 mb-2" />
          <p className="text-gray-400 mt-1 pl-2">Advancing Biotechnology & Molecular Genetics</p>
          </div>
          
          <div className="text-center md:text-right">
          <p className="text-gray-400">© 2025 by Xyomics Innovation. All rights reserved.</p>
          </div>
        </div>
        </div>
      </div>
      </footer>
    );
  };
  
  export default Footer;