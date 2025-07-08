import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Oferta from "./Oferta";
import OfertaModal from "./OfertaModal";

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-image: linear-gradient(rgba(0, 51, 102, 0.46), rgb(0, 51, 102)), url('/imagenes/mendo.png');
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 15px;
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
`;

const Ofertas = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const ofertas = [
    { titulo: "Vuelos en oferta", imagen: "/imagenes/vuelos.jpg", descripcion: "Descubrí ofertas en vuelos nacionales e internacionales." },
    { titulo: "Paquetes en oferta", imagen: "/imagenes/paquetes.jpg", descripcion: "Todo incluido: vuelo, hotel, traslados y más." },
    { titulo: "Alojamiento", imagen: "/imagenes/hoteles.jpg", descripcion: "Hoteles y alojamientos con descuentos increíbles." },
    { titulo: "Excursiones únicas", imagen: "/imagenes/excursiones.png", descripcion: "Actividades y tours para todos los gustos." },
    { titulo: "Escapadas de finde", imagen: "/imagenes/escapadas.png", descripcion: "Mini vacaciones perfectas para desconectar." },
    { titulo: "Viajes grupales", imagen: "/imagenes/viajes grupales.jpg", descripcion: "Salidas en grupo con coordinación y diversión asegurada." },
    { titulo: "Cruceros", imagen: "/imagenes/cruceros.png", descripcion: "Viajá en un crucero de lujo por el Caribe y más destinos." },
    { titulo: "Rent a Car", imagen: "/imagenes/rentacar.png", descripcion: "Alquilá un auto para tu viaje al mejor precio." }
  ];

  const handleOpenModal = (oferta) => {
    // En lugar de redirigir a la ruta "/viajes-grupales", abrimos el modal
    setModalContent(oferta);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  // Llamar a WhatsApp cuando se haga clic en "Quiero más info"
  const handleWhatsApp = () => {
    window.open("https://wa.me/541130414691?text=¡Hola!%20Estoy%20interesado%20en%20más%20información%20sobre%20las%20ofertas.", "_blank");
  };

  return (
    <Container>
      <Title>¡Las mejores ofertas para tu viaje están acá! 🌍</Title>
      <OffersGrid>
        {ofertas.map((oferta, index) => (
          <Oferta
            key={index}
            imagen={oferta.imagen}
            titulo={oferta.titulo}
            onClick={() => handleOpenModal(oferta)}
          />
        ))}
      </OffersGrid>
      {modalOpen && (
        <OfertaModal 
          content={modalContent} 
          onClose={handleCloseModal} 
          onWhatsAppClick={handleWhatsApp}  // Pasamos la función aquí
        />
      )}
    </Container>
  );
};

export default Ofertas;
