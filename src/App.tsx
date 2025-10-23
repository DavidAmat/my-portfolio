import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Referrals } from './components/Referrals';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import { getProjectDetails } from './projects/projectData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('project');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProjectId(null);
    // Smooth scroll to projects section
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (currentView === 'project') {
        handleBackToHome();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentView]);

  // Update URL when view changes
  useEffect(() => {
    if (currentView === 'project' && selectedProjectId) {
      window.history.pushState({}, '', `#project-${selectedProjectId}`);
    } else if (currentView === 'home') {
      window.history.pushState({}, '', '#');
    }
  }, [currentView, selectedProjectId]);

  if (currentView === 'project' && selectedProjectId) {
    const projectDetails = getProjectDetails(selectedProjectId);
    if (projectDetails) {
      return (
        <div className="min-h-screen">
          <Navbar />
          <ProjectDetail {...projectDetails} onBack={handleBackToHome} />
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
        <About />
        <Experience />
        <TechStack />
        <Referrals />
      </main>
      <Footer />
    </div>
  );
}
