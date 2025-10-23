import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-black dark:to-purple-950/20" />
      
      {/* Glass orbs for decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-black/10 dark:border-white/10">
          <p className="text-sm text-foreground/60">Welcome to my portfolio</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
          David Amat Olondriz
        </h1>
        
        <div className="space-y-2 mb-12">
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80">
            Full Stack Data Scientist
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80">
            AI Engineer
          </p>
        </div>

        <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12">
          Crafting intelligent solutions at the intersection of data science, 
          machine learning, and full-stack development.
        </p>

        <button
          onClick={scrollToProjects}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform"
        >
          View My Work
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-foreground/30" />
      </div>
    </section>
  );
}
