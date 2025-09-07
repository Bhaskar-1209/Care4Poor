import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // ✅ import Framer Motion
import logo from "../assets/logo.png"; // Adjust path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    {
      label: "Our Initiatives",
      dropdown: [
        { to: "/initiatives/education", label: "Care4Poor" },
        { to: "/initiatives/environment", label: "Score4Change" },
        { to: "/initiatives/health", label: "Express4Change" },
        { to: "/initiatives/health", label: "Innovate4Change" },
        { to: "/initiatives/health", label: "The ChangeMakers League" },
      ],
    },
    { to: "/projects", label: "Projects" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed flex justify-between items-center shadow-lg p-4 transition-all duration-300 z-50
          ${isMobile || scrolled
            ? "w-full left-0 top-0 bg-black text-white border-b border-black py-3"
            : "bg-[#F8E190] rounded-full shadow-lg mx-auto mt-4 max-w-[95%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[85%] top-10 left-0 right-0"
          }`}
      >
        {/* Logo + Title */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-4"
        >
          <img
            src={logo}
            alt="Logo"
            className={`w-15 h-13 object-contain transition-all duration-300 ${!scrolled ? "grayscale brightness-0" : ""
              }`}
          />
          <span
            className={`font-semibold text-lg ${isMobile || scrolled ? "text-[#F8E190]" : "text-black"
              }`}
          >
            Debate4Change
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-6 font-semibold md:text-[13px] ${isMobile || scrolled ? "text-[#F8E190]" : "text-black"
            }`}
        >
          {menuLinks.map((link, i) =>
            link.dropdown ? (
              <li key={i} className="relative">
                <button
                  onClick={() => setOpenDropdown((prev) => !prev)}
                  className="flex items-center space-x-1 focus:outline-none"
                >
                  <span>{link.label}</span>
                  <span className="text-xs">▼</span>
                </button>
                <AnimatePresence>
                  {openDropdown && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-2 min-w-[12rem] w-max bg-white text-black rounded-lg shadow-lg overflow-hidden z-50"
                    >
                      {link.dropdown.map((sublink, j) => (
                        <motion.li
                          key={j}
                          whileHover={{ x: 6 }}
                          className="hover:bg-gray-100 px-4 py-2 text-sm whitespace-nowrap"
                        >
                          <Link to={sublink.to}>{sublink.label}</Link>
                        </motion.li>
                      ))}
                    </motion.ul>

                  )}
                </AnimatePresence>
              </li>
            ) : (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={link.to}>{link.label}</Link>
              </motion.li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => setIsOpen(true)}
          className={`md:hidden text-2xl transform transition-transform duration-200 hover:scale-110 ${isMobile || scrolled ? "text-white" : "text-black"
            }`}
          aria-label="Open menu"
        >
          ☰
        </motion.button>

        {/* Fullscreen Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`fixed inset-0 left-0 ${isMobile || scrolled
                  ? "bg-black/95 text-white"
                  : "bg-[#F8E190] text-black"
                } flex flex-col items-center justify-center space-y-8 font-semibold text-2xl z-[100]`}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-4xl font-bold"
              >
                ✕
              </motion.button>

              {/* Animated Links */}
              {menuLinks.map((link, i) =>
                link.dropdown ? (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <p
                      className="cursor-pointer"
                      onClick={() => setOpenDropdown((prev) => !prev)}
                    >
                      {link.label} ▼
                    </p>
                    <AnimatePresence>
                      {openDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 space-y-2"
                        >
                          {link.dropdown.map((sublink, j) => (
                            <motion.div
                              key={j}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Link
                                to={sublink.to}
                                onClick={() => setIsOpen(false)}
                                className="block"
                              >
                                {sublink.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className="block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
