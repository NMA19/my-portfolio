import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Download, Star, Zap, Code2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Enhanced 3D Text Component with Advanced Effects
const Text3D = ({ children, className = '', delay = 0, intensity = 1 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: (e.clientX - centerX) / rect.width * intensity * 20,
          y: (e.clientY - centerY) / rect.height * intensity * 20
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const x = useSpring(mousePosition.x, springConfig);
  const y = useSpring(mousePosition.y, springConfig);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        transform: useTransform([x, y], 
          (latestX, latestY) => 
            `perspective(1200px) rotateX(${latestY * 0.15}deg) rotateY(${latestX * 0.15}deg) translateZ(${isHovered ? 20 : 0}px)`
        )
      }}
      initial={{ opacity: 0, y: 50, rotateX: 90, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={{ 
        delay,
        duration: 1.2,
        type: "spring",
        stiffness: 80,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </motion.div>
  );
};

// Professional Floating Particles System
const FloatingParticles = ({ count = 20 }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Geometric Particles */}
    {[...Array(count)].map((_, i) => {
      const shapes = ['🔷', '🔸', '✨', '💎', '⭐', '🌟'];
      const shape = shapes[i % shapes.length];
      
      return (
        <motion.div
          key={`particle-${i}`}
          className="absolute opacity-30"
          style={{
            fontSize: Math.random() * 12 + 8,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: `hsl(${200 + Math.random() * 160}, 70%, 60%)`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          {shape}
        </motion.div>
      );
    })}
    
    {/* Gradient Orbs */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`orb-${i}`}
        className="absolute rounded-full blur-xl opacity-20"
        style={{
          width: Math.random() * 200 + 100,
          height: Math.random() * 200 + 100,
          left: `${Math.random() * 80 + 10}%`,
          top: `${Math.random() * 80 + 10}%`,
          background: `linear-gradient(135deg, 
            hsl(${220 + i * 40}, 80%, 60%), 
            hsl(${280 + i * 40}, 80%, 60%))`
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, Math.sin(i) * 100, 0],
          y: [0, Math.cos(i) * 100, 0]
        }}
        transition={{
          duration: 15 + i * 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

// Enhanced 3D Dog with Professional Animation
const Professional3DDog = () => (
  <motion.div
    className="relative w-40 h-40 mx-auto"
    style={{ transformStyle: 'preserve-3d' }}
  >
    {/* Rotating Ring */}
    <motion.div
      className="absolute inset-0 border-4 border-blue-400 border-opacity-30 rounded-full opacity-30"
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Dog with Advanced Animation */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center text-9xl filter drop-shadow-2xl"
      animate={{
        rotateY: [0, 360],
        y: [0, -15, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
      whileHover={{
        scale: 1.2,
        rotateZ: 10,
        transition: { duration: 0.3 }
      }}
    >
      🐕
    </motion.div>
    
    {/* Floating Icons Around Dog */}
    {[Code2, Zap, Star].map((Icon, i) => (
      <motion.div
        key={i}
        className="absolute text-blue-500 opacity-60"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          rotate: [0, 360],
          x: Math.cos((i * 120) * Math.PI / 180) * 80,
          y: Math.sin((i * 120) * Math.PI / 180) * 80
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: i * 0.5
        }}
      >
        <Icon size={20} />
      </motion.div>
    ))}
  </motion.div>
);

const HeroSection = ({ scrollToSection }) => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/NMA19", 
      label: "GitHub", 
      ariaLabel: "Visit my GitHub profile",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/anis-nedjem", 
      label: "LinkedIn", 
      ariaLabel: "Connect with me on LinkedIn",
      color: "hover:text-blue-600"
    },
    { 
      icon: Mail, 
      href: "mailto:med363839@gmail.com", 
      label: "Email", 
      ariaLabel: "Send me an email",
      color: "hover:text-red-500"
    }
  ];

  const techStack = [
    { name: "React", icon: "⚛️", level: 95 },
    { name: "JavaScript", icon: "🟨", level: 92 },
    { name: "Tailwind", icon: "🎨", level: 90 },
    { name: "TypeScript", icon: "🔷", level: 85 }
  ];

  return (
    <section 
      ref={containerRef}
      id="home" 
      className={`relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden ${theme.primary} transition-all duration-500`}
      aria-label="Hero section - Mohamed Anis Nedjem, Frontend Developer"
      style={{ 
        perspective: '2000px',
        transformStyle: 'preserve-3d',
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
          rgba(59, 130, 246, 0.05) 0%, 
          rgba(147, 51, 234, 0.03) 50%, 
          transparent 100%)`
      }}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <FloatingParticles count={15} />
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${theme === 'dark' ? 'white' : 'black'} 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Text Content */}
          <div className="space-y-10" style={{ transform: 'translateZ(50px)' }}>
            {/* Professional Badge */}
            <Text3D 
              className="inline-flex items-center"
              delay={0.1}
              intensity={0.5}
            >
              <motion.div 
                className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-4 py-2 rounded-full border border-blue-200/50 dark:border-blue-700/50 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                <span className={`text-sm font-medium ${theme.textSecondary}`}>
                  Available for Freelance Projects
                </span>
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full ml-3"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </Text3D>

            {/* Location with Enhanced Design */}
            <Text3D 
              className={`flex items-center ${theme.textSecondary} text-sm font-medium`}
              delay={0.2}
              intensity={0.3}
            >
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <MapPin size={18} className="mr-3 text-pink-500" />
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                  El Eulma, Sétif, Algeria
                </span>
              </motion.div>
            </Text3D>

            {/* Enhanced Title with Better Typography */}
            <Text3D delay={0.4} intensity={1}>
              <h1 className={`text-7xl lg:text-9xl font-black ${theme.text} leading-none tracking-tight`}>
                <motion.span 
                  className="block relative"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Frontend
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-80"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative"
                  whileHover={{ x: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Developer
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full opacity-80"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [360, 180, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                </motion.span>
              </h1>
            </Text3D>

            {/* Enhanced Description */}
            <Text3D 
              className={`text-xl leading-relaxed max-w-2xl ${theme.textSecondary}`}
              delay={0.6}
              intensity={0.5}
            >
              <motion.p
                className="relative"
                whileHover={{ y: -2 }}
              >
                Crafting <span className="text-blue-600 dark:text-blue-400 font-semibold">exceptional digital experiences</span> with 
                React, JavaScript, and Tailwind CSS. Over <span className="text-purple-600 dark:text-purple-400 font-semibold">3 years</span> of 
                building dynamic, user-centric web applications that <span className="text-pink-600 dark:text-pink-400 font-semibold">drive business growth</span>.
              </motion.p>
            </Text3D>

            {/* Tech Stack Mini Display */}
            <Text3D 
              className="flex flex-wrap gap-3"
              delay={0.7}
              intensity={0.3}
            >
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center bg-white/10 dark:bg-black/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 dark:border-white/10"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    backgroundColor: "rgba(59, 130, 246, 0.1)"
                  }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-lg mr-2">{tech.icon}</span>
                  <span className={`text-sm font-medium ${theme.textSecondary}`}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </Text3D>

            {/* Enhanced CTA Buttons */}
            <Text3D 
              className="flex flex-wrap gap-4"
              delay={0.8}
              intensity={0.7}
            >
              <motion.button
                onClick={() => scrollToSection('work')}
                className="group relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative z-10 flex items-center text-lg">
                  View My Work
                  <ArrowUpRight className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </motion.button>

              <motion.a
                href="/cv.pdf"
                download
                className="group flex items-center border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  rotateX: -5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-3 w-5 h-5" />
                Download CV
              </motion.a>
            </Text3D>

            {/* Enhanced Social Links */}
            <Text3D 
              className="flex space-x-6"
              delay={1.0}
              intensity={0.5}
            >
              {socialLinks.map(({ icon: Icon, href, label, ariaLabel, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.textSecondary} ${color} transition-all duration-300 p-4 rounded-2xl hover:bg-white/10 dark:hover:bg-black/10 backdrop-blur-sm border border-transparent hover:border-white/20`}
                  aria-label={ariaLabel}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 15,
                    y: -8
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Icon size={28} />
                </motion.a>
              ))}
            </Text3D>
          </div>

          {/* Right Column - Enhanced Professional Dashboard */}
          <div className="relative lg:h-96" style={{ transform: 'translateZ(30px)' }}>
            <motion.div
              className="relative w-full h-96 lg:h-[700px] bg-gradient-to-br from-white/80 via-blue-50/80 to-purple-50/80 dark:from-gray-900/80 dark:via-blue-900/20 dark:to-purple-900/20 rounded-3xl overflow-hidden shadow-2xl border border-white/50 dark:border-gray-700/50 backdrop-blur-xl"
              initial={{ opacity: 0, rotateY: 30, scale: 0.8, z: -100 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
              transition={{ delay: 0.6, duration: 1.5, type: "spring", stiffness: 60 }}
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ 
                rotateY: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Enhanced Animated Background Elements */}
              <motion.div
                className="absolute top-16 right-16 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-2xl"
                animate={{
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-blue-500/30 rounded-full blur-2xl"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 0.8, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              {/* Professional Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Center Content Dashboard */}
              <div className="absolute inset-0 flex flex-col p-8">
                {/* Header Section */}
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className="flex justify-center mb-6">
                    <Professional3DDog />
                  </div>
                  
                  <motion.h3 
                    className={`text-2xl font-bold ${theme.text} mb-2`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Development Dashboard
                  </motion.h3>
                  
                  <p className={`text-sm ${theme.textSecondary} opacity-80`}>
                    Real-time project insights & analytics
                  </p>
                </motion.div>

                {/* Tech Stack Visualization */}
                <motion.div 
                  className="grid grid-cols-2 gap-4 mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      className="bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 dark:border-white/10"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(59, 130, 246, 0.1)" 
                      }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className={`text-xs font-bold ${theme.text}`}>
                          {tech.level}%
                        </span>
                      </div>
                      <p className={`text-sm font-medium ${theme.text} mb-2`}>
                        {tech.name}
                      </p>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ delay: 1.5 + i * 0.2, duration: 1.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Current Project Section */}
                <motion.div 
                  className="bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/40 dark:border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <motion.div
                        className="flex items-center mb-2"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-3 h-3 bg-green-400 rounded-full mr-3"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <p className={`text-sm ${theme.textSecondary} font-medium`}>
                          Currently Building
                        </p>
                      </motion.div>
                      
                      <h4 className={`text-lg font-bold ${theme.text} mb-1`}>
                        Custom Web Applications
                      </h4>
                      
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm ${theme.textSecondary}`}>@</span>
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          LogikaBox
                        </span>
                      </div>
                    </div>

                    <motion.div
                      className="text-right"
                      whileHover={{ scale: 1.1 }}
                    >
                      <p className={`text-2xl font-bold ${theme.text} bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent`}>
                        85%
                      </p>
                      <p className={`text-xs ${theme.textSecondary}`}>Complete</p>
                    </motion.div>
                  </div>
                  
                  <p className={`text-sm ${theme.textSecondary} mb-6 leading-relaxed`}>
                    Leading frontend development across multiple industries with cutting-edge React solutions
                  </p>
                  
                  {/* Enhanced Progress Bar */}
                  <div className="relative">
                    <div className="flex justify-between items-center mb-3">
                      <span className={`text-xs ${theme.textSecondary} font-medium`}>
                        Project Progress
                      </span>
                      <span className={`text-xs ${theme.textSecondary}`}>
                        8 of 10 milestones
                      </span>
                    </div>
                    
                    <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "85%", opacity: 1 }}
                        transition={{ delay: 2.5, duration: 2.5, ease: "easeOut" }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30 rounded-full"
                          animate={{ x: [-100, 400] }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: 3
                          }}
                        />
                      </motion.div>
                      
                      {/* Progress Indicators */}
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute top-1/2 transform -translate-y-1/2 w-1 h-6 ${
                            i < 8 ? 'bg-white' : 'bg-gray-400'
                          } rounded-full opacity-60`}
                          style={{ left: `${(i + 1) * 10}%` }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 0.6, scale: 1 }}
                          transition={{ delay: 2.8 + i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* LogikaBox Enhanced Badge */}
                  <motion.div 
                    className="flex items-center justify-center space-x-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 px-6 py-4 rounded-2xl border border-blue-200/30 dark:border-blue-700/30 shadow-lg mt-6 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 3.2, duration: 1, type: "spring" }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                      y: -5
                    }}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center overflow-hidden shadow-lg"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
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
                    </motion.div>
                    
                    <div className="text-center">
                      <p className={`text-sm font-bold ${theme.text}`}>LogikaBox</p>
                      <p className={`text-xs ${theme.textSecondary}`}>Digital Solutions Partner</p>
                    </div>
                    
                    <motion.div
                      className="flex space-x-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.8 }}
                    >
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
                    </motion.div>
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
