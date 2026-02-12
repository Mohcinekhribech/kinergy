
import React from 'react';
import { WHY_CHOOSE_US } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-950 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 opacity-10 hidden md:block">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="40" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-xs md:text-sm">Pourquoi nous choisir ?</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">L'excellence au cœur de votre rééducation</h3>
            <p className="text-blue-100 text-base md:text-lg opacity-80 leading-relaxed">
              Nous combinons expertise clinique, empathie et innovation pour vous offrir les meilleurs soins de kinésithérapie à Témara. Notre objectif est votre autonomie.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 pt-2 md:pt-4">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div key={idx} className="space-y-2 md:space-y-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center">
                    <div className="scale-75 md:scale-100">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg md:text-xl">{item.title}</h4>
                  <p className="text-blue-100 opacity-70 text-xs md:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-blue-900/40 p-1 rounded-[40px] backdrop-blur-sm border border-blue-800/50">
                <img 
                    src="https://lh3.googleusercontent.com/p/AF1QipNLnDIleclK2HdGBtRwmVxq5B_M3CwTi7i9LqVU=s1360-w1360-h1020-rw" 
                    alt="Clinical excellence" 
                    className="rounded-[36px] w-full"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
