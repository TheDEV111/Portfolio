import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProjectList from '../Components/ProjectList';

const Projects = () => {
  return (
    <div className='min-h-screen'>
        <Navbar />

        <main className='pt-16 min-h-screen'>
        <ProjectList />
        </main>
        <div>
        <Footer />
        </div>
    </div>
  )
}

export default Projects