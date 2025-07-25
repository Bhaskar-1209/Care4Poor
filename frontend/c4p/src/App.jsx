// App.jsx
import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const loadNavbar = () => import("./Components_c4p/Navbar");
const loadContactHero = () => import("./Components_c4p/ContactUS_bg");
const loadFooter = () => import("./Components_c4p/Footer");
const loadCare4Poor = () => import("./pages/care4poor");
const loadViewProjects = () => import("./Components_c4p/ViewProjects");
const loadDonatingProcess = () => import("./Components_c4p/Joinus");
const loadAboutUsNav = () => import("./Components_c4p/AboutUsNav");
const loadProjectDetails = () => import("./Components_c4p/ReadMore");

const Navbar = lazy(loadNavbar);
const ContactHero = lazy(loadContactHero);
const Footer = lazy(loadFooter);
const Care4Poor = lazy(loadCare4Poor);
const ViewProjects = lazy(loadViewProjects);
const DonatingProcess = lazy(loadDonatingProcess);
const AboutUsNav = lazy(loadAboutUsNav);
const ProjectDetails = lazy(loadProjectDetails);

const PublicLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Outlet />
      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  useEffect(() => {
    loadNavbar();
    loadContactHero();
    loadFooter();
    loadCare4Poor();
    loadViewProjects();
    loadDonatingProcess();
    loadAboutUsNav();
    loadProjectDetails();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="p-6 text-white">Loading...</div>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Care4Poor />} />
            <Route path="/contact" element={<ContactHero />} />
            <Route path="/more-project" element={<ViewProjects />} />
            <Route path="/join-us" element={<DonatingProcess />} />
            <Route path="/about-us" element={<AboutUsNav />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Route>
          <Route path="*" element={<div className="p-6">404 - Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
