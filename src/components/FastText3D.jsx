import React from 'react';
import { motion } from 'framer-motion';

const FastText3D = ({ children, className = '', variant = 'default', ...props }) => {
  const variants = {
    default: {
      base: {
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      hover: {
        textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        y: -2,
      }
    },
    hero: {
      base: {
        textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        background: 'linear-gradient(135deg, #3b82f6, #9333ea, #ec4899)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      },
      hover: {
        textShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
        scale: 1.02,
      }
    },
    floating: {
      base: {
        textShadow: '0 2px 6px rgba(255, 182, 193, 0.3)',
      },
      hover: {
        textShadow: '0 4px 12px rgba(255, 182, 193, 0.5)',
        y: -3,
      }
    },
    subtle: {
      base: {
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      hover: {
        textShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
        y: -1,
      }
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <motion.div
      className={`${className}`}
      style={{
        display: 'inline-block',
        ...currentVariant.base,
      }}
      whileHover={currentVariant.hover}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FastText3D;
