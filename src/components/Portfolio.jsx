import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowUp, Loader2 } from 'lucide-react';

// Import all components
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WorkSection from './WorkSection';
import ServicesSection from './ServicesSection';
import PricingSection from './PricingSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

// Import theme context
import { useTheme } from '../contexts/ThemeContext';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { isDarkMode, toggleTheme, theme } = useTheme();

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mouse tracking for cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll progress and section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 500);

      // Determine active section
      const sections = ['home', 'about', 'work', 'services', 'pricing', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      const currentSection = sectionElements.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading screen
  if (isLoading) {
    return (
      <div className={`fixed inset-0 ${theme.primary} ${theme.text} flex items-center justify-center z-50`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
          <p className="text-xl font-light">Loading Portfolio...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme.primary} ${theme.text} relative overflow-hidden transition-colors duration-500`}>
      {/* Scroll Progress Bar */}
      <div
        className={`fixed top-0 left-0 h-1 ${theme.accent} z-50`}
        style={{ 
          width: `${scrollProgress}%`,
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999
        }}
      />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-24 right-4 ${theme.secondary} ${theme.text} ${theme.border} border p-3 rounded-full ${theme.shadowLg} hover:scale-110 transition-all duration-300 z-50`}
        style={{ 
          position: 'fixed',
          top: '96px', // Below the navigation
          right: '16px',
          zIndex: 9999
        }}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 ${theme.secondary} ${theme.text} ${theme.border} border p-3 rounded-full ${theme.shadowLg} hover:scale-110 transition-all duration-300 z-40`}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9998
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Custom Cursor */}
      <div
        className={`fixed w-6 h-6 border-2 ${isDarkMode ? 'border-white' : 'border-black'} rounded-full pointer-events-none z-50 mix-blend-difference`}
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
          transition: 'all 0.1s ease',
          position: 'fixed',
          zIndex: 9997
        }}
      />

      {/* Navigation */}
      <Navigation 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section id="home">
          <HeroSection scrollToSection={scrollToSection} />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Work Section */}
        <section id="work">
          <WorkSection />
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <PricingSection scrollToSection={scrollToSection} />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>

        {/* Footer */}
        <Footer scrollToSection={scrollToSection} />
      </main>
    </div>
  );
};

export default Portfolio;
