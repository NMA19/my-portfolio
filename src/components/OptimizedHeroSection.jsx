import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import FastText3D from './FastText3D';

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
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <FastText3D 
              variant="floating"
              className={`text-lg ${theme.textSecondary} font-medium`}
            >
              👋 Hello, I'm
            </FastText3D>

            {/* Name with 3D Effect */}
            <FastText3D variant="hero">
              <h1 className={`text-5xl lg:text-7xl font-bold ${theme.text} leading-tight`}>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mohamed Anis
                </span>
                <span className="block mt-2">Nedjem</span>
              </h1>
            </FastText3D>

            {/* Title */}
            <FastText3D 
              variant="subtle"
              className={`text-2xl lg:text-3xl font-light ${theme.textSecondary}`}
            >
              Frontend Developer & UI/UX Designer
            </FastText3D>

            {/* Description */}
            <FastText3D 
              variant="default"
              className={`text-lg ${theme.textSecondary} leading-relaxed max-w-2xl`}
            >
              Crafting beautiful, responsive, and user-friendly web experiences 
              with modern technologies. Passionate about creating digital solutions 
              that make a difference.
            </FastText3D>

            {/* Location */}
            <FastText3D 
              variant="subtle"
              className={`flex items-center ${theme.textSecondary} text-sm`}
            >
              <MapPin size={16} className="mr-2 text-pink-500" />
              Constantine, Algeria
            </FastText3D>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('work')}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center">
                  View My Work
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-transparent border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center">
                  Let's Connect
                  <Mail className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href, label, ariaLabel }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.textSecondary} hover:text-blue-500 transition-all duration-300 p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-110 hover:-translate-y-1`}
                  aria-label={ariaLabel}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Simple Visual Element */}
          <div className="relative lg:h-96 flex items-center justify-center">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50">
              {/* Simple decorative elements */}
              <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full animate-pulse" />
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-6xl mb-4">💻</div>
                <div className={`text-xl font-semibold ${theme.text}`}>
                  Frontend Developer
                </div>
                <div className={`text-sm ${theme.textSecondary} mt-2`}>
                  React • TypeScript • UI/UX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
