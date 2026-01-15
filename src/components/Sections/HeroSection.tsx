import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import PROFILE_PIC from "../../assets/profileIMG.jpeg";
import { SiX } from "react-icons/si";

const HeroSection = () => {
    const { isDarkMode } = useTheme();
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, 50]);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if(section) {
            section.scrollIntoView({ behavior: "smooth" });
        }   
    };

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const textVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const imageVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 0.5 } },
    };

    return (
        <div
            className={`pt-0 pb-20 transition-all duration-500 ${
                isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
            }`}
        >
            {/* Hero Content */}
            <motion.section
                id="home"
                style={{ y: heroY }}
                className="min-h-screen flex items-center justify-center relative px-6"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 ${
                            isDarkMode ? "bg-blue-500" : "bg-blue-300"
                        }`}
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, -180, -360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 ${
                            isDarkMode ? "bg-purple-500" : "bg-purple-300"
                        }`}
                    />
                </div>

                <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="w-full">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.div
                                variants={textVariant}
                                className={`text-xs uppercase tracking-widest mb-4 ${
                                    isDarkMode ? "text-gray-500" : "text-gray-500"
                                }`}
                            >
                                Full Stack Developer | Web3 Enthusiast
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl md:text-5xl mb-5 leading-tight font-black"
                            >
                                <span className={`${isDarkMode ? "text-white" : "text-gray-900"} block`}>
                                    Building digital
                                </span>
                                <span className="text-blue-500 block">
                                    experiences
                                </span>
                                <span className={`${isDarkMode ? "text-white" : "text-gray-900"} block`}>
                                    that matter
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className={`text-base ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-8 max-w-lg font-light leading-relaxed`}
                            >
                                I craft beautiful, functional web applications with modern technologies and thoughtful user experiences.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex gap-4 mb-8 items-center"
                            >
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("work")}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300"
                                >
                                    View My Work
                                </motion.button>
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection("contact")}
                                    className={`border-2 ${
                                        isDarkMode ? "border-gray-600 text-gray-300 hover:border-gray-500"
                                            : "border-gray-400 text-gray-600 hover:border-gray-500"
                                    } px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300`}
                                >
                                    Get in Touch
                                </motion.button>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex gap-4"
                            >
                                {[
                                    {icon: FiGithub, href: "https://github.com/yourusername"},
                                    {icon: FiLinkedin, href: "https://linkedin.com/in/yourusername"},
                                    {icon: SiX, href: "https://x.com/yourusername"},
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                        className={`p-2 transition-colors ${
                                            isDarkMode ? "text-gray-500 hover:text-blue-500" : "text-gray-600 hover:text-blue-600"
                                        }`}
                                    >
                                        <social.icon size={24} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="w-full hidden lg:flex justify-center items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={imageVariant}
                            whileHover={{ scale: 1.02 }}
                            className={`w-full max-w-sm h-auto rounded-2xl overflow-hidden shadow-2xl ${
                                isDarkMode ? "border border-gray-800" : "border border-gray-200"
                            }`}
                        >
                            <img
                                src={PROFILE_PIC}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default HeroSection;