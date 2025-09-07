
import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="section-title">Let's Connect</h2>
                <div className="section-title-underline"></div>
                <p className="section-subtitle max-w-2xl mx-auto">
                    Have a project in mind, a question, or just want to talk about the future of work? I'd love to hear from you.
                </p>

                <div className="max-w-xl mx-auto">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" className="bg-gray-800 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-brand-blue focus:outline-none transition" />
                            <input type="email" placeholder="Your Email" className="bg-gray-800 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-brand-blue focus:outline-none transition" />
                        </div>
                        <textarea placeholder="Your Message" rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-brand-blue focus:outline-none transition"></textarea>
                        <button type="submit" className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
