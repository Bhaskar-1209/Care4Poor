import React from "react";
import { GraduationCap, Handshake, Activity, HeartPulse } from "lucide-react"; 

const Services = () => {
  return (
    <div className="bg-[#dee5e8] py-16 px-6 md:px-20">
      {/* Section Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
        Our <span className="text-black">Services</span>
      </h2>

      {/* Grid - Left stacked cards + Right tall card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN (stacked cards) */}
        <div className="flex flex-col gap-8">
          {/* Education */}
          <div className="flex items-center justify-center gap-5 w-full">
               <div className="bg-[#b0c4cc] rounded-2xl p-8 shadow-md text-center flex flex-col items-center">
            <GraduationCap size={50} className="text-black mb-4" />
            <h3 className="text-xl font-extrabold text-gray-900 mb-3">Education</h3>
            <p className="text-sm text-gray-800 mb-6">
              We blend sports with learning by using games and teamwork to teach
              values such as equality, inclusion, and fair play.
            </p>
            <button className="bg-[#0a0f2d] text-white font-semibold px-6 py-2 rounded-full">
              Learn more
            </button>
          </div>

          {/* Volunteer */}
          <div className="bg-[#b0c4cc] rounded-2xl p-8 shadow-md text-center flex flex-col items-center">
            <Handshake size={50} className="text-black mb-4" />
            <h3 className="text-xl font-extrabold text-gray-900 mb-3">Volunteer</h3>
            <p className="text-sm text-gray-800 mb-6">
              We offer meaningful volunteer roles for youth who want to give back,
              learn leadership, and create real community impact.
            </p>
            <button className="bg-[#0a0f2d] text-white font-semibold px-6 py-2 rounded-full">
              Learn more
            </button>
          </div>
          </div>

          {/* Health & Wellness */}
          <div className="bg-[#b0c4cc] rounded-2xl p-8 shadow-md text-center flex flex-col items-center">
            <HeartPulse size={50} className="text-black mb-4" />
            <h3 className="text-xl font-extrabold text-gray-900 mb-3">
              Health & Wellness Awareness
            </h3>
            <p className="text-sm text-gray-800 mb-6">
              We conduct fitness camps and awareness drives on topics like
              nutrition, mental health, and hygiene to promote overall well-being.
            </p>
            <button className="bg-[#0a0f2d] text-white font-semibold px-6 py-2 rounded-full">
              Learn more
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN (tall card) */}
        <div className="bg-[#b0c4cc] rounded-2xl p-10 shadow-md flex flex-col items-center justify-center">
          <Activity size={60} className="text-black mb-6" />
          <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
            Community Sports Programs
          </h3>
          <p className="text-base text-gray-800 mb-8 text-center">
            We organize local football and sports tournaments to encourage
            teamwork, discipline, and physical fitness among youth from
            underserved communities. This program builds confidence, leadership,
            and lifelong healthy habits.
          </p>
          <button className="bg-[#0a0f2d] text-white font-semibold px-8 py-3 rounded-full">
            Learn more
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;
