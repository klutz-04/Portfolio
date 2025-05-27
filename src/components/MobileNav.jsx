import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const MobileNav = ({ isOpen, setIsOpen, navItems }) => {
  const { darkMode } = useTheme();

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-all transform duration-300 ease-in-out
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300
          ${isOpen ? 'opacity-50' : 'opacity-0'}
        `}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <nav
        className={`absolute right-0 top-0 w-64 h-full transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          ${darkMode ? 'bg-gray-900' : 'bg-white'}
          shadow-xl overflow-y-auto
        `}
        role="menu"
      >
        {/* Close button */}
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button
            onClick={() => setIsOpen(false)}
            className={`p-2 rounded-lg transition-colors
              focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2
              ${darkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}
              ${darkMode
                ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }
            `}
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation items */}
        <div className="pt-20 pb-6 px-4">
          <div className="flex flex-col space-y-2" role="menu">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                spy={true}
                activeClass="mobile-nav-active"
                className={`mobile-nav-link block px-4 py-3 text-lg font-medium rounded-lg transition-colors
                  focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2
                  ${darkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}
                  ${darkMode
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsOpen(false);
                  }
                }}
                aria-label={item.ariaLabel}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <style jsx global>{`
        .mobile-nav-active {
          color: ${darkMode ? '#e879f9' : '#a21caf'} !important;
          background-color: ${darkMode ? 'rgba(107, 33, 168, 0.1)' : 'rgba(219, 39, 119, 0.1)'};
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-nav-link {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileNav; 