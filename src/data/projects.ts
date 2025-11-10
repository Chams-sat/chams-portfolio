export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [{
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
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500",
  tags: ["Vanilla JavaScript", "CSS", "HTML"],
  githubUrl: "https://github.com/Chams-sat/Todo-app.git",
  liveUrl: "https://chams-sat.github.io/Todo-app/",
  featured: true
}, {
  id: 8,
  title: "Kindergarten Website",
  description: "A vibrant, responsive website for Little Sprouts Kindergarten, designed to showcase the nurturing environment, programs, and activities offered to young children, including internationalization (English and Arabic).",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500",
  tags: ["Vanilla JavaScript", "CSS", "HTML", "Tailwind CSS"],
  githubUrl: "https://github.com/Chams-sat/Little-Sprouts.git",
  liveUrl: "https://chams-sat.github.io/Little-Sprouts/",
  featured: true
}, {
  id: 9,
  title: "Indoor Plant Care Dashboard",
  description: "A responsive web dashboard prototype designed to help users track the care and watering schedules for their indoor plants. This project is built with vanilla HTML, CSS, and JavaScript, and styled using the Tailwind CSS CDN.",
  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500",
  tags: ["Vanilla JavaScript", "CSS", "HTML", "Tailwind CSS"],
  githubUrl: "https://github.com/Chams-sat/Plant-Dashboard.git",
  liveUrl: "https://chams-sat.github.io/Plant-Dashboard/",
  featured: true
}];