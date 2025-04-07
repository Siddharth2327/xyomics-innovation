import React, { useEffect, useRef } from 'react';

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
  const location = "Crescent Incubation and Innovation Block I, S Abdul Rahman Crescent University, near Vandalor, Chennai, Peerakankaranai, TamilNadu 600048";
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
                  <p className="text-sm md:text-base hover:text-[#66CC99]">CIIC block, Crescent college,<br />near Vandaloor Zoo,<br/> Chennai-600048.</p>
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
                <a href="https://www.facebook.com/profile.php?id=61575095124350" className="group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#861FD2]/30 flex items-center justify-center transform transition-all duration-300 group-hover:bg-[#861FD2] group-hover:scale-110 group-hover:rotate-6">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#66CC99] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </div>
                </a>
                {/* instagram */}
                <a href="https://www.instagram.com/xyomics_official/" className="group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#861FD2]/30 flex items-center justify-center transform transition-all duration-300 group-hover:bg-[#66CC99] group-hover:scale-110 group-hover:rotate-6">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#66CC99] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </a>
                {/* twitter */}
                <a href="#" className="group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#861FD2]/30 flex items-center justify-center transform transition-all duration-300 group-hover:bg-[#66CC99] group-hover:scale-110 group-hover:-rotate-6">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#66CC99] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                </a>
                {/* linkedin */}
                <a href="#" className="group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#861FD2]/30 flex items-center justify-center transform transition-all duration-300 group-hover:bg-[#861FD2] group-hover:scale-110 group-hover:rotate-6">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#66CC99] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
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