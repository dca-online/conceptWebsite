'use client';

import Image from 'next/image';
import { FiUsers, FiAward, FiCode, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

import GlitchText from '@/components/ui/GlitchText';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import RetroGrid from '@/components/animations/RetroGrid';

// Team members data
const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Creative Director',
    image: '/assets/team-1.jpg',
  },
  {
    name: 'Sam Rivera',
    role: 'Lead Developer',
    image: '/assets/team-2.jpg',
  },
  {
    name: 'Taylor Kim',
    role: 'UI/UX Designer',
    image: '/assets/team-3.jpg',
  },
  {
    name: 'Jordan Lee',
    role: 'Project Manager',
    image: '/assets/team-4.jpg',
  },
];

// Stats data
const stats = [
  {
    icon: <FiUsers />,
    value: '150+',
    label: 'Happy Clients',
  },
  {
    icon: <FiAward />,
    value: '25+',
    label: 'Awards Won',
  },
  {
    icon: <FiCode />,
    value: '500+',
    label: 'Projects Completed',
  },
  {
    icon: <FiClock />,
    value: '10+',
    label: 'Years Experience',
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
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
                  ABOUT
                </GlitchText>{' '}
                <span className="text-vaporwave-blue">US</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                We are a team of passionate designers and developers creating award-winning digital experiences with a retro-futuristic twist.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-vaporwave-black relative">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                  {/* Placeholder for image - in a real project, you'd use an actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vaporwave-pink/40 to-vaporwave-blue/40"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-vaporwave-purple/20 rounded-lg"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-vaporwave-pink/20 rounded-lg"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <h2 className="font-display text-3xl text-white mb-6">
                <span className="text-vaporwave-pink">OUR</span> STORY
              </h2>
              
              <p className="text-white/80 mb-4">
                Founded in 2014, VaporStudio began as a small team of designers with a shared passion for the aesthetics of digital nostalgia and futurism. What started as a niche design studio quickly evolved into a full-service digital agency as clients were drawn to our unique visual approach.
              </p>
              
              <p className="text-white/80 mb-6">
                Today, we're proud to be at the forefront of digital design, combining retro-futuristic vaporwave aesthetics with cutting-edge technology to create websites and digital experiences that stand out in an increasingly homogenized digital landscape.
              </p>
              
              <div className="border-l-4 border-vaporwave-pink pl-4 mb-8">
                <p className="text-white/90 italic">
                  "We don't just build websites; we create digital time machines that transport users to a place where nostalgia meets the future."
                </p>
                <p className="text-vaporwave-blue mt-2">— Alex Johnson, Creative Director</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-vaporwave-darkPurple relative">
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-vaporwave-pink text-3xl mb-3">
                    {stat.icon}
                  </div>
                  <div className="font-display text-4xl text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-vaporwave-black relative">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl text-white mb-4">
                <span className="text-vaporwave-blue">MEET</span> THE TEAM
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our talented team of designers, developers, and digital strategists bring diverse skills and perspectives to every project.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="group relative overflow-hidden rounded-lg">
                  <div className="aspect-[3/4] relative">
                    {/* Placeholder for team member image - in a real project, you'd use actual images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-vaporwave-darkPurple to-vaporwave-darkBlue"></div>
                    
                    <div className="absolute inset-0 bg-vaporwave-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-vaporwave-black to-transparent">
                    <h3 className="font-display text-xl text-white">{member.name}</h3>
                    <p className="text-vaporwave-pink text-sm">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vaporwave-darkBlue to-vaporwave-black relative">
        <div className="absolute inset-0 retro-grid opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 sun-bg"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                WANT TO <span className="text-vaporwave-blue">JOIN OUR TEAM</span>?
              </h2>
              
              <p className="text-white/80 text-lg mb-8">
                We're always looking for talented individuals who share our passion for innovative design and cutting-edge technology.
              </p>
              
              <Button href="/careers" variant="primary">
                View Open Positions
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
} 