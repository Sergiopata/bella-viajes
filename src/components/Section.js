import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SectionContainer = styled.div`
  background-image: ${({ $bgImage }) => $bgImage};
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 20px;
  border-radius: 10px;
  margin: 15px 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    z-index: 1;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover::before {
    background: rgba(0, 123, 255, 0.4);
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;
`;

const SectionText = styled.p`
  font-size: 16px;
  max-width: 80%;
  position: relative;
  z-index: 2;
`;

const SectionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1000;
  flex-direction: column;
  color: black;
  font-size: 24px;
`;

const LoadingText = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  animation: fadeInOut 2s ease-in-out infinite;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Section = ({ title, text, bgImage, route }) => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
    setTimeout(() => navigate(route), 500);
  };

  return (
    <>
      <SectionContainer $bgImage={`url(${bgImage})`} onClick={handleClick}>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{text}</SectionText>
      </SectionContainer>
      {showOverlay && (
        <SectionOverlay>
          <h1>{title}</h1>
          <LoadingText>Cargando información...</LoadingText>
        </SectionOverlay>
      )}
    </>
  );
};

export default Section;