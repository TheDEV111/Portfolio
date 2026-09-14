import React from 'react';
import NavbarEnhanced from '@/Components/NavbarEnhanced';
import AnimatedContact from '@/Components/AnimatedContact';
import Footer from '@/Components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavbarEnhanced />
      <main className="pt-0 min-h-screen">
        <AnimatedContact />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
