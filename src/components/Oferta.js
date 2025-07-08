import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease-in-out;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const Text = styled.h3`
  font-size: 1.2rem;
  color: #005f9e;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: rgb(239, 60, 0);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #005f9e;
  }
`;

const Oferta = ({ imagen, titulo, onClick }) => {
  return (
    <Card>
      <Image src={imagen} alt={titulo} />
      <Text>{titulo}</Text>
      <Button onClick={onClick}>Ver más</Button>
    </Card>
  );
};

Oferta.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Oferta;
