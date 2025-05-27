import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

const SkillCategory = ({ category, skills }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className="mb-6">
      <h3 className={`text-xl font-semibold mb-3 ${
        darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
      }`}>
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${
              darkMode
                ? 'bg-gray-800 text-gray-200'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

SkillCategory.propTypes = {
  category: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SkillCategory; 