// components/Modal.js
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

const ModalText = styled.p`
  margin-top: 15px;
  font-size: 1rem;
  color: #333;
`;

const WhatsAppButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background-color: #1ebe5d;
  }
`;

const Modal = ({ oferta, onClose }) => {
  if (!oferta) return null;

  // Podés personalizar el número y el mensaje
  const whatsappURL = `https://wa.me/5491130414691?text=Hola! Estoy interesado/a en el viaje grupal: ${encodeURIComponent(oferta.titulo)}`;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>{oferta.titulo}</h2>
        <ModalImage src={oferta.imagen} alt={oferta.titulo} />
        <ModalText>{oferta.descripcion}</ModalText>
        <WhatsAppButton href={whatsappURL} target="_blank" rel="noopener noreferrer">
          Consultar por WhatsApp
        </WhatsAppButton>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
