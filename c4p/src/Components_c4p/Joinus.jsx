import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

import joinBg from "../assets/banner/bg_1.png";
import awarenessIcon from "../assets/logos/aware.svg";
import donationIcon from "../assets/logos/price.svg";
import impactIcon from "../assets/logos/impact.svg";
import bgBanner from "../assets/volunteers/1.png";

const processSteps = [
  {
    title: "Awareness & Engagement",
    description:
      "Inform and engage potential donors and supporters using social media, events, and campaigns.",
    icon: awarenessIcon,
  },
  {
    title: "Donation Collection",
    description:
      "Secure and easy donation systems for one-time and recurring support.",
    icon: donationIcon,
  },
  {
    title: "Impact & Accountability",
    description:
      "Transparent fund allocation to meaningful, trackable initiatives.",
    icon: impactIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const DonatingProcess = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx97tkmPXnIRSQRrqKhfwDz1jEwf48wP7I9axjVThMhyMCj0Mpw8EDvk2IPEbWalvlZ/exec";

    const userDateTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const form = new FormData();
    form.append("Date", userDateTime);
    form.append("Full Name", formData.name);
    form.append("Email Address", formData.email);
    form.append("Phone Number", formData.phone);
    form.append("Donation Amount (₹)", formData.amount);
    form.append("Message (Optional)", formData.message);

    try {
      await fetch(scriptURL, { method: "POST", mode: "no-cors", body: form });
      toast.success("Thank you for donating! Our team will contact you shortly.");
      setFormData({ name: "", email: "", phone: "", amount: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error!", error.message);
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-[#ebe6e0] overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${joinBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center px-4"
        >
          Join Our Mission to Make a Difference
        </motion.h1>
      </div>

      {/* Process Section */}
      <motion.section
        className="py-20 px-4 md:px-20 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={itemVariants}
          className="text-[#8ba07c] text-[25px] font-semibold mb-2"
        >
          Work Process
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-14"
        >
          Our Donating Work Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-48 h-48 [perspective:1000px]">
                <svg viewBox="0 0 512 512" className="w-full h-full rounded-full">
                  <defs>
                    <pattern
                      id={`circlePattern${index}`}
                      patternUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <image
                        href={bgBanner}
                        preserveAspectRatio="xMidYMid slice"
                        width="512"
                        height="512"
                      />
                    </pattern>
                  </defs>
                  <circle cx="256" cy="256" r="256" fill={`url(#circlePattern${index})`} />
                  <circle cx="256" cy="256" r="256" fill="rgba(148, 174, 129, 0.35)" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-10 h-10 [transform-style:preserve-3d]"
                  >
                    <img src={step.icon} alt="icon front" className="absolute w-full h-full backface-hidden" />
                    <img src={step.icon} alt="icon back" className="absolute w-full h-full rotate-y-180 backface-hidden" />
                  </motion.div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mt-6">{step.title}</h3>
                <p className="mt-3 text-gray-600 text-sm px-4">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Donation Form */}
      <motion.section
        className="py-20 px-4 md:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Make a Difference with Your Support
            </h2>
            <p className="text-gray-700 mb-4">
              Your donation helps us continue our mission and reach more lives.
              Every contribution goes directly to the cause, and you can choose to give a one-time or recurring gift.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>100% transparent use of funds</li>
              <li>Secure payment system</li>
              <li>Tax-deductible receipts provided</li>
              <li>Track the impact you create</li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-white p-8 rounded-lg shadow-md space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-3xl p-2 focus:ring-[#f4a825] focus:border-[#f4a825]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-3xl p-2 focus:ring-[#f4a825] focus:border-[#f4a825]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="mt-1 block w-full border border-gray-300 rounded-3xl p-2 focus:ring-[#f4a825] focus:border-[#f4a825]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Donation Amount (₹)
              </label>
              <input
                type="number"
                name="amount"
                min="1"
                value={formData.amount}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-3xl p-2 focus:ring-[#f4a825] focus:border-[#f4a825]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message (Optional)</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-3xl p-2 focus:ring-[#f4a825] focus:border-[#f4a825]"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#8ba07c] text-white font-semibold py-3 rounded-3xl hover:bg-[#6c815ee3] transition"
            >
              Donate Now
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
};

export default DonatingProcess;
