import React from 'react';
import NavbarEnhanced from '@/Components/NavbarEnhanced';
import AboutSection from '@/Components/AboutSection';
import Footer from '@/Components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavbarEnhanced />
      <main className="pt-0 min-h-screen">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
