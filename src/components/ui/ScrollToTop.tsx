'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Display the scroll-to-top button when the user scrolls down past 500px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Function to smoothly scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-vaporwave-darkPurple/80 backdrop-blur-sm border border-vaporwave-pink/30 flex items-center justify-center text-white shadow-lg hover:bg-vaporwave-darkPurple hover:border-vaporwave-pink/50 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="w-5 h-5" />
          <div className="absolute inset-0 rounded-full border border-vaporwave-pink/20 animate-ping opacity-30" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 