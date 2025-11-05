import React from 'react';

import "./About.css"; 

export function AboutMe() {
  return (
    <div className="about-screen">
      <h2 className="about-title">HISTORIA Y HABILIDADES</h2>
      
      <div className="history-log">
        <section className="log-section">
          <h3>[RÉCORD] TRAYECTORIA</h3>
          <p className="log-entry">2022 - INICIO: Descubrimiento de React y Node.js.</p>
          <p className="log-entry">2023 - LEVEL UP: Desarrollo de proyectos Full-Stack.</p>
          <p className="log-entry">2025 - RANK S: inicio de tecnicatura en desarrollo de software.</p>
        </section>

        <section className="log-section">
          <h3>[POWER-UPS] TECNOLOGÍAS</h3>
          <ul className="skill-list">
            <li>JavaScript (Advance)</li>
            <li>React / Redux (Advance)</li>
            <li>Node.js / Express (Advanced)</li>
            <li>Java (Intermediate)</li>
            <li>CSS / Styled-Components (Advance)</li>
            <li>Bases de Datos (SQL/NoSQL) (Intermediate)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}