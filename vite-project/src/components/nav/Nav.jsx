import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Navegacion = [
  { nombre: "INICIO", path: "/" },
  { nombre: "SOBRE MÍ", path: "/about" },
  { nombre: "PROYECTOS", path: "/projects" },
  { nombre: "CONTACTO", path: "/contact" },
];

export function Nav(params) {
  return (
    <nav className="nav">
      {Navegacion.map((item) => (
        <Link  className="link" to={item.path} key={item.path}>
          {item.nombre}
        </Link>
      ))}
    </nav>
  );
}
