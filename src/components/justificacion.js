import React from 'react';
import './css/justificacion.css';

const JustificationComponent = () => {
  return (
    <div className="justification-container">
      <h2 className="justification-title">Esta es mi justificación de mi framework</h2>
      
      <p className="justification-text">
        React es mi elección para este proyecto de cifrado debido a su flexibilidad, 
        rendimiento y facilidad de uso. Su ecosistema rico en librerías y su comunidad 
        activa lo hacen ideal para implementar y visualizar algoritmos de cifrado de 
        manera eficiente. La capacidad de React para crear componentes reutilizables 
        nos permite estructurar nuestra aplicación de manera modular y mantenible, 
        lo cual es crucial para un proyecto complejo como este.
      </p>
      
      <a 
        href="https://drive.google.com/drive/folders/1RVyXDnyWSGk32Hz0eWJGOpwqwhz6tzcb?usp=sharing" 
        className="justification-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Más información sobre nuestra elección
      </a>
    </div>
  );
};

export default JustificationComponent;