import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

const App = () => {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;


