import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load page components for better code splitting
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Projects = lazy(() => import('./Pages/Projects'));
const Contact = lazy(() => import('./Pages/Contact'));

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gray-950 flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-emerald-500/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div>
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
