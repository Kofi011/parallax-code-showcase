
import React from 'react';
import { GraduationCap, Briefcase, Code, Database } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'Information Technology Program',
      organization: 'University of Professional Studies, Accra (UPSA)',
      period: '2022 - Present',
      description: 'Pursuing a comprehensive IT degree with focus on software development, database management, system analysis, and emerging technologies.',
      highlights: [
        'Maintaining strong academic performance',
        'Active participation in coding projects',
        'Collaborative team assignments',
        'Research in digital transformation'
      ],
      icon: GraduationCap,
      color: 'from-electric-blue to-blue-600'
    },
    {
      id: 2,
      type: 'internship',
      title: 'IT Intern - Loan Digitization Project',
      organization: 'Financial Services Company',
      period: '2023 - 2024',
      description: 'Contributed to a major digital transformation initiative, helping to modernize traditional loan processing systems.',
      highlights: [
        'Analyzed existing loan processes',
        'Assisted in database design and optimization',
        'Collaborated with senior developers',
        'Gained real-world project experience'
      ],
      icon: Briefcase,
      color: 'from-syntax-green to-green-600'
    },
    {
      id: 3,
      type: 'project',
      title: 'Academic Project Portfolio',
      organization: 'UPSA - Coursework',
      period: '2022 - Present',
      description: 'Developed various academic projects showcasing programming skills, database management, and system design capabilities.',
      highlights: [
        'Student Management System (Java + MySQL)',
        'Web Development Projects',
        'Data Analysis Assignments',
        'Algorithm Implementation'
      ],
      icon: Code,
      color: 'from-code-orange to-orange-600'
    },
    {
      id: 4,
      type: 'learning',
      title: 'Self-Directed Learning',
      organization: 'Online Platforms & Personal Projects',
      period: 'Ongoing',
      description: 'Continuously expanding knowledge through online courses, tutorials, and personal coding projects.',
      highlights: [
        'Modern web development frameworks',
        'Advanced database concepts',
        'Software engineering best practices',
        'Industry trends and technologies'
      ],
      icon: Database,
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'education': return 'Education';
      case 'internship': return 'Professional Experience';
      case 'project': return 'Academic Projects';
      case 'learning': return 'Continuous Learning';
      default: return 'Experience';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto mb-8"></div>
          <p className="text-lg text-tech-gray/70 max-w-3xl mx-auto">
            My journey in Information Technology, from academic foundations to practical experience 
            and continuous learning in the ever-evolving tech landscape.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-syntax-green to-code-orange transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={experience.id}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-electric-blue rounded-full transform md:-translate-x-1/2 z-10">
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 interactive-element">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${experience.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="bg-gray-100 text-xs px-3 py-1 rounded-full text-tech-gray/70 font-medium">
                          {getTypeLabel(experience.type)}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-tech-gray mb-2">{experience.title}</h3>
                      <h4 className="text-electric-blue font-medium mb-2">{experience.organization}</h4>
                      <p className="text-sm text-tech-gray/60 mb-4">{experience.period}</p>
                      <p className="text-tech-gray/70 mb-4 leading-relaxed">{experience.description}</p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h5 className="font-medium text-tech-gray text-sm">Key Highlights:</h5>
                        <ul className="space-y-1">
                          {experience.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-tech-gray/70 flex items-start">
                              <span className="w-1.5 h-1.5 bg-electric-blue rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Years of Study', value: '2+' },
            { label: 'Projects Completed', value: '10+' },
            { label: 'Technologies Learned', value: '15+' },
            { label: 'Passion Level', value: '100%' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
              <div className="text-3xl font-bold text-electric-blue mb-2">{stat.value}</div>
              <div className="text-sm text-tech-gray/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Future aspirations */}
        <div className="mt-16 bg-gradient-to-r from-tech-gray to-gray-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            As I continue my journey in Information Technology, I'm excited about upcoming opportunities 
            to apply my skills in real-world scenarios, contribute to innovative projects, and make a 
            positive impact in the tech industry.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Full Stack Development', 'AI & Machine Learning', 'Cloud Computing', 'Tech Leadership'].map((goal) => (
              <span key={goal} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                {goal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
