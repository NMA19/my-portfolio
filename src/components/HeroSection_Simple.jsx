import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Download } from 'lucide-react';
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

  const techStack = ["React", "JavaScript", "Tailwind CSS", "TypeScript"];

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center pt-20 pb-16 ${theme.primary} transition-colors duration-300`}
      aria-label="Hero section - Mohamed Anis Nedjem, Frontend Developer"
    >
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${theme === 'dark' ? 'white' : 'black'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Location */}
            <motion.div 
              className={`flex items-center ${theme.textSecondary} text-sm font-medium`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <MapPin size={16} className="mr-2 text-blue-500" />
              El Eulma, Sétif, Algeria
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className={`text-5xl lg:text-7xl font-bold ${theme.text} leading-tight mb-6`}>
                <span className="block">Frontend</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              className={`text-xl ${theme.textSecondary} leading-relaxed max-w-xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Specialized in <span className="text-blue-600 dark:text-blue-400 font-semibold">React</span>, 
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> JavaScript</span>, and 
              <span className="text-pink-600 dark:text-pink-400 font-semibold"> Tailwind CSS</span> with over 3 years of 
              experience building dynamic web applications.
            </motion.p>

            {/* Tech Stack */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
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
              {socialLinks.map(({ icon: IconComponent, href, label, ariaLabel }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.textSecondary} hover:text-blue-600 transition-colors duration-300 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20`}
                  aria-label={ariaLabel}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Project Card */}
          <div className="lg:col-span-5">
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Status Indicator */}
              <div className="flex items-center mb-6">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full mr-3"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className={`text-sm ${theme.textSecondary} font-medium`}>
                  Currently Building
                </span>
              </div>

              {/* Project Title */}
              <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>
                Custom Web Applications
              </h3>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className={`text-sm ${theme.textSecondary}`}>@</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  LogikaBox
                </span>
              </div>
              
              <p className={`text-sm ${theme.textSecondary} mb-6 leading-relaxed`}>
                Leading frontend development across multiple industries with modern React solutions
              </p>
              
              {/* Progress Section */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-sm ${theme.textSecondary} font-medium`}>
                    Project Progress
                  </span>
                  <span className={`text-lg font-bold ${theme.text} text-green-600`}>
                    85%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-6">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                  />
                </div>

                {/* LogikaBox Badge */}
                <motion.div 
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-4 py-3 rounded-xl border border-blue-200/50 dark:border-blue-700/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <img 
                      src="/mO.png" 
                      alt="LogikaBox Logo" 
                      className="w-5 h-5 object-contain filter brightness-0 invert"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-white font-bold text-xs hidden">LB</span>
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${theme.text}`}>LogikaBox</p>
                    <p className={`text-xs ${theme.textSecondary}`}>Digital Solutions</p>
                  </div>
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
