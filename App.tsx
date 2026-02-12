
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  useEffect(() => {
    // Basic Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />

        <div className="fade-in">
          <Gallery />
        </div>
        
        <div className="fade-in">
          <About />
        </div>
        
        <div className="fade-in">
          <Services />
        </div>
        
        <div className="fade-in">
          <Technologies />
        </div>
        
        <div className="fade-in">
          <WhyUs />
        </div>
        
        <div className="fade-in">
          <Contact />
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
