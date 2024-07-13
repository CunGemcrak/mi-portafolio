import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaServer } from 'react-icons/fa'; // Importa los iconos de FontAwesome de react-icons

import './Home.css'; // Estilo CSS para la página Home
import imagenyo from './img/FB_IMG_1692620285490.jpg';

const Home = () => {
  return (
    <div className='min-h-screen min-w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center' style={{ minWidth: '450px', width: '100%' }}>
      <div className="bg-white dark:bg-slate-800 px-6 py-8 text-justify max-w-screen-sm rounded-2xl outline-zinc-950">
        <div className="text-white text-3xl text-center mb-5 underline">
          <h1>Bienvenido a mi Portafolio</h1>
        </div>
        <div className="text-white text-justify mb-3">
          <p>
            ¡Hola! Soy Luis Buelvas, un desarrollador apasionado por crear soluciones innovadoras utilizando tecnologías web modernas como:
          </p>
          <div className='bg-gray-800 p-5 border-5 border-b-gray-50 m-0.5 border-2 flex items-center justify-center'>
            <div>
              <ul className="tech-list ml-2 m-5">
                <li className='flex'><FaReact className="react-icon mr-2 mb-5" /> React</li>
                <li className='flex'><FaNodeJs className="nodejs-icon  mr-2 mb-5" /> Node.js</li>
                <li className='flex'><FaDatabase className="postgres-icon  mr-2 mb-5" /> PostgreSQL</li>
                <li className='flex'><FaHtml5 className="html5-icon  mr-2 mb-5" /> HTML5</li>
                <li className='flex'><FaCss3Alt className="css3-icon  mr-2 mb-5" /> CSS3</li>
                <li className='flex'><FaJsSquare className="js-icon  mr-2 mb-5" /> JavaScript</li>
                <li className='flex'><FaServer className="server-icon  mr-2 mb-5" /> Web Server (Apache, Nginx, etc.)</li>
              </ul>
            </div>
            <img src={imagenyo} className='w-60' alt='Luis Buelvas' />
          </div>
          <p>
            En este portafolio encontrarás una muestra de mis proyectos, información sobre mí y cómo contactarme para colaborar en proyectos interesantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
