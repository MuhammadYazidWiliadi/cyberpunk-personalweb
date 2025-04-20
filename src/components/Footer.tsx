
import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold font-orbitron tracking-wider text-primary">
                C<span className="text-accent">Y</span>BER
                <span className="text-accent">_</span>
                PORT
                <span className="text-primary">F</span>
                <span className="text-accent">O</span>LIO
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              A cyberpunk-themed digital showcase of creative work and technological expertise.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold font-orbitron mb-4 text-primary">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold font-orbitron mb-4 text-primary">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                wiliadiyaziiid@gmail.com
              </li>
              <li className="text-muted-foreground">
                +62 812 9510 9399
              </li>
              <li className="text-muted-foreground">
                Bogor, Jawa Barat
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold font-orbitron mb-4 text-primary">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-accent/20 text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent my-8"></div>
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            &copy; {currentYear} CyberPortfolio. All rights reserved.
          </p>
          <p className="text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-accent" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
