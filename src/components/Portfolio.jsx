import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ArrowUpRight, Download, MapPin, Code, Smartphone, Palette, Settings, Zap, DollarSign, Check, Clock } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'services', 'pricing', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      year: "July 2024 - Present",
      role: "Frontend Developer",
      company: "LogikaBox",
      description: "Leading front-end development of customized web applications across multiple industries. Developed modern React-based platforms that significantly improved user interaction and engagement. Overseeing project planning, timelines, and execution while mentoring interns and junior developers.",
      tech: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      year: "February 2024 - July 2024",
      role: "Frontend Intern",
      company: "LogikaBox, Sétif",
      description: "Contributed to web and mobile projects, focusing on user interfaces and responsiveness. Led team development on a hotel booking application from planning to deployment. Strengthened client communication and project documentation practices.",
      tech: ["React", "JavaScript", "Mobile Development", "UI/UX"]
    },
    {
      year: "June 2025 - July 2025",
      role: "Desktop Developer Intern",
      company: "CDI, El Eulma",
      description: "Built a desktop application to manage rent payments and calculate penalties. Assisted and mentored another intern in starting their web development journey. Fixed and organized application files.",
      tech: ["Desktop Development", "Database Management", "Mentoring"]
    },
    {
      year: "February 2025 - March 2025",
      role: "Network Intern",
      company: "Setram, Constantine",
      description: "Gained practical exposure to networking systems and real-world IT infrastructure. Assisted in managing network equipment, performing diagnostics, and securing local systems.",
      tech: ["Networking", "IT Infrastructure", "System Security"]
    }
  ];

  const projects = [
    {
      title: "Hotel Booking Application",
      description: "Led team development of a comprehensive hotel booking platform with user authentication, reservation management, and responsive design. Project managed from planning to deployment.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      tech: ["React", "JavaScript", "CSS3", "Team Leadership"],
      github: "https://github.com/NMA19",
      live: "#",
      featured: true
    },
    {
      title: "Rent Management Desktop App",
      description: "Built a desktop application for managing rent payments and calculating penalties. Features include payment tracking, automated calculations, and user-friendly interface.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      tech: ["Desktop Development", "Database Management", "UI Design"],
      github: "https://github.com/NMA19",
      live: "#",
      featured: true
    },
    {
      title: "React Web Applications",
      description: "Multiple customized web applications across various industries using modern React architecture. Focus on user interaction, engagement, and responsive design.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/NMA19",
      live: "#",
      featured: false
    },
    {
      title: "Mobile Interface Projects",
      description: "Contributed to mobile web projects with focus on responsive design, user interface optimization, and cross-platform compatibility.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tech: ["Mobile Development", "Responsive Design", "UI/UX"],
      github: "https://github.com/NMA19",
      live: "#",
      featured: false
    }
  ];

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern React websites with responsive design, smooth animations, and optimal performance. From landing pages to complex web applications.",
      features: ["React & JavaScript", "Responsive Design", "Performance Optimization", "SEO-friendly"]
    },
    {
      icon: Smartphone,
      title: "Mobile Web Apps",
      description: "Mobile-first web applications that work seamlessly across all devices. Progressive Web Apps (PWA) with native-like experience.",
      features: ["Mobile-First Design", "Cross-Platform", "Offline Capability", "Push Notifications"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Clean, modern interfaces that prioritize user experience. From wireframes to high-fidelity mockups and interactive prototypes.",
      features: ["Wireframing", "Prototyping", "Figma to Code", "User Testing"]
    },
    {
      icon: Settings,
      title: "Custom Components",
      description: "Reusable React components tailored to your brand and needs. Clean code, well-documented, and easily maintainable.",
      features: ["Component Libraries", "Design Systems", "Documentation", "Testing"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing websites and applications. Lighthouse audits, Core Web Vitals optimization, and SEO improvements.",
      features: ["Speed Optimization", "SEO Improvement", "Lighthouse Audits", "Code Refactoring"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "70",
      period: "Starting at",
      description: "Perfect for small businesses and personal projects",
      features: [
        "Single page website",
        "Responsive design",
        "Basic animations",
        "Contact form",
        "Mobile optimized",
        "1 week delivery"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Standard",
      price: "250",
      period: "Starting at",
      description: "Ideal for growing businesses and portfolios",
      features: [
        "Multi-page website (3-5 pages)",
        "Custom React components",
        "Advanced animations",
        "CMS integration",
        "SEO optimization",
        "2-3 weeks delivery",
        "2 rounds of revisions"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Premium",
      price: "500",
      period: "Starting at",
      description: "For complex applications and e-commerce",
      features: [
        "Full web application",
        "User authentication",
        "Database integration",
        "Payment integration",
        "Admin dashboard",
        "API development",
        "4-6 weeks delivery",
        "Unlimited revisions",
        "3 months support"
      ],
      popular: false,
      cta: "Contact Me"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 relative overflow-hidden">
      {/* Cursor Follower */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-neutral-900 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-neutral-50/80 backdrop-blur-md z-40 border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold tracking-tight"
            >
              Mohamed Anis Nedjem
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wide transition-colors relative ${
                    activeSection === item.id 
                      ? 'text-neutral-900' 
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                  whileHover={{ y: -2 }}
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
                href="#"
                className="px-6 py-2.5 bg-neutral-900 text-neutral-50 text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
                <Download size={16} className="inline ml-2" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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
            >
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-lg font-medium text-neutral-700 hover:text-neutral-900"
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.a
                  href="#"
                  className="inline-flex items-center px-6 py-2.5 bg-neutral-900 text-neutral-50 text-sm font-medium rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  Resume
                  <Download size={16} className="ml-2" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-24 pb-12">
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
                  className="group px-8 py-4 bg-neutral-900 text-neutral-50 font-medium rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                  <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
                
                <motion.div className="flex items-center space-x-6">
                  {[
                    { icon: Github, href: "https://github.com/NMA19", label: "GitHub" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:med363839@gmail.com", label: "Email" }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-3 border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
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
            >
              <div className="relative w-full h-96 lg:h-[600px] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl overflow-hidden">
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
                />
                
                {/* Main tech stack visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    {/* React Logo */}
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <span className="text-white font-bold text-sm">React</span>
                    </motion.div>
                    
                    {/* JavaScript Logo */}
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      <span className="text-white font-bold text-sm">JS</span>
                    </motion.div>
                    
                    {/* Tailwind Logo */}
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{
                        y: [0, -12, 0],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      <span className="text-white font-bold text-xs">Tailwind</span>
                    </motion.div>
                    
                    {/* HTML5 Logo */}
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 4.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                    >
                      <span className="text-white font-bold text-sm">HTML5</span>
                    </motion.div>
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
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm text-neutral-600 font-medium">Currently working on</p>
                  </div>
                  <p className="font-bold text-lg mb-2">Custom Web Applications</p>
                  <p className="text-neutral-700 font-medium mb-1">@ LogikaBox</p>
                  <p className="text-sm text-neutral-600">Leading frontend development across multiple industries</p>
                  
                  {/* Progress indicators */}
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs text-neutral-600">
                      <span>Project Progress</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-1.5">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* LogikaBox branding */}
                <motion.div
                  className="absolute top-8 right-8 bg-neutral-900/90 backdrop-blur-sm rounded-xl px-4 py-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  <p className="text-white text-sm font-semibold">LogikaBox</p>
                  <p className="text-neutral-300 text-xs">Digital Solutions</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">About Me</h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  I'm a highly motivated Frontend Developer with over 3 years of hands-on experience 
                  in designing and developing dynamic, user-centric web applications. Currently pursuing 
                  my Master's in Networks and Distributed Systems while working full-time at LogikaBox.
                </p>
                <p>
                  Specialized in modern technologies such as React, JavaScript, and Tailwind CSS, 
                  with a strong foundation in information systems and network engineering. I'm passionate 
                  about continuous improvement, clean UI/UX design, and building scalable digital solutions 
                  that drive business growth.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring machine learning, video editing, 
                  cooking, or diving deep into UI/UX design principles. I believe in mentoring others 
                  and sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Experience</h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-2 border-neutral-300 pl-6 relative"
                    >
                      <div className="absolute w-3 h-3 bg-neutral-900 rounded-full -left-2 top-2" />
                      <p className="text-sm text-neutral-500 mb-1">{exp.year}</p>
                      <h4 className="text-xl font-semibold mb-1">{exp.role}</h4>
                      <p className="text-neutral-600 font-medium mb-3">{exp.company}</p>
                      <p className="text-neutral-600 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-neutral-200 text-neutral-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Selected Work</h2>
            <p className="text-xl text-neutral-600 max-w-2xl">
              A collection of projects that showcase my passion for creating meaningful 
              digital experiences and solving complex problems.
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-neutral-100"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
                    {project.featured && (
                      <div className="absolute top-6 right-6 px-3 py-1 bg-neutral-900 text-neutral-50 text-sm font-medium rounded-full">
                        Featured
                      </div>
                    )}
                  </motion.div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">{project.title}</h3>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={20} />
                      <span className="font-medium">View Code</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium">Live Demo</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Services</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              I specialize in creating modern, high-performance web solutions that help businesses 
              grow and engage their users effectively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <service.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0" />
                      <span className="text-neutral-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hourly Rate Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 text-white max-w-md mx-auto">
              <Clock size={32} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">Hourly Rate</h3>
              <div className="text-4xl font-bold mb-2">$12<span className="text-lg text-neutral-300">/hour</span></div>
              <p className="text-neutral-300 mb-4">Perfect for ongoing projects or consultation</p>
              <div className="text-sm text-neutral-400">
                Minimum 10 hours • Flexible scheduling • Direct communication
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Pricing</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Transparent, competitive pricing designed to deliver maximum value for your investment. 
              All packages include responsive design and modern development practices.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 relative overflow-hidden ${
                  plan.popular 
                    ? 'border-gradient-to-r from-blue-500 to-purple-600 shadow-xl border-blue-500' 
                    : 'border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-xl">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-neutral-500">{plan.period}</span>
                  </div>
                  <p className="text-neutral-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-4 px-6 font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('contact')}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Additional Pricing Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center bg-neutral-100 rounded-2xl p-8"
          >
            <DollarSign size={32} className="mx-auto mb-4 text-green-600" />
            <h3 className="text-2xl font-bold mb-4">Need a Custom Quote?</h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Every project is unique. For complex applications, e-commerce platforms, or enterprise solutions, 
              I'll provide a detailed custom quote based on your specific requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Check size={16} className="text-green-500" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check size={16} className="text-green-500" />
                <span>Detailed project breakdown</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check size={16} className="text-green-500" />
                <span>Flexible payment options</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">Let's Create Something Amazing</h2>
            <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
              I'm always excited to work on new projects and collaborate with talented people. 
              Whether you have a project in mind or just want to chat about technology, 
              I'd love to hear from you.
            </p>
            
            <motion.a
              href="mailto:med363839@gmail.com"
              className="group inline-flex items-center px-12 py-6 bg-neutral-900 text-neutral-50 text-lg font-medium rounded-full hover:bg-neutral-800 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ArrowUpRight size={24} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
            
            <div className="flex justify-center items-center gap-8 mt-16">
              {[
                { icon: Github, href: "https://github.com/NMA19", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:med363839@gmail.com", label: "Email" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-4 border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 transition-all"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600">
              © 2025 Mohamed Anis Nedjem. Frontend Developer based in Algeria.
            </p>
            <p className="text-neutral-500 text-sm">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;