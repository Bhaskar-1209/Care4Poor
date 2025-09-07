import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";
const DonateCard = () => {
  return (

    <div className="bg-black text-[#F8E190] p-8">
        <div className="w-full">
    <div className="bg-[#fbe79d] w-full p-8 mx-auto rounded-2xl shadow-lg flex flex-col md:flex-row items-start justify-between">
      {/* Left Content */}
      <div className="flex flex-col gap-3 w-full md:w-2/3 text-left">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="w-15 h-13 object-contain transition-all duration-300 grayscale brightness-0">
            <img src={logo} alt="" />
          </div>
          <h2 className="text-lg text-black font-semibold tracking-wide">
            DEBATE4CHANGE
          </h2>
        </div>

        <p className="text-sm font-medium text-black">OUR KINDNESS, THEIR HOPE</p>
        <p className="text-sm text-black">+91 7838295296</p>
        <a
          href="mailto:debate4change@gmail.com"
          className="text-sm text-black underline"
        >
          debate4change@gmail.com
        </a>

        <p className="text-md font-medium mt-2 leading-relaxed text-black">
          “Join hands with Care4Poor, your small act can spark a lifetime of
          change.”
        </p>

        {/* Social Media (bottom aligned) */}
        <div className="flex gap-4 mt-6 text-2xl">
          <a href="#" className="text-pink-600 hover:scale-110 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-700 hover:scale-110 transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-red-600 hover:scale-110 transition">
            <FaYoutube />
          </a>
          <a href="#" className="text-sky-500 hover:scale-110 transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col items-center gap-4 mt-6 md:mt-0">
        {/* QR Code Placeholder */}
        <div className="w-28 h-28 bg-white flex items-center justify-center rounded-md shadow-md">
          <p className="text-xs text-gray-500">QR Code</p>
        </div>

        {/* Donate Button */}
        <button className="bg-[#2b2b2b] text-white px-6 py-2 rounded-full shadow-md hover:bg-black transition">
          Donate
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default DonateCard;
