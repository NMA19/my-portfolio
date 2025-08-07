import React from 'react';
import { motion } from 'framer-motion';
import { Check, DollarSign } from 'lucide-react';

const PricingSection = ({ scrollToSection }) => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "70",
      period: "Starting at",
      description: "Perfect for small businesses and personal projects",
      features: [
        "Single page website",
        "Responsive design",
        "Basic animations",
        "Contact form",
        "Mobile optimized",
        "1 week delivery"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Standard",
      price: "250",
      period: "Starting at",
      description: "Ideal for growing businesses and portfolios",
      features: [
        "Multi-page website (3-5 pages)",
        "Custom React components",
        "Advanced animations",
        "CMS integration",
        "SEO optimization",
        "2-3 weeks delivery",
        "2 rounds of revisions"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Premium",
      price: "500",
      period: "Starting at",
      description: "For complex applications and e-commerce",
      features: [
        "Full web application",
        "User authentication",
        "Database integration",
        "Payment integration",
        "Admin dashboard",
        "API development",
        "4-6 weeks delivery",
        "Unlimited revisions",
        "3 months support"
      ],
      popular: false,
      cta: "Contact Me"
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Pricing</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Transparent, competitive pricing designed to deliver maximum value for your investment. 
            All packages include responsive design and modern development practices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 relative overflow-hidden ${
                plan.popular 
                  ? 'border-gradient-to-r from-blue-500 to-purple-600 shadow-xl border-blue-500' 
                  : 'border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-xl">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-neutral-500">{plan.period}</span>
                </div>
                <p className="text-neutral-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                className={`w-full py-4 px-6 font-semibold rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Pricing Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center bg-neutral-100 rounded-2xl p-8"
        >
          <DollarSign size={32} className="mx-auto mb-4 text-green-600" />
          <h3 className="text-2xl font-bold mb-4">Need a Custom Quote?</h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Every project is unique. For complex applications, e-commerce platforms, or enterprise solutions, 
            I'll provide a detailed custom quote based on your specific requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Check size={16} className="text-green-500" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check size={16} className="text-green-500" />
              <span>Detailed project breakdown</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check size={16} className="text-green-500" />
              <span>Flexible payment options</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;