import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Innovations Inc.',
    role: 'Senior AI Engineer',
    period: '2022 - Present',
    description: 'Leading the development of advanced machine learning systems and AI-powered products. Architecting scalable ML pipelines and mentoring junior engineers.',
    achievements: [
      'Reduced model inference time by 60% through optimization',
      'Led a team of 5 engineers on flagship AI product',
      'Implemented MLOps practices saving 30% in cloud costs',
    ],
  },
  {
    company: 'DataViz Solutions',
    role: 'Full Stack Data Scientist',
    period: '2020 - 2022',
    description: 'Built end-to-end data science solutions and interactive dashboards for enterprise clients. Developed predictive models and automated reporting systems.',
    achievements: [
      'Delivered 15+ client projects with 95% satisfaction rate',
      'Created real-time analytics platform used by 10K+ users',
      'Improved prediction accuracy by 25% using ensemble methods',
    ],
  },
  {
    company: 'StartupLab',
    role: 'Machine Learning Engineer',
    period: '2018 - 2020',
    description: 'Developed computer vision and NLP models for startup products. Collaborated with product teams to integrate ML capabilities into applications.',
    achievements: [
      'Built image recognition system with 92% accuracy',
      'Implemented recommendation engine increasing engagement by 40%',
      'Published 3 research papers on deep learning techniques',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl mb-4 tracking-tight">Experience</h2>
          <p className="text-lg text-foreground/60">
            My professional journey in tech and data science
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:shadow-2xl transition-all duration-300"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-12 top-full h-8 w-0.5 bg-gradient-to-b from-black/20 to-transparent dark:from-white/20" />
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase size={28} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="mb-1">{exp.role}</h3>
                      <p className="text-foreground/80">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60 mt-2 md:mt-0">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                        <p className="text-sm text-foreground/70">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
