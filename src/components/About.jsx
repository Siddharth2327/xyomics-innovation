import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl text-center md:text-5xl font-bold mb-4 text-white bg-clip-text ">
            About
          </h2>
          <div className="w-14 h-1 bg-[#861FD2] mx-auto mb-6 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Advancing Biotechnology, Animal Science, and Molecular Genetics
            </h3>
            <p className="text-lg mb-6">
              At Xyomics innovation, we are dedicated to empowering industries with 
              cutting-edge solutions in biotechnology, animal science, and molecular genetics. 
              We specialize in providing customized services to industries, helping them 
              leverage scientific advancements for growth and innovation.
            </p>
            <p className="text-lg mb-6">
              For students, we offer expert guidance and support in research projects 
              related to poultry farming, aquaculture, and veterinary sciences, ensuring 
              they gain practical exposure and in-depth knowledge.
            </p>
            <Link 
              to="/about" 
              className="text-[#66CC99] hover:text-[#861FD2] flex items-center gap-2 transition"
            >
              Learn more about us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-gradient-to-r from-[#861FD2] to-[#66CC99]   p-10 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-300 mt-1">✓</span>
                <div>
                  <h4 className="font-bold">Industry-Focused Expertise</h4>
                  <p>Tailored solutions for businesses in animal science and biotechnology.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 mt-1">✓</span>
                <div>
                  <h4 className="font-bold">Faster Turnaround Time</h4>
                  <p>We reduce waiting times by delivering reports efficiently without compromising accuracy.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 mt-1">✓</span>
                <div>
                  <h4 className="font-bold">Student-Centered Support</h4>
                  <p>Comprehensive guidance to help students excel in their research.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 mt-1">✓</span>
                <div>
                  <h4 className="font-bold">Innovative Approach</h4>
                  <p>Scientific advancements applied to real-world challenges.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;