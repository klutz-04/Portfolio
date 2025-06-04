import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Business Analysis',
  'Stakeholder Collaboration',
  'SQL',
  'Jira',
  'Confluence',
  'Agile',
  'System Analysis',
  'Payments Domain',
  'Process Improvement',
  'Requirements Gathering',
  'Data Analysis',
  'Project Management',
  'Risk Assessment',
  'Financial Analysis',
  'Business Strategy',
  'Team Leadership'
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md"
              >
                <span className="text-gray-800 dark:text-white font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 