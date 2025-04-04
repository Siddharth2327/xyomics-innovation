const Hero = () => {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col justify-center px-6 md:px-16 pt-20">
        <div className="max-w-4xl">
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium inline-block transition"
          >
            Discover More
          </a>
        </div>
      </div>
    );
  };
  
  export default Hero;