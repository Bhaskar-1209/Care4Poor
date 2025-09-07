import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Our Initiatives",
      dropdown: [
        { name: "Care4Poor", href: "/" },
        { name: "Debate4Change", href: "/" },
        { name: "Score4Change", href: "/" },
        { name: "Innovate4Change", href: "/" },
        { name: "TheChangeMakersLeauge", href: "/" },
      ],
    },
    { name: "Tournaments", href: "/projects" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  // Close dropdown on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setIsDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center animate-fade-in">
            <div className="flex-shrink-0">
              <Link to="/">
                <div className="w-12 h-12 flex items-center justify-center bg-transparent hover:bg-black/10 transition-colors duration-300 cursor-pointer">
                  <img src={logo} alt="logo" />
                </div>
              </Link>
            </div>
            <div className="ml-3">
              <Link to="/">
                <span className="text-black font-bold text-xl hover:text-gray-700 transition-colors duration-300 cursor-pointer">
                  EXPRESS4CHANGE
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <div key={item.name} className="relative group" ref={dropdownRef}>
                    <button
                      className="flex items-center text-black hover:text-gray-700 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {isDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition"
                            onClick={() => setIsDropdownOpen(false)} // closes after selecting
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-black hover:text-gray-700 hover:bg-black/10 transition"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-orange-400 to-yellow-400">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full flex justify-between items-center text-black px-3 py-2 text-base font-medium"
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block text-black hover:text-gray-700 px-3 py-2 text-sm"
                            onClick={() => {
                              setIsDropdownOpen(false);
                              setIsMenuOpen(false); // also close mobile menu
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-black hover:text-gray-700 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
