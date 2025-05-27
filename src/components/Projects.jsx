import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/projects';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { darkMode } = useTheme();

  return (
    <div 
      className={`rounded-lg shadow-lg transition-all duration-300 h-full flex flex-col ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="p-4 md:p-6 lg:p-8 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3">{project.title}</h3>
        
        {/* Project Description */}
        <div className="relative flex-grow">
          <p className={`text-sm md:text-base lg:text-lg mb-4 ${
            isExpanded ? '' : 'line-clamp-3'
          } ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {project.description}
          </p>
          
          {/* Gradient Overlay */}
          {!isExpanded && (
            <div className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t ${
              darkMode ? 'from-gray-800' : 'from-white'
            } to-transparent`} />
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs md:text-sm rounded-full ${
                darkMode 
                  ? 'bg-gray-700 text-gray-200' 
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-auto pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-sm md:text-base font-medium ${
              darkMode 
                ? 'text-fuchsia-400 hover:text-fuchsia-300' 
                : 'text-fuchsia-600 hover:text-fuchsia-700'
            } transition-colors`}
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
          
          {project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm md:text-base font-medium flex items-center ${
                darkMode 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-700'
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
    </div>
  );
};

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <section 
      name="projects"
      id="projects" 
      className={`min-h-screen pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24
        ${darkMode 
          ? 'bg-gray-900 text-white' 
          : 'bg-gray-50 text-gray-900'
        }
        transition-colors duration-300
      `}
    >
      <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-screen-xl">
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 lg:mb-16 text-center ${
          darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
        }`}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-screen-lg mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 