
import React from 'react';
import { DOCTOR_NAME, WHATSAPP_NUMBER, PHONE_NUMBER } from '../constants';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappMsg = encodeURIComponent("Bonjour, je souhaite prendre rendez-vous.");

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl hidden md:block"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl hidden md:block"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left space-y-6 md:space-y-8">
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase">
            Votre Rétablissement Commence Ici
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight px-2 sm:px-0">
            Cabinet de Kinésithérapie <br />
            <span className="text-blue-600 font-bold">{DOCTOR_NAME}</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed px-2 sm:px-0">
            Spécialiste en rééducation fonctionnelle et kinésithérapie du sport à Témara. Reprenez le contrôle de votre mobilité avec nos technologies de pointe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start px-2 sm:px-0">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#22c35e] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold flex items-center justify-center gap-2 md:gap-3 transition-all transform hover:-translate-y-1 shadow-lg text-sm md:text-base"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              <span className="whitespace-nowrap">Prendre RDV via WhatsApp</span>
            </a>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="bg-white hover:bg-gray-50 text-blue-900 border-2 border-blue-100 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold flex items-center justify-center gap-2 md:gap-3 transition-all transform hover:-translate-y-1 shadow-md text-sm md:text-base"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="whitespace-nowrap">Appeler Maintenant</span>
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 md:gap-8 pt-2 md:pt-4">
            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl font-bold text-blue-900">10+</p>
              <p className="text-xs md:text-sm text-gray-500 font-medium">Années d'Expérience</p>
            </div>
            <div className="w-px h-8 md:h-10 bg-gray-200"></div>
            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl font-bold text-blue-900">1000+</p>
              <p className="text-xs md:text-sm text-gray-500 font-medium">Patients Satisfaits</p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0">
          <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
            <img 
              src="https://popcard-api.getpopcard.com/images/collaborator-HATIM-JORIO-1708091158635.jpeg" 
              alt="Physiotherapy session" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl z-20 max-w-[180px] md:max-w-[200px] hidden lg:block">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-gray-500 uppercase">Consultation Ouverte</span>
            </div>
            <p className="text-xs md:text-sm text-gray-700 font-semibold">Prenez votre premier rendez-vous aujourd'hui.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
