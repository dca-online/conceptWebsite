'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FiArrowRight, FiCode, FiLayout, FiPenTool, FiMonitor, FiSmartphone, FiLink, FiAward, FiChevronDown } from 'react-icons/fi';

import Button from '@/components/ui/Button';
import GlitchText from '@/components/ui/GlitchText';
import RetroGrid from '@/components/animations/RetroGrid';
import { setupDraggableScroller } from '@/utils/scrolling';

// Services data
const services = [
  {
    icon: <FiLayout className="w-8 h-8" />,
    title: 'Web Design',
    description: 'Stunning, responsive websites with cutting-edge aesthetics and seamless user experiences.',
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Clean, efficient code that brings your digital vision to life with modern technologies.',
  },
  {
    icon: <FiPenTool className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'User-centered design that balances beauty and functionality for optimal engagement.',
  },
  {
    icon: <FiMonitor className="w-8 h-8" />,
    title: 'Digital Branding',
    description: 'Cohesive brand identities that capture your essence and resonate with your audience.',
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
  },
];

// Portfolio items
const portfolioItems = [
  {
    title: 'Neon Dreams',
    category: 'Web Design',
    image: '/assets/portfolio-1.jpg',
    href: '/portfolio/neon-dreams',
  },
  {
    title: 'Digital Horizon',
    category: 'UI/UX Design',
    image: '/assets/portfolio-2.jpg',
    href: '/portfolio/digital-horizon',
  },
  {
    title: 'Synthwave App',
    category: 'Mobile Development',
    image: '/assets/portfolio-3.jpg',
    href: '/portfolio/synthwave-app',
  },
  {
    title: 'Retrograde',
    category: 'Digital Branding',
    image: '/assets/portfolio-4.jpg',
    href: '/portfolio/retrograde',
  },
];

// Features data
const features = [
  {
    icon: <FiAward className="w-8 h-8" />,
    title: 'Award-Winning Design',
    description: 'Our designs have been recognized by industry leaders for their innovation and effectiveness.'
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: 'Clean, Modern Code',
    description: 'We build with the latest technologies to ensure your website is fast, secure, and scalable.'
  },
  {
    icon: <FiLink className="w-8 h-8" />,
    title: 'Seamless Integration',
    description: 'We ensure your digital presence works perfectly across all platforms and devices.'
  }
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const portfolioScrollerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  
  // GSAP animations
  useEffect(() => {
    if (!heroRef.current) return;
    
    const tl = gsap.timeline();
    
    tl.from('.hero-title span', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    })
    .from('.hero-subtitle', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.4')
    .from('.hero-cta', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.3');
    
    // Force the animation to complete immediately to prevent dimming when returning
    tl.progress(1).kill();
    
    return () => {
      tl.kill();
    };
  }, []);

  // Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all elements with the 'appear-anim' class
    document.querySelectorAll('.appear-anim[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Setup draggable portfolio scroller
  useEffect(() => {
    if (portfolioScrollerRef.current) {
      const cleanup = setupDraggableScroller('portfolio-scroller');
      return cleanup;
    }
  }, []);

  // Scroll to the next section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Hero Section - Fullscreen */}
      <section 
        ref={heroRef}
        className="fullscreen-section relative flex items-center justify-center overflow-hidden pt-20"
        id="hero"
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-vaporwave-black/70 backdrop-blur-[3px] z-0">
          <RetroGrid color="rgba(185, 103, 255, 0.2)" opacity={0.5} />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-vaporwave-pink/20 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-vaporwave-purple/20 filter blur-3xl"></div>
        </div>
        
        <div className="scanline"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title font-display text-4xl md:text-6xl lg:text-7xl mb-6 text-white">
              <GlitchText as="span" color="white" intensity="medium" className="font-[Orbitron]">
                DESIGNING THE FUTURE,
              </GlitchText>
              <br />
              <span className="gradient-text block mt-2 font-[Orbitron]">INSPIRED BY THE PAST</span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              Award-winning web design & development studio creating retro-futuristic digital experiences that push boundaries.
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/portfolio" 
                variant="primary" 
                size="lg"
                icon={<FiArrowRight />}
                iconPosition="right"
              >
                View Our Work
              </Button>
              
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="scroll-down-indicator" onClick={() => scrollToSection(introRef)}>
          <motion.div 
            className="text-white flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest mb-2 opacity-80">Scroll</span>
            <FiChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>
      
      {/* Introduction Cards - Fullscreen */}
      <section 
        ref={introRef}
        className="fullscreen-section py-32 relative z-10"
        id="intro"
      >
        <div className="container mx-auto px-6">
          <div className="interlocked-cards mb-24">
            <div id="intro-card-1" className={`vapor-card glass-card appear-anim mt-16 ${isVisible['intro-card-1'] ? 'is-visible' : ''}`}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-vaporwave-pink">Redefining</span> Digital Experiences
                  </h2>
                  <p className="text-white/70 mb-6">
                    We blend nostalgic aesthetics with cutting-edge technology to create digital experiences that stand out in today&apos;s crowded landscape. Our designs capture the essence of retro-futurism while delivering modern functionality.
                  </p>
                  <Link href="/about" className="text-vaporwave-pink hover:text-vaporwave-blue flex items-center group transition-colors duration-300">
                    Learn more about our approach 
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 float-element -mt-16">
                    <Image 
                      src="/assets/Daco_1365164.png"
                      alt="Vaporwave statue"
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div id="intro-card-2" className={`vapor-card-gradient appear-anim delay-200 mt-24 ${isVisible['intro-card-2'] ? 'is-visible' : ''}`}>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-vaporwave-blue">Collaborate</span> With Excellence
                  </h2>
                  <p className="text-white/70 mb-6">
                    Our team of designers, developers, and strategists work closely with you to bring your vision to life. We believe in clear communication, iterative processes, and delivering results that exceed expectations.
                  </p>
                  <Link href="/services" className="text-vaporwave-blue hover:text-vaporwave-pink flex items-center group transition-colors duration-300">
                    Explore our services
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className={`col-span-${index === 0 ? '2' : '1'} glass-card p-4 rounded-xl`}>
                        <div className="text-vaporwave-mint mb-2">
                          {feature.icon}
                        </div>
                        <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="scroll-down-indicator" onClick={() => scrollToSection(servicesRef)}>
          <motion.div 
            className="text-white flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>
      
      {/* Services Section - Fullscreen */}
      <section 
        ref={servicesRef}
        className="fullscreen-section bg-vaporwave-darkBlue/80 backdrop-blur-sm py-24 relative"
        id="services"
      >
        <div className="container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              <span className="text-vaporwave-pink">Our</span> Services
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              We offer a range of digital services to help your business thrive in the digital age with a unique aesthetic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                id={`service-card-${index}`}
                className={`vapor-card glass-card flex flex-col h-full appear-anim delay-${index * 100} ${isVisible[`service-card-${index}`] ? 'is-visible' : ''}`}
              >
                <div className="text-vaporwave-pink mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-white/70 mb-4">{service.description}</p>
                <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-vaporwave-blue hover:text-vaporwave-pink flex items-center text-sm group transition-colors duration-300 mt-auto">
                  Learn more
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              href="/services" 
              variant="primary"
              icon={<FiArrowRight />}
              iconPosition="right"
            >
              All Services
            </Button>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="scroll-down-indicator" onClick={() => scrollToSection(workRef)}>
          <motion.div 
            className="text-white flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Preview - Fullscreen */}
      <section 
        ref={workRef}
        className="fullscreen-section py-24 relative z-10"
        id="portfolio"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-vaporwave-purple">Featured</span> Work
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              Explore our latest projects showcasing our unique approach to digital design and development.
            </p>
          </div>
          
          {/* Horizontal Draggable Portfolio Scroller */}
          <div 
            id="portfolio-scroller" 
            ref={portfolioScrollerRef} 
            className="horizontal-scroll-container"
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                id={`portfolio-card-${index}`}
                className={`horizontal-scroll-item appear-anim delay-${index * 100} ${isVisible[`portfolio-card-${index}`] ? 'is-visible' : ''}`}
              >
                <div className="vapor-card glass-card h-full">
                  <div className="flex flex-col gap-4">
                    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-vaporwave-darkBlue mb-4">
                      <div className="w-full h-full bg-gradient-to-br from-vaporwave-darkPurple to-vaporwave-darkBlue flex items-center justify-center transition-transform duration-500">
                        <span className="text-white/50 text-sm">{item.title}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-vaporwave-pink text-sm uppercase tracking-wider">{item.category}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mt-1 mb-4">{item.title}</h3>
                      <p className="text-white/70 mb-6">A visually stunning {item.category.toLowerCase()} project that showcases our expertise in creating immersive digital experiences.</p>
                      <Link 
                        href={item.href}
                        className="inline-flex items-center px-5 py-2 rounded-full bg-vaporwave-darkPurple border border-vaporwave-purple/30 hover:border-vaporwave-pink/50 text-white group transition-all duration-300"
                      >
                        View Project <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              href="/portfolio" 
              variant="primary"
              icon={<FiArrowRight />}
              iconPosition="right"
            >
              View All Projects
            </Button>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="scroll-down-indicator" onClick={() => scrollToSection(ctaRef)}>
          <motion.div 
            className="text-white flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section - Fullscreen */}
      <section 
        ref={ctaRef}
        className="fullscreen-section bg-gradient-to-br from-vaporwave-darkPurple/80 to-vaporwave-darkBlue/80 backdrop-blur-sm py-24 relative"
        id="cta"
      >
        <div className="container mx-auto px-6 flex items-center justify-center h-full">
          <div className="vapor-card glass-card max-w-4xl mx-auto border border-vaporwave-pink/20">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ready to <span className="text-vaporwave-yellow">Stand Out</span> in the Digital World?
              </h2>
              <p className="text-white/70 text-xl mb-8">
                Let&apos;s create something amazing together. Our team is ready to bring your vision to life with our unique vaporwave aesthetic.
              </p>
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                icon={<FiArrowRight />}
                iconPosition="right"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
