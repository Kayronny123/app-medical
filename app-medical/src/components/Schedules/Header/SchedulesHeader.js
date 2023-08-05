
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Schedules = () => {
//   const navigate = useNavigate();

//   const handleGoBack = () => {
//     navigate('/agendamento');
//   };

//   return (
//     <div>
//       <h2>Agende uma consulta</h2>
//       <button onClick={handleGoBack}>Agendar para a Home</button>
//       {/* Conteúdo da página de consulta de agendamentos */}
//     </div>
//   );
// };

// export default Schedules;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ScheduleHeading, ScheduleButton,ScheduleContainer } from './style'; // Certifique-se de ajustar o caminho conforme a estrutura do seu projeto

const Schedules = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/agendamento');
  };

  return (
    <div>
      <ScheduleContainer>
      <ScheduleHeading>Agende uma consulta</ScheduleHeading>
      <ScheduleButton onClick={handleGoBack}>Agendar</ScheduleButton>
      {/* Conteúdo da página de consulta de agendamentos */}
      </ScheduleContainer>
    </div>
  );
};

export default Schedules;





