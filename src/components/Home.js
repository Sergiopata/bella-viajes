import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import DestinationSection from "./DestinationSection";
import Ofertas from "./Ofertas";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


// Estilos
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  padding: 20px;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: white;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);
  margin: 30px 0 20px 0;
`;

const ProvinciasButton = styled.button`
  background-image: url("/imagenes/mingo.jpeg");
  background-size: cover;
  background-position: center;
  border: 8px solid rgb(1, 74, 147);
  border-radius: 12px;
  cursor: pointer;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

const ButtonText = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  max-width: 80%;
`;

const MingoContainer = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProvinciasContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: relative;
  padding: 30px 20px 20px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.95);
  margin: 30px auto;
  max-width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  color: #333;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #d32f2f;
    transform: scale(1.1);
  }
`;

const provincias = [
  { nombre: "Buenos Aires", imagen: "/imagenes/buenos_aires.png" },
  { nombre: "Catamarca", imagen: "/imagenes/catamarca.png" },
  { nombre: "Chubut", imagen: "/imagenes/chubut.png" },
  { nombre: "Córdoba", imagen: "/imagenes/cordoba.png" },
  { nombre: "Entre Ríos", imagen: "/imagenes/entre_rios.png" },
  { nombre: "Jujuy", imagen: "/imagenes/jujuy.png" },
  { nombre: "La Rioja", imagen: "/imagenes/la_rioja.png" },
  { nombre: "Mendoza", imagen: "/imagenes/mendoza.png" },
  { nombre: "Misiones", imagen: "/imagenes/misiones.png" },
  { nombre: "Neuquén", imagen: "/imagenes/neuquen.png" },
  { nombre: "Río Negro", imagen: "/imagenes/rio_negro.png" },
  { nombre: "Salta", imagen: "/imagenes/salta.png" },
  { nombre: "San Juan", imagen: "/imagenes/san_juan.png" },
  { nombre: "San Luis", imagen: "/imagenes/san_luis.png" },
  { nombre: "Santa Cruz", imagen: "/imagenes/santa_cruz.png" },
  { nombre: "Santiago del Estero", imagen: "/imagenes/santiago_del_estero.png" },
  { nombre: "Tierra del Fuego", imagen: "/imagenes/tierra_fuego.png" },
  { nombre: "Tucumán", imagen: "/imagenes/tucuman.png" },
];

// Componente principal
const Home = () => {
  const [isProvinciasVisible, setProvinciasVisible] = useState(false);

  const location = useLocation();

useEffect(() => {
  if (location.state?.mostrarProvincias) {
    setProvinciasVisible(true);
  }
}, [location]);


  const toggleProvincias = () => {
    setProvinciasVisible(!isProvinciasVisible);
  };

  return (
    <div>
      <Title>BELLA VIAJES TE LLEVA A RECORRER ARGENTINA</Title>
      <Ofertas />

      <MingoContainer>
        <ProvinciasButton onClick={toggleProvincias}>
          <ButtonText>Provincias Argentinas Click!</ButtonText>
        </ProvinciasButton>
      </MingoContainer>

      <ProvinciasContainer isVisible={isProvinciasVisible}>
        <CloseButton onClick={toggleProvincias}>
          <FaTimes />
        </CloseButton>

        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Seleccioná una provincia para comenzar tu viaje
        </h2>

        <GridContainer>
          {provincias.map((provincia) => (
            <DestinationSection
              key={provincia.nombre}
              title={provincia.nombre}
              bgImage={provincia.imagen}
              link={`/paquetes/${provincia.nombre.toLowerCase().replace(/\s+/g, "_")}`}
            />
          ))}
        </GridContainer>
      </ProvinciasContainer>
    </div>
  );
};

export default Home;
