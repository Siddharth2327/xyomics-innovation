const AboutDetailed = () => {
    return (
      <div className="pt-20 bg-black text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Xyomics Innovations</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2025, Xyomics Innovations emerged from a vision to bridge the gap between 
              cutting-edge biotechnology research and practical applications in animal science. 
              Our founder, with over 21 years of experience in molecular genetics and animal biotechnology, 
              recognized the need for specialized services that could help both industries and students 
              leverage scientific advancements.
            </p>
            <p className="text-lg">
              -- content has to be pasted here --
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">Our Team</h2>
            <p className="text-lg mb-6">
              Our team consists of highly qualified professionals with extensive experience in:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Molecular genetics and genomics</li>
              <li>Animal biotechnology</li>
              <li>Veterinary sciences</li>
              <li>Poultry farming and aquaculture</li>
              <li>Research methodology and data analysis</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">Our Approach</h2>
            <p className="text-lg mb-4">
              At Xyomics Innovations, we believe in a collaborative approach that combines scientific 
              rigor with practical solutions. Our methodology involves:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-lg">
              <li>
                <span className="font-bold">Understanding client needs</span> - We begin each project with a 
                thorough assessment of specific requirements and challenges.
              </li>
              <li>
                <span className="font-bold">Research-based solutions</span> - Our team applies the latest 
                scientific research to develop innovative solutions.
              </li>
              <li>
                <span className="font-bold">Implementation support</span> - We provide comprehensive guidance 
                throughout the implementation process.
              </li>
              <li>
                <span className="font-bold">Continuous improvement</span> - We monitor results and make 
                adjustments to ensure optimal outcomes.
              </li>
            </ol>
          </section>
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">Research Papers & Publications</h2>
            <p className="text-lg mb-6">
              Our team regularly contributes to scientific literature in the fields of biotechnology 
              and animal science. Some of our recent publications include:
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-xl">Advancements in Molecular Genetics for Poultry Health Management</h3>
                <p className="text-gray-300">Journal of Animal Biotechnology, 2024</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-xl">Innovative Approaches to Aquaculture Systems Using Biotechnology</h3>
                <p className="text-gray-300">International Journal of Fisheries Science, 2023</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-xl">The Future of Veterinary Diagnostics: Molecular Tools and Technologies</h3>
                <p className="text-gray-300">Veterinary Science Review, 2023</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default AboutDetailed;