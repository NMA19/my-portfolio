import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Enhanced 3D Text Component
const Text3D = ({ children, className = '', delay = 0 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
      }}
      initial={{ opacity: 0, y: 50, rotateX: 90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        delay,
        duration: 1,
        type: "spring",
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  );
};

// Floating Sakura Petals Component
const FloatingSakura = ({ count = 8 }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-pink-300 opacity-40"
        style={{
          fontSize: Math.random() * 8 + 12,
          left: `${Math.random() * 100}%`,
        }}
        initial={{ y: -50, rotate: 0 }}
        animate={{ 
          y: window.innerHeight + 100,
          rotate: 360,
          x: Math.sin(i) * 50
        }}
        transition={{
          duration: Math.random() * 15 + 20,
          repeat: Infinity,
          delay: Math.random() * 10,
          ease: "linear"
        }}
      >
        🌸
      </motion.div>
    ))}
  </div>
);

// Simple 3D Dog Component (placeholder for now)
const Simple3DDog = () => (
  <motion.div
    className="relative w-32 h-32 mx-auto"
    animate={{
      rotateY: [0, 360],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    <motion.div
      className="text-8xl filter drop-shadow-lg"
      animate={{
        y: [0, -10, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      🐕
    </motion.div>
  </motion.div>
);

const HeroSection = ({ scrollToSection }) => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Github, href: "https://github.com/NMA19", label: "GitHub", ariaLabel: "Visit my GitHub profile" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anis-nedjem", label: "LinkedIn", ariaLabel: "Connect with me on LinkedIn" },
    { icon: Mail, href: "mailto:med363839@gmail.com", label: "Email", ariaLabel: "Send me an email" }
  ];

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center pt-24 pb-12 ${theme.primary} transition-colors duration-300`}
      aria-label="Hero section - Mohamed Anis Nedjem, Frontend Developer"
      style={{ 
        perspective: '2000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        {/* Floating Sakura Background */}
        <FloatingSakura count={6} />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8" style={{ transform: 'translateZ(50px)' }}>
            {/* Location */}
            <Text3D 
              className={`flex items-center ${theme.textSecondary} text-sm font-medium`}
              delay={0.2}
            >
              <MapPin size={16} className="mr-2 text-pink-500" />
              El Eulma, Sétif, Algeria
            </Text3D>

            {/* Title */}
            <Text3D delay={0.4}>
              <h1 className={`text-6xl lg:text-8xl font-bold ${theme.text} leading-tight`}>
                <span className="block">Frontend</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </Text3D>

            {/* Description */}
            <Text3D 
              className={`text-lg ${theme.textSecondary} leading-relaxed max-w-2xl`}
              delay={0.6}
            >
              Specialized in React, JavaScript, and Tailwind CSS with over 3 years of 
              experience building dynamic, user-centric web applications that drive business growth.
            </Text3D>

            {/* CTA Buttons */}
            <Text3D 
              className="flex flex-wrap gap-4"
              delay={0.8}
            >
              <motion.button
                onClick={() => scrollToSection('work')}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </motion.button>
            </Text3D>

            {/* Social Links */}
            <Text3D 
              className="flex space-x-6"
              delay={1.0}
            >
              {socialLinks.map(({ icon: IconComponent, href, label, ariaLabel }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.textSecondary} hover:text-blue-500 transition-all duration-300 p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20`}
                  aria-label={ariaLabel}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 15,
                    y: -5
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <IconComponent size={24} />
                </motion.a>
              ))}
            </Text3D>
          </div>

          {/* Right Column - Project Progress Card */}
          <div className="relative lg:h-96" style={{ transform: 'translateZ(30px)' }}>
            <motion.div
              className="relative w-full h-96 lg:h-[600px] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 backdrop-blur-sm"
              initial={{ opacity: 0, rotateY: 30, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 1.2, type: "spring" }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                {/* 3D Dog */}
                <motion.div
                  className="mb-8"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1, type: "spring" }}
                >
                  <Simple3DDog />
                </motion.div>

                {/* Tech Stack Icons */}
                <div className="flex justify-center space-x-6 mb-6">
                  <motion.div 
                    className="text-2xl"
                    animate={{ rotate: [0, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ⚛️
                  </motion.div>
                  <motion.div 
                    className="text-2xl"
                    animate={{ rotate: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    🎨
                  </motion.div>
                  <motion.div 
                    className="text-2xl"
                    animate={{ rotate: [0, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    💎
                  </motion.div>
                </div>

                {/* Tech Stack Labels */}
                <div className="flex justify-center space-x-6 mb-8">
                  <span className={`text-xs ${theme.textSecondary} font-medium`}>ReactJS</span>
                  <span className={`text-xs ${theme.textSecondary} font-medium`}>Tailwind</span>
                  <span className={`text-xs ${theme.textSecondary} font-medium`}>HTML5</span>
                </div>

                {/* Currently Working Section */}
                <motion.div 
                  className="text-center w-full max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <div className="relative mb-4">
                    <motion.div
                      className="absolute -top-2 -left-2 w-2 h-2 bg-green-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <p className={`text-sm ${theme.textSecondary} mb-3 font-medium`}>Currently working on</p>
                  </div>
                  
                  <h3 className={`text-xl font-bold ${theme.text} mb-2`}>
                    Custom Web Applications
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className={`text-sm ${theme.textSecondary}`}>@</span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      LogikaBox
                    </span>
                  </div>
                  
                  <p className={`text-xs ${theme.textSecondary} mb-6 leading-relaxed`}>
                    Leading frontend development across multiple industries
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-xs ${theme.textSecondary} font-medium`}>Project Progress</span>
                      <motion.span 
                        className={`text-xs font-bold ${theme.text} bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.5, type: "spring" }}
                      >
                        85%
                      </motion.span>
                    </div>
                    <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "85%", opacity: 1 }}
                        transition={{ delay: 2, duration: 2, ease: "easeOut" }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white opacity-30 rounded-full"
                          animate={{ x: [-100, 300] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* LogikaBox Badge */}
                  <motion.div 
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-4 py-2 rounded-xl border border-blue-200/50 dark:border-blue-700/50 shadow-md mt-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.8, duration: 0.8, type: "spring" }}
                  >
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center overflow-hidden shadow-sm"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <img 
                        src="/mO.png" 
                        alt="LogikaBox Logo" 
                        className="w-4 h-4 object-contain filter brightness-0 invert"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <span className="text-white font-bold text-xs hidden">LB</span>
                    </motion.div>
                    <div className="text-left">
                      <p className={`text-xs font-bold ${theme.text}`}>LogikaBox</p>
                      <p className={`text-xs ${theme.textSecondary}`}>Digital Solutions</p>
                    </div>
                  </motion.div>
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
