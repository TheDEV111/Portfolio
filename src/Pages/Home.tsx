import React from 'react';
import NavbarEnhanced from '@/Components/NavbarEnhanced';
import HeroEnhanced from '@/Components/HeroEnhanced';
import ProjectsEnhanced from '@/Components/ProjectsEnhanced';
import Footer from '@/Components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavbarEnhanced />
      {/* Add padding-top to account for fixed navbar */}
      <main className="pt-16">
        <HeroEnhanced />
        <ProjectsEnhanced />
      </main>
      <div className='pt-2'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
