import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { darkMode } = useTheme();
  const [expandedJobs, setExpandedJobs] = useState({});

  const toggleJob = (index) => {
    setExpandedJobs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      title: 'Associate Project Manager',
      company: 'Unitedlex',
      location: 'Bengaluru, India',
      period: 'Sept 2023 to Apr 2024',
      summary: 'Led project management and data analysis initiatives, focusing on eDiscovery platforms and client deliverables.',
      highlights: [
        'Managed end-to-end project lifecycle for eDiscovery platforms using Agile methodologies',
        'Created interactive Power BI dashboards for tracking project metrics and team productivity',
        'Handled document processing, search queries, and metadata indexing through Relativity',
        'Utilized JIRA for project tracking and maintained comprehensive documentation'
      ]
    },
    {
      title: 'Data Analyst',
      company: 'Consilio LLC',
      location: 'Bengaluru, India',
      period: 'May 2021 to Sept 2023',
      summary: 'Specialized in data operations and analysis, focusing on database management and visualization tools.',
      highlights: [
        'Collaborated with Data Mapping team to process and host third-party datasets using SQL Server',
        'Recognized as "Best Team" during Annual Consilio World Event for exceptional performance',
        'Developed Power BI dashboards for dataset analysis and opportunity identification',
        'Managed data loading operations in Relativity and Sightline platforms'
      ]
    }
  ];

  const education = [
    {
      degree: 'Postgraduate in Computer Software & Database Development',
      institution: 'Loyalist College',
      date: 'December 2025'
    },
    {
      degree: 'Post Graduate Program in Data Science',
      institution: 'IIBM',
      date: 'August 2021'
    },
    {
      degree: 'B.Tech in Information Science & Engineering',
      institution: 'Nitte University',
      date: 'August 2020'
    }
  ];

  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Education Section - Horizontal */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
          }`}>
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                } shadow-lg transition-all duration-300 hover:shadow-xl`}
              >
                <h3 className={`text-lg font-bold mb-2 ${
                  darkMode ? 'text-fuchsia-400' : 'text-fuchsia-600'
                }`}>
                  {edu.degree}
                </h3>
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {edu.institution}
                </p>
                <p className={`text-sm mt-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {edu.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section - Expandable */}
        <div>
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
          }`}>
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                } shadow-lg transition-all duration-300 hover:shadow-xl`}
              >
                <div 
                  className="flex flex-col md:flex-row md:items-center md:justify-between cursor-pointer"
                  onClick={() => toggleJob(index)}
                >
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-xl font-bold ${
                        darkMode ? 'text-fuchsia-400' : 'text-fuchsia-600'
                      }`}>
                        {exp.title}
                      </h3>
                      <button 
                        className={`p-2 rounded-full transition-transform duration-300 ${
                          expandedJobs[index] ? 'rotate-180' : ''
                        } ${
                          darkMode ? 'text-fuchsia-400' : 'text-fuchsia-600'
                        }`}
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
                    <p className="text-lg font-medium mt-1">{exp.company}</p>
                    <p className={`text-sm mt-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.location} | {exp.period}
                    </p>
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedJobs[index] ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <p className={`text-base mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {exp.summary}
                  </p>

                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <p 
                        key={idx} 
                        className={`text-sm flex items-start ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        <span className="mr-2">•</span>
                        {highlight}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;