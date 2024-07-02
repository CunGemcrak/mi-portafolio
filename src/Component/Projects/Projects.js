import React from 'react';
import './Projects.css'; // Estilo CSS para la página Projects

import app_dog from './img/app_dog.jpeg';
import fastfoot from './img/food2.png';
import video_gamer from './img/stock-vector-classic-video-game-iconic-gorontalo-indonesia-february-2427698913.jpg';
import stiloZap from './img/StiloZAp.gif';

const Projects = () => {
  // Datos de los proyectos
  const projects = [
    {
      id: 1,
      title: 'Fast Food Front',
      description: 'Sistema de gestión y venta para una tienda de comida rápida. Utilización de tecnologías como React, Node.js, Express y más.',
      githubLink: 'https://github.com/ProyectoFinalH/FastFoodFront',
      demoLink: 'https://fast-food-front-deploy.vercel.app/',
      img: fastfoot
    },
    {
      id: 2,
      title: 'PI-Videogames',
      description: 'Construcción de una Single Page Application utilizando React, Redux, Node.js, Express y Sequelize. Proyecto enfocado en aplicar conceptos de UX/UI, mejores prácticas y testing.',
      githubLink: 'https://github.com/CunGemcrak/PI-Videogames-main',
      
      img: video_gamer
    },
    {
      id: 3,
      title: 'PI-Dogs',
      description: 'Desarrollo de una Single Page Application utilizando React, Redux, Node.js, Express y Sequelize. Proyecto centrado en UX/UI, prácticas de desarrollo y testing.',
      githubLink: 'https://github.com/CunGemcrak/PI-Dogs-main',
   
      img: app_dog
    },
    {
      id: 4,
      title: 'Zapatería CUN',
      description: 'Plataforma digital para la venta de zapatos, utilizando React, Redux, Node.js, Express y Sequelize. Aplicación de principios de UX/UI y mejores prácticas en desarrollo de software.',
      githubLink: 'https://github.com/CunGemcrak/Zapateria-Cun',
     
      img: stiloZap
    }
    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="projects">
      <div className="projects-header">
        <h2>Mis Proyectos</h2>
      </div>
      <div className="projects-list">
        {projects.map(project => (
          <div className="project-item" key={project.id}>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
                {/* Agrega aquí el link al demo si está disponible */}
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Ver Demo</a>
                )}
              </div>
            </div>
            <div className="project-thumbnail">
              <img src={project.img} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
