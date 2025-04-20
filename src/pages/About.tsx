
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Profile Section */}
      <section className="mb-20 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-64 h-64 mb-8 md:mb-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 blur-lg animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden animate-neon-pulse">
                <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-6xl font-orbitron text-primary">DP</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-primary">
              Digital Persona
            </h1>
            <div className="flex items-center mb-6 text-muted-foreground">
              <span className="mr-4">Developer</span>
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              <span className="mx-4">Designer</span>
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              <span className="ml-4">Photographer</span>
            </div>
            <p className="text-lg mb-6">
              A passionate tech enthusiast with a flair for creating immersive digital experiences. 
              My approach blends cutting-edge technology with creative design, resulting in projects 
              that are both visually striking and functionally intuitive.
            </p>
            <p className="text-lg mb-8">
              With a background in both development and design, I bring a unique perspective to each project. 
              I thrive in the intersection of technology and creativity, constantly exploring new ways to 
              push the boundaries of what's possible in the digital realm.
            </p>
            <a 
              href="#skills" 
              className="inline-flex items-center font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Explore my skills
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="mb-20">
        <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
          <span className="text-accent">Tech</span> Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg backdrop-blur-sm animate-fade-in">
            <h3 className="text-xl font-orbitron font-bold mb-6 text-primary">Development Skills</h3>
            
            {/* Skill Bars */}
            <div className="space-y-6">
              {[
                { name: "React.js", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Node.js", level: 80 },
                { name: "CSS/Tailwind", level: 95 },
                { name: "Python", level: 75 }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Design Skills */}
          <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-orbitron font-bold mb-6 text-primary">Design Skills</h3>
            
            {/* Skill Bars */}
            <div className="space-y-6">
              {[
                { name: "UI/UX Design", level: 88 },
                { name: "Figma", level: 92 },
                { name: "Motion Design", level: 78 },
                { name: "3D Modeling", level: 65 },
                { name: "Graphic Design", level: 85 }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-accent to-primary"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">
          <span className="text-primary">Experience</span> Timeline
        </h2>
        
        <div className="relative">
          {/* Timeline Center Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-px"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {[
              {
                year: "2023 - Present",
                title: "Senior Frontend Developer",
                company: "Tech Innovations Inc.",
                description: "Leading UI/UX implementations for enterprise applications, mentoring junior developers, and architecting frontend solutions."
              },
              {
                year: "2021 - 2023",
                title: "UI/UX Designer",
                company: "Creative Digital Solutions",
                description: "Designed user interfaces for various digital products, created wireframes, prototypes, and conducted usability testing."
              },
              {
                year: "2019 - 2021",
                title: "Web Developer",
                company: "Web Crafters LLC",
                description: "Developed responsive websites and web applications using modern frameworks and technologies."
              },
              {
                year: "2015 - 2019",
                title: "Computer Science Degree",
                company: "Tech University",
                description: "Bachelor's degree focusing on software development, algorithms, and digital design."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div 
                    className={`mx-12 md:mx-0 ${
                      index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                    } p-6 bg-card rounded-xl border border-border/50 shadow-lg backdrop-blur-sm animate-fade-in`}
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <h3 className="text-xl font-bold font-orbitron text-primary">{item.title}</h3>
                    <p className="text-accent font-medium mb-2">{item.company}</p>
                    <p className="text-muted-foreground text-sm mb-4">{item.year}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
                
                {/* Circle on Timeline */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-6 md:mt-8 w-6 h-6 rounded-full border-2 border-primary bg-background shadow-md shadow-primary/30 z-10"></div>
                
                {/* For visual spacing */}
                <div className="md:flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
