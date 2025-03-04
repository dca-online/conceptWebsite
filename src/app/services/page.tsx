'use client';

import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiPenTool, FiMonitor, FiSmartphone, FiTrendingUp, FiServer, FiShoppingCart } from 'react-icons/fi';

import GlitchText from '@/components/ui/GlitchText';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import RetroGrid from '@/components/animations/RetroGrid';

// Services data
const services = [
  {
    icon: <FiLayout className="w-12 h-12" />,
    title: 'Web Design',
    description: 'Stunning, responsive websites with cutting-edge aesthetics and seamless user experiences. We create designs that stand out in the digital landscape.',
    features: [
      'Custom UI/UX Design',
      'Responsive Layouts',
      'Interactive Prototypes',
      'Design Systems',
      'Visual Identity',
    ],
  },
  {
    icon: <FiCode className="w-12 h-12" />,
    title: 'Web Development',
    description: 'Clean, efficient code that brings your digital vision to life with modern technologies. We build fast, scalable, and maintainable web applications.',
    features: [
      'Frontend Development',
      'Backend Development',
      'API Integration',
      'CMS Implementation',
      'Performance Optimization',
    ],
  },
  {
    icon: <FiPenTool className="w-12 h-12" />,
    title: 'UI/UX Design',
    description: 'User-centered design that balances beauty and functionality for optimal engagement. We create intuitive interfaces that users love.',
    features: [
      'User Research',
      'Wireframing',
      'Usability Testing',
      'Information Architecture',
      'Interaction Design',
    ],
  },
  {
    icon: <FiMonitor className="w-12 h-12" />,
    title: 'Digital Branding',
    description: 'Cohesive brand identities that capture your essence and resonate with your audience. We help you stand out in a crowded market.',
    features: [
      'Brand Strategy',
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Brand Messaging',
    ],
  },
  {
    icon: <FiSmartphone className="w-12 h-12" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps that users love to use.',
    features: [
      'iOS Development',
      'Android Development',
      'React Native',
      'Flutter',
      'App Store Optimization',
    ],
  },
  {
    icon: <FiTrendingUp className="w-12 h-12" />,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that drive traffic, engagement, and conversions. We help you reach your target audience effectively.',
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'Email Marketing',
      'Analytics & Reporting',
    ],
  },
  {
    icon: <FiServer className="w-12 h-12" />,
    title: 'Web Hosting',
    description: 'Reliable, secure, and scalable hosting solutions for your website or application. We ensure your digital presence is always online.',
    features: [
      'Cloud Hosting',
      'Managed WordPress',
      'VPS Hosting',
      'Domain Registration',
      '24/7 Support',
    ],
  },
  {
    icon: <FiShoppingCart className="w-12 h-12" />,
    title: 'E-Commerce',
    description: 'Custom online stores that drive sales and provide seamless shopping experiences. We build e-commerce solutions that convert.',
    features: [
      'Shopify Development',
      'WooCommerce',
      'Payment Integration',
      'Inventory Management',
      'Checkout Optimization',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-vaporwave-darkBlue z-0">
          <RetroGrid color="rgba(5, 255, 161, 0.2)" opacity={0.5} />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-vaporwave-mint/10 to-transparent"></div>
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
                <span className="text-vaporwave-mint">SERVICES</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Grid Section */}
      <section className="py-20 bg-vaporwave-black relative">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="bg-vaporwave-darkPurple/30 backdrop-blur-sm p-8 rounded-lg border border-vaporwave-purple/20 hover:border-vaporwave-mint/50 transition-all duration-300 h-full group">
                  <div className="text-vaporwave-mint mb-6 group-hover:text-vaporwave-pink transition-colors duration-300">
                    {service.icon}
                  </div>
                  
                  <h2 className="font-display text-2xl text-white mb-4 group-hover:text-vaporwave-mint transition-colors duration-300">
                    {service.title}
                  </h2>
                  
                  <p className="text-white/70 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <span className="text-vaporwave-pink mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button href="/contact" variant="outline" className="mt-auto">
                    Learn More
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-vaporwave-darkPurple to-vaporwave-darkBlue relative">
        <div className="absolute inset-0 retro-grid opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                <span className="text-vaporwave-pink">OUR</span> PROCESS
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We follow a structured approach to ensure every project is delivered on time, on budget, and exceeds expectations.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-vaporwave-pink/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl text-vaporwave-pink">01</span>
                </div>
                <h3 className="font-display text-xl text-white mb-2">Discovery</h3>
                <p className="text-white/70">
                  We learn about your business, goals, and target audience to create a tailored strategy.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-vaporwave-blue/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl text-vaporwave-blue">02</span>
                </div>
                <h3 className="font-display text-xl text-white mb-2">Planning</h3>
                <p className="text-white/70">
                  We create a detailed roadmap with milestones, deliverables, and timelines.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-vaporwave-purple/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl text-vaporwave-purple">03</span>
                </div>
                <h3 className="font-display text-xl text-white mb-2">Execution</h3>
                <p className="text-white/70">
                  Our team brings your project to life with regular updates and feedback sessions.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-vaporwave-mint/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl text-vaporwave-mint">04</span>
                </div>
                <h3 className="font-display text-xl text-white mb-2">Launch & Support</h3>
                <p className="text-white/70">
                  We ensure a smooth launch and provide ongoing support to help you succeed.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-vaporwave-black relative">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 sun-bg"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                READY TO <span className="text-vaporwave-blue">GET STARTED</span>?
              </h2>
              
              <p className="text-white/80 text-lg mb-8">
                Let's discuss your project and how we can help bring your vision to life with our award-winning services.
              </p>
              
              <Button href="/contact" variant="primary" size="lg">
                Request a Quote
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
} 