import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #003366, #0066cc); /* Azul de tu agencia */
  color: white;
  text-align: center;
  padding: 15px 0;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const Icon = styled.a`
  font-size: 24px;
  color: white;
  transition: transform 0.3s ease, color 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    color: #ffcc00; /* Amarillo suave al pasar el mouse */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; {new Date().getFullYear()} Bella Viajes. Todos los derechos reservados.</p>
        <SocialIcons>
          <Icon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Icon>
          <Icon href="https://www.instagram.com/_bellaviajes_" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Icon>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
