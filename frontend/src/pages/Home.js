import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  background-color: #f5f5f5;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900; /* Negrito */
  text-transform: uppercase; /* Maiúsculo */
  color: rgb(0, 0, 0);
  margin-bottom: 30px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row; /* Organiza os cartões em linha */
  gap: 20px; /* Espaço entre os cartões */
  margin-bottom: 20px; /* Espaço abaixo dos cartões */
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 250px;
  background-color: #fff;
  border: 2px solidrgb(0, 0, 0);
  border-radius: 40px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
`;

const FeatureIcon = styled.i`
  font-size: 2rem;
  color: #2c73d2;
  margin-bottom: 10px;
`;

const FeatureTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 900; /* Negrito */
  margin-bottom: 5px;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  text-align: center;
`;

const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  width: 300px;
  background-color: #fff;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 30px; /* Espaço acima do quadro de links */
`;

const StyledLink = styled(Link)`
  margin: 10px 0;
  padding: 10px 1px;
  font-size: 1.2rem;
  font-weight: 900; /* Negrito */
  color: white;
  background-color: #2c73d2;
  text-decoration: none;
  border-radius: 20px;
  width: 100%;
  text-align: center;

  &:hover {
    background-color:#003074;
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>Sistema de cadastro de usuários</Title>
      <FeaturesContainer>
      <FeatureCard>
          <FeatureIcon className="fas fa-database" />
          <FeatureTitle>CRUD</FeatureTitle>
          <FeatureDescription>
            Conjunto de operações básicas para gerenciar dados em um sistema: Create, Read, Update e Delete.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon className="fas fa-user-plus" />
          <FeatureTitle>Create</FeatureTitle>
          <FeatureDescription>
            Adicione novos registros ao sistema, como criar um usuário.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon className="fas fa-search" />
          <FeatureTitle>Read</FeatureTitle>
          <FeatureDescription>
            Consulte e visualize informações já armazenadas. 
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon className="fas fa-edit" />
          <FeatureTitle>Update</FeatureTitle>
          <FeatureDescription>
            Altere ou modifique registros já existentes.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon className="fas fa-trash" />
          <FeatureTitle>Delete</FeatureTitle>
          <FeatureDescription>
            Remova registros cadastrados no sistema.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesContainer>
      <LinksBox>
        <StyledLink to="/sobre">Sobre Nós</StyledLink>
        <StyledLink to="/usuarios">Cadastro de Usuários</StyledLink>
      </LinksBox>
    </Container>
  );
};

export default Home;