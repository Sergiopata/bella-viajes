import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import provinciasData from "../../data/provinciasData";

// Contenedor principal
const Container = styled.div`
  width: 85%;
  max-width: 1000px;
  margin: 40px auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(3, 3, 3, 0.04);
  text-align: center;
`;

// Imagen principal de la provincia
const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

// Lista de atractivos turísticos
const AtractivosList = styled.ul`
  list-style: none;
  padding: 0;
`;

// Cada atractivo turístico
const AtractivoItem = styled.li`
  margin: 25px 0;
  padding: 20px;
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #cce5ff;  /* Azul claro al pasar el mouse */
    transform: scale(1.03);
  }
`;

// Imagen dentro de los atractivos turísticos
const AtractivoImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
`;

// Título principal
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #003366;
`;

// Títulos de secciones
const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #005bb5;
  margin-top: 20px;
`;

// Botón para regresar a la lista de provincias
const BackButton = styled.button`
  background-color: #005bb5;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 1.2rem;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003366;
  }
`;

// Función de normalización para convertir caracteres especiales y mayúsculas
const normalizeString = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_");
};

const ProvinciaDetallePage = () => {
  const { provincia } = useParams();
  const navigate = useNavigate();
  const normalizedProvincia = normalizeString(provincia);
  const data = provinciasData[normalizedProvincia];

  if (!data) {
    return (
      <Container>
        <h1>Provincia no encontrada</h1>
        <p>Por favor, elige una provincia válida.</p>
      </Container>
    );
  }

  return (
    <Container>
      {/* Botón para volver a la lista de provincias */}
      <BackButton onClick={() => navigate(-1)}>Volver</BackButton>


      <Title>{data.nombre}</Title>
      <Image src={data.imagen} alt={data.nombre} />

      <p>{data.descripcion}</p>

      <Subtitle>Atractivos Turísticos</Subtitle>
      <AtractivosList>
        {data.atractivos.map((atractivo, index) => (
          <AtractivoItem key={index}>
            <h3>{atractivo.nombre}</h3>
            <p>{atractivo.descripcion}</p>
            <AtractivoImage src={`/images/${atractivo.imagen}`} alt={atractivo.nombre} />
          </AtractivoItem>
        ))}
      </AtractivosList>
    </Container>
  );
};

export default ProvinciaDetallePage;
