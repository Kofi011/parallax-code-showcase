
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "IT Student",
    "Code Enthusiast", 
    "Future Developer",
    "Problem Solver",
    "Tech Innovator"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const currentText = phrases[currentPhrase];

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      } else {
        setDisplayText(currentText.substring(0, displayText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase, phrases]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-tech-gray mb-4">
            John Doe
          </h1>
          <div className="text-2xl md:text-3xl font-light text-tech-gray/80 h-12 flex items-center justify-center">
            <span className="border-r-2 border-electric-blue animate-blink pr-1">
              {displayText}
            </span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-tech-gray/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate IT student at UPSA, crafting digital solutions and exploring 
          the endless possibilities of technology. Welcome to my interactive portfolio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3 text-lg font-medium rounded-lg interactive-element"
          >
            Explore My Code
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-3 text-lg font-medium rounded-lg interactive-element"
          >
            Let's Connect
          </Button>
        </div>

        <div className="scroll-indicator">
          <div className="mouse-animation"></div>
          <p className="text-sm text-tech-gray/60 mt-2">Scroll to explore</p>
        </div>
      </div>

      {/* Floating interaction elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-electric-blue/20 rounded-lg animate-float-gentle"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-syntax-green/10 rounded-full animate-float-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-code-orange/30 rotate-45 animate-float-gentle" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-tech-gray/10 rounded-full animate-float-gentle" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
