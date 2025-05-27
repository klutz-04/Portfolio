import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

const SkillCategory = ({ category, skills }) => {
  const { darkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className={`mb-6 rounded-lg p-4 transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900 hover:bg-gray-800' 
          : 'bg-white hover:bg-gray-50'
      } shadow-md hover:shadow-lg`}
    >
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className={`text-xl font-semibold ${
          darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
        }`}>
          {category}
        </h3>
        <button 
          className={`p-2 rounded-full transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          } ${
            darkMode ? 'text-fuchsia-400 hover:text-fuchsia-300' : 'text-fuchsia-600 hover:text-fuchsia-700'
          }`}
          aria-label={isExpanded ? 'Collapse skills' : 'Expand skills'}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Preview of skills (shown when collapsed) */}
      {!isExpanded && (
        <p className={`mt-2 text-sm ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {skills.slice(0, 3).join(', ')}
          {skills.length > 3 && ` and ${skills.length - 3} more...`}
        </p>
      )}

      {/* Full list of skills (shown when expanded) */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } hover:scale-105`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

SkillCategory.propTypes = {
  category: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SkillCategory; 