// App.jsx
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import bgImage from '../assets/background/aboutus.png';
import slider1 from '../assets/volunteers/1.png';
import slider2 from '../assets/background/image.png';
import slider3 from '../assets/background/aboutus.png';

const services = [
  { color: '#3a5f50', text: 'Charity For Foods' },
  { color: '#3a5f50', text: 'Charity For Water' },
  { color: '#3a5f50', text: 'Charity For Education' },
  { color: '#3a5f50', text: 'Charity For Medical' },
];

const sliderImages = [slider1, slider2, slider3];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-[#ebe6e0] flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - IMAGE SLIDER */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-[30px] overflow-hidden relative z-10 w-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={sliderImages[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="object-cover w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                onClick={prevSlide}
                className="text-white bg-[#3a5f50] p-2 rounded-full hover:bg-[#2e4e40]"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="text-white bg-[#3a5f50] p-2 rounded-full hover:bg-[#2e4e40]"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Decorative Border */}
          <div className="absolute inset-0 rounded-[30px] border-[8px] border-[#3a5f50] z-0"></div>
        </motion.div>

        {/* RIGHT SIDE - TEXTUAL CONTENT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#3a5f50] text-2xl font-semibold mb-2">About Us</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#3a5f50] leading-tight mb-6">
            We Believe That We<br />Can Save More Life's<br />With You
          </h1>
          <p className="text-gray-600 mb-6 text-xl">
            Donet is the largest global crowdfunding community connecting nonprofits, donors,
            and companies in nearly every country. We help nonprofits from Afghanistan to
            Zimbabwe (and hundreds of places in between) access the tools, training, and support
            they need to be more effective and make our world a better place.
          </p>

          <div className="space-y-3 mb-6 text-xl">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheckCircle className={`text-[${service.color}]`} />
                <span className="text-[#3a5f50] font-medium">{service.text}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#3a5f50] hover:bg-[#2e4e40] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all">
            About More <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
}