
import React from 'react';
import { GraduationCap, Code, Database, Briefcase } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    { icon: Code, name: 'Programming', languages: ['Python', 'Java', 'C++', 'JavaScript'] },
    { icon: Database, name: 'Database', technologies: ['MySQL', 'PostgreSQL', 'Data Analysis'] },
    { icon: GraduationCap, name: 'Academic', subjects: ['Software Engineering', 'System Analysis', 'Web Development'] },
    { icon: Briefcase, name: 'Experience', areas: ['Loan Digitization', 'Team Projects', 'Problem Solving'] }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto mb-8"></div>
          <p className="text-lg text-tech-gray/70 max-w-3xl mx-auto">
            A passionate IT student at the University of Professional Studies, Accra (UPSA), 
            dedicated to learning cutting-edge technologies and solving real-world problems through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-electric-blue to-syntax-green rounded-full p-1">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <div className="text-8xl font-bold text-tech-gray">JD</div>
              </div>
            </div>
            {/* Floating elements around profile */}
            <div className="absolute top-10 -right-5 w-12 h-12 bg-code-orange/20 rounded-lg animate-float-gentle"></div>
            <div className="absolute bottom-20 -left-10 w-8 h-8 bg-syntax-green/30 rounded-full animate-float-gentle" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 -right-10 w-6 h-6 border-2 border-electric-blue/40 rotate-45 animate-float-gentle" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-tech-gray mb-6">My Journey</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-electric-blue pl-6">
                <h4 className="font-semibold text-tech-gray">Currently Studying</h4>
                <p className="text-tech-gray/70">Information Technology at UPSA</p>
                <p className="text-sm text-tech-gray/60">Focusing on software development, database management, and system analysis</p>
              </div>
              <div className="border-l-4 border-syntax-green pl-6">
                <h4 className="font-semibold text-tech-gray">Recent Experience</h4>
                <p className="text-tech-gray/70">Internship - Loan Digitization Project</p>
                <p className="text-sm text-tech-gray/60">Contributed to digital transformation initiatives in financial services</p>
              </div>
              <div className="border-l-4 border-code-orange pl-6">
                <h4 className="font-semibold text-tech-gray">Future Goals</h4>
                <p className="text-tech-gray/70">Full Stack Developer & Tech Innovator</p>
                <p className="text-sm text-tech-gray/60">Aspiring to build impactful digital solutions that make a difference</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 interactive-element group"
              >
                <div className="mb-4">
                  <IconComponent className="w-10 h-10 text-electric-blue group-hover:text-syntax-green transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-tech-gray mb-3">{skill.name}</h4>
                <div className="space-y-1">
                  {(skill.languages || skill.technologies || skill.subjects || skill.areas)?.map((item: string) => (
                    <span key={item} className="inline-block bg-gray-100 text-xs px-2 py-1 rounded-full text-tech-gray/70 mr-1 mb-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
