import React from 'react';
import { Button } from '@/components/ui/button';
import TypewriterEffect from './TypewriterEffect';
const HeroSection: React.FC = () => {
  return <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container-section">
        <div className="flex flex-col items-start max-w-3xl animate-fade-in" style={{
        animationDelay: '300ms'
      }}>
          <p className="mb-6 text-gray-100 text-base font-bold">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-dark mb-4">
            Chams Satour.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-8">
            I build <TypewriterEffect phrases={["web applications.", "user interfaces.", "amazing experiences.", "modern solutions."]} />
          </h2>
          <p className="text-slate text-lg mb-10 max-w-xl">
            A self-taught developer dedicated to writing clean code and building intuitive user experiences that solve real-world problems.
            Specializing in React, JavaScript, and modern CSS to turn complex ideas into seamless digital reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="btn btn-primary">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" className="btn btn-outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;