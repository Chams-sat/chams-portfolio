import React from 'react';

interface SkillBarProps {
  skill: {
    name: string;
    percentage: number;
    category: 'frontend' | 'backend' | 'tools';
  };
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={ref}
      className="mb-6" 
      style={{ 
        opacity: inView ? 1 : 0, 
        transform: inView ? 'translateY(0)' : 'translateY(20px)', 
        transition: `all 0.5s ease ${index * 0.1}s` 
      }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-text-dark">{skill.name}</span>
        <span className="text-slate">{skill.percentage}%</span>
      </div>
      <div className="w-full h-2 bg-navy-dark rounded-full overflow-hidden">
        <div
          className="h-full bg-highlight transition-all duration-700"
          style={{ width: `${inView ? skill.percentage : 0}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
