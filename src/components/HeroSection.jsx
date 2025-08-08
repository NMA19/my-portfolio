import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/NMA19", label: "GitHub", ariaLabel: "Visit my GitHub profile" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anis-nedjem", label: "LinkedIn", ariaLabel: "Connect with me on LinkedIn" },
    { icon: Mail, href: "mailto:med363839@gmail.com", label: "Email", ariaLabel: "Send me an email" }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-24 pb-12"
      aria-label="Hero section - Mohamed Anis Nedjem, Frontend Developer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-neutral-600 text-lg mb-4 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <MapPin size={20} className="mr-2" />
              El Eulma, Sétif, Algeria
            </motion.p>
            
            <motion.h1 
              className="text-6xl lg:text-8xl font-bold leading-none mb-8 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              role="heading"
              aria-level="1"
            >
              Frontend
              <br />
              <span className="text-neutral-500">Developer</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Specialized in React, JavaScript, and Tailwind CSS with over 3 years of experience 
              building dynamic, user-centric web applications that drive business growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('work')}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('work'))}
                className="group px-8 py-4 bg-neutral-900 text-neutral-50 font-medium rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Navigate to work portfolio section"
              >
                View My Work
                <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
              
              <motion.div className="flex items-center space-x-6" role="list" aria-label="Social media links">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? "_self" : "_blank"}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="p-3 border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.ariaLabel}
                    role="listitem"
                  >
                    <social.icon size={20} aria-hidden="true" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            aria-label="Interactive technology showcase"
          >
            <div className="relative w-full h-96 lg:h-[600px] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/50">
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
                aria-hidden="true"
              />
              <motion.div
                className="absolute bottom-32 right-32 w-20 h-20 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-25"
                animate={{
                  y: [0, 15, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute top-32 left-16 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20"
                animate={{
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                aria-hidden="true"
              />
              
              {/* Main tech stack visualization */}
              <div className="absolute inset-0 flex items-center justify-center" role="img" aria-label="Technology stack showcase featuring React, JavaScript, Tailwind CSS, and HTML5">
                <div className="grid grid-cols-2 gap-6">
                  {/* Tech Stack Cards */}
                  {[
                    { name: "React", color: "from-cyan-400 to-blue-500", delay: 0, description: "Frontend library" },
                    { name: "JS", color: "from-yellow-400 to-orange-500", delay: 0.5, description: "Programming language" },
                    { name: "Tailwind", color: "from-teal-400 to-cyan-500", delay: 1, description: "CSS framework" },
                    { name: "HTML5", color: "from-orange-500 to-red-500", delay: 1.5, description: "Markup language" }
                  ].map((tech) => (
                    <motion.div
                      key={tech.name}
                      className={`w-24 h-24 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center shadow-lg cursor-pointer group`}
                      whileHover={{ scale: 1.1, rotate: tech.name === "React" ? 5 : -5 }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3 + tech.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: tech.delay
                      }}
                      title={`${tech.name} - ${tech.description}`}
                      role="button"
                      tabIndex={0}
                    >
                      <span className="text-white font-bold text-sm group-hover:scale-110 transition-transform">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/5 to-transparent" />
              
              {/* Enhanced info card */}
              <motion.div
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-neutral-200/50 shadow-xl max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                role="complementary"
                aria-label="Current work status"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-label="Currently active"></div>
                  <p className="text-sm text-neutral-600 font-medium">Currently working on</p>
                </div>
                <h3 className="font-bold text-lg mb-2">Custom Web Applications</h3>
                <p className="text-neutral-700 font-medium mb-1">@ LogikaBox</p>
                <p className="text-sm text-neutral-600 mb-4">Leading frontend development across multiple industries</p>
                
                {/* Progress indicators */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs text-neutral-600">
                    <span>Project Progress</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-1.5" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" aria-label="Project completion progress">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                {/* Additional stats */}
                <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-neutral-900">3+</p>
                    <p className="text-xs text-neutral-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-neutral-900">15+</p>
                    <p className="text-xs text-neutral-600">Projects Completed</p>
                  </div>
                </div>
              </motion.div>
              
              {/* LogikaBox branding */}
              <motion.div
                className="absolute top-8 right-8 bg-neutral-900/90 backdrop-blur-sm rounded-xl px-4 py-2 border border-neutral-700/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                role="img"
                aria-label="Currently employed at LogikaBox Digital Solutions"
              >
                <p className="text-white text-sm font-semibold">LogikaBox</p>
                <p className="text-neutral-300 text-xs">Digital Solutions</p>
                <div className="mt-1 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-neutral-400 text-xs">Active</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;