import React from 'react';
import { useNavigate } from 'react-router-dom';
import {CardContainer,Card,SpecialityButton} from './style'



const SpecialityCard = ({ name, value }) => {
  const navigate = useNavigate();

  const handleAgendarClick = () => {
    navigate('/agendamento');
  };

  return (
    <Card>
      <h3>{name}</h3>
      <p>Valor: R$ {value}</p>
      <SpecialityButton onClick={handleAgendarClick}>Agendar</SpecialityButton>
    </Card>
  );
};

const HomeMain = () => {
  const specialities = [
    { name: 'Dermatologista', value: 200 },
    { name: 'Neurologista', value: 250 },
    { name: 'Cardiologista', value: 180 },
    { name: 'Infectologista', value: 180 },
    { name: 'Medico do Tabalho', value: 180 },
    { name: 'Nutricionista', value: 180 },
    { name: 'Fonoaudiólogo ', value: 180 },
    { name: 'Geriatra', value: 180 },
    { name: 'Clínico Geral', value: 180 },

  ];
  const chunkSize = 1; 
  const groupedSpecialities = specialities.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <CardContainer>
      {groupedSpecialities.map((group, groupIndex) => (
        <div key={groupIndex}>
          {group.map((speciality, index) => (
            <SpecialityCard key={index} name={speciality.name} value={speciality.value} />
          ))}
        </div>
      ))}
    </CardContainer>
  );
};

export default HomeMain;
