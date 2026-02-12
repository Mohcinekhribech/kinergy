
import React from 'react';
import { CLINIC_NAME, DOCTOR_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-4 md:mb-6">
          <img 
            src="/assets/logo-icon.png" 
            alt="KINENERGY Logo" 
            className="h-6 md:h-8 w-auto"
          />
          <span className="font-bold text-blue-900 uppercase tracking-wider text-sm md:text-base">{CLINIC_NAME}</span>
        </div>
        <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-4 px-2">
          Expert en rééducation fonctionnelle et physiothérapie à Témara.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8">
           <a href="#home" className="text-gray-400 hover:text-blue-600 transition-colors text-sm md:text-base">Accueil</a>
           <a href="#services" className="text-gray-400 hover:text-blue-600 transition-colors text-sm md:text-base">Services</a>
           <a href="#technologies" className="text-gray-400 hover:text-blue-600 transition-colors text-sm md:text-base">Technologies</a>
           <a href="#contact" className="text-gray-400 hover:text-blue-600 transition-colors text-sm md:text-base">Contact</a>
        </div>
        <p className="text-gray-400 text-xs px-2">
          &copy; {currentYear} {DOCTOR_NAME}. Tous droits réservés. <br className="sm:hidden" /> Site conçu pour une expérience patient optimale.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
