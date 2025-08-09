import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import FastText3D from './FastText3D';

const OptimizedBlogSection = () => {
  const { theme } = useTheme();
  const [expandedPost, setExpandedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React 18 and TypeScript",
      excerpt: "Explore the latest features of React 18 including concurrent rendering, automatic batching, and Suspense improvements.",
      content: "React 18 introduces several groundbreaking features that enhance performance and user experience. Concurrent rendering allows React to interrupt, pause, resume, or abandon a render, making apps more responsive to user interactions. Automatic batching groups multiple state updates into a single re-render for better performance. The new Suspense features enable better loading states and data fetching patterns. TypeScript integration has also improved with better type inference and stricter type checking.",
      author: "Mohamed Anis",
      date: "2024-08-01",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "TypeScript", "Frontend", "Performance"]
    },
    {
      id: 2,
      title: "Linux Command Line Mastery for Developers",
      excerpt: "Essential Linux commands and workflows that every developer should master for efficient system administration and development.",
      content: "Linux command line proficiency is crucial for modern development. Key commands include file navigation (ls, cd, pwd), file manipulation (cp, mv, rm, touch), text processing (grep, sed, awk), process management (ps, top, kill), and network utilities (curl, wget, ssh). Advanced topics include shell scripting with bash, process automation with cron, system monitoring with htop and iotop, and container management with Docker CLI. Understanding package managers (apt, yum, pacman) and system services (systemctl) is essential for server management.",
      author: "Mohamed Anis",
      date: "2024-07-28",
      readTime: "12 min read",
      category: "Linux",
      tags: ["Linux", "Command Line", "DevOps", "System Administration"]
    },
    {
      id: 3,
      title: "AI-Powered Development: Tools and Techniques",
      excerpt: "How artificial intelligence is revolutionizing software development workflows and boosting developer productivity.",
      content: "AI is transforming software development through intelligent code completion, automated testing, and bug detection. GitHub Copilot provides context-aware code suggestions, while tools like ChatGPT assist with debugging and documentation. AI-powered testing frameworks can generate comprehensive test cases automatically. Code review tools use machine learning to identify potential issues and security vulnerabilities. Natural language processing enables developers to write code using plain English descriptions. Future developments include AI-assisted refactoring, automated performance optimization, and intelligent project architecture suggestions.",
      author: "Mohamed Anis",
      date: "2024-07-25",
      readTime: "10 min read",
      category: "AI",
      tags: ["Artificial Intelligence", "Developer Tools", "Automation", "Future Tech"]
    },
    {
      id: 4,
      title: "Modern CSS Techniques: Grid, Flexbox & More",
      excerpt: "Master modern CSS layout techniques and create responsive, beautiful designs with CSS Grid, Flexbox, and custom properties.",
      content: "Modern CSS provides powerful layout tools that simplify responsive design. CSS Grid excels at two-dimensional layouts, allowing precise control over rows and columns. Flexbox handles one-dimensional layouts perfectly, making alignment and distribution effortless. Custom properties (CSS variables) enable dynamic theming and maintainable stylesheets. Container queries allow responsive design based on parent container size rather than viewport. Subgrid provides enhanced grid capabilities for nested layouts. Advanced selectors like :has() and :where() offer more semantic styling options.",
      author: "Mohamed Anis",
      date: "2024-07-20",
      readTime: "7 min read",
      category: "CSS",
      tags: ["CSS", "Layout", "Responsive Design", "Frontend"]
    }
  ];

  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <section 
      id="blog" 
      className={`py-20 ${theme.primary} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FastText3D 
            variant="hero" 
            className={`text-4xl lg:text-5xl font-bold ${theme.text} mb-6`}
          >
            Latest Blog Posts
          </FastText3D>
          <FastText3D 
            variant="default"
            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
          >
            Insights, tutorials, and thoughts on web development, technology trends, and best practices.
          </FastText3D>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className={`${theme.secondary} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${theme.border} hover:scale-105 hover:-translate-y-2`}
            >
              {/* Post Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <span className={`text-sm ${theme.textSecondary}`}>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className={theme.textSecondary} />
                  <span className={`text-sm ${theme.textSecondary}`}>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className={theme.textSecondary} />
                  <span className={`text-sm ${theme.textSecondary}`}>{post.readTime}</span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white`}>
                  <Tag size={12} className="mr-1" />
                  {post.category}
                </span>
              </div>

              {/* Post Title */}
              <FastText3D variant="default">
                <h3 className={`text-2xl font-bold ${theme.text} mb-4 hover:text-blue-600 transition-colors`}>
                  {post.title}
                </h3>
              </FastText3D>

              {/* Post Excerpt */}
              <p className={`${theme.textSecondary} mb-6 leading-relaxed`}>
                {post.excerpt}
              </p>

              {/* Expanded Content */}
              {expandedPost === post.id && (
                <div className={`${theme.textSecondary} mb-6 leading-relaxed border-t ${theme.border} pt-6`}>
                  <p>{post.content}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Read More Button */}
              <button
                onClick={() => togglePost(post.id)}
                className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
              >
                {expandedPost === post.id ? 'Read Less' : 'Read More'}
                <ArrowRight 
                  size={16} 
                  className={`group-hover:translate-x-1 transition-transform ${expandedPost === post.id ? 'rotate-90' : ''}`} 
                />
              </button>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <FastText3D variant="default">
            <div className={`${theme.secondary} rounded-2xl p-8 max-w-2xl mx-auto`}>
              <h3 className={`text-2xl font-bold ${theme.text} mb-4`}>
                Want to see more content?
              </h3>
              <p className={`${theme.textSecondary} mb-6`}>
                Follow me on social media for the latest updates and insights on web development.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Follow for Updates
              </button>
            </div>
          </FastText3D>
        </div>
      </div>
    </section>
  );
};

export default OptimizedBlogSection;
