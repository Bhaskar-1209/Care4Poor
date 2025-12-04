// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // we'll create this

// ✅ Lazy loaded pages
const D4C = lazy(() => import("./components/D4C"));
const AboutUs = lazy(() => import("./pages/Aboutus"));
const OurInitiatives = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const JoinUs = lazy(() => import("./pages/Join"));
const ContactUs = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ ensures scroll resets on route change */}
      <div className="bg-[#dde5ea] min-h-screen text-white relative">
        {/* Navbar fixed on top with absolute positioning */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Add top padding equal to Navbar height so content doesn't hide behind it */}
        <div className="pt-20">
          <Suspense
            fallback={
              <div className="text-center text-[#F8E190] text-xl p-12">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<D4C />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-initiatives" element={<OurInitiatives />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
