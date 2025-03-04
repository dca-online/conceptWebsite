'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';

import GlitchText from '@/components/ui/GlitchText';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import RetroGrid from '@/components/animations/RetroGrid';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-vaporwave-darkBlue z-0">
          <RetroGrid color="rgba(255, 113, 206, 0.2)" opacity={0.5} />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-vaporwave-pink/10 to-transparent"></div>
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
                  GET IN
                </GlitchText>{' '}
                <span className="text-vaporwave-pink">TOUCH</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear about it. Drop us a line and let's create something extraordinary together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-vaporwave-black relative">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div className="bg-vaporwave-darkPurple/50 backdrop-blur-sm p-8 rounded-lg border border-vaporwave-purple/20 h-full">
                <h2 className="font-display text-3xl text-white mb-8">
                  <span className="text-vaporwave-pink">CONTACT</span> INFO
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-vaporwave-pink text-xl mt-1 mr-4">
                      <FiMapPin />
                    </div>
                    <div>
                      <h3 className="text-white font-display text-lg mb-1">Our Location</h3>
                      <p className="text-white/70">
                        123 Digital Avenue<br />
                        Cyberspace, CP 9000<br />
                        Vaporland
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-vaporwave-pink text-xl mt-1 mr-4">
                      <FiMail />
                    </div>
                    <div>
                      <h3 className="text-white font-display text-lg mb-1">Email Us</h3>
                      <p className="text-white/70">
                        <a 
                          href="mailto:hello@vaporstudio.com" 
                          className="hover:text-vaporwave-pink transition-colors duration-300"
                        >
                          hello@vaporstudio.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-vaporwave-pink text-xl mt-1 mr-4">
                      <FiPhone />
                    </div>
                    <div>
                      <h3 className="text-white font-display text-lg mb-1">Call Us</h3>
                      <p className="text-white/70">
                        <a 
                          href="tel:+12345678900" 
                          className="hover:text-vaporwave-pink transition-colors duration-300"
                        >
                          +1 (234) 567-8900
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-white font-display text-lg mb-4">Business Hours</h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="bg-vaporwave-darkBlue/50 backdrop-blur-sm p-8 rounded-lg border border-vaporwave-blue/20 h-full">
                <h2 className="font-display text-3xl text-white mb-8">
                  <span className="text-vaporwave-blue">SEND</span> MESSAGE
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-vaporwave-darkPurple/30 border border-vaporwave-purple/30 rounded-lg p-6 text-center">
                    <div className="text-vaporwave-mint text-4xl mb-4 flex justify-center">
                      <FiCheck />
                    </div>
                    <h3 className="text-white font-display text-xl mb-2">Message Sent!</h3>
                    <p className="text-white/70">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2 font-display">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-vaporwave-black/50 border border-vaporwave-blue/30 rounded-lg px-4 py-3 text-white focus:border-vaporwave-blue focus:outline-none focus:ring-1 focus:ring-vaporwave-blue transition-colors duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white mb-2 font-display">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-vaporwave-black/50 border border-vaporwave-blue/30 rounded-lg px-4 py-3 text-white focus:border-vaporwave-blue focus:outline-none focus:ring-1 focus:ring-vaporwave-blue transition-colors duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-white mb-2 font-display">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-vaporwave-black/50 border border-vaporwave-blue/30 rounded-lg px-4 py-3 text-white focus:border-vaporwave-blue focus:outline-none focus:ring-1 focus:ring-vaporwave-blue transition-colors duration-300"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Quote">Project Quote</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Job Application">Job Application</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white mb-2 font-display">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-vaporwave-black/50 border border-vaporwave-blue/30 rounded-lg px-4 py-3 text-white focus:border-vaporwave-blue focus:outline-none focus:ring-1 focus:ring-vaporwave-blue transition-colors duration-300"
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        disabled={isSubmitting}
                        icon={isSubmitting ? undefined : <FiSend />}
                        iconPosition="right"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-vaporwave-darkPurple relative">
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl text-white mb-4">
                <span className="text-vaporwave-mint">FIND</span> US
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="aspect-[16/9] rounded-lg overflow-hidden relative">
              {/* Placeholder for map - in a real project, you'd use an actual map component */}
              <div className="absolute inset-0 bg-gradient-to-br from-vaporwave-darkBlue to-vaporwave-black"></div>
              <div className="absolute inset-0 retro-grid opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-vaporwave-pink text-6xl animate-pulse">
                  <FiMapPin />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
} 