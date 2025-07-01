import React from 'react';

interface CustomLineSeparatorProps {
  className?: string;
  opacity?: number;
  color?: string;
}

const CustomLineSeparator: React.FC<CustomLineSeparatorProps> = ({ 
  className = '', 
  opacity = 0.15,
  color = 'white'
}) => {
  // Generate unique ID for mask to prevent conflicts
  const maskId = `path-mask-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 ${className}`}>
      <div className="w-full max-w-7xl mx-auto">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          className="h-8 sm:h-10 md:h-12 lg:h-14 transition-opacity duration-300"
          viewBox="0 0 1440 54" 
          fill="none" 
          style={{ opacity }}
          preserveAspectRatio="none"
        >
          <path 
            d="M112.127 53C107.884 53 103.814 51.3143 100.814 48.3137L57.6863 5.1863C54.6857 2.1857 50.616 0.5 46.3726 0.5H0" 
            stroke={color} 
            strokeLinecap="round"
          />
          <mask id={maskId} fill="white">
            <path d="M113 53H1327V52H113V53Z" />
          </mask>
          <path 
            d="M113 53V52H1327V53V54H113V53Z" 
            fill={color} 
            mask={`url(#${maskId})`}
          />
          <path 
            d="M1327.87 53C1332.12 53 1336.19 51.3143 1339.19 48.3137L1382.31 5.1863C1385.31 2.1857 1389.38 0.5 1393.63 0.5H1440" 
            stroke={color} 
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomLineSeparator;
