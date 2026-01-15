import React from "react";  
import { useState } from "react";
import {
    motion,
    AnimatePresence,
} from "framer-motion";
import {
    Code2,
    Sun,
    Moon,
    Menu,
    X,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const { isDarkMode, setIsDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if(section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };
    
    return (
        <motion.nav
            style={{ opacity: 1 }}
            className={`fixed top-0 w-full z-50 px-6 py-4 ${
                isDarkMode ? "bg-gray-900" : "bg-white"
            } backdrop-blur-md border-b ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2"
                >
                    <Code2 size={32} className="text-blue-500" />
                    <span className="text-lg ml-1">Kalz</span>
                </motion.div>
            
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {["Home", "Skills", "Work", "About"].map((item) => (
                        <motion.button
                            key={item}
                            whileHover={{ scale: 1.1 }}
                            className={`text-sm uppercase tracking-wider transition-colors ${
                                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                            }`}
                            onClick={() => scrollToSection(item.toLowerCase())}
                        >
                            {item}
                        </motion.button>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsDarkMode(isDarkMode ? "light" : "dark")}
                        className={`p-2 rounded-full transition-colors ${
                            isDarkMode ? "text-gray-400 hover:text-white bg-gray-900" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                    >
                        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsDarkMode(isDarkMode ? "light" : "dark")}
                        className={`p-2 rounded-full transition-colors ${
                            isDarkMode ? "text-gray-400 hover:text-white bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 rounded-full transition-colors ${
                            isDarkMode ? "text-gray-400 hover:text-white bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                    >                       
                      {isMenuOpen ? (<X size={20} />) : (<Menu size={20} />)}
                    </motion.button>
                </div>
             </div> 
            {/* Mobile Menu */}
            <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`md:hidden mt-4 p-4 rounded-lg ${
                        isDarkMode ? "bg-gray-900" : "bg-white"
                    } border ${
                        isDarkMode ? "border-gray-800" : "border-gray-200"
                    }`}
                >
                    
                        {["Home", "Skills", "Work", "About"].map((item) => (
                                <motion.button
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors ${
                                        isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                                    }`}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                >
                                    {item}
                                </motion.button>
                            ))}
                </motion.div>
            )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;