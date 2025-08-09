import React from 'react';
import { motion } from 'framer-motion';

const LightSakuraTree = ({ scale = 0.8, opacity = 0.6, position = 'right' }) => {
  const positionClasses = {
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    right: 'top-1/4 right-4',
    left: 'top-1/4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  return (
    <motion.div
      className={`fixed ${positionClasses[position]} pointer-events-none z-0`}
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: opacity }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Simple Trunk */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: '8px',
          height: '80px',
          background: 'linear-gradient(to bottom, #8B4513, #654321)',
          borderRadius: '4px',
        }}
      />
      
      {/* Main Branches */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        {/* Left Branch */}
        <div 
          className="absolute"
          style={{
            width: '40px',
            height: '4px',
            background: '#8B4513',
            transform: 'rotate(-25deg) translateX(-20px)',
            borderRadius: '2px',
          }}
        />
        
        {/* Right Branch */}
        <div 
          className="absolute"
          style={{
            width: '40px',
            height: '4px',
            background: '#8B4513',
            transform: 'rotate(25deg) translateX(20px)',
            borderRadius: '2px',
          }}
        />
        
        {/* Center Branch */}
        <div 
          className="absolute"
          style={{
            width: '30px',
            height: '4px',
            background: '#8B4513',
            transform: 'rotate(-5deg)',
            borderRadius: '2px',
          }}
        />
      </div>

      {/* Simple Blossoms */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: 'linear-gradient(45deg, #FFB6C1, #FFC0CB)',
            left: `${20 + (i % 3) * 15}px`,
            top: `${10 + Math.floor(i / 3) * 12}px`,
            boxShadow: '0 2px 4px rgba(255, 182, 193, 0.3)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating Petals - Reduced count */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          className="absolute w-2 h-2 rounded-full opacity-70"
          style={{
            background: 'linear-gradient(45deg, #FFB6C1, #FFC0CB)',
            left: `${40 + i * 20}px`,
            top: '20px',
          }}
          animate={{
            y: [0, -30, 60],
            x: [0, 15, -10],
            rotate: [0, 180, 360],
            opacity: [0.7, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
        />
      ))}
    </motion.div>
  );
};

export default LightSakuraTree;
