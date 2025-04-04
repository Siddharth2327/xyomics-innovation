const Footer = () => {
    return (
      <footer className="bg-black text-white py-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-700 pt-8 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold">Xyomics</h2>
                <p className="text-gray-400 mt-1">Advancing Biotechnology & Molecular Genetics</p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-400">© 2025 by Xyomics Innovations. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;