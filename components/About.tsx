
import React from 'react';

const Highlighted: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <span className="text-brand-yellow font-semibold">{children}</span>
);

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-4">Hello! I'm <span className="text-brand-cyan">Aditya</span></h2>
        <p className="text-center text-xl text-gray-400 mb-12">From Code to Culture & Essentialism: A Holistic Path</p>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              Starting in <Highlighted>software engineering</Highlighted> and growing into <Highlighted>consulting & management</Highlighted> roles
              provided a deep understanding of <Highlighted>systems</Highlighted> (from multiple angles), technical <Highlighted>excellence</Highlighted>,
              customer-centric value delivery and organizational <Highlighted>culture</Highlighted>.
            </p>
            <p>
              In 2017, driven by <Highlighted>curiosity</Highlighted> and a desire for increased <Highlighted>freedom</Highlighted> and different perspectives, I
              embraced a <Highlighted>nomadic & minimalist</Highlighted> lifestyle. Indeed, this hasn't been just travel; it's been
              immersive learning at its peak!
            </p>
            <p>
              Fast forward today, I'm bringing everything together as a Nomad Consultant. Combining my
              technical background with recent <Highlighted>AI & automation</Highlighted> trends, a <Highlighted>people-first</Highlighted> philosophy,
              <Highlighted>holistic</Highlighted> insights gathered around the globe, <Highlighted>creativity</Highlighted> at the center of the stage, etc.
            </p>
            <p>
              My approach is flexible and <Highlighted>collaborative</Highlighted> – I love to work / co-create with <Highlighted>individuals with ideas, teams, community projects, and established organizations</Highlighted>. Whether it's hands-on
              implementation, strategic advising, or facilitating high-impact <Highlighted>workshops</Highlighted>, the goals stay
              the same: to foster <Highlighted>innovation</Highlighted>, deliver <Highlighted>value</Highlighted>, bring <Highlighted>ideas</Highlighted> to life, and enable safe
              environments where everything <Highlighted>"flows"</Highlighted>.
            </p>
          </div>
          <div className="space-y-6">
            <img src="https://picsum.photos/seed/talk1/500/300" alt="Aditya giving a talk" className="rounded-lg shadow-2xl w-full" />
            <img src="https://picsum.photos/seed/workshop1/500/300" alt="Aditya in a workshop" className="rounded-lg shadow-2xl w-full" />
            <img src="https://picsum.photos/seed/team1/500/300" alt="Aditya with a team" className="rounded-lg shadow-2xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
