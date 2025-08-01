
import React from 'react';
import { Github, X, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-navy-light">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate">
              Designed & Built by Chams Satour © {new Date().getFullYear()}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Chams-sat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://x.com/ChamsSatour" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="X"
            >
              <X size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chams-satour-b0a489378/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
