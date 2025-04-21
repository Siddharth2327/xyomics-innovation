import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  

  return (
    <section ref={sectionRef} id="about"  role="region" aria-labelledby="about-title" className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading with scale effect */}
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl text-center md:text-5xl font-bold mb-4 text-white bg-clip-text"
        >
          About
        </motion.h2>

        {/* Animated divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "3.5rem" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-14 h-1 bg-[#861FD2] mx-auto mb-6 rounded-full"
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left content with fade-in effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Advancing Biotechnology, Animal Science, and Molecular Genetics
            </h3>
            <p className="text-lg mb-6">
              At Xyomics Innovation, we are dedicated to empowering industries with cutting-edge solutions in biotechnology, animal science, and molecular genetics.
              We specialize in providing customized services to industries, helping them leverage scientific advancements for growth and innovation.
            </p>
            <p className="text-lg mb-6">
              For students, we offer expert guidance and support in research projects related to poultry farming, aquaculture, and veterinary sciences, ensuring they gain practical exposure and in-depth knowledge.
            </p>

            {/* Animated link */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/about" aria-label="Learn more about Xyomics" className="text-[#66CC99] hover:text-[#861FD2] flex items-center gap-2 transition">
                Learn more about us
                <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right card with hover effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-[#861FD2] to-[#66CC99] p-10 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                { title: "Industry-Focused Expertise", description: "Tailored solutions for businesses in animal science and biotechnology." },
                { title: "Faster Turnaround Time", description: "We reduce waiting times by delivering reports efficiently without compromising accuracy." },
                { title: "Student-Centered Support", description: "Comprehensive guidance to help students excel in their research." },
                { title: "Innovative Approach", description: "Scientific advancements applied to real-world challenges." },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 * index, duration: 0.6 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-green-300 mt-1">✓</span>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
