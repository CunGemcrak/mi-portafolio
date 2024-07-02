import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Component/menu/menu';
import AboutMe from './Component/AboutMe/AboutMe';
import Projects from './Component/Projects/Projects';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';

function App() {
  return <div className="App">
    <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobremi" element={<AboutMe />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      
    </Router>
    </div>
}

export default App;
