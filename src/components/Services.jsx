const Services = () => {
    return (
      <section id="services" className="bg-black text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="relative">
              <div className="absolute -left-2 top-0">
                <span className="text-green-400 text-4xl">→</span>
              </div>
              <div className="ml-8">
                <div className="text-7xl font-bold text-white/50 mb-4">01</div>
                <h3 className="text-2xl font-bold mb-3">For Industries</h3>
                <ul className="space-y-2">
                  <li>Biotechnology-based solutions for animal health and productivity</li>
                  <li>Molecular genetics research and applications</li>
                  <li>Consulting services for poultry farming</li>
                  <li>Innovation in aquaculture systems</li>
                  <li>Veterinary diagnostic services</li>
                </ul>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="relative">
              <div className="absolute -left-2 top-0">
                <span className="text-blue-400 text-4xl">→</span>
              </div>
              <div className="ml-8">
                <div className="text-7xl font-bold text-white/50 mb-4">02</div>
                <h3 className="text-2xl font-bold mb-3">For Students</h3>
                <ul className="space-y-2">
                  <li>Guidance and mentorship for academic projects</li>
                  <li>Research support in molecular genetics</li>
                  <li>Hands-on training in biotechnology</li>
                  <li>Access to industry-relevant case studies</li>
                  <li>Career guidance in animal science fields</li>
                </ul>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="relative">
              <div className="absolute -left-2 top-0">
                <span className="text-purple-400 text-4xl">→</span>
              </div>
              <div className="ml-8">
                <div className="text-7xl font-bold text-white/50 mb-4">03</div>
                <h3 className="text-2xl font-bold mb-3">Research & Reports</h3>
                <ul className="space-y-2">
                  <li>Customized research services</li>
                  <li>Detailed reports with data analysis</li>
                  <li>Trend forecasting in animal science</li>
                  <li>Biotechnology implementation guides</li>
                  <li>Industry-specific white papers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;