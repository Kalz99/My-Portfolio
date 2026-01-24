import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { useTheme } from "../../context/ThemeContext";
import { SKILLS_CATEGORIES } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const SkillsSection = () => {
   const { isDarkMode } = useTheme();
   const sectionRef = useRef(null);
   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

   const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
   });
   const y = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

   return (
      <section
         ref={sectionRef}
         id="skills"
         className={`py-2 px-6 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"} relative overflow-hidden`}
      >
         {/* Background element */}
         <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
            <div
               className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
                  }`}
            />
            <div
               className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"
                  }`}
            />
         </motion.div>
         <div className="max-w-6xl mx-auto relative z-10">
            {/*section Header */}
            <motion.div
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               variants={containerVariants}
               className="text-center mb-20"
            >
               <motion.div
                  variants={itemVariants}
                  className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"
                     } mb-4`}
               >Technical Expertise
               </motion.div>
               <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-5xl font-light mb-6"
               >
                  Skills &
                  <span className="text-blue-500 font-medium"> Technologies</span>
               </motion.h2>
               <motion.p
                  variants={itemVariants}
                  className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"
                     } max-w-2xl mx-auto font-light`}

               >
                  Proficient in a diverse set of technologies and tools, I bring a comprehensive skill set to every project I undertake.
               </motion.p>
            </motion.div>

            {/* Regular Skills Categories */}
            <motion.div
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               variants={containerVariants}
               className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12"
            >
               {SKILLS_CATEGORIES.filter(c => !c.isFullWidth).map((category) => (
                  <motion.div
                     key={category.title}
                     variants={itemVariants}
                     className={`p-8 rounded-[2rem] border transition-all duration-300 ${isDarkMode ? "bg-gray-900/40 border-gray-800 hover:border-blue-500/30" : "bg-white/80 border-gray-200 hover:shadow-xl hover:border-blue-200"
                        } backdrop-blur-sm`}
                  >
                     {/*category Title */}
                     <div className="flex items-center mb-8">
                        <div
                           className={`p-3 rounded-xl ${isDarkMode ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                              } mr-4`}
                        >
                           <category.icon size={24} />
                        </div>
                        <div>
                           <h3 className={`text-xl font-medium mb-1 ${isDarkMode ? "text-blue-400" : "text-blue-500"}`}>
                              {category.title}
                           </h3>
                           <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                           >
                              {category.description}
                           </p>
                        </div>
                     </div>

                     {/* Skills list - Icon Grid */}
                     <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                        {category.skills.map((skill) => (
                           <motion.div
                              key={skill.name}
                              variants={itemVariants}
                              className="group flex flex-col items-center justify-start text-center"
                           >
                              <div
                                 className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${isDarkMode
                                    ? "bg-gray-800 border-gray-700 group-hover:bg-gray-700 group-hover:border-blue-500/50"
                                    : "bg-gray-50 border-gray-100 group-hover:bg-white group-hover:border-blue-200"
                                    } border shadow-sm group-hover:shadow-md group-hover:-translate-y-1`}
                              >
                                 <skill.icon
                                    className={`w-7 h-7 transition-colors duration-300 ${isDarkMode ? "text-gray-400 group-hover:text-white" : "text-gray-600"
                                       } ${skill.color ? `group-hover:${skill.color}` : ""}`}
                                 />
                              </div>
                              <span className={`text-[10px] uppercase tracking-wider font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-500 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-800"
                                 }`}>
                                 {skill.name}
                              </span>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               ))}
            </motion.div>

            {/* Full Width Skills Category (e.g. Other) */}
            <motion.div
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               variants={containerVariants}
               className="space-y-8"
            >
               {SKILLS_CATEGORIES.filter(c => c.isFullWidth).map((category) => (
                  <motion.div
                     key={category.title}
                     variants={itemVariants}
                     className={`p-8 rounded-[2rem] border transition-all duration-300 ${isDarkMode ? "bg-gray-900/40 border-gray-800 hover:border-blue-500/30" : "bg-white/80 border-gray-200 hover:shadow-xl hover:border-blue-200"
                        } backdrop-blur-sm`}
                  >
                     <div className="flex flex-col gap-8">
                        {/* Topic on Top - Centered */}
                        <div className="flex flex-col items-center text-center">
                           <div
                              className={`p-3 rounded-xl ${isDarkMode ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                                 } mb-4`}
                           >
                              <category.icon size={24} />
                           </div>
                           <div>
                              <h3 className={`text-xl font-medium mb-1 ${isDarkMode ? "text-blue-400" : "text-blue-500"}`}>
                                 {category.title}
                              </h3>
                              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                 } max-w-2xl mx-auto`}
                              >
                                 {category.description}
                              </p>
                           </div>
                        </div>

                        {/* Icons Below */}
                        <div className="flex flex-wrap gap-6 md:gap-8 justify-center py-2">
                           {category.skills.map((skill) => (
                              <motion.div
                                 key={skill.name}
                                 variants={itemVariants}
                                 className="group flex flex-col items-center justify-start text-center"
                              >
                                 <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${isDarkMode
                                       ? "bg-gray-800 border-gray-700 group-hover:bg-gray-700 group-hover:border-blue-500/50"
                                       : "bg-gray-50 border-gray-100 group-hover:bg-white group-hover:border-blue-200"
                                       } border shadow-sm group-hover:shadow-md group-hover:-translate-y-1`}
                                 >
                                    <skill.icon
                                       className={`w-7 h-7 transition-colors duration-300 ${isDarkMode ? "text-gray-400 group-hover:text-white" : "text-gray-600"
                                          } ${skill.color ? `group-hover:${skill.color}` : ""}`}
                                    />
                                 </div>
                                 <span className={`text-[10px] uppercase tracking-wider font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-500 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-800"
                                    }`}>
                                    {skill.name}
                                 </span>
                              </motion.div>
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

export default SkillsSection;