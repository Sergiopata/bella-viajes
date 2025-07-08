import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background-color:rgb(0, 31, 204);
  }
`;

const WhatsAppButton = styled.button`
  background-color: #25d366;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background-color: #128c7e;
  }
`;

const OfertaModal = ({ content, onClose, onWhatsAppClick }) => {
  if (!content) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>{content.titulo}</h2>
        <p>{content.descripcion}</p>
        <img src={content.imagen} alt={content.titulo} style={{ width: '100%', borderRadius: '10px' }} />
        <CloseButton onClick={onClose}>Cerrar</CloseButton>
        <WhatsAppButton onClick={onWhatsAppClick}>Quiero más info</WhatsAppButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default OfertaModal;
