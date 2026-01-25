import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const ProjectsSection = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

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
                            className={`group relative rounded-3xl overflow-hidden border ${isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
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
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
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
        </section>
    );
};

export default ProjectsSection;
