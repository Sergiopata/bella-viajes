import React from "react";
import styled from "styled-components";
import PaqueteForm from "../components/PaqueteForm";

const PersonalizarPage = () => {
  const handleBuscar = (formData) => {
    console.log("Datos del formulario:", formData);
    alert("Búsqueda realizada con éxito!");
  };

  return (
    <Wrapper>
      <Title>Personalicemos tu Viaje 🛠️</Title>
      <Subtitle>Aquí podrás personalizar tu viaje a medida.</Subtitle>
      <FormContainer>
        <PaqueteForm onBuscar={handleBuscar} />
      </FormContainer>
    </Wrapper>
  );
};

export default PersonalizarPage;

// Estilos con styled-components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
`;






