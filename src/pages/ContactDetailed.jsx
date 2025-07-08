import React, { useEffect, useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const ContactPage = () => {

    useEffect(()=>{
        scrollTo(0,0);
    },[])
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  // Contact information
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Xyomics Innovation India pvt. ltd,\nHIG-24, 1st Main road, Eri scheme,\nMogappair West, Chennai-600037.",
      link: "https://maps.app.goo.gl/oBZrYjobvzdJQjmH6",
      isExternal: true
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "xyomicsinnovations@gmail.com",
      link: "mailto:xyomicsinnovations@gmail.com?subject=Inquiry from Website",
      isExternal: false
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9790756868",
      link: "tel:+919790756868",
      isExternal: false
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Saturday: 9:00 am - 6:00 pm\n",
      link: null,
      isExternal: false
    }
  ];

  // Social media links
  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61575095124350",
      color: "hover:bg-[#861FD2]"
    },
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://www.instagram.com/xyomics_official_/",
      color: "hover:bg-[#66CC99]"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/xyomics-innovation-india-private-limited/about/?viewAsMember=true",
      color: "hover:bg-[#861FD2]"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#861FD2]/20 to-[#66CC99]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-[#66CC99]/20 to-[#861FD2]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
             <span className=" bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text">Get In Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#861FD2] to-[#66CC99] mx-auto mb-6 rounded-full animate-expand"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 animate-fade-in-delay">
              Ready to advance your biotechnology journey? Connect with our team of experts and discover how Xyomics Innovation can help you unlock the potential of molecular genetics.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Contact <span className="bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text">Information</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group animate-fade-in-stagger" style={{ animationDelay: `${index * 0.1}s` }}>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.isExternal ? "_blank" : "_self"}
                        rel={info.isExternal ? "noopener noreferrer" : ""}
                        className="block"
                      >
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:border-[#861FD2]/50 group-hover:bg-gray-800/50 group-hover:transform group-hover:scale-105 group-hover:-translate-y-1">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-gradient-to-r from-[#861FD2]/20 to-[#66CC99]/20 group-hover:from-[#861FD2]/30 group-hover:to-[#66CC99]/30 transition-all duration-300">
                              <info.icon className="w-6 h-6 text-[#66CC99]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-[#861FD2] mb-2 group-hover:text-[#66CC99] transition-colors">
                                {info.title}
                              </h3>
                              <p className="text-gray-300 whitespace-pre-line group-hover:text-white transition-colors">
                                {info.content}
                              </p>
                            </div>
                            {info.isExternal && (
                              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#66CC99] transition-colors group-hover:translate-x-1" />
                            )}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:border-[#861FD2]/50 group-hover:bg-gray-800/50 group-hover:transform group-hover:scale-105 group-hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-full bg-gradient-to-r from-[#861FD2]/20 to-[#66CC99]/20 group-hover:from-[#861FD2]/30 group-hover:to-[#66CC99]/30 transition-all duration-300">
                            <info.icon className="w-6 h-6 text-[#66CC99]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-[#861FD2] mb-2 group-hover:text-[#66CC99] transition-colors">
                              {info.title}
                            </h3>
                            <p className="text-gray-300 whitespace-pre-line group-hover:text-white transition-colors">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12 animate-fade-in-delay">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-r from-[#861FD2] to-[#66CC99] flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </span>
                  <span className="bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text">Connect</span> With Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center transition-all duration-300 hover:border-[#861FD2]/50 ${social.color} overflow-hidden hover:scale-110 hover:rotate-6`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#861FD2]/20 to-[#66CC99]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Send Us a <span className="bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text">Message</span>
                  </h2>
                  <p className="text-gray-400">
                    *Form currently unavailable. Please contact us via &nbsp;
                    <a href='mailto:xyomicsinnovations@gmail.com' className='font-bold hover:underline'>email</a> or &nbsp;
                    <a href='tel:+919790756868' className='font-bold hover:underline'>phone</a>.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#861FD2] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="Enter your full name"
                        />
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#861FD2] transition-colors" />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#861FD2] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="Enter your email"
                        />
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#861FD2] transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#861FD2] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#861FD2] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-400 group-focus-within:text-[#861FD2] transition-colors" />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-[#66CC99] hover:to-[#861FD2] hover:shadow-lg hover:shadow-[#861FD2]/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Us on the <span className="bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-transparent bg-clip-text">Map</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Visit our office in Chennai and experience innovation firsthand. We'd love to meet you!
            </p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 overflow-hidden animate-scale-up hover:border-[#861FD2]/50 transition-all duration-300">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3235772920784!2d80.17259767484332!3d13.07866758724664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52639bf18b7fed%3A0xf272f241b13a4112!2sXyomics%20Innovation!5e0!3m2!1sen!2sin!4v1749319603597!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter brightness-90 hover:brightness-100 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 6rem; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.3s both;
        }
        
        .animate-fade-in-stagger {
          animation: fadeIn 0.6s ease-out both;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out 0.4s both;
        }
        
        .animate-scale-up {
          animation: scaleUp 0.8s ease-out 0.6s both;
        }
        
        .animate-expand {
          animation: expand 1s ease-out 0.5s both;
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
    </div>
  );
};

export default ContactPage;