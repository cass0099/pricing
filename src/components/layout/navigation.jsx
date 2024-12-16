import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Introduction' },
    { path: '/performance-pricing', label: 'New Pricing Curves' },
    { path: '/value-pricing', label: 'Value-Based Pricing' },
    { path: '/demand-pricing', label: 'Demand-Based Pricing' },
    { path: '/subgeo-pricing', label: 'Subregional Pricing' },
    { path: '/measuring-performance', label: 'Measuring Performance' }
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav') && !event.target.closest('button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, setIsOpen]);

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location, setIsOpen]);

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-gray-800/30 lg:hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <nav className={`
        fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-40 w-[280px] 
        transition-transform duration-300 ease-in-out lg:shadow-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Contents</h2>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-3 space-y-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                const number = (index + 1).toString().padStart(2, '0');
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      flex items-center gap-4 px-3 py-2 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                  >
                    <span className={`
                      text-sm font-medium w-6 
                      ${isActive ? 'text-blue-600' : 'text-gray-400'}
                    `}>
                      {number}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;