import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = ({ scrollToSection }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.primary} flex items-center justify-center px-6`}>
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Status Badge */}
        <motion.div 
          className="inline-flex items-center bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
          Available for Work
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className={`text-6xl md:text-8xl lg:text-9xl font-black ${theme.text} mb-6 leading-tight`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ANIS NEDJEM
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Frontend Developer
        </motion.h2>

        {/* Description */}
        <motion.p 
          className={`text-lg md:text-xl ${theme.textSecondary} mb-12 max-w-3xl mx-auto leading-relaxed`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Crafting exceptional digital experiences with React, JavaScript, and modern web technologies. 
          Building dynamic, user-centric applications that drive business growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={() => scrollToSection && scrollToSection('work')}
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          
          <a
            href="/cv.pdf"
            download
            className={`inline-flex items-center justify-center border-2 border-blue-500 ${theme.textSecondary} hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105`}
          >
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <a
            href="https://github.com/NMA19"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme.textSecondary} hover:text-gray-800 dark:hover:text-gray-200 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800`}
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/anis-nedjem"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme.textSecondary} hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800`}
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:med363839@gmail.com"
            className={`${theme.textSecondary} hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800`}
          >
            <Mail size={24} />
          </a>
        </motion.div>

        {/* Location */}
        <motion.div 
          className="flex items-center justify-center space-x-2 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <MapPin className="w-4 h-4" />
          <span>El Eulma, Algeria</span>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
