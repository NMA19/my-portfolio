import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MapPin } from 'lucide-react';
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
    { name: "React", level: 95 },
    { name: "JS", level: 92 },
    { name: "Tailwind", level: 90 },
    { name: "HTML5", level: 95 }
  ];

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center ${theme.primary} transition-colors duration-300`}
      aria-label="Hero section - Mohamed Anis Nedjem, Frontend Developer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Location */}
            <motion.div 
              className={`flex items-center ${theme.textSecondary} text-sm`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <MapPin size={16} className="mr-2" />
              El Eulma, Sétif, Algeria
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className={`text-5xl lg:text-7xl font-bold ${theme.text} leading-tight mb-4`}>
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

            {/* CTA Button */}
            <motion.div 
              className="flex items-center space-x-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('work')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: IconComponent, href, label, ariaLabel }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${theme.textSecondary} hover:text-blue-600 transition-colors duration-300`}
                    aria-label={ariaLabel}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Skills Icons */}
            <motion.div 
              className="flex items-center space-x-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                >
                  <div className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-2 ${theme.textSecondary}`}>
                    <span className="text-sm font-semibold">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Project Card */}
          <div className="lg:col-span-4">
            <motion.div
              className={`${theme.cardBg} ${theme.cardBorder} rounded-2xl p-6 shadow-lg`}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Card Header */}
              <div className="text-center mb-6">
                <h3 className={`text-sm ${theme.textSecondary} mb-2`}>
                  Currently working on
                </h3>
                <h2 className={`text-xl font-bold ${theme.text} mb-1`}>
                  Custom Web Applications
                </h2>
                <p className="text-blue-600 font-medium text-sm">
                  @ LogikaBox
                </p>
                <p className={`text-sm ${theme.textSecondary} mt-2`}>
                  Leading frontend development across multiple industries
                </p>
              </div>

              {/* Progress Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-sm font-medium ${theme.text}`}>
                    Project Progress
                  </span>
                  <span className={`text-sm font-bold ${theme.text}`}>
                    85%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="bg-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Company Badge */}
              <motion.div 
                className="flex items-center justify-center space-x-3 bg-gray-50 dark:bg-gray-700/50 px-4 py-3 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
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
                <div className="text-center">
                  <p className={`text-sm font-semibold ${theme.text}`}>LogikaBox</p>
                  <p className={`text-xs ${theme.textSecondary}`}>Digital Solutions</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
