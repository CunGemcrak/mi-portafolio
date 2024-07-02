import React from "react";
import { FaUser, FaGraduationCap, FaEnvelope, FaWhatsapp, FaHtml5, FaJsSquare, FaServer, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa'; // Importa los iconos de FontAwesome de react-icons
import imagenyo from './imagen/FB_IMG_1692620285490.jpg';
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="containerAbout">
      <div className="info">
        <h1>Ahora conoce un poco sobre mí</h1>
        <div className="personal-info">
          <div className="info-item">
            <h3><FaUser className="icon user" /> Nombre:</h3>
            <p>Luis Alberto Buelvas Cogollo</p>
          </div>
          <div className="info-item">
            <h3><FaGraduationCap className="icon graduation" /> Títulos:</h3>
            <ul>
              <li>Licenciado en Informática y Medios Audiovisuales</li>
              <li>Magíster en Educación</li>
              <li>Estudiante de Ingeniería de Sistemas</li>
              <li>Estudiante desarrollo full stack</li>
            </ul>
          </div>
          <div className="info-item">
            <h3><FaEnvelope className="icon envelope" /> Comunícate:</h3>
            <p>Correo personal: labc.1021@gmail.com</p>
            <p><FaWhatsapp className="icon whatsapp" /> Whatsapp: 3012282338</p>
          </div>
          <div className="info-item">
            <h3><FaHtml5 className="icon html" /> Habilidades:</h3>
            <p>Desarrollo web con HTML5, CSS3, JavaScript</p>
            <p>Backend con Node.js, Express, y bases de datos como PostgreSQL y MySQL</p>
            <p>Experiencia en servidores web como Apache</p>
            <p>Frameworks como React para aplicaciones frontend</p>
          </div>
          <div className="info-item">
            <h3><FaJsSquare className="icon js" /> JavaScript</h3>
            <p>Programación dinámica del lado del cliente con JavaScript</p>
          </div>
          <div className="info-item">
            <h3><FaServer className="icon server" /> Servidores Web</h3>
            <p>Configuración y administración de servidores web como Apache</p>
          </div>
          <div className="info-item">
            <h3><FaDatabase className="icon database" /> Bases de Datos</h3>
            <p>Manejo de bases de datos relacionales como PostgreSQL y MySQL</p>
          </div>
          <div className="info-item">
            <h3><FaReact className="icon react" /> React</h3>
            <p>Desarrollo de interfaces de usuario con React</p>
          </div>
          <div className="info-item">
            <h3><FaNodeJs className="icon nodejs" /> Node.js</h3>
            <p>Desarrollo del lado del servidor con Node.js</p>
          </div>
        </div>
      </div>

      <div className="divimagen">
        <img src={imagenyo} alt="Imagen Creador Luis Buelvas" />
      </div>
    </div>
  );
};

export default AboutMe;
