import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/banner/bg_1.png";

// Replace with your actual images
import educationImg from "../assets/ImageCarousel/img1.jpeg";
import communityImg from "../assets/ImageCarousel/img1.jpeg";
import innovationImg from "../assets/ImageCarousel/img1.jpeg";
import compassionImg from "../assets/ImageCarousel/img1.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-black text-[#F8E190">
      {/* Hero Section */}
      <div className="bg-black text-[#F8E190] p-8">
        <div className="w-full">
          <motion.div
            className="border-2 border-[#F8E190] rounded-3xl bg-black backdrop-blur-sm shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={logo}
              alt="Hero"
              className="w-full h-150 object-cover rounded-3xl"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />

            {/* Black Tint Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

            {/* Text Overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#F8E190] drop-shadow-lg">
                About Us
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Principles Section */}
      <motion.section
        data-aos="fade-up"
        className="py-16 px-6 md:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#F8E190] uppercase mb-6 text-center">
          Hope For Every Child
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-4 text-[#F8E190] text-justify">
          Our mission at HopeForEveryChild is to change the lives of impoverished kids by giving them access to wholesome food, high-quality education, and necessary medical treatment. Regardless of their circumstances or origin, we think all children should have an equal opportunity to develop, learn, and flourish.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-[#F8E190] text-justify">
          We strive at the local level to make sure underprivileged kids get the help they need through nutrition campaigns, health camps, school partnerships, and community engagement initiatives. Our goal is to assist children create a healthier, more promising, and more independent future by fostering their bodies and minds in order to end the cycle of poverty.
        </p>
      </motion.section>

      {/* Reusable Section Block */}
      {[1, 2, 3, 4].map((_, i) => (
        <div key={i} className="bg-black text-[#F8E190] p-8">
          <div className="w-full">
            <motion.div
              className="border-2 border-[#F8E190] flex gap-9 rounded-3xl p-12 bg-black backdrop-blur-sm shadow-2xl"
              initial={{ opacity: 0, y: i % 2 === 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              {i % 2 === 0 ? (
                <>
                  {/* Image Left */}
                  <motion.div
                    data-aos="fade-right"
                    className="relative w-full h-64 md:h-96"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.img
                      src={educationImg}
                      alt="Our Mission"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                    <div className="absolute inset-0 bg-[#94ae81] opacity-30 mix-blend-multiply"></div>
                  </motion.div>

                  {/* Text Right */}
                  <div>
                    <h2 className="text-2xl font-bold text-[#F8E190] uppercase mb-4">
                      Our Mission
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed">
                      Our goal is to improve the lives of those who are less fortunate by attending to their basic needs, including food, shelter, healthcare, and education. We operate with a strong feeling of duty and compassion to make sure nobody is left behind because of uncontrollable circumstances.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Text Left */}
                  <div>
                    <h2 className="text-2xl font-bold text-[#F8E190] uppercase mb-4">
                      Our Mission
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed">
                      Our goal is to improve the lives of those who are less fortunate by attending to their basic needs, including food, shelter, healthcare, and education. We operate with a strong feeling of duty and compassion to make sure nobody is left behind because of uncontrollable circumstances.
                    </p>
                  </div>

                  {/* Image Right */}
                  <motion.div
                    data-aos="fade-right"
                    className="relative w-full h-64 md:h-96"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.img
                      src={educationImg}
                      alt="Our Mission"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                    <div className="absolute inset-0 bg-[#94ae81] opacity-30 mix-blend-multiply"></div>
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
