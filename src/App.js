import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Component/menu/menu';
import AboutMe from './Component/AboutMe/AboutMe';
import Projects from './Component/Projects/Projects';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';

function App() {
  return <div className="App bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
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
