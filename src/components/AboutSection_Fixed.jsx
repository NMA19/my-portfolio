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

  const experiences = [
    {
      period: "2023 - Present",
      role: "Frontend Developer",
      company: "LogikaBox",
      location: "El Eulma, Algeria",
      description: "Developing scalable web applications using React and modern JavaScript frameworks.",
      achievements: [
        "Led frontend development for 5+ client projects",
        "Improved application performance by 40%",
        "Mentored 2 junior developers"
      ]
    },
    {
      period: "2022 - 2023",
      role: "Web Developer",
      company: "Freelance",
      location: "Remote",
      description: "Built responsive websites and web applications for various clients.",
      achievements: [
        "Completed 15+ successful projects",
        "Achieved 98% client satisfaction rate",
        "Specialized in React and Tailwind CSS"
      ]
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
          className="text-center mb-16"
        >
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 tracking-tight ${theme.text}`}>About Me</h2>
          <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}>
            Passionate frontend developer dedicated to creating exceptional digital experiences 
            through clean code, innovative design, and continuous learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className={`space-y-6 text-lg ${theme.textSecondary} leading-relaxed mb-12`}
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
              className={`${theme.secondary} rounded-2xl p-6 ${theme.shadowLg} ${theme.border} border transition-colors duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className={`${theme.textSecondary} mt-1`} size={16} />
                  <div>
                    <p className={`font-medium ${theme.text}`}>Master's in Networks and Distributed Systems</p>
                    <p className={`text-sm ${theme.textSecondary}`}>University of Mohamed Boudiaf, M'sila (2023-2025)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className={`${theme.textSecondary} mt-1`} size={16} />
                  <div>
                    <p className={`font-medium ${theme.text}`}>El Eulma, Sétif, Algeria</p>
                    <p className={`text-sm ${theme.textSecondary}`}>Available for remote work</p>
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
              <h3 className={`text-2xl font-semibold mb-6 ${theme.text}`}>Skills & Technologies</h3>
              <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                  <div key={skillGroup.category} className={`${theme.secondary} rounded-xl p-4 ${theme.shadowSm} ${theme.border} border transition-colors duration-300`}>
                    <h4 className={`font-medium ${theme.text} mb-3`}>{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <motion.span 
                          key={skill}
                          className={`px-3 py-1 ${theme.primary} ${theme.textSecondary} rounded-full text-sm ${theme.border} border hover:${theme.accent.replace('bg-', 'hover:bg-')} hover:text-white transition-colors`}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Experience Timeline */}
            <div>
              <h3 className={`text-2xl font-semibold mb-8 ${theme.text}`}>Professional Experience</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`${theme.secondary} rounded-2xl p-6 ${theme.shadowLg} ${theme.border} border transition-colors duration-300`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className={`text-xl font-semibold ${theme.text}`}>{exp.role}</h4>
                        <p className={`${theme.accent.replace('bg-', 'text-')} font-medium`}>{exp.company}</p>
                        <p className={`text-sm ${theme.textSecondary}`}>{exp.location}</p>
                      </div>
                      <span className={`px-3 py-1 ${theme.primary} ${theme.textSecondary} rounded-full text-sm font-medium`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className={`${theme.textSecondary} mb-4`}>{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className={`flex items-start space-x-2 ${theme.textSecondary}`}>
                          <span className={`w-1.5 h-1.5 ${theme.accent} rounded-full mt-2 flex-shrink-0`}></span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`${theme.secondary} rounded-2xl p-6 ${theme.shadowLg} ${theme.border} border transition-colors duration-300`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${theme.text}`}>Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${theme.accent.replace('bg-', 'text-')} mb-2`}>3+</div>
                  <div className={`text-sm ${theme.textSecondary}`}>Years Experience</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${theme.accent.replace('bg-', 'text-')} mb-2`}>20+</div>
                  <div className={`text-sm ${theme.textSecondary}`}>Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${theme.accent.replace('bg-', 'text-')} mb-2`}>5+</div>
                  <div className={`text-sm ${theme.textSecondary}`}>Technologies</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${theme.accent.replace('bg-', 'text-')} mb-2`}>100%</div>
                  <div className={`text-sm ${theme.textSecondary}`}>Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
