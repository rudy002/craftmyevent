'use client';

import React from 'react';

const AnimatedDivider: React.FC = () => {
  return (
    <div className="relative my-16">
      {/* Div principale avec gradient animé */}
      <div className="relative flex justify-center">
        <div className="w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient"></div>
      </div>

      {/* Effet de cercle animé */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-2">
        <div className="w-8 h-8 border-4 border-indigo-500 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default AnimatedDivider;
