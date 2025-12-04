import React from "react";

const ImpactStatistics = () => {
  return (
    <div className="bg-[#dde5ea] flex items-center justify-center p-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Card */}
        <div className="bg-[#d9e3e7] rounded-3xl shadow-md p-8 relative">
          {/* Heading */}
          <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            Impact <span className="font-semibold">Statistics</span>
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Growing every year—with your support, the impact multiplies.
          </p>

          {/* Illustration */}
          <div className="absolute top-6 right-6">
            <img
              src="https://img.icons8.com/3d-fluency/94/businesswoman.png"
              alt="illustration"
              className="w-16 h-16"
            />
          </div>

          {/* Stats */}
          <div className="mt-16 flex justify-between">
            <div>
              <h3 className="text-5xl font-bold text-gray-900">5+</h3>
              <p className="text-gray-800 mt-1">Year Of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">100+</h3>
              <p className="text-gray-800 mt-1">Tournament Done</p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#d9e3e7] rounded-3xl shadow-md p-8 relative overflow-hidden flex">
          {/* Text Section */}
          <div className="w-2/3 pr-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Who <span className="text-blue-800">We Are</span>
            </h2>
            <p className="text-gray-800 mt-3 text-sm leading-relaxed">
              Score4Change is a youth-driven initiative committed to empowering
              communities through the transformative power of sports and
              education. We believe every goal scored on the field can lead to a
              greater goal off the field — from building confidence and teamwork
              to promoting equality, leadership, and social impact. Through
              tournaments, workshops, and community engagement, we inspire young
              minds to become changemakers and champions for a better tomorrow.
              At Score4Change, we don’t just play to win — we play to make a
              difference.
            </p>
          </div>

          {/* Image Section with Peeled Corner Effect */}
          <div className="w-1/3 relative">
            <div
              className="absolute -right-8 top-0 h-full w-[180%] shadow-2xl"
              style={{
                clipPath: "circle(70% at 80% 50%)",
              }}
            >
              <img
                src="https://img.freepik.com/free-photo/football-soccer-match-grass-field_1150-14852.jpg"
                alt="soccer"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStatistics;
