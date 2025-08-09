import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Code, Heart, Award, Target, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Text3D from './Text3D';

// Professional 3D Card Component
const Professional3DCard = ({ children, className = '', delay = 0, ...props }) => (
  <motion.div
    className={`card-3d perspective-container ${className}`}
    style={{
      transformStyle: 'preserve-3d',
      perspective: '1000px',
    }}
    initial={{ 
      opacity: 0, 
      transform: 'translateZ(-50px) rotateX(-15deg) translateY(50px)' 
    }}
    whileInView={{ 
      opacity: 1, 
      transform: 'translateZ(0px) rotateX(0deg) translateY(0px)' 
    }}
    whileHover={{
      transform: 'translateZ(20px) rotateX(5deg) rotateY(5deg) scale(1.02)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2), 0 15px 35px rgba(59, 130, 246, 0.15)',
    }}
    transition={{
      type: 'spring',
      stiffness: 300,
      damping: 30,
      delay: delay,
      duration: 0.8,
    }}
    viewport={{ once: true }}
    {...props}
  >
    {children}
    
    {/* 3D Depth Layer */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl"
      style={{
        transform: 'translateZ(-10px)',
        filter: 'blur(1px)',
      }}
      whileHover={{ opacity: 0.8 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

// Enhanced Sakura Petal Component with 3D
const SakuraPetal = ({ delay = 0, duration = 10, startX = 0 }) => (
  <motion.div
    className="absolute petal-3d"
    style={{
      width: '8px',
      height: '8px',
      background: 'linear-gradient(45deg, #fbb6ce, #f687b3)',
      borderRadius: '50% 0 50% 0',
      transformStyle: 'preserve-3d',
      opacity: 0.7,
    }}
    initial={{ 
      x: startX, 
      y: -20, 
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: Math.random() * 0.5 + 0.5
    }}
    animate={{ 
      x: startX + (Math.random() - 0.5) * 200,
      y: window.innerHeight + 100, 
      rotateX: 360,
      rotateY: 180,
      rotateZ: 360,
      scale: 0
    }}
    transition={{ 
      duration: duration + Math.random() * 5,
      delay: delay,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

// Professional Floating Sakura Background
const SakuraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <SakuraPetal
        key={i}
        delay={i * 1.5}
        duration={8 + Math.random() * 4}
        startX={Math.random() * window.innerWidth}
      />
    ))}
  </div>
);

const AboutSection = () => {
  const { theme } = useTheme();
  const [activeSkill, setActiveSkill] = useState(null);
  
  const skills = [
    { 
      category: "Frontend Development", 
      items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      category: "Design & Tools", 
      items: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Design", "Prototyping", "User Research"],
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    { 
      category: "Professional Skills", 
      items: ["Team Leadership", "Project Management", "Git", "VS Code", "Agile", "Communication"],
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    { category: "Learning", items: ["Node.js", "System Design", "Docker", "Machine Learning"] }
  ];

  const experiences = [
    {
      period: "2023 - Present",
      role: "Frontend Developer",
      company: "LogikaBox",
      location: "El Eulma, Algeria",
      description: "Leading frontend development for multiple client projects using React and modern frameworks.",
      achievements: [
        "Led development of 5+ successful web applications",
        "Improved application performance by 40%",
        "Mentored junior developers and established coding standards"
      ]
    },
    {
      period: "2022 - 2023",
      role: "Web Developer",
      company: "Freelance",
      location: "Remote",
      description: "Delivered custom web solutions for diverse clients with focus on responsive design.",
      achievements: [
        "Completed 15+ projects with 98% client satisfaction",
        "Specialized in React and modern CSS frameworks",
        "Built scalable applications for various industries"
      ]
    }
  ];

  return (
    <section 
      id="about" 
      className={`relative py-24 ${theme.secondary} transition-colors duration-300 overflow-hidden`}
      aria-label="About Mohamed Anis Nedjem - Background and Experience"
    >
      {/* Sakura Background Animation */}
      <SakuraBackground />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-pink-200/20 rounded-full blur-xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 tracking-tight ${theme.text} relative`}>
              About Me
              {/* Sakura decoration around title */}
              <motion.span 
                className="absolute -top-2 -right-8 text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🌸
              </motion.span>
            </h2>
          </motion.div>
          <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}>
            Frontend Developer specializing in React and modern web technologies. 
            Focused on building efficient, scalable applications with clean user experiences.
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
                Frontend Developer with 3+ years of experience building scalable web applications 
                using React, JavaScript, and modern frameworks. Currently pursuing Master's in 
                Networks and Distributed Systems while leading frontend development at LogikaBox.
              </p>
              <p>
                Specialized in creating responsive, user-focused interfaces with clean code and 
                modern design patterns. Proven track record in team leadership, performance 
                optimization, and delivering high-quality digital solutions.
              </p>
            </motion.div>

            {/* Education & Location */}
            <motion.div 
              className={`${theme.secondary} rounded-2xl p-6 ${theme.shadowLg} ${theme.border} border transition-colors duration-300 relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              {/* Subtle sakura pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-pink-100/30 to-transparent rounded-full -mr-10 -mt-10"></div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className={`${theme.textSecondary} mt-1`} size={16} />
                  <div>
                    <p className={`font-medium ${theme.text}`}>Master's in Networks and Distributed Systems</p>
                    <p className={`text-sm ${theme.textSecondary}`}>University of Constantine 2 (Abdelhamid Mehri) (2024-2026)</p>
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
              <motion.h3 
                className={`text-2xl font-semibold mb-6 ${theme.text} flex items-center`}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Skills & Technologies
                <motion.span 
                  className="ml-2 text-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </motion.h3>
              <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                  <motion.div 
                    key={skillGroup.category} 
                    className={`${theme.secondary} rounded-xl p-4 ${theme.shadowSm} ${theme.border} border transition-colors duration-300 relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      borderColor: "rgba(236, 72, 153, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50/10 to-blue-50/10 rounded-xl"></div>
                    <div className="relative z-10">
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
                  </motion.div>
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
              <motion.h3 
                className={`text-2xl font-semibold mb-8 ${theme.text} flex items-center`}
                whileHover={{ x: 5 }}
              >
                Professional Experience
                <motion.span 
                  className="ml-2 text-lg"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🌺
                </motion.span>
              </motion.h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`${theme.secondary} rounded-2xl p-6 ${theme.shadowLg} ${theme.border} border transition-colors duration-300 relative overflow-hidden group`}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                      borderColor: "rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    {/* Decorative corner element */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-300"></div>
                    
                    {/* Subtle shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
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
              className={`${theme.secondary} rounded-2xl p-6 ${theme.shadowLg} ${theme.border} border transition-colors duration-300 relative overflow-hidden group`}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              {/* Magical sparkle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-pink-50/20 to-blue-50/20"></div>
              
              <motion.h3 
                className={`text-xl font-semibold mb-6 ${theme.text} flex items-center relative z-10`}
                whileHover={{ scale: 1.05 }}
              >
                Quick Stats
                <motion.span 
                  className="ml-2"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⭐
                </motion.span>
              </motion.h3>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`text-3xl font-bold ${theme.accent.replace('bg-', 'text-')} mb-2`}>3+</div>
                  <div className={`text-sm ${theme.textSecondary}`}>Years Experience</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`text-3xl font-bold ${theme.accent.replace('bg-', 'text-')} mb-2`}>20+</div>
                  <div className={`text-sm ${theme.textSecondary}`}>Projects Completed</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`text-3xl font-bold ${theme.accent.replace('bg-', 'text-')} mb-2`}>5+</div>
                  <div className={`text-sm ${theme.textSecondary}`}>Technologies</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`text-3xl font-bold ${theme.accent.replace('bg-', 'text-')} mb-2`}>100%</div>
                  <div className={`text-sm ${theme.textSecondary}`}>Client Satisfaction</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
