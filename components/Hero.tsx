
import React from 'react';
import { DOCTOR_NAME, WHATSAPP_NUMBER, PHONE_NUMBER } from '../constants';
import { Phone, ArrowRight } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

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
              <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
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
