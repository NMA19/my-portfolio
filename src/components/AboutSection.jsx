import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Code, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection = () => {
  const { theme } = useTheme();
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Tools & Others", items: ["Git", "VS Code", "Figma", "Responsive Design", "UI/UX"] },
    { category: "Learning", items: ["Node.js", "Machine Learning", "System Design", "Docker"] }
  ];

  const interests = [
    { icon: Code, name: "Machine Learning", description: "Exploring AI and data science" },
    { icon: Heart, name: "UI/UX Design", description: "Creating beautiful user experiences" },
    { icon: GraduationCap, name: "Mentoring", description: "Teaching and guiding developers" }
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
      year: "June 2023 - July 2023",
      role: "Desktop Developer Intern",
      company: "CDI, El Eulma",
      description: "Built a desktop application to manage rent payments and calculate penalties. Assisted and mentored another intern in starting their web development journey. Fixed and organized application files.",
      tech: ["Desktop Development", "Database Management", "Mentoring"]
    },
    {
      year: "February 2023 - March 2023",
      role: "Network Intern",
      company: "Setram, Constantine",
      description: "Gained practical exposure to networking systems and real-world IT infrastructure. Assisted in managing network equipment, performing diagnostics, and securing local systems.",
      tech: ["Networking", "IT Infrastructure", "System Security"]
    }
  ];

  return (
    <section 
      id="about" 
      className={`py-24 ${theme.secondary} transition-colors duration-300`}
      aria-label="About Mohamed Anis Nedjem - Background and Experience"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-lg text-neutral-600 leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
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
            </motion.div>

            {/* Education & Location */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2" size={24} />
                Education & Background
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Calendar className="text-neutral-500 mt-1" size={16} />
                  <div>
                    <p className="font-medium">Master's in Networks and Distributed Systems</p>
                    <p className="text-sm text-neutral-600">Currently pursuing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-neutral-500 mt-1" size={16} />
                  <div>
                    <p className="font-medium">El Eulma, Sétif, Algeria</p>
                    <p className="text-sm text-neutral-600">Available for remote work</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                  <div key={skillGroup.category} className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
                    <h4 className="font-medium text-neutral-900 mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <motion.span 
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-neutral-700 rounded-full text-sm border border-neutral-200 hover:border-neutral-300 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Interests & Passions</h3>
              <div className="grid gap-4">
                {interests.map((interest, index) => (
                  <motion.div 
                    key={interest.name}
                    className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200 flex items-center space-x-4 hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                      <interest.icon className="text-neutral-700" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900">{interest.name}</h4>
                      <p className="text-sm text-neutral-600">{interest.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Calendar className="mr-2" size={24} />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6 relative bg-white rounded-r-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <motion.div 
                      className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -left-2 top-8 border-2 border-white shadow-lg"
                      whileHover={{ scale: 1.2 }}
                    />
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="text-neutral-500" size={16} />
                      <p className="text-sm text-neutral-500 font-medium">{exp.year}</p>
                    </div>
                    <h4 className="text-xl font-bold mb-1 text-neutral-900">{exp.role}</h4>
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="text-neutral-500" size={16} />
                      <p className="text-neutral-600 font-medium">{exp.company}</p>
                    </div>
                    <p className="text-neutral-600 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <motion.span 
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-neutral-700 rounded-full text-sm border border-neutral-200 hover:border-blue-300 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <motion.div 
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-neutral-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <motion.p 
                    className="text-3xl font-bold text-blue-600"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, type: "spring" }}
                  >
                    3+
                  </motion.p>
                  <p className="text-sm text-neutral-600 font-medium">Years Experience</p>
                </div>
                <div className="text-center">
                  <motion.p 
                    className="text-3xl font-bold text-purple-600"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, type: "spring" }}
                  >
                    15+
                  </motion.p>
                  <p className="text-sm text-neutral-600 font-medium">Projects Completed</p>
                </div>
                <div className="text-center">
                  <motion.p 
                    className="text-3xl font-bold text-green-600"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, type: "spring" }}
                  >
                    5+
                  </motion.p>
                  <p className="text-sm text-neutral-600 font-medium">Technologies</p>
                </div>
                <div className="text-center">
                  <motion.p 
                    className="text-3xl font-bold text-orange-600"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6, type: "spring" }}
                  >
                    2+
                  </motion.p>
                  <p className="text-sm text-neutral-600 font-medium">Mentees Guided</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;