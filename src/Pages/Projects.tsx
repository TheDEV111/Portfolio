import React from 'react';
import NavbarEnhanced from '@/Components/NavbarEnhanced';
import Footer from '@/Components/Footer';
import ProjectList from '@/Components/ProjectList';

const Projects: React.FC = () => {
  return (
    <div className='min-h-screen bg-black'>
      <NavbarEnhanced />
      <main className='pt-0 min-h-screen'>
        <ProjectList />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
