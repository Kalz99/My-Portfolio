import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import PROFILE_PIC from "../../assets/profileIMG.jpeg";
import { SiX } from "react-icons/si";
import { MoonStarIcon } from "lucide-react";

const HeroSection = () => {
    const { isDarkMode } = useTheme();
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, 50]);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
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
            className={`pt-0 pb-20 transition-all duration-500 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
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
                        className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 ${isDarkMode ? "bg-blue-500" : "bg-blue-300"
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
                        className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 ${isDarkMode ? "bg-purple-500" : "bg-purple-300"
                            }`}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
                    {/*left side - text content*/}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="order-2 lg:order-1 px-4 lg:px-0"
                    >
                        <motion.div
                            variants={textVariant}
                            className={`text-xs uppercase tracking-widest mb-4 ${isDarkMode ? "text-gray-500" : "text-gray-500"
                                }`}
                        >
                            Full Stack Engineer | AI/ML Enthusiast
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-medium mb-6"
                        >
                            <span className={`${isDarkMode ? "text-white" : "text-gray-900"} block`}>
                                Building Digital
                            </span>
                            <span className="text-blue-500 block">
                                Experiences
                            </span>
                            <span className={`${isDarkMode ? "text-white" : "text-gray-900"} block`}>
                                That Matter
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className={`text-sm sm:text-base ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-8 max-w-lg font-light leading-relaxed`}
                        >
                            I design and build digital products from the ground up, focusing on reliability, usability, and real-world impact.  </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center"
                        >
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => scrollToSection("work")}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 w-full sm:w-auto text-center"
                            >
                                View My Work
                            </motion.button>
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => scrollToSection("contact")}
                                className={`border-2 w-full sm:w-auto text-center ${isDarkMode ? "border-gray-600 text-gray-300 hover:border-gray-500"
                                    : "border-gray-400 text-gray-600 hover:border-gray-500"
                                    } px-6 py-2.5 rounded-full text-sm uppercase tracking-wide transition-all duration-300`}
                            >
                                Get in Touch
                            </motion.button>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex gap-4"
                        >
                            {[
                                { icon: FiGithub, href: "https://github.com/Kalz99" },
                                { icon: FiLinkedin, href: "https://www.linkedin.com/in/kalharag" },
                                { icon: SiX, href: "https://x.com/cryptoSaint1999" },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                    className={`p-2 transition-colors ${isDarkMode ? "text-gray-500 hover:text-blue-500" : "text-gray-600 hover:text-blue-600"
                                        }`}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>


                    {/*right side - image content*/}

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={imageVariant}
                        className="flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative w-52 h-56 sm:w-60 sm:h-64 lg:w-80 lg:h-96 flex-shrink-0">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-2 sm:-inset-3 lg:-inset-6 rounded-3xl border-3 border-blue-500/20 pointer-events-none"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-4 sm:-inset-5 lg:-inset-8 rounded-3xl border-2 border-purple-500/10 pointer-events-none"
                            />

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`relative w-full h-full rounded-3xl overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-gray-300"
                                    } shadow-2xl`}
                            >

                                <img
                                    src={PROFILE_PIC}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </motion.div>


                </div>
            </motion.section>
        </div>
    );
};

export default HeroSection;