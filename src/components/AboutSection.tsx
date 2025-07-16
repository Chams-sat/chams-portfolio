import React from 'react';
import { Card } from '../components/ui/card';
const AboutSection: React.FC = () => {
  return <section id="about" className="py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-heading text-center">
           About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          <Card className="card col-span-2 lg:col-span-2">
            <div className="space-y-4">
              <p className="text-slate-light">
                Hello! I'm Chams, a passionate developer who enjoys creating things that live on the internet.
                My interest in web development started back in 2015 when I decided to try customizing a theme
                for my personal blog — turns out modifying CSS and seeing the changes render in real-time sparked
                something exciting for me!
              </p>
              
              <p className="text-slate-light">
                Fast-forward to today, and I've had the privilege of working on diverse projects ranging from complex 
                web applications to intuitive mobile interfaces. My focus is building accessible, inclusive products 
                and digital experiences for a variety of clients.
              </p>
              
              <p className="text-slate-light">
                Here are a few technologies I've been working with recently:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 text-slate-light mt-4">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS'].map(tech => <li key={tech} className="flex items-center">
                    <span className="text-highlight mr-2">▹</span> {tech}
                  </li>)}
              </ul>
            </div>
          </Card>
          
          <Card className="card relative group h-80 lg:h-auto">
            <div className="relative h-full w-full overflow-hidden rounded-md">
              <div className="absolute inset-0 bg-highlight opacity-20 group-hover:opacity-10 transition-opacity"></div>
              <div className="absolute inset-0 border-2 border-highlight rounded-md transform translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
              <div className="w-full h-full bg-navy-light rounded-md overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500')] bg-cover bg-center"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default AboutSection;