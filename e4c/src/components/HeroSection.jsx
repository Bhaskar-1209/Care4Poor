import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white rounded-t-[100px] transform translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full transform translate-x-32 translate-y-32"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              "Let your thoughts shape a better tomorrow."
            </h1>
          </div>

          {/* Right content - Woman image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl animate-float">
                <img
                  src="/images/hero-woman.png"
                  alt="Smiling woman representing Express4Change"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
