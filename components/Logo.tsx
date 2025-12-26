import React from 'react';

interface LogoProps {
  className?: string; // Container height
  textClassName?: string; // Text styling
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", textClassName = "text-xl" }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG Icon */}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-full w-auto aspect-square"
      >
        {/* Outer Triangle */}
        <path 
          d="M50 10L90 90H10L50 10Z" 
          stroke="white" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Inner Triangle */}
        <path 
          d="M50 45L70 85H30L50 45Z" 
          fill="#10B981" 
        />
      </svg>
      
      {/* Text Lockup */}
      <div className={`flex items-baseline font-display font-bold tracking-tighter uppercase ${textClassName}`}>
        <span className="text-white">ALPHA</span>
        <span className="text-emerald-500 ml-1">DIGITAL</span>
      </div>
    </div>
  );
};

export default Logo;