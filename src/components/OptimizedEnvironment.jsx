import React from 'react';
import LightSakuraTree from './LightSakuraTree';

const OptimizedEnvironment = ({ children, sakuraPosition = 'right', showSakura = true }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10" />
      
      {/* Light Sakura Tree */}
      {showSakura && (
        <LightSakuraTree 
          scale={0.6} 
          opacity={0.4} 
          position={sakuraPosition} 
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default OptimizedEnvironment;
