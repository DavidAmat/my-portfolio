import { ArrowLeft, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavbarProps {
  onBackToProjects?: () => void;
  backButtonText?: string;
  currentView?: 'home' | 'project' | 'blog';
  onNavigateToSection?: (sectionId: string) => void;
}

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Referrals', href: '#referrals' },
];

export function Navbar({ onBackToProjects, backButtonText = "Back to Projects", currentView = 'home', onNavigateToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(currentView === 'blog' ? 'blog' : currentView === 'project' ? 'projects' : 'home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    // Set initial active section based on current view
    if (currentView === 'blog') {
      setActiveSection('blog');
    } else if (currentView === 'project') {
      setActiveSection('projects');
    } else {
      setActiveSection('home');
    }
  }, [currentView]);

  useEffect(() => {
    // Only track scroll position when on home view
    if (currentView !== 'home') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1)); // Remove '#'
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      let currentSection = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1); // Remove '#'
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    // If we're not on the home view, navigate back to home first
    if (currentView !== 'home' && onNavigateToSection) {
      onNavigateToSection(sectionId);
      return;
    }

    // Otherwise, scroll to section on current page
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Back Button */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-xl tracking-tight hover:opacity-70 transition-opacity mr-6"
            >
              DA
            </button>
            {onBackToProjects && (
              <button
                onClick={onBackToProjects}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/5 dark:bg-white/5 text-foreground/70 hover:text-foreground hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200"
              >
                <ArrowLeft size={18} />
                <span className="text-sm font-medium">{backButtonText}</span>
              </button>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              const isHovered = hoveredSection === sectionId;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  onMouseEnter={() => setHoveredSection(sectionId)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className="relative px-4 py-2 text-sm transition-colors duration-200 group"
                >
                  <span className={`transition-colors duration-200 ${isActive
                    ? 'text-foreground font-medium'
                    : 'text-foreground/70 hover:text-foreground'
                    }`}>
                    {item.name}
                  </span>

                  {/* Active indicator line */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-foreground transition-all duration-200 ${isActive
                    ? 'w-8 opacity-100'
                    : isHovered
                      ? 'w-6 opacity-60'
                      : 'w-0 opacity-0'
                    }`} />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-t border-black/5 dark:border-white/5">
            {onBackToProjects && (
              <button
                onClick={onBackToProjects}
                className="block w-full text-left mx-4 mb-2 px-3 py-2 rounded-md bg-black/5 dark:bg-white/5 text-foreground/70 hover:text-foreground hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200"
              >
                <ArrowLeft size={18} className="inline-block mr-2" />
                <span className="text-sm font-medium">{backButtonText}</span>
              </button>
            )}
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative block w-full text-left px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 group"
                >
                  <span className={`transition-colors duration-200 ${isActive
                    ? 'text-foreground font-medium'
                    : 'text-foreground/70 hover:text-foreground'
                    }`}>
                    {item.name}
                  </span>

                  {/* Active indicator line for mobile */}
                  <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-foreground transition-all duration-200 ${isActive ? 'opacity-100' : 'opacity-0'
                    }`} />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
