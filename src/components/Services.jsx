import React, { useState, useEffect } from 'react';
import backdrop from '../assets/images/ServicesBackdrop.png';


const Services = () => {
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
        "Veterinary diagnostic services"
      ]
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
        "Career guidance in animal science fields"
      ]
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
        "Industry-specific white papers"
      ]
    }
  ];

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    if(isHovering==true) return; // no slide showswill happen
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % services.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [services.length,isHovering]);

  // Manually select a card
  const selectCard = (index) => {
    setActiveCard(index);
  };

  return (
    <section
      id="services"
      className="relative bg-black text-white py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backdrop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          filter: "blur(8px)",
          zIndex: 0,
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">What We Offer</h2>
        <div className="w-40 h-1 bg-[#861FD2] mx-auto mb-6 rounded-full"></div>

        {/* Card Selector Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => selectCard(index)}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
                activeCard === index 
                  ? "bg-gray-800 text-white" 
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
            >
              <span className="relative z-10">{service.title}</span>
              {activeCard === index && (
                <span className="absolute inset-0 bg-gradient-to-r from-[#861FD2] to-[#66CC99] rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </div>

        {/* Cards Container with 3D effect */}
        <div className="relative h-96 perspective"
        onMouseEnter={()=>setisHovering(true)}
        onMouseLeave={()=>setisHovering(false)}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-700 transform-gpu ${
                index === activeCard
                  ? "opacity-100 translate-z-0 rotate-y-0"
                  : index < activeCard
                    ? "opacity-0 -translate-z-32 -rotate-y-12 translate-x-full"
                    : "opacity-0 -translate-z-32 rotate-y-12 -translate-x-full"
              }`}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden"
              }}
            >
              <div className="bg-transparent  rounded-xl p-8 shadow-2xl hover:shadow-purple-900/20 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <span className={`text-4xl ${service.arrow}`}>→</span>
                  <div className="ml-4">
                    <div className="text-7xl font-bold text-white/20 mb-2">{service.id}</div>
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                  </div>
                </div>
                
                <ul className="space-y-4 mt-8">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#861FD2] to-[#66CC99] flex-shrink-0 mt-1"></div>
                      <p className="text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => selectCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeCard 
                ? "bg-gradient-to-r from-[#861FD2] to-[#66CC99] w-8" 
                : "bg-gray-700 hover:bg-white"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;