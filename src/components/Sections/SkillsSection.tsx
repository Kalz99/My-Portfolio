import { use, useRef } from "react";
import { delay, motion, useInView, useScroll, useTransform } from "framer-motion";

import { useTheme } from "../../context/ThemeContext";
import { i } from "framer-motion/client";
import { SKILLS_CATEGORIES, TECH_STACK } from "../../utils/data";
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


   const skillBarVariants = {
      hidden: { width: 0, opacity: 0 },
      visible: (level: number) => ({
         width: `${level}%`,
         opacity: 1,
         transition: { duration: 1.2, ease: "easeOut", delay: 0.3 }
      })
   };
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

            {/* Skills Categories */}
            <motion.div
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               variants={containerVariants}
               className="grid md:grid-cols-2 gap-8 lg:gap-12"
            >
               {SKILLS_CATEGORIES.map((category, categoryIndex) => (
                  <motion.div
                     key={category.title}
                     variants={itemVariants}
                     className={`p-8 rounded-2xl border ${isDarkMode ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm" : "bg-white/80 border-gray-200 backdrop-blur-sm"
                        }`}
                  >
                     {/*category Title */}
                     <div className="flex items-center mb-6">
                        <div
                           className={`p-3 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-100"
                              } mr-4`}
                        >
                           <category.icon className="" size={24} />
                        </div>
                        <div>
                           <h3 className="text-xl font-medium mb-1">
                              {category.title}
                           </h3>
                           <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                           >
                              {category.description}
                           </p>
                        </div>
                     </div>

                     {/* SKills list */}
                     <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                           <div key={skill.name} className="group">
                              <div className="flex justify-between items-center mb-2">
                                 <span className="text-sm font-medium">{skill.name}</span>
                                 <span
                                    className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                       }`}
                                 >
                                    {skill.level}%
                                 </span>
                              </div>

                              <div
                                 className={`h-2 rounded-full overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-gray-200"
                                    }`}
                              >

                                 <motion.div
                                    variants={skillBarVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    custom={skill.level}
                                    className={`h-full ${skill.color} rounded-full relative`}
                                 >
                                    <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                 </motion.div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               ))}
            </motion.div>

         </div>
      </section>

   );
};

export default SkillsSection;