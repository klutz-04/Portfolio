import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { darkMode } = useTheme();
  const experiences = [
    {
      title: 'Associate Project Manager',
      company: 'Unitedlex',
      location: 'Bengaluru, India',
      period: 'Sept 2023 to Apr 2024',
      responsibilities: [
        'Interfaced with internal and client stakeholders to gather business requirements, document workflows, and track deliverables using Agile methodologies.',
        'Converted high-level business needs into actionable tasks; created and maintained documentation including STRs and project plans.',
        'Supported systems integration and end-to-end project lifecycle for eDiscovery platforms with quality assurance processes.',
        'Managed search queries, metadata indexing, and document production through platforms like Relativity and Excel.',
        'Utilized Power BI to create interactive dashboards for tracking project metrics, task completion rates, and team productivity.',
        'Performed document TIFFing/OCR and managed search queries, indexes, and Search Term Reports (STRs).',
        'Leveraged JIRA to monitor progress, resolve issues, and maintain project traceability.',
        'Provided client support with attention to details for hosted applications and contributed to processing documentation and internal communication.'
      ]
    },
    {
      title: 'Data Analyst',
      company: 'Consilio LLC',
      location: 'Bengaluru, India',
      period: 'May 2021 to Sept 2023',
      responsibilities: [
        'Collaborated with the Data Mapping team under the Data Operations division, leveraging Microsoft SQL Server, Microsoft Excel, Power BI to process and host third-party datasets into Consilio\'s internal databases.',
        'Recognized as part of the "Best Team" during the Annual Consilio World Event for exceptional performance and collaboration.',
        'Created Power BI dashboards to analyze dataset types and identify opportunities for acquiring additional relevant data.',
        'Collaborated with cross-functional teams to process and map complex third-party datasets into internal databases using SQL and Excel.',
        'Facilitated data ingestion, cleansing, load file generation, and validation to support high-volume eDiscovery and litigation support.',
        'Facilitated seamless coordination between onsite and offshore teams to manage project deliverables and ensure timely, accurate data delivery in line with client requirements.',
        'Developed and maintained Power BI dashboards to visualize project KPIs, workload distribution, and client deliverable timelines.',
        'Managed data loading and administrative operations in Relativity and Sightline (Consilio\'s proprietary platform), including searches, workspace setup, TIFFing, and export functionalities.',
        'Supported project managers by handling custom tasks aligned with business priorities, ensuring efficient data workflows and timely client deliverables.'
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
    <section id="experience" className={`py-16 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 ${
            darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
          }`}>
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`border-l-4 border-fuchsia-600 pl-4 ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } rounded-lg p-6 shadow-lg`}>
                <h3 className="font-bold text-lg sm:text-xl mb-2">
                  {exp.title} – {exp.company}
                </h3>
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {exp.location} | {exp.period}
                </p>
                <ul className={`list-disc list-inside space-y-2 text-sm sm:text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${
            darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
          }`}>
            Education
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((edu, index) => (
              <div key={index} className={`p-4 rounded-lg ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-lg`}>
                <h3 className="font-semibold mb-2">{edu.degree}</h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {edu.institution} | {edu.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;