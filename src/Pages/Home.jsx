import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen">
    <Navbar />
    {/* Add padding-top to account for fixed navbar */}
    <main className="pt-16">
      <Hero />
    </main>
  </div>
  )
}

export default Home
