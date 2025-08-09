import React from 'react';
import { motion } from 'framer-motion';

const Text3D = ({ children, className = '', variant = 'default', ...props }) => {
  const variants = {
    default: {
      base: {
        transform: 'translateZ(0px) rotateX(0deg) rotateY(0deg)',
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
      },
      hover: {
        transform: 'translateZ(10px) rotateX(5deg) rotateY(2deg)',
        textShadow: '0 5px 15px rgba(0, 0, 0, 0.4), 0 2px 5px rgba(59, 130, 246, 0.3)',
      }
    },
    hero: {
      base: {
        transform: 'translateZ(20px) rotateX(0deg) rotateY(0deg)',
        textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
        background: 'linear-gradient(135deg, #3b82f6, #9333ea, #ec4899)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      },
      hover: {
        transform: 'translateZ(30px) rotateX(8deg) rotateY(5deg)',
        textShadow: '0 8px 25px rgba(0, 0, 0, 0.6), 0 4px 15px rgba(59, 130, 246, 0.4)',
        scale: 1.05,
      }
    },
    floating: {
      base: {
        transform: 'translateZ(5px) rotateX(0deg) rotateY(0deg)',
        textShadow: '0 2px 10px rgba(255, 182, 193, 0.5)',
      },
      hover: {
        transform: 'translateZ(15px) rotateX(3deg) rotateY(-3deg)',
        textShadow: '0 5px 20px rgba(255, 182, 193, 0.7), 0 2px 8px rgba(0, 0, 0, 0.3)',
        scale: 1.02,
      }
    },
    subtle: {
      base: {
        transform: 'translateZ(2px) rotateX(0deg) rotateY(0deg)',
        textShadow: '0 1px 5px rgba(0, 0, 0, 0.2)',
      },
      hover: {
        transform: 'translateZ(8px) rotateX(2deg) rotateY(1deg)',
        textShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
        scale: 1.01,
      }
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <motion.div
      className={`text-3d ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        position: 'relative',
        display: 'inline-block',
        ...currentVariant.base,
      }}
      whileHover={currentVariant.hover}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      }}
      {...props}
    >
      {children}
      
      {/* 3D Depth Layer */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
          borderRadius: '8px',
          transform: 'translateZ(-5px)',
          opacity: 0,
          pointerEvents: 'none',
        }}
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow Effect */}
      {variant === 'hero' && (
        <motion.div
          style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            right: '-20px',
            bottom: '-20px',
            background: 'radial-gradient(circle, rgba(255, 182, 193, 0.3) 0%, transparent 70%)',
            borderRadius: '20px',
            transform: 'translateZ(-10px)',
            filter: 'blur(20px)',
            opacity: 0,
            pointerEvents: 'none',
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

export default Text3D;
