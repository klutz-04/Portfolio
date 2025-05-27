// src/components/Contact.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import resumePDF from '../assets/resume/Sheethal_Shivakumar_Resume.pdf';

const Contact = () => {
  const { darkMode } = useTheme();
  const contactInfo = {
    email: 'shivakumarsheethal@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sheethal-shivakumar/',
    github: 'https://github.com/sheethal5shivakumar',
  };

  return (
    <section id="contact" className={`py-16 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-8 text-center ${
          darkMode ? 'text-fuchsia-400' : 'text-fuchsia-700'
        }`}>
          What's Next?
        </h2>
        
        {/* Future Opportunities Section */}
        <div className="text-center mb-12">
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm actively seeking opportunities as a Data Analyst or Business Analyst where I can leverage my analytical skills 
            and business background. I'm particularly interested in projects involving Python, SQL, Power BI/Tableau, and Excel.
          </p>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Let's connect and discuss how we can work together to create impactful solutions!
          </p>
        </div>

        {/* Resume Download Section */}
        <div className="mb-16 text-center">
          <h3 className={`text-2xl font-semibold mb-6 ${
            darkMode ? 'text-fuchsia-300' : 'text-fuchsia-800'
          }`}>
            Download My Resume
          </h3>
          <div className="group relative inline-block">
            <div className={`absolute inset-0 rounded-lg transition-all duration-300 group-hover:blur-sm ${
              darkMode ? 'bg-fuchsia-400' : 'bg-fuchsia-300'
            }`}></div>
            <a
              href={resumePDF}
              download="Sheethal_Shivakumar_Resume.pdf"
              className={`relative inline-flex items-center px-8 py-4 rounded-lg shadow-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-fuchsia-500 hover:bg-fuchsia-600 text-white hover:scale-105' 
                  : 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white hover:scale-105'
              }`}
            >
              <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-medium">Download Resume</span>
            </a>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col items-center space-y-8">
          <h3 className={`text-2xl font-semibold ${
            darkMode ? 'text-fuchsia-300' : 'text-fuchsia-800'
          }`}>
            Let's Connect
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className={`group flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-fuchsia-500' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-fuchsia-500 shadow-sm'
              }`}
              title="Email me"
            >
              <svg className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                darkMode ? 'text-fuchsia-300 group-hover:text-fuchsia-200' : 'text-fuchsia-700 group-hover:text-fuchsia-800'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className={`font-medium ${
                darkMode ? 'text-gray-200 group-hover:text-white' : 'text-gray-800 group-hover:text-gray-900'
              }`}>Email</span>
            </a>

            {/* LinkedIn */}
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-fuchsia-500' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-fuchsia-500 shadow-sm'
              }`}
              title="Visit LinkedIn Profile"
            >
              <svg className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                darkMode ? 'text-fuchsia-300 group-hover:text-fuchsia-200' : 'text-fuchsia-700 group-hover:text-fuchsia-800'
              }`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className={`font-medium ${
                darkMode ? 'text-gray-200 group-hover:text-white' : 'text-gray-800 group-hover:text-gray-900'
              }`}>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-fuchsia-500' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-fuchsia-500 shadow-sm'
              }`}
              title="Visit GitHub Profile"
            >
              <svg className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                darkMode ? 'text-fuchsia-300 group-hover:text-fuchsia-200' : 'text-fuchsia-700 group-hover:text-fuchsia-800'
              }`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className={`font-medium ${
                darkMode ? 'text-gray-200 group-hover:text-white' : 'text-gray-800 group-hover:text-gray-900'
              }`}>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;