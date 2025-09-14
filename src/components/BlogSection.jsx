import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, Tag, User, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// 3D Sakura Tree Component
const SakuraTree3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main Tree Structure */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translateX(-50%) translateY(-50%) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Tree Trunk */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotateX: 90 }}
          animate={{ scale: 1, rotateX: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div 
            className="w-8 h-96 bg-gradient-to-t from-amber-900 via-amber-800 to-amber-700 rounded-b-lg opacity-30"
            style={{
              transform: 'translateZ(0px)',
              boxShadow: '0 0 20px rgba(180, 83, 9, 0.3)'
            }}
          />
          
          {/* Tree Branches */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute bg-gradient-to-r from-amber-800 to-amber-700 rounded-full opacity-25`}
              style={{
                width: `${120 - i * 10}px`,
                height: '6px',
                left: i % 2 === 0 ? '32px' : '0px',
                top: `${50 + i * 35}px`,
                transform: `rotateZ(${i % 2 === 0 ? 25 : -25}deg) translateZ(${i * 2}px)`,
                transformOrigin: i % 2 === 0 ? 'left center' : 'right center'
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: i % 2 === 0 ? 25 : -25 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
            />
          ))}
        </motion.div>

        {/* 3D Sakura Blossoms */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 200}px`,
              top: `${Math.random() * 200}px`,
              transform: `translateZ(${Math.random() * 100}px)`,
              transformStyle: 'preserve-3d'
            }}
            initial={{ 
              scale: 0, 
              rotateX: 0, 
              rotateY: 0,
              opacity: 0 
            }}
            animate={{ 
              scale: [0, 1, 0.8],
              rotateX: [0, 360, 720],
              rotateY: [0, 180, 360],
              opacity: [0, 1, 0.7],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <div 
              className="relative"
              style={{
                fontSize: `${1 + Math.random() * 1.5}rem`,
                filter: `drop-shadow(0 0 ${5 + Math.random() * 10}px rgba(255, 182, 193, 0.6))`
              }}
            >
              🌸
            </div>
          </motion.div>
        ))}

        {/* Floating Petals */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 300}px`,
              top: `${Math.random() * 200}px`,
              transform: `translateZ(${Math.random() * 150}px)`,
            }}
            initial={{ 
              scale: 0,
              opacity: 0,
              rotateZ: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotateZ: [0, 360],
              y: [0, -100, -200],
              x: [0, Math.random() * 50 - 25]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          >
            <span 
              className="text-pink-300"
              style={{
                fontSize: `${0.8 + Math.random() * 0.7}rem`,
                filter: 'drop-shadow(0 0 8px rgba(255, 182, 193, 0.4))'
              }}
            >
              🌸
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Enhanced 3D Floating Knowledge Elements
const FloatingKnowledge3D = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const elements = ['📚', '💡', '🚀', '⚡', '🎯', '✨', '🔮', '🌙', '🦋', '🌺', '🎨', '💻'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
      {elements.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateZ(${Math.random() * 100}px)`,
            transformStyle: 'preserve-3d'
          }}
          initial={{ 
            opacity: 0, 
            scale: 0, 
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
          }}
          animate={{ 
            opacity: [0, 0.9, 0],
            scale: [0, 1.8, 0],
            rotateX: [0, 360, 720],
            rotateY: [0, 180, 360],
            rotateZ: [0, 90, 180],
            y: [0, -30, 0],
            x: [0, mousePos.x * 0.1, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.8,
            repeatDelay: 4,
            ease: "easeInOut"
          }}
        >
          <span 
            className="text-3xl block"
            style={{
              filter: `drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))`,
              transform: `rotateY(${mousePos.x * 0.2}deg) rotateX(${mousePos.y * 0.2}deg)`
            }}
          >
            {emoji}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

// Floating Knowledge Elements
const FloatingKnowledge = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ 
          opacity: [0, 0.8, 0],
          scale: [0, 1.5, 0],
          rotate: [0, 360, 720],
          y: [-20, 20, -20]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: i * 0.8,
          repeatDelay: 4,
          ease: "easeInOut"
        }}
      >
        <span className="text-2xl filter drop-shadow-lg">
          {['🌸', '📚', '💡', '🚀', '⚡', '🎯', '✨', '�', '🌙', '🦋', '🌺', '🎨'][i % 12]}
        </span>
      </motion.div>
    ))}
  </div>
);

// Particle System for Enhanced Background
const ParticleSystem = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [-100, window.innerHeight + 100],
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "linear"
        }}
      />
    ))}
  </div>
);

const BlogSection = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedPosts, setExpandedPosts] = useState(new Set());

  const togglePostExpansion = (postId) => {
    const newExpandedPosts = new Set(expandedPosts);
    if (newExpandedPosts.has(postId)) {
      newExpandedPosts.delete(postId);
    } else {
      newExpandedPosts.add(postId);
    }
    setExpandedPosts(newExpandedPosts);
  };
  
  const categories = [
    { id: 'all', label: 'All Posts', count: 8 },
    { id: 'react', label: 'React', count: 2 },
    { id: 'javascript', label: 'JavaScript', count: 2 },
    { id: 'css', label: 'CSS/Design', count: 1 },
    { id: 'career', label: 'Career Tips', count: 1 },
    { id: 'linux', label: 'Linux', count: 1 },
    { id: 'ai', label: 'AI/ML', count: 1 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Advanced React Patterns: Custom Hooks & Context API",
      excerpt: "Learn how to build reusable and scalable React applications using advanced patterns like custom hooks, context API, and compound components.",
      fullContent: "React has evolved significantly, and modern React development relies heavily on hooks and context for state management. Custom hooks allow you to extract component logic into reusable functions, making your code more modular and testable. The Context API provides a way to share data between components without prop drilling. In this comprehensive guide, we'll explore advanced patterns like compound components, render props, and higher-order components. You'll learn how to build a flexible component library, implement proper error boundaries, and optimize performance with React.memo and useMemo. We'll also cover testing strategies for custom hooks and context providers.",
      category: "react",
      readTime: "12 min read",
      date: "2024-12-15",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      tags: ["React", "Hooks", "Context", "JavaScript"],
      featured: true,
      link: "#"
    },
    {
      id: 2,
      title: "Modern JavaScript ES2024: New Features You Should Know",
      excerpt: "Explore the latest JavaScript features including optional chaining, nullish coalescing, and new array methods that will improve your code.",
      fullContent: "JavaScript continues to evolve with ES2024 bringing exciting new features that enhance developer productivity. Optional chaining (?.) and nullish coalescing (??) operators help write safer code when dealing with potentially undefined values. New array methods like .at(), .findLast(), and .findLastIndex() provide more intuitive ways to work with arrays. The Temporal API offers a modern replacement for the problematic Date object. Top-level await enables cleaner asynchronous module loading. Private class fields and methods improve encapsulation in object-oriented programming. We'll explore practical examples of each feature and discuss browser support considerations.",
      category: "javascript",
      readTime: "10 min read",
      date: "2024-12-10",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
      tags: ["JavaScript", "ES2024", "Modern JS"],
      featured: false,
      link: "#"
    },
    {
      id: 3,
      title: "Building Responsive Layouts with CSS Grid & Flexbox",
      excerpt: "Master the art of creating beautiful, responsive layouts using CSS Grid and Flexbox. Learn when to use each and best practices.",
      fullContent: "CSS Grid and Flexbox are powerful layout systems that complement each other perfectly. Flexbox excels at one-dimensional layouts - arranging items in a single row or column with flexible sizing. It's ideal for navigation bars, card layouts, and centering content. CSS Grid shines with two-dimensional layouts where you need precise control over both rows and columns. Use Grid for complex page layouts, image galleries, and dashboard designs. We'll explore practical examples including responsive design patterns, combining Grid and Flexbox, browser support considerations, and debugging techniques. You'll learn to create fluid, maintainable layouts that work across all devices.",
      category: "css",
      readTime: "14 min read",
      date: "2024-12-05",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tags: ["CSS", "Grid", "Flexbox", "Responsive"],
      featured: false,
      link: "#"
    },
    {
      id: 4,
      title: "From Junior to Senior: My Frontend Development Journey",
      excerpt: "Personal insights and lessons learned during my journey from junior to senior frontend developer. Tips for career growth and skill development.",
      fullContent: "The journey from junior to senior developer is challenging but incredibly rewarding. It's not just about technical skills - communication, mentorship, and business understanding are equally important. Early in my career, I focused heavily on learning frameworks and tools. As I progressed, I realized the importance of understanding underlying principles, software architecture, and team collaboration. Key milestones included: taking ownership of projects, mentoring junior developers, contributing to technical decisions, and understanding the business impact of code. I'll share practical advice on building a strong portfolio, networking effectively, continuous learning strategies, and navigating career transitions.",
      category: "career",
      readTime: "15 min read",
      date: "2024-11-28",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["Career", "Growth", "Frontend", "Tips"],
      featured: true,
      link: "#"
    },
    {
      id: 5,
      title: "State Management in React: Redux vs Zustand vs Context",
      excerpt: "Compare different state management solutions for React applications. Learn when to use each approach and their pros and cons.",
      fullContent: "Choosing the right state management solution can make or break your React application. Context API is built into React and perfect for simple global state like themes or user authentication. Redux offers predictable state updates with its unidirectional data flow, making it ideal for complex applications with many state interactions. Zustand provides a lightweight alternative with a simpler API and better TypeScript support. We'll compare performance implications, learning curves, and use cases for each solution. You'll learn when to use local state vs global state, how to structure your state, and migration strategies between different state management libraries.",
      category: "react",
      readTime: "13 min read",
      date: "2024-11-20",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&h=400&fit=crop",
      tags: ["React", "Redux", "Zustand", "State Management"],
      featured: false,
      link: "#"
    },
    {
      id: 6,
      title: "JavaScript Performance Optimization Techniques",
      excerpt: "Learn essential techniques to optimize JavaScript performance including debouncing, memoization, and efficient DOM manipulation.",
      fullContent: "Performance optimization is crucial for creating smooth user experiences. Debouncing and throttling prevent excessive function calls during events like scrolling or typing. Memoization caches expensive function results to avoid redundant calculations. Efficient DOM manipulation techniques like document fragments and batch updates reduce reflows and repaints. Understanding the event loop helps optimize asynchronous operations. We'll cover lazy loading for images and components, code splitting for faster initial page loads, and using Web Workers for heavy computations. Modern tools like Lighthouse and DevTools help identify performance bottlenecks and measure improvements.",
      category: "javascript",
      readTime: "11 min read",
      date: "2024-11-15",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      tags: ["JavaScript", "Performance", "Optimization"],
      featured: false,
      link: "#"
    },
    {
      id: 7,
      title: "Mastering Linux Command Line for Developers",
      excerpt: "Essential Linux commands and concepts every developer should know to boost productivity and system understanding.",
      fullContent: "Linux proficiency is essential for modern developers, especially in server environments and DevOps workflows. Start with navigation commands like ls, cd, pwd, and file operations with cp, mv, rm. Master text processing with grep, sed, awk, and find for searching and manipulating files. Learn process management with ps, top, htop, kill, and job control with bg, fg, jobs. Understand file permissions and ownership with chmod, chown, umask. Work with archives using tar, zip, gzip. Master package management with apt, yum, pacman depending on your distribution. Learn shell scripting with bash for automation, environment variables, and PATH configuration. Practice SSH for remote access, understand networking with netstat, ss, curl, and basic system monitoring.",
      category: "linux",
      readTime: "18 min read",
      date: "2024-10-20",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop",
      tags: ["Linux", "Command Line", "DevOps", "System Admin"],
      featured: true,
      link: "#"
    },
    {
      id: 8,
      title: "Artificial Intelligence in Web Development: The Future is Now",
      excerpt: "Exploring how AI is transforming web development, from code generation to automated testing and user experience optimization.",
      fullContent: "Artificial Intelligence is revolutionizing web development workflows and user experiences. AI-powered code generation tools like GitHub Copilot, ChatGPT, and Tabnine are accelerating development by suggesting intelligent code completions and generating boilerplate code. Machine learning enhances user experiences through personalized content recommendations, intelligent search functionality, and predictive user interfaces. AI-driven testing tools automatically generate test cases, identify edge cases, and perform visual regression testing. Natural Language Processing enables sophisticated chatbots and voice interfaces. Computer vision APIs allow image recognition, content moderation, and accessibility improvements. We'll explore practical integration of AI services like OpenAI GPT models, Google ML APIs, AWS AI services, and discuss ethical considerations in AI-powered applications.",
      category: "ai",
      readTime: "20 min read",
      date: "2024-10-15",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["AI", "Machine Learning", "Web Development", "APIs", "Future Tech"],
      featured: true,
      link: "#"
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section 
      id="blog" 
      className={`relative py-32 ${theme.primary} transition-all duration-500 overflow-hidden min-h-screen`}
      aria-label="Blog and learning resources section"
      style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
    >
      {/* 3D Sakura Tree Background */}
      <SakuraTree3D />
      
      {/* Enhanced 3D Background Effects */}
      <FloatingKnowledge3D />
      
      {/* Professional 3D Background Gradients */}
      <div className="absolute top-10 right-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/25 rounded-full blur-3xl animate-pulse"
           style={{ transform: 'translateZ(-50px)' }}></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-emerald-300/20 via-blue-300/15 to-indigo-300/25 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '2s', transform: 'translateZ(-30px)' }}></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-rose-300/30 via-orange-300/20 to-amber-300/25 rounded-full blur-2xl animate-bounce" 
           style={{ animationDelay: '1s', transform: 'translateZ(-70px)' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-violet-300/25 via-fuchsia-300/20 to-cyan-300/25 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '3s', transform: 'translateZ(-40px)' }}></div>
      
      {/* Premium Glassmorphism Overlay with 3D depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-blue-50/5 to-purple-50/8 backdrop-blur-[2px]" 
           style={{ transform: 'translateZ(10px)' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
            <span className={`text-sm font-medium ${theme.textSecondary}`}>Knowledge Hub</span>
          </motion.div>
          
          <motion.h2 
            className={`text-6xl lg:text-7xl font-bold mb-8 tracking-tight ${theme.text} relative`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Learn & Grow
            </span>
            <motion.span 
              className="absolute -top-4 -right-4 text-4xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🌸
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover insights, tutorials, and deep dives into web development, 
            system administration, and cutting-edge technologies. 
            <span className="text-blue-500 font-medium">Join the journey of continuous learning.</span>
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/25 scale-105'
                  : `${theme.secondary} ${theme.text} ${theme.border} border-2 hover:border-blue-300 hover:shadow-lg hover:scale-105`
              }`}
              whileHover={{ 
                y: -2,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Glowing border effect */}
              {activeCategory === category.id && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 blur-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.1, opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Sparkle effects */}
              {activeCategory === category.id && (
                <>
                  <motion.span 
                    className="absolute -top-1 -right-1 text-yellow-300"
                    animate={{ 
                      scale: [1, 1.3, 1], 
                      rotate: [0, 180, 360],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                  <motion.span 
                    className="absolute -bottom-1 -left-1 text-pink-300"
                    animate={{ 
                      scale: [1, 1.2, 1], 
                      rotate: [360, 180, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    🌸
                  </motion.span>
                </>
              )}
              
              <span className="relative z-10 flex items-center">
                {category.label} 
                <motion.span 
                  className={`ml-2 px-2 py-1 text-xs rounded-full ${
                    activeCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-blue-100 text-blue-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {category.count}
                </motion.span>
              </span>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Blog Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className={`group relative ${theme.secondary} rounded-3xl overflow-hidden ${theme.shadowLg} ${theme.border} border-2 transition-all duration-500 ${
                  post.featured ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0px)'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -12,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
                  borderColor: "rgba(59, 130, 246, 0.6)",
                  transform: "translateZ(20px) rotateX(5deg) rotateY(5deg)",
                  transition: { 
                    type: "spring", 
                    stiffness: 300,
                    damping: 20
                  }
                }}
              >
                {/* Enhanced Featured Badge */}
                {post.featured && (
                  <motion.div 
                    className="absolute top-6 left-6 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <span className="flex items-center">
                      ⭐ Featured
                    </span>
                  </motion.div>
                )}

                {/* Enhanced 3D Floating Decorations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
                  <motion.div
                    className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: 'translateZ(30px)' }}
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    🌸
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 left-4 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: 'translateZ(25px)' }}
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5],
                      rotateX: [0, 180, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>
                  <motion.div
                    className="absolute top-1/2 left-1/2 text-lg opacity-20 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ 
                      transform: 'translateZ(15px) translateX(-50%) translateY(-50%)',
                      transformStyle: 'preserve-3d'
                    }}
                    animate={{ 
                      rotateY: [0, 360],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    💎
                  </motion.div>
                </div>

                {/* Enhanced 3D Image with Overlay */}
                <div className="relative h-64 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
                  <motion.img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{ transform: 'translateZ(0px)' }}
                    whileHover={{ 
                      scale: 1.15,
                      rotateX: 3,
                      transform: "translateZ(10px) scale(1.15) rotateX(3deg)"
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"
                       style={{ transform: 'translateZ(5px)' }}></div>
                  
                  {/* Enhanced category badge with 3D depth */}
                  <motion.div 
                    className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-lg"
                    style={{ transform: 'translateZ(15px)' }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                    }}
                  >
                    {categories.find(cat => cat.id === post.category)?.label}
                  </motion.div>
                </div>

                {/* Enhanced 3D Content */}
                <div className="p-8" style={{ transform: 'translateZ(10px)' }}>
                  {/* Enhanced Meta Info */}
                  <motion.div 
                    className="flex items-center justify-between mb-4 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center space-x-6">
                      <span className={`flex items-center ${theme.textSecondary} hover:text-blue-500 transition-colors`}>
                        <Calendar size={16} className="mr-2" />
                        {formatDate(post.date)}
                      </span>
                      <span className={`flex items-center ${theme.textSecondary} hover:text-purple-500 transition-colors`}>
                        <Clock size={16} className="mr-2" />
                        {post.readTime}
                      </span>
                    </div>
                  </motion.div>

                  {/* Enhanced Title */}
                  <motion.h3 
                    className={`text-2xl font-bold mb-4 ${theme.text} group-hover:text-blue-600 transition-colors duration-300 leading-tight`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {post.title}
                  </motion.h3>

                  {/* Enhanced Excerpt or Full Content */}
                  <motion.div 
                    className={`${theme.textSecondary} mb-6 leading-relaxed text-base`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <AnimatePresence mode="wait">
                      {expandedPosts.has(post.id) ? (
                        <motion.div
                          key="full"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="whitespace-pre-line">{post.fullContent}</p>
                        </motion.div>
                      ) : (
                        <motion.p
                          key="excerpt"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {post.excerpt}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Enhanced Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {post.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag}
                        className={`px-3 py-1 ${theme.primary} ${theme.textSecondary} text-sm rounded-full ${theme.border} border hover:border-blue-300 hover:text-blue-600 transition-all cursor-default`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + tagIndex * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        #{tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Enhanced Read More Button */}
                  <motion.button
                    onClick={() => togglePostExpansion(post.id)}
                    className={`group inline-flex items-center ${theme.text} font-semibold hover:text-blue-600 transition-all duration-300 relative overflow-hidden px-6 py-3 rounded-full border-2 border-transparent hover:border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20`}
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="relative z-10 flex items-center">
                      {expandedPosts.has(post.id) ? 'Show Less' : 'Read More'}
                      <motion.div
                        className="ml-2"
                        animate={{ 
                          rotate: expandedPosts.has(post.id) ? 180 : 0,
                          x: expandedPosts.has(post.id) ? 0 : [0, 3, 0]
                        }}
                        transition={{ 
                          rotate: { duration: 0.3 },
                          x: { duration: 1.5, repeat: Infinity }
                        }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </span>
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className={`${theme.secondary} rounded-2xl p-8 ${theme.shadowLg} ${theme.border} border relative overflow-hidden group`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 group-hover:opacity-100 opacity-0 transition-opacity"></div>
            
            <div className="relative z-10">
              <motion.h3 
                className={`text-2xl font-bold mb-4 ${theme.text} flex items-center justify-center`}
                whileHover={{ scale: 1.05 }}
              >
                Want to stay updated?
                <motion.span 
                  className="ml-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💡
                </motion.span>
              </motion.h3>
              <p className={`${theme.textSecondary} mb-6`}>
                Follow me on social media for the latest articles, tutorials, and web development insights!
              </p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="https://github.com/NMA19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Follow on GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/anis-nedjem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 border ${theme.border} ${theme.text} rounded-full font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
