
import React from 'react';
import { DOCTOR_NAME, PHONE_NUMBER, WHATSAPP_NUMBER, ADDRESS } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent("Bonjour, je souhaite prendre rendez-vous.")}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">Contact</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 md:mb-6">Parlons de votre santé</h3>
              <p className="text-gray-600 text-base md:text-lg">
                Vous avez des questions ou souhaitez prendre rendez-vous ? Notre équipe est disponible pour vous répondre et planifier votre première séance.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm border border-blue-50">
                <div className="bg-blue-100 rounded-lg md:rounded-xl flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                  <MapPin className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-blue-900 text-sm md:text-base mb-1">Adresse</h4>
                  <p className="text-gray-600 text-sm md:text-base break-words">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm border border-blue-50">
                <div className="bg-blue-100 rounded-lg md:rounded-xl flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                  <Phone className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-blue-900 text-sm md:text-base mb-1">Téléphone</h4>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-gray-600 font-semibold text-sm md:text-base hover:text-blue-600 transition-colors">{PHONE_NUMBER}</a>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm border border-blue-50">
                <div className="bg-blue-100 rounded-lg md:rounded-xl flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                  <Clock className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-blue-900 text-sm md:text-base mb-1">Horaires d'ouverture</h4>
                  <p className="text-gray-600 text-sm md:text-base">Lundi - Vendredi : 09h00 - 19h00</p>
                  <p className="text-gray-600 text-sm md:text-base">Samedi : 09h00 - 13h00</p>
                </div>
              </div>
            </div>

            <div className="pt-2 md:pt-4">
               <a 
                href={whatsappUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 md:gap-3 bg-[#25D366] text-white font-bold py-4 md:py-5 px-8 md:px-10 rounded-xl md:rounded-2xl hover:bg-[#22c35e] transition-all transform hover:-translate-y-1 shadow-lg text-sm md:text-base"
              >
                <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6" />
                Prendre RDV sur WhatsApp
              </a>
            </div>
          </div>

          <div className="h-[400px] md:h-[500px] lg:h-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.5!2d-6.9076!3d33.9281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda713d07307936d%3A0x5fb825874497fd6e!2sTemara%20mall%2C%202%20Av.%20Hassan%20II%2C%20T%C3%A9mara!5e0!3m2!1sfr!2sma!4v1736789000000!5m2!1sfr!2sma"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation KinEnergy - Témara"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
