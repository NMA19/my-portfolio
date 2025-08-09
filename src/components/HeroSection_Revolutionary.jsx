import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDownRight, Globe, Code2, Zap, Target } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = ({ scrollToSection }) => {
  const { theme } = useTheme();

  const expertise = [
    { area: "Frontend", tech: ["React", "TypeScript", "Next.js"], years: "3+" },
    { area: "Backend", tech: ["Node.js", "Express", "MongoDB"], years: "2+" },
    { area: "Design", tech: ["Figma", "Tailwind", "UI/UX"], years: "3+" }
  ];

  return (
    <div className={`min-h-screen ${theme.primary} relative flex items-center`}>
      {/* Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-200 dark:border-blue-800 rotate-45 opacity-20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-100 dark:bg-purple-900 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 border-2 border-green-200 dark:border-green-800 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-blue-100 dark:bg-blue-900 rotate-12 opacity-25"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Layout - Split Design */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Side - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-full border border-green-200 dark:border-green-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Globe className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                Available Worldwide • Remote Work
              </span>
            </motion.div>

            {/* Main Title */}
            <div>
              <motion.h1 
                className={`text-6xl lg:text-8xl font-black ${theme.text} leading-none mb-4`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                ANIS
              </motion.h1>
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h2 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  NEDJEM
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              </motion.div>
            </div>

            {/* Role & Description */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className={`text-2xl lg:text-3xl font-bold ${theme.text}`}>
                Full-Stack Developer
              </h3>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed max-w-lg`}>
                I create digital experiences that matter. Specializing in modern web technologies, 
                I build scalable applications that drive business growth and user engagement.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button
                onClick={() => scrollToSection('work')}
                className="group bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-none font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 flex items-center"
              >
                VIEW PROJECTS
                <ArrowDownRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <button className={`border-2 border-black dark:border-white ${theme.text} px-8 py-4 rounded-none font-bold text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300`}>
                GET IN TOUCH
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {[
                { Icon: Github, href: "https://github.com/NMA19" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/anis-nedjem" },
                { Icon: Mail, href: "mailto:med363839@gmail.com" }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.textSecondary} hover:text-black dark:hover:text-white transition-colors p-2`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Expertise Cards */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Header */}
            <div className="flex items-center space-x-3 mb-8">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className={`text-xl font-bold ${theme.text}`}>EXPERTISE</h3>
            </div>

            {/* Expertise Cards */}
            {expertise.map((item, index) => (
              <motion.div
                key={item.area}
                className={`${theme.cardBg} border-l-4 border-blue-600 p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className={`text-xl font-bold ${theme.text}`}>{item.area}</h4>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.years}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 ${theme.cardBg} border ${theme.cardBorder} rounded-full text-sm ${theme.textSecondary}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Current Project */}
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">CURRENTLY</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Frontend Developer @ LogikaBox</h4>
              <p className="text-blue-100 text-sm">
                Building next-generation web applications with React and TypeScript
              </p>
              <div className="mt-4 pt-4 border-t border-blue-400">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Project Progress</span>
                  <span className="font-bold">85%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className={`text-sm ${theme.textSecondary}`}>El Eulma, Algeria</span>
              </div>
              <div className={`text-sm ${theme.textSecondary}`}>UTC+1</div>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span className={`text-sm ${theme.textSecondary}`}>Open to opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
