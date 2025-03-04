'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

type RetroGridProps = {
  className?: string;
  color?: string;
  opacity?: number;
  animate?: boolean;
  gridSize?: number;
};

const RetroGrid = ({
  className = '',
  color = 'rgba(255, 113, 206, 0.3)',
  opacity = 0.5,
  animate = true,
  gridSize = 30,
}: RetroGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match container
    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      drawGrid();
    };
    
    // Draw grid lines
    const drawGrid = () => {
      if (!ctx) return;
      
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = opacity;
      
      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };
    
    // Initial setup
    resizeCanvas();
    
    // Add resize listener
    window.addEventListener('resize', resizeCanvas);
    
    // Animation
    if (animate) {
      const tl = gsap.timeline({ repeat: -1 });
      
      // Animate grid movement
      tl.to(canvas, {
        duration: 20,
        onUpdate: () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Get animation progress
          const progress = tl.progress();
          const offsetY = progress * gridSize;
          const offsetX = progress * gridSize * 0.5;
          
          // Draw grid with offset
          ctx.strokeStyle = color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = opacity;
          
          // Vertical lines
          for (let x = -offsetX; x <= canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }
          
          // Horizontal lines
          for (let y = -offsetY; y <= canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
        }
      });
    }
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      gsap.killTweensOf(canvas);
    };
  }, [color, opacity, animate, gridSize]);
  
  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
      />
    </div>
  );
};

export default RetroGrid; 