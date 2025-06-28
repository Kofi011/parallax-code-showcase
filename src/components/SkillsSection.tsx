
import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'Python', level: 85, category: 'Programming', color: 'bg-blue-500' },
    { name: 'Java', level: 80, category: 'Programming', color: 'bg-red-500' },
    { name: 'C++', level: 75, category: 'Programming', color: 'bg-purple-500' },
    { name: 'JavaScript', level: 70, category: 'Web Development', color: 'bg-yellow-500' },
    { name: 'React', level: 75, category: 'Web Development', color: 'bg-cyan-500' },
    { name: 'MySQL', level: 80, category: 'Database', color: 'bg-orange-500' },
    { name: 'PostgreSQL', level: 70, category: 'Database', color: 'bg-indigo-500' },
    { name: 'System Analysis', level: 85, category: 'Analysis', color: 'bg-green-500' },
    { name: 'Problem Solving', level: 90, category: 'Soft Skills', color: 'bg-pink-500' },
    { name: 'Team Collaboration', level: 85, category: 'Soft Skills', color: 'bg-teal-500' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillsByCategory = (category: string) => 
    skills.filter(skill => skill.category === category);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto mb-8"></div>
          <p className="text-lg text-tech-gray/70 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and competencies developed through 
            academic study, practical projects, and hands-on experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills by Category */}
          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-tech-gray mb-6 flex items-center">
                  {category}
                  <span className="ml-2 text-sm text-tech-gray/60">
                    ({getSkillsByCategory(category).length} skills)
                  </span>
                </h3>
                
                <div className="space-y-4">
                  {getSkillsByCategory(category).map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-tech-gray">{skill.name}</span>
                        <span className="text-sm text-tech-gray/70">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skills.indexOf(skill) * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Visual Skills Representation */}
          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-lg h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-tech-gray mb-8 text-center">
                Skill Proficiency Overview
              </h3>
              
              {/* Circular skill visualization */}
              <div className="relative w-80 h-80 mx-auto">
                {skills.slice(0, 6).map((skill, index) => {
                  const angle = (index / 6) * 360;
                  const radius = 120;
                  const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                  
                  return (
                    <div
                      key={skill.name}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110"
                      style={{
                        left: `50%`,
                        top: `50%`,
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                        transitionDelay: isVisible ? `${index * 200}ms` : '0ms',
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      <div className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {skill.level}%
                      </div>
                      <div className="text-center mt-2 text-xs font-medium text-tech-gray">
                        {skill.name}
                      </div>
                    </div>
                  );
                })}
                
                {/* Center element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-syntax-green rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl">
                    IT
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-tech-gray/70 text-sm">
                  Continuously learning and improving through practice and real-world projects
                </p>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-electric-blue/20 rounded-lg animate-float-gentle"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-syntax-green/30 rounded-full animate-float-gentle" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center bg-gradient-to-r from-electric-blue to-syntax-green rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Continuous Learning Mindset</h3>
          <p className="text-white/90 max-w-2xl mx-auto">
            "The technology landscape evolves rapidly, and I'm committed to staying current with industry trends, 
            best practices, and emerging technologies. Every project is an opportunity to learn something new."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
