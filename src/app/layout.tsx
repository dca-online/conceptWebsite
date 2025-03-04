'use client';

import { useEffect } from 'react';
import { Inter, Orbitron, Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import './globals.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { setupScrollListeners } from '@/utils/scrolling';

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Set up animation and scroll observers
  useEffect(() => {
    // Intersection Observer for appear animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all elements with the 'appear-anim' class
    document.querySelectorAll('.appear-anim').forEach((el) => {
      observer.observe(el);
    });
    
    // Setup scroll snapping only if we're on the homepage
    let cleanup = () => {};
    if (isHomePage) {
      cleanup = setupScrollListeners();
    }

    return () => {
      observer.disconnect();
      cleanup();
    };
  }, [isHomePage]);

  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${montserrat.variable} ${isHomePage ? 'homepage' : ''}`}>
      <head>
        <title>VaporStudio - Retro-Futuristic Web Design & Development</title>
        <meta name="description" content="Award-winning web design & development studio creating retro-futuristic digital experiences that push boundaries." />
        <meta name="keywords" content="web design, web development, vaporwave, retro-futuristic, UI/UX, branding" />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <div className="static-bg"></div>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
