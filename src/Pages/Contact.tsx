import React from 'react';
import NavbarEnhanced from '@/Components/NavbarEnhanced';
import AnimatedContact from '@/Components/AnimatedContact';
import Footer from '@/Components/Footer';

const Contact: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <NavbarEnhanced />
      <main className='pt-16'>
        <AnimatedContact />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
