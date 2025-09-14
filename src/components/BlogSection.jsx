import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, Tag, User, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Simplified Background Component (Performance Optimized)
const SakuraTree3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/20 via-purple-50/10 to-blue-50/20" />
      
      {/* Minimal decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-200/10 rounded-full blur-xl" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-200/10 rounded-full blur-xl" />
    </div>
  );
};

// Simplified Floating Elements
const FloatingKnowledge3D = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30" />
    <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30" />
  </div>
);

const BlogSection = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedPost, setExpandedPost] = useState(null);
  
  const categories = [
    { id: 'all', label: 'All Posts', count: 8 },
    { id: 'web', label: 'Web Development', count: 3 },
    { id: 'ai', label: 'AI & Tech', count: 2 },
    { id: 'career', label: 'Career', count: 2 },
    { id: 'tutorial', label: 'Tutorials', count: 1 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern React Applications with Performance in Mind",
      excerpt: "Learn how to optimize React applications for better performance, including lazy loading, code splitting, and efficient state management.",
      fullContent: "Modern React applications require careful attention to performance optimization. In this comprehensive guide, we'll explore various techniques to improve your React app's performance, including lazy loading components, implementing code splitting, optimizing bundle size, and managing state efficiently. We'll also cover advanced topics like memoization, virtualization, and performance monitoring tools.",
      category: "web",
      readTime: "12 min read",
      date: "2024-12-15",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      tags: ["React", "Performance", "JavaScript", "Web Development"],
      featured: true,
      link: "#"
    },
    {
      id: 2,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Exploring emerging technologies and trends that will shape web development in the coming year.",
      fullContent: "The web development landscape is constantly evolving. In 2025, we're seeing exciting trends like AI-powered development tools, WebAssembly becoming mainstream, progressive web apps gaining traction, and new CSS features revolutionizing layout design. This article dives deep into these trends and how they'll impact developers.",
      category: "web",
      readTime: "8 min read",
      date: "2024-12-10",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["Web Development", "Trends", "Technology", "Future"],
      featured: false,
      link: "#"
    },
    {
      id: 3,
      title: "Getting Started with Machine Learning in JavaScript",
      excerpt: "A beginner's guide to implementing machine learning algorithms using JavaScript and popular ML libraries.",
      fullContent: "Machine learning isn't just for Python developers anymore. JavaScript has evolved to support powerful ML libraries like TensorFlow.js, ML5.js, and Brain.js. This tutorial covers the basics of implementing machine learning algorithms in JavaScript, from simple neural networks to image recognition.",
      category: "ai",
      readTime: "15 min read",
      date: "2024-12-05",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      tags: ["Machine Learning", "JavaScript", "AI", "Tutorial"],
      featured: true,
      link: "#"
    },
    {
      id: 4,
      title: "Building a Successful Career in Frontend Development",
      excerpt: "Essential skills, learning paths, and career advice for aspiring frontend developers.",
      fullContent: "Frontend development offers exciting career opportunities for those passionate about creating user experiences. This comprehensive guide covers essential skills, learning resources, portfolio building, networking strategies, and career advancement tips for frontend developers at all levels.",
      category: "career",
      readTime: "10 min read",
      date: "2024-11-28",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["Career", "Frontend", "Development", "Skills"],
      featured: false,
      link: "#"
    },
    {
      id: 5,
      title: "Advanced CSS Techniques for Modern Web Design",
      excerpt: "Master advanced CSS features including Grid, Flexbox, custom properties, and modern layout techniques.",
      fullContent: "CSS has evolved significantly with powerful new features. This tutorial covers advanced CSS Grid and Flexbox techniques, custom properties (CSS variables), container queries, logical properties, and modern layout patterns that will elevate your web design skills.",
      category: "tutorial",
      readTime: "18 min read",
      date: "2024-11-20",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tags: ["CSS", "Design", "Layout", "Tutorial"],
      featured: false,
      link: "#"
    },
    {
      id: 6,
      title: "The Complete Guide to Web Accessibility",
      excerpt: "Learn how to create inclusive web experiences that work for everyone.",
      fullContent: "Web accessibility is crucial for creating inclusive digital experiences. This comprehensive guide covers WCAG guidelines, semantic HTML, ARIA attributes, keyboard navigation, screen reader compatibility, and testing tools to ensure your websites are accessible to all users.",
      category: "web",
      readTime: "14 min read",
      date: "2024-11-15",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      tags: ["Accessibility", "WCAG", "Inclusive Design", "Web Standards"],
      featured: false,
      link: "#"
    },
    {
      id: 7,
      title: "From Junior to Senior Developer: A Roadmap",
      excerpt: "Essential milestones and skills needed to advance your development career.",
      fullContent: "Advancing from junior to senior developer requires more than just technical skills. This roadmap covers technical competencies, soft skills, leadership qualities, mentoring abilities, and strategic thinking that distinguish senior developers in the industry.",
      category: "career",
      readTime: "11 min read",
      date: "2024-11-10",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      tags: ["Career Growth", "Senior Developer", "Skills", "Leadership"],
      featured: false,
      link: "#"
    },
    {
      id: 8,
      title: "Artificial Intelligence in Web Development: The Future is Now",
      excerpt: "Exploring how AI is transforming web development, from code generation to automated testing.",
      fullContent: "Artificial Intelligence is revolutionizing web development workflows and user experiences. AI-powered code generation tools like GitHub Copilot, ChatGPT, and Tabnine are accelerating development by suggesting intelligent code completions and generating boilerplate code. Machine learning enhances user experiences through personalized content recommendations, intelligent search functionality, and predictive user interfaces.",
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
    >
      {/* Simplified Background */}
      <SakuraTree3D />
      <FloatingKnowledge3D />
      
      {/* Simple gradient overlays */}
      <div className="absolute top-10 right-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/25 rounded-full blur-3xl animate-pulse"
           style={{ transform: 'translateZ(-50px)' }}></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-emerald-300/20 via-blue-300/15 to-indigo-300/25 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '2s', transform: 'translateZ(-30px)' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16">
          <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"
            >
              <BookOpen className="w-8 h-8 text-white" />
        </motion.div>

            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme.text}`}>
              Knowledge Hub
            </h2>
            <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Explore insights, tutorials, and thoughts on web development, technology trends, and career growth.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : `${theme.secondary} ${theme.text} ${theme.border} border hover:shadow-md`
                }`}
              >
                {category.label} 
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                    activeCategory === category.id 
                    ? 'bg-white/20'
                      : 'bg-blue-100 text-blue-600'
                }`}>
                  {category.count}
              </span>
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative ${theme.secondary} rounded-3xl overflow-hidden ${theme.shadowLg} ${theme.border} border-2 transition-all duration-500 ${
                  post.featured ? 'ring-2 ring-blue-500/50' : ''
                } hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg">
                      ⭐ Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-lg">
                    {categories.find(cat => cat.id === post.category)?.label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                        {post.readTime}
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${theme.text} group-hover:text-blue-600 transition-colors`}>
                    {post.title}
                  </h3>

                  <p className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed`}>
                          {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <button
                    onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                    className={`group inline-flex items-center ${theme.text} font-semibold hover:text-blue-600 transition-all duration-300 relative overflow-hidden px-6 py-3 rounded-full border-2 border-transparent hover:border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20`}
                  >
                    {expandedPost === post.id ? 'Show Less' : 'Read More'}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Expanded Content */}
                {expandedPost === post.id && (
                      <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <div className={`border-t ${theme.border} pt-4`}>
                      <p className={`${theme.textSecondary} leading-relaxed mb-4`}>
                        {post.fullContent}
                      </p>
                      <a
                        href={post.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read Full Article
                      </a>
                    </div>
                      </motion.div>
                )}
              </motion.article>
            ))}
          </div>

        {/* Call to Action */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          viewport={{ once: true }}
            className={`${theme.secondary} rounded-2xl p-8 ${theme.shadowLg} ${theme.border} border relative overflow-hidden group mt-16`}
          >
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-4 ${theme.text}`}>
                Stay Updated with Latest Insights
              </h3>
              <p className={`${theme.textSecondary} mb-6 max-w-2xl mx-auto`}>
                Get notified about new articles, tutorials, and industry insights delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;