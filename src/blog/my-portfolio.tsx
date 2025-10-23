import type { BlogStory } from '../components/BlogDetail';

export const myPortfolioStories: BlogStory[] = [
    {
        id: 'react-vite',
        title: 'Using React and Vite',
        description: 'Building a modern portfolio website with React, Vite, and TypeScript.',
        date: 'October 2024',
        readTime: '10 min read',
        tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Web Development'],
        sections: [
            {
                id: 'why-vite',
                title: 'Why Vite?',
                content: (
                    <div className="space-y-4">
                        <p>
                            Vite offers lightning-fast development experience with instant hot module
                            replacement and optimized build times compared to traditional bundlers.
                        </p>
                    </div>
                ),
            },
            {
                id: 'project-structure',
                title: 'Project Structure',
                content: (
                    <div className="space-y-4">
                        <p>
                            The portfolio is organized with a component-based architecture, utilizing
                            TypeScript for type safety and Tailwind CSS for styling.
                        </p>
                    </div>
                ),
            },
            {
                id: 'deployment',
                title: 'Deployment',
                content: (
                    <div className="space-y-4">
                        <p>
                            Deployed on Vercel with automatic CI/CD pipeline, ensuring every commit
                            to main branch triggers a new production deployment.
                        </p>
                    </div>
                ),
            },
        ],
    },
];

