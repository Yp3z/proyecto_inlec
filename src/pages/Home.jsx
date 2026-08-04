import React from 'react'
import "../stylesheets/Home.css"
import "../stylesheets/Fuentes.css"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const characters = [
  {
    id: 1,
    name: "Ash",
    image: "https://i.pinimg.com/736x/88/e0/9e/88e09e5eb0dd6426306fa23a853d1916.jpg",
    description: "Es el hijo adolescente del Sr. Fox y la Sra. Fox. Se caracteriza por ser emocionalmente inmaduro, inseguro y sentirse 'diferente', buscando constantemente la aprobación de su padre mientras compite con su talentoso hermano, Kristofferson.",
    color: "#ebbb59",
  },
  {
    id: 2,
    name: "Mr. Fox",
    image: "https://i.pinimg.com/1200x/13/13/4f/13134f6471f425946d5bd53005231198.jpg",
    description: "El carismático y astuto padre de familia. Aunque prometió llevar una vida tranquila, su instinto de zorro salvaje lo lleva a planear el robo más audaz del valle, poniendo a toda su familia en peligro.",
    color: "#ebbb59",
  },
  {
    id: 3,
    name: "Sra. Fox",
    image: "https://i.pinimg.com/1200x/62/e9/9d/62e99d39d5f98a6a725184673199c06c.jpg",
    description: "La Sra. Fox, también llamada Felicity, artista y esposa comprensiva. Es el ancla moral de la familia y la voz de la razón. Su paciencia es puesta a prueba cuando descubre los secretos y planes de su esposo.",
    color: "#ebbb59",
  },
  {
    id: 4,
    name: "Kris",
    image: "https://static.wikia.nocookie.net/fantasticmrfox/images/1/12/Kristofferson_Silverfox_-_%27Fantastic_Mr_Fox%27.png/revision/latest?cb=20190704142531",
    description: "Kristofferson, el hermano de Ash, talentoso en todo lo que hace. Calmado, amable y atlético, genera sin querer una rivalidad con Ash. A pesar de ello, demuestra ser leal y valiente cuando la familia más lo necesita.",
    color: "#ebbb59",
  },
  {
    id: 5,
    name: "Boggis",
    image: "https://i.pinimg.com/736x/63/57/dc/6357dc393e6748d7a424c8ec19a87839.jpg",
    description: "Uno de los tres agricultores antagonistas. Dueño de las granjas de pollos más grandes del valle. Obeso y codicioso, no descansará hasta atrapar al Sr. Fox y recuperar lo que considera suyo.",
    color: "#ebbb59",
  },
  {
    id: 6,
    name: "Agnes",
    image: "https://i.pinimg.com/736x/f5/7e/d4/f57ed4d7a4b670947eece00e6112ba73.jpg",
    description: "Agnes es una zorrita adolescente caracterizada por su pelaje claro con motas y ojos marrones. Es compañera de clase de Ash, novia de Kristofferson, y se distingue por ser amable y dulce, a menudo vista con un vestido de tirantes con estampado de flores.",
    color: "#ebbb59",
  },
];

export const Home = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const openModal = (character) => setSelectedCharacter(character);
  const closeModal = () => setSelectedCharacter(null);

  return (
    <>


      <section>
        <div id="proyecto" className="container text-center proyecto-container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6">
              <h1 className="proyecto-titulo text-center">Nuestro Proyecto</h1>
              <p className="proyecto-descripcion">
                Inlec es una plataforma digital que transforma la lectura en una experiencia interactiva, creativa y emocionante. Aqui no se trata de leer por obligación, sino de conectar con historias que realmente disfrutas. Con animaciones y actividades dinamicas, queremos que descubras el placer de leer a tu manera.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img src="./Imagen-info.png" alt="" className="img-fluid" style={{ maxHeight: "230px" }} />
            </div>
          </div>
        </div>
      </section>


      <section id="animacion" className="superzorro-section position-relative mt-5">
        <img className="superzorro-img w-100" src="./Capitulos.jpg" alt="" />

        <div className="superzorro-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center px-2">
          <h1 className="superzorro-titulo text-center">El SuperZorro</h1>

          <div className="fondo-capitulos w-100 px-3 py-3">
            <a href="#personajes" className="rounded-4 superzorro-btn px-3 py-2">Empezar Historia</a>
            <p className="s-cap mt-3">Selecciona un capitulo:</p>
            <div className="container-fluid">
              <div className="row justify-content-center g-2 mt-1">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="col-4 col-sm-2 text-center">
                    <button type="button" className="btn-numero w-100">
                      <h1>{num}</h1>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="d-flex justify-content-between align-items-center px-3 pb-2 position-absolute bottom-0 start-0 w-100">
          <div className="btn-group botones rounded-4" role="group">
            <button type="button" className="btn"><img src="./T.png" alt="" height="35px" /></button>
            <button type="button" className="btn"><img src="./Volumen.png" alt="" height="35px" /></button>
            <button type="button" className="btn"><img src="./Pausa.png" alt="" height="35px" /></button>
          </div>
          <div className="btn-group botones rounded-4" role="group">
            <button type="button" className="btn"><img src="./Full.png" alt="" height="35px" /></button>
          </div>
        </div>
      </section>


      <section id="nosotros">
        <div className="cuadro-sobre-nosotros mt-5">
          <h1 className="personajes-titulo text-center">Sobre Nosotros</h1>
        </div>
        <img className="fondo-nosotros mt-3 w-100" src="./Fondo Nosotros.png" alt="" style={{ height: "auto", maxHeight: "200px", objectFit: "cover" }} />
      </section>

      <section className="nosotros-section">
        <div className="container">
          <div className="row justify-content-center g-4">
            {[
              { nombre: "Matheo", rol: "Ilustrador" },
              { nombre: "Luis",   rol: "Animador" },
              { nombre: "Sneyder",rol: "Programador" },
            ].map(({ nombre, rol }) => (
              <div key={nombre} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <div className="nosotros-card text-center">
                  <img className="nosotros-img" src="./User.png" alt={nombre} />
                  <h2 className="nosotros-nombre">{nombre}</h2>
                  <p className="desc-nosotros">{rol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <h1 className="section-title" id="personajes">Personajes</h1>
      <div className={`app-wrapper ${selectedCharacter ? "blurred" : ""}`}>
        <div className="wood-background">
          <div className="container">
            <div className="row justify-content-center g-3 mt-3">
              {characters.map((char) => (
                <div key={char.id} className="col-6 col-md-4 col-lg-2 d-flex justify-content-center">
                  <div
                    className="character-card"
                    style={{ "--card-color": char.color }}
                    onClick={() => openModal(char)}
                  >
                    <div className="character-avatar-ring">
                      <div className="character-avatar">
                        <img src={char.image} alt={char.name} />
                      </div>
                    </div>
                    <div className="character-name-badge">
                      <span>{char.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedCharacter && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-card"
              style={{ "--card-color": selectedCharacter.color }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-avatar-ring">
                <div className="modal-avatar">
                  <img src={selectedCharacter.image} alt={selectedCharacter.name} />
                </div>
              </div>
              <div className="modal-content-box">
                <p className="modal-description">{selectedCharacter.description}</p>
                <button className="modal-back-btn" onClick={closeModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="modal-name-badge">
                <span>{selectedCharacter.name}</span>
              </div>
            </div>
          </div>
        )}
      </div>


      <section id="inlec" className="masinlec-section">
        <h1 className="personajes-titulo text-center">Mas sobre Inlec</h1>
        <div className="container">
          <div className="row align-items-center g-4 py-4">
            <div className="col-12 col-md-5 text-center">
              <img className="img-fluid rounded-3" src="./Desing.png" alt="" style={{ maxHeight: "300px" }} />
            </div>
            <div className="col-12 col-md-7">
              <p className="masinlec-descripcion">
                Transformar la lectura en una experiencia innovadora es el objetivo principal de Inlec, la tecnología se combina con la interactividad y las animaciones para invitarte a explorar de una manera más libre y diversa. Nuestro objetivo es crear un espacio digital en el que cada usuario se sienta cómodo y con total control sobre lo que ve, hace y desea descubrir que la lectura deje de sentirse como una carga y ahora se transforme en algo opcional algo libre.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center g-2 pb-4">
            <div className="col-12 col-sm-auto">
              <a href="https://link.com" className="btn rounded-pill masinlec-btn w-100">Pitchbook</a>
            </div>
            <div className="col-12 col-sm-auto">
              <a href="https://no-encontramos-el-manual.com" className="btn rounded-pill masinlec-btn w-100">Manual de Marca</a>
            </div>
            <div className="col-12 col-sm-auto">
              <a href="https://drive.google.com/file/d/1e5cmCOQF_4gsQkQozgmIcsRdFBAx2dAW/view?usp=sharing" className="btn rounded-pill masinlec-btn w-100">Moodboard</a>
            </div>
          </div>
        </div>
      </section>


      <section id="contacto" className="footer-section">
        <h1 className="personajes-titulo text-center">Mas Información</h1>
        <div className="container py-4">
          <div className="row g-4 justify-content-center align-items-start">

            <div className="col-12 col-md-4 text-center">
              <img className="img-fluid" src="./Logo Horizontal - Inlec.png" alt="Logo Inlec" style={{ maxWidth: "210px" }} />
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <img src="./Contacto.png" alt="" style={{ width: "60px", height: "55px" }} />
                <span className="footer-titulo">Contacto</span>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <img src="./Siguenos.png" alt="" style={{ width: "60px", height: "56px" }} />
                <span className="footer-titulo">Síguenos</span>
              </div>
              <p className="footer-redes">Instagram</p>
              <p className="footer-redes">Tiktok</p>
              <p className="footer-redes">inlec.co@gmail.com</p>
              <p className="footer-redes">+57 123 456789</p>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};