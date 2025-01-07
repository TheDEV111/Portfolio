import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutSection from '../Components/AboutSection'

const About = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='pt-10'>
      <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default About
