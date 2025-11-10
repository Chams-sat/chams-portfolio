import React, { useState, useMemo } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Github } from 'lucide-react';
import { projects, Project } from '../data/projects';

// All unique tags from projects
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
const ProjectCard: React.FC<{
  project: Project;
}> = ({
  project
}) => {
  return <Card className="card h-full flex flex-col overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden rounded-t-md">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-dark/90 opacity-70 group-hover:opacity-90 transition-opacity z-10"></div>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-500" />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-text-dark mb-2 group-hover:text-highlight transition-colors">
          {project.title}
        </h3>
        <p className="text-slate mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => <span key={tag} className="bg-navy-light text-slate-light hover:bg-highlight/20 hover:text-highlight px-2 py-1 rounded text-xs font-semibold transition-colors">
              {tag}
            </span>)}
        </div>
        <div className="flex gap-3 mt-auto">
          <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0 flex items-center justify-center" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={18} />
            </a>
          </Button>
          {project.liveUrl && <Button size="sm" className="flex-1" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>}
        </div>
      </div>
    </Card>;
};
const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'featured' | 'all'>('featured');

  const visibleProjects = useMemo(() => {
    const baseProjects = viewMode === 'featured' ? projects.filter(p => p.featured) : projects;
    if (filter === 'all') {
      return baseProjects;
    }
    return baseProjects.filter(p => p.tags.includes(filter));
  }, [filter, viewMode]);

  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === 'featured' ? 'all' : 'featured');
  };

  return <section id="projects" className="py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-heading">
          My Projects
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <Button variant={filter === 'all' ? "default" : "outline"} size="sm" onClick={() => setFilter('all')} className={filter === 'all' ? "bg-highlight text-navy" : ""}>
              All
            </Button>
            {allTags.map(tag => <Button key={tag} variant={filter === tag ? "default" : "outline"} size="sm" onClick={() => setFilter(tag)} className={filter === tag ? "bg-highlight text-navy" : ""}>
                {tag}
              </Button>)}
          </div>
          
          <Button variant="ghost" size="sm" onClick={toggleViewMode} className="text-slate hover:text-highlight">
            {viewMode === 'featured' ? 'View All Projects' : 'Show Featured Only'}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {visibleProjects.length > 0 ? visibleProjects.map(project => <ProjectCard key={project.id} project={project} />) : <div className="col-span-full text-center py-10">
              <p className="text-slate text-lg">No projects match the current filter.</p>
              <Button variant="link" onClick={() => setFilter('all')} className="text-highlight mt-2">
                Clear filters
              </Button>
            </div>}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;