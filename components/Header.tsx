
import React, { useState, useEffect } from 'react';
import { CLINIC_NAME, PHONE_NUMBER } from '../constants';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Close mobile menu on scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Don't close if clicking on the toggle button or inside the menu
      if (target.closest('button[aria-label="Toggle menu"]') || target.closest('.mobile-menu')) {
        return;
      }
      // Close if clicking outside the header
      if (!target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    // Use a small delay to avoid immediate closure
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Cabinet', href: '#gallery' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-[50] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2 md:py-3' : 'bg-transparent py-3 md:py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src="/assets/logo icon.png" 
            alt="KINENERGY Logo" 
            className="h-8 sm:h-10 w-auto"
          />
          <span className={`font-bold text-sm sm:text-base md:text-lg block ${isScrolled ? 'text-blue-900' : 'text-blue-900'}`}>
            {CLINIC_NAME}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base">
              {link.name}
            </a>
          ))}
          <a href={`tel:${PHONE_NUMBER}`} className="bg-blue-600 text-white px-4 lg:px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm lg:text-base">
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">{PHONE_NUMBER}</span>
            <span className="lg:hidden">Appeler</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-blue-900 p-2 z-50 relative" 
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[45]"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          {/* Menu */}
          <div 
            className="mobile-menu md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 flex flex-col space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto z-[60] animate-slideDown"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-800 text-base font-medium py-2 border-b border-gray-100 last:border-0 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center mt-2 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Appeler Maintenant
            </a>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
