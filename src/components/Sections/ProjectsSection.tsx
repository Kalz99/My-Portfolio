import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, CheckCircle2 } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription?: string;
    image: string;
    tags: string[];
    link: string;
    githubURL: string;
    featured: boolean;
    category: string;
}

const ProjectsSection = () => {
    const { isDarkMode } = useTheme();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className={`py-24 px-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} relative overflow-hidden`}
        >
            {/* Background Decoration */}
            <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 blur-[120px] rounded-full" />
            </motion.div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.div
                        variants={itemVariants}
                        className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-blue-400" : "text-blue-600"} mb-4 font-semibold`}
                    >
                        My Portfolio
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-light mb-6"
                    >
                        Featured <span className="text-blue-500 font-medium">Projects</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto font-light`}
                    >
                        A selection of my recent work, ranging from web applications to complex backend systems.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PROJECTS.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            onClick={() => setSelectedProject(project)}
                            className={`group relative rounded-3xl overflow-hidden border cursor-pointer ${isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
                                } transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2`}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: '5/3' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="flex gap-4">
                                        <a
                                            href={project.githubURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isDarkMode ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                                        }`}>
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-6 line-clamp-2`}>
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className={`text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className={`relative w-full max-w-5xl h-[60vh] flex flex-col lg:flex-row overflow-hidden rounded-3xl shadow-2xl ${isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-white"
                                }`}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className={`absolute top-6 right-6 z-20 p-2 rounded-full transition-colors ${isDarkMode ? "bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-700" : "bg-white/50 text-gray-600 hover:text-black hover:bg-gray-200"
                                    } backdrop-blur-md`}
                            >
                                <X size={20} />
                            </button>

                            {/* Left Side: Image with Spacing */}
                            <div className={`w-full lg:w-[50%] h-full flex-shrink-0 ${isDarkMode ? "bg-gray-800" : "bg-gray-50/50"} flex items-center justify-center p-8 lg:p-12`}>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="max-w-full max-h-full object-contain shadow-lg rounded-lg"
                                />
                            </div>

                            {/* Right Side: Content - Consistently matches image height and scrolls */}
                            <div className="relative flex-1 h-full">
                                <div className="absolute inset-0 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                                    <div className="mb-0">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isDarkMode ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                                                }`}>
                                                {selectedProject.category}
                                            </span>
                                            {selectedProject.featured && (
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-500`}>
                                                    Featured Project
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                            {selectedProject.title}
                                        </h2>
                                        <div className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-8 whitespace-pre-line`}>
                                            {selectedProject.fullDescription || selectedProject.description}
                                        </div>

                                        {/* Tech Stack List */}
                                        <div className="mb-8">
                                            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className={`flex items-center gap-2 text-sm px-4 py-2 rounded-xl ${isDarkMode ? "bg-gray-800 text-blue-400" : "bg-gray-100 text-blue-600"
                                                            }`}
                                                    >
                                                        <CheckCircle2 size={14} />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
                                            {selectedProject.githubURL && selectedProject.githubURL !== "#" && (
                                                <a
                                                    href={selectedProject.githubURL}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                                        }`}
                                                >
                                                    <Github size={20} />
                                                    Source Code
                                                </a>
                                            )}
                                            {selectedProject.link && selectedProject.link !== "#" && (
                                                <a
                                                    href={selectedProject.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25"
                                                >
                                                    <ExternalLink size={20} />
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsSection;
