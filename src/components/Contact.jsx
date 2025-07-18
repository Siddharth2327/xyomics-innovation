import React, { useEffect, useRef } from 'react';
import {
  Linkedin,
  Youtube,
  Instagram,
  Facebook
} from 'lucide-react'

const Contact = () => {
  // Refs for animation elements
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const socialRef = useRef(null);

  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    if (titleRef.current) observer.observe(titleRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    if (socialRef.current) observer.observe(socialRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
      if (socialRef.current) observer.unobserve(socialRef.current);
    };
  }, []);

  // Location details for Google Maps
  const location = "Selsoft Tech Private Limited, 8, 24, Mogappair Eri Scheme, Mogappair East, Chennai, Tamil Nadu 600037";
  const encodedLocation = encodeURIComponent(location);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;

  // Email details
  const email = "xyomicsinnovations@gmail.com";
  const emailSubject = "Inquiry from Website";
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <section id="contact" className="bg-black text-white py-16 md:py-24 px-4 md:px-16 relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-black to-transparent opacity-70 animate-pulse"></div>

      {/* Content container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with animation */}
        <div
          ref={titleRef}
          className="text-center mb-10 md:mb-16 opacity-0 transition-all duration-700 transform translate-y-10"
          style={{ '--tw-translate-y': '2.5rem' }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text">
            Get In Touch
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[#861FD2] mx-auto mb-4 md:mb-6 rounded-full"></div>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-100">
            Have questions or looking for collaboration opportunities?
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Contact information with staggered animation */}
          <div
            ref={infoRef}
            className="flex flex-col rounded-2xl p-6 md:p-8 backdrop-blur-sm bg-black border border-[#861FD2]/20 shadow-lg shadow-[#861FD2]/5 opacity-0 transition-all duration-700 delay-300 transform -translate-x-10"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 text-[#861FD2]">
              <span className="inline-block w-8 h-8 rounded-full bg-[#66CC99] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Contact Information
            </h3>

            <div className="space-y-6">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <div className="p-3 rounded-full bg-[#861FD2]/20 text-[#66CC99] group-hover:bg-[#861FD2] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#861FD2] group-hover:text-[#66CC99] transition-colors">Our Location</h4>
                  <p className="text-sm md:text-base hover:text-[#66CC99]">Xyomics Innovation India pvt. ltd,<br />HIG-24, 1st Main road, Eri scheme,<br /> Mogappair West, Chennai-600037.</p>
                </div>
              </a>

              <a
                href={mailtoUrl}
                className="flex items-start gap-4 group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <div className="p-3 rounded-full bg-[#861FD2]/20 text-[#66CC99] group-hover:bg-[#861FD2] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#861FD2] group-hover:text-[#66CC99] transition-colors">Email Us</h4>
                  <p className="text-sm md:text-base hover:text-[#66CC99]">{email}</p>
                </div>
              </a>

              <a
                href="tel:+919790756868"
                className="flex items-start gap-4 group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <div className="p-3 rounded-full bg-[#861FD2]/20 text-[#66CC99] group-hover:bg-[#861FD2] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#861FD2] group-hover:text-[#66CC99] transition-colors">Call Us</h4>
                  <p className="text-sm md:text-base hover:text-[#66CC99]">+91 9790756868</p>
                </div>
              </a>
            </div>

            {/* Social Media Section */}
            <div
              ref={socialRef}
              className="mt-8 md:mt-12 opacity-0 transition-all duration-700 delay-500 transform translate-y-10"
            >
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-5 flex items-center gap-3 text-[#861FD2]">
                <span className="inline-block w-7 md:w-8 h-7 md:h-8 rounded-full bg-[#66CC99] flex items-center justify-center">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Connect With Us
              </h3>
              <div className="flex gap-3 md:gap-4">
                {/* facebook */}
                <a href="https://www.facebook.com/profile.php?id=61575095124350" target='_blank' className="group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full  flex items-center justify-center transform transition-all duration-300 group-hover:bg-[#1877F2] group-hover:scale-110 group-hover:rotate-6">
                    <Facebook/>
                  </div>
                </a>
                {/* instagram */}
                <a href="https://www.instagram.com/xyomics_official_/" target='_blank' className="group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full  flex items-center justify-center transform transition-all duration-300 group-hover:bg-[#E1306C] group-hover:scale-110 group-hover:rotate-6">
                    <Instagram/>
                  </div>
                </a>
                {/* linkedin */}
                <a href="https://www.linkedin.com/company/xyomics-innovation-india-private-limited/about/?viewAsMember=true" target='_blank' className="group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full  flex items-center justify-center transform transition-all duration-300 group-hover:bg-[#0077B5] group-hover:scale-110 group-hover:rotate-6">
                    <Linkedin/>
                  </div>
                </a>
                {/* Youtube */}
                <a href="https://www.youtube.com/@XYOMICSInnovations/" target='_blank' className="group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:bg-[#FF0000] group-hover:scale-110 group-hover:rotate-6">
                    <Youtube/>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Empty second column to maintain layout */}
          <div className="hidden md:block"></div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;