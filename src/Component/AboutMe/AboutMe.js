import React from "react";
import { FaUser, FaGraduationCap, FaEnvelope, FaWhatsapp, FaHtml5, FaJsSquare, FaServer, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa'; // Importa los iconos de FontAwesome de react-icons
import imagenyo from './imagen/FB_IMG_1692620285490.jpg';
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center h-full mt-2">
      <div className="bg-slate-900 text-white p-8 rounded-lg w-4/6">
        <h1 className="text-center text-3xl font-bold mb-4">Ahora conoce un poco sobre mí</h1>
        <div className="flex">
          <div className="personal-info w-full">
            <div className="info-item mb-4">
              <h3 className="flex items-center text-lg"><FaUser className="icon user mr-2" /> Nombre:</h3>
              <p className="ml-8">Luis Alberto Buelvas Cogollo</p>
            </div>
            <div className="info-item mb-4">
              <h3 className="flex items-center text-lg"><FaGraduationCap className="icon graduation mr-2" /> Títulos:</h3>
              <ul className="ml-8">
                <li>Licenciado en Informática y Medios Audiovisuales</li>
                <li>Magíster en Educación</li>
                <li>Estudiante de Ingeniería de Sistemas</li>
                <li>Estudiante desarrollo full stack</li>
              </ul>
            </div>
            <div className="info-item mb-4">
              <h3 className="flex items-center text-lg"><FaEnvelope className="icon envelope mr-2" /> Comunícate:</h3>
              <div className="ml-8">
                <p>Correo personal: labc.1021@gmail.com</p>
                <p className="flex items-center"><FaWhatsapp className="icon whatsapp mr-2" /> Whatsapp: 3012282338</p>
              </div>
            </div>
            <div className="info-item mb-4">
              <h3 className="flex items-center text-lg"><FaHtml5 className="icon html mr-2" /> Habilidades:</h3>
              <div className="ml-8">
                <p>Desarrollo web con HTML5, CSS3, JavaScript</p>
                <p>Backend con Node.js, Express, y bases de datos como PostgreSQL y MySQL</p>
                <p>Experiencia en servidores web como Apache</p>
                <p>Frameworks como React para aplicaciones frontend</p>
              </div>
            </div>
            <div className="info-item mb-4">
              <h3 className="flex items-center text-lg"><FaJsSquare className="icon js mr-2" /> JavaScript:</h3>
              <p className="ml-8">Programación dinámica del lado del cliente con JavaScript</p>
            </div>
            <div className="info-item mb-4">
              <h3 className="flex items-center text-lg"><FaServer className="icon server mr-2" /> Servidores Web:</h3>
              <p className="ml-8">Configuración y administración de servidores web como Apache</p>
            </div>
            <div className="info-item mb-4">
              <h3 className="flex items-center text-lg"><FaDatabase className="icon database mr-2" /> Bases de Datos:</h3>
              <p className="ml-8">Manejo de bases de datos relacionales como PostgreSQL y MySQL</p>
            </div>
            <div className="info-item mb-4">
              <h3 className="flex items-center text-lg"><FaReact className="icon react mr-2" /> React:</h3>
              <p className="ml-8">Desarrollo de interfaces de usuario con React</p>
            </div>
            <div className="info-item mb-4">
              <h3 className="flex items-center text-lg"><FaNodeJs className="icon nodejs mr-2" /> Node.js:</h3>
              <p className="ml-8">Desarrollo del lado del servidor con Node.js</p>
            </div>
          </div>

          <div className="ml-8">
            <img src={imagenyo} alt="Imagen Creador Luis Buelvas" className='w-60 rounded-lg'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
