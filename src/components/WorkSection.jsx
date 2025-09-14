import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Calendar, Users, Award, Filter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import mall from '../assets/mall.jpeg';
import Cap from '../assets/Cap.png';
import Suit from '../assets/Suit.jpg';

// Magical Sparkles Component
const MagicalSparkles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.5,
          repeatDelay: 2
        }}
      >
        <span className="text-pink-400 text-lg">✨</span>
      </motion.div>
    ))}
  </div>
);

// Cherry Blossom Border Component
const CherryBlossomBorder = () => (
  <div className="absolute inset-0 pointer-events-none">
    <motion.div 
      className="absolute top-2 right-2 text-pink-300"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      🌸
    </motion.div>
    <motion.div 
      className="absolute bottom-2 left-2 text-pink-400"
      animate={{ rotate: [0, -15, 15, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
    >
      🌺
    </motion.div>
  </div>
);

const WorkSection = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filterCategories = [
    { id: 'all', label: 'All Projects', count: 4 },
    { id: 'web', label: 'Web Apps', count: 2 },
    { id: 'desktop', label: 'Desktop', count: 1 },
    { id: 'mobile', label: 'Mobile', count: 1 }
  ];
  const projects = [
    {
      title: "Hotel Booking Application",
      description: "Led team development of a comprehensive hotel booking platform with user authentication, reservation management, and responsive design. Oversaw the project from planning through deployment. ⚡ Update in progress: A fully redesigned, animated experience is on the way — stay tuned for v2.0!",
      image: mall,
      tech: ["React", "JavaScript", "CSS3", "Team Leadership"],
      live: "https://www.parkmallhotel.com",
      github: "",
      category: "web",
      duration: "3 months",
      team: "4 members",
      status: "Live",
      year: "2024",
      featured: true,
      achievements: ["Led team of 4", "100% responsive design", "Authentication system"]
    },
    {
      title: "Rent Management Desktop App",
      description: "Built a desktop application for managing rent payments and calculating penalties. Features include payment tracking, automated calculations, and user-friendly interface with data visualization.",
      image: Cap,
      tech: ["Desktop Development", "Database Management", "UI Design"],
      github: "",
      live: "",
      category: "desktop",
      duration: "1 month",
      team: "2 members",
      status: "Completed",
      year: "2023",
      featured: false,
      achievements: ["Automated calculations", "User-friendly interface", "Mentored junior developer"]
    },
    {
      title: "Suit Management System",
      description: "Developed a comprehensive suit management system for a local tailor shop. The application allows users to customize their suits, schedule fittings, and manage orders with real-time updates.",
      image: Suit,
      tech: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
      github: "",
      live: "https://www.youtube.com/watch?v=p1MqCsE_WEg",
      category: "web",
      duration: "2 months",
      team: "Solo",
      status: "Live",
      year: "2024",
      featured: false,
      achievements: ["Custom order system", "Real-time updates", "Mobile responsive"]
    },
    {
      title: "Mobile Interface Projects",
      description: "Contributed to mobile web projects with focus on responsive design, user interface optimization, and cross-platform compatibility. Enhanced user experience across different devices.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tech: ["Mobile Development", "Responsive Design", "UI/UX"],
      github: "https://github.com/NMA19/arh_app",
      live: "",
      category: "mobile",
      duration: "6 months",
      team: "3 members",
      status: "Ongoing",
      year: "2024",
      featured: false,
      achievements: ["Cross-platform compatibility", "Performance optimization", "UI/UX improvements"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="work" 
      className={`relative py-24 ${theme.secondary} transition-colors duration-300 overflow-hidden`}
      aria-label="Portfolio work section showcasing selected projects"
    >
      {/* Magical Background */}
      <MagicalSparkles />
      <div className="absolute top-10 left-20 w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-200/15 to-purple-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.h2 
            className={`text-5xl lg:text-6xl font-bold mb-6 tracking-tight ${theme.text} relative`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Selected Work
              <motion.span 
                className="absolute -top-3 -right-8 text-2xl"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🌸
              </motion.span>
            </motion.span>
          </motion.h2>
          <motion.p 
            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto mb-12`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            A collection of projects that showcase my passion for creating meaningful 
            digital experiences and solving complex problems through innovative solutions.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {filterCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? `${theme.button} ${theme.buttonText} shadow-lg`
                    : `${theme.secondary} ${theme.textSecondary} border ${theme.border} hover:${theme.shadowLg} hover:${theme.text}`
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Filter projects by ${category.label}`}
              >
                <Filter size={16} />
                <span>{category.label}</span>
                <span className={`${theme.accent} ${theme.textSecondary} px-2 py-0.5 rounded-full text-xs`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {[
              { number: "15+", label: "Projects Completed", icon: Award },
              { number: "3+", label: "Years Experience", icon: Calendar },
              { number: "4", label: "Team Projects", icon: Users },
              { number: "100%", label: "Client Satisfaction", icon: Award }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className={`${theme.secondary} rounded-xl p-6 ${theme.shadow} border ${theme.border} text-center hover:${theme.shadowLg} transition-all relative overflow-hidden group`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  borderColor: "rgba(236, 72, 153, 0.3)"
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {/* Minimal decoration */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div 
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/20 to-purple-50/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <stat.icon className={`mx-auto mb-3 ${theme.iconColor}`} size={24} />
                  <motion.p 
                    className={`text-2xl font-bold ${theme.text} mb-1`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className={`text-sm ${theme.textSecondary}`}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="space-y-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
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
                    className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl border border-neutral-200"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={project.image} 
                      alt={`${project.title} project screenshot`}
                      className="w-full h-80 lg:h-96 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-6 left-6">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        project.status === 'Live' 
                          ? 'bg-green-500 text-white' 
                          : project.status === 'Ongoing'
                          ? 'bg-blue-500 text-white'
                          : 'bg-neutral-500 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-full shadow-lg">
                        ⭐ Featured
                      </div>
                    )}

                    {/* Project Info Overlay */}
                    <motion.div 
                      className={`absolute bottom-6 left-6 right-6 ${theme.secondary}/95 backdrop-blur-sm rounded-xl p-4 opacity-0 hover:opacity-100 transition-opacity`}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className={`${theme.iconColor}`} />
                          <span className={`${theme.textSecondary}`}>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users size={16} className={`${theme.iconColor}`} />
                          <span className={`${theme.textSecondary}`}>{project.team}</span>
                        </div>
                        <div className="text-right">
                          <span className={`${theme.textSecondary}`}>{project.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">{project.title}</h3>
                      {project.featured && (
                        <Award className="text-yellow-500" size={24} />
                      )}
                    </div>
                    
                    <p className={`text-lg ${theme.textSecondary} mb-6 leading-relaxed`}>{project.description}</p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className={`text-sm font-semibold ${theme.text} mb-3`}>Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i}
                            className={`flex items-center space-x-2 text-sm ${theme.textSecondary}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span 
                          key={tech}
                          className={`px-4 py-2 ${theme.accent} border ${theme.border} ${theme.textSecondary} rounded-full text-sm font-medium hover:${theme.shadowLg} transition-colors`}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`View source code for ${project.title}`}
                        >
                          <Github size={20} />
                          <span>View Code</span>
                          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group flex items-center gap-2 px-6 py-3 border ${theme.border} ${theme.textSecondary} rounded-full font-medium hover:${theme.text} transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorkSection;