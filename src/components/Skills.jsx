import React from 'react';
import { useTheme } from '../context/ThemeContext';
import SkillCategory from './SkillCategory';
import { skillCategories } from '../data/skills';

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section id="skills" className={`py-16 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${
          darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
        }`}>
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;