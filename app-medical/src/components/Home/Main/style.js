import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 20px;
  margin-top: 80px;
  min-width: 200px;
  max-width: 1060px;
`;


export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 10px;
  border: 1px solid black;
  min-width: 200px;
  max-width: 260px;
`;
export const SpecialityButton = styled.button`
  background-color: #006400; 
  color: #fff;
  border: 2px solid #006400; 
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer; 
  margin-top: auto;
  display: block;
  width: 100%; 
  &:hover {
    background-color: #fff; 
    color: #006400; 
  }
`;

