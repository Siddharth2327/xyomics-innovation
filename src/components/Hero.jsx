import { motion } from "framer-motion";
import { useRef } from "react";
import backdrop from "../assets/images/HeroSectionBackdrop.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const sectionRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white min-h-screen flex flex-col justify-center relative"
      style={{
        backgroundImage: `url(${backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to ensure text remains readable */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"
      ></motion.div>

      {/* Content Container with responsive padding */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 w-full relative z-10 pt-16 md:pt-20 lg:pt-24">
        <div className="max-w-4xl">
          {/* Heading Animation */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6"
          >
            Advancing <span className="hidden sm:inline"><br /></span>
            Biotechnology & <span className="hidden sm:inline"><br /></span>
            Molecular Genetics
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl"
          >
            Empowering industries with cutting-edge solutions in biotechnology,
            animal science, and molecular genetics.
          </motion.p>

          {/* Button Animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="inline-block"
          >
            <Link
              to="/training-modules"
              aria-label="Our training modules"
              className="bg-gradient-to-r from-[#861FD2] to-[#66CC99] animate-pulse hover:animate-none text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium inline-block transition"
            >
              Discover More
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
