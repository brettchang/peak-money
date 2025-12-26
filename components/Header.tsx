import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/answers', label: 'Expert Picks' },
  { path: '/comparisons', label: 'Comparisons' },
  { path: '/news', label: 'News' },
  { path: '/faq', label: 'FAQ' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="border-b border-peak-black/10 sticky top-0 bg-[#F9F8F4] z-50">
      {/* Main Header */}
      <div className="py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center">
          {/* Left side - fixed width for balance */}
          <div className="flex-1 flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 cursor-pointer hover:text-peak-darkGray transition-colors" />
              ) : (
                <Menu className="w-6 h-6 cursor-pointer hover:text-peak-darkGray transition-colors" />
              )}
            </button>
          </div>

          {/* Center - Logo */}
          <Link to="/" className="text-center">
            <h1 className="text-4xl font-serif tracking-tight leading-none text-peak-black">
              Peak<span className="text-peak-darkGray/60 italic ml-1">Money</span>
            </h1>
            <p className="text-xs font-sans uppercase tracking-widest mt-1 text-peak-darkGray">
              Your Essential Money Briefing
            </p>
          </Link>

          {/* Right side - fixed width for balance */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            <button className="hidden md:block text-sm font-sans font-medium border-b border-peak-black pb-0.5 hover:border-transparent transition-all">
              Subscribe
            </button>
            <Search className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-t border-peak-black/5">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex justify-center space-x-8 py-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-sans transition-colors ${
                    location.pathname === link.path
                      ? 'text-peak-black font-semibold'
                      : 'text-peak-darkGray hover:text-peak-black'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-peak-black/10 bg-white">
          <ul className="py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-6 py-3 text-base font-sans transition-colors ${
                    location.pathname === link.path
                      ? 'text-peak-black font-semibold bg-peak-gray'
                      : 'text-peak-darkGray hover:bg-peak-gray'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
