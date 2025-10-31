import React from 'react';


import "./Contact.css";

export function Contact() {
  return (
    <div className="contact-screen">
      <h2 className="contact-title">GAME OVER... ¿CONTINUAR?</h2>
      <p className="contact-message">Inserta tu mensaje para obtener un nuevo Crédito.</p>

      <form className="arcade-form">
        <input type="text" placeholder="NOMBRE (Player 1)" className="form-input" />
        <input type="email" placeholder="EMAIL (ID de Jugador)" className="form-input" />
        <textarea placeholder="MENSAJE (Mensaje Final)" className="form-input form-textarea"></textarea>
        
        <button type="submit" className="submit-button">
          INSERTAR CRÉDITO (ENVIAR)
        </button>
      </form>
    </div>
  );
}