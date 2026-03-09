'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-secondary-200 sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200">
              <span className="font-bold text-white text-lg">GPA</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-secondary-600 -mt-1">Free & Accurate</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/gpa-calculators"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Calculators
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/blog"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/about"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/gpa-calculators/college-gpa-calculator"
              className="btn-primary text-sm"
            >
              Calculate GPA
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-secondary-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-45' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="bg-secondary-50 rounded-xl p-4 mt-2 space-y-2 shadow-lg border border-secondary-200">
            <Link
              href="/"
              className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg font-medium transition-all duration-200"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/gpa-calculators"
              className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg font-medium transition-all duration-200"
              onClick={closeMenu}
            >
              Calculators
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg font-medium transition-all duration-200"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg font-medium transition-all duration-200"
              onClick={closeMenu}
            >
              About
            </Link>
            <div className="pt-2 border-t border-secondary-200">
              <Link
                href="/gpa-calculators/college-gpa-calculator"
                className="block w-full btn-primary text-center text-sm"
                onClick={closeMenu}
              >
                Calculate GPA
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}




