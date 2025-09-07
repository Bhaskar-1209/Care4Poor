import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/banner/bg_1.png";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/d4c/projects`);
        setProjects(res.data);
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen text-[#F8E190] text-xl"
      >
        Loading projects...
      </motion.div>
    );
  }

  if (error) {
    return (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen text-red-400 text-xl"
      >
        {error}
      </motion.div>
    );
  }

  return (
    <div className="bg-black text-[#F8E190] min-h-screen">
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
                Projects
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-8 mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative border-2 border-[#F8E190] rounded-3xl bg-black mt-10 shadow-2xl overflow-hidden group cursor-pointer h-[400px]"
            whileHover={{ scale: 1.03 }}
          >
            {/* Project Image */}
            <img
              src={
                project.images && project.images.length > 0
                  ? project.images[0]
                  : "https://via.placeholder.com/600x300"
              }
              alt={project.title}
              className="w-full h-full object-cover rounded-3xl transform transition duration-500 group-hover:scale-110"
            />

            {/* Black Tint */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 rounded-3xl"></div>

            {/* Project Details */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-center text-[#F8E190]">
              <h3 className="text-2xl font-bold text-[#F8E190] mb-2">
                {project.title}
              </h3>
              <p className="text-sm mb-3 line-clamp-3">{project.description}</p>

              {project.contributors?.length > 0 && (
                <p className="text-xs text-gray-300 mb-3">
                  Contributors: {project.contributors.join(", ")}
                </p>
              )}

              {/* Redirect to ProjectDetails */}
              <Link
                to={`/projects/${project._id}`}
                className="inline-block px-4 py-2 bg-[#F8E190] text-black font-semibold rounded-xl shadow-md hover:bg-[#F8E190] transition"
              >
                View More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
