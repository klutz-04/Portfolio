import React from 'react';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/images/SSK-pro.jpeg';

const About = () => {
  const { darkMode } = useTheme();

  const contactInfo = {
    name: "Sheethal Shivakumar",
    location: "Ontario, Canada",
    phone: "416-831-9167",
    email: "shivakumarsheethal@gmail.com",
    linkedin: "https://www.linkedin.com/in/sheethal-shivakumar/",
    github: "https://github.com/sheethal5shivakumar"
  };

  return (
    <section 
      name="about"
      id="about" 
      className={`min-h-screen pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24
        ${darkMode 
          ? 'bg-gray-900 text-white' 
          : 'bg-white text-gray-800'
        }
        transition-colors duration-300
      `}
    >
      <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-screen-xl">
        <div className="max-w-screen-lg mx-auto">
          {/* Profile Section - Image and Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Profile Image */}
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative rounded-full overflow-hidden border-4 border-fuchsia-500 shadow-lg">
              <img
                src={profileImage}
                alt="Sheethal Shivakumar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${
                darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
              }`}>
                {contactInfo.name}
              </h1>
              <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-6 text-sm md:text-base justify-center md:justify-start">
                <span className="flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {contactInfo.location}
                </span>
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-fuchsia-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {contactInfo.phone}
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-fuchsia-600 transition-colors break-all md:break-normal"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {contactInfo.email}
                </a>
                <a 
                  href={contactInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-fuchsia-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href={contactInfo.github}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-fuchsia-600 transition-colors"
                  aria-label="Visit my GitHub profile"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary - 2 Column Layout on Desktop */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="mb-8 lg:mb-0">
              <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 ${
                darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
              }`}>
                Professional Summary
              </h2>
              <p className={`text-sm md:text-base lg:text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Results-oriented Analyst/Project Manager with over two years of experience in data analysis, business process 
                improvement, system implementation, and project coordination. Proven ability to translate business requirements into 
                functional and technical specifications.
              </p>
            </div>
            <div>
              <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 ${
                darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
              }`}>
                Core Competencies
              </h2>
              <p className={`text-sm md:text-base lg:text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Skilled in supporting enterprise data workflows, data validation, and fostering cross-functional 
                collaboration in Agile environments. Proficient in SQL, Python, Excel, Power BI, Tableau, and JIRA. 
                Currently advancing expertise in databases, software systems, and application development via a Postgraduate Certificate. 
                Familiar with Basel Frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;