import type { ProjectDetailProps } from '../components/ProjectDetail';
import { project1Projects } from './project-1.generated';
import { project2Projects } from './project-2.generated';

export function getProjectDetails(projectId: string): ProjectDetailProps | null {
  const projectMap: Record<string, ProjectDetailProps> = {
    'neural-network-optimizer': {
      topicId: '1',
      topicTitle: 'Neural Network Optimizer',
      stories: project1Projects,
      onBack: () => { },
    },
    'real-time-analytics-dashboard': {
      topicId: '2',
      topicTitle: 'Real-time Analytics Dashboard',
      stories: project2Projects,
      onBack: () => { },
    },
  };

  return projectMap[projectId] || null;
}

