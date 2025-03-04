import Link from 'next/link';
import { FiInstagram, FiTwitter, FiDribbble, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vaporwave-darkBlue/90 backdrop-filter backdrop-blur-md relative z-20 mt-auto">
      <div className="absolute inset-0 retro-grid opacity-30"></div>
      <div className="container mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-display text-2xl mb-4 text-white">
              <span className="text-vaporwave-pink">VAPOR</span>
              <span className="text-vaporwave-blue">STUDIO</span>
            </h3>
            <p className="text-white/80 mb-6">
              Designing the future, inspired by the past. We create award-winning digital experiences that push boundaries.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-vaporwave-pink transition-colors duration-300"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-vaporwave-pink transition-colors duration-300"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-vaporwave-pink transition-colors duration-300"
                aria-label="Dribbble"
              >
                <FiDribbble className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-vaporwave-pink transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-vaporwave-pink transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/"
                  className="text-white/80 hover:text-vaporwave-pink transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="text-white/80 hover:text-vaporwave-pink transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-white/80 hover:text-vaporwave-pink transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio"
                  className="text-white/80 hover:text-vaporwave-pink transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-white/80 hover:text-vaporwave-pink transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services"
                  className="text-white/80 hover:text-vaporwave-pink transition-colors duration-300"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-white/80 hover:text-vaporwave-pink transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-white/80 hover:text-vaporwave-pink transition-colors duration-300"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-white/80 hover:text-vaporwave-pink transition-colors duration-300"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-white/80 hover:text-vaporwave-pink transition-colors duration-300"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg text-white mb-4">Contact</h4>
            <address className="not-italic">
              <p className="text-white/80 mb-2">123 Digital Avenue</p>
              <p className="text-white/80 mb-2">Cyberspace, CP 9000</p>
              <p className="text-white/80 mb-4">Vaporland</p>
              <p className="text-white/80 mb-2">
                <a 
                  href="mailto:hello@vaporstudio.com"
                  className="hover:text-vaporwave-pink transition-colors duration-300"
                >
                  hello@vaporstudio.com
                </a>
              </p>
              <p className="text-white/80">
                <a 
                  href="tel:+12345678900"
                  className="hover:text-vaporwave-pink transition-colors duration-300"
                >
                  +1 (234) 567-8900
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} VAPORSTUDIO. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link 
              href="/privacy"
              className="text-white/60 hover:text-vaporwave-pink transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms"
              className="text-white/60 hover:text-vaporwave-pink transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link 
              href="/cookies"
              className="text-white/60 hover:text-vaporwave-pink transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 