
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Le Cabinet</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950">Notre Environnement de Soins</h3>
          <p className="text-gray-600 text-lg">
            Découvrez nos installations modernes conçues pour votre confort et une rééducation optimale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={img} 
                alt={`Cabinet El Mhir image ${idx + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
