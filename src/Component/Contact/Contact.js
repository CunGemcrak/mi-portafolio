import React from 'react';
import './Contact.css'; // Estilo CSS para la página Contact

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h2>Contacto</h2>
      </div>
      <div className="contact-content">
        <p>
          ¡Me encantaría saber de ti! Si tienes alguna pregunta o quieres colaborar en un proyecto, no dudes en contactarme a través de los siguientes medios:
        </p>
        <ul className="contact-list">
          <li>
            <strong>Email:</strong> tuemail@example.com
          </li>
          <li>
            <strong>Teléfono:</strong> +123 456 789
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tuusuario/" target="_blank" rel="noopener noreferrer">Perfil LinkedIn</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">Perfil GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
