import React, { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section 1 (Text Left - Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
              ABOUT US
            </h2>
          </div>

          {/* Right Content - Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="">
              <p className="text-gray-700 text-lg leading-relaxed">
              We aim to break the silence around pressing social, environmental,
              and personal issues by encouraging expression as the first step
              toward impact. Through workshops, campaigns, and
              community-driven initiatives, Express4Change nurtures awareness,
              creativity, and leadership — because the power to change starts
              with the courage to express.
            </p>
            </div>
          </div>
        </div>

        {/* Section 2 (Image Left - Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div
            className={`flex justify-center lg:justify-start transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
             <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              Express4Change is a youth-led platform that empowers individuals
              to voice their ideas, concerns, and visions for a better world. We
              believe that real change begins with honest expression — whether
              through writing, art, public speaking, or digital activism.
            </p>
          </div>
           
          </div>

          {/* Right Content - Text */}
          <div className="bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-2xl p-4 shadow-lg">
              <img
                src="/youth-activism.png"
                alt="Youth empowerment"
                className="w-full h-auto rounded-xl"
              />
            </div>
        </div>
      </div>
    </section>
  );
}
