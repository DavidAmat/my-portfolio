import { ArrowLeft, Calendar, Clock, Github, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

export interface ProjectSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface ProjectDetailProps {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  date: string;
  readTime: string;
  githubUrl?: string;
  liveUrl?: string;
  sections: ProjectSection[];
  onBack: () => void;
}

export function ProjectDetail({
  title,
  description,
  category,
  tags,
  image,
  date,
  readTime,
  githubUrl,
  liveUrl,
  sections,
  onBack,
}: ProjectDetailProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 dark:from-black dark:to-blue-950/10">
      {/* Back Button */}
      <div className="sticky top-20 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-black/5 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-6">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl mb-6 tracking-tight">{title}</h1>

        {/* Description */}
        <p className="text-xl text-foreground/70 mb-8">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-black/5 dark:bg-white/5 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-12">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform"
            >
              <Github size={20} />
              <span>View Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-full hover:scale-105 transition-transform"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <Separator className="mb-12" />

        {/* Table of Contents */}
        <div className="mb-12 p-8 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/5">
          <h2 className="mb-4">Table of Contents</h2>
          <nav>
            <ol className="space-y-2">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="text-foreground/70 hover:text-foreground transition-colors text-left"
                  >
                    <span className="mr-3">{index + 1}.</span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="mb-6">{section.title}</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 pt-8 border-t border-black/10 dark:border-white/10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mx-auto"
          >
            <ArrowLeft size={20} />
            <span>Back to all projects</span>
          </button>
        </div>
      </article>
    </div>
  );
}
