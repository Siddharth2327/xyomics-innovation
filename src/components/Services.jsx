import { motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import backdrop from "../assets/images/ServicesBackdrop.png";

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, margin: "-100px" });

  const [activeCard, setActiveCard] = useState(0);
  const [isHovering, setisHovering] = useState(false);

  const services = [
    {
      id: "01",
      title: "For Industries",
      arrow: "text-green-400",
      items: [
        "Biotechnology-based solutions for animal health and productivity",
        "Molecular genetics research and applications",
        "Consulting services for poultry farming",
        "Innovation in aquaculture systems",
        "Veterinary diagnostic services",
      ],
    },
    {
      id: "02",
      title: "For Students",
      arrow: "text-blue-400",
      items: [
        "Guidance and mentorship for academic projects",
        "Research support in molecular genetics",
        "Hands-on training in biotechnology",
        "Access to industry-relevant case studies",
        "Career guidance in animal science fields",
      ],
    },
    {
      id: "03",
      title: "Research & Reports",
      arrow: "text-purple-400",
      items: [
        "Customized research services",
        "Detailed reports with data analysis",
        "Trend forecasting in animal science",
        "Biotechnology implementation guides",
        "Industry-specific white papers",
      ],
    },
  ];

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length, isHovering]);

  return (
    <section ref={sectionRef} id="services" className="relative bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backdrop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px)",
          zIndex: 0,
        }}
      ></motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          What We Offer
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "10rem" } : {}}
          transition={{ duration: 0.5 }}
          className="w-40 h-1 bg-[#861FD2] mx-auto mb-6 rounded-full"
        ></motion.div>

        {/* Card Selector Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          {services.map((service, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCard(index)}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
                activeCard === index ? "bg-gray-800 text-white" : "bg-transparent text-gray-400 hover:text-white"
              }`}
            >
              <span className="relative z-10">{service.title}</span>
              {activeCard === index && (
                <span className="absolute inset-0 bg-gradient-to-r from-[#861FD2] to-[#66CC99] rounded-full animate-pulse"></span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Cards Container */}
        <div className="relative h-96" onMouseEnter={() => setisHovering(true)} onMouseLeave={() => setisHovering(false)}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: index === activeCard ? 1 : 0,
                scale: index === activeCard ? 1 : 0.9,
                zIndex: index === activeCard ? 10 : 0,
                display: index === activeCard ? "block" : "none" // This is the key change
              }}
              transition={{ duration: 0.7 }}
              className={`absolute w-full`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-transparent rounded-xl p-8 shadow-2xl hover:shadow-[0_0_30px_rgba(134,31,210,0.6)] transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <span className={`text-4xl ${service.arrow}`}>→</span>
                  <div className="ml-4">
                    <div className="text-7xl font-bold text-white/20 mb-2">{service.id}</div>
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                  </div>
                </div>

                <ul className="space-y-4 mt-8">
                  {service.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 * itemIndex, duration: 0.6 }}
                      className="flex items-start gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#861FD2] to-[#66CC99] flex-shrink-0 mt-1"></div>
                      <p className="text-lg">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;