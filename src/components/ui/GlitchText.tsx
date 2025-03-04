'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import classNames from 'classnames';

type GlitchTextProps = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'pink' | 'blue' | 'purple' | 'white';
  animate?: boolean;
};

const GlitchText = ({
  children,
  as: Component = 'h2',
  className = '',
  intensity = 'medium',
  color = 'white',
  animate = true,
}: GlitchTextProps) => {
  const baseClasses = classNames(
    'relative inline-block',
    {
      'text-vaporwave-pink': color === 'pink',
      'text-vaporwave-blue': color === 'blue',
      'text-vaporwave-purple': color === 'purple',
      'text-white': color === 'white',
    },
    className
  );

  // Define glitch animation variants based on intensity
  const glitchVariants = {
    low: {
      initial: { x: 0 },
      animate: {
        x: [0, -1, 1, 0],
        transition: {
          duration: 0.2,
          repeat: Infinity,
          repeatType: "mirror" as const,
          repeatDelay: 5,
        },
      },
    },
    medium: {
      initial: { x: 0 },
      animate: {
        x: [0, -2, 2, -1, 1, 0],
        transition: {
          duration: 0.3,
          repeat: Infinity,
          repeatType: "mirror" as const,
          repeatDelay: 3,
        },
      },
    },
    high: {
      initial: { x: 0 },
      animate: {
        x: [0, -3, 3, -2, 2, -1, 1, 0],
        transition: {
          duration: 0.4,
          repeat: Infinity,
          repeatType: "mirror" as const,
          repeatDelay: 1.5,
        },
      },
    },
  } as Record<string, Variants>;

  // Define pseudo-element colors based on selected color
  const beforeColor = color === 'pink' ? 'rgba(255, 113, 206, 0.7)' : 
                     color === 'blue' ? 'rgba(1, 205, 254, 0.7)' : 
                     color === 'purple' ? 'rgba(185, 103, 255, 0.7)' : 
                     'rgba(255, 255, 255, 0.7)';
  
  const afterColor = color === 'pink' ? 'rgba(255, 113, 206, 0.7)' : 
                    color === 'blue' ? 'rgba(1, 205, 254, 0.7)' : 
                    color === 'purple' ? 'rgba(185, 103, 255, 0.7)' : 
                    'rgba(255, 255, 255, 0.7)';

  return (
    <motion.div
      className="relative inline-block"
      initial="initial"
      animate={animate ? "animate" : "initial"}
      variants={glitchVariants[intensity]}
    >
      <Component className={baseClasses} data-text={typeof children === 'string' ? children : undefined}>
        {children}
      </Component>
      
      {/* Pseudo-elements for glitch effect */}
      <style jsx>{`
        ${Component}::before,
        ${Component}::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        
        ${Component}::before {
          color: ${beforeColor};
          z-index: -1;
          transform: translateX(-2px);
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          animation: ${animate ? 'glitch-before 3s infinite linear alternate-reverse' : 'none'};
        }
        
        ${Component}::after {
          color: ${afterColor};
          z-index: -2;
          transform: translateX(2px);
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
          animation: ${animate ? 'glitch-after 2s infinite linear alternate-reverse' : 'none'};
        }
        
        @keyframes glitch-before {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translate(-2px);
          }
          10% {
            clip-path: polygon(0 15%, 100% 15%, 100% 40%, 0 40%);
            transform: translate(-1px);
          }
          20% {
            clip-path: polygon(0 10%, 100% 10%, 100% 50%, 0 50%);
            transform: translate(1px);
          }
          30% {
            clip-path: polygon(0 5%, 100% 5%, 100% 35%, 0 35%);
            transform: translate(-1px);
          }
          40% {
            clip-path: polygon(0 20%, 100% 20%, 100% 45%, 0 45%);
            transform: translate(1px);
          }
          50% {
            clip-path: polygon(0 15%, 100% 15%, 100% 40%, 0 40%);
            transform: translate(-1px);
          }
          60% {
            clip-path: polygon(0 10%, 100% 10%, 100% 35%, 0 35%);
            transform: translate(1px);
          }
          70% {
            clip-path: polygon(0 5%, 100% 5%, 100% 30%, 0 30%);
            transform: translate(-1px);
          }
          80% {
            clip-path: polygon(0 15%, 100% 15%, 100% 45%, 0 45%);
            transform: translate(1px);
          }
          90% {
            clip-path: polygon(0 20%, 100% 20%, 100% 50%, 0 50%);
            transform: translate(-1px);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translate(-2px);
          }
        }
        
        @keyframes glitch-after {
          0% {
            clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            transform: translate(2px);
          }
          10% {
            clip-path: polygon(0 60%, 100% 60%, 100% 95%, 0 95%);
            transform: translate(1px);
          }
          20% {
            clip-path: polygon(0 65%, 100% 65%, 100% 90%, 0 90%);
            transform: translate(-1px);
          }
          30% {
            clip-path: polygon(0 70%, 100% 70%, 100% 95%, 0 95%);
            transform: translate(1px);
          }
          40% {
            clip-path: polygon(0 75%, 100% 75%, 100% 90%, 0 90%);
            transform: translate(-1px);
          }
          50% {
            clip-path: polygon(0 80%, 100% 80%, 100% 95%, 0 95%);
            transform: translate(1px);
          }
          60% {
            clip-path: polygon(0 70%, 100% 70%, 100% 90%, 0 90%);
            transform: translate(-1px);
          }
          70% {
            clip-path: polygon(0 65%, 100% 65%, 100% 95%, 0 95%);
            transform: translate(1px);
          }
          80% {
            clip-path: polygon(0 60%, 100% 60%, 100% 90%, 0 90%);
            transform: translate(-1px);
          }
          90% {
            clip-path: polygon(0 55%, 100% 55%, 100% 95%, 0 95%);
            transform: translate(1px);
          }
          100% {
            clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            transform: translate(2px);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default GlitchText; 