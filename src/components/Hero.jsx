import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import backdrop from "../assets/images/HeroSectionBackdrop.png";

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, margin: "-100px" });

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white min-h-screen flex flex-col justify-center px-6 md:px-16 pt-20 relative"
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
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"
      ></motion.div>

      {/* Content */}
      <div className="max-w-4xl relative z-10">
        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Advancing <br />
          Biotechnology & <br />
          Molecular Genetics
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-xl md:text-2xl mb-8"
        >
          Empowering industries with cutting-edge solutions in biotechnology,
          animal science, and molecular genetics.
        </motion.p>

        {/* Button Animation */}
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-gradient-to-r from-[#861FD2] to-[#66CC99] animate-pulse hover:animate-none text-white px-8 py-3 rounded-full text-lg font-medium inline-block transition"
        >
          Discover More
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
