import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import Whatwedo from "./What-we-do";
import ImageCarousel from "./ImageCarousel";
import ImpactStatistics from "./ImpactStatistics";
import ServicesSection from "./Services";

const App = () => (
  <div className="">
    <HeroSection />
    <AboutUs />
    <Projects />
    <Whatwedo />
    <ImpactStatistics />
    <ImageCarousel />
    <ServicesSection />
  </div>
);

export default App;
