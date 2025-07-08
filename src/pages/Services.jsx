import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NBSBaby from '../assets/images/ServiceImages/NbsBaby.png';
import metaGen from '../assets/images/ServiceImages/metagenomics.png'
import ngs from '../assets/images/ServiceImages/Ngs.png'
import micro from '../assets/images/ServiceImages/MicroBio.png'
import {
    Clock,
    Users,
    Star,
    ExternalLink,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Microscope,
    FlaskConical,
    Dna,
    TestTube,
    Brain,
    Baby,
    Database
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);

    // State to manage hovered and clicked cards
    const [hoveredCard, setHoveredCard] = useState(null);
    const [clickedCard, setClickedCard] = useState(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const navigate = useNavigate();
    // Sample services data
    const services = [
        {
            id: 1,
            name: "Newborn Screening (NBS) Panels",
            icon: Baby,
            price: "Quote on Request",
            image: NBSBaby,
            description: "Fast, affordable metabolic and endocrine screening using a simple heel-prick (dried blood spot) method.",
            duration: "2 days",
            projects: "20+",
            rating: 5.0,
            RouteLink: "/service/NBS-Panels"
        },
        {
            id: 2,
            name: "Microbiology",
            icon: Microscope,
            price: "Quote on Request",
            image: micro,
            description: "Comprehensive microbiology services including bacterial identification, antimicrobial testing, culture analysis, and contamination assessment with certified protocols.",
            duration: "2-5 weeks",
            projects: "120+",
            rating: 4.7,
            // RouteLink: "/service"
        },
        {
            id: 3,
            name: "Metagenomics",
            icon: Brain,
            price: "Quote on Request",
            image: metaGen,
            description: "Tailored research solutions for unique projects including experimental design, data analysis, manuscript preparation, and collaborative research partnerships.",
            duration: "Variable",
            projects: "50+",
            rating: 5.0,
            // RouteLink: "/service"
        },
        {
            id: 4,
            name: "Next Generation Sequencing",
            icon: Dna,
            price: "Quote on Request",
            image: ngs,
            description: "Next-Generation Sequencing (NGS) is a high-throughput DNA sequencing technology that enables rapid sequencing of entire genomes, exomes, or targeted regions.",
            duration: "Variable",
            projects: "50+",
            rating: 5.0,
            // RouteLink: "/service"
        }
    ];

    // Sample testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Dr.Debral",
            role: "Ph.D. Scholar",
            company: "SRM University",
            rating: 5,
            text: "The hands-on learning approach and cutting-edge research opportunities at XYOMICS have transformed my academic journey. I feel empowered to innovate and make a real-world impact.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "Dr. Sowmiya Thiyagarajan",
            role: "Asst. Proffesor",
            company: "SRIHER",
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
            text: "Being part of a student-centric institution that values experiential learning has given me the confidence to tackle real-world challenges and contribute meaningfully to society.",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
        }
    ];

    const handleCardClick = (serviceId) => {
        // Navigate to individual service page (to be implemented later)
        setClickedCard(clickedCard === serviceId ? null : serviceId);

        const clickedService = services.find(service => service.id === serviceId);
        if (clickedService?.RouteLink) {
            navigate(clickedService.RouteLink);
        }
        else {
            alert("Contact us for details")
            navigate('/contact')
        }
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
                        Our Services
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Comprehensive research solutions tailored to your scientific needs
                    </motion.p>
                </div>
            </motion.section>

            {/* Services Grid */}
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
                        What We Offer
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;

                            return (
                                <motion.div
                                    key={service.id}
                                    className="relative group cursor-pointer"
                                    variants={cardVariants}
                                    onHoverStart={() => setHoveredCard(service.id)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                    onClick={() => handleCardClick(service.id)}
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                                        {/* Service Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                            {/* Price Badge */}
                                            <div className="absolute top-4 right-4 bg-[#861FD2] text-white px-3 py-1 rounded-full font-bold text-sm">
                                                {service.price}
                                            </div>

                                            {/* Icon */}
                                            <div className="absolute top-4 left-4 bg-[#66CC99] text-black p-2 rounded-full">
                                                <IconComponent className="h-5 w-5" />
                                            </div>
                                        </div>

                                        {/* Basic Info */}
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-bold text-[#66CC99] hover:text-white transition-colors cursor-pointer">
                                                    {service.name}
                                                </h3>
                                            </div>

                                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                                                <div className="flex items-center space-x-1">
                                                    <Clock className="h-4 w-4" />
                                                    <span>{service.duration}</span>
                                                </div>
                                                {/* <div className="flex items-center space-x-1">
                                                    <Users className="h-4 w-4" />
                                                    <span>{service.projects}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                    <span>{service.rating}</span>
                                                </div> */}
                                            </div>
                                        </div>

                                        {/* Expanded Content */}
                                        <AnimatePresence>
                                            {(hoveredCard === service.id || clickedCard === service.id) && (
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-b from-[#861FD2]/95 to-[#66CC99]/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="flex items-center space-x-3 mb-4">
                                                        <IconComponent className="h-8 w-8 text-white" />
                                                        <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                                                    </div>

                                                    <p className="text-white/90 mb-4 text-sm leading-relaxed">{service.description}</p>

                                                    <div className="space-y-3">
                                                        

                                                        <motion.button
                                                            className="w-full border border-white/30 text-white font-semibold py-2 px-6 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
                                                            whileHover={{ scale: 1.05 }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleCardClick(service.id);

                                                            }}
                                                        >
                                                            <span>Learn More</span>
                                                            <ArrowRight className="h-4 w-4" />
                                                        </motion.button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                className="py-20 px-6 bg-gray-900/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-16 text-[#66CC99]"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        What Our Clients Say
                    </motion.h2>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center mb-6">
                                    <img
                                        src={testimonials[currentTestimonial].avatar}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-16 h-16 rounded-full mr-4 object-cover"
                                    />
                                    <div>
                                        <h4 className="text-xl font-bold text-[#66CC99]">
                                            {testimonials[currentTestimonial].name}
                                        </h4>
                                        <p className="text-gray-400">
                                            {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                                        </p>
                                        <div className="flex items-center mt-1">
                                            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed italic">
                                    "{testimonials[currentTestimonial].text}"
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-[#861FD2] text-white p-3 rounded-full hover:bg-[#66CC99] transition-colors"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-[#861FD2] text-white p-3 rounded-full hover:bg-[#66CC99] transition-colors"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Testimonial Indicators */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-[#66CC99]' : 'bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Call to Action Section */}
            <motion.section
                className="py-20 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl p-2 md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#861FD2] to-[#66CC99] bg-clip-text text-transparent"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Ready to Start Your Project?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-300 mb-8 "
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Let's discuss how we can help you achieve your research goals
                    </motion.p>
                    <motion.button
                        className="bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        onClick={() => navigate("/contact")}
                    >
                        Contact Us Today
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
};

export default ServicesPage;