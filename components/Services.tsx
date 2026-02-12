
import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm">Nos Services</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 px-2 sm:px-0">Spécialisations Thérapeutiques</h3>
          <p className="text-gray-600 text-base md:text-lg px-2 sm:px-0">
            Nous offrons une gamme complète de soins de rééducation pour répondre à vos besoins spécifiques et accélérer votre retour à une vie active.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = (LucideIcons as any)[service.icon];
            return (
              <div 
                key={service.id} 
                className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-blue-950 mb-3 md:mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
