import  React  from 'react';
import './Footer.css';
const currentYear = new Date().getFullYear();

export function Footer(params) {
    return(
<footer className="footer-container">
      <p className="footer-text">
        © {currentYear} BRIAN PAEZ | PORTFOLIO ARCADE V1.0 | POWERED BY REACT & VITE
      </p>
    </footer>
    );
}