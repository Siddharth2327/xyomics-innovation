import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Award, Users, Clock, ExternalLink, FileText } from 'lucide-react';
import BioInformaticsImage from '../assets/images/ModuleImages/BioInformatics.jpg';
import MicrobiologyImage from '../assets/images/ModuleImages/MicroOrganism.jpg';
import MolecularBiologyImage from '../assets/images/ModuleImages/MolecularBiology.jpg';
import ProteinBiologyImage from '../assets/images/ModuleImages/ProteinBiology.jpg';
import MolecularDockingImage from '../assets/images/ModuleImages/MolecularDocking.jpg';
const TrainingModule = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Sample training modules data
  const trainingModules = [
    {
      id: 1,
      name: "Basic Bioinformatics",
      price: "2000 INR",
      image: BioInformaticsImage,
      description: "Master the essentials of bioinformatics in this 5-day intensive training—covering databases, tools, primer design, and oligonucleotide synthesis with hands-on learning and certification.",
      duration: "5 days",
      students: "2.5k+",
      rating: 4.8,
      pdfUrl: "/pdfs/react-fundamentals.pdf"
    },
    {
      id: 2,
      name: "Basic Microbiology",
      price: "2000 INR",
      image: MicrobiologyImage,
      description: "Gain hands-on experience in microbiology with this 5-day practical training—covering aseptic techniques, microscopy, staining, cultivation, and lab safety, culminating in certification.",
      duration: "5 days",
      students: "1.8k+",
      rating: 4.9,
      pdfUrl: "/pdfs/advanced-javascript.pdf"
    },
    {
      id: 3,
      name: "Basic Molecular Biology",
      price: "2500 INR",
      image: MolecularBiologyImage,
      description: "Explore essential molecular biology techniques in this 5-day training—covering GLP, nucleic acid isolation, purification, PCR, and data analysis with hands-on lab experience and certification.",
      duration: "5 days",
      students: "3.2k+",
      rating: 4.7,
      pdfUrl: "/pdfs/fullstack-development.pdf"
    },
    {
      id: 4,
      name: "Basic Protein Biology",
      price: "3000 INR",
      image: ProteinBiologyImage,
      description: "Delve into protein biology with this 6-day practical training—learn protein extraction, quantification, and quality control using SDS-PAGE, with hands-on sessions and certification.",
      duration: "6 days",
      students: "1.9k+",
      rating: 4.6,
      pdfUrl: "/pdfs/ui-ux-design.pdf"
    },
    {
      id: 5,
      name: "Molecular Docking and Dynamics",
      price: "3500 INR",
      image: MolecularDockingImage,
      description: "Advance your skills in drug discovery with this 7-day hands-on training—covering molecular docking, protein-ligand modeling, and MD simulations using tools like AutoDock, Chimera, and GROMACS, ending with certification.",
      duration: "7 days",
      students: "2.1k+",
      rating: 4.8,
      pdfUrl: "/pdfs/mobile-development.pdf"
    }
  ];

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Dr.Debral",
      role: "Senior Scientist",
      company: "Tech Corp",
      rating: 5,
      text: "The hands-on learning approach and cutting-edge research opportunities at XYOMICS have transformed my academic journey. I feel empowered to innovate and make a real-world impact.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Dr. Sowmiya Thiyagarajan",
      role: "Asst. Proffesor",
      company: "xyz college",
      rating: 5,
      text: "What sets XYOMICS apart is its dedication to pioneering research and interdisciplinary collaboration. As an Assistant Professor, I have the opportunity to mentor aspiring researchers and contribute to transformative projects that address critical societal challenges.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "M Siddharth",
      role: "Student",
      company: "REC college",
      rating: 5,
      text:"Being part of a student-centric institution that values experiential learning has given me the confidence to tackle real-world challenges and contribute meaningfully to society.",  
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const handleCardClick = (moduleId) => {
    setClickedCard(clickedCard === moduleId ? null : moduleId);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#861FD2] to-[#66CC99] bg-clip-text text-transparent"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Master New Skills
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your career with our industry-leading training modules
          </motion.p>
        </div>
      </motion.section>

      {/* Training Modules Grid */}
      <motion.section 
        className="py-16 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-[#66CC99]"
            variants={cardVariants}
          >
            Our Training Modules
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingModules.map((module, index) => (
              <motion.div
                key={module.id}
                className="relative group cursor-pointer"
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(module.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => handleCardClick(module.id)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                  {/* Module Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={module.image} 
                      alt={module.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-[#861FD2] text-white px-3 py-1 rounded-full font-bold">
                      {module.price}
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 
                        className="text-xl font-bold text-[#66CC99] hover:text-white transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(module.pdfUrl, '_blank');
                        }}
                      >
                        {module.name}
                      </h3>
                      <FileText className="h-5 w-5 text-gray-400 hover:text-[#66CC99] transition-colors" />
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{module.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{module.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {(hoveredCard === module.id || clickedCard === module.id) && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-[#861FD2]/95 to-[#66CC99]/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold mb-4 text-white">{module.name}</h3>
                        <p className="text-white/90 mb-6 text-sm leading-relaxed">{module.description}</p>
                        
                        <div className="space-y-3">
                          <motion.button
                            className="w-full bg-white text-[#861FD2] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Register Now</span>
                            <ExternalLink className="h-4 w-4" />
                          </motion.button>
                          
                          <motion.button
                            className="w-full border border-white/30 text-white font-semibold py-2 px-6 rounded-full hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(module.pdfUrl, '_blank');
                            }}
                          >
                            View Curriculum
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Flashy Register Button */}
      <motion.section 
        className="py-16 px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.button
            className="relative bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-white font-bold py-6 px-12 rounded-full text-2xl shadow-2xl overflow-hidden group"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(134, 31, 210, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(102, 204, 153, 0.5)",
                "0 0 40px rgba(134, 31, 210, 0.5)",
                "0 0 20px rgba(102, 204, 153, 0.5)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            🚀 Start Your Journey Today!
          </motion.button>
        </div>
      </motion.section>

      {/* Testimonials Carousel */}
      <motion.section 
        className="py-16 px-6 bg-gray-900/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-[#66CC99]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            What Our Students Say
          </motion.h2>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-[#66CC99]"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-[#66CC99]">{testimonials[currentTestimonial].role}</p>
                    <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="bg-[#861FD2] hover:bg-[#861FD2]/80 text-white p-3 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-[#66CC99]' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextTestimonial}
                className="bg-[#861FD2] hover:bg-[#861FD2]/80 text-white p-3 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Model Certificates Section */}
      <motion.section 
        className="py-16 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-[#66CC99]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Industry-Recognized Certificates
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((cert, index) => (
              <motion.div
                key={cert}
                className="bg-gradient-to-br from-[#861FD2]/20 to-[#66CC99]/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 group hover:border-[#66CC99]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-[#861FD2] to-[#66CC99] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Certificate of Excellence</h3>
                <p className="text-gray-400">
                  Get internationally recognized certificates upon successful completion of our training modules.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default TrainingModule;