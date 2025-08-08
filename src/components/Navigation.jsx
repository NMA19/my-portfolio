import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navigation = ({ 
  activeSection, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection 
}) => {
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
      className="fixed top-0 w-full bg-neutral-50/80 backdrop-blur-md z-40 border-b border-neutral-200"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tight cursor-pointer"
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
                    ? 'text-neutral-900' 
                    : 'text-neutral-500 hover:text-neutral-900'
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
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neutral-900"
                  />
                )}
              </motion.button>
            ))}
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-neutral-900 text-neutral-50 text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors inline-flex items-center"
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
            className="md:hidden p-2"
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
            className="md:hidden bg-neutral-50/95 backdrop-blur-md border-t border-neutral-200"
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
                      ? 'text-neutral-900 border-l-4 border-neutral-900 pl-4' 
                      : 'text-neutral-700 hover:text-neutral-900 pl-0'
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
                className="inline-flex items-center px-6 py-2.5 bg-neutral-900 text-neutral-50 text-sm font-medium rounded-full mt-4"
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