import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load page components for better code splitting
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Projects = lazy(() => import('./Pages/Projects'));
const Contact = lazy(() => import('./Pages/Contact'));

// Brutalist loading component matching the new redesign
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center fixed inset-0 z-[9999]">
    <div className="font-display text-7xl md:text-9xl text-white uppercase tracking-wider animate-pulse flex items-center gap-2">
      H<span className="text-brand">A</span>
    </div>
    <div className="mt-8 flex gap-2">
      <div className="w-3 h-3 bg-brand rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-3 h-3 bg-brand rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-3 h-3 bg-brand rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  </div>
);

import CustomCursor from './Components/CustomCursor';

const App: React.FC = () => {
  return (
    <div>
      <CustomCursor />
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
