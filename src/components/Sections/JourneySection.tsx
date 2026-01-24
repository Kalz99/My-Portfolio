import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";

import { useTheme } from "../../context/ThemeContext";
import { JOURNEY_DATA, MISSION, PASSIONS, HOW_I_WORK, CURRENTLY_EXPLORING } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const JourneySection = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section
            ref={sectionRef}
            id="journey"
            className={`py-24 px-6 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"} relative overflow-hidden`}
        >
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-blue-400" : "text-blue-600"} mb-4 font-semibold`}
                    >
                        My Growth
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-light mb-6"
                    >
                        About <span className="text-blue-500 font-medium">Me</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Mission & Passions */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="space-y-12"
                    >
                        {/* My Mission */}
                        <motion.div
                            variants={itemVariants}
                            className={`p-10 rounded-[2.5rem] border ${isDarkMode ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-100 shadow-xl shadow-blue-500/5"
                                } relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors duration-500" />
                            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                {MISSION.title}
                            </h3>
                            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"} font-light italic`}>
                                "{MISSION.description}"
                            </p>
                        </motion.div>

                        {/* How I Work */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3 px-10 text-left">
                                <span className="w-8 h-1 bg-blue-500 rounded-full" />
                                How I Work
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {HOW_I_WORK.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 10 }}
                                        className={`p-6 rounded-3xl border transition-all duration-300 flex items-start gap-4 ${isDarkMode ? "bg-gray-900/30 border-gray-800 hover:border-blue-500/30" : "bg-white border-gray-100 hover:shadow-lg hover:border-blue-200 shadow-sm"
                                            }`}
                                    >
                                        <div className={`p-3 rounded-2xl ${isDarkMode ? "bg-gray-800 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">{item.title}</h4>
                                            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* My Passions */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3 px-10 text-left">
                                <span className="w-8 h-1 bg-purple-500 rounded-full" />
                                What Drives Me
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {PASSIONS.map((passion, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 10 }}
                                        className={`p-6 rounded-3xl border transition-all duration-300 flex items-start gap-4 ${isDarkMode ? "bg-gray-900/30 border-gray-800 hover:border-purple-500/30" : "bg-white border-gray-100 hover:shadow-lg hover:border-purple-200 shadow-sm"
                                            }`}
                                    >
                                        <div className={`p-3 rounded-2xl ${isDarkMode ? "bg-gray-800 text-purple-400" : "bg-purple-50 text-purple-600"}`}>
                                            <passion.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">{passion.title}</h4>
                                            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                {passion.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Currently Exploring */}
                        <motion.div
                            variants={itemVariants}
                            className={`p-10 rounded-[2.5rem] border ${isDarkMode ? "bg-gray-900/50 border-blue-500/20" : "bg-white border-blue-100 shadow-xl shadow-blue-500/5"
                                } relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors duration-500" />
                            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                <CURRENTLY_EXPLORING.icon className="text-blue-500" size={28} />
                                {CURRENTLY_EXPLORING.title}
                            </h3>
                            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"} font-light`}>
                                {CURRENTLY_EXPLORING.description}
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Journey Roadmap */}
                    <div className="relative pt-4">
                        <h3 className="text-xl font-semibold mb-12 flex items-center gap-3 lg:hidden">
                            <span className="w-8 h-1 bg-blue-500 rounded-full" />
                            Roadmap
                        </h3>

                        {/* Timeline Track */}
                        <div className="absolute left-6 lg:-left-10 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />
                        <motion.div
                            className="absolute left-6 lg:-left-10 top-0 bottom-0 w-0.5 bg-blue-500 origin-top z-10"
                            style={{ scaleY }}
                        />

                        <div className="space-y-12">
                            {JOURNEY_DATA.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative pl-12 lg:pl-0 group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 lg:-left-10 -translate-x-1/2 top-7 flex items-center justify-center z-20">
                                        <motion.div
                                            whileInView={{ scale: [0, 1.2, 1] }}
                                            viewport={{ once: true }}
                                            className={`w-12 h-12 rounded-2xl border-4 ${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"
                                                } shadow-xl flex items-center justify-center text-blue-500 group-hover:border-blue-500/50 transition-colors duration-300`}
                                        >
                                            <item.icon size={22} />
                                        </motion.div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`relative p-8 rounded-[2rem] border transition-all duration-500 lg:ml-[22px] ${isDarkMode
                                        ? "bg-[#0b1224] border-blue-500/20 group-hover:border-blue-500/40 shadow-2xl shadow-blue-500/5"
                                        : "bg-[#f5f9ff] border-blue-200 group-hover:shadow-xl group-hover:border-blue-300 shadow-sm shadow-blue-500/5"
                                        } group-hover:-translate-y-1`}>

                                        {/* Speech Bubble Arrow (Tail) */}
                                        <div className={`hidden lg:block absolute left-[-10px] top-8 w-5 h-5 rotate-45 border-l border-b transition-all duration-500 z-10 ${isDarkMode
                                            ? "bg-[#0b1224] border-blue-500/20 group-hover:border-blue-500/40"
                                            : "bg-[#f5f9ff] border-blue-200 group-hover:border-blue-300"
                                            }`} />

                                        <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                                            <div className="flex-1 min-w-[200px]">
                                                <h4 className="text-xl md:text-2xl font-semibold group-hover:text-blue-500 transition-colors flex flex-wrap items-center gap-x-3">
                                                    {item.title}
                                                    <span className={`text-sm md:text-base font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"} opacity-80`}>
                                                        {item.company}
                                                    </span>
                                                </h4>
                                            </div>
                                            <div className="shrink-0">
                                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap inline-block ${isDarkMode ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-blue-50 text-blue-600 border border-blue-100"
                                                    }`}>
                                                    {item.year}
                                                </span>
                                            </div>
                                        </div>

                                        <ul className="space-y-4">
                                            {item.points.map((point, pIndex) => (
                                                <li key={pIndex} className="flex items-start gap-3 group/item text-left">
                                                    <div className={`mt-[0.6rem] w-1.5 h-1.5 rounded-full shrink-0 ${isDarkMode ? "bg-blue-500/60" : "bg-blue-500/40"} group-hover/item:scale-125 transition-transform`} />
                                                    <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"} font-light`}>
                                                        {point.split(/(\*\*.*?\*\*)/g).map((part, i) =>
                                                            part.startsWith('**') && part.endsWith('**')
                                                                ? <strong key={i} className={`font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>{part.slice(2, -2)}</strong>
                                                                : part
                                                        )}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
