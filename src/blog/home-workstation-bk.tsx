import type { BlogStory } from '../components/BlogDetail';
import { CodeBlock } from '../components/CodeBlock';
import InlineBadgeText from '../components/InlineBadgeText';

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
                        <img
                            src="/blog/home-workstation/owl.png"
                            alt="Owl"
                            className="w-full rounded-xl border border-black/5 dark:border-white/10"
                        />
                        <p>
                            <InlineBadgeText text={"This guide walks through setting up `Jupyter Hub`{#2563eb} on your home workstation. `Multi-user`{#16a34a} environments are perfect for collaborative data science work."} />
                        </p>
                        <h2>Architecture Overview</h2>
                        <p>
                            <InlineBadgeText text={"We will leverage `Docker`{#0ea5e9} and `OAuth`{#f97316} to run and secure the hub."} />
                        </p>
                        <h3>Key Components</h3>
                        <p>
                            <InlineBadgeText text={"Spawner, Proxy, and Authenticator are the three core `JupyterHub`{#9333ea} components."} />
                        </p>
                        <CodeBlock
                            language="python"
                            filename="optimizer_core.py"
                            code={`class NeuralArchitectureOptimizer:
    def __init__(self, search_space, objective='accuracy'):
        self.search_space = search_space
        self.objective = objective
        self.history = []
    
    def optimize(self, X_train, y_train, X_val, y_val, iterations=100):
        """
        Main optimization loop using Bayesian Optimization
        """
        for i in range(iterations):
            # Sample architecture from search space
            architecture = self.sample_architecture()
            
            # Build and train model
            model = self.build_model(architecture)
            history = self.train_model(model, X_train, y_train, X_val, y_val)
            
            # Evaluate performance
            performance = self.evaluate(model, X_val, y_val)
            
            # Update search space based on performance
            self.update_search_space(architecture, performance)
            
            self.history.append({
                'iteration': i,
                'architecture': architecture,
                'performance': performance
            })
        
        return self.get_best_architecture()`}
                        />
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
                        <CodeBlock
                            language="bash"
                            filename="setup.sh"
                            code={`# Install dependencies
pip install jupyterhub oauthenticator dockerspawner

# Configure JupyterHub
jupyterhub --generate-config

# Configure OAuth
jupyterhub-singleuser --generate-config`}
                        />
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

