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
        vaporwave: {
          pink: "#e94a8a",
          blue: "#42cafd",
          purple: "#7b52ab",
          yellow: "#f8db74",
          mint: "#91f9e5",
          darkPurple: "#2a1b47",
          darkBlue: "#1f1d42",
          black: "#121225",
        },
        neon: {
          pink: "#fc46aa",
          blue: "#00e8fc",
          purple: "#d926f9",
          green: "#00ff9f",
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
        }
      },
    },
  },
  plugins: [],
};

export default config; 