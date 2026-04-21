import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 16px;
`;

const Text = styled.p`
  max-width: 720px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #444;
`;

const Sobre = () => {
  return (
    <Container>
      <Title>Sobre o sistema</Title>
      <Text>
        Este projeto é um CRUD de usuários com validação de CPF, separado em
        frontend React, API principal em Node.js e uma API auxiliar para validar
        CPF.
      </Text>
    </Container>
  );
};

export default Sobre;