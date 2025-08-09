import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Download, Briefcase, Calendar, Zap, Code, Palette, Layers, Cherry } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = ({ scrollToSection }) => {
  const { theme } = useTheme();

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/NMA19", 
      label: "GitHub", 
      ariaLabel: "Visit my GitHub profile",
      color: "hover:text-gray-700 dark:hover:text-gray-300"
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
      color: "hover:text-green-600"
    }
  ];

  const skills = [
    { name: "React", icon: Code, level: 95, color: "from-pink-500 to-rose-500" },
    { name: "JavaScript", icon: Zap, level: 92, color: "from-cherry-500 to-pink-500" },
    { name: "Tailwind", icon: Palette, level: 90, color: "from-rose-500 to-pink-600" },
    { name: "TypeScript", icon: Layers, level: 85, color: "from-pink-600 to-fuchsia-500" }
  ];

  const projects = [
    { name: "E-commerce Platform", status: "Completed", progress: 100 },
    { name: "Dashboard Analytics", status: "In Progress", progress: 75 },
    { name: "Mobile App UI", status: "Planning", progress: 25 }
  ];

  // Sakura Petals Animation Component
  const SakuraPetal = ({ delay = 0, x = 0, size = 'w-2 h-2' }) => (
    <motion.div
      className={`absolute ${size} opacity-20`}
      style={{ left: `${x}%` }}
      initial={{ y: -20, rotate: 0, opacity: 0 }}
      animate={{ 
        y: ['0vh', '100vh'], 
        rotate: [0, 360],
        opacity: [0, 0.6, 0]
      }}
      transition={{
        duration: Math.random() * 10 + 15,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    >
      <div className="bg-gradient-to-br from-pink-300 to-rose-400 rounded-full transform rotate-45">
        <div className="w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 rounded-full transform -rotate-45 scale-75"></div>
      </div>
    </motion.div>
  );

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center pt-20 pb-16 ${theme.primary} transition-colors duration-300 overflow-hidden`}
      aria-label="Hero section - Mohamed Anis Nedjem, Frontend Developer"
    >
      {/* Sakura Background */}
      <div className="absolute inset-0">
        {/* Sakura Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-rose-50/20 to-white/10 dark:from-pink-900/10 dark:via-rose-900/5 dark:to-transparent"></div>
        
        {/* Floating Sakura Petals */}
        {[...Array(25)].map((_, i) => (
          <SakuraPetal 
            key={i} 
            delay={i * 2} 
            x={Math.random() * 100} 
            size={Math.random() > 0.5 ? 'w-2 h-2' : 'w-3 h-3'}
          />
        ))}
        
        {/* Sakura Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-rose-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cherry-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-rose-300/10 to-pink-500/10 rounded-full blur-2xl"></div>
        
        {/* Subtle Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ec4899 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Location & Status with Sakura Touch */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className={`flex items-center ${theme.textSecondary} text-sm font-medium`}>
                <MapPin size={16} className="mr-2 text-pink-500" />
                El Eulma, Sétif, Algeria
              </div>
              
              <div className="flex items-center bg-pink-50 dark:bg-pink-900/20 px-4 py-2 rounded-full border border-pink-200 dark:border-pink-700">
                <motion.div
                  className="w-2 h-2 bg-pink-400 rounded-full mr-2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Cherry size={14} className="text-pink-500 mr-2" />
                <span className="text-xs font-medium text-pink-600 dark:text-pink-400">
                  Available for Work
                </span>
              </div>
            </motion.div>

            {/* Main Title with Sakura Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className={`text-6xl lg:text-8xl font-bold ${theme.text} leading-tight mb-6`}>
                <span className="block">Frontend</span>
                <span className="block bg-gradient-to-r from-pink-600 via-rose-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              className={`text-xl ${theme.textSecondary} leading-relaxed max-w-2xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Crafting beautiful digital experiences with the elegance of cherry blossoms. 
              Specialized in building responsive, performant applications that bloom with 
              modern technologies and graceful user interactions.
            </motion.p>

            {/* Skills Grid with Sakura Theme */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-5 border border-pink-200/30 dark:border-pink-700/30 shadow-lg"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-r ${skill.color} text-white mr-3 shadow-md`}>
                        <skill.icon size={16} />
                      </div>
                      <span className={`font-semibold ${theme.text}`}>{skill.name}</span>
                    </div>
                    <span className={`text-sm font-bold ${theme.textSecondary}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-pink-100 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.8 + i * 0.2, duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with Sakura Styling */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('work')}
                className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Briefcase className="mr-2 w-5 h-5" />
                View My Work
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </motion.button>

              <motion.a
                href="/cv.pdf"
                download
                className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center"
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
              {socialLinks.map(({ icon: IconComponent, href, label, ariaLabel, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.textSecondary} ${color} transition-all duration-300 p-3 rounded-2xl hover:bg-pink-50/70 dark:hover:bg-pink-900/20 backdrop-blur-sm border border-transparent hover:border-pink-200 dark:hover:border-pink-700`}
                  aria-label={ariaLabel}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Professional Sakura Card */}
          <div className="lg:col-span-5">
            <motion.div
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-pink-200/50 dark:border-pink-700/30 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Sakura Decoration in Card */}
              <div className="absolute top-4 right-4 opacity-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Cherry size={40} className="text-pink-400" />
                </motion.div>
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className={`text-2xl font-bold ${theme.text} mb-1`}>
                    Project Dashboard
                  </h3>
                  <p className={`text-sm ${theme.textSecondary}`}>
                    Current work overview
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl shadow-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Current Project Highlight */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl p-6 mb-6 border border-pink-200/50 dark:border-pink-700/30">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className={`text-lg font-bold ${theme.text} mb-1`}>
                      Custom Web Applications
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} className="text-pink-500" />
                      <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                        @ LogikaBox
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent`}>
                      85%
                    </p>
                    <p className={`text-xs ${theme.textSecondary}`}>Complete</p>
                  </div>
                </div>
                
                <p className={`text-sm ${theme.textSecondary} mb-4 leading-relaxed`}>
                  Leading frontend development for enterprise web applications with modern React ecosystem
                </p>
                
                <div className="w-full bg-pink-100 dark:bg-gray-700 rounded-full h-3 mb-4">
                  <motion.div 
                    className="bg-gradient-to-r from-pink-500 to-rose-500 h-3 rounded-full relative overflow-hidden"
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

                <div className="flex justify-between text-xs text-pink-600/70 dark:text-pink-400/70">
                  <span>Started: Jan 2024</span>
                  <span>8 of 10 milestones</span>
                </div>
              </div>

              {/* Recent Projects */}
              <div className="space-y-3 mb-6">
                <h5 className={`text-sm font-semibold ${theme.text} mb-3`}>Recent Projects</h5>
                {projects.map((project, i) => (
                  <motion.div
                    key={project.name}
                    className="flex items-center justify-between p-3 bg-pink-50/50 dark:bg-gray-700/50 rounded-lg border border-pink-100 dark:border-pink-800/30"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        project.status === 'Completed' ? 'bg-pink-400' :
                        project.status === 'In Progress' ? 'bg-rose-400' : 'bg-gray-400'
                      }`} />
                      <div>
                        <p className={`text-sm font-medium ${theme.text}`}>{project.name}</p>
                        <p className={`text-xs ${theme.textSecondary}`}>{project.status}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold ${theme.textSecondary}`}>
                      {project.progress}%
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* LogikaBox Enhanced Badge with Sakura Theme */}
              <motion.div 
                className="flex items-center justify-center space-x-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 px-6 py-4 rounded-2xl border border-pink-200/50 dark:border-pink-600/50"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
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
                  <p className={`text-sm font-bold ${theme.text}`}>LogikaBox</p>
                  <p className={`text-xs ${theme.textSecondary}`}>Digital Solutions Partner</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-pink-400 rounded-full"
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
