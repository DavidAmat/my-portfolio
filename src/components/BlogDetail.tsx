import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Navbar } from './Navbar';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

export interface BlogSection {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface BlogStory {
    id: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    tags: string[];
    sections: BlogSection[];
}

export interface BlogDetailProps {
    topicId: string;
    topicTitle: string;
    stories: BlogStory[];
    onBack: () => void;
}

export function BlogDetail({ topicTitle, stories, onBack }: BlogDetailProps) {
    const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const selectedStory = stories[selectedStoryIndex];

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
            <Navbar onBackToProjects={onBack} />

            {/* Blog Section Title */}
            <div className="pt-32 pb-8 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-bold">{topicTitle}</h1>
                </div>
            </div>

            {/* Carousel Section */}
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
                <div className="relative">
                    <div
                        ref={carouselRef}
                        className="flex gap-6 overflow-x-auto px-6 py-8 scrollbar-hide scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {stories.map((story, index) => (
                            <div
                                key={story.id}
                                onClick={() => setSelectedStoryIndex(index)}
                                className={`relative flex-shrink-0 w-80 aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${selectedStoryIndex === index
                                    ? 'shadow-2xl scale-105'
                                    : 'shadow-lg hover:shadow-xl opacity-70 hover:opacity-100'
                                    }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/40 dark:to-purple-500/40" />
                                <div className="relative h-full backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/20 dark:border-white/10 p-6 flex flex-col justify-end">
                                    <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                                    <p className="text-sm text-foreground/70 line-clamp-2">{story.description}</p>
                                </div>
                                {selectedStoryIndex === index && (
                                    <div className="absolute inset-0 ring-2 ring-blue-500 dark:ring-blue-400 rounded-2xl pointer-events-none" />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
                </div>
            </div>

            {/* Story Content */}
            <article className="max-w-4xl mx-auto px-6 pt-24 pb-12">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-6 flex-wrap">
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
                <h1 className="text-4xl lg:text-6xl mb-6 tracking-tight">{selectedStory.title}</h1>

                {/* Description */}
                <p className="text-xl text-foreground/70 mb-8">{selectedStory.description}</p>

                <Separator className="mb-12" />

                {/* Table of Contents */}
                <div className="mb-12 p-8 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/5">
                    <h2 className="mb-4">Table of Contents</h2>
                    <nav>
                        <ol className="space-y-2">
                            {selectedStory.sections.map((section, index) => (
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
                    {selectedStory.sections.map((section) => (
                        <section key={section.id} id={section.id}>
                            <h1 className="mb-6 text-3xl font-bold lg:text-4xl">{section.title}</h1>
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
                        <span>Back to all blog topics</span>
                    </button>
                </div>
            </article>
        </div>
    );
}

