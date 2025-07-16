
import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { ScrollArea } from '../components/ui/scroll-area';
import TypewriterEffect from './TypewriterEffect';

const navLinks = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Projects',
  href: '#projects'
}, {
  name: 'Contact',
  href: '#contact'
}];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Prevent scrolling on body when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className={cn('fixed top-0 left-0 w-full z-40 transition-all duration-300', isScrolled ? 'backdrop-blur-sm bg-navy/80 shadow-lg py-3' : 'py-6')}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-bold font-poppins text-highlight group transition-all duration-300 relative z-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <span className="flex items-center">
              <TypewriterEffect phrases={["Chams Satour."]} typingSpeed={100} deletingSpeed={50} />
            </span>
          ) : (
            <>CS<span className="text-text group-hover:text-highlight transition-colors">.</span></>
          )}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link" 
              style={{
                animationDelay: `${i * 100}ms`
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button with higher z-index and fixed positioning */}
        <div className="md:hidden relative z-50">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-text hover:text-highlight transition-colors p-3 relative z-50" 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with highest z-index */}
        <div 
          className={cn(
            "fixed inset-0 bg-navy-dark/95 flex flex-col items-center justify-start pt-16 z-40 transition-all duration-300 md:hidden", 
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
          style={{ zIndex: isMenuOpen ? 45 : -1 }}
        >
          <ScrollArea className="w-full h-full px-4">
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link, i) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-semibold nav-link" 
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
