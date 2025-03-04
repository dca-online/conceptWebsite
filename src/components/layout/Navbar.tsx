'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://instagram.com', icon: <FiInstagram />, label: 'Instagram' },
  { href: 'https://twitter.com', icon: <FiTwitter />, label: 'Twitter' },
  { href: 'https://facebook.com', icon: <FiFacebook />, label: 'Facebook' },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll
    if (document.body.style.overflow !== 'hidden') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3"
    >
      <div className="container mx-auto px-3">
        <nav className={`navbar-pill flex justify-between items-center ${
          scrolled ? 'backdrop-blur-lg' : 'backdrop-blur-md'
        }`}>
          <Link href="/" className="z-[60]">
            <h1 className="font-display text-xl sm:text-2xl font-bold text-white hover:text-vaporwave-pink transition-colors duration-300">
              <span className="text-vaporwave-pink">VAPOR</span>
              <span className="text-vaporwave-blue">STUDIO</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul ref={navRef} className="flex space-x-6 items-center relative">
              {/* Animated pill background */}
              {activeLinkIndex !== null && (
                <motion.div 
                  className="absolute h-8 bg-gradient-to-r from-vaporwave-pink/20 to-vaporwave-purple/20 rounded-full -z-10"
                  layoutId="navPill"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                    mass: 1.2
                  }}
                  style={{
                    width: navRef.current?.children[activeLinkIndex]?.querySelector('a')?.getBoundingClientRect()?.width || 0,
                    left: ((navRef.current?.children[activeLinkIndex]?.getBoundingClientRect()?.left || 0) - 
                          (navRef.current?.getBoundingClientRect()?.left || 0)) + 
                          ((navRef.current?.children[activeLinkIndex]?.getBoundingClientRect()?.width || 0) - 
                          (navRef.current?.children[activeLinkIndex]?.querySelector('a')?.getBoundingClientRect()?.width || 0)) / 2 + 23,
                    top: -4
                  }}
                />
              )}
              
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white hover:text-vaporwave-pink transition-all duration-300 text-sm uppercase tracking-wider font-medium relative group px-4 py-2"
                    onMouseEnter={() => setActiveLinkIndex(index)}
                    onMouseLeave={() => setActiveLinkIndex(null)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-vaporwave-pink/30"></div>

            <div className="flex space-x-4 items-center">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-vaporwave-pink transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <Link 
              href="/contact"
              className="bg-gradient-to-r from-vaporwave-pink to-vaporwave-purple text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-vaporwave-pink/20 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="text-white hover:text-vaporwave-pink transition-colors duration-300 z-[60] lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <FiX className="w-7 h-7" />
            ) : (
              <FiMenu className="w-7 h-7" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 mobile-menu flex items-center justify-center lg:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="absolute inset-0 retro-grid opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-64 sm:h-96 sun-bg"></div>
            <div className="scanline"></div>
            
            <nav className="relative z-10 p-8 text-center">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <motion.li key={link.href} variants={linkVariants}>
                    <Link 
                      href={link.href}
                      className="font-display text-3xl text-white hover:text-vaporwave-pink transition-colors duration-300 block"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={linkVariants} className="pt-6">
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-vaporwave-pink transition-all duration-300 text-xl"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </motion.li>
              </ul>
            </nav>
            
            {/* Bottom Close Button - Positioned to align with Twitter icon */}
            <motion.button
              onClick={toggleMenu}
              className="absolute bottom-6 left-[calc(50%-25px)] transform -translate-x-1/2 z-20 bg-gradient-to-r from-vaporwave-pink to-vaporwave-purple rounded-full w-12 h-12 flex items-center justify-center border border-white/20 shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                boxShadow: [
                  "0 0 0 0 rgba(233, 74, 138, 0)",
                  "0 0 20px 5px rgba(233, 74, 138, 0.5)",
                  "0 0 0 0 rgba(233, 74, 138, 0)"
                ]
              }}
              transition={{ 
                delay: 0.8, 
                duration: 0.5,
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px 5px rgba(233, 74, 138, 0.7)"
              }}
              aria-label="Close menu"
            >
              <FiX className="text-white text-xl" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 