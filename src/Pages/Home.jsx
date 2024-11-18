import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Project from '../Components/Projects'
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
    <Navbar />
    {/* Add padding-top to account for fixed navbar */}
    <main className="pt-16">
      <Hero />
      <Project />
    </main>
    <div className='pt-2'>
    <Footer />
    </div>
  </div>
  )
}

export default Home
