import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import PageTitle from "../components/PageTitle";


const AboutDetailed = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    triggerOnce: true, 
    margin: "0px 0px -100px 0px" // Revised margin for more consistent triggering
  });
  //scroll to top on navigation
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  // Define variants for consistent animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const nameHighlight = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1.05 }
  };

  return (
    <>
    <PageTitle title="Xyomics Innovation | About"/>
    <div ref={sectionRef} className="pt-24 min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
    
        {/* Heading Animation */}
        <motion.h1 
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text mb-12 text-center"
        >
          About Xyomics Innovations
        </motion.h1>

        <motion.section 
          variants={slideInLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Founded in 2025, Xyomics Innovations emerged from a vision to bridge the gap between 
            cutting-edge biotechnology research and practical applications in animal science. 
            Our founder, with over{" "}
            <motion.span
              variants={slideInRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay:0.5, duration: 0.6 }}
              className="font-bold"
            >
              21 years of experience in molecular genetics and animal biotechnology
            </motion.span>,            
            recognized the need for specialized services that could help both industries and students 
            leverage scientific advancements.
          </p>
        </motion.section>

        <motion.section 
          variants={slideInLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-t from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text">
            Founders & Desk
          </h2>
          
         {[
            {
              name: "Dr. Bhavanisree, M.Sc., M.Phil., Ph.D.",
              title: "Founder & Director",
              tagline: "_21+ Years in Clinical Diagnostics_",
              expertise: "Serology, Immunology, Lab Management",
              focus: "Quality Control, Training, Scientific Innovation",
              description:
                "A pioneer in clinical diagnostics, Dr. Bhavanisree brings unmatched expertise in biochemistry and serology. As former HOD of Serology department, she specialized in infectious disease testing, immunofluorescence, and newborn screening.",
            },
            {
              name: "Mr. Nandhakumar Saravanan, M.Tech.",
              title: "Co-Founder & Director",
              tagline: "_Innovator in Genomics & Molecular Research_",
              expertise: "Genomics, Molecular Biology, Research Mentorship",
              focus: "Student Engagement, R&D, Strategic Growth",
              description:
                "Mr. Nandhakumar co-founded Xyomics with a goal to drive accessible molecular education and research. With a strong background in microbiology and genomics, he leads academic partnerships and project development across life science domains.",
            },
            {
              name: "Mr. Avinash Shanmugasundaram, M.Sc.",
              title: "VP - Operations and Quality",
              tagline: "_Bridging Quality, Research, and Client Engagement_",
              expertise: "Quality Assurance, Medical Biochemistry, Client Relations",
              focus: "Operations Management, Compliance, Academic Support",
              description:
                "With an exceptional command of Medical Biochemistry, Mr. Avinash bridges research and client engagement through quality assurance and operational strategy.",
            },
          ].map((person, index) => (
            <motion.div
              key={index}
              variants={slideInRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
              className="mb-10 border-l-4 border-[#861FD2] pl-6"
            >
              {/* Name Animation: Scale Up and Fade In */}
              <motion.h3
                variants={nameHighlight}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6 }}
                className="text-2xl ml-3 font-extrabold tracking-wide bg-gradient-to-t from-[#861FD2] via-[#66CC99] to-[#861FD2] 
                          text-transparent bg-clip-text hover:text-[#fff] hover:shadow-lg transition-all duration-500"
              >
                {person.name}
              </motion.h3>

              <p className="italic text-sm text-gray-300">{person.tagline}</p>
              <p className="text-lg text-gray-300 font-bold">{person.title}</p>
              <p className="text-gray-400">{person.description}</p>
              <p className="mt-3"><span className="font-bold text-white">Expertise:</span> {person.expertise}</p>
              <p><span className="font-bold text-white">Focus:</span> {person.focus}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Research Papers Section */}
        <motion.section 
          variants={scaleUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-t from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text">
            Research Papers & Publications
          </h2>
          
          {[
            {
              author: "Dr. Bhavanisree",
              title: "NewBorn Screening for Hemoglobinopathies & Thalassemia in Chennai, Tamil Nadu",
              journal: "International Journal on Biological Sciences, Volume 7 (2016), Pages: 104-113",
              file: "BhavanisreePaper1.pdf",
            },
            {
              author: "Dr. Bhavanisree",
              title: "Studies on The Prevalence of Hemoglobinopathies and Thalassemia Among Anemia Cases",
              journal: "International Journal on Biological Sciences, Volume 7 (2016), Pages: 20-27",
              file: "BhavanisreePaper2.pdf",
            },
            {
              author: "Mr. Avinash Shanmugasundaram",
              title: "Alterations of liver function tests in diabetic obese and nonobese individuals",
              journal: "Biomedicine, Volume 41 (2021), Pages: 781-786",
              file: "AvinashPaper1.pdf",
            }
          ].map((paper, index) => (
            <motion.div
              key={index}
              variants={slideInLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
              className="mb-8 border-l-4 border-[#861FD2] pl-6"
            >
              <h3 className="font-bold text-2xl text-white mb-2">{paper.title}</h3>
              <p className="text-gray-400">{paper.journal}</p>
              <p className="text-gray-300"><strong>Author:</strong> {paper.author}</p>
              <a href={`/assets/files/${paper.file}`} 
              className="text-[#66CC99] hover:text-[#861FD2] font-bold"
              target="_blank" rel="noopener noreferrer">
                Download Research Paper ↗
              </a>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
    </>
  );
};

export default AboutDetailed; 