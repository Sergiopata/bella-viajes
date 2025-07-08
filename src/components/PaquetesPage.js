import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const paquetesData = {
  buenos_aires: [
    { nombre: "Obelisco", imagen: "obelisco.jpg" },
    { nombre: "La Boca", imagen: "la_boca.jpg" },
    { nombre: "Tigre", imagen: "tigre.jpg" },
  ],
  catamarca: [
    { nombre: "Fiambalá", imagen: "fiambala.jpg" },
    { nombre: "Ruta de los Seismiles", imagen: "ruta_seismiles.jpg" },
    { nombre: "Cuesta del Portezuelo", imagen: "cuesta_portezuelo.jpg" },
  ],
  chubut: [
    { nombre: "Península Valdés", imagen: "peninsula_valdes.jpg" },
    { nombre: "Parque Nacional Los Alerces", imagen: "pn_los_alerces.jpg" },
    { nombre: "Trevelin", imagen: "trevelin.jpg" },
  ],
  córdoba: [
    { nombre: "Valle de Calamuchita", imagen: "calamuchita.jpg" },
    { nombre: "Mina Clavero", imagen: "mina_clavero.jpg" },
    { nombre: "Villa Carlos Paz", imagen: "villa_carlos_paz.jpg" },
  ],
  entre_ríos: [
    { nombre: "Termas de Federación", imagen: "termas_federacion.jpg" },
    { nombre: "Parque Nacional El Palmar", imagen: "pn_el_palmar.jpg" },
    { nombre: "Colón", imagen: "colon.jpg" },
  ],
  jujuy: [
    { nombre: "Quebrada de Humahuaca", imagen: "humahuaca.jpg" },
    { nombre: "Purmamarca", imagen: "purmamarca.jpg" },
    { nombre: "Salinas Grandes", imagen: "salinas_grandes.jpg" },
  ],
  la_rioja: [
    { nombre: "Parque Nacional Talampaya", imagen: "talampaya.jpg" },
    { nombre: "Cuesta de Miranda", imagen: "cuesta_miranda.jpg" },
    { nombre: "Villa Unión", imagen: "villa_union.jpg" },
  ],
  mendoza: [
    { nombre: "Parque Provincial Aconcagua", imagen: "aconcagua.jpg" },
    { nombre: "Valle de Uco", imagen: "valle_uco.jpg" },
    { nombre: "Ciudad de Mendoza", imagen: "ciudad_mendoza.jpg" },
  ],
  misiones: [
    { nombre: "Cataratas del Iguazú", imagen: "iguazu.jpg" },
    { nombre: "Ruinas de San Ignacio", imagen: "san_ignacio.jpg" },
    { nombre: "Saltos del Moconá", imagen: "mocona.jpg" },
  ],
  neuquén: [
    { nombre: "San Martín de los Andes", imagen: "san_martin_andes.jpg" },
    { nombre: "Villa La Angostura", imagen: "villa_angostura.jpg" },
    { nombre: "Volcán Lanín", imagen: "volcan_lanin.jpg" },
  ],
  rio_negro: [
    { nombre: "Bariloche", imagen: "bariloche.jpg" },
    { nombre: "El Bolsón", imagen: "el_bolson.jpg" },
    { nombre: "Las Grutas", imagen: "las_grutas.jpg" },
  ],
  salta: [
    { nombre: "Cafayate", imagen: "cafayate.jpg" },
    { nombre: "Cachi", imagen: "cachi.jpg" },
    { nombre: "Salta Capital", imagen: "salta_capital.jpg" },
  ],
  san_juan: [
    { nombre: "Parque Provincial Ischigualasto", imagen: "ischigualasto.jpg" },
    { nombre: "Valle Fértil", imagen: "valle_fertil.jpg" },
    { nombre: "Dique de Ullum", imagen: "dique_ullum.jpg" },
  ],
  san_luis: [
    { nombre: "Merlo", imagen: "merlo.jpg" },
    { nombre: "Potrero de los Funes", imagen: "potrero_funes.jpg" },
    { nombre: "Parque Nacional Sierra de las Quijadas", imagen: "sierra_quijadas.jpg" },
  ],
  santa_cruz: [
    { nombre: "El Calafate", imagen: "el_calafate.jpg" },
    { nombre: "El Chaltén", imagen: "el_chalten.jpg" },
    { nombre: "Cueva de las Manos", imagen: "cueva_manos.jpg" },
  ],
  santiago_del_estero: [
    { nombre: "Termas de Río Hondo", imagen: "termas_rio_hondo.jpg" },
    { nombre: "Reserva Natural Copo", imagen: "reserva_copo.jpg" },
    { nombre: "Santiago del Estero Capital", imagen: "santiago_capital.jpg" },
  ],
  tierra_del_fuego: [
    { nombre: "Ushuaia", imagen: "ushuaia.jpg" },
    { nombre: "Parque Nacional Tierra del Fuego", imagen: "pn_tierra_fuego.jpg" },
    { nombre: "Canal Beagle", imagen: "canal_beagle.jpg" },
  ],
  tucumán: [
    { nombre: "Tafí del Valle", imagen: "tafi_valle.jpg" },
    { nombre: "San Miguel de Tucumán", imagen: "san_miguel.jpg" },
    { nombre: "Ruinas de Quilmes", imagen: "quilmes.jpg" },
  ],
};


const PaquetesPage = () => {
  const { provincia } = useParams();
  const [provinciaValida, setProvinciaValida] = useState(null);

  useEffect(() => {
    console.log("Provincia recibida:", provincia); // Verifica que provincia tenga el valor correcto

    if (provincia) {
      const provinciaKey = provincia.toLowerCase().replace(/-/g, "_"); // Normaliza
      if (paquetesData[provinciaKey]) {
        setProvinciaValida(provinciaKey);
      } else {
        setProvinciaValida(null);
      }
    }
  }, [provincia]);

  const paquetes = provinciaValida ? paquetesData[provinciaValida] : [];

  return (
    <Container>
      <NavBar>
        <NavLink to="/">Inicio</NavLink>
      </NavBar>

      <Content>
        <h1>Paquetes en {formatProvincia(provinciaValida)}</h1>
        {provinciaValida ? (
          paquetes.length > 0 ? (
            <PaqueteGrid>
              {paquetes.map((paquete, index) => (
                <PaqueteCard key={index}>
                  <Imagen src={paquete.imagen} alt={paquete.nombre} />
                  <h3>{paquete.nombre}</h3>
                </PaqueteCard>
              ))}
            </PaqueteGrid>
          ) : (
            <p>No hay paquetes disponibles</p>
          )
        ) : (
          <ErrorContainer>
            <h2>Provincia no encontrada</h2>
            <p>No se encontraron paquetes para esta provincia.</p>
            <Button to="/">Volver al Inicio</Button>
          </ErrorContainer>
        )}
      </Content>
    </Container>
  );
};

// Función para formatear el nombre de la provincia
const formatProvincia = (provincia) => {
  if (!provincia) return "Provincia no encontrada";
  return provincia
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default PaquetesPage;

// Estilos mejorados
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  text-align: center;
  padding: 20px;
`;

const Content = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
`;

const NavBar = styled.nav`
  width: 100%;
  background: #007bff;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;

const PaqueteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const PaqueteCard = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Imagen = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const Button = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background: #0056b3;
  }
`;

const ErrorContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ff0000;
  background: #ffe6e6;
  border-radius: 10px;
  max-width: 600px;
`;
