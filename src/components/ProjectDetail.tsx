import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Navbar } from './Navbar';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

export interface ProjectSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface ProjectStory {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  sections: ProjectSection[];
}

export interface ProjectDetailProps {
  topicId: string;
  topicTitle: string;
  stories: ProjectStory[];
  onBack: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export function ProjectDetail({ topicTitle, stories, onBack, onNavigateToSection }: ProjectDetailProps) {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const selectedStory = stories[selectedStoryIndex];
  const [tocBySection, setTocBySection] = useState<
    Array<{
      sectionId: string;
      sectionTitle: string;
      headings: Array<{ id: string; text: string; level: 1 | 2 | 3 }>;
    }>
  >([]);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedStoryIndex]);

  // Build nested TOC by scanning headings inside each section
  useEffect(() => {
    // small delay to ensure DOM is painted
    const timer = window.setTimeout(() => {
      const articleEl = document.querySelector('article');
      if (!articleEl) return;

      const sectionEls = Array.from(articleEl.querySelectorAll('section[id]')) as HTMLElement[];
      const newToc = sectionEls.map((sectionEl) => {
        const sectionId = sectionEl.id;
        const titleEl = sectionEl.querySelector('h2'); // Changed to h2 since sections will have h2 titles
        const sectionTitle = titleEl?.textContent?.trim() || sectionId;

        const headingNodes = Array.from(sectionEl.querySelectorAll('h3, h4')) as HTMLHeadingElement[];

        const headings = headingNodes.map((h) => {
          // ensure id exists
          if (!h.id) {
            const base = (h.textContent || '').toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
            let slug = base || 'heading';
            let i = 1;
            while (document.getElementById(slug)) {
              slug = `${base}-${i++}`;
            }
            h.id = slug;
          }

          // add consistent styles and offset for anchor jumps
          h.classList.add('scroll-mt-28');
          if (h.tagName === 'H3') {
            h.classList.add('mt-8', 'mb-3', 'text-2xl', 'lg:text-3xl', 'font-semibold', 'font-oswald');
          } else if (h.tagName === 'H4') {
            h.classList.add('mt-6', 'mb-2', 'text-xl', 'lg:text-2xl', 'font-semibold', 'font-oswald');
          }

          const level = (h.tagName === 'H3' ? 1 : 2) as 1 | 2 | 3;
          return { id: h.id, text: (h.textContent || '').trim(), level };
        });

        return { sectionId, sectionTitle, headings };
      });

      setTocBySection(newToc);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [selectedStoryIndex, selectedStory]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        carousel.scrollLeft += e.deltaY;
      }
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });
    return () => carousel.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 dark:from-black dark:to-blue-950/10">
      <Navbar
        onBackToProjects={onBack}
        backButtonText="Back to Projects"
        currentView="project"
        onNavigateToSection={onNavigateToSection}
      />

      {/* Project Section Title */}
      <div className="pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold font-oswald text-center">{topicTitle}</h1>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
        <div
          ref={carouselRef}
          className="flex gap-2 overflow-x-auto px-6 py-2 scrollbar-hide scroll-smooth lg:justify-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setSelectedStoryIndex(index)}
              className={`relative flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-raleway
                ${selectedStoryIndex === index
                  ? 'bg-black text-white shadow-lg dark:bg-white dark:text-black'
                  : 'bg-white/50 text-foreground/70 hover:text-foreground hover:bg-white/80 dark:bg-black/30 dark:hover:bg-black/60'
                }`}
            >
              {story.title}
            </button>
          ))}
        </div>
      </div>

      {/* Story Content */}
      <article className="max-w-4xl mx-auto px-6 pt-6 pb-12">
        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-6 flex-wrap font-raleway">
          {selectedStory.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{selectedStory.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{selectedStory.readTime}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl mb-6 tracking-tight font-oswald">{selectedStory.title}</h1>

        {/* Description */}
        <p className="text-xl text-foreground/70 mb-8 font-raleway">{selectedStory.description}</p>

        <Separator className="mb-12" />

        {/* Table of Contents */}
        <div className="mb-12 p-8 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/5 font-raleway">
          <h2 className="mb-4 font-oswald">Table of Contents</h2>
          <nav>
            <ol className="space-y-2">
              {tocBySection.map((entry, index) => (
                <li key={entry.sectionId}>
                  <button
                    onClick={() => scrollToSection(entry.sectionId)}
                    className="text-foreground/80 hover:text-foreground transition-colors text-left font-medium"
                  >
                    <span className="mr-3">{index + 1}.</span>
                    {entry.sectionTitle}
                  </button>
                  {entry.headings.length > 0 && (
                    <ol className="mt-2 ml-6 space-y-1">
                      {entry.headings.map((h) => (
                        <li key={h.id} className={h.level === 1 ? '' : h.level === 2 ? 'ml-3' : 'ml-6'}>
                          <button
                            onClick={() => scrollToSection(h.id)}
                            className="text-foreground/60 hover:text-foreground transition-colors text-left text-sm"
                          >
                            {h.text}
                          </button>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {selectedStory.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="mb-6 text-3xl font-bold lg:text-4xl font-oswald">{section.title}</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert font-raleway">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 pt-8 border-t border-black/10 dark:border-white/10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mx-auto font-raleway"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>
        </div>
      </article>
    </div>
  );
}

