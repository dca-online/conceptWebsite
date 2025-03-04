'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import classNames from 'classnames';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  ariaLabel?: string;
};

const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  ariaLabel,
}: ButtonProps) => {
  const baseClasses = classNames(
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 relative overflow-hidden',
    {
      // Button style variants for different use cases
      'bg-gradient-to-r from-vaporwave-pink to-vaporwave-purple text-white hover:from-vaporwave-purple hover:to-vaporwave-pink': variant === 'primary',
      'bg-vaporwave-darkBlue text-white hover:bg-vaporwave-darkPurple': variant === 'secondary',
      'border-2 border-vaporwave-pink bg-transparent text-white hover:bg-vaporwave-pink/10': variant === 'outline',
      'bg-transparent text-white hover:text-vaporwave-pink': variant === 'ghost',
      
      // Button size options
      'text-sm px-4 py-2': size === 'sm',
      'text-base px-6 py-3': size === 'md',
      'text-lg px-8 py-4': size === 'lg',
      
      // Full width setting for the button
      'w-full': fullWidth,
      
      // Styles applied when the button is disabled
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );
  
  const iconClasses = classNames({
    'mr-2': iconPosition === 'left' && children,
    'ml-2': iconPosition === 'right' && children,
  });
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={iconClasses}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={iconClasses}>{icon}</span>}
    </>
  );
  
  // Animation settings for button hover effect
  const hoverAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } },
  };
  
  if (href) {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={hoverAnimation}
      >
        <Link 
          href={href} 
          className={baseClasses}
          aria-label={ariaLabel}
        >
          {content}
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={hoverAnimation}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
};

export default Button; 