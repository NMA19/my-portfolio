import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowUp, Loader2 } from 'lucide-react';

// Import critical components immediately
import Navigation from './Navigation';
import HeroSection from './HeroSection';

// Lazy load non-critical components
const AboutSection = lazy(() => import('./AboutSection'));
const WorkSection = lazy(() => import('./WorkSection'));
const ServicesSection = lazy(() => import('./ServicesSection'));
const PricingSection = lazy(() => import('./PricingSection'));
const BlogSection = lazy(() => import('./BlogSection'));
const ContactSection = lazy(() => import('./ContactSection'));
const Footer = lazy(() => import('./Footer'));

// Import theme context
import { useTheme } from '../contexts/ThemeContext';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading screen disabled for performance
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

  // Loading effect - reduced time for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Reduced from 1000ms to 100ms

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
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-500" />
          <p className="text-xl font-light text-gray-800">Loading Portfolio...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme.primary} ${theme.text} relative overflow-hidden overflow-x-hidden transition-colors duration-500`}>
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

        {/* Lazy-loaded sections with Suspense */}
        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-blue-50 to-purple-50 animate-pulse" />}>
          <section id="about">
            <AboutSection />
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-purple-50 to-pink-50 animate-pulse" />}>
          <section id="work">
            <WorkSection />
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-pink-50 to-blue-50 animate-pulse" />}>
          <section id="services">
            <ServicesSection />
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 animate-pulse" />}>
          <section id="pricing">
            <PricingSection scrollToSection={scrollToSection} />
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-indigo-50 to-purple-50 animate-pulse" />}>
          <section id="blog">
            <BlogSection />
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-purple-50 to-pink-50 animate-pulse" />}>
          <section id="contact">
            <ContactSection />
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-24 bg-gradient-to-r from-gray-50 to-gray-100 animate-pulse" />}>
          <Footer scrollToSection={scrollToSection} />
        </Suspense>
      </main>
    </div>
  );
};

export default Portfolio;
