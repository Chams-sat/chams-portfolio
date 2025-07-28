import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Github } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}
const projects: Project[] = [{
  id: 1,
  title: "Portfolio Website",
  description: "A modern portfolio website with sleek animations, dark theme, and responsive design. Built with React and Tailwind CSS.",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500",
  tags: ["React", "TypeScript", "Tailwind CSS"],
  githubUrl: "https://github.com/Chams-sat/chams-portfolio.git",
  liveUrl: "https://chams-sat.github.io/chams-portfolio/",
  featured: true
}, {
  id: 2,
  title: "E-commerce Platform",
  description: "Full-stack e-commerce platform with product catalog, user authentication, shopping cart, and secure payment processing.",
  image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=500",
  tags: ["Next.js", "MongoDB", "Node.js", "Stripe"],
  githubUrl: "#",
  liveUrl: "#",
  featured: false
}, {
  id: 3,
  title: "Task Management App",
  description: "Trello-inspired task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500",
  tags: ["React", "Firebase", "Redux"],
  githubUrl: "#",
  liveUrl: "#",
  featured: false
}, {
  id: 4,
  title: "Weather Dashboard",
  description: "A real-time weather application built with React and Vite. Fetches data from OpenWeatherMap and displays current weather and 5-day forecasts in a clean, user-friendly interface.",
  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500",
  tags: ["React", "Tailwind CSS", "API"],
  githubUrl: "https://github.com/Chams-sat/Weather-app.git",
  liveUrl: "https://chams-sat.github.io/Weather-app/",
  featured: true
}, {
  id: 5,
  title: "Blog Platform",
  description: "Full-featured blog platform with markdown support, comment system, and admin dashboard for content management.",
  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500",
  tags: ["Node.js", "Express", "MongoDB", "React"],
  githubUrl: "#",
  liveUrl: "#",
  featured: false
}, {
  id: 6,
  title: "Social Media Dashboard",
  description: "Dashboard to track and analyze social media metrics across multiple platforms with data visualization.",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500",
  tags: ["React", "Chart.js", "API"],
  githubUrl: "#",
  liveUrl: "#",
  featured: false
}, {
  id: 7,
  title: "Modern Todo App",
  description: "A modern todo app with a sleek design and smooth animations. Built with Vanilla JavaScript and CSS.",
  image: "images/todo-screen.png",
  tags: ["Vanilla JavaScript", "CSS", "HTML"],
  githubUrl: "https://github.com/Chams-sat/Todo-app.git",
  liveUrl: "https://chams-sat.github.io/Todo-app/",
  featured: true
}];

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
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects.filter(p => p.featured));
  const [viewMode, setViewMode] = useState<'featured' | 'all'>('featured');
  const handleFilterChange = (tag: string) => {
    setFilter(tag);
    if (tag === 'all') {
      setVisibleProjects(viewMode === 'featured' ? projects.filter(p => p.featured) : projects);
    } else {
      const filtered = projects.filter(p => (viewMode === 'featured' ? p.featured : true) && p.tags.includes(tag));
      setVisibleProjects(filtered);
    }
  };
  const toggleViewMode = () => {
    const newMode = viewMode === 'featured' ? 'all' : 'featured';
    setViewMode(newMode);
    if (filter === 'all') {
      setVisibleProjects(newMode === 'featured' ? projects.filter(p => p.featured) : projects);
    } else {
      const filtered = projects.filter(p => (newMode === 'featured' ? p.featured : true) && p.tags.includes(filter));
      setVisibleProjects(filtered);
    }
  };
  return <section id="projects" className="py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-heading">
           My Projects
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <Button variant={filter === 'all' ? "default" : "outline"} size="sm" onClick={() => handleFilterChange('all')} className={filter === 'all' ? "bg-highlight text-navy" : ""}>
              All
            </Button>
            {allTags.map(tag => <Button key={tag} variant={filter === tag ? "default" : "outline"} size="sm" onClick={() => handleFilterChange(tag)} className={filter === tag ? "bg-highlight text-navy" : ""}>
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
              <Button variant="link" onClick={() => handleFilterChange('all')} className="text-highlight mt-2">
                Clear filters
              </Button>
            </div>}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;