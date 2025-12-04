import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/banner/bg_1.png";

const HeroSection = () => (
  <div className="bg-[#dee5e8] text-[#dde5ea] p-8">
    <div className="w-full">
      {/* Main Container with Golden Border */}
      <motion.div
        className="border-2 border-[#dde5ea] rounded-3xl bg-black backdrop-blur-sm shadow-2xl"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={logo}
          alt="Hero"
          className="w-full h-200 object-cover rounded-3xl"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  </div>
);

export default HeroSection;
