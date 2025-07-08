import React, { useState } from "react";
import styled from "styled-components";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const { nombre, email, mensaje } = formData;
    const phoneNumber = "5491130414691"; // Número de WhatsApp con código de país
    const text = `Hola, soy ${nombre}. Mi correo es ${email}. Quiero consultar lo siguiente: ${mensaje}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <ContactContainer>
      <h2>Contacto</h2>
      <p>Déjanos tu consulta y te responderemos lo antes posible.</p>
      <Form>
        <Input
          type="text"
          name="nombre"
          placeholder="Tu Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Tu Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="mensaje"
          placeholder="Tu Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
        <WhatsAppButton type="button" onClick={handleWhatsApp}>
          Enviar por WhatsApp
        </WhatsAppButton>
      </Form>
    </ContactContainer>
  );
};

export default Contacto;

// Estilos con styled-components
const ContactContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100px;
  resize: none;
`;

const WhatsAppButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background: #25d366;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1ebe5d;
  }
`;
