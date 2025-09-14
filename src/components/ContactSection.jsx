import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Send, MessageSquare, Calendar, MapPin, Phone, Clock, CheckCircle, User, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Floating Hearts and Sparkles
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          scale: [0, 1.2, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 0.8,
          repeatDelay: 2
        }}
      >
        <span className="text-pink-400 text-xl">
          {i % 3 === 0 ? '💖' : i % 2 === 0 ? '✨' : '🌸'}
        </span>
      </motion.div>
    ))}
  </div>
);

const ContactSection = () => {
  const { theme, isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/NMA19", 
      label: "GitHub",
      color: "hover:bg-gray-900",
      description: "Check out my repositories and contributions"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/anis-nedjem", 
      label: "LinkedIn",
      color: "hover:bg-blue-600",
      description: "Connect with me professionally"
    },
    { 
      icon: Mail, 
      href: "mailto:med363839@gmail.com", 
      label: "Email",
      color: "hover:bg-red-500",
      description: "Send me a direct email"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "El Eulma, Sétif, Algeria",
      description: "Available for remote work worldwide"
    },
    {
      icon: Phone,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I usually respond within a few hours"
    },
    {
      icon: Clock,
      title: "Availability",
      value: "GMT+1 (Algeria Time)",
      description: "Flexible scheduling for global clients"
    }
  ];

  return (
    <section 
      id="contact" 
      className={`relative py-24 ${theme.secondary} transition-colors duration-300 overflow-hidden`}
      aria-label="Contact section"
    >
      {/* Floating Elements Background */}
      <FloatingElements />
      
      {/* Magical Background Gradients */}
      <div className="absolute top-10 left-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-200/15 to-pink-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-pink-200/30 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className={`text-5xl lg:text-6xl font-bold mb-8 tracking-tight ${theme.text} relative`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Let's Create Something Amazing
              <motion.span 
                className="absolute -top-4 -right-8 text-3xl"
                animate={{ 
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💖
              </motion.span>
            </motion.span>
          </motion.h2>
          <motion.p 
            className={`text-xl ${theme.textSecondary} mb-12 leading-relaxed max-w-3xl mx-auto`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            I'm always excited to work on new projects and collaborate with talented people. 
            Whether you have a project in mind or just want to chat about technology, 
            I'd love to hear from you and discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className={`${theme.secondary} rounded-2xl p-8 ${theme.shadowLg} border ${theme.border}`}>
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="text-blue-600" size={24} />
                <h3 className={`text-2xl font-bold ${theme.text}`}>Send me a message</h3>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                    <h4 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h4>
                    <p className={`${theme.textSecondary}`}>
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme.textSecondary}`} size={18} />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 ${theme.secondary} ${theme.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${theme.text} ${
                              errors.name ? 'border-red-500' : ''
                            }`}
                            placeholder="Your full name"
                            aria-invalid={errors.name ? 'true' : 'false'}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                          />
                        </div>
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme.textSecondary}`} size={18} />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 ${theme.secondary} ${theme.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${theme.text} ${
                              errors.email ? 'border-red-500' : ''
                            }`}
                            placeholder="your.email@example.com"
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                          />
                        </div>
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 ${theme.secondary} ${theme.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${theme.text} ${
                          errors.subject ? 'border-red-500' : ''
                        }`}
                        placeholder="Project discussion, consultation, etc."
                        aria-invalid={errors.subject ? 'true' : 'false'}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-sm text-red-600">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>
                        Message *
                      </label>
                      <div className="relative">
                        <MessageCircle className={`absolute left-3 top-3 ${theme.textSecondary}`} size={18} />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className={`w-full pl-10 pr-4 py-3 ${theme.secondary} ${theme.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${theme.text} ${
                            errors.message ? 'border-red-500' : ''
                          }`}
                          placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                          aria-invalid={errors.message ? 'true' : 'false'}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                      </div>
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Information & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className={`${theme.secondary} rounded-2xl p-8 ${theme.shadowLg} ${theme.border} border`}>
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="text-green-600" size={24} />
                <h3 className={`text-2xl font-bold ${theme.text}`}>Quick Contact</h3>
              </div>
              
              <motion.a
                href="mailto:med363839@gmail.com"
                className="group inline-flex items-center w-full px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg font-medium rounded-xl hover:from-green-600 hover:to-blue-600 transition-all mb-6"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Send email to Mohamed Anis Nedjem"
              >
                <Mail size={20} className="mr-3" />
                Send Direct Email
                <ArrowUpRight size={20} className="ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>

              <p className={`${theme.textSecondary} text-center`}>
                Prefer email? Click above to send me a direct message
              </p>
            </div>

            {/* Contact Information */}
            <div className={`${theme.secondary} rounded-2xl p-8 ${theme.shadowLg} ${theme.border} border`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className={`flex items-start space-x-4 p-4 ${theme.primary} rounded-xl ${theme.hover} transition-colors`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <info.icon className={`${theme.accent.replace('bg-', 'text-')} mt-1`} size={20} />
                    <div>
                      <h4 className={`font-semibold ${theme.text}`}>{info.title}</h4>
                      <p className={`${theme.text} font-medium`}>{info.value}</p>
                      <p className={`text-sm ${theme.textSecondary}`}>{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={`${theme.secondary} rounded-2xl p-8 ${theme.shadowLg} ${theme.border} border`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>Connect With Me</h3>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? "_self" : "_blank"}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className={`group flex items-center space-x-4 p-4 ${theme.border} border rounded-xl transition-all ${theme.text} hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    aria-label={social.description}
                  >
                    <social.icon size={24} />
                    <div className="flex-1">
                      <h4 className="font-semibold">{social.label}</h4>
                      <p className="text-sm opacity-75">{social.description}</p>
                    </div>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div 
              className={`${theme.secondary} rounded-2xl p-6 ${theme.border} border bg-gradient-to-r from-green-500/10 to-blue-500/10`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className={`font-semibold ${theme.text}`}>Available for new projects</h4>
              </div>
              <p className={`${theme.textSecondary} text-sm`}>
                I'm currently accepting new clients and projects. Let's discuss how I can help bring your ideas to life!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className={`text-center mt-16 pt-16 border-t ${theme.border}`}
        >
          <h3 className={`text-2xl font-bold mb-4 ${theme.text}`}>Ready to get started?</h3>
          <p className={`${theme.textSecondary} mb-8 max-w-2xl mx-auto`}>
            Whether you need a simple website or a complex web application, I'm here to help. 
            Let's schedule a free consultation to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:med363839@gmail.com?subject=Project%20Consultation"
              className={`inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-all`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={18} className="mr-2" />
              Schedule Consultation
            </motion.a>
            <motion.a
              href="#pricing"
              className={`inline-flex items-center px-8 py-3 border ${theme.border} ${theme.text} rounded-full font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
              <ArrowUpRight size={18} className="ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;