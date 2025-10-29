import type { ProjectDetailProps, ProjectStory } from '../components/ProjectDetail';
import { analyticsDashboardSections } from './analytics-dashboard';
import { neuralNetworkOptimizerSections } from './neural-network-optimizer';
import { project1Projects } from './project-1.generated.tsx';
import { project2Projects } from './project-2.generated.tsx';

// You can easily add more projects by creating new files and importing them here
export function getProjectDetails(projectId: string): ProjectDetailProps | null {
  const projectsMap: Record<string, ProjectDetailProps> = {
    '1': {
      id: '1',
      title: 'Neural Network Optimizer',
      description: 'Advanced deep learning framework for optimizing neural architectures using AutoML techniques.',
      category: 'AI & Machine Learning',
      tags: ['PyTorch', 'TensorFlow', 'AutoML', 'Python', 'Neural Architecture Search'],
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NjAyNjU2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'October 2024',
      readTime: '12 min read',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.example.com',
      stories: (project1Projects as ProjectStory[]).length > 0
        ? (project1Projects as ProjectStory[])
        : [
          {
            id: 'default',
            title: 'Overview',
            description: 'Project story generated from code sections.',
            date: 'October 2024',
            tags: ['PyTorch', 'TensorFlow'],
            sections: neuralNetworkOptimizerSections,
          },
        ],
      onBack: () => { },
    },
    '2': {
      id: '2',
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive data visualization platform for monitoring KPIs and business metrics in real-time.',
      category: 'Data Science',
      tags: ['React', 'D3.js', 'Python', 'FastAPI', 'WebSockets', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjAxNzY1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'September 2024',
      readTime: '10 min read',
      githubUrl: 'https://github.com',
      liveUrl: 'https://dashboard.example.com',
      stories: (project2Projects as ProjectStory[]).length > 0
        ? (project2Projects as ProjectStory[])
        : [
          {
            id: 'default',
            title: 'Overview',
            description: 'Project story generated from code sections.',
            date: 'September 2024',
            tags: ['React', 'D3.js'],
            sections: analyticsDashboardSections,
          },
        ],
      onBack: () => { },
    },
    '3': {
      id: '3',
      title: 'Cloud ML Pipeline',
      description: 'Scalable machine learning pipeline deployed on cloud infrastructure with automated training.',
      category: 'AI & Machine Learning',
      tags: ['AWS', 'Kubernetes', 'MLOps', 'Docker', 'Python'],
      image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMjYxNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'August 2024',
      readTime: '15 min read',
      githubUrl: 'https://github.com',
      stories: [
        {
          id: 'default',
          title: 'Overview',
          description: 'Generated from existing sections.',
          date: 'August 2024',
          tags: ['AWS', 'Kubernetes'],
          sections: [
            {
              id: 'overview',
              title: 'Project Overview',
              content: (
                <div className="space-y-4">
                  <p>
                    A comprehensive ML pipeline built on AWS infrastructure, featuring automated model training,
                    deployment, and monitoring. The system handles the entire machine learning lifecycle from
                    data ingestion to model serving.
                  </p>
                  <p>
                    This project demonstrates best practices in MLOps, including CI/CD for ML models,
                    automated retraining, and production monitoring with alerting capabilities.
                  </p>
                </div>
              ),
            },
            {
              id: 'architecture',
              title: 'Pipeline Architecture',
              content: (
                <div className="space-y-4">
                  <p>
                    The pipeline is built using a microservices architecture, with each component
                    handling a specific part of the ML workflow. All services are containerized
                    and orchestrated using Kubernetes.
                  </p>
                  <ul className="space-y-2">
                    <li>✓ Data ingestion and preprocessing service</li>
                    <li>✓ Model training and hyperparameter tuning</li>
                    <li>✓ Model evaluation and validation</li>
                    <li>✓ Deployment and serving infrastructure</li>
                    <li>✓ Monitoring and alerting system</li>
                  </ul>
                </div>
              ),
            },
          ],
        },
      ],
      onBack: () => { },
    },
    '4': {
      id: '4',
      title: 'Predictive Analytics Engine',
      description: 'Machine learning system for forecasting trends and patterns from complex datasets.',
      category: 'Data Science',
      tags: ['Scikit-learn', 'Pandas', 'SQL', 'Time Series', 'Python'],
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2MDI3NTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'July 2024',
      readTime: '11 min read',
      githubUrl: 'https://github.com',
      stories: [
        {
          id: 'default',
          title: 'Overview',
          description: 'Generated from existing sections.',
          date: 'July 2024',
          tags: ['Scikit-learn', 'Pandas'],
          sections: [
            {
              id: 'overview',
              title: 'Overview',
              content: (
                <div className="space-y-4">
                  <p>
                    A predictive analytics engine designed to forecast business metrics, sales trends,
                    and customer behavior. The system uses ensemble methods and time series analysis
                    to achieve high accuracy predictions.
                  </p>
                </div>
              ),
            },
          ],
        },
      ],
      onBack: () => { },
    },
    '5': {
      id: '5',
      title: 'Full Stack SaaS Platform',
      description: 'Complete web application with authentication, payments, and real-time collaboration features.',
      category: 'Full Stack',
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'TypeScript', 'Prisma'],
      image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjAyMzY1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'June 2024',
      readTime: '14 min read',
      githubUrl: 'https://github.com',
      liveUrl: 'https://saas.example.com',
      stories: [
        {
          id: 'default',
          title: 'Overview',
          description: 'Generated from existing sections.',
          date: 'June 2024',
          tags: ['Next.js', 'Prisma'],
          sections: [
            {
              id: 'overview',
              title: 'Platform Overview',
              content: (
                <div className="space-y-4">
                  <p>
                    A production-ready SaaS platform built with Next.js, featuring user authentication,
                    subscription management, and real-time collaboration. The platform is designed
                    for scalability and includes comprehensive monitoring and analytics.
                  </p>
                </div>
              ),
            },
          ],
        },
      ],
      onBack: () => { },
    },
    '6': {
      id: '6',
      title: 'Computer Vision System',
      description: 'Object detection and image segmentation system for automated quality control.',
      category: 'AI & Machine Learning',
      tags: ['OpenCV', 'YOLO', 'Python', 'TensorFlow', 'Computer Vision'],
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDI3NTQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'May 2024',
      readTime: '13 min read',
      githubUrl: 'https://github.com',
      stories: [
        {
          id: 'default',
          title: 'Overview',
          description: 'Generated from existing sections.',
          date: 'May 2024',
          tags: ['OpenCV', 'YOLO'],
          sections: [
            {
              id: 'overview',
              title: 'System Overview',
              content: (
                <div className="space-y-4">
                  <p>
                    An automated quality control system using computer vision and deep learning.
                    The system performs real-time object detection and classification on manufacturing
                    lines, identifying defects with 98% accuracy.
                  </p>
                </div>
              ),
            },
          ],
        },
      ],
      onBack: () => { },
    },
  };

  return projectsMap[projectId] || null;
}
