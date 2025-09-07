
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark border-t border-gray-800 py-6">
            <div className="container mx-auto px-6 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Aditya Carral. All Rights Reserved.</p>
                <p className="text-sm mt-1">Building The Future Of Work. Now.</p>
            </div>
        </footer>
    );
};

export default Footer;
