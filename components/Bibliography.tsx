
import React, { useState } from 'react';
import { booksData } from '../constants';
import type { Book } from '../types';

const BookCard: React.FC<{ book: Book }> = ({ book }) => (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
        <img src={book.image} alt={book.title} className="w-40 h-60 object-cover rounded shadow-lg mb-4" />
        <h3 className="text-lg font-bold text-brand-cyan mb-1">{book.title}</h3>
        <p className="text-sm text-gray-400 mb-3">{book.author}</p>
        <p className="text-gray-300 text-sm italic">"{book.description}"</p>
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


const Bibliography: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Leadership/Management', 'Culture/Teams', 'Process/Systems', 'Software Development', 'Personal Growth'];

    const filteredBooks = booksData.filter(book => activeFilter === 'All' || book.category === activeFilter);
    
    return (
        <section className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Bibliography</h2>
                <div className="section-title-underline"></div>
                <p className="section-subtitle">Key books shaping my thinking and approach</p>

                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {filters.map(filter => (
                        <FilterButton key={filter} text={filter} active={activeFilter === filter} onClick={() => setActiveFilter(filter)} />
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {filteredBooks.map(book => (
                        <BookCard key={book.title} book={book} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bibliography;
