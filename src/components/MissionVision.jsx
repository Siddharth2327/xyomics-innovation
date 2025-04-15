import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import missionImage from "../assets/images/MissionImage.jpg";
import vissionImage from "../assets/images/VissionImage.jpg";

const MissionVision = () => {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { triggerOnce: true, margin: "-100px" });

  const visionRef = useRef(null);
  const visionInView = useInView(visionRef, { triggerOnce: true, margin: "-100px" });

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: [0.5, 1.3, 1], // Start at 0.9, pop up to 1.5, then settle at 1
      transition: {
        opacity: { duration: 0.5 },
        scale: { duration: 1, times: [0, 0.3, 1] } // Control timing of the scale animation
      }
    }
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Mission Section (Text Left - Image Right) */}
        <div ref={missionRef} className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#861FD2]">Our Mission</h3>
            <p className="text-lg mb-4">
              Our mission is to drive scientific progress by bridging the gap between research and real-world applications. We strive to:
            </p>
            <ul className="space-y-3">
              {[
                "Provide specialized services to industries, enhancing efficiency and innovation.",
                "Support students with research projects, helping them gain hands-on experience.",
                "Foster collaborations that lead to advancements in animal science and biotechnology.",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={missionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 * index, duration: 0.6 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-blue-400">→</span>
                  <p>{text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image on Right */}
          <motion.div
            className="rounded-lg overflow-hidden"
            variants={imageVariants}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
          >
            <img src={missionImage} alt="Mission Illustration" className="object-cover w-full h-auto aspect-video" />
          </motion.div>
        </div>

        {/* Vision Section (Image Left - Text Right) */}
        <div ref={visionRef} className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Image on Left */}
          <motion.div
            className="rounded-lg overflow-hidden"
            variants={imageVariants}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
          >
            <img src={vissionImage} alt="Vision Illustration" className="object-cover w-full h-auto aspect-video" />
          </motion.div>

          {/* Text on Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={visionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#66CC99]">Our Vision</h3>
            <p className="text-lg mb-4">
              We envision a future where scientific innovation transforms industries and education, creating sustainable solutions and advancing knowledge in biotechnology and animal sciences.
            </p>
            <p className="text-lg">
              By 2030, we aim to be the leading provider of specialized biotechnology solutions in the animal science sector, recognized for our commitment to excellence, innovation, and educational support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;