import React, { useState } from "react"
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Instagram,
    Facebook,
    Youtube,
    Twitter,
} from "lucide-react"
import { motion } from "framer-motion"
import logo from "../assets/banner/bg_1.png"

// Simple replacements for the removed imports
const Card = ({ children, className }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`p-4 border-2 border-[#F8E190] rounded-3xl bg-black ${className}`}
    >
        {children}
    </motion.div>
)

const Button = ({ children, type = "button", className, ...props }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type={type}
        className={`px-4 py-2 rounded-lg font-semibold ${className}`}
        {...props}
    >
        {children}
    </motion.button>
)

const Input = ({ className, ...props }) => (
    <motion.input
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`w-full px-3 py-2 rounded-lg focus:outline-none border-2 border-[#F8E190] bg-black text-white ${className}`}
        {...props}
    />
)

const Textarea = ({ className, ...props }) => (
    <motion.textarea
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`w-full px-3 py-2 rounded-lg focus:outline-none border-2 border-[#F8E190] bg-black text-white ${className}`}
        {...props}
    />
)

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "Bansal",
        email: "bh@gmail.com",
        phone: "9876543210",
        subject: "asdfghjkl",
        message: "test message",
    })

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Get current date & time in readable format
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-IN"); // e.g., 28/08/2025
    const formattedTime = now.toLocaleTimeString("en-IN"); // e.g., 1:05:23 PM

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxH_FGwEZrS-c81gNnWHXf1YYkvw7lW_4LL4quEpxglmI5vUBWYc4YHe_4nTH0Ff0_w/exec",
      {
        method: "POST",
        body: new URLSearchParams({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          date: formattedDate,   // ⬅️ send date
          time: formattedTime,   // ⬅️ send time
        }),
      }
    );

    const result = await response.json();
    console.log("Form submitted successfully:", result);

    if (result.result === "success") {
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("❌ Something went wrong!");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("⚠️ Error submitting form. Please try again.");
  }
};



    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-black text-[#F8E190] p-8"
            >
                <div className="w-full">
                    {/* Main Container with Golden Border */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="border-2 border-[#F8E190] rounded-3xl bg-black backdrop-blur-sm shadow-2xl relative overflow-hidden"
                    >
                        <img
                            src={logo}
                            alt="Hero"
                            className="w-full h-150 object-cover rounded-3xl"
                        />

                        {/* Black Tint Overlay */}
                        <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.h1
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-4xl md:text-6xl font-bold text-[#F8E190] drop-shadow-lg"
                            >
                                Contact Us
                            </motion.h1>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Contact Information & Form */}
            <section className="px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-[#F8E190] mb-8">
                                Get In Touch
                            </h2>

                            <div className="space-y-6 mb-8">
                                <Card>
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-6 h-6 text-[#F8E190] mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#F8E190] mb-2">
                                                Address
                                            </h3>
                                            <p className="text-[#F8E190]">
                                                123 Community Street
                                                <br />
                                                Mumbai, Maharashtra 400001
                                                <br />
                                                India
                                            </p>
                                        </div>
                                    </div>
                                </Card>

                                <Card>
                                    <div className="flex items-start space-x-4">
                                        <Phone className="w-6 h-6 text-[#F8E190] mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#F8E190] mb-2">
                                                Phone
                                            </h3>
                                            <p className="text-[#F8E190]">+91 9876543210</p>
                                            <p className="text-[#F8E190]">+91 9876543211</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card>
                                    <div className="flex items-start space-x-4">
                                        <Mail className="w-6 h-6 text-[#F8E190] mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#F8E190] mb-2">
                                                Email
                                            </h3>
                                            <p className="text-[#F8E190]">care4poor@gmail.com</p>
                                            <p className="text-[#F8E190]">info@care4poor.org</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card>
                                    <div className="flex items-start space-x-4">
                                        <Clock className="w-6 h-6 text-[#F8E190] mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#F8E190] mb-2">
                                                Office Hours
                                            </h3>
                                            <p className="text-[#F8E190]">
                                                Monday - Friday: 9:00 AM - 6:00 PM
                                            </p>
                                            <p className="text-[#F8E190]">
                                                Saturday: 10:00 AM - 4:00 PM
                                            </p>
                                            <p className="text-[#F8E190]">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="text-xl font-semibold text-[#F8E190] mb-4">
                                    Follow Us
                                </h3>
                                <div className="flex space-x-4">
                                    {[
                                        <Instagram />,
                                        <Facebook />,
                                        <Youtube />,
                                        <Twitter />,
                                    ].map((Icon, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            className="w-10 h-10 bg-[#F8E190] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#F8E190] transition-colors"
                                        >
                                            {React.cloneElement(Icon, {
                                                className: "w-5 h-5 text-black",
                                            })}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="p-8">
                                <h2 className="text-3xl font-bold text-[#F8E190] mb-8">
                                    Send Us a Message
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    {/* <div className="grid md:grid-cols-2 gap-6 mb-6"> */}
                                        <div className="mb-6">
                                            <label className="block text-[#F8E190] mb-2">
                                                Name *
                                            </label>
                                            <Input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                placeholder="Your full name"
                                                required
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-[#F8E190] mb-2">
                                                Email *
                                            </label>
                                            <Input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                placeholder="Your email address"
                                                required
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label className="block text-[#F8E190] mb-2">
                                                Contact No. *
                                            </label>
                                            <Input
  type="phone"
  value={formData.phone}
  onChange={(e) =>
      setFormData({ ...formData, phone: e.target.value })
  }
  placeholder="Your contact number"
  required
/>

                                        </div>
                                    {/* </div> */}

                                    <div className="mb-6">
                                        <label className="block text-[#F8E190] mb-2">
                                            Subject *
                                        </label>
                                        <Input
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) =>
                                                setFormData({ ...formData, subject: e.target.value })
                                            }
                                            placeholder="What is this about?"
                                            required
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-[#F8E190] mb-2">
                                            Message *
                                        </label>
                                        <Textarea
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            placeholder="Tell us how we can help you or how you'd like to help us"
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="bg-[#F8E190] text-black hover:bg-[#F8E190] w-full py-3"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
