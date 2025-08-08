import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Calendar, Users, Award, Filter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import mall from '../assets/mall.jpeg';
import Cap from '../assets/Cap.png';
import Suit from '../assets/Suit.jpg';

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
      className={`py-24 ${theme.secondary} transition-colors duration-300`}
      aria-label="Portfolio work section showcasing selected projects"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Selected Work
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12"
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
                    ? 'bg-neutral-900 text-white shadow-lg'
                    : 'bg-white text-neutral-600 border border-neutral-300 hover:border-neutral-900 hover:text-neutral-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Filter projects by ${category.label}`}
              >
                <Filter size={16} />
                <span>{category.label}</span>
                <span className="bg-neutral-200 text-neutral-600 px-2 py-0.5 rounded-full text-xs">
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
                className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200 text-center hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <stat.icon className="mx-auto mb-3 text-neutral-600" size={24} />
                <motion.p 
                  className="text-2xl font-bold text-neutral-900 mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-sm text-neutral-600">{stat.label}</p>
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
                      className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 opacity-0 hover:opacity-100 transition-opacity"
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-neutral-500" />
                          <span className="text-neutral-600">{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users size={16} className="text-neutral-500" />
                          <span className="text-neutral-600">{project.team}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-neutral-600">{project.duration}</span>
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
                    
                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i}
                            className="flex items-center space-x-2 text-sm text-neutral-600"
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
                          className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-neutral-200 text-neutral-700 rounded-full text-sm font-medium hover:border-blue-300 transition-colors"
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
                          className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
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
                          className="group flex items-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-700 rounded-full font-medium hover:border-neutral-900 hover:text-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
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