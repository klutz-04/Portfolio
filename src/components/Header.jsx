import React, { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';
import ScrollToTop from './ScrollToTop';

const Header = () => {
  const { darkMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Register react-scroll events
    Events.scrollEvent.register('begin', () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const navItems = [
    { to: 'about', label: 'About', ariaLabel: 'Go to About section' },
    { to: 'skills', label: 'Skills', ariaLabel: 'Go to Skills section' },
    { to: 'projects', label: 'Projects', ariaLabel: 'Go to Projects section' },
    { to: 'contact', label: 'Contact', ariaLabel: 'Go to Contact section' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${darkMode 
            ? 'bg-gray-900 text-white' 
            : 'bg-white text-gray-900'
          }
          ${isScrolled 
            ? 'shadow-lg bg-opacity-95 backdrop-blur-sm' 
            : 'bg-opacity-90'
          }
        `}
        role="banner"
      >
        <nav 
          className="container mx-auto px-4 md:px-12 lg:px-24 max-w-screen-xl"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Name */}
            <Link
              to="about"
              smooth={true}
              duration={800}
              offset={-80}
              className={`text-lg md:text-xl lg:text-2xl font-bold cursor-pointer transition-colors
                focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2
                ${darkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}
                ${darkMode 
                  ? 'text-white hover:text-fuchsia-400' 
                  : 'text-gray-900 hover:text-fuchsia-600'
                }
              `}
              aria-label="Go to top of page"
              role="link"
              tabIndex={0}
            >
              Sheethal Shivakumar
            </Link>
            
            <div className="flex items-center gap-2 md:gap-4">
              {/* Desktop Navigation */}
              <div 
                className="hidden lg:flex items-center gap-6"
                role="menubar"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    spy={true}
                    activeClass="nav-link-active"
                    className={`nav-link relative px-3 py-2 text-base font-medium cursor-pointer transition-all
                      focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2
                      ${darkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}
                      ${darkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                      }`}
                    aria-label={item.ariaLabel}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors
                  focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2
                  ${darkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}
                  ${darkMode
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }
                `}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">
                  {isMobileMenuOpen ? "Close menu" : "Open menu"}
                </span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen}
        navItems={navItems}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16 md:h-20" aria-hidden="true" />

      {/* Add global styles for nav links */}
      <style jsx global>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: ${darkMode ? '#e879f9' : '#a21caf'};
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after,
        .nav-link-active::after {
          width: calc(100% - 1.5rem);
        }

        .nav-link-active {
          color: ${darkMode ? '#e879f9' : '#a21caf'} !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-link::after {
            transition: none;
          }
        }

        /* Prevent scrolling when mobile menu is open */
        body.mobile-menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Header;