
import React, { useState } from 'react';
import InteractiveMap from './InteractiveMap';

const FilterButton: React.FC<{ text: string; active: boolean; onClick: () => void }> = ({ text, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${active ? 'bg-brand-blue text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
  >
    {text}
  </button>
);

const Framework: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All Areas');
    const filters = ['All Areas', 'Future of Work', 'Culture & People', 'Tech & Tools', 'Process & Strategy', 'Hospitality Focus'];

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="section-title">The Framework | The Future Of Work. Now.</h2>
                <div className="section-title-underline"></div>
                <div className="max-w-3xl mx-auto text-center text-gray-400 space-y-4 mb-12">
                    <p>
                        My methodology is built around an interconnected framework of concepts. This
                        integrated framework ensures we address challenges holistically, leading to more
                        sustainable and impactful solutions.
                    </p>
                    <p>
                        Use the interactive map below to explore the core elements—and connect the dots!
                    </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 md:p-8 border border-gray-700">
                    <h3 className="text-xl font-bold text-center text-brand-cyan mb-4">Interactive Exploration Map</h3>
                    <div className="flex justify-center flex-wrap gap-3 mb-6">
                        {filters.map(filter => (
                            <FilterButton key={filter} text={filter} active={activeFilter === filter} onClick={() => setActiveFilter(filter)} />
                        ))}
                    </div>
                    <div className="w-full h-[600px] relative">
                         <InteractiveMap activeFilter={activeFilter} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Framework;
