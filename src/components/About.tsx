import { Code2, Database, Brain, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & ML Expert',
    description: 'Specialized in deep learning, neural networks, and cutting-edge AI solutions.',
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'Expert in data analysis, statistical modeling, and predictive analytics.',
  },
  {
    icon: Code2,
    title: 'Full Stack Dev',
    description: 'Building scalable web applications with modern frameworks and technologies.',
  },
  {
    icon: Rocket,
    title: 'Innovation Driven',
    description: 'Passionate about creating impactful solutions that push boundaries.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 px-6 bg-gradient-to-b from-white to-blue-50/30 dark:from-black dark:to-blue-950/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-4xl lg:text-6xl mb-6 tracking-tight">About Me</h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                I'm a passionate technologist at the intersection of artificial intelligence, 
                data science, and software engineering. With a deep understanding of both 
                theoretical foundations and practical applications, I bridge the gap between 
                complex algorithms and real-world solutions.
              </p>
              <p>
                My journey in tech has been driven by curiosity and a relentless pursuit of 
                innovation. I thrive on transforming data into actionable insights and building 
                intelligent systems that solve meaningful problems.
              </p>
              <p>
                When I'm not coding or training models, you'll find me exploring the latest 
                research papers, contributing to open-source projects, or mentoring aspiring 
                developers in the field of AI and data science.
              </p>
            </div>
          </div>

          {/* Right side - Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-black dark:bg-white flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white dark:text-black" />
                  </div>
                  <h4 className="mb-2">{highlight.title}</h4>
                  <p className="text-sm text-foreground/60">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
