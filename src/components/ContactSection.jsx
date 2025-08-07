import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/NMA19", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anis-nedjem", label: "LinkedIn" },
    { icon: Mail, href: "mailto:med363839@gmail.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">Let's Create Something Amazing</h2>
          <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
            I'm always excited to work on new projects and collaborate with talented people. 
            Whether you have a project in mind or just want to chat about technology, 
            I'd love to hear from you.
          </p>
          
          <motion.a
            href="mailto:med363839@gmail.com"
            className="group inline-flex items-center px-12 py-6 bg-neutral-900 text-neutral-50 text-lg font-medium rounded-full hover:bg-neutral-800 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <ArrowUpRight size={24} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
          
          <div className="flex justify-center items-center gap-8 mt-16">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-4 border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;