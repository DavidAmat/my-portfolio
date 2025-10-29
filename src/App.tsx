import { useEffect, useState } from 'react';
import { getBlogDetails } from './blog/blogData';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { BlogDetail } from './components/BlogDetail';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectDetail } from './components/ProjectDetail';
import { Projects } from './components/Projects';
import { Referrals } from './components/Referrals';
import { TechStack } from './components/TechStack';
import { getProjectDetails } from './projects/projectData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'project' | 'blog'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedBlogTopicId, setSelectedBlogTopicId] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('project');
    window.scrollTo(0, 0);
  };

  const handleBlogTopicClick = (topicId: string) => {
    setSelectedBlogTopicId(topicId);
    setCurrentView('blog');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProjectId(null);
    setSelectedBlogTopicId(null);
    // Smooth scroll to projects section
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleBackToBlog = () => {
    setCurrentView('home');
    setSelectedBlogTopicId(null);
    // Smooth scroll to blog section
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateToSectionFromBlog = (sectionId: string) => {
    setCurrentView('home');
    setSelectedBlogTopicId(null);
    // Smooth scroll to the requested section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateToSectionFromProject = (sectionId: string) => {
    setCurrentView('home');
    setSelectedProjectId(null);
    // Smooth scroll to the requested section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (currentView === 'project') {
        handleBackToHome();
      } else if (currentView === 'blog') {
        handleBackToBlog();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentView]);

  // Update URL when view changes
  useEffect(() => {
    if (currentView === 'project' && selectedProjectId) {
      window.history.pushState({}, '', `#project-${selectedProjectId}`);
    } else if (currentView === 'blog' && selectedBlogTopicId) {
      window.history.pushState({}, '', `#blog-${selectedBlogTopicId}`);
    } else if (currentView === 'home') {
      window.history.pushState({}, '', '#');
    }
  }, [currentView, selectedProjectId, selectedBlogTopicId]);

  if (currentView === 'project' && selectedProjectId) {
    const projectDetails = getProjectDetails(selectedProjectId);
    if (projectDetails) {
      return (
        <div className="min-h-screen">
          <ProjectDetail {...projectDetails} onBack={handleBackToHome} onNavigateToSection={handleNavigateToSectionFromProject} />
          <Footer />
        </div>
      );
    }
  }

  if (currentView === 'blog' && selectedBlogTopicId) {
    const blogDetails = getBlogDetails(selectedBlogTopicId);
    if (blogDetails) {
      return (
        <div className="min-h-screen">
          <BlogDetail {...blogDetails} onBack={handleBackToBlog} onNavigateToSection={handleNavigateToSectionFromBlog} />
          <Footer />
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects onProjectClick={handleProjectClick} />
        <Blog onTopicClick={handleBlogTopicClick} />
        <About />
        <Experience />
        <TechStack />
        <Referrals />
      </main>
      <Footer />
    </div>
  );
}
