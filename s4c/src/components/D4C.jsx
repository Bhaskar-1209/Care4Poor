import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import Services from "./Services";
import ImageCarousel from "./ImageCarousel";
import ImpactStatistics from "./ImpactStatistics";

const App = () => (
  <div className="bg-[#111] min-h-screen text-white">
    <HeroSection />
    <AboutUs />
    <ImageCarousel />
    <Projects />
    <Services />
    <ImpactStatistics />
  </div>
);

export default App;
