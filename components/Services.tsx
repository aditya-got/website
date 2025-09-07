
import React, { useState } from 'react';
import type { Service, Collaboration } from '../types';
import { servicesData, collaborationData } from '../constants';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-brand-cyan transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
    <div className="text-brand-cyan">{service.icon}</div>
    <h3 className="text-xl font-bold text-brand-cyan mb-2">{service.title}</h3>
    <p className="font-semibold text-gray-300 mb-3">{service.subtitle}</p>
    <p className="text-gray-400 flex-grow mb-6">{service.description}</p>
    <button className="mt-auto w-full bg-transparent border border-gray-500 hover:border-brand-cyan hover:bg-brand-cyan hover:text-white text-gray-300 font-semibold py-2 px-4 rounded-full transition-colors duration-300">
      {service.buttonText}
    </button>
  </div>
);

const CollaborationCard: React.FC<{ item: Collaboration }> = ({ item }) => (
     <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-brand-cyan transition-all duration-300 transform hover:-translate-y-1 flex flex-col text-center items-center">
        <div className="text-brand-cyan">{item.icon}</div>
        <h3 className="text-xl font-bold text-brand-cyan mb-2">{item.title}</h3>
        <p className="font-semibold text-gray-300 mb-3">{item.subtitle}</p>
        <p className="text-gray-400 flex-grow mb-6">{item.description}</p>
        <button className="mt-auto bg-transparent border border-gray-500 hover:border-brand-cyan hover:bg-brand-cyan hover:text-white text-gray-300 font-semibold py-2 px-6 rounded-full transition-colors duration-300">
            {item.buttonText}
        </button>
    </div>
);


const FilterButton: React.FC<{ text: string; active: boolean; onClick: () => void }> = ({ text, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${active ? 'bg-brand-blue text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
  >
    {text}
  </button>
);

const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Offerings');
  const filters = ['All Offerings', 'Discovery Call', 'High-Impact Workshops', 'Deeper Transformation', 'Ongoing Partnership'];
  
  const filteredServices = servicesData.filter(service => 
    activeFilter === 'All Offerings' || service.category === activeFilter
  );

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Services & Collaboration Options</h2>
        <div className="section-title-underline"></div>
        <p className="section-subtitle">Flexible ways to partner and achieve your goals</p>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map(filter => (
            <FilterButton key={filter} text={filter} active={activeFilter === filter} onClick={() => setActiveFilter(filter)} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredServices.map(service => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborationData.map((item) => (
                <CollaborationCard key={item.title} item={item} />
            ))}
        </div>
        <p className="text-center text-gray-400 mt-16">
            Don't see exactly what you need? <a href="#contact" className="text-brand-cyan hover:underline font-semibold">Let's chat</a> about custom collaborations.
        </p>

      </div>
    </section>
  );
};

export default Services;
