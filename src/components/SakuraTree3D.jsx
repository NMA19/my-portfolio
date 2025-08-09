import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SakuraTree3D = ({ 
  scale = 1, 
  opacity = 1, 
  position = 'center', 
  interactive = true,
  variant = 'default' 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const treeRef = useRef(null);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e) => {
      const rect = treeRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 40,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 40
        });
      }
    };

    const handleResize = () => {
      setIsVisible(window.innerWidth > 768);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [interactive]);

  if (!isVisible && interactive) return null;

  const getPositionStyles = () => {
    switch (position) {
      case 'left':
        return { left: '5%', top: '20%' };
      case 'right':
        return { right: '5%', top: '20%' };
      case 'center':
        return { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' };
      case 'background':
        return { left: '50%', top: '30%', transform: 'translate(-50%, -50%)' };
      default:
        return { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' };
    }
  };

  const treeVariants = {
    default: {
      trunkColor: 'from-amber-900 via-amber-800 to-amber-700',
      branchColor: 'from-amber-800 to-amber-700',
      blossomCount: 60,
      petalCount: 40
    },
    subtle: {
      trunkColor: 'from-amber-900/40 via-amber-800/40 to-amber-700/40',
      branchColor: 'from-amber-800/40 to-amber-700/40',
      blossomCount: 30,
      petalCount: 20
    },
    minimal: {
      trunkColor: 'from-amber-900/20 via-amber-800/20 to-amber-700/20',
      branchColor: 'from-amber-800/20 to-amber-700/20',
      blossomCount: 15,
      petalCount: 10
    }
  };

  const config = treeVariants[variant] || treeVariants.default;

  return (
    <div
      ref={treeRef}
      className="absolute overflow-hidden pointer-events-none"
      style={{
        ...getPositionStyles(),
        width: `${400 * scale}px`,
        height: `${500 * scale}px`,
        opacity,
        perspective: '2000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Main 3D Tree Container */}
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: interactive 
            ? `rotateX(${mousePosition.y * 0.15}deg) rotateY(${mousePosition.x * 0.15}deg) rotateZ(${Math.sin(Date.now() * 0.001) * 2}deg)`
            : 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
        }}
        initial={{ scale: 0, rotateY: -180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Tree Trunk - 3D Cylinder Effect */}
        <motion.div
          className="absolute left-1/2 bottom-0"
          style={{
            width: `${16 * scale}px`,
            height: `${200 * scale}px`,
            marginLeft: `${-8 * scale}px`,
            transformStyle: 'preserve-3d'
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          {/* Trunk faces for 3D effect */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-full h-full bg-gradient-to-t ${config.trunkColor}`}
              style={{
                transformOrigin: 'center center',
                transform: `rotateY(${i * 45}deg) translateZ(${8 * scale}px)`,
                opacity: 0.8 + (i % 2) * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Main Branches - 3D Structure */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) - 180;
          const length = 80 + Math.random() * 40;
          const height = 60 + i * 12;
          
          return (
            <motion.div
              key={i}
              className="absolute left-1/2"
              style={{
                bottom: `${height * scale}px`,
                transformOrigin: 'left center',
                transformStyle: 'preserve-3d'
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: angle }}
              transition={{ delay: 1 + i * 0.1, duration: 1 }}
            >
              <div
                className={`bg-gradient-to-r ${config.branchColor} rounded-full`}
                style={{
                  width: `${length * scale}px`,
                  height: `${(6 - i * 0.3) * scale}px`,
                  transform: `translateZ(${i * 2}px)`
                }}
              />
              
              {/* Sub-branches */}
              {[...Array(3)].map((_, j) => (
                <div
                  key={j}
                  className={`absolute bg-gradient-to-r ${config.branchColor} rounded-full`}
                  style={{
                    width: `${(length * 0.6) * scale}px`,
                    height: `${3 * scale}px`,
                    left: `${(length * 0.6) * scale}px`,
                    top: `${-1.5 * scale}px`,
                    transformOrigin: 'left center',
                    transform: `rotate(${(j - 1) * 25}deg) translateZ(${(i + j) * 1.5}px)`
                  }}
                />
              ))}
            </motion.div>
          );
        })}

        {/* 3D Sakura Blossoms */}
        {[...Array(config.blossomCount)].map((_, i) => {
          const radius = 150 + Math.random() * 100;
          const angle = (i / config.blossomCount) * Math.PI * 2;
          const x = Math.cos(angle) * radius * scale;
          const y = Math.sin(angle) * radius * scale;
          const z = (Math.random() - 0.5) * 100 * scale;
          
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `50%`,
                top: `50%`,
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                transformStyle: 'preserve-3d'
              }}
              initial={{ 
                scale: 0, 
                opacity: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0
              }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 1, 0.8],
                rotateX: [0, 360, 720],
                rotateY: [0, 180, 360],
                rotateZ: [0, 90, 180],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            >
              {/* 3D Blossom with multiple petals */}
              <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
                {[...Array(5)].map((_, petalIndex) => (
                  <div
                    key={petalIndex}
                    className="absolute w-4 h-4 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 rounded-full"
                    style={{
                      transform: `rotateZ(${petalIndex * 72}deg) translateX(4px) rotateX(${petalIndex * 20}deg)`,
                      transformOrigin: 'center',
                      filter: `drop-shadow(0 0 ${3 + Math.random() * 5}px rgba(255, 182, 193, 0.8))`
                    }}
                  />
                ))}
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-300 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.div>
          );
        })}

        {/* Floating Petals with Physics */}
        {[...Array(config.petalCount)].map((_, i) => {
          const startX = (Math.random() - 0.5) * 400 * scale;
          const startY = (Math.random() - 0.5) * 300 * scale;
          const startZ = Math.random() * 150 * scale;
          
          return (
            <motion.div
              key={`petal-${i}`}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate3d(${startX}px, ${startY}px, ${startZ}px)`,
                transformStyle: 'preserve-3d'
              }}
              initial={{ 
                scale: 0,
                opacity: 0,
                rotateZ: 0,
                rotateX: 0,
                rotateY: 0
              }}
              animate={{
                scale: [0, 1, 0.8, 0],
                opacity: [0, 0.9, 0.6, 0],
                rotateZ: [0, 360, 720],
                rotateX: [0, 180, 360],
                rotateY: [0, 90, 180],
                y: [0, -150, -300],
                x: [0, (Math.random() - 0.5) * 100]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut"
              }}
            >
              <div 
                className="w-3 h-3 bg-gradient-to-br from-pink-200 to-pink-400 rounded-full"
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(255, 182, 193, 0.6))',
                  transform: `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`
                }}
              />
            </motion.div>
          );
        })}

        {/* Ambient Light Effects */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 182, 193, 0.1) 0%, transparent 70%)',
            transform: 'translateZ(-50px)',
            filter: 'blur(20px)'
          }}
        />
      </motion.div>
    </div>
  );
};

export default SakuraTree3D;
