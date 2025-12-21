import React from 'react';
import SkillBar from './SkillBar';
interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'tools';
}
const skills: Skill[] = [{
  name: 'React',
  percentage: 60,
  category: 'frontend'
}, {
  name: 'JavaScript',
  percentage: 75,
  category: 'frontend'
}, {
  name: 'TypeScript',
  percentage: 50,
  category: 'frontend'
}, {
  name: 'HTML & CSS',
  percentage: 95,
  category: 'frontend'
}, {
  name: 'Node.js',
  percentage: 0,
  category: 'backend'
}, {
  name: 'Express',
  percentage: 0,
  category: 'backend'
}, {
  name: 'MongoDB',
  percentage: 0,
  category: 'backend'
}, {
  name: 'SQL',
  percentage: 30,
  category: 'backend'
}, {
  name: 'Git',
  percentage: 95,
  category: 'tools'
}, {
  name: 'Docker',
  percentage: 20,
  category: 'tools'
}, {
  name: 'AWS',
  percentage: 30,
  category: 'tools'
}, {
  name: 'Figma',
  percentage: 40,
  category: 'tools'
}];
const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const filteredSkills = skills.filter(skill => activeCategory === 'all' ? true : skill.category === activeCategory);
  return <section id="skills" className="py-16 md:py-24 bg-navy-dark/30">
      <div className="container-section">
        <h2 className="section-heading">
          My Skills
        </h2>
        
        <div className="flex justify-center mb-10 space-x-4 overflow-x-auto pb-4">
          {(['all', 'frontend', 'backend', 'tools'] as const).map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-md transition-all ${activeCategory === category ? 'bg-highlight text-navy font-medium' : 'bg-navy-light text-slate hover:text-highlight'}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-10">
          {filteredSkills.map((skill, index) => <SkillBar key={skill.name} skill={skill} index={index} />)}
        </div>
      </div>
    </section>;
};
export default SkillsSection;