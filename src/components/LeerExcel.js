import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 30px auto;
  padding: 15px;
  background-color: #f7f9fc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const FileInput = styled.input`
  display: block;
  margin: 0 auto 20px auto;
  cursor: pointer;
`;

const Message = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  color: ${props => props.error ? '#d9534f' : props.loading ? '#007bff' : '#000'};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  background-color: #007bff;
  color: white;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #cce5ff;
    cursor: pointer;
  }
`;

const LeerExcel = () => {
  const [paquetes, setPaquetes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setError('');
    setLoading(true);

    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);

      if (jsonData.length === 0) {
        setError('El archivo está vacío o no tiene datos válidos.');
        setLoading(false);
        return;
      }

      setPaquetes(jsonData);
      setLoading(false);
    };

    reader.onerror = () => {
      setError('Error leyendo el archivo.');
      setLoading(false);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <Container>
      <Title>Importar Paquetes desde Excel</Title>
      <FileInput type="file" accept=".xlsx, .xls" onChange={handleFile} />

      {loading && <Message loading>Cargando paquetes...</Message>}
      {error && <Message error>{error}</Message>}

      {paquetes.length > 0 && (
        <Table>
          <thead>
            <tr>
              <Th>Nombre</Th>
              <Th>Descripción</Th>
              <Th>Precio</Th>
              <Th>Duración</Th>
            </tr>
          </thead>
          <tbody>
            {paquetes.map((paquete, idx) => (
              <Tr key={idx}>
                <Td>{paquete.Nombre || paquete.name}</Td>
                <Td>{paquete.Descripción || paquete.description}</Td>
                <Td>{paquete.Precio || paquete.price}</Td>
                <Td>{paquete.Duración || paquete.duration}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default LeerExcel;
