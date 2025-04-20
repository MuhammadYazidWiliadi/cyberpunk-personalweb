
import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom hook for typing animation
const useTypingAnimation = (phrases: string[], typingSpeed: number = 150, deletingSpeed: number = 75, pauseTime: number = 1000) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];
    
    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {}, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsTyping(true);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayText, phraseIndex, isTyping, phrases, typingSpeed, deletingSpeed, pauseTime]);
  
  return displayText;
};

// Project data
const projects = [
  {
    id: 1,
    title: "Cyber Dashboard",
    description: "Interactive analytics dashboard with real-time data visualization",
    tags: ["React", "D3.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Neural Network Visualizer",
    description: "Educational tool to visualize neural network architecture and operations",
    tags: ["TypeScript", "Three.js", "WebGL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Virtual Reality Experience",
    description: "Immersive VR environment for interactive storytelling",
    tags: ["A-Frame", "React", "3D Modeling"],
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "Smart content creation assistant powered by machine learning",
    tags: ["Python", "TensorFlow", "NextJS"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    link: "#"
  }
];

// Skills data
const skills = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "GraphQL", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Three.js", category: "frontend" },
  { name: "Figma", category: "design" },
  { name: "UX/UI", category: "design" }
];

const Index = () => {
  // Multi-language greeting animation
  const greetings = ["Hello", "Hola", "Bonjour", "Konnichiwa", "Annyeong"];
  const displayedGreeting = useTypingAnimation(greetings, 100, 50, 1500);
  
  // Intersection Observer for scroll animations
  const [visibleSections, setVisibleSections] = useState<{[key: string]: boolean}>({
    hero: false,
    projects: false,
    skills: false
  });
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Auto reveal hero section on load
  useEffect(() => {
    setVisibleSections(prev => ({
      ...prev,
      hero: true
    }));
  }, []);
  
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section 
        id="hero" 
        className={`min-h-[90vh] flex flex-col justify-center items-center relative transition-opacity duration-1000 ${
          visibleSections.hero ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        </div>
        
        {/* Glowing Orb */}
        <div className="absolute top-[20%] left-[60%] w-64 h-64 rounded-full bg-primary/20 filter blur-[100px]"></div>
        <div className="absolute bottom-[30%] right-[70%] w-72 h-72 rounded-full bg-accent/20 filter blur-[100px]"></div>
        
        <div className="container mx-auto px-4 text-center z-10">
          {/* Multi-language Greeting */}
          <div className="flex justify-center">
            <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 min-h-[4.5rem] md:min-h-[6rem] flex items-center text-primary">
              <span className="border-r-2 border-accent pr-2 mr-2">{displayedGreeting}</span>
              <span className="typing-cursor">|</span>
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl mb-8 font-rajdhani">
            Welcome to My <span className="text-accent">Creative</span> Space
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10 text-muted-foreground">
            A showcase of innovative digital experiences crafted with code, 
            creativity, and cutting-edge technology.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              to="/about" 
              className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium rounded-md shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-200 animate-neon-pulse"
            >
              Explore My Work
            </Link>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-secondary text-foreground font-medium rounded-md border border-border hover:bg-secondary/80 transition-colors duration-200 flex items-center"
            >
              <Github size={18} className="mr-2" />
              GitHub Profile
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
            <ArrowRight size={20} className="transform rotate-90 text-primary" />
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section 
        id="projects" 
        className={`py-20 transition-all duration-1000 transform ${
          visibleSections.projects ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A selection of my recent work showcasing expertise in various technologies and design approaches.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a 
                key={project.id}
                href={project.link} 
                className="group relative block overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 hover:translate-y-[-5px]"
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <ExternalLink size={16} className="text-primary" />
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-orbitron text-primary">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View all projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section 
        id="skills" 
        className={`py-20 bg-card transition-all duration-1000 transform ${
          visibleSections.skills ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-center">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A collection of technologies, frameworks, and design tools I use to build digital experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`px-6 py-3 rounded-full font-medium border transition-all duration-300 hover:scale-105 animate-fade-in ${
                  skill.category === 'frontend' 
                    ? 'border-primary/30 text-primary hover:border-primary' 
                    : skill.category === 'backend'
                    ? 'border-accent/30 text-accent hover:border-accent'
                    : 'border-white/30 text-white hover:border-white/70'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill.name}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-gradient-to-r from-accent/80 to-accent text-accent-foreground font-medium rounded-md shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-200"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
