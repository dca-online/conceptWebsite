'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  threshold?: number;
  once?: boolean;
};

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 50,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  
  // Configure animation variants based on scroll direction
  // Apply directional transform based on animation settings
  // Default case: fade in without directional movement
  const getVariants = (): Variants => {
    const variants: Variants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        }
      }
    };
    
    // Add transform based on direction
    switch (direction) {
      case 'up':
        variants.hidden = { ...variants.hidden, y: distance };
        variants.visible = { ...variants.visible, y: 0 };
        break;
      case 'down':
        variants.hidden = { ...variants.hidden, y: -distance };
        variants.visible = { ...variants.visible, y: 0 };
        break;
      case 'left':
        variants.hidden = { ...variants.hidden, x: distance };
        variants.visible = { ...variants.visible, x: 0 };
        break;
      case 'right':
        variants.hidden = { ...variants.hidden, x: -distance };
        variants.visible = { ...variants.visible, x: 0 };
        break;
      case 'none':
      default:
        // No transform, just opacity
        break;
    }
    
    return variants;
  };
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 