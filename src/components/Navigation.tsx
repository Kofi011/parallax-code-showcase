
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
        offset: document.getElementById(item.id)?.offsetTop || 0
      }));

      const scrollPosition = window.scrollY + 100;
      const currentSection = sections
        .filter(section => section.element && scrollPosition >= section.offset)
        .pop();

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-mono font-bold text-xl text-tech-gray">
            &lt;JD /&gt;
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'text-electric-blue' 
                    : 'text-tech-gray hover:text-electric-blue'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-electric-blue rounded-full"></div>
                )}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden p-2"
            onClick={() => {
              // Mobile menu functionality can be added here
              console.log('Mobile menu clicked');
            }}
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-tech-gray"></div>
              <div className="w-full h-0.5 bg-tech-gray"></div>
              <div className="w-full h-0.5 bg-tech-gray"></div>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
