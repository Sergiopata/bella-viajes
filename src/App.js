import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";

import logo from "./assets/logo.png";
import whatsappIcon from "./assets/whatsapp.png";
import paquetesImg from "./assets/paquetes.jpeg";
import vuelosImg from "./assets/vuelos.jpg";
import excursionesImg from "./assets/excursiones.jpg";

import Home from "./components/Home";
import PaquetesPage from "./components/PaquetesPage";
import PersonalizarPage from "./components/PersonalizarPage";
import ExcursionesPage from "./components/ExcursionesPage";
import ProvinciaDetallePage from "./components/provincias/ProvinciaDetallePage";
import Footer from "./components/Footer";
import Section from "./components/Section";
import ImageBackground from "./components/ImageBackground"; // ✅ Import nuevo
import Contacto from "./components/Contacto";

// Navbar estilizado
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-image: linear-gradient(
      rgba(84, 122, 210, 0.7),
      rgba(0, 51, 102, 0.7)
    ),
    url("/imagenes/avion.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  position: relative;
  z-index: 2;

  img {
    width: 150px;
    cursor: pointer;
  }

  .menu-icon {
    display: none;
    cursor: pointer;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 20px;

    li {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }

    ul {
      display: ${({ $isMenuOpen }) => ($isMenuOpen ? "flex" : "none")};
      flex-direction: column;
      position: absolute;
      top: 60px;
      right: 20px;
      background-color: #003366;
      padding: 10px;
      border-radius: 5px;
      width: 150px;
    }
  }
`;

// Contenedor de secciones para ajustar el ancho
const SectionContainer = styled.div`
  max-width: 1200px;
  width: 85%;
  margin: 0 auto;
  padding: 40px 0;
`;

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <ImageBackground /> {/* ✅ Reemplazo del fondo */}

      <Navbar $isMenuOpen={isMenuOpen}>
        <img src={logo} alt="Bella Viajes Logo" onClick={() => navigate("/")} />
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul>
          <li onClick={() => navigate("/")}>Inicio</li>
          <li onClick={() => navigate("/paquetes")}>Paquetes</li>
          <li onClick={() => navigate("/contacto")}>Contacto</li>
        </ul>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paquetes" element={<PaquetesPage />} />
        <Route path="/paquetes/:provincia" element={<PaquetesPage />} />
        <Route path="/personalizar" element={<PersonalizarPage />} />
        <Route path="/excursiones" element={<ExcursionesPage />} />
        <Route path="*" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {location.pathname === "/" && (
        <SectionContainer>
          <Section
            title="Paquetes Recomendados ✈️"
            text="Explora nuestros paquetes exclusivos y disfruta de tu viaje soñado."
            $bgImage={paquetesImg}
            route="/paquetes"
          />
          <Section
            title="Personalicemos tu Viaje 🛠️"
            text="Crea el viaje perfecto según tus gustos y preferencias."
            $bgImage={vuelosImg}
            route="/personalizar"
          />
          <Section
            title="Excursiones & Inspiración 🌍"
            text="Descubre emocionantes excursiones y lugares que te inspirarán."
            $bgImage={excursionesImg}
            route="/excursiones"
          />
        </SectionContainer>
      )}

      <a
        href="https://wa.me/541130414691?text=Hola%20Bella%20Viajes,%20quiero%20info%20sobre..."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          width="60px"
          height="60px"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            zIndex: 2,
          }}
        />
      </a>

      <Footer />
    </div>
  );
};

export default App;
