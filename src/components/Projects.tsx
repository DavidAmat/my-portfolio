import { ExternalLink, Github, GripVertical } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Neural Network Optimizer',
    description: 'Advanced deep learning framework for optimizing neural architectures using AutoML techniques.',
    category: 'AI & Machine Learning',
    // image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NjAyNjU2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    //take an image from public/ folder
    image: '/prova.png',
    tags: ['PyTorch', 'TensorFlow', 'AutoML'],
  },
  {
    id: '2',
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive data visualization platform for monitoring KPIs and business metrics in real-time.',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjAxNzY1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'D3.js', 'Python'],
  },
  {
    id: '3',
    title: 'Cloud ML Pipeline',
    description: 'Scalable machine learning pipeline deployed on cloud infrastructure with automated training.',
    category: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMjYxNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['AWS', 'Kubernetes', 'MLOps'],
  },
  {
    id: '4',
    title: 'Predictive Analytics Engine',
    description: 'Machine learning system for forecasting trends and patterns from complex datasets.',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2MDI3NTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Scikit-learn', 'Pandas', 'SQL'],
  },
  {
    id: '5',
    title: 'Full Stack SaaS Platform',
    description: 'Complete web application with authentication, payments, and real-time collaboration features.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjAyMzY1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
  },
  {
    id: '6',
    title: 'Computer Vision System',
    description: 'Object detection and image segmentation system for automated quality control.',
    category: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDI3NTQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['OpenCV', 'YOLO', 'Python'],
  },
];

interface ProjectsProps {
  onProjectClick: (projectId: string) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A selection of my work spanning AI, data science, and full-stack development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category
                ? 'bg-black dark:bg-white text-white dark:text-black'
                : 'bg-white/60 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 hover:bg-white/80 dark:hover:bg-black/80'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => onProjectClick(project.id)}
            >
              <Card className="overflow-hidden border-0 bg-white/60 dark:bg-black/60 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Drag Handle */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-lg">
                    <GripVertical size={20} className="text-foreground/60" />
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="mb-2">{project.title}</h3>
                    <p className="text-sm text-foreground/60">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
                      <ExternalLink size={16} />
                      View Details
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
                      <Github size={16} />
                      Code
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
