
import React, { useEffect, useRef } from 'react';

interface FloatingElement {
  id: string;
  content: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  delay: number;
}

const ParallaxBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const codeSnippets = [
    "function calculateGPA() { return grades.reduce((a,b) => a+b)/grades.length; }",
    "SELECT * FROM students WHERE major = 'Information Technology';",
    "class ITStudent { constructor(name) { this.name = name; } }",
    "git add . && git commit -m 'Updated portfolio'",
    "npm install awesome-projects",
    "const portfolio = new Website({ student: 'IT', university: 'UPSA' });",
    "while(learning) { skills++; knowledge.expand(); }",
    "const career = await buildSkills().then(land => 'dream-job');",
    "import { success } from './future';",
    "console.log('Hello, World of IT!');"
  ];

  const geometricShapes = [
    { type: 'hexagon', size: 40 },
    { type: 'triangle', size: 30 },
    { type: 'circle', size: 35 },
    { type: 'square', size: 25 },
    { type: 'diamond', size: 32 }
  ];

  const createFloatingElements = (): FloatingElement[] => {
    const elements: FloatingElement[] = [];
    
    // Create floating code snippets
    codeSnippets.forEach((snippet, index) => {
      elements.push({
        id: `code-${index}`,
        content: snippet,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.3 + 0.7,
        speed: Math.random() * 10 + 8,
        delay: Math.random() * 5
      });
    });

    return elements;
  };

  const [floatingElements] = React.useState(createFloatingElements);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      const elements = document.querySelectorAll('.mouse-responsive');
      elements.forEach((element, index) => {
        const factor = (index + 1) * 0.1;
        const translateX = xPercent * factor * 20;
        const translateY = yPercent * factor * 20;
        
        (element as HTMLElement).style.transform = 
          `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Background geometric shapes */}
      <div className="parallax-layer opacity-10">
        {geometricShapes.map((shape, index) => (
          <div
            key={`shape-${index}`}
            className={`geometric-shape w-${shape.size} h-${shape.size} mouse-responsive`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--duration': `${Math.random() * 15 + 20}s`,
              '--delay': `${Math.random() * 5}s`
            } as React.CSSProperties}
          >
            <div className={`w-full h-full bg-gradient-to-br from-electric-blue to-syntax-green rounded-${shape.type === 'circle' ? 'full' : 'lg'}`} />
          </div>
        ))}
      </div>

      {/* Floating code snippets */}
      <div className="parallax-layer">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="floating-code mouse-responsive"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}rem`,
              '--duration': `${element.speed}s`,
              '--delay': `${element.delay}s`
            } as React.CSSProperties}
          >
            {element.content}
          </div>
        ))}
      </div>

      {/* Interactive particles */}
      <div className="parallax-layer opacity-30">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={`particle-${index}`}
            className="absolute w-1 h-1 bg-electric-blue rounded-full mouse-responsive"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `parallax-float ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxBackground;
