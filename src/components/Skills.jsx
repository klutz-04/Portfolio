import React from 'react';
import { useTheme } from '../context/ThemeContext';
import SkillCategory from './SkillCategory';
import { skillCategories } from '../data/skills';

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section id="skills" className={`py-16 md:py-20 lg:py-24 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center ${
            darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
          }`}>
            Skills & Expertise
          </h2>
          <p className={`text-center mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Click on each category to explore my technical and professional capabilities
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                category={category.category}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;