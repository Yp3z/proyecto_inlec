import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="header-wrapper">

        <div className="navbar-container">
          <img className="navbar-logo" src="./Logo Horizontal - Inlec.png" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`navbar-pill ${isOpen ? 'show' : ''}`}>
            <a href="#inicio"     className="btn rounded-pill fw-bold navbar-btn">Inicio</a>
            <a href="#proyecto"   className="btn rounded-pill fw-bold navbar-btn">Proyecto</a>
            <a href="#animacion"  className="btn rounded-pill fw-bold navbar-btn">Animación</a>
            <a href="#personajes" className="btn rounded-pill fw-bold navbar-btn">Personajes</a>
            <a href="#nosotros"   className="btn rounded-pill fw-bold navbar-btn">Sobre Nosotros</a>
            <a href="#inlec"      className="btn rounded-pill fw-bold navbar-btn">Sobre Inlec</a>
          </div>
        </div>

        <div id="inicio"> 
          <img className="header" src="./Header.png" alt="" />
          <img className="header-diamantes" src="./Diamantes.png" alt="" />
        </div>
        <div className="header-ola"></div>



      </div>
  
  </>

  ); }
