import type { ProjectDetailProps } from '../components/ProjectDetail';
import { project1Projects } from './project-1/project-1.generated';
import { project2Projects } from './project-2/project-2.generated';

export function getProjectDetails(projectId: string): ProjectDetailProps | null {
  const projectMap: Record<string, ProjectDetailProps> = {
    'project-1': {
      topicId: '1',
      topicTitle: 'Project 1 Projects',
      stories: project1Projects,
      onBack: () => { },
    },
    'project-2': {
      topicId: '2',
      topicTitle: 'Project 2 Projects',
      stories: project2Projects,
      onBack: () => { },
    },
  };

  return projectMap[projectId] || null;
}

