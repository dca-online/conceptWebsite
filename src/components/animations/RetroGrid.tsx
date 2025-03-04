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
    
    // Dynamically adjust canvas dimensions to match container size
    // Reset canvas before redrawing
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
      
      // Draw vertical grid lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw horizontal grid lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };
    
    // Initialize canvas and event listeners
    resizeCanvas();
    
    // Handle window resize events
    window.addEventListener('resize', resizeCanvas);
    
    // Setup animation loop if animation is enabled
    if (animate) {
      const tl = gsap.timeline({ repeat: -1 });
      
      // Calculate animation progress and apply offsets
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
          
          // Draw vertical grid lines
          for (let x = -offsetX; x <= canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }
          
          // Draw horizontal grid lines
          for (let y = -offsetY; y <= canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
        }
      });
    }
    
    // Clean up event listeners and animations on unmount
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