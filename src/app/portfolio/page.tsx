'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

import GlitchText from '@/components/ui/GlitchText';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import RetroGrid from '@/components/animations/RetroGrid';

// Portfolio categories
const categories = [
  'All',
  'Web Design',
  'Web Development',
  'UI/UX',
  'Branding',
  'Mobile',
];

// Portfolio items
const portfolioItems = [
  {
    id: 'neon-dreams',
    title: 'Neon Dreams',
    category: 'Web Design',
    tags: ['Web Design', 'UI/UX'],
    image: '/assets/portfolio-1.jpg',
    href: '/portfolio/neon-dreams',
  },
  {
    id: 'digital-horizon',
    title: 'Digital Horizon',
    category: 'UI/UX',
    tags: ['UI/UX', 'Branding'],
    image: '/assets/portfolio-2.jpg',
    href: '/portfolio/digital-horizon',
  },
  {
    id: 'retro-wave',
    title: 'Retro Wave',
    category: 'Branding',
    tags: ['Branding', 'Web Design'],
    image: '/assets/portfolio-3.jpg',
    href: '/portfolio/retro-wave',
  },
  {
    id: 'cyber-pulse',
    title: 'Cyber Pulse',
    category: 'Web Development',
    tags: ['Web Development', 'UI/UX'],
    image: '/assets/portfolio-4.jpg',
    href: '/portfolio/cyber-pulse',
  },
  {
    id: 'virtual-vista',
    title: 'Virtual Vista',
    category: 'Mobile',
    tags: ['Mobile', 'UI/UX'],
    image: '/assets/portfolio-5.jpg',
    href: '/portfolio/virtual-vista',
  },
  {
    id: 'synthwave-studios',
    title: 'Synthwave Studios',
    category: 'Web Design',
    tags: ['Web Design', 'Branding'],
    image: '/assets/portfolio-6.jpg',
    href: '/portfolio/synthwave-studios',
  },
  {
    id: 'pixel-perfect',
    title: 'Pixel Perfect',
    category: 'UI/UX',
    tags: ['UI/UX', 'Web Design'],
    image: '/assets/portfolio-7.jpg',
    href: '/portfolio/pixel-perfect',
  },
  {
    id: 'future-forward',
    title: 'Future Forward',
    category: 'Web Development',
    tags: ['Web Development', 'Mobile'],
    image: '/assets/portfolio-8.jpg',
    href: '/portfolio/future-forward',
  },
  {
    id: 'digital-dreams',
    title: 'Digital Dreams',
    category: 'Branding',
    tags: ['Branding', 'UI/UX'],
    image: '/assets/portfolio-9.jpg',
    href: '/portfolio/digital-dreams',
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.tags.includes(activeCategory));
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-vaporwave-darkBlue z-0">
          <RetroGrid color="rgba(1, 205, 254, 0.2)" opacity={0.5} />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-vaporwave-blue/10 to-transparent"></div>
        </div>
        
        <div className="scanline"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-6xl text-white mb-6">
                <GlitchText as="span" color="white">
                  OUR
                </GlitchText>{' '}
                <span className="text-vaporwave-blue">PORTFOLIO</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Explore our award-winning projects showcasing our unique approach to digital design and development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Filter Section */}
      <section className="py-12 bg-vaporwave-black relative">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-display transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-vaporwave-blue text-white'
                      : 'bg-vaporwave-darkPurple/30 text-white/70 hover:bg-vaporwave-darkPurple/50'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1} direction="up">
                <Link href={item.href} className="group block relative overflow-hidden rounded-lg aspect-[4/3]">
                  <div className="absolute inset-0 bg-vaporwave-darkPurple/50 group-hover:bg-vaporwave-blue/30 transition-all duration-300 z-10"></div>
                  
                  {/* Placeholder for image - in a real project, you'd use actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vaporwave-purple/40 to-vaporwave-blue/40"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                    <p className="text-vaporwave-blue text-sm mb-1 font-mono">{item.category}</p>
                    <h3 className="font-display text-xl text-white group-hover:text-shadow-glow transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    <div className="mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-flex items-center text-white text-sm">
                        View Project <FiArrowRight className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Client Logos Section */}
      <section className="py-20 bg-vaporwave-darkPurple relative">
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl text-white mb-4">
                <span className="text-vaporwave-pink">TRUSTED</span> BY
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We've had the pleasure of working with amazing clients from startups to established brands.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Placeholder for client logos - in a real project, you'd use actual logos */}
            {[1, 2, 3, 4].map((item) => (
              <ScrollReveal key={item} delay={item * 0.1}>
                <div className="h-16 bg-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-white/30 font-display text-xl">CLIENT {item}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vaporwave-darkBlue to-vaporwave-black relative">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 sun-bg"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                READY TO <span className="text-vaporwave-pink">CREATE</span> SOMETHING AMAZING?
              </h2>
              
              <p className="text-white/80 text-lg mb-8">
                Let's collaborate on your next project and create something that stands out in the digital landscape.
              </p>
              
              <Button href="/contact" variant="primary" size="lg">
                Start a Project
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
} 