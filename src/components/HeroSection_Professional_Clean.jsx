import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Download, Briefcase, Calendar, TrendingUp, Code2 } from 'lucide-react';
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
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "JavaScript", level: 92, color: "bg-yellow-500" },
    { name: "Tailwind", level: 90, color: "bg-teal-500" },
    { name: "TypeScript", level: 85, color: "bg-purple-500" }
  ];

  const projects = [
    { name: "E-commerce Platform", status: "Live", progress: 100, color: "text-green-600" },
    { name: "Dashboard Analytics", status: "In Progress", progress: 75, color: "text-blue-600" },
    { name: "Mobile App UI", status: "Planning", progress: 25, color: "text-orange-600" }
  ];

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center ${theme.primary} transition-colors duration-300`}
      aria-label="Hero section - Mohamed Anis Nedjem, Frontend Developer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Location & Status */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className={`flex items-center ${theme.textSecondary} text-sm font-medium`}>
                <MapPin size={16} className="mr-2 text-blue-600" />
                El Eulma, Sétif, Algeria
              </div>
              
              <div className="flex items-center bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-700">
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">
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
                <span className="text-blue-600">Developer</span>
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

            {/* Skills */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h3 className={`text-sm font-semibold ${theme.text} uppercase tracking-wider`}>
                Core Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className={`${theme.cardBg} ${theme.cardBorder} rounded-lg p-4 text-center`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={`w-8 h-8 ${skill.color} rounded-lg mx-auto mb-2`}></div>
                    <div className={`text-sm font-medium ${theme.text} mb-1`}>{skill.name}</div>
                    <div className={`text-xs ${theme.textSecondary}`}>{skill.level}%</div>
                  </motion.div>
                ))}
              </div>
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
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Briefcase className="mr-2 w-5 h-5" />
                View My Work
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </motion.button>

              <motion.a
                href="/cv.pdf"
                download
                className={`border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center ${theme.text}`}
                whileHover={{ scale: 1.02 }}
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
                  className={`${theme.textSecondary} hover:text-blue-600 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800`}
                  aria-label={ariaLabel}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Professional Project Dashboard */}
          <div className="lg:col-span-5">
            <motion.div
              className={`${theme.cardBg} ${theme.cardBorder} rounded-2xl p-8 shadow-lg`}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className={`text-xl font-bold ${theme.text} mb-1`}>
                    Project Dashboard
                  </h3>
                  <p className={`text-sm ${theme.textSecondary}`}>
                    Current work overview
                  </p>
                </div>
                <div className="p-3 bg-blue-600 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Current Project */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className={`text-lg font-bold ${theme.text} mb-1`}>
                      Custom Web Applications
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} className="text-blue-600" />
                      <span className="text-sm font-semibold text-blue-600">
                        @ LogikaBox
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                    <p className={`text-xs ${theme.textSecondary}`}>Complete</p>
                  </div>
                </div>
                
                <p className={`text-sm ${theme.textSecondary} mb-4`}>
                  Leading frontend development for enterprise web applications with modern React ecosystem
                </p>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="bg-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Recent Projects */}
              <div className="space-y-3 mb-6">
                <h5 className={`text-sm font-semibold ${theme.text} mb-3`}>Recent Projects</h5>
                {projects.map((project, i) => (
                  <motion.div
                    key={project.name}
                    className={`flex items-center justify-between p-3 ${theme.cardBg} rounded-lg border ${theme.cardBorder}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                  >
                    <div className="flex items-center">
                      <Code2 size={16} className="text-blue-600 mr-3" />
                      <div>
                        <p className={`text-sm font-medium ${theme.text}`}>{project.name}</p>
                        <p className={`text-xs ${project.color}`}>{project.status}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold ${theme.textSecondary}`}>
                      {project.progress}%
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Company Badge */}
              <motion.div 
                className="flex items-center justify-center space-x-3 bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <img 
                    src="/mO.png" 
                    alt="LogikaBox Logo" 
                    className="w-6 h-6 object-contain filter brightness-0 invert"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-white font-bold text-sm hidden">LB</span>
                </div>
                <div className="text-center">
                  <p className={`text-sm font-semibold ${theme.text}`}>LogikaBox</p>
                  <p className={`text-xs ${theme.textSecondary}`}>Digital Solutions Partner</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
