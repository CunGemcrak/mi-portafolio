import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'; // Estilo CSS para el menú

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">
            Inicio
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/sobremi" className="menu-link">
            Sobre Mí
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/proyectos" className="menu-link">
            Proyectos
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Menu;