import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    school: 'Centennial College',
    degree: 'Project Management',
    year: '2022',
    location: 'Toronto, Canada'
  },
  {
    school: 'Seneca College',
    degree: 'Business Analytics',
    year: '2021',
    location: 'Toronto, Canada'
  },
  {
    school: 'NMIMS University',
    degree: 'MBA Technology Management',
    year: '2017–2019',
    location: 'Mumbai, India'
  },
  {
    school: 'NMIMS University',
    degree: 'B.Tech Mechanical Engineering',
    year: '2014–2018',
    location: 'Mumbai, India'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <FaGraduationCap className="text-primary text-2xl mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-semibold">{edu.school}</p>
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <p>{edu.year}</p>
                  <p>{edu.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 