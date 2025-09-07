import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const ProjectDetails = () => {
    const { id } = useParams(); 
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/api/d4c/projects/${id}`);
                setProject(res.data);
            } catch (err) {
                setError("Failed to load project details");
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-yellow-400">
                Loading project...
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen text-red-400">
                {error}
            </div>
        );
    }

    if (!project) return null;

    return (
        <div className="bg-black text-[#F8E190] min-h-screen">
            {/* Banner */}
            <motion.div 
                className="bg-black text-[#F8E190] p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full">
                    <div className="border-2 border-[#F8E190] rounded-3xl bg-black backdrop-blur-sm shadow-2xl relative overflow-hidden">
                        {project.images && project.images.length > 0 ? (
                            <motion.img
                                src={project.images[0]}
                                alt={`${project.title} banner`}
                                className="w-full h-150 object-cover rounded-3xl"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1 }}
                            />
                        ) : (
                            <div className="w-full h-80 bg-gray-800 flex items-center justify-center">
                                <span className="text-gray-400">No Image Available</span>
                            </div>
                        )}

                        {/* Black Tint Overlay */}
                        <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

                        {/* Title Overlay */}
                        <motion.div 
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-[#F8E190] drop-shadow-lg">
                                {project.title}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Main Container with Golden Border */}
            <motion.div 
                className="bg-black text-[#F8E190] p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="w-full">
                    <div className="border-2 border-[#F8E190] rounded-3xl p-12 bg-black backdrop-blur-sm shadow-2xl space-y-6">
                        {/* About / Description */}
                        <h2 className="text-3xl font-bold text-center mb-4">About Project</h2>
                        <p className="text-base leading-relaxed">{project.description}</p>

                        {/* Google Form Button */}
                        {project.googleFormLink && (
                            <motion.p 
                                className="text-sm md:text-base leading-relaxed text-white text-justify"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Learn more or participate by filling out{" "}
                                <a
                                    href={project.googleFormLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#F8E190] underline font-semibold"
                                >
                                    this form
                                </a>.
                            </motion.p>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Change We Brought Section */}
            <motion.div 
                className="bg-black text-[#F8E190] flex items-center justify-center p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="w-full">
                    <div className="border-2 border-[#F8E190] rounded-3xl p-12 bg-black backdrop-blur-sm shadow-2xl">
                        {/* Left Side - Image + Contributors */}
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Side Image (2nd image if exists) */}
                            {project.images && project.images.length > 1 && (
                                <motion.img
                                    src={project.images[1]}
                                    alt={`${project.title} impact`}
                                    className="w-full md:w-1/2 h-64 object-cover rounded-xl border border-yellow-400 shadow-lg"
                                    initial={{ x: -80, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true }}
                                />
                            )}

                            {/* Contributors */}
                            {project.contributors?.length > 0 && (
                                <motion.div 
                                    className="w-full md:w-1/2 bg-[#222] rounded-xl p-6 border border-yellow-400 shadow-md"
                                    initial={{ x: 80, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                                        Contributors
                                    </h2>
                                    <ul className="space-y-2">
                                        {project.contributors.map((contributor, i) => (
                                            <motion.li
                                                key={i}
                                                className="p-2 rounded-lg bg-[#111] border border-yellow-400"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.2 * i }}
                                            >
                                                {contributor}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
