import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MapPin, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = ({ scrollToSection }) => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Github, href: "https://github.com/NMA19", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anis-nedjem", label: "LinkedIn" },
    { icon: Mail, href: "mailto:med363839@gmail.com", label: "Email" }
  ];

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center ${theme.primary} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Location */}
            <motion.div 
              className={`flex items-center ${theme.textSecondary} text-sm`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MapPin size={16} className="mr-2" />
              El Eulma, Sétif, Algeria
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className={`text-5xl lg:text-7xl font-bold ${theme.text} leading-tight`}>
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
              building modern web applications.
            </motion.p>

            {/* Actions */}
            <motion.div 
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button
                onClick={() => scrollToSection('work')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                View Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>

              <a
                href="/cv.pdf"
                download
                className={`border border-gray-300 dark:border-gray-600 ${theme.text} hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors flex items-center`}
              >
                <Download className="mr-2 w-4 h-4" />
                Resume
              </a>
            </motion.div>

            {/* Social */}
            <motion.div 
              className="flex space-x-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.textSecondary} hover:text-blue-600 transition-colors p-2`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Side Card */}
          <div className="lg:col-span-4">
            <motion.div
              className={`${theme.cardBg} ${theme.cardBorder} rounded-xl p-6 shadow-sm`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Current Work */}
              <div className="text-center mb-6">
                <p className={`text-sm ${theme.textSecondary} mb-2`}>Currently</p>
                <h3 className={`text-lg font-semibold ${theme.text} mb-1`}>
                  Frontend Developer
                </h3>
                <p className="text-blue-600 text-sm font-medium">@ LogikaBox</p>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm ${theme.text}`}>Project Progress</span>
                  <span className={`text-sm font-semibold ${theme.text}`}>85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="bg-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 1, duration: 1.5 }}
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <p className={`text-sm font-medium ${theme.text}`}>Skills</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'Tailwind', 'TypeScript'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className={`text-sm ${theme.textSecondary}`}>Available for projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
