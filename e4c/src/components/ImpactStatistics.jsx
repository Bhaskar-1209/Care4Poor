import React from "react";
import statImg from "../assets/ImageCarousel/img2.jpeg"; // replace with actual path
import child1 from "../assets/ImageCarousel/img2.jpeg";
import child2 from "../assets/ImageCarousel/img2.jpeg";

const ImpactStatistics = () => {
  return (
    <section className="bg-[#D6AE3A] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-black text-center mb-12">
          IMPACT STATISTICS
        </h2>

        {/* Top Row */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Stats Box */}
          <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm mx-auto">
            <ul className="space-y-6 text-left">
              <li className="flex items-center space-x-4">
                <span className="text-lg font-bold">01</span>
                <p className="text-black text-lg">
                  <span className="font-extrabold">5000+</span> meals distributed
                </p>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-lg font-bold">02</span>
                <p className="text-black text-lg">
                  <span className="font-extrabold">5+</span> year experience
                </p>
              </li>
            </ul>
          </div>

          {/* Right Image (Tilted Look) */}
          <div className="flex justify-center relative">
            <div className="rounded-xl shadow-lg bg-black p-2 rotate-3">
              <img
                src={statImg}
                alt="Impact"
                className="rounded-lg w-[280px] h-[220px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row - 2 Images */}
        <div className="grid md:grid-cols-2 gap-12 text-center">
          <div className="space-y-4">
            <img
              src={child1}
              alt="Activity 1"
              className="rounded-xl h-[250px] w-full object-cover border-4 border-pink-600 shadow-md mx-auto"
            />
            <p className="text-black font-medium">Anything Type</p>
          </div>

          <div className="space-y-4">
            <img
              src={child2}
              alt="Activity 2"
              className="rounded-xl h-[250px] w-full object-cover border-4 border-green-600 shadow-md mx-auto"
            />
            <p className="text-black font-medium">Anything Type</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStatistics;
