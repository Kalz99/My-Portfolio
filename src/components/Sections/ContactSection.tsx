import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import { CONTACT_INFO } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const ContactSection = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.name} (${formData.email})`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className={`py-24 px-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} relative overflow-hidden`}
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
                        Get In Touch
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-light mb-6"
                    >
                        Let's <span className="text-blue-500 font-medium">Connect</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Side: Contact Form */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className={`p-8 md:p-12 rounded-[2.5rem] border ${isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-100 shadow-xl shadow-blue-500/5"
                            }`}>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"} ml-2`}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-6 py-4 rounded-2xl border transition-all duration-300 outline-none ${isDarkMode
                                                ? "bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white"
                                                : "bg-white border-gray-200 focus:border-blue-500 text-gray-900"
                                            }`}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"} ml-2`}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-6 py-4 rounded-2xl border transition-all duration-300 outline-none ${isDarkMode
                                                ? "bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white"
                                                : "bg-white border-gray-200 focus:border-blue-500 text-gray-900"
                                            }`}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"} ml-2`}>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className={`w-full px-6 py-4 rounded-2xl border transition-all duration-300 outline-none resize-none ${isDarkMode
                                                ? "bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white"
                                                : "bg-white border-gray-200 focus:border-blue-500 text-gray-900"
                                            }`}
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300"
                                >
                                    Send Message
                                    <Send size={18} />
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Contact Info */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="flex flex-col justify-center space-y-12"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl font-light mb-8">
                                Let's build something <span className="text-blue-500 font-medium text-4xl block mt-2">extraordinary together.</span>
                            </h3>
                            <p className={`text-lg italic ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-12 font-light`}>
                                Whether you have a specific project in mind or just want to explore possibilities, I'm always open to new challenges and collaborations.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {/* Location */}
                            <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                                <div className={`p-4 rounded-2xl ${isDarkMode ? "bg-gray-800 text-blue-400" : "bg-blue-50 text-blue-600"} transition-transform group-hover:scale-110`}>
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <p className={`text-sm uppercase tracking-widest font-bold ${isDarkMode ? "text-gray-500" : "text-gray-400"} mb-1`}>Location</p>
                                    <p className="text-xl font-medium">{CONTACT_INFO.location}</p>
                                </div>
                            </motion.div>

                            {/* Mobile */}
                            <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                                <div className={`p-4 rounded-2xl ${isDarkMode ? "bg-gray-800 text-green-400" : "bg-green-50 text-green-600"} transition-transform group-hover:scale-110`}>
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <p className={`text-sm uppercase tracking-widest font-bold ${isDarkMode ? "text-gray-500" : "text-gray-400"} mb-1`}>Mobile</p>
                                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-xl font-medium hover:text-blue-500 transition-colors">
                                        {CONTACT_INFO.phone}
                                    </a>
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                                <div className={`p-4 rounded-2xl ${isDarkMode ? "bg-gray-800 text-purple-400" : "bg-purple-50 text-purple-600"} transition-transform group-hover:scale-110`}>
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <p className={`text-sm uppercase tracking-widest font-bold ${isDarkMode ? "text-gray-500" : "text-gray-400"} mb-1`}>Email</p>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-medium hover:text-blue-500 transition-colors break-all">
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
