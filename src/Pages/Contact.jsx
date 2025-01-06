import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import AnimatedContact from '../Components/AnimatedContact';

const Contact = () => {
  return (
    <div className='min-h-screen'>
        <Navbar />
        <main className='pt-16'>
        <AnimatedContact />
        </main>
        <Footer />
    </div>
  )
}

export default Contact