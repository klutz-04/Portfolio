import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' && !darkMode) {
      toggleTheme();
    }
  }, []);

  // Save theme preference to localStorage
  const handleToggle = () => {
    toggleTheme();
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative p-2 rounded-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2
        ${darkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}
        ${darkMode 
          ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }
      `}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <svg
          className={`absolute inset-0 w-6 h-6 transition-transform duration-300 ${
            darkMode ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        
        {/* Moon icon */}
        <svg
          className={`absolute inset-0 w-6 h-6 transition-transform duration-300 ${
            darkMode ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  );
};

export default ThemeToggle; 