import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { SOCIAL_LINKS } from "../utils/data";

const Footer = () => {
    const { isDarkMode } = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`py-12 px-6 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"} border-t ${isDarkMode ? "border-gray-900" : "border-gray-200"}`}>
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Social Links */}
                <div className="flex gap-6 mb-8">
                    {SOCIAL_LINKS.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            className={`p-3 rounded-xl ${isDarkMode ? "bg-gray-900 text-white hover:text-blue-400" : "bg-white text-gray-600 hover:text-blue-600"} shadow-sm transition-colors border ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
                            aria-label={link.name}
                        >
                            <link.icon size={22} />
                        </motion.a>
                    ))}
                </div>

                {/* Logo/Name */}
                <div className="mb-6">
                    <span className="text-2xl font-light tracking-tighter">
                        KALHARA<span className="font-bold text-blue-500"> GUNAWARDANA</span>
                    </span>
                </div>

                {/* Copyright */}
                <div className={`text-sm font-medium ${isDarkMode ? "text-gray-500" : "text-gray-400"} text-center`}>
                    <p>© {currentYear} Kalhara Gunawardana. All rights reserved.</p>
                    <p className="mt-2">Built with passion & precision.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
