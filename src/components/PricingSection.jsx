import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, DollarSign, Clock, Star, Users, ArrowRight, Zap, Shield, Award, Info } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const PricingSection = ({ scrollToSection }) => {
  const { theme } = useTheme();
  const [billingPeriod, setBillingPeriod] = useState('project');
  const [activeFeature, setActiveFeature] = useState(null);

  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };
  const pricingPlans = [
    {
      name: "Starter",
      price: "70",
      hourlyPrice: "12",
      period: "Starting at",
      description: "Perfect for small businesses and personal projects",
      icon: Zap,
      features: [
        { name: "Single page website", tooltip: "One professionally designed landing page" },
        { name: "Responsive design", tooltip: "Looks perfect on all devices" },
        { name: "Basic animations", tooltip: "Smooth transitions and hover effects" },
        { name: "Contact form", tooltip: "Functional contact form with validation" },
        { name: "Mobile optimized", tooltip: "Fast loading on mobile devices" },
        { name: "1 week delivery", tooltip: "Quick turnaround time" },
        { name: "SEO basics", tooltip: "Basic search engine optimization" }
      ],
      deliverables: ["Source code", "Deployment guide", "Basic documentation"],
      timeline: "5-7 days",
      revisions: "2 rounds",
      support: "1 month",
      popular: false,
      cta: "Get Started",
      badge: "",
      savings: ""
    },
    {
      name: "Professional",
      price: "250",
      hourlyPrice: "12",
      period: "Starting at",
      description: "Ideal for growing businesses and comprehensive portfolios",
      icon: Award,
      features: [
        { name: "Multi-page website (3-5 pages)", tooltip: "Complete website with navigation" },
        { name: "Custom React components", tooltip: "Tailored components for your needs" },
        { name: "Advanced animations", tooltip: "Sophisticated motion design" },
        { name: "CMS integration", tooltip: "Easy content management" },
        { name: "SEO optimization", tooltip: "Complete search engine optimization" },
        { name: "2-3 weeks delivery", tooltip: "Comprehensive development time" },
        { name: "Performance optimization", tooltip: "Fast loading and smooth experience" },
        { name: "Analytics setup", tooltip: "Google Analytics integration" }
      ],
      deliverables: ["Source code", "CMS setup", "SEO optimization", "Analytics dashboard"],
      timeline: "2-3 weeks",
      revisions: "3 rounds",
      support: "3 months",
      popular: true,
      cta: "Most Popular",
      badge: "Best Value",
      savings: "Save 30%"
    },
    {
      name: "Enterprise",
      price: "500",
      hourlyPrice: "12",
      period: "Starting at",
      description: "For complex applications and e-commerce solutions",
      icon: Shield,
      features: [
        { name: "Full web application", tooltip: "Complete custom web application" },
        { name: "User authentication", tooltip: "Secure login and user management" },
        { name: "Database integration", tooltip: "Custom database design and setup" },
        { name: "Payment integration", tooltip: "Secure payment processing" },
        { name: "Admin dashboard", tooltip: "Comprehensive admin panel" },
        { name: "API development", tooltip: "Custom REST API development" },
        { name: "4-6 weeks delivery", tooltip: "Complex application development" },
        { name: "Testing & QA", tooltip: "Comprehensive testing suite" },
        { name: "Deployment & hosting", tooltip: "Full deployment assistance" }
      ],
      deliverables: ["Full application", "Admin panel", "API documentation", "Testing suite", "Deployment"],
      timeline: "4-6 weeks",
      revisions: "Unlimited",
      support: "6 months",
      popular: false,
      cta: "Contact Me",
      badge: "Premium",
      savings: ""
    }
  ];

  const comparisonFeatures = [
    "Custom Design",
    "Responsive Layout",
    "SEO Optimization", 
    "Performance Optimization",
    "Browser Testing",
    "Mobile Optimization",
    "Analytics Setup",
    "Technical Support"
  ];

  return (
    <section 
      id="pricing" 
      className={`py-24 ${theme.primary} transition-colors duration-300`}
      aria-label="Pricing plans and packages"
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
            className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Pricing Plans
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Transparent, competitive pricing designed to deliver maximum value for your investment. 
            All packages include responsive design, modern development practices, and ongoing support.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <span className={`font-medium ${billingPeriod === 'project' ? 'text-neutral-900' : 'text-neutral-500'}`}>
              Project Based
            </span>
            <motion.button
              className="relative bg-neutral-200 rounded-full p-1 w-16 h-8"
              onClick={() => setBillingPeriod(billingPeriod === 'project' ? 'hourly' : 'project')}
              onKeyDown={(e) => handleKeyDown(e, () => setBillingPeriod(billingPeriod === 'project' ? 'hourly' : 'project'))}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle between project and hourly pricing"
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-sm"
                animate={{ x: billingPeriod === 'project' ? 0 : 32 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </motion.button>
            <span className={`font-medium ${billingPeriod === 'hourly' ? 'text-neutral-900' : 'text-neutral-500'}`}>
              Hourly Rate
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: Users, number: "25+", label: "Happy Clients" },
              { icon: Clock, number: "48h", label: "Avg Response Time" },
              { icon: Star, number: "5.0", label: "Client Rating" },
              { icon: Award, number: "100%", label: "Project Success" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="bg-white rounded-xl p-4 shadow-lg border border-neutral-200 text-center hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <stat.icon className="mx-auto mb-2 text-blue-600" size={20} />
                <p className="text-lg font-bold text-neutral-900">{stat.number}</p>
                <p className="text-xs text-neutral-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 relative overflow-hidden ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl ring-2 ring-blue-500/20' 
                  : 'border-neutral-200 hover:border-neutral-300 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-xl">
                  {plan.badge}
                </div>
              )}

              {/* Savings Badge */}
              {plan.savings && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                  {plan.savings}
                </div>
              )}
              
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <plan.icon size={24} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={billingPeriod}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-baseline gap-2 mb-3"
                  >
                    <span className="text-4xl font-bold">
                      ${billingPeriod === 'project' ? plan.price : plan.hourlyPrice}
                    </span>
                    <span className="text-neutral-500">
                      {billingPeriod === 'project' ? plan.period : '/hour'}
                    </span>
                  </motion.div>
                </AnimatePresence>
                
                <p className="text-neutral-600 mb-6">{plan.description}</p>

                {/* Project Details */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <Clock size={16} className="mx-auto mb-1 text-blue-600" />
                    <p className="font-medium text-blue-900">{plan.timeline}</p>
                    <p className="text-blue-600 text-xs">Timeline</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <ArrowRight size={16} className="mx-auto mb-1 text-purple-600" />
                    <p className="font-medium text-purple-900">{plan.revisions}</p>
                    <p className="text-purple-600 text-xs">Revisions</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <Shield size={16} className="mx-auto mb-1 text-green-600" />
                    <p className="font-medium text-green-900">{plan.support}</p>
                    <p className="text-green-600 text-xs">Support</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-neutral-900 mb-3">What's Included:</h4>
                {plan.features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-start gap-3 group cursor-pointer"
                    onClick={() => setActiveFeature(activeFeature === `${index}-${idx}` ? null : `${index}-${idx}`)}
                    onKeyDown={(e) => handleKeyDown(e, () => setActiveFeature(activeFeature === `${index}-${idx}` ? null : `${index}-${idx}`))}
                    tabIndex={0}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                  >
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                        {feature.name}
                      </span>
                      <Info size={14} className="inline ml-2 text-neutral-400 group-hover:text-neutral-600" />
                      
                      <AnimatePresence>
                        {activeFeature === `${index}-${idx}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 text-sm text-neutral-600 bg-neutral-50 p-3 rounded-lg"
                          >
                            {feature.tooltip}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Deliverables */}
              <div className="mb-8">
                <h4 className="font-semibold text-neutral-900 mb-3">Deliverables:</h4>
                <div className="flex flex-wrap gap-2">
                  {plan.deliverables.map((deliverable, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm border"
                    >
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-4 px-6 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                aria-label={`Select ${plan.name} plan`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Feature Comparison</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="text-left p-6 font-semibold">Features</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.name} className="text-center p-6 font-semibold">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature} className={index % 2 === 0 ? 'bg-neutral-25' : 'bg-white'}>
                      <td className="p-6 font-medium text-neutral-700">{feature}</td>
                      {pricingPlans.map((plan) => (
                        <td key={plan.name} className="text-center p-6">
                          <Check size={20} className="text-green-500 mx-auto" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Custom Quote Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <motion.div 
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            
            <DollarSign size={32} className="mx-auto mb-4 text-green-400" />
            <h3 className="text-3xl font-bold mb-4 text-white">Need a Custom Solution?</h3>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every project is unique. For complex applications, e-commerce platforms, or enterprise solutions, 
              I'll provide a detailed custom quote based on your specific requirements and timeline.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Check, text: "Free 30-min consultation", color: "text-green-400" },
                { icon: Star, text: "Detailed project breakdown", color: "text-yellow-400" },
                { icon: Shield, text: "Flexible payment options", color: "text-blue-400" }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center gap-3 text-neutral-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <benefit.icon size={20} className={benefit.color} />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm text-neutral-400">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Perfect for:</h4>
                <ul className="space-y-1">
                  <li>• E-commerce platforms</li>
                  <li>• Enterprise applications</li>
                  <li>• Complex integrations</li>
                  <li>• Custom requirements</li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">What you get:</h4>
                <ul className="space-y-1">
                  <li>• Detailed technical proposal</li>
                  <li>• Timeline & milestone breakdown</li>
                  <li>• Fixed-price estimate</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
            </div>

            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all flex items-center space-x-2 mx-auto shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              aria-label="Request custom quote"
            >
              <span>Request Custom Quote</span>
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;