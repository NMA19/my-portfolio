import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MapPin, Download, Code2, Sparkles, Zap, Star, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Floating Particles Animation
const FloatingParticle = ({ delay = 0, duration = 20, x = 0, y = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -100, 0],
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// Professional Typing Animation
const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + currentIndex * 100);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="border-r-2 border-blue-500 ml-1"
      />
    </span>
  );
};

// Interactive Code Block
const CodeBlock = () => (
  <motion.div
    className="relative bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-hidden border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
  >
    <div className="flex items-center mb-4">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <span className="ml-4 text-gray-400 text-xs">portfolio.js</span>
    </div>
    
    <div className="text-gray-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-purple-400">const</span>{' '}
        <span className="text-blue-400">developer</span>{' '}
        <span className="text-gray-400">=</span>{' '}
        <span className="text-yellow-400">{'{'}</span>
      </motion.div>
      
      <motion.div
        className="ml-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <span className="text-red-400">name</span>
        <span className="text-gray-400">:</span>{' '}
        <span className="text-green-400">'Anis Nedjem'</span>
        <span className="text-gray-400">,</span>
      </motion.div>
      
      <motion.div
        className="ml-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.5 }}
      >
        <span className="text-red-400">skills</span>
        <span className="text-gray-400">:</span>{' '}
        <span className="text-gray-400">['</span>
        <span className="text-green-400">React</span>
        <span className="text-gray-400">',</span>{' '}
        <span className="text-green-400">'JavaScript'</span>
        <span className="text-gray-400">'],</span>
      </motion.div>
      
      <motion.div
        className="ml-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
      >
        <span className="text-red-400">passion</span>
        <span className="text-gray-400">:</span>{' '}
        <span className="text-green-400">'Building Amazing Apps'</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.7, duration: 0.5 }}
      >
        <span className="text-yellow-400">{'}'}</span>
      </motion.div>
    </div>
  </motion.div>
);

const HeroSection = ({ scrollToSection }) => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity }}
      className={`relative min-h-screen ${theme.primary} overflow-hidden`}
    >
      {/* Advanced Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x * 100}% ${100 - mousePosition.y * 100}%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)
            `
          }}
        />
        
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
          animate={{ 
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.5}
            duration={15 + Math.random() * 10}
            x={Math.random() * 100}
            y={Math.random() * 100}
          />
        ))}

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-green-400/20 rounded-full blur animate-pulse"></div>
                  <div className="relative bg-green-50 dark:bg-green-900/30 backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 px-6 py-3 rounded-full">
                    <div className="flex items-center">
                      <motion.div
                        className="w-3 h-3 bg-green-500 rounded-full mr-3"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-green-700 dark:text-green-300 font-semibold text-sm">
                        Available for Freelance Projects
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main Heading with Typewriter */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className={`text-lg ${theme.textSecondary} mb-2`}>Hello, I'm</p>
                  <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black ${theme.text} leading-none`}>
                    ANIS NEDJEM
                  </h1>
                </motion.div>
                
                <motion.div
                  className="text-3xl md:text-4xl lg:text-5xl font-bold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    <TypewriterText text="Full-Stack Developer" delay={800} />
                  </span>
                </motion.div>
              </div>

              {/* Enhanced Description */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className={`text-xl ${theme.textSecondary} leading-relaxed max-w-2xl`}>
                  Crafting exceptional digital experiences with{' '}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">modern technologies</span>
                  {' '}and innovative solutions. Specialized in building scalable,{' '}
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">user-centric applications</span>
                  {' '}that drive business growth.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3">
                  {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10 text-sm font-medium"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.button
                  onClick={() => scrollToSection && scrollToSection('work')}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundPosition: 'right center',
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundSize: '200% 100%' }}
                >
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="button-bg"
                  />
                </motion.button>

                <motion.a
                  href="/cv.pdf"
                  download
                  className="group flex items-center justify-center border-2 border-blue-500/50 backdrop-blur-sm text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.02, borderColor: 'rgb(59 130 246)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download CV
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center space-x-6 pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <span className={`text-sm ${theme.textSecondary} font-medium`}>Connect with me:</span>
                <div className="flex space-x-4">
                  {[
                    { Icon: Github, href: "https://github.com/NMA19", label: "GitHub" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/anis-nedjem", label: "LinkedIn" },
                    { Icon: Mail, href: "mailto:med363839@gmail.com", label: "Email" }
                  ].map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${theme.textSecondary} hover:text-blue-600 dark:hover:text-blue-400 p-3 rounded-xl hover:bg-white/10 dark:hover:bg-black/20 backdrop-blur-sm transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-center space-x-2 text-sm text-gray-500 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <MapPin className="w-4 h-4 text-pink-500" />
                <span>El Eulma, Algeria</span>
              </motion.div>
            </div>

            {/* Right Column - Interactive Code Block */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <CodeBlock />
              
              {/* Floating Icons */}
              <div className="absolute -inset-10 pointer-events-none">
                {[
                  { Icon: Code2, delay: 2, duration: 6, x: 10, y: 20 },
                  { Icon: Zap, delay: 3, duration: 8, x: 80, y: 60 },
                  { Icon: Sparkles, delay: 4, duration: 7, x: 60, y: 10 },
                  { Icon: Star, delay: 5, duration: 9, x: 20, y: 80 }
                ].map(({ Icon, delay, duration, x, y }, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-blue-400/40"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration,
                      delay,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon size={24} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection && scrollToSection('about')}
          whileHover={{ y: -5 }}
        >
          <span className={`text-sm ${theme.textSecondary} mb-2 font-medium`}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-500"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
