import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1sk9HbQIGO5ebwYTP1EZeL16c3uoLJq73/view?usp=sharing', '_blank');
  };

  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-secondary">
            Kshitinjay Kumar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleResumeClick}
              className="flex items-center gap-2 text-textSecondary hover:text-secondary transition-colors"
              title="Download Resume"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-textPrimary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-textSecondary hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleResumeClick();
                  setIsOpen(false);
                }}
                className="flex items-center px-3 py-2 text-textSecondary hover:text-secondary transition-colors"
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 