import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 


export default function Home() {
  const navigate = useNavigate();

  const handleStartGame = () => {
   
    navigate('/projects'); 
  };
  
  return (
    <div className="home-screen">
      <h1 className="welcome-text">BIENVENIDO</h1>
      
    
      <button className="start-button" onClick={handleStartGame}>
        PRESIONA START
      </button>

      <p className="credit-text">V 1.0.0</p>
    </div>
  );
}