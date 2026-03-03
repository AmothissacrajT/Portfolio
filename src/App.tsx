import { useState, useEffect } from 'react';
import { Navigation } from './components/portfolio/Navigation';
import { HeroSection } from './components/portfolio/HeroSection';
import { AboutSection } from './components/portfolio/AboutSection';
import { ProjectsSection } from './components/portfolio/ProjectsSection';
import { ExperienceSection } from './components/portfolio/ExperienceSection';
import { ConnectSection } from './components/portfolio/ConnectSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'connect'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <HeroSection onNavigate={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ConnectSection />
      </main>
    </div>
  );
}
