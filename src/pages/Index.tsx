
import React from 'react';
import ParallaxBackground from '../components/ParallaxBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="relative">
      {/* Parallax Background */}
      <ParallaxBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <div id="home">
          <HeroSection />
        </div>
        
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-tech-gray text-white py-8 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-4">
            <div className="font-mono font-bold text-xl mb-2">&lt;JD /&gt;</div>
            <p className="text-white/70">IT Student | Code Enthusiast | Future Developer</p>
          </div>
          <div className="border-t border-white/20 pt-4">
            <p className="text-white/60 text-sm">
              © 2024 John Doe. Built with React, TypeScript & lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
