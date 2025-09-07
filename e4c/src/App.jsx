// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import D4C from "./components/D4C";
import AboutUs from "./pages/Aboutus";
import OurInitiatives from "./pages/Contact";
import Projects from "./pages/Projects";
import JoinUs from "./pages/Join";
import ContactUs from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {/* Parent relative so absolute Navbar is positioned correctly */}
      <div className=" min-h-screen text-white relative">
        
        {/* Navbar fixed on top with absolute positioning */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Add top padding equal to Navbar height so content doesn't hide behind it */}
        <div className="">
          <Routes>
            <Route path="/" element={<D4C />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-initiatives" element={<OurInitiatives />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
