import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background: linear-gradient(to bottom right,rgb(26, 109, 185),rgba(249, 250, 255, 0.94));
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  margin: 30px auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #333;

  @media (max-width: 600px) {
    padding: 20px;
    margin: 15px;
  }
`;

const Label = styled.label`
  font-weight: 600;
  display: block;
  margin-top: 15px;
  font-size: 0.95rem;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 180px;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`;

const Button = styled.button`
  background:rgba(38, 130, 10, 0.9);
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;
  width: 100%;
  transition: background 0.3s ease;

  &:hover {
    background:rgb(16, 192, 24);
  }
`;

const PaqueteForm = () => {
  const [formData, setFormData] = useState({
    origen: "",
    destino: "",
    fechaInicio: "",
    fechaFin: "",
    pasajeros: 1,
    menores: 0,
    edadesMenores: [],
    sumarOtraCiudad: false,
    otraCiudad: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    if (name === "menores") {
      const numMenores = parseInt(value, 10) || 0;
      setFormData({
        ...formData,
        menores: numMenores,
        edadesMenores: new Array(numMenores).fill(""),
      });
    } else {
      setFormData({ ...formData, [name]: newValue });
    }
  };

  const handleEdadMenorChange = (index, value) => {
    const nuevasEdades = [...formData.edadesMenores];
    nuevasEdades[index] = value;
    setFormData({ ...formData, edadesMenores: nuevasEdades });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.origen || !formData.destino || !formData.fechaInicio || !formData.fechaFin) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const mensaje = `🌍 *Nueva consulta de viaje* ✈️

📍 *Origen:* ${formData.origen}
📍 *Destino:* ${formData.destino}
📅 *Desde:* ${formData.fechaInicio} 
📅 *Hasta:* ${formData.fechaFin}
👨‍👩‍👧 *Pasajeros:* ${formData.pasajeros}
👶 *Menores:* ${formData.menores} ${
      formData.menores > 0 ? `\n🎈 *Edades:* ${formData.edadesMenores.join(", ")}` : ""
    }
${
  formData.sumarOtraCiudad
    ? `🏙️ *Ciudad adicional:* ${formData.otraCiudad}`
    : "🏙️ *No se agregaron ciudades adicionales.*"
}

✈️ Bella Viajes tu manera más fácil de viajar.`;

    const numeroWhatsApp = "5491130414691";
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");
  };

  return (
    <FormContainer>
      <h2>📋 Personaliza tu viaje</h2>
      <form onSubmit={handleSubmit}>
        <Label>📍 Origen:</Label>
        <Input type="text" name="origen" value={formData.origen} onChange={handleChange} />

        <Label>🏝️ Destino:</Label>
        <Input type="text" name="destino" value={formData.destino} onChange={handleChange} />

        <CheckboxWrapper>
          <input
            type="checkbox"
            name="sumarOtraCiudad"
            checked={formData.sumarOtraCiudad}
            onChange={handleChange}
          />
          <Label>¿Agregar otra ciudad en el destino?</Label>
        </CheckboxWrapper>

        {formData.sumarOtraCiudad && (
          <>
            <Label>🏙️ Nombre de la ciudad:</Label>
            <Input type="text" name="otraCiudad" value={formData.otraCiudad} onChange={handleChange} />
          </>
        )}

        <InputWrapper>
          <div>
            <Label>📅 Desde:</Label>
            <Input type="date" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} />
          </div>

          <div>
            <Label>📅 Hasta:</Label>
            <Input type="date" name="fechaFin" value={formData.fechaFin} onChange={handleChange} />
          </div>
        </InputWrapper>

        <InputWrapper>
          <div>
            <Label>🧍 Adultos (a partir de 18 años):</Label>
            <Input
              type="number"
              name="pasajeros"
              value={formData.pasajeros}
              onChange={handleChange}
              min="1"
            />
          </div>

          <div>
            <Label>👶 Menores (hasta 17 años):</Label>
            <Input
              type="number"
              name="menores"
              value={formData.menores}
              onChange={handleChange}
              min="0"
              max="5"
            />
          </div>
        </InputWrapper>

        {formData.menores > 0 && (
          <div>
            <h4>🎈 Edades de los menores:</h4>
            <InputWrapper>
              {formData.edadesMenores.map((edad, index) => (
                <Input
                  key={index}
                  type="number"
                  placeholder={`Edad ${index + 1}`}
                  value={edad}
                  onChange={(e) => handleEdadMenorChange(index, e.target.value)}
                  min="0"
                  max="17"
                />
              ))}
            </InputWrapper>
          </div>
        )}

        <Button type="submit">📤 Enviar por WhatsApp</Button>
      </form>
    </FormContainer>
  );
};

export default PaqueteForm;