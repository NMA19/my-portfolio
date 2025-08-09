import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Download, Activity, TrendingUp, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = ({ scrollToSection }) => {
  const { theme } = useTheme();

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/NMA19", 
      label: "GitHub", 
      ariaLabel: "Visit my GitHub profile"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/anis-nedjem", 
      label: "LinkedIn", 
      ariaLabel: "Connect with me on LinkedIn"
    },
    { 
      icon: Mail, 
      href: "mailto:med363839@gmail.com", 
      label: "Email", 
      ariaLabel: "Send me an email"
    }
  ];

  const skills = [
    { name: "React", emoji: "⚛️", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", emoji: "🟨", level: 92, color: "from-yellow-500 to-orange-500" },
    { name: "Tailwind", emoji: "🎨", level: 90, color: "from-teal-500 to-green-500" },
    { name: "TypeScript", emoji: "🔷", level: 85, color: "from-purple-500 to-blue-600" }
  ];

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center ${theme.primary} transition-colors duration-300 relative overflow-hidden`}
      aria-label="Hero section - Mohamed Anis Nedjem, Frontend Developer"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Location & Status */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className={`flex items-center ${theme.textSecondary} text-sm`}>
                <MapPin size={16} className="mr-2 text-blue-500" />
                El Eulma, Sétif, Algeria
              </div>
              
              <div className="flex items-center bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-700">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full mr-2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-medium text-green-600 dark:text-green-400">
                  Available for Work
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className={`text-5xl lg:text-7xl font-bold ${theme.text} leading-tight mb-6`}>
                Frontend<br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              className={`text-lg ${theme.textSecondary} leading-relaxed max-w-2xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Specialized in React, JavaScript, and Tailwind CSS with over 3 years of experience 
              building dynamic, user-centric web applications that drive business growth.
            </motion.p>

            {/* Skills Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-2xl mb-2">{skill.emoji}</div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent mb-1`}>
                    {skill.level}%
                  </div>
                  <div className={`text-sm font-medium ${theme.text}`}>{skill.name}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('work')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </motion.button>

              <motion.a
                href="/cv.pdf"
                download
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {socialLinks.map(({ icon: Icon, href, label, ariaLabel }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.textSecondary} hover:text-blue-600 transition-all duration-300 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm`}
                  aria-label={ariaLabel}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Enhanced Development Dashboard */}
          <div className="lg:col-span-5">
            <motion.div
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Dashboard Header with Dog Emoji */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🐕</div>
                  <div>
                    <h3 className={`text-xl font-bold ${theme.text} mb-1`}>
                      Development Dashboard
                    </h3>
                    <p className={`text-sm ${theme.textSecondary} flex items-center`}>
                      <Activity className="w-4 h-4 mr-1 text-green-500" />
                      Real-time project insights & analytics
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Currently Building Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Code className="w-5 h-5 text-blue-500 mr-2" />
                  <span className={`text-sm font-semibold ${theme.text}`}>Currently Building</span>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/30">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className={`text-lg font-bold ${theme.text} mb-1`}>
                        Custom Web Applications
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                          @ LogikaBox
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent`}>
                        85%
                      </p>
                      <p className={`text-xs ${theme.textSecondary}`}>Complete</p>
                    </div>
                  </div>
                  
                  <p className={`text-sm ${theme.textSecondary} mb-4 leading-relaxed`}>
                    Leading frontend development across multiple industries with cutting-edge React solutions
                  </p>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full relative overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ delay: 1, duration: 2, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        animate={{ x: [-100, 300] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: 2
                        }}
                      />
                    </motion.div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className={`text-xs ${theme.textSecondary}`}>Project Progress</span>
                    <span className={`text-xs font-semibold ${theme.text}`}>8 of 10 milestones</span>
                  </div>
                </div>
              </div>

              {/* LogikaBox Enhanced Badge */}
              <motion.div 
                className="flex items-center justify-center space-x-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 px-6 py-4 rounded-2xl border border-gray-200/50 dark:border-gray-600/50"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <img 
                    src="/mO.png" 
                    alt="LogikaBox Logo" 
                    className="w-7 h-7 object-contain filter brightness-0 invert"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-white font-bold text-sm hidden">LB</span>
                </div>
                <div className="text-center">
                  <p className={`text-sm font-bold ${theme.text}`}>LogikaBox</p>
                  <p className={`text-xs ${theme.textSecondary}`}>Digital Solutions Partner</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-yellow-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: i * 0.2 
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* About Me Section with Sakura */}
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className={`text-sm font-medium ${theme.textSecondary}`}>About Me</span>
                  <span className="text-lg">🌸</span>
                </div>
              </motion.div>

              {/* Floating Analytics Dots */}
              <div className="absolute top-4 right-4">
                <motion.div
                  className="flex space-x-1"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
