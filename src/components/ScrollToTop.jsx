import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: true
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition-all duration-300 transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        ${darkMode 
          ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
          : 'bg-white hover:bg-gray-100 text-gray-800'
        }
        focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2
        ${darkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}
      `}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop; 