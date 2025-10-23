import { Badge } from './ui/badge';
import {
  Database,
  Cloud,
  Cpu,
  Layers,
  Terminal,
  GitBranch,
  Globe,
} from 'lucide-react';

const techCategories = [
  {
    category: 'AI & Machine Learning',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Keras',
      'OpenCV',
      'Hugging Face',
      'LangChain',
      'YOLO',
    ],
  },
  {
    category: 'Data Science',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'Python',
      'R',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Jupyter',
      'Apache Spark',
    ],
  },
  {
    category: 'Frontend Development',
    icon: Globe,
    color: 'from-orange-500 to-red-500',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vue.js',
      'HTML5',
      'CSS3',
      'Vite',
    ],
  },
  {
    category: 'Backend Development',
    icon: Terminal,
    color: 'from-green-500 to-emerald-500',
    skills: [
      'Node.js',
      'FastAPI',
      'Django',
      'Flask',
      'Express',
      'GraphQL',
      'REST APIs',
      'WebSockets',
    ],
  },
  {
    category: 'Databases',
    icon: Layers,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'MySQL',
      'Pinecone',
      'ChromaDB',
      'SQLite',
      'Supabase',
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-sky-500 to-blue-500',
    skills: [
      'AWS',
      'Google Cloud',
      'Azure',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Terraform',
      'MLOps',
    ],
  },
  {
    category: 'Tools & Others',
    icon: GitBranch,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Figma',
      'Jira',
      'Slack',
      'Linux',
    ],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 lg:py-32 px-6 bg-gradient-to-b from-white to-purple-50/30 dark:from-black dark:to-purple-950/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl mb-4 tracking-tight">Tech Stack</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="flex-1">{category.category}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="px-3 py-1 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency levels */}
        <div className="mt-16 p-8 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-black/5 dark:border-white/5">
          <h3 className="text-center mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-2xl text-white">★★★</span>
              </div>
              <h4 className="mb-2">Expert</h4>
              <p className="text-sm text-foreground/60">
                Python, React, ML/AI, Data Science
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-2xl text-white">★★</span>
              </div>
              <h4 className="mb-2">Advanced</h4>
              <p className="text-sm text-foreground/60">
                TypeScript, Cloud Platforms, DevOps
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-2xl text-white">★</span>
              </div>
              <h4 className="mb-2">Intermediate</h4>
              <p className="text-sm text-foreground/60">
                Mobile Development, Blockchain
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
