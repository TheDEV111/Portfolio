import React from 'react';
import NavbarEnhanced from '@/Components/NavbarEnhanced';
import HeroEnhanced from '@/Components/HeroEnhanced';
import TechMarquee from '@/Components/TechMarquee';
import ProjectsEnhanced from '@/Components/ProjectsEnhanced';
import ServicesSection from '@/Components/ServicesSection';
import AchievementsSection from '@/Components/AchievementsSection';
import Footer from '@/Components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavbarEnhanced />
      <main className="pt-0">
        <HeroEnhanced />
        <TechMarquee />
        <ProjectsEnhanced />
        <ServicesSection />
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
