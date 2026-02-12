
import React from 'react';
import { DOCTOR_NAME } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://popcard-api.getpopcard.com/images/a22313207d670b5f3b58e187fbfcc5f7.png" 
              alt="Dr. HATIM JORIO" 
              className="rounded-2xl md:rounded-3xl shadow-xl w-full"
            />
          </div>
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm">À Propos du Praticien</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950">Expertise & Passion au Service de votre Santé</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Le Dr. {DOCTOR_NAME} est un kinésithérapeute chevronné basé à Témara, spécialisé dans la rééducation fonctionnelle et la physiothérapie avancée.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Au sein de son cabinet, l'accent est mis sur une approche holistique et personnalisée, combinant des techniques manuelles expertes avec les dernières innovations technologiques mondiales (Tecar, Laser haute intensité).
            </p>
            <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4">
              {['Kinésithérapeute Diplômé d\'État', 'Spécialiste en Rééducation Sportive', 'Expert en Technologies de Physiothérapie', 'Approche centrée sur le patient'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-gray-800 font-medium text-sm md:text-base">
                  <CheckCircle2 className="text-blue-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
