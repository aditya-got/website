
import type { Testimonial, Book, Service, MindMapNode, MindMapLink, Collaboration } from './types';
import React from 'react';

export const testimonialsData: Testimonial[] = [
  {
    quote: "Aditya was one of my best students. He is always trying to bring the projects to the next level, he is highly reliable and available to help others. He gets the best of any opportunity to learn or work.",
    author: "Oscar Sanjuán Martínez",
    role: "VP Application Engineering, Lumen (Former Degree Teacher)",
  },
  {
    quote: "Working with Aditya is a masterclass in clarity and execution. His ability to distill complex problems into actionable steps is unparalleled. He doesn't just consult; he empowers teams to innovate.",
    author: "Jane Doe",
    role: "CTO, Innovate Inc.",
  },
  {
    quote: "Aditya's holistic approach transformed our team culture. We went from siloed departments to a collaborative powerhouse, all thanks to his strategic guidance and hands-on workshops.",
    author: "John Smith",
    role: "Head of People, Growth Co.",
  },
];

export const booksData: Book[] = [
  {
    title: "Human + Machine: Reimagining work in the age of AI",
    author: "Paul R. Daugherty & H. James Wilson",
    description: "\"The future of work is not man versus machine, but man with machine.\"",
    image: "https://picsum.photos/seed/book1/300/450",
    category: "Software Development",
  },
  {
    title: "21 Lessons for the 21st Century",
    author: "Yuval Noah Harari",
    description: "\"Confronting AI, truth, and the quest for meaning in a new era. Insights for thriving in an age of disruption.\"",
    image: "https://picsum.photos/seed/book2/300/450",
    category: "Culture/Teams",
  },
  {
    title: "Reinventing Organizations",
    author: "Frederic Laloux",
    description: "\"We build the future of work by nurturing trust, transparency, and shared purpose.\"",
    image: "https://picsum.photos/seed/book3/300/450",
    category: "Leadership/Management",
  },
  {
    title: "Chief Joy Officer",
    author: "Richard Sheridan",
    description: "\"How great leaders elevate human energy and eliminate fear.\"",
    image: "https://picsum.photos/seed/book4/300/450",
    category: "Leadership/Management",
  },
  {
    title: "The Fearless Organization",
    author: "Amy C. Edmondson",
    description: "\"Fearless organizations make it safe to fail, learn, and try again.\"",
    image: "https://picsum.photos/seed/book5/300/450",
    category: "Culture/Teams",
  },
   {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "\"Understanding the two systems that drive the way we think.\"",
    image: "https://picsum.photos/seed/book6/300/450",
    category: "Personal Growth",
  },
];

// Fix: Rewrote ServiceIcon to use React.createElement instead of JSX syntax, which is not supported in .ts files.
const ServiceIcon = ({ d }: { d: string }): React.ReactElement => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-10 w-10 mb-4",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: d
    }))
);

export const servicesData: Service[] = [
  {
    // Fix: Changed JSX tag to a function call to avoid JSX parsing errors in a .ts file.
    icon: ServiceIcon({ d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" }),
    title: "Free Discovery Call",
    subtitle: "Your First Step",
    description: "A complimentary 30-min chat to understand your needs, vision, or challenges, and explore if we're a good fit for collaboration.",
    buttonText: "Book Your Call",
    category: "Discovery Call",
  },
  {
    // Fix: Changed JSX tag to a function call to avoid JSX parsing errors in a .ts file.
    icon: ServiceIcon({ d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.022.547zM12 6a1 1 0 100-2 1 1 0 000 2zM12 10a1 1 0 100-2 1 1 0 000 2zM6 12a1 1 0 10-2 0 1 1 0 002 0zM10 12a1 1 0 10-2 0 1 1 0 002 0zM14 12a1 1 0 10-2 0 1 1 0 002 0zM18 12a1 1 0 10-2 0 1 1 0 002 0zM12 14a1 1 0 100 2 1 1 0 000-2z" }),
    title: "The AI Kickstart Lab",
    subtitle: "Demystify AI & Unleash Practical Wins",
    description: "A 1-day intensive workshop to identify high-impact AI use cases for your team, understand core concepts, and build a roadmap for confident experimentation.",
    buttonText: "Explore Workshop",
    category: "High-Impact Workshops",
  },
  {
    // Fix: Changed JSX tag to a function call to avoid JSX parsing errors in a .ts file.
    icon: ServiceIcon({ d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945C21.43 8.01 19.368 6 16.5 6c-3.085 0-5.5 2.519-5.5 5.5S13.415 17 16.5 17c2.868 0 4.93-2.01 5.445-5H11" }),
    title: "Notion Power-Up: Chaos to Clarity",
    subtitle: "Tame Information Overload & Build Your Team's Second Brain",
    description: "Set-up your team's core knowledge base, establish best practices, and streamline workflows in this engaging hands-on session.",
    buttonText: "Explore Workshop",
    category: "High-Impact Workshops",
  },
];

export const collaborationData: Collaboration[] = [
    {
        // Fix: Changed JSX tag to a function call to avoid JSX parsing errors in a .ts file.
        icon: ServiceIcon({ d: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.82h4.82a1.5 1.5 0 011.02 2.44zm-2.38-6.85a1.5 1.5 0 01-1.02-2.44l2.44-4.24a6 6 0 017.38 5.84l-4.24 2.44a1.5 1.5 0 01-2.44-1.02zM12 2.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75z" }),
        title: "Idea-to-MVP Launchpad",
        subtitle: "From Spark of Genius to Tangible Product",
        description: "A structured program guiding idea validation, MVP definition, rapid prototyping (no/low-code friendly), and initial user feedback.",
        buttonText: "Discuss Launchpad",
    },
    {
        // Fix: Changed JSX tag to a function call to avoid JSX parsing errors in a .ts file.
        icon: ServiceIcon({ d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" }),
        title: "Flexible Collaboration",
        subtitle: "Your Ongoing Partner for Continuous Improvement & Technical Excellence",
        description: "Remote or on-site sessions for strategic advice, facilitation, implementation support, and team coaching as your needs evolve.",
        buttonText: "Discuss Partnership",
    },
    {
        // Fix: Changed JSX tag to a function call to avoid JSX parsing errors in a .ts file.
        icon: ServiceIcon({ d: "M2.25 21h19.5m-18-18v18A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V3.75A2.25 2.25 0 0019.5 1.5h-15A2.25 2.25 0 002.25 3.75z" }),
        title: "Modern Hospitality Edge",
        subtitle: "Delight Guests & Boost Bookings",
        description: "Blend tech, data, and human touch. Optimize guest journeys, online presence, direct bookings, and operations for boutique / glamping / retreats.",
        buttonText: "Explore Program",
    },
];

export const mindMapData: { nodes: MindMapNode[], links: MindMapLink[] } = {
  nodes: [
    { id: 'Future of Work', group: 'Future of Work', label: 'Future of Work', radius: 45, color: '#2563eb' },
    
    { id: 'Mindset & Learning', group: 'Culture & People', label: 'Mindset & Learning', radius: 30, color: '#a855f7' },
    { id: 'Innovation @ Work', group: 'Culture & People', label: 'Innovation @ Work', radius: 20, color: '#d1d5db' },
    { id: 'Growth Mindset', group: 'Culture & People', label: 'Growth Mindset', radius: 20, color: '#d1d5db' },
    { id: 'Mindfulness', group: 'Culture & People', label: 'Mindfulness', radius: 20, color: '#d1d5db' },
    { id: 'Continuous Learning', group: 'Culture & People', label: 'Continuous Learning', radius: 20, color: '#d1d5db' },

    { id: 'Process & Strategy', group: 'Process & Strategy', label: 'Process & Strategy', radius: 30, color: '#dc2626' },
    { id: 'Data Informed', group: 'Process & Strategy', label: 'Data Informed', radius: 20, color: '#d1d5db' },
    { id: 'Systems Thinking', group: 'Process & Strategy', label: 'Systems Thinking', radius: 20, color: '#d1d5db' },
    { id: 'Agile/Lean', group: 'Process & Strategy', label: 'Agile/Lean', radius: 20, color: '#d1d5db' },
    { id: 'Customer Centric', group: 'Process & Strategy', label: 'Customer Centric', radius: 20, color: '#d1d5db' },

    { id: 'Tech & Tools', group: 'Tech & Tools', label: 'Tech & Tools', radius: 30, color: '#16a34a' },
    { id: 'Knowledge Management', group: 'Tech & Tools', label: 'Knowledge Management', radius: 20, color: '#d1d5db' },
    { id: 'Remote Collab', group: 'Tech & Tools', label: 'Remote Collab', radius: 20, color: '#d1d5db' },
    { id: 'AI Integration', group: 'Tech & Tools', label: 'AI Integration', radius: 20, color: '#d1d5db' },
    { id: 'Dev Practices', group: 'Tech & Tools', label: 'Dev Practices', radius: 20, color: '#d1d5db' },

    { id: 'Culture & People', group: 'Culture & People', label: 'Culture & People', radius: 30, color: '#ea580c' },
    { id: 'Psychological Safety', group: 'Culture & People', label: 'Psychological Safety', radius: 20, color: '#d1d5db' },
    { id: 'Fun @ Work', group: 'Culture & People', label: 'Fun @ Work', radius: 20, color: '#d1d5db' },
    { id: 'Teamwork', group: 'Culture & People', label: 'Teamwork', radius: 20, color: '#d1d5db' },
    { id: 'Inclusion & Diversity', group: 'Culture & People', label: 'Inclusion & Diversity', radius: 20, color: '#d1d5db' },
    { id: 'Workshop Culture', group: 'Culture & People', label: 'Workshop Culture', radius: 20, color: '#d1d5db' },
    
    { id: 'Hospitality', group: 'Hospitality Focus', label: 'Hospitality', radius: 30, color: '#f59e0b' },
    { id: 'Guest Experience', group: 'Hospitality Focus', label: 'Guest Experience', radius: 20, color: '#d1d5db' },
    { id: 'Operations Efficiency', group: 'Hospitality Focus', label: 'Operations Efficiency', radius: 20, color: '#d1d5db' },
    { id: 'Marketing', group: 'Hospitality Focus', label: 'Marketing', radius: 20, color: '#d1d5db' },
  ],
  links: [
    { source: 'Future of Work', target: 'Mindset & Learning' },
    { source: 'Future of Work', target: 'Process & Strategy' },
    { source: 'Future of Work', target: 'Tech & Tools' },
    { source: 'Future of Work', target: 'Culture & People' },
    { source: 'Future of Work', target: 'Hospitality' },

    { source: 'Mindset & Learning', target: 'Innovation @ Work' },
    { source: 'Mindset & Learning', target: 'Growth Mindset' },
    { source: 'Mindset & Learning', target: 'Mindfulness' },
    { source: 'Mindset & Learning', target: 'Continuous Learning' },

    { source: 'Process & Strategy', target: 'Data Informed' },
    { source: 'Process & Strategy', target: 'Systems Thinking' },
    { source: 'Process & Strategy', target: 'Agile/Lean' },
    { source: 'Process & Strategy', target: 'Customer Centric' },
    
    { source: 'Tech & Tools', target: 'Knowledge Management' },
    { source: 'Tech & Tools', target: 'Remote Collab' },
    { source: 'Tech & Tools', target: 'AI Integration' },
    { source: 'Tech & Tools', target: 'Dev Practices' },

    { source: 'Culture & People', target: 'Psychological Safety' },
    { source: 'Culture & People', target: 'Fun @ Work' },
    { source: 'Culture & People', target: 'Teamwork' },
    { source: 'Culture & People', target: 'Inclusion & Diversity' },
    { source: 'Culture & People', target: 'Workshop Culture' },

    { source: 'Hospitality', target: 'Guest Experience' },
    { source: 'Hospitality', target: 'Operations Efficiency' },
    { source: 'Hospitality', target: 'Marketing' },
  ],
};