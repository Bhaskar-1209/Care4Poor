import React from 'react';
import { GraduationCap, Users, MessageSquare } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <GraduationCap className="w-16 h-16 text-[#F8E190] mb-4" />,
      title: "Education",
      description: "Sample text. Click to select the text box. Click again or double click to start editing the text."
    },
    {
      icon: <Users className="w-16 h-16 text-[#F8E190] mb-4" />,
      title: "Training",
      description: "Sample text. Click to select the text box. Click again or double click to start editing the text."
    },
    {
      icon: <MessageSquare className="w-16 h-16 text-[#F8E190] mb-4" />,
      title: "Events",
      description: "Sample text. Click to select the text box. Click again or double click to start editing the text."
    }
  ];

  return (
    <div className="bg-black flex items-center justify-center p-8">
      <div className="w-full">
        {/* Main Container with Golden Border */}
        <div className="border-2 border-[#F8E190] rounded-3xl p-12 bg-black">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-[#F8E190] mb-8">
              Our Services
            </h1>
            <p className="text-[#F8E190] text-xl leading-relaxed max-w-4xl mx-auto">
              We provide platforms, training, and events that empower youth to engage in
              <br />
              impactful debates, public speaking, and policy-driven discussions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-2 border-[#F8E190] rounded-2xl p-8 bg-black hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F8E190]/20"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#F8E190] text-center mb-6">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
