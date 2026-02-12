
import React from 'react';
import { TECHNOLOGIES } from '../constants';
import { Check } from 'lucide-react';

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm">Équipement de Pointe</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 px-2 sm:px-0">Technologies & Matériel Médical</h3>
          <p className="text-gray-600 text-base md:text-lg px-2 sm:px-0">
            Nous investissons dans les meilleures machines au monde pour garantir une récupération plus rapide, plus sûre et moins douloureuse.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.id} className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:scale-[1.02] transition-transform">
              <div className="h-48 md:h-56 overflow-hidden">
                <img src={tech.imageUrl} alt={tech.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h4 className="text-xl md:text-2xl font-bold text-blue-950 mb-2 md:mb-3">{tech.name}</h4>
                <p className="text-gray-600 mb-4 md:mb-6 flex-grow text-sm md:text-base">{tech.description}</p>
                <div className="space-y-2">
                  <p className="font-bold text-blue-700 text-xs md:text-sm uppercase tracking-wider mb-2">Bénéfices :</p>
                  {tech.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="mt-0.5 md:mt-1 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500" />
                      </div>
                      <span className="text-xs md:text-sm text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
