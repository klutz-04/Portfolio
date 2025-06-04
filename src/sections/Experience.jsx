import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Credit Counselor',
    company: 'CIBC',
    period: 'Nov 2022 – Present',
    location: 'Toronto, Canada',
    description: [
      'Lead business analysis for credit counseling initiatives',
      'Collaborate with cross-functional teams to improve credit processes',
      'Analyze and document business requirements for system enhancements',
      'Facilitate stakeholder meetings and training sessions'
    ]
  },
  {
    title: 'Business Consultant',
    company: 'Aranca',
    period: 'May 2019 – Mar 2021',
    location: 'Mumbai, India',
    description: [
      'Conducted market research and competitive analysis',
      'Developed business strategies and process improvements',
      'Created detailed business reports and presentations',
      'Managed client relationships and project deliverables'
    ]
  },
  {
    title: 'Business Analyst',
    company: 'Chep India',
    period: 'May 2018 – Sep 2018',
    location: 'Mumbai, India',
    description: [
      'Analyzed business processes and identified improvement areas',
      'Implemented cost-saving initiatives',
      'Created KPI dashboards and performance metrics',
      'Coordinated with global teams on process standardization'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Professional Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700" />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex md:justify-between items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4 gap-2">
                      <FaBriefcase className="text-primary" />
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                    </div>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.period} | {exp.location}
                    </p>
                    <ul className={`list-disc ${index % 2 === 0 ? 'md:mr-4' : 'ml-4'}`}>
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 