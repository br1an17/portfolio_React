import { Nav } from "./components/nav/Nav.jsx";
import { Header } from "./components/header/Header.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { Projects } from "./components/projects/Projects.jsx";
import { Contact } from "./components/contacto/Contact.jsx";
import { AboutMe } from "./components/aboutMe/AboutMe.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";

function App() {
  return (
   
    <div className="app-container">
      <BrowserRouter>
     
      {/* <Marquee title="EL PORTFOLIO DE BRIAN" subtitle="DEV ARCADE" />  */}
      <Nav />      
      
     
      <main className="screen-container">
          <Routes>
              {/* Ruta Principal: Pantalla "Press Start" */}
              <Route path="/" element={<Home />} /> 
              
              {/* Ruta Proyectos: Pantalla de Selección de Juego */}
              <Route path="/projects" element={<Projects />} /> 
              
              {/* Ruta Sobre Mí: Pantalla de Récords/Historia */}
              <Route path="/about" element={<AboutMe />} /> 
              
              {/* Ruta Contacto: Pantalla de "Game Over/Continuar?" */}
              <Route path="/contact" element={<Contact />} />

              {/* Ruta de Detalle de Proyecto (ejemplo) */}
              {/* <Route path="/project/:id" element={<ProjectDetail />} /> */}
              
              {/* Ruta 404 - Error */}
              <Route path="*" element={<h1>ERROR 404: JUEGO NO ENCONTRADO</h1>} />
          </Routes>
      </main>
      
      <Footer /> 
      </BrowserRouter>
    </div>
  );
}
export default App;
