import React from 'react';

import "./About.css"; 

export function AboutMe() {
  return (
    <div className="about-screen">
      <h2 className="about-title">HISTORIA Y HABILIDADES</h2>
      
      <div className="history-log">
        <section className="log-section">
          <h3>[RÉCORD] TRAYECTORIA</h3>
          <p className="log-entry">2020 - INICIO: Descubrimiento de React y Node.js.</p>
          <p className="log-entry">2022 - LEVEL UP: Desarrollo de proyectos Full-Stack.</p>
          <p className="log-entry">2024 - RANK S: Especialización en UI/UX y Animación.</p>
        </section>

        <section className="log-section">
          <h3>[POWER-UPS] TECNOLOGÍAS</h3>
          <ul className="skill-list">
            <li>JavaScript (Master)</li>
            <li>React / Redux / Zustand (Expert)</li>
            <li>Node.js / Express (Advanced)</li>
            <li>CSS / Styled-Components (Guru)</li>
            <li>Bases de Datos (SQL/NoSQL) (Intermediate)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}