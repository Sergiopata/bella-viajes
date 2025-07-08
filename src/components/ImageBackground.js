import React, { useState, useEffect } from "react";
import styled from "styled-components";

const imagenes = [
  "/imagenes/avion.png",
  "/imagenes/tren_del_fin.jpg",
  "/imagenes/mendo.png",
  "/imagenes/excursiones.jpg",
];
const DURACION_FADE = 800; // milisegundos
const INTERVALO_CAMBIO = 4000; // milisegundos

const ImageBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((currentIndex + 1) % imagenes.length);
      setFade(true);

      // Desactivar fade después de duración
      setTimeout(() => {
        setPrevIndex(null);
        setFade(false);
      }, DURACION_FADE);
    }, INTERVALO_CAMBIO);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Container>
      {/* Imagen anterior que hace fade out */}
      {prevIndex !== null && (
        <BackgroundImage
          src={imagenes[prevIndex]}
          fadeOut={fade}
          key={prevIndex}
        />
      )}
      {/* Imagen actual que hace fade in */}
      <BackgroundImage src={imagenes[currentIndex]} fadeOut={false} key={currentIndex} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: -1;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${props => (props.fadeOut ? 0 : 1)};
  transition: opacity ${DURACION_FADE}ms ease-in-out;

`;

export default ImageBackground;
