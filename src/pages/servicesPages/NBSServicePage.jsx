import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Download,
    Phone,
    Mail,
    Clock,
    Shield,
    Heart,
    FileText,
    CheckCircle,
    Baby
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NBSServicePage = () => {
    const [selectedTests, setSelectedTests] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const panels = [
        {
            name: "Basic NBS",
            disorders: "CAH, CH, G6PD",
            price: "₹900/-",
            tests: 3,
            description: "Essential screening for the most common metabolic disorders",
            test: "Neonatal 17OH Progesterone, Neonatal TSH, Neonatal G6PD"
        },
        {
            name: "NBS 5",
            disorders: "CAH, CH, G6PD, Galactosemia, Phenyalaninemia",
            price: "₹1500/-",
            tests: 5,
            description: "Comprehensive screening including metabolic disorders",
            test: "Neonatal 17OH Progesterone, Neonatal TSH, Neonatal G6PD, Neonatal Galatose, Neonatal Phenylalanine"

        },
        {
            name: "NBS 7",
            disorders: "CAH, CH, G6PD, Galactosemia, Phenyalaninemia, Biotinidase, Cystic Fibrosis",
            price: "₹2100/-",
            tests: 7,
            description: "Complete screening panel for maximum protection",
            popular: true,
            test: "Neonatal 17OH Progesterone, Neonatal TSH, Neonatal G6PD, Neonatal Galatose, Neonatal Phenylalanine, Neonatal Biotinidase, Neonatal IRT"

        }
    ];

    const testDetails = [
        {
            id: 1,
            name: "NEONATAL 17OH PROGESTERONE (CAH)",
            description: "Detects Congenital Adrenal Hyperplasia, a hormone disorder affecting salt balance.",
            price: "₹300/-"
        },
        {
            id: 2,
            name: "NEONATAL TSH (CONGENITAL HYPOTHYROIDISM)",
            description: "Ensures proper thyroid function to prevent intellectual disability and growth delay.",
            price: "₹300/-"
        },
        {
            id: 3,
            name: "NEONATAL G6PD",
            description: "Early diagnosis prevents caused by hemolytic anemia.",
            price: "₹300/-"
        },
        {
            id: 4,
            name: "NEONATAL GALACTOSE (GALACTOSEMIA)",
            description: "Identifies babies who cannot metabolize milk sugar — untreated, it can lead to liver damage.",
            price: "₹300/-"
        },
        {
            id: 5,
            name: "NEONATAL PHENYLALANINE (PHENYLKETONURIA)",
            description: "Avoid severe neurological damage and prevents mental retardation.",
            price: "₹300/-"
        },
        {
            id: 6,
            name: "NEONATAL BIOTINIDASE",
            description: "Prevents seizures, hair loss, and developmental delay through early vitamin therapy.",
            price: "₹300/-"
        },
        {
            id: 7,
            name: "NEONATAL IRT (CYSTIC FIBROSIS)",
            description: "Detects a life-limiting genetic disorder affecting lungs and digestion.",
            price: "₹300/-"
        }
    ];

    const handleTestSelection = (testId) => {
        setSelectedTests(prev => {
            if (prev.includes(testId)) {
                return prev.filter(id => id !== testId);
            } else {
                return [...prev, testId];
            }
        });
    };

    const getTotalPrice = () => {
        return selectedTests.length * 300;
    };

    const handleGetQuote = () => {
        if (selectedTests.length === 0) {
            alert('Please select at least one test to get a quote.');
            return;
        }

        const selectedTestNames = testDetails
            .filter(test => selectedTests.includes(test.id))
            .map(test => test.name);

        const TotalPrice = getTotalPrice();

        //  quote logic
        // console.log('Selected tests:', selectedTestNames);
        // console.log('Total price:', getTotalPrice());
        const subject = encodeURIComponent(`Quote Request for: ${selectedTestNames.join(', ')}`);
        const body = encodeURIComponent(`Hello, \n\nI would like to get quote for the following tests:\n\n${selectedTestNames.join('\n')}\n\nTotal Estimated Price: ₹${TotalPrice} \n\n Regards, \n\n [Your Name]`)
        const mailtolink = `mailto:info@xyomics.in?subject=${subject}&body=${body}`;
        window.location.href = mailtolink;
        alert("Please Fill up Your name at [Your Name] Placeholder");
        if (selectedTests) setSelectedTests([])
    };

    const handlePanelQuote = (panel) => {
        const subject = encodeURIComponent(`Quote Request for: ${panel.name}`);
        const body = encodeURIComponent(
            `Hello,\n\nI would like to get a quote for the following panel:\n\n` +
            `Panel Name: ${panel.name}\n` +
            `Test Covered: ${panel.test}\n` +
            `Disorders Covered: ${panel.disorders}\n` +
            // `Number of Tests: ${panel.tests}\n` +
            `Estimated Price: ${panel.price}\n\n` +
            `Regards,\n[Your Name]`
        );
        const mailtolink = `mailto:info@xyomics.in?subject=${subject}&body=${body}`;
        window.location.href = mailtolink;
        alert("Please Fill up Your name at [Your Name] Placeholder");
    }

    const handleContact = () => {
        // Navigate to contact page 
        navigate("/contact")
    };

    const handleNavigation = () => {
        // Navigate back to services 
        navigate("/service")
    };

    return (
        <div className="min-h-screen bg-black text-white bg-black">
            {/* Navigation Header */}
            {/* <div className=" bg-black/95 backdrop-blur-sm ">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    
                </div>
            </div> */}

            {/* Hero Section */}
            <motion.section
                className="py-16 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto m-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <button
                                onClick={handleNavigation}
                                className="flex items-center space-x-2 text-[#66CC99] hover:text-white transition-colors"
                            >
                                <ArrowLeft className="h-5 w-5" />
                                <span>Back to Services</span>
                            </button>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-[#861FD2] to-[#66CC99] bg-clip-text text-transparent">
                                    Newborn Screening
                                </span>
                                <br />
                                <span className="text-white">(NBS) Panels</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                Secure your baby's future health with timely testing. Every newborn deserves the healthiest start.
                            </p>
                            <div className="bg-gradient-to-r from-[#861FD2]/20 to-[#66CC99]/20 rounded-2xl p-6 border border-[#66CC99]/30">
                                <h3 className="text-[#66CC99] font-bold text-lg mb-2">Why Newborn Screening?</h3>
                                <p className="text-gray-300">
                                    <strong>Test early. Detect early. Treat early.</strong><br />
                                    NBS detects rare but serious health conditions before symptoms appear — helping prevent long-term complications. A few drops of blood can make all the difference.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="bg-gradient-to-br from-[#861FD2]/20 to-[#66CC99]/20 rounded-3xl p-8 border border-gray-700">
                                <img
                                    src="https://images.unsplash.com/photo-1533483595632-c5f0e57a1936?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld2Jvcm58ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000"
                                    alt="Newborn care"
                                    className="w-full h-64 object-cover rounded-2xl mb-6"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    {/* <div className="text-center">
                                        <div className="flex items-center justify-center space-x-2 mb-2">
                                            <Clock className="h-5 w-5 text-[#66CC99]" />
                                            <span className="text-[#66CC99] font-semibold">TAT</span>
                                        </div>
                                        <p className="text-white">2 Days</p>
                                    </div> */}
                                    <div className="text-center">
                                        <div className="flex items-center justify-center space-x-2 mb-2">
                                            <Shield className="h-5 w-5 text-[#66CC99]" />
                                            <span className="text-[#66CC99] font-semibold">Sample Type</span>
                                        </div>
                                        <p className="text-white">Dried Blood Spot</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Panels Section */}
            <motion.section
                className="py-16 px-6 bg-gray-900/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-12 text-[#66CC99]"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Choose Your Panel
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {panels.map((panel, index) => (
                            <motion.div
                                key={panel.name}
                                className={`relative bg-gray-800 rounded-2xl p-6 border-2 transition-all duration-300 hover:border-[#66CC99] ${panel.popular
                                        ? 'border-[#861FD2] ring-2 ring-[#861FD2]/20'
                                        : 'border-gray-700'
                                    }`}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                {panel.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-[#66CC99] mb-2">{panel.name}</h3>
                                    <div className="text-3xl font-bold text-white mb-2">{panel.price}</div>
                                    <p className="text-gray-400 text-sm">{panel.tests} Tests</p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-gray-300 text-sm mb-4">{panel.description}</p>
                                    <div className="bg-gray-700/50 rounded-lg p-4">
                                        <h4 className="text-[#66CC99] font-semibold mb-2">Test Covered:</h4>
                                        <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                                            {panel.test.split(',').map((test, i) => (
                                                <li key={i}>
                                                    {
                                                        test
                                                    }
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <motion.button
                                    className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${panel.popular
                                            ? 'bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-white hover:shadow-lg'
                                            : 'border border-[#66CC99] text-[#66CC99] hover:bg-[#66CC99] hover:text-black'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handlePanelQuote(panel)}
                                >
                                    Get Quote
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>


            {/* How It Works Section */}
            <motion.section
                className="py-16 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[#66CC99]">How It Works</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="text-center"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <div className="bg-gradient-to-br from-[#861FD2] to-[#66CC99] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">01</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#66CC99] mb-2">Sample Collection</h3>
                            <p className="text-gray-300">A simple heel prick within 48–72 hours of birth.</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                        >
                            <div className="bg-gradient-to-br from-[#861FD2] to-[#66CC99] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">02</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#66CC99] mb-2">Dried Blood Spot (DBS)</h3>
                            <p className="text-gray-300">The sample is safely preserved for analysis in Whattman 903 filter paper.</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            <div className="bg-gradient-to-br from-[#861FD2] to-[#66CC99] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">03</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#66CC99] mb-2">Fast & Accurate Results</h3>
                            <p className="text-gray-300">Delivered in 2 working days to your pediatrician or hospital.</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Test Details Section with Custom Selection */}
            <motion.section
                className="py-16 px-6 bg-gray-900/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-[#66CC99]">Custom Test Selection</h2>
                    <p className="text-center text-gray-300 mb-12">Select individual tests to create your custom screening panel</p>

                    <div className="space-y-4 mb-8">
                        {testDetails.map((test, index) => (
                            <motion.div
                                key={test.id}
                                className={`bg-gray-800 rounded-lg p-6 border-2 transition-all cursor-pointer ${selectedTests.includes(test.id)
                                    ? 'border-[#66CC99] bg-[#66CC99]/10'
                                    : 'border-gray-700 hover:border-[#66CC99]/50'
                                    }`}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 2 + index * 0.1 }}
                                onClick={() => handleTestSelection(test.id)}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-4 flex-1">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedTests.includes(test.id)}
                                                onChange={() => handleTestSelection(test.id)}
                                                className="w-5 h-5 text-[#66CC99] bg-gray-700 border-gray-600 rounded focus:ring-[#66CC99] focus:ring-2"
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        </div>
                                        <div className="bg-[#66CC99] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                            {test.id}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[#66CC99] font-bold mb-2">{test.name}</h3>
                                            <p className="text-gray-300 text-sm">{test.description}</p>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <span className="text-[#66CC99] font-bold text-lg">{test.price}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Selected Tests Summary and Get Quote */}
                    <motion.div
                        className="bg-gradient-to-r from-[#861FD2]/20 to-[#66CC99]/20 rounded-2xl p-6 border border-gray-700"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.8 }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold text-[#66CC99] mb-2">
                                    Selected Tests: {selectedTests.length}
                                </h3>
                                <p className="text-gray-300">
                                    Total Price: <span className="text-[#66CC99] font-bold text-xl">₹{getTotalPrice()}/-</span>
                                </p>
                            </div>
                            <div className='p-2'>
                                <motion.button
                                    onClick={handleGetQuote}
                                    className="mt-4 md:mt-0 bg-gradient-to-r from-[#861FD2] to-[#66CC99] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: selectedTests.length > 0 ? 1.05 : 1 }}
                                    whileTap={{ scale: selectedTests.length > 0 ? 0.95 : 1 }}
                                    disabled={selectedTests.length === 0}
                                >
                                    Get Quote
                                </motion.button>
                                <motion.button
                                    onClick={() => setSelectedTests([])}
                                    className="mt-4 ml-2 md:mt-0 border border-[#66CC99] text-[#66CC99] hover:bg-[#66CC99] hover:text-black text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: selectedTests.length > 0 ? 1.05 : 1 }}
                                    whileTap={{ scale: selectedTests.length > 0 ? 0.95 : 1 }}
                                    disabled={selectedTests.length === 0}
                                >
                                    Clear
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Action Buttons Section */}
            <motion.section
                className="py-16 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.5 }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-[#861FD2]/20 to-[#66CC99]/20 rounded-3xl p-8 border border-gray-700">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#861FD2] to-[#66CC99] bg-clip-text text-transparent">
                                Ready to Secure Your Baby's Future?
                            </h2>
                            <p className="text-gray-300">Get started with our comprehensive newborn screening panels today.</p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-around gap-4">
                            <motion.button
                                onClick={handleContact}
                                className="border-2 border-[#66CC99] text-[#66CC99] font-bold py-4 px-6 rounded-full hover:bg-[#66CC99] hover:text-black transition-all flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Phone className="h-5 w-5" />
                                <span>Contact Us</span>
                            </motion.button>

                            <motion.button
                                className="border-2 border-[#861FD2] text-[#861FD2] font-bold py-4 px-6 rounded-full hover:bg-[#861FD2] hover:text-white transition-all flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="h-5 w-5" />
                                <a href='/assets/files/serviceFiles/NBSPanel.pdf'
                                    target='blank'
                                    rel='noopener noreferrer'>
                                    Download PDF
                                </a>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default NBSServicePage;