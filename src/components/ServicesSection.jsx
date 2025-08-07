import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Settings, Zap, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern React websites with responsive design, smooth animations, and optimal performance. From landing pages to complex web applications.",
      features: ["React & JavaScript", "Responsive Design", "Performance Optimization", "SEO-friendly"]
    },
    {
      icon: Smartphone,
      title: "Mobile Web Apps",
      description: "Mobile-first web applications that work seamlessly across all devices. Progressive Web Apps (PWA) with native-like experience.",
      features: ["Mobile-First Design", "Cross-Platform", "Offline Capability", "Push Notifications"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Clean, modern interfaces that prioritize user experience. From wireframes to high-fidelity mockups and interactive prototypes.",
      features: ["Wireframing", "Prototyping", "Figma to Code", "User Testing"]
    },
    {
      icon: Settings,
      title: "Custom Components",
      description: "Reusable React components tailored to your brand and needs. Clean code, well-documented, and easily maintainable.",
      features: ["Component Libraries", "Design Systems", "Documentation", "Testing"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing websites and applications. Lighthouse audits, Core Web Vitals optimization, and SEO improvements.",
      features: ["Speed Optimization", "SEO Improvement", "Lighthouse Audits", "Code Refactoring"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Services</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            I specialize in creating modern, high-performance web solutions that help businesses 
            grow and engage their users effectively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hourly Rate Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 text-white max-w-md mx-auto">
            <Clock size={32} className="mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-2">Hourly Rate</h3>
            <div className="text-4xl font-bold mb-2">$12<span className="text-lg text-neutral-300">/hour</span></div>
            <p className="text-neutral-300 mb-4">Perfect for ongoing projects or consultation</p>
            <div className="text-sm text-neutral-400">
              Minimum 10 hours • Flexible scheduling • Direct communication
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;