
import React from 'react';
import { cn } from '@/lib/utils';

interface PulseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'neon' | 'gold' | 'black';
}

const PulseButton = ({ 
  children, 
  className, 
  variant = 'neon',
  ...props 
}: PulseButtonProps) => {
  const baseStyles = "pulse-btn font-montserrat font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg";
  
  const variantStyles = {
    neon: "bg-afrinova-neon text-afrinova-black hover:bg-afrinova-neon-dark animate-glow",
    gold: "bg-afrinova-gold text-afrinova-black hover:bg-afrinova-gold-light",
    black: "bg-afrinova-black text-white hover:bg-gray-900",
  };

  return (
    <button 
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default PulseButton;
