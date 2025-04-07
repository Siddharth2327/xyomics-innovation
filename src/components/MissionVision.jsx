import React from "react";
import topLeftImage from "../assets/images/HeroSectionBackdrop.png";
import bottomRightImage from "../assets/images/HeroSectionBackdrop.png";

const MissionVision = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl  mx-auto">
        {/* <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Our Mission & Vision
        </h2> */}

        <div className="relative">
          {/* Top Left - Image (positioned higher) */}
          <div className="md:absolute md:top-0 md:left-0 md:w-[48%] bg-black bg-opacity-50 rounded-lg overflow-hidden mb-8 md:mb-0 md:transform md:-translate-y-12">
            <img
              src={topLeftImage}
              alt="Top Left Illustration"
              className="object-cover w-full h-full aspect-video"
            />
          </div>

          {/* Top Right - Mission (positioned slightly lower than top left) */}
          <div className="md:absolute md:top-0 md:right-0 md:w-[48%] bg-black bg-opacity-50 p-8 rounded-lg mb-8 md:mb-0 md:transform md:-translate-y-4">
            <h3 className="text-2xl font-bold mb-4 text-[#861FD2]">Our Mission</h3>
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

          {/* Bottom Left - Vision (positioned slightly lower than top right) */}
          <div className="md:absolute md:top-[265px] md:left-0 md:w-[48%] bg-black bg-opacity-50 p-8 rounded-lg mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-[#66CC99]">Our Vision</h3>
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

          {/* Bottom Right - Image (positioned slightly lower than bottom left) */}
          <div className="md:absolute md:top-[370px] md:right-0 md:w-[48%] bg-black bg-opacity-50 rounded-lg overflow-hidden">
            <img
              src={bottomRightImage}
              alt="Bottom Right Illustration"
              className="object-cover w-full h-full aspect-video"
            />
          </div>
          
          {/* Empty space to maintain section height with absolute positioning */}
          <div className="hidden md:block h-[600px]"></div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;