import React from 'react';
import { Link } from 'react-router-dom'; 
import './projects.css';



const projectData = [
  { id: 1, title: 'CYBER-DEFENDER', desc: 'App de Seguridad', path: '/project/1' },
  { id: 2, title: 'PIXEL-RPG', desc: 'Sitio Web de Juego', path: '/project/2' },
  { id: 3, title: 'DATA-MINER', desc: 'Panel de Datos', path: '/project/3' },
  { id: 4, title: 'NEON-WALLET', desc: 'App Financiera', path: '/project/4' },
];

export function Projects() {
  return (
    <div className="projects-screen">
      <h2 className="projects-title">SELECCIONA UN JUEGO:</h2>
      
      <div className="game-selection-grid">
        {projectData.map((project) => (
          <Link to={project.path} key={project.id} className="game-card">
            <div className="card-image"></div>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-desc">{project.desc}</p>
          </Link>
        ))}
      </div>
      
      <p className="instructions">HAZ CLIC EN UN ÍCONO PARA CARGAR EL PROYECTO</p>
    </div>
  );
}