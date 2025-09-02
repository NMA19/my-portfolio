import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Code, Heart, Award, Target, Users, Sparkles, Zap, Star, ChevronRight, Terminal, Braces } from 'lucide-react';

// Modern Background Component (High Performance, No Sakura)
const ModernBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.3]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Modern Gradient Mesh */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-purple-50/40 dark:from-blue-900/20 dark:via-indigo-900/15 dark:to-purple-900/20"
      />
      
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-2xl blur-xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Minimal Floating Dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 8,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Professional Card Component
const ProfessionalCard = ({ children, className = '', delay = 0, ...props }) => (
  <motion.div
    className={`relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group ${className}`}
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{
      type: 'spring',
      stiffness: 200,
      damping: 30,
      delay: delay,
      duration: 0.6,
    }}
    viewport={{ once: true }}
    {...props}
  >
    {/* Glow Effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
    
    {/* Content */}
    <div className="relative z-10">
      {children}
    </div>
    
    {/* Corner Decoration */}
    <motion.div
      className="absolute top-4 right-4 text-blue-400/30"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <Sparkles size={16} />
    </motion.div>
  </motion.div>
);

// Interactive Code Showcase (Similar to Hero)
const SkillsCodeBlock = () => (
  <motion.div
    className="relative bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-hidden border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center mb-4">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <span className="ml-4 text-gray-400 text-xs">skills.js</span>
    </div>
    
    <div className="text-gray-300 space-y-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-purple-400">const</span>{' '}
        <span className="text-blue-400">skills</span>{' '}
        <span className="text-gray-400">=</span>{' '}
        <span className="text-yellow-400">{'{'}</span>
      </motion.div>
      
      <motion.div
        className="ml-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-red-400">frontend</span>
        <span className="text-gray-400">:</span>{' '}
        <span className="text-gray-400">['</span>
        <span className="text-green-400">React</span>
        <span className="text-gray-400">',</span>{' '}
        <span className="text-green-400">'JavaScript'</span>
        <span className="text-gray-400">'],</span>
      </motion.div>
      
      <motion.div
        className="ml-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-red-400">design</span>
        <span className="text-gray-400">:</span>{' '}
        <span className="text-gray-400">['</span>
        <span className="text-green-400">Figma</span>
        <span className="text-gray-400">',</span>{' '}
        <span className="text-green-400">'UI/UX'</span>
        <span className="text-gray-400">'],</span>
      </motion.div>
      
      <motion.div
        className="ml-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.9, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-red-400">experience</span>
        <span className="text-gray-400">:</span>{' '}
        <span className="text-green-400">'3+ years'</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-yellow-400">{'}'}</span>
      </motion.div>
    </div>
  </motion.div>
);

// Experience Code Block
const ExperienceCodeBlock = ({ experience, index }) => (
  <motion.div
    className="relative bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-hidden border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center mb-4">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <span className="ml-4 text-gray-400 text-xs">experience-{index}.js</span>
    </div>
    
    <div className="text-gray-300 space-y-2">
      <div>
        <span className="text-purple-400">const</span>{' '}
        <span className="text-blue-400">experience</span>{' '}
        <span className="text-gray-400">=</span>{' '}
        <span className="text-yellow-400">{'{'}</span>
      </div>
      
      <div className="ml-4">
        <span className="text-red-400">company</span>
        <span className="text-gray-400">:</span>{' '}
        <span className="text-green-400">'{experience.company}'</span>
        <span className="text-gray-400">,</span>
      </div>
      
      <div className="ml-4">
        <span className="text-red-400">role</span>
        <span className="text-gray-400">:</span>{' '}
        <span className="text-green-400">'{experience.role}'</span>
        <span className="text-gray-400">,</span>
      </div>
      
      <div className="ml-4">
        <span className="text-red-400">period</span>
        <span className="text-gray-400">:</span>{' '}
        <span className="text-green-400">'{experience.period}'</span>
      </div>
      
      <div>
        <span className="text-yellow-400">{'}'}</span>
      </div>
    </div>
  </motion.div>
);

const AboutSection = () => {
  
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
    }
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
      className="relative py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
      aria-label="About Mohamed Anis Nedjem - Background and Experience"
    >
      {/* Modern Background */}
      <ModernBackground />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Terminal size={16} />
            <span>About Developer</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            Building Digital
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Experiences
            </motion.span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Frontend Developer specializing in React and modern web technologies. 
            Focused on building efficient, scalable applications with clean user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Personal Info Card */}
            <ProfessionalCard delay={0.2}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Professional Profile
                  </h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>
                      Frontend Developer with 3+ years of experience building scalable web applications 
                      using React, JavaScript, and modern frameworks. Currently pursuing Master's in 
                      Networks and Distributed Systems while leading frontend development at LogikaBox.
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="text-blue-500" size={16} />
                        <span className="text-sm">Master's in Networks and Distributed Systems</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="text-purple-500" size={16} />
                        <span className="text-sm">El Eulma, Sétif, Algeria</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ProfessionalCard>

            {/* Skills Code Block */}
            <ProfessionalCard delay={0.4}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Braces className="mr-3 text-blue-500" size={24} />
                Technical Skills
              </h3>
              <SkillsCodeBlock />
            </ProfessionalCard>

            {/* Skills Grid */}
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <ProfessionalCard key={skillGroup.category} delay={0.6 + index * 0.1}>
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${skillGroup.color} rounded-xl text-white`}>
                      <skillGroup.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <motion.span 
                            key={skill}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
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
                  </div>
                </ProfessionalCard>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Experience Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                <Award className="mr-3 text-purple-500" size={24} />
                Professional Experience
              </h3>
            </motion.div>

            {/* Experience Cards */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <ProfessionalCard key={index} delay={0.4 + index * 0.2}>
                  <div className="space-y-6">
                    {/* Experience Header */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.location}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>

                    {/* Code Block */}
                    <ExperienceCodeBlock experience={exp} index={index} />

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="font-medium text-gray-900 dark:text-white">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ProfessionalCard>
              ))}
            </div>

            {/* Stats Card */}
            <ProfessionalCard delay={0.8}>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
                  <Star className="mr-3 text-yellow-500" size={24} />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "3+", label: "Years Experience" },
                    { number: "20+", label: "Projects Completed" },
                    { number: "5+", label: "Technologies" },
                    { number: "100%", label: "Client Satisfaction" }
                  ].map((stat) => (
                    <motion.div 
                      key={stat.label}
                      className="space-y-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ProfessionalCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
