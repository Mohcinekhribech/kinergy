
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("Bonjour, je souhaite prendre rendez-vous pour une séance de kinésithérapie.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 whitespace-nowrap hidden md:block">
        Prendre RDV
      </span>
    </a>
  );
};

export default WhatsAppButton;
