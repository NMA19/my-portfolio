import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = ({ 
  activeSection, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection 
}) => {
  const { theme } = useTheme();
  
  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full ${theme.primary}/80 backdrop-blur-md z-40 ${theme.border} border-b transition-colors duration-300`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold tracking-tight cursor-pointer ${theme.text}`}
            onClick={() => scrollToSection('home')}
            onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('home'))}
            tabIndex={0}
            role="button"
            aria-label="Navigate to home section"
          >
            Mohamed Anis Nedjem
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12" role="menubar">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(item.id))}
                className={`text-sm font-medium tracking-wide transition-colors relative ${
                  activeSection === item.id 
                    ? theme.text 
                    : `${theme.textSecondary} hover:${theme.text.replace('text-', 'hover:text-')}`
                }`}
                whileHover={{ y: -2 }}
                role="menuitem"
                aria-current={activeSection === item.id ? 'page' : undefined}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${theme.text.replace('text-', 'bg-')}`}
                  />
                )}
              </motion.button>
            ))}
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full hover:opacity-90 transition-all inline-flex items-center ${theme.shadowLg}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download resume (opens in new tab)"
            >
              Resume
              <Download size={16} className="ml-2" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 ${theme.text}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={(e) => handleKeyDown(e, () => setIsMenuOpen(!isMenuOpen))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${theme.secondary}/95 backdrop-blur-md ${theme.border} border-t transition-colors duration-300`}
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, () => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  })}
                  className={`block w-full text-left text-lg font-medium transition-colors ${
                    activeSection === item.id 
                      ? `${theme.text} border-l-4 ${theme.accent.replace('bg-', 'border-')} pl-4` 
                      : `${theme.textSecondary} hover:${theme.text.replace('text-', 'hover:text-')} pl-0`
                  }`}
                  whileHover={{ x: 10 }}
                  role="menuitem"
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full mt-4 transition-all duration-300 ${theme.shadowLg}`}
                whileHover={{ scale: 1.05 }}
                aria-label="Download resume (opens in new tab)"
              >
                Resume
                <Download size={16} className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;