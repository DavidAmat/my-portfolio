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
    id: 'neural-network-optimizer',
    title: 'Neural Network Optimizer',
    description: 'Advanced deep learning framework for optimizing neural architectures using AutoML techniques.',
    category: 'AI & Machine Learning',
    image: '/prova.png',
    tags: ['PyTorch', 'TensorFlow', 'AutoML'],
  },
  {
    id: 'real-time-analytics-dashboard',
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive data visualization platform for monitoring KPIs and business metrics in real-time.',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjAxNzY1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'D3.js', 'Python'],
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
