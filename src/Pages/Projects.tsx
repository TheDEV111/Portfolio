import React from 'react';
import NavbarEnhanced from '@/Components/NavbarEnhanced';
import Footer from '@/Components/Footer';
import ProjectList from '@/Components/ProjectList';

const Projects: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <NavbarEnhanced />
      <main className='pt-16 min-h-screen'>
        <ProjectList />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
