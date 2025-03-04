import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        synthwave: {
          // Primary colors
          pink: "#ff2a6d",
          blue: "#00f9ff",
          purple: "#9f00ff",
          yellow: "#ffb800",
          // Secondary colors
          darkPurple: "#1a0b2e",
          darkBlue: "#160029",
          black: "#09001f",
          // Accent colors
          neonPink: "#ff71ce",
          neonBlue: "#01cdfe",
          neonPurple: "#b967ff",
          neonGreen: "#05ffa1",
          // Gradient colors
          gradientStart: "#2b1055",
          gradientEnd: "#7597de",
        },
        retro: {
          gray: "#c0c0c0",
          lightBlue: "#a7d8de",
          pastelPink: "#ffafc5",
          lavender: "#b19cd9",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "url('/assets/grid-bg.svg')",
        'synthwave-sun': "radial-gradient(circle at 50% 0%, #ff2a6d 0%, #ff71ce 50%, transparent 100%)",
      },
      boxShadow: {
        'neon-pink': '0 0 5px #ff2a6d, 0 0 20px #ff2a6d, 0 0 40px #ff2a6d',
        'neon-blue': '0 0 5px #00f9ff, 0 0 20px #00f9ff, 0 0 40px #00f9ff',
        'neon-purple': '0 0 5px #9f00ff, 0 0 20px #9f00ff, 0 0 40px #9f00ff',
      },
      fontFamily: {
        sans: ['Montserrat', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-orbitron)', 'ui-monospace', 'monospace'],
        pixel: ['Pixel', 'var(--font-geist-mono)'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px #ff2a6d, 0 0 20px #ff2a6d, 0 0 40px #ff2a6d',
            boxShadow: '0 0 5px #ff2a6d, 0 0 20px #ff2a6d, 0 0 40px #ff2a6d'
          },
          '50%': { 
            textShadow: '0 0 10px #ff2a6d, 0 0 30px #ff2a6d, 0 0 60px #ff2a6d',
            boxShadow: '0 0 10px #ff2a6d, 0 0 30px #ff2a6d, 0 0 60px #ff2a6d'
          },
        }
      },
    },
  },
  plugins: [],
};

export default config; 