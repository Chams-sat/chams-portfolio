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
                Hello! I'm Chams. I spent my university years studying the intricate systems of plant microbiology, but I discovered my true passion for building systems when I wrote my first line of code. I decided to take that scientific curiosity and apply it to the digital world.
                
              </p>
              
              <p className="text-slate-light">
                As a self-taught Junior Frontend Developer, I’ve traded the microscope for a code editor. My background in science has gifted me with extreme attention to detail and a methodical approach to problem-solving—skills I now use to build clean, responsive, and user-centric web applications. I’m a lifelong learner currently mastering the React ecosystem and always looking for the next technical challenge to sprout.
                
              </p>
              
              <p className="text-slate-light">
                Here are a few technologies I've been working with recently:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 text-slate-light mt-4">
                {['JavaScript (ES6+)', 'TypeScript', 'React',  'Next.js', 'Tailwind CSS'].map(tech => <li key={tech} className="flex items-center">
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
                <div className="w-full h-full bg-[url('/chams.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default AboutSection;