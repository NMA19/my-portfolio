import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
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

  return (
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
  );
};

export default AboutSection;