import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Send, MessageSquare, Calendar, MapPin, Phone, Clock, CheckCircle, User, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ContactSection = () => {
  const { theme } = useTheme();
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
      className={`py-24 ${theme.secondary} transition-colors duration-300`}
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's Create Something Amazing
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-3xl mx-auto"
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
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-200">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="text-blue-600" size={24} />
                <h3 className="text-2xl font-bold">Send me a message</h3>
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
                    <p className="text-neutral-600">
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
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                              errors.name ? 'border-red-500' : 'border-neutral-300'
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
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                              errors.email ? 'border-red-500' : 'border-neutral-300'
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
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          errors.subject ? 'border-red-500' : 'border-neutral-300'
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
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageCircle className="absolute left-3 top-3 text-neutral-400" size={18} />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                            errors.message ? 'border-red-500' : 'border-neutral-300'
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
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-200">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="text-green-600" size={24} />
                <h3 className="text-2xl font-bold">Quick Contact</h3>
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

              <p className="text-neutral-600 text-center">
                Prefer email? Click above to send me a direct message
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <info.icon className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-neutral-900">{info.title}</h4>
                      <p className="text-neutral-700 font-medium">{info.value}</p>
                      <p className="text-sm text-neutral-600">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? "_self" : "_blank"}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className={`group flex items-center space-x-4 p-4 border border-neutral-200 rounded-xl transition-all hover:border-transparent hover:text-white ${social.color}`}
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
              className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-green-800">Available for new projects</h4>
              </div>
              <p className="text-green-700 text-sm">
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
          className="text-center mt-16 pt-16 border-t border-neutral-200"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Whether you need a simple website or a complex web application, I'm here to help. 
            Let's schedule a free consultation to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:med363839@gmail.com?subject=Project%20Consultation"
              className="inline-flex items-center px-8 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={18} className="mr-2" />
              Schedule Consultation
            </motion.a>
            <motion.a
              href="#pricing"
              className="inline-flex items-center px-8 py-3 border border-neutral-300 text-neutral-700 rounded-full font-medium hover:border-neutral-900 hover:text-neutral-900 transition-colors"
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