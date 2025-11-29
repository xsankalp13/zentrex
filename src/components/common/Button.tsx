import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}) => {
  const baseStyle = "px-8 py-3 transition-all duration-300 text-sm font-medium tracking-wide inline-block text-center cursor-pointer";
  
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-700 border border-stone-900",
    outline: "bg-transparent border border-stone-300 text-stone-900 hover:border-stone-900",
    text: "text-stone-900 border-b border-stone-900 hover:opacity-70 px-0 py-1"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;