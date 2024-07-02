import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaServer } from 'react-icons/fa'; // Importa los iconos de FontAwesome de react-icons

import './Home.css'; // Estilo CSS para la página Home

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h2>Bienvenido a mi Portafolio</h2>
      </div>
      <div className="home-content">
        <p>
          ¡Hola! Soy Luis Buelvas, un desarrollador apasionado por crear soluciones innovadoras utilizando tecnologías web modernas como:
        </p>
        <ul className="tech-list">
          <li><FaReact className="react-icon" /> React</li>
          <li><FaNodeJs className="nodejs-icon" /> Node.js</li>
          <li><FaDatabase className="postgres-icon" /> PostgreSQL</li>
          <li><FaHtml5 className="html5-icon" /> HTML5</li>
          <li><FaCss3Alt className="css3-icon" /> CSS3</li>
          <li><FaJsSquare className="js-icon" /> JavaScript</li>
          <li><FaServer className="server-icon" /> Web Server (Apache, Nginx, etc.)</li>
        </ul>
        <p>
          En este portafolio encontrarás una muestra de mis proyectos, información sobre mí y cómo contactarme para colaborar en proyectos interesantes.
        </p>
      </div>
    </div>
  );
};

export default Home;
