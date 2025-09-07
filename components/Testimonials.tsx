
import React, { useState, useEffect, useCallback } from 'react';
import { testimonialsData } from '../constants';

const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Real Results, Real Voices</h2>
        <div className="section-title-underline"></div>
        <p className="section-subtitle">Don't Just Take My Word For It...</p>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-8">
                  <div className="bg-gray-800 rounded-lg p-8 md:p-12 border-l-4 border-brand-yellow shadow-lg">
                    <p className="text-lg md:text-xl text-gray-300 italic mb-6 relative">
                      <span className="absolute -top-4 -left-6 text-6xl text-brand-yellow opacity-20">“</span>
                      {testimonial.quote}
                      <span className="absolute -bottom-4 -right-2 text-6xl text-brand-yellow opacity-20">”</span>
                    </p>
                    <div className="text-right">
                      <p className="font-bold text-brand-cyan">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-12 bg-gray-700/50 hover:bg-gray-700 rounded-full p-2 text-white transition">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-12 bg-gray-700/50 hover:bg-gray-700 rounded-full p-2 text-white transition">
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-brand-blue' : 'bg-gray-600 hover:bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
