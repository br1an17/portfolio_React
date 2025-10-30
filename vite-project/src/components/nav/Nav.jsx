import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Navegacion = [
  { nombre: "INICIO", path: "/" },
  { nombre: "SOBRE MÍ", path: "/sobreMi" },
  { nombre: "PROYECTOS", path: "/proyectos" },
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
