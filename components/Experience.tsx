
import React from 'react';

interface ExperienceItemProps {
    date: string;
    title: string;
    company: string;
    description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ date, title, company, description }) => (
    <div className="relative pl-8 sm:pl-12 py-6 group">
        <div className="flex items-center mb-1 sm:mb-0">
            <div className="absolute left-0 h-full w-px bg-gray-600 sm:translate-x-6"></div>
            <div className="absolute left-0 w-4 h-4 bg-gray-700 border-2 border-gray-500 rounded-full sm:translate-x-[18px] group-hover:bg-brand-cyan transition-colors duration-300"></div>
            <h3 className="text-lg font-bold text-brand-cyan">{title}</h3>
        </div>
        <p className="text-sm font-semibold text-gray-400 mt-1 sm:mt-0 sm:absolute sm:left-16 top-6">{company}</p>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-gray-300">{description}</p>
    </div>
);


const Experience: React.FC = () => {
    const experiences = [
        {
            date: "2021 - Present",
            title: "Nomad Consultant",
            company: "Self-Employed",
            description: "Partnering with diverse clients to implement future-focused work strategies, blending AI integration, agile methodologies, and human-centric culture development."
        },
        {
            date: "2018 - 2021",
            title: "Senior Product Manager",
            company: "Tech Solutions Inc.",
            description: "Led cross-functional teams to develop and launch a suite of SaaS products, focusing on user experience and data-driven decision making. Grew user base by 300%."
        },
        {
            date: "2015 - 2018",
            title: "Software Engineer",
            company: "Innovate Labs",
            description: "Developed scalable backend systems and responsive frontend interfaces for high-traffic web applications. Championed the adoption of modern development practices."
        }
    ];

    return (
        <section className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Professional Background</h2>
                <div className="section-title-underline"></div>
                 <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
