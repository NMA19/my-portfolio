import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const WorkSection = () => {
  const projects = [
    {
      title: "Hotel Booking Application",
      description: "Led team development of a comprehensive hotel booking platform with user authentication, reservation management, and responsive design. Oversaw the project from planning through deployment.  ⚡ Update in progress: A fully redesigned, animated experience is on the way — stay tuned for v2.0!",
      image: "/src/assets/mall.jpeg",
      tech: ["React", "JavaScript", "CSS3", "Team Leadership"],
      github: "#",
      live: "https://www.parkmallhotel.com",
      featured: true
    },
    {
      title: "Rent Management Desktop App",
      description: "Built a desktop application for managing rent payments and calculating penalties. Features include payment tracking, automated calculations, and user-friendly interface.",
      image: "/src/assets/Cap.png",
      tech: ["Desktop Development", "Database Management", "UI Design"],
      github: "",
      live: "",
      featured: false
    },
    {
      title: "Suit management system",
      description: "Developed a comprehensive suit management system for a local tailor shop. The application allows users to customize their suits, schedule fittings, and manage orders.",
      image: "/src/assets/Suit.jpg",
      tech: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
      github: "",
      live: "https://www.youtube.com/watch?v=p1MqCsE_WEg",
      featured: false
    },
    {
      title: "Mobile Interface Projects",
      description: "Contributed to mobile web projects with focus on responsive design, user interface optimization, and cross-platform compatibility.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tech: ["Mobile Development", "Responsive Design", "UI/UX"],
      github: "https://github.com/NMA19/arh_app",
      live: "#",
      featured: false
    }
  ];

  return (
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
                  {project.github && (
                    <motion.a
                      href={project.github}
                      className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={20} />
                      <span className="font-medium">View Code</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium">Live Demo</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;