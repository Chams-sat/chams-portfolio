
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particlesRef.current = [];
      const numberOfParticles = Math.min(window.innerWidth * 0.1, 100);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(100, 255, 218, ${Math.random() * 0.3 + 0.1})`
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        const { x, y, size, color } = particle;
        
        // Draw particle
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect particles in proximity
        connectParticles(index);
        
        // Update position
        updateParticle(particle);
      });
    };
    
    const connectParticles = (index: number) => {
      const currentParticle = particlesRef.current[index];
      
      for (let j = index + 1; j < particlesRef.current.length; j++) {
        const targetParticle = particlesRef.current[j];
        const dx = currentParticle.x - targetParticle.x;
        const dy = currentParticle.y - targetParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(100, 255, 218, ${0.1 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(currentParticle.x, currentParticle.y);
          ctx.lineTo(targetParticle.x, targetParticle.y);
          ctx.stroke();
        }
      }
    };
    
    const updateParticle = (particle: Particle) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Wrap around edges
      if (particle.x > canvas.width) particle.x = 0;
      else if (particle.x < 0) particle.x = canvas.width;
      if (particle.y > canvas.height) particle.y = 0;
      else if (particle.y < 0) particle.y = canvas.height;
      
      // Mouse interaction
      const dx = particle.x - mouseRef.current.x;
      const dy = particle.y - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        const force = 0.1;
        
        particle.speedX += Math.cos(angle) * force;
        particle.speedY += Math.sin(angle) * force;
      }
      
      // Limit speed
      const maxSpeed = 0.8;
      const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
      
      if (speed > maxSpeed) {
        particle.speedX = (particle.speedX / speed) * maxSpeed;
        particle.speedY = (particle.speedY / speed) * maxSpeed;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Setup
    resizeCanvas();
    initParticles();
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default ParticleBackground;
