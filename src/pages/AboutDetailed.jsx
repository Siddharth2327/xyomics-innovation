import { motion } from "framer-motion";

const AboutDetailed = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text mb-12 text-center"
        >
          About Xyomics Innovations
        </motion.h1>

        {/* Our Story */}
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-t from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text">Our Story</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Founded in 2025, Xyomics Innovations emerged from a vision to bridge the gap between 
            cutting-edge biotechnology research and practical applications in animal science. 
            Our founder, with over 21 years of experience in molecular genetics and animal biotechnology, 
            recognized the need for specialized services that could help both industries and students 
            leverage scientific advancements.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            -- content has to be pasted here --
          </p>
        </motion.section>

        {/* Our Team */}
        <motion.section 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-t from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text">Our Team</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Our team consists of highly qualified professionals with extensive experience in:
          </p>
          <ul className="list-disc pl-8 space-y-4 text-lg text-gray-300">
            <li>Molecular genetics and genomics</li>
            <li>Animal biotechnology</li>
            <li>Veterinary sciences</li>
            <li>Poultry farming and aquaculture</li>
            <li>Research methodology and data analysis</li>
          </ul>
        </motion.section>

        {/* Our Approach */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-t from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text">Our Approach</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            At Xyomics Innovations, we believe in a collaborative approach that combines scientific 
            rigor with practical solutions. Our methodology involves:
          </p>
          <ol className="list-decimal pl-8 space-y-4 text-lg text-gray-300">
            <li>
              <span className="font-bold text-white">Understanding client needs</span> — 
              thorough assessment of specific requirements and challenges.
            </li>
            <li>
              <span className="font-bold text-white">Research-based solutions</span> — 
              applying the latest scientific research to develop innovative strategies.
            </li>
            <li>
              <span className="font-bold text-white">Implementation support</span> — 
              guidance throughout the entire implementation process.
            </li>
            <li>
              <span className="font-bold text-white">Continuous improvement</span> — 
              monitoring and optimizing outcomes.
            </li>
          </ol>
        </motion.section>

        {/* Research Papers & Publications */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-t from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text">Research Papers & Publications</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Our team regularly contributes to scientific literature in the fields of biotechnology 
            and animal science. Some of our recent publications include:
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-[#861FD2] pl-6 ">
              <h3 className="font-bold text-2xl text-white mb-2">
                Advancements in Molecular Genetics for Poultry Health Management
              </h3>
              <p className="text-gray-400">Journal of Animal Biotechnology, 2024</p>
            </div>
            <div className="border-l-4 border-[#861FD2] pl-6">
              <h3 className="font-bold text-2xl text-white mb-2">
                Innovative Approaches to Aquaculture Systems Using Biotechnology
              </h3>
              <p className="text-gray-400">International Journal of Fisheries Science, 2023</p>
            </div>
            <div className="border-l-4 border-[#861FD2] pl-6">
              <h3 className="font-bold text-2xl text-white mb-2">
                The Future of Veterinary Diagnostics: Molecular Tools and Technologies
              </h3>
              <p className="text-gray-400">Veterinary Science Review, 2023</p>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default AboutDetailed;
