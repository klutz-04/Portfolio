import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/projects';

const ProjectCard = ({ project }) => {
  const { darkMode } = useTheme();

  return (
    <div 
      className={`rounded-lg p-6 transition-all duration-300 h-full ${
        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
      } shadow-lg hover:shadow-xl`}
    >
      <div className="flex flex-col h-full">
        <h3 className={`text-xl font-bold mb-3 ${
          darkMode ? 'text-fuchsia-400' : 'text-fuchsia-600'
        }`}>
          {project.title}
        </h3>
        
        <p className={`text-base mb-4 flex-grow ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center mt-4 text-sm font-medium ${
              darkMode 
                ? 'text-fuchsia-400 hover:text-fuchsia-300' 
                : 'text-fuchsia-600 hover:text-fuchsia-700'
            } transition-colors`}
          >
            View Project
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <section 
      id="projects" 
      className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className={`text-3xl font-bold mb-12 text-center ${
          darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
        }`}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 