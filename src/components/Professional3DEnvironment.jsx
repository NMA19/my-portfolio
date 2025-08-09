import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SakuraTree3D from './SakuraTree3D';

const Professional3DEnvironment = ({ 
  children, 
  variant = 'default',
  treePosition = 'background',
  showParticles = true,
  showAmbientLight = true,
  className = ''
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        perspective: '3000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Professional 3D Sakura Tree */}
      <SakuraTree3D 
        scale={0.6}
        opacity={0.3}
        position={treePosition}
        interactive={true}
        variant="subtle"
      />

      {/* Advanced Particle System */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, 
                  rgba(255, 182, 193, ${0.2 + Math.random() * 0.3}), 
                  rgba(147, 51, 234, ${0.1 + Math.random() * 0.2}))`,
                transform: `translateZ(${Math.random() * 200}px)`,
                transformStyle: 'preserve-3d'
              }}
              animate={{
                y: [-50, window.innerHeight + 50],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotateX: [0, 360],
                rotateY: [0, 180],
                x: [0, mousePosition.x * 0.3]
              }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}

      {/* Professional Ambient Lighting */}
      {showAmbientLight && (
        <>
          <div 
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-400/20 via-purple-400/15 to-blue-400/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: 'translateZ(-100px)' }}
          />
          <div 
            className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/15 via-indigo-300/10 to-purple-300/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s', transform: 'translateZ(-80px)' }}
          />
          <div 
            className="absolute top-1/3 left-1/2 w-80 h-80 bg-gradient-to-br from-rose-300/25 via-pink-300/15 to-orange-300/20 rounded-full blur-2xl animate-bounce"
            style={{ animationDelay: '1s', transform: 'translateZ(-120px)' }}
          />
        </>
      )}

      {/* Professional Glassmorphism Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/5 via-pink-50/3 to-purple-50/5 backdrop-blur-[1px]"
        style={{ transform: 'translateZ(20px)' }}
      />

      {/* Content Container */}
      <div 
        className="relative z-10"
        style={{ transform: 'translateZ(30px)' }}
      >
        {children}
      </div>

      {/* Interactive 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * 150}px)`,
              transformStyle: 'preserve-3d'
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 180],
              rotateZ: [0, 90],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
              x: [0, mousePosition.x * 0.2],
              y: [0, mousePosition.y * 0.2]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <div 
              className="text-2xl"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 182, 193, 0.5))',
                transform: `rotateY(${mousePosition.x * 0.1}deg) rotateX(${mousePosition.y * 0.1}deg)`
              }}
            >
              {['🌸', '🌺', '🌙', '✨', '💫', '🦋', '🌿', '💎'][i]}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Professional3DEnvironment;
