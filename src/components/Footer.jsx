import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart, Coffee, Code, MapPin, Calendar, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Floating Sakura for Footer
const FooterSakura = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-pink-300 opacity-40"
        style={{
          left: `${20 + i * 20}%`,
          top: `${Math.random() * 50}%`,
        }}
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 15, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut"
        }}
      >
        🌸
      </motion.div>
    ))}
  </div>
);

const Footer = ({ scrollToSection }) => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/NMA19", 
      label: "GitHub",
      color: "hover:text-gray-900"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/anis-nedjem", 
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    { 
      icon: Mail, 
      href: "mailto:med363839@gmail.com", 
      label: "Email",
      color: "hover:text-red-500"
    }
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Work", id: "work" },
    { name: "Services", id: "services" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" }
  ];

  const skills = ["React", "JavaScript", "Tailwind CSS", "Node.js", "HTML5", "CSS3"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className={`${theme.secondary} ${theme.text} py-16 ${theme.border} border-t transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Mohamed Anis Nedjem
            </motion.h3>
            <p className="text-neutral-300 mb-6 leading-relaxed max-w-md">
              Frontend Developer specializing in React and modern web technologies. 
              Creating digital experiences that make a difference, one project at a time.
            </p>
            
            {/* Location & Availability */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-neutral-400">
                <MapPin size={16} />
                <span className="text-sm">El Eulma, Sétif, Algeria</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-400">
                <Calendar size={16} />
                <span className="text-sm">Available for new projects</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Email" ? "_self" : "_blank"}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className={`p-3 bg-neutral-800 rounded-full transition-all ${social.color} hover:bg-neutral-700 hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Visit my ${social.label}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-neutral-400 hover:text-white transition-colors text-left"
                  whileHover={{ x: 5 }}
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Skills & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm hover:bg-neutral-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter/Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 mb-12 border border-neutral-700"
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-3">Ready to start your project?</h4>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} className="mr-2" />
                Get In Touch
              </motion.button>
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-neutral-600 rounded-full font-medium hover:border-neutral-500 hover:bg-neutral-800 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4 text-neutral-400">
              <p className="text-sm">
                © {currentYear} Mohamed Anis Nedjem. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-neutral-400">
                <span className="text-sm">Built with</span>
                <Heart size={16} className="text-red-500" />
                <span className="text-sm">and</span>
                <Coffee size={16} className="text-yellow-500" />
                <span className="text-sm">using</span>
                <Code size={16} className="text-blue-500" />
              </div>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;