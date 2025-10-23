import type { BlogStory } from '../components/BlogDetail';

export const homeWorkstationStories: BlogStory[] = [
    {
        id: 'jupyter-hub',
        title: 'Create a Jupyter Hub',
        description: 'Setting up a multi-user Jupyter Hub environment for data science workflows.',
        date: 'October 2024',
        readTime: '5 min read',
        tags: ['Jupyter', 'Python', 'Docker', 'DevOps'],
        sections: [
            {
                id: 'introduction',
                title: 'Introduction',
                content: (
                    <div className="space-y-4">
                        <p>
                            This guide walks through setting up Jupyter Hub on your home workstation.
                            Jupyter Hub provides a multi-user environment perfect for collaborative data science work.
                        </p>
                    </div>
                ),
            },
            {
                id: 'setup',
                title: 'Setup Process',
                content: (
                    <div className="space-y-4">
                        <p>
                            The setup involves installing dependencies, configuring the environment, and
                            launching the Jupyter Hub server with proper authentication.
                        </p>
                    </div>
                ),
            },
        ],
    },
    {
        id: 'install-kubernetes',
        title: 'Install Kubernetes',
        description: 'Complete guide to installing and configuring Kubernetes on your home server.',
        date: 'September 2024',
        readTime: '8 min read',
        tags: ['Kubernetes', 'k3s', 'DevOps', 'Linux'],
        sections: [
            {
                id: 'overview',
                title: 'Overview',
                content: (
                    <div className="space-y-4">
                        <p>
                            Kubernetes installation on a home workstation enables container orchestration
                            and microservices deployment in a local environment.
                        </p>
                    </div>
                ),
            },
            {
                id: 'installation',
                title: 'Installation Steps',
                content: (
                    <div className="space-y-4">
                        <p>
                            Follow these steps to install Kubernetes using kubeadm or k3s for a
                            lightweight deployment suitable for home use.
                        </p>
                    </div>
                ),
            },
        ],
    },
    {
        id: 'llm-gpu',
        title: 'Run LLM models in GPU',
        description: 'Configure your GPU to run large language models efficiently.',
        date: 'August 2024',
        readTime: '6 min read',
        tags: ['LLM', 'GPU', 'CUDA', 'AI', 'Python'],
        sections: [
            {
                id: 'prerequisites',
                title: 'Prerequisites',
                content: (
                    <div className="space-y-4">
                        <p>
                            Running LLM models requires proper GPU drivers, CUDA installation, and
                            sufficient VRAM for model inference.
                        </p>
                    </div>
                ),
            },
            {
                id: 'configuration',
                title: 'Configuration',
                content: (
                    <div className="space-y-4">
                        <p>
                            Configure your environment with the necessary libraries and optimize
                            GPU memory usage for efficient LLM inference.
                        </p>
                    </div>
                ),
            },
        ],
    },
];

