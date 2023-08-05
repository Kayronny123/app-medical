// SearchHeader.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Nav, Title, Button } from './style'; 

const SearchHeader = () => {
  const navigate = useNavigate();

  const handleAgendamentosClick = () => {
    navigate('/pesquisa');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Title>Pesquise seu agendamento</Title>
        <Button onClick={handleAgendamentosClick}>Pesquisar</Button>
      </Nav>
    </HeaderContainer>
  );
};

export default SearchHeader;
