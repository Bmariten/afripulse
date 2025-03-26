
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedScribbleProps {
  children: React.ReactNode;
  color?: 'red' | 'neon' | 'gold';
  type?: 'circle' | 'underline' | 'arrow' | 'star';
  className?: string;
  animationDelay?: number;
}

const AnimatedScribble = ({ 
  children, 
  color = 'red', 
  type = 'circle',
  className,
  animationDelay = 0
}: AnimatedScribbleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  const colorMap = {
    red: '#FF3333',
    neon: '#00FF66',
    gold: '#D4AF37'
  };
  
  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const svg = svgRef.current;
    
    svg.setAttribute('width', `${containerRect.width + 20}px`);
    svg.setAttribute('height', `${containerRect.height + 20}px`);
    
    let path = '';
    
    if (type === 'circle') {
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;
      const radius = Math.max(containerRect.width, containerRect.height) / 2 + 5;
      
      path = `M ${centerX - radius * 0.2}, ${centerY}
              C ${centerX - radius * 0.8}, ${centerY - radius * 0.8},
                ${centerX + radius * 0.8}, ${centerY - radius * 0.8},
                ${centerX + radius * 0.2}, ${centerY}
              C ${centerX + radius * 0.8}, ${centerY + radius * 0.8},
                ${centerX - radius * 0.8}, ${centerY + radius * 0.8},
                ${centerX - radius * 0.2}, ${centerY}`;
    } else if (type === 'underline') {
      path = `M 5, ${containerRect.height + 2}
              C ${containerRect.width * 0.25}, ${containerRect.height - 3},
                ${containerRect.width * 0.75}, ${containerRect.height + 7},
                ${containerRect.width - 5}, ${containerRect.height + 2}`;
    } else if (type === 'arrow') {
      path = `M ${containerRect.width + 5}, ${containerRect.height / 2}
              L ${containerRect.width - 10}, ${containerRect.height / 2 - 10}
              M ${containerRect.width + 5}, ${containerRect.height / 2}
              L ${containerRect.width - 10}, ${containerRect.height / 2 + 10}`;
    } else if (type === 'star') {
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;
      const outerRadius = Math.max(containerRect.width, containerRect.height) / 2 + 10;
      const innerRadius = outerRadius * 0.4;
      const points = 5;
      const angleStep = Math.PI / points;
      
      let pathPoints = '';
      
      for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = i * angleStep;
        const x = centerX + radius * Math.sin(angle);
        const y = centerY - radius * Math.cos(angle);
        
        pathPoints += (i === 0 ? 'M ' : ' L ') + x + ',' + y;
      }
      
      path = pathPoints + ' Z';
    }
    
    const pathElement = svg.querySelector('path');
    if (pathElement) {
      pathElement.setAttribute('d', path);
      
      const length = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${length}`;
      pathElement.style.strokeDashoffset = `${length}`;
      
      // Force reflow to make the initial state take effect
      pathElement.getBoundingClientRect();
      
      // Now animate
      pathElement.style.transition = `stroke-dashoffset 1.5s ease-in-out ${animationDelay}s`;
      pathElement.style.strokeDashoffset = '0';
    }
  }, [type, animationDelay]);
  
  return (
    <div ref={containerRef} className={cn("relative inline-block", className)}>
      {children}
      <svg
        ref={svgRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ 
          width: '100%', 
          height: '100%', 
          overflow: 'visible',
          zIndex: 10
        }}
      >
        <path
          fill="none"
          stroke={colorMap[color]}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '1000',
            strokeDashoffset: '1000'
          }}
        />
      </svg>
    </div>
  );
};

export default AnimatedScribble;
