import type { BlogStory } from '../components/BlogDetail';

export const erpCocktailsStories: BlogStory[] = [
    {
        id: 'frontend',
        title: 'Frontend',
        description: 'Building a modern React frontend for the ERP Cocktails application.',
        date: 'July 2024',
        readTime: '7 min read',
        tags: ['React', 'TypeScript', 'UI/UX', 'Frontend'],
        sections: [
            {
                id: 'architecture',
                title: 'Frontend Architecture',
                content: (
                    <div className="space-y-4">
                        <p>
                            The frontend is built with React and TypeScript, featuring a modular
                            component architecture and state management with Context API.
                        </p>
                    </div>
                ),
            },
            {
                id: 'features',
                title: 'Key Features',
                content: (
                    <div className="space-y-4">
                        <p>
                            Includes real-time updates, responsive design, and intuitive UX for
                            managing cocktail recipes and inventory.
                        </p>
                    </div>
                ),
            },
        ],
    },
    {
        id: 'backend',
        title: 'Backend',
        description: 'Designing a scalable backend API for ERP Cocktails management.',
        date: 'June 2024',
        readTime: '9 min read',
        tags: ['FastAPI', 'Python', 'PostgreSQL', 'Backend', 'REST API'],
        sections: [
            {
                id: 'api-design',
                title: 'API Design',
                content: (
                    <div className="space-y-4">
                        <p>
                            The backend API follows RESTful principles with FastAPI, providing
                            endpoints for recipe management, inventory tracking, and analytics.
                        </p>
                    </div>
                ),
            },
            {
                id: 'database',
                title: 'Database Schema',
                content: (
                    <div className="space-y-4">
                        <p>
                            PostgreSQL database with normalized schema for efficient queries and
                            data integrity across recipes, ingredients, and orders.
                        </p>
                    </div>
                ),
            },
        ],
    },
];

