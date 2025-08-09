import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Download, Code, Briefcase, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = ({ scrollToSection }) => {
  const { theme } = useTheme();

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Technologies", value: "10+" },
    { label: "Client Satisfaction", value: "100%" }
  ];

  const techStack = [
    { name: "React", icon: "⚛️", proficiency: 95 },
    { name: "TypeScript", icon: "🔷", proficiency: 85 },
    { name: "JavaScript", icon: "🟨", proficiency: 92 },
    { name: "Tailwind", icon: "🎨", proficiency: 90 },
    { name: "Node.js", icon: "🟢", proficiency: 80 },
    { name: "Next.js", icon: "⚫", proficiency: 88 }
  ];

  return (
    <div className={`min-h-screen ${theme.primary} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16">
          
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`inline-flex items-center px-4 py-2 rounded-full ${theme.cardBg} ${theme.cardBorder} mb-6`}>
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <MapPin size={14} className="mr-2 text-blue-600" />
              <span className={`text-sm ${theme.textSecondary}`}>Based in El Eulma, Algeria</span>
            </div>
            
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold ${theme.text} mb-6 leading-tight`}>
              Mohamed Anis
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Nedjem
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-8 max-w-3xl mx-auto leading-relaxed`}>
              Full-Stack Developer specializing in modern web technologies. 
              Creating exceptional digital experiences with React, TypeScript, and cutting-edge tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => scrollToSection('work')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase className="mr-2 w-5 h-5" />
                View Portfolio
                <ExternalLink className="ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.a
                href="/cv.pdf"
                download
                className={`border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${theme.text}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`${theme.cardBg} ${theme.cardBorder} rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className={`text-3xl font-bold text-blue-600 mb-2`}>{stat.value}</div>
                <div className={`text-sm ${theme.textSecondary} font-medium`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className={`${theme.cardBg} ${theme.cardBorder} rounded-3xl p-8 shadow-lg`}>
                <div className="flex items-center mb-8">
                  <Code className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className={`text-2xl font-bold ${theme.text}`}>Tech Stack</h2>
                </div>
                
                <div className="space-y-6">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-4">{tech.icon}</span>
                        <div>
                          <div className={`font-semibold ${theme.text}`}>{tech.name}</div>
                          <div className={`text-sm ${theme.textSecondary}`}>{tech.proficiency}% Proficiency</div>
                        </div>
                      </div>
                      <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.proficiency}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Current Project */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className={`${theme.cardBg} ${theme.cardBorder} rounded-3xl p-8 shadow-lg`}>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className={`text-2xl font-bold ${theme.text} mb-2`}>Current Focus</h2>
                    <p className={`${theme.textSecondary}`}>What I'm working on right now</p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-6">
                  <h3 className={`text-xl font-bold ${theme.text} mb-3`}>
                    Full-Stack Web Applications
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    @ LogikaBox • Frontend Developer
                  </p>
                  <p className={`${theme.textSecondary} mb-6 leading-relaxed`}>
                    Leading development of modern web applications using React, TypeScript, 
                    and Node.js. Focusing on performance, scalability, and exceptional user experience.
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-sm font-medium ${theme.text}`}>Project Progress</span>
                    <span className="text-2xl font-bold text-blue-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ delay: 1.2, duration: 2 }}
                    />
                  </div>
                </div>

                {/* Company Info */}
                <div className="flex items-center justify-center space-x-4 bg-gray-50 dark:bg-gray-800/50 px-6 py-4 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <img 
                      src="/mO.png" 
                      alt="LogikaBox" 
                      className="w-7 h-7 object-contain filter brightness-0 invert"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-white font-bold hidden">LB</span>
                  </div>
                  <div>
                    <p className={`font-bold ${theme.text}`}>LogikaBox</p>
                    <p className={`text-sm ${theme.textSecondary}`}>Digital Innovation Partner</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { icon: Github, href: "https://github.com/NMA19", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/anis-nedjem", label: "LinkedIn" },
              { icon: Mail, href: "mailto:med363839@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme.cardBg} ${theme.cardBorder} p-4 rounded-2xl ${theme.textSecondary} hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
