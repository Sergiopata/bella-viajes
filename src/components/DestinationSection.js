import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: url(${(props) => props.bgImage}) center/cover no-repeat;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 128, 128, 0); /* transparente por defecto */
    transition: background 0.3s ease;
    z-index: 1;
  }

  &:hover::after {
    background: rgba(0, 128, 128, 0.4); /* celeste translúcido */
  }
`;

const ProvinceName = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 2;
`;

const DestinationSection = ({ title, bgImage, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);  // Navega al link especificado
  };

  return (
    <Section bgImage={bgImage} onClick={handleClick}>
      <ProvinceName>{title}</ProvinceName>
    </Section>
  );
};

export default DestinationSection;
