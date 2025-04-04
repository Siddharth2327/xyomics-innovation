const MissionVision = () => {
    return (
      <section className="bg-gradient-to-r from-blue-900 to-black text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Mission & Vision</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h3>
              <p className="text-lg mb-4">
                Our mission is to drive scientific progress by bridging the gap between research 
                and real world applications. We strive to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <p>Provide specialized services to industries, enhancing efficiency and innovation.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <p>Support students with research projects, helping them gain hands-on experience.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <p>Foster collaborations that lead to advancements in animal science and biotechnology.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Vision</h3>
              <p className="text-lg mb-4">
                We envision a future where scientific innovation transforms industries and 
                education, creating sustainable solutions and advancing knowledge in biotechnology 
                and animal sciences.
              </p>
              <p className="text-lg">
                By 2030, we aim to be the leading provider of specialized biotechnology solutions 
                in the animal science sector, recognized for our commitment to excellence, innovation, 
                and educational support.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MissionVision;
  