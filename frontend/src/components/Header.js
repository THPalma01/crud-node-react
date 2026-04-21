// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #2c73d2;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/usuarios">Usuários</StyledLink>
      <StyledLink to="/sobre">Sobre</StyledLink>
    </Nav>
  );
};

export default Header;