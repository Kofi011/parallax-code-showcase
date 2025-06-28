import React from 'react';
import { Button } from "@/components/ui/button";
import { Code, Database, ArrowRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Interactive Portfolio Website",
      description: "A dynamic, parallax-scrolling portfolio showcasing modern web development skills with React, TypeScript, and advanced animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      featured: true,
      color: "from-electric-blue to-blue-600"
    },
    {
      id: 2,
      title: "Loan Digitization System",
      description: "Internship project focusing on digitizing traditional loan processes, improving efficiency and user experience in financial services.",
      technologies: ["Database Design", "System Analysis", "Process Optimization"],
      category: "System Analysis",
      featured: true,
      color: "from-syntax-green to-green-600"
    },
    {
      id: 3,
      title: "Student Management System",
      description: "Academic project for managing student records, grades, and academic progress with intuitive user interface and robust backend.",
      technologies: ["Java", "MySQL", "GUI Development"],
      category: "Desktop Application",
      featured: false,
      color: "from-code-orange to-orange-600"
    },
    {
      id: 4,
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for visualizing academic performance metrics and trends using modern data visualization techniques.",
      technologies: ["Python", "Data Visualization", "Statistical Analysis"],
      category: "Data Science",
      featured: false,
      color: "from-purple-500 to-purple-700"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto mb-8"></div>
          <p className="text-lg text-tech-gray/70 max-w-3xl mx-auto">
            A showcase of my journey in software development, from academic projects to real-world applications.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-tech-gray mb-8">Featured Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`relative bg-gradient-to-br ${project.color} rounded-2xl p-8 text-white overflow-hidden group interactive-element`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4">
                    {project.category.includes('Web') ? <Code size={100} /> : <Database size={100} />}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="inline-block bg-white/20 text-xs px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                  <p className="text-white/90 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-white/10 text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
                  >
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full animate-float-gentle"></div>
                <div className="absolute bottom-10 -left-6 w-12 h-12 bg-white/10 rotate-45 animate-float-gentle" style={{ animationDelay: '2s' }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-tech-gray mb-8">Academic & Learning Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 interactive-element group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`inline-block bg-gradient-to-r ${project.color} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                    {project.category}
                  </span>
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-electric-blue/10 transition-colors">
                    <Code className="w-4 h-4 text-tech-gray group-hover:text-electric-blue" />
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-tech-gray mb-3">{project.title}</h4>
                <p className="text-tech-gray/70 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-xs px-2 py-1 rounded-full text-tech-gray/70">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" className="text-electric-blue hover:text-electric-blue/80 p-0 h-auto">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-tech-gray/70 mb-6">Interested in collaborating or learning more about my work?</p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3 text-lg font-medium rounded-lg interactive-element"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
