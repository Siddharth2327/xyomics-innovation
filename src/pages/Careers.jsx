import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import PageTitle from '../components/PageTitle';

const Careers = () => {
  useEffect(()=>{
    scrollTo(0, 0); // Scroll to top on component mount 
  },[]);
  return (
    <>
    <PageTitle title= "Xyomics Innovation | Careers"/>
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Icon */}
        <motion.div
          className="bg-gradient-to-br from-[#861FD2] to-[#66CC99] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Briefcase className="h-12 w-12 text-white" />
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#861FD2] to-[#66CC99] bg-clip-text text-transparent"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Careers
        </motion.h1>

        {/* Message */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Currently No Opportunities Available
        </motion.p>

        {/* Subtitle */}
        <motion.p 
          className="text-lg text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          If You Are Interested, Please do drop us an email at xyomicsinnovations@gmail.com
        </motion.p>
      </motion.div>
    </div>
    </>
  );
};

export default Careers;