import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeHeader = () => {
  const navigate = useNavigate();

  const HandleHomeClick = () => {
    navigate('/');
  };

  return (
    <header>
      <nav>
        <ul>
          <h2>Voltar para pagina principal</h2>
            <button onClick={HandleHomeClick}>Voltar</button>
          {/* Outros links do menu */}
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
