import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/d4c/projects`);
        // limit to 8 projects only
        setProjects(res.data.slice(0, 8));
      } catch (err) {
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [API_BASE_URL]);

  if (loading) return <div className="text-center text-[#F8E190] text-xl p-8">Loading projects...</div>;
  if (error) return <div className="text-center text-red-500 text-xl p-8">{error}</div>;

  return (
    <div className="bg-black flex items-center justify-center p-8">
      <div className="w-full">
        <motion.div
          className="border-2 border-[#F8E190] rounded-3xl p-12 bg-black"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-6xl font-bold text-[#F8E190] mb-8">Projects</h1>
            <p className="text-[#F8E190] text-xl leading-relaxed max-w-5xl mx-auto">
              Our upcoming events are powerful opportunities...
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-4 gap-6 justify-center max-w-6xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                onClick={() => navigate(`/projects/${project._id}`)}
                className="aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#F8E190]/20"
                whileHover={{ scale: 1.05 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <img
                  src={project.images?.[0] || "https://via.placeholder.com/400"}
                  alt={project.title || `Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
