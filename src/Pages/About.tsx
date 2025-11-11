import React from 'react';
import NavbarEnhanced from '@/Components/NavbarEnhanced';
import AboutSection from '@/Components/AboutSection';
import Footer from '@/Components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavbarEnhanced />
      <main className="pt-16">
        <AboutSection />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
