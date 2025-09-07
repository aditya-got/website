
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in">
          <span className="text-brand-cyan">Aditya Carral</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Nomad Consultant <span className="text-brand-cyan">=></span> <span className="text-brand-yellow">The Future Of Work. Now.</span>
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Blending deep tech expertise with holistic insights from my nomadic & minimalist
          lifestyle, I partner with individuals, teams, and organizations to mindfully integrate
          technology, streamline processes, and turn visionary ideas into reality. Let's make the
          future of work happen today!
        </p>
        <a 
          href="#contact"
          className="inline-block bg-brand-blue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Let's Collaborate
        </a>
      </div>
    </section>
  );
};

export default Hero;
