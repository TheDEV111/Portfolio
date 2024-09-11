import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Home />
      </Router>
    </div>
  );
};

export default App;


