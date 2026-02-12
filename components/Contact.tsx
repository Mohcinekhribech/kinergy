
import React from 'react';
import { DOCTOR_NAME, PHONE_NUMBER, WHATSAPP_NUMBER, ADDRESS } from '../constants';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

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
                <div className="bg-blue-100 p-2.5 md:p-3 rounded-lg md:rounded-xl flex-shrink-0">
                  <MapPin className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-blue-900 text-sm md:text-base mb-1">Adresse</h4>
                  <p className="text-gray-600 text-sm md:text-base break-words">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm border border-blue-50">
                <div className="bg-blue-100 p-2.5 md:p-3 rounded-lg md:rounded-xl flex-shrink-0">
                  <Phone className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-sm md:text-base mb-1">Téléphone</h4>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-gray-600 font-semibold text-sm md:text-base hover:text-blue-600 transition-colors">{PHONE_NUMBER}</a>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm border border-blue-50">
                <div className="bg-blue-100 p-2.5 md:p-3 rounded-lg md:rounded-xl flex-shrink-0">
                  <Clock className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
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
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
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
