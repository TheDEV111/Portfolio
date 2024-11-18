import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Project from '../Components/Projects'

const Home = () => {
  return (
    <div className="min-h-screen">
    <Navbar />
    {/* Add padding-top to account for fixed navbar */}
    <main className="pt-16">
      <Hero />
      <Project />
    </main>
  </div>
  )
}

export default Home
