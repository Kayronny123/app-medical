import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {CalendarContainer} from './style'
const HomeAside = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Aqui você pode fazer alguma ação com a data selecionada, como enviar para o servidor, atualizar um estado, etc.
  };
  const getTileClassName = ({ date, view }) => {
    // Exemplo: Estilizando células de dias com datas pares
    if (view === 'month' && date.getDate() % 2 === 0) {
      return 'custom-tile';
    }
    // Retorne uma string vazia ou null para não aplicar estilos adicionais a outras datas
    return null;
  };

  return (
    <div>
      <h2>Bem-vindo à página inicial!</h2>
      <div>
        <CalendarContainer>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileClassName={getTileClassName}
        />
        </CalendarContainer>
      </div>
      {/* Outro conteúdo da página de home */}
    </div>
  );
};

export default HomeAside;
