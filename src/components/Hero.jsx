import backdrop from "../assets/images/HeroSectionBackdrop.png";

const Hero = () => {
  return (
    <div 
      className="bg-black text-white min-h-screen flex flex-col justify-center px-6 md:px-16 pt-20 relative"
      style={{
        backgroundImage: `url(${backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay to ensure text remains readable */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent  "
      ></div>
      
      {/* Content */}
      <div className="max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Advancing <br />
          Biotechnology & <br />
          Molecular Genetics
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Empowering industries with cutting-edge solutions in biotechnology, 
          animal science, and molecular genetics.
        </p>
        <a 
          href="#about" 
          className="bg-gradient-to-r from-[#861FD2] to-[#66CC99] animate-pulse hover:animate-none text-white px-8 py-3 rounded-full text-lg font-medium inline-block transition"
        >
          Discover More
        </a>
      </div>
    </div>
  );
};

export default Hero;